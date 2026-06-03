"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="Education" />

        <Reveal>
          <div className="glass-strong rounded-2xl p-8">
            <h3 className="text-xl font-medium text-white">{education.school}</h3>
            <p className="mt-2 text-zinc-400">{education.degree}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
