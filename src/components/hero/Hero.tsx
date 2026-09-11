"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/content/profile";
import { PerseusCanvas } from "@/components/hero/PerseusCanvas";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="hero" aria-label="intro" className="relative overflow-hidden">
      {/* A contained block above the text on mobile; a low-opacity backdrop
          behind it from md up. One canvas either way. */}
      <div className="h-[260px] w-full px-4 pt-8 sm:px-6 md:absolute md:inset-0 md:h-full md:p-0 md:opacity-60">
        <PerseusCanvas />
      </div>

      <div className="content-width relative px-4 pb-20 pt-10 sm:px-6 md:flex md:min-h-[620px] md:flex-col md:justify-center md:pb-28 md:pt-24">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="font-display text-6xl leading-[1.05] text-head sm:text-7xl">
            Ishan Jain
          </h1>

          <p className="mt-5 text-2xl text-text sm:text-3xl">
            I build systems that don&rsquo;t forget.
          </p>

          <p className="mt-6 leading-relaxed text-muted">
            i build AI systems that keep their memory instead of losing it the
            moment you close the tab — a third-year CS student at Manipal
            University Jaipur, specialising in data science, currently building
            Talos and looking for what&rsquo;s next.
          </p>

          <div className="mt-9">
            <a
              href={`mailto:${profile.links.email}`}
              className="inline-flex items-center rounded-full border border-amber px-6 py-2.5 text-sm text-amber transition-colors hover:bg-amber hover:text-void"
            >
              say hi
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
