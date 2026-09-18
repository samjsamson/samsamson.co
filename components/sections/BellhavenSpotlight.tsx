"use client";

import { Reveal } from "@/components/ui/Reveal";
import { featuredProject } from "@/lib/data";

export function BellhavenSpotlight() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-6 pb-24 lg:px-8 lg:pb-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <article className="glass-strong overflow-hidden rounded-3xl p-7 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:gap-14">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium tracking-[0.12em] uppercase">
                  <span className="text-white">{featuredProject.label}</span>
                  <span className="text-zinc-700">/</span>
                  <span className="text-zinc-500">{featuredProject.date}</span>
                </div>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                  {featuredProject.title}
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                  {featuredProject.description}
                </p>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-500 sm:text-base">
                  {featuredProject.detail}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/10"
                >
                  View project on GitHub
                  <span aria-hidden>↗</span>
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <p className="font-mono text-xs tracking-[0.12em] text-zinc-600 uppercase">
                  Pipeline
                </p>

                <div className="mt-5 space-y-4">
                  {featuredProject.pipeline.map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <span className="font-mono text-xs leading-6 text-zinc-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-6 text-zinc-300">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 border-t border-white/[0.08] pt-6">
                  <p className="font-mono text-xs tracking-[0.12em] text-zinc-600 uppercase">
                    Result
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    {featuredProject.result}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
