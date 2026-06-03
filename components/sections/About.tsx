"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { aboutParagraphs } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="About" title="AI Operations Specialist" />

        <div className="space-y-6">
          {aboutParagraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <p className="text-lg leading-relaxed text-zinc-300 sm:text-xl sm:leading-relaxed">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
