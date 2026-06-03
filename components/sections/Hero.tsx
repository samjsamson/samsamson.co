"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative px-6 pt-28 pb-20 lg:px-8 lg:pt-36 lg:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm tracking-wide text-zinc-500"
          >
            {site.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {site.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-xl text-zinc-400 sm:text-2xl"
          >
            {site.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-300 sm:text-xl sm:leading-relaxed"
          >
            {site.headline}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[280px] lg:max-w-none"
        >
          <div className="glass-strong relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/sam.jpg"
              alt="Sam Samson"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 280px, 320px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
