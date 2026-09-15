"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionHeading({ children, id }: { children: string; id?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.h2
      id={id}
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-10 font-display text-3xl text-head sm:text-4xl"
    >
      {children}
    </motion.h2>
  );
}
