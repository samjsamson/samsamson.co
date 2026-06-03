"use client";

import { Reveal } from "./Reveal";

export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title?: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-3xl">
      <h2 className="font-mono text-sm tracking-widest text-zinc-500 uppercase">
        {label}
      </h2>
      {title && title !== label && (
        <p className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </p>
      )}
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">{description}</p>
      )}
    </Reveal>
  );
}
