import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex gap-6 text-sm text-zinc-500">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-300"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-300"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-zinc-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
