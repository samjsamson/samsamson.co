"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutParagraphs, site } from "@/lib/data";

export function Hero() {
  const [lead, ...rest] = aboutParagraphs;

  return (
    <section
      id="about"
      className="scroll-mt-24 px-6 pt-32 pb-20 sm:pt-36 sm:pb-24 lg:px-8 lg:pt-40 lg:pb-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(240px,300px)] lg:gap-x-20 lg:gap-y-0">
          <div className="max-w-xl lg:max-w-none">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[13px] tracking-[0.12em] text-zinc-500 uppercase"
            >
              {site.location}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-[2.75rem] font-semibold tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.25rem] lg:leading-[1.05]"
            >
              {site.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-4 text-lg text-zinc-400 sm:text-xl"
            >
              {site.title}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[280px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:max-w-none lg:pt-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
              <Image
                src="/images/sam.jpg"
                alt="Sam Samson"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 280px, 300px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="max-w-xl border-t border-white/[0.08] pt-10 lg:col-start-1 lg:row-start-2 lg:max-w-[34rem] lg:pt-12"
          >
            <p className="text-[1.0625rem] leading-[1.75] text-zinc-300 sm:text-lg sm:leading-[1.8]">
              {lead}
            </p>
            <div className="mt-6 space-y-5">
              {rest.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[1rem] leading-[1.7] text-zinc-500 sm:text-[1.0625rem] sm:leading-[1.75]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
