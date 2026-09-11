"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/content/profile";
import { PerseusCanvas } from "@/components/hero/PerseusCanvas";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      aria-label="intro"
      className="content-width grid grid-cols-1 items-center gap-10 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-2 md:gap-12 md:pb-24 md:pt-16"
    >
      <div className="order-1 h-[280px] sm:h-[340px] md:order-none md:h-[440px]">
        <PerseusCanvas />
      </div>

      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="order-2 md:order-none"
      >
        <h1 className="font-heading text-4xl font-semibold text-head sm:text-5xl">
          hi, ishan here.
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 animate-[blink_1s_step-end_infinite] bg-mint align-middle"
          />
        </h1>

        <p className="mt-6 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
          i build AI systems that keep their memory instead of losing it the
          moment you close the tab — a third-year CS student at Manipal
          University Jaipur, specialising in data science, currently building
          Talos and looking for what&rsquo;s next.
        </p>

        <div className="mt-8">
          <a
            href={`mailto:${profile.links.email}`}
            className="inline-flex items-center rounded-full bg-mint px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.03] motion-reduce:hover:scale-100"
          >
            say hi
          </a>
        </div>
      </motion.div>
    </section>
  );
}
