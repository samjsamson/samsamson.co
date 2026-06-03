"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Featured RevOps / Enablement Projects"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.04}>
              <article className="glass group flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]">
                <span className="font-mono text-xs text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-medium leading-snug text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
