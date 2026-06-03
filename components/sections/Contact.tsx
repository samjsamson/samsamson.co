"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="glass-strong rounded-3xl p-10 sm:p-14">
            <SectionHeading label="Contact" />

            <div className="mt-8 space-y-4 text-zinc-300">
              <p>
                <span className="text-zinc-500">Email · </span>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </p>
              <p>
                <span className="text-zinc-500">LinkedIn · </span>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  linkedin.com/in/samjsamson
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
