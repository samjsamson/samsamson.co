"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/data";

const iconButtonClass =
  "flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-all hover:border-white/50 hover:bg-white/10";

const popoverClass =
  "absolute top-full right-0 z-50 mt-2 whitespace-nowrap rounded-xl border border-white/15 bg-zinc-950/95 px-4 py-3 text-sm text-zinc-200 shadow-2xl shadow-black/40 backdrop-blur-xl";

type Popover = "linkedin" | "github" | "email" | null;

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

export function SocialButtons({ className = "" }: { className?: string }) {
  const [openPopover, setOpenPopover] = useState<Popover>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openPopover) return;

    const onPointerDown = (event: PointerEvent) => {
      if (
        groupRef.current &&
        event.target instanceof Node &&
        !groupRef.current.contains(event.target)
      ) {
        setOpenPopover(null);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPopover(null);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openPopover]);

  const togglePopover = (popover: Exclude<Popover, null>) => {
    setOpenPopover((current) => (current === popover ? null : popover));
  };

  return (
    <div ref={groupRef} className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <button
          type="button"
          aria-label="Show LinkedIn URL"
          aria-expanded={openPopover === "linkedin"}
          aria-controls="linkedin-popover"
          onClick={() => togglePopover("linkedin")}
          className={iconButtonClass}
        >
          <LinkedInIcon />
        </button>

        {openPopover === "linkedin" && (
          <div id="linkedin-popover" role="status" className={popoverClass}>
            <span className="text-zinc-500">LinkedIn: </span>
            <span>linkedin.com/in/samjsamson</span>
          </div>
        )}
      </div>

      <div className="relative">
        <button
          type="button"
          aria-label="Show GitHub URL"
          aria-expanded={openPopover === "github"}
          aria-controls="github-popover"
          onClick={() => togglePopover("github")}
          className={iconButtonClass}
        >
          <Image
            src="/icons/github.png"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain invert"
          />
        </button>

        {openPopover === "github" && (
          <div id="github-popover" role="status" className={popoverClass}>
            <span className="text-zinc-500">GitHub: </span>
            <span>github.com/samjsamson</span>
          </div>
        )}
      </div>

      <div className="relative">
        <button
          type="button"
          aria-label="Show email address"
          aria-expanded={openPopover === "email"}
          aria-controls="email-popover"
          onClick={() => togglePopover("email")}
          className={iconButtonClass}
        >
          <EmailIcon />
        </button>

        {openPopover === "email" && (
          <div id="email-popover" role="status" className={popoverClass}>
            <span className="text-zinc-500">Email: </span>
            <span>{site.email}</span>
          </div>
        )}
      </div>
    </div>
  );
}
