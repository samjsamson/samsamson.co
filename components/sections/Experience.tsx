"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-white/[0.06] px-6 pt-16 pb-24 lg:px-8 lg:pt-20 lg:pb-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="Experience" />

        <div className="space-y-8">
          {experience.map((job, index) => (
            <Reveal key={job.id} delay={index * 0.06}>
              <article className="glass-strong rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-medium text-white sm:text-2xl">
                      {job.company}
                    </h3>
                    <p className="mt-1 text-zinc-400">{job.role}</p>
                  </div>
                  <p className="font-mono text-sm text-zinc-500">{job.period}</p>
                </div>

                <ul className="mt-6 space-y-3">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-zinc-300 leading-relaxed"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {"link" in job && job.link && (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block text-sm text-zinc-400 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
                  >
                    {job.link.replace("https://", "")}
                  </a>
                )}

                {"images" in job && job.images.length > 0 && (
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {job.images.map((img) => (
                      <div
                        key={img.src}
                        className="overflow-hidden rounded-xl border border-white/10 bg-black"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={1024}
                          height={600}
                          className="h-auto w-full"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
