"use client";

import { useEffect, useRef } from "react";
import { getPerseusLayout, perseusEdges } from "@/lib/perseus-stars";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type StarBody = {
  id: string;
  mag: number;
  hx: number;
  hy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type DustStar = {
  nx: number;
  ny: number;
  r: number;
  phase: number;
  speed: number;
};

const DUST_COUNT = 70;
const REPEL_RADIUS = 90;
const REPEL_STRENGTH = 2600;
const SPRING_K = 55;
const DAMPING = 9;

function magToRadius(mag: number) {
  return Math.max(1.4, 4.2 - mag * 0.6);
}

function magToAlpha(mag: number) {
  return Math.min(1, Math.max(0.45, 1.15 - mag * 0.14));
}

// Brightest stars burn warm white, faint ones settle toward pale amber.
function magToTint(mag: number) {
  const t = Math.min(1, Math.max(0, (mag - 1.79) / 2.57));
  const r = Math.round(255 - 23 * t);
  const g = Math.round(248 - 55 * t);
  const b = Math.round(235 - 95 * t);
  return `${r}, ${g}, ${b}`;
}

export function PerseusCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const layout = getPerseusLayout();
    const stars: StarBody[] = layout.map((star) => ({
      id: star.id,
      mag: star.mag,
      hx: 0,
      hy: 0,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
    }));

    const dust: DustStar[] = Array.from({ length: DUST_COUNT }, () => ({
      nx: Math.random(),
      ny: Math.random(),
      r: Math.random() * 1.1 + 0.4,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 1.2 + 0.5,
    }));

    let width = 0;
    let height = 0;
    let dpr = 1;

    function layoutHomes() {
      const size = Math.min(width, height) * 0.74;
      const offsetX = (width - size) / 2;
      const offsetY = (height - size) / 2;

      stars.forEach((star, i) => {
        const source = layout[i];
        const hx = offsetX + source.nx * size;
        const hy = offsetY + source.ny * size;
        star.hx = hx;
        star.hy = hy;
        if (star.x === 0 && star.y === 0) {
          star.x = hx;
          star.y = hy;
        }
      });
    }

    function resize() {
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      layoutHomes();
      if (reducedMotion) draw(0);
    }

    const pointer = { x: -9999, y: -9999, active: false };

    function onPointerMove(event: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    }

    function onPointerLeave() {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    }

    const starIndex = new Map(stars.map((s, i) => [s.id, i]));
    const edgePairs = perseusEdges
      .map(([a, b]) => [starIndex.get(a), starIndex.get(b)] as [number, number])
      .filter(([a, b]) => a !== undefined && b !== undefined);

    function draw(elapsedMs: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const elapsedSec = elapsedMs / 1000;

      ctx.save();
      dust.forEach((d) => {
        const twinkle = reducedMotion
          ? 0.55
          : 0.35 + 0.35 * (0.5 + 0.5 * Math.sin(elapsedSec * d.speed + d.phase));
        ctx.beginPath();
        ctx.fillStyle = `rgba(200, 206, 223, ${twinkle.toFixed(3)})`;
        ctx.arc(d.nx * width, d.ny * height, d.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      ctx.save();
      ctx.strokeStyle = "rgba(228, 179, 99, 0.18)";
      ctx.lineWidth = 1;
      edgePairs.forEach(([a, b]) => {
        const sa = stars[a];
        const sb = stars[b];
        ctx.beginPath();
        ctx.moveTo(sa.x, sa.y);
        ctx.lineTo(sb.x, sb.y);
        ctx.stroke();
      });
      ctx.restore();

      stars.forEach((star) => {
        const radius = magToRadius(star.mag);
        const alpha = magToAlpha(star.mag);

        const tint = magToTint(star.mag);

        const glow = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          radius * 4
        );
        glow.addColorStop(0, `rgba(${tint}, ${alpha * 0.5})`);
        glow.addColorStop(1, `rgba(${tint}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(star.x, star.y, radius * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${tint}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    let raf = 0;
    let lastTime = performance.now();

    function tick(now: number) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      stars.forEach((star) => {
        let fx = (star.hx - star.x) * SPRING_K;
        let fy = (star.hy - star.y) * SPRING_K;

        if (pointer.active) {
          const dx = star.x - pointer.x;
          const dy = star.y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < REPEL_RADIUS && dist > 0.01) {
            const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
            fx += (dx / dist) * force;
            fy += (dy / dist) * force;
          }
        }

        star.vx = (star.vx + fx * dt) * Math.exp(-DAMPING * dt);
        star.vy = (star.vy + fy * dt) * Math.exp(-DAMPING * dt);
        star.x += star.vx * dt;
        star.y += star.vy * dt;
      });

      draw(now);
      raf = requestAnimationFrame(tick);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    if (!reducedMotion) {
      canvas.addEventListener("pointermove", onPointerMove);
      canvas.addEventListener("pointerleave", onPointerLeave);
      raf = requestAnimationFrame(tick);
    }

    return () => {
      ro.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  return (
    <div ref={containerRef} className="h-full w-full">
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="An interactive star map of the constellation Perseus, its stars connected by faint lines, with ambient stars twinkling behind it."
      />
    </div>
  );
}
