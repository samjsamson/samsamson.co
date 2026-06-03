"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { videos } from "@/lib/data";

export function Videos() {
  return (
    <section id="videos" className="scroll-mt-24 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="Videos" />

        <div className="space-y-16">
          {videos.map((video, index) => (
            <Reveal key={video.id} delay={index * 0.08}>
              <article>
                <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  {video.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-zinc-400">
                  {video.description}
                </p>
                <div className="glass-strong mt-8 overflow-hidden rounded-2xl border border-white/10">
                  <video
                    className="aspect-video w-full bg-black"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
