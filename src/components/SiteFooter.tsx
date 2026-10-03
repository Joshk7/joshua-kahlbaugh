import { person } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-[min(72rem,calc(100%-2rem))] flex-wrap items-center justify-between gap-3 pb-11 pt-2 text-sm text-ink-soft">
      <p>
        <strong className="font-display font-semibold text-lake">{person.name}</strong>
        {" · "}
        {person.location}
      </p>
      <p>Built with Next.js & Tailwind CSS</p>
    </footer>
  );
}
