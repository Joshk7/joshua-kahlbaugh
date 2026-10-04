import Image from "next/image";
import { hero, person } from "@/data/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative grid min-h-[100svh] items-end overflow-hidden text-white"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/beach.webp"
          alt="Lake Superior shoreline near Duluth"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,44,54,0.45)_0%,rgba(10,44,54,0.18)_38%,rgba(10,44,54,0.78)_100%),linear-gradient(90deg,rgba(10,44,54,0.55),transparent_55%)]" />
      </div>

      <div className="relative z-1 mx-auto mb-14 w-[min(72rem,calc(100%-2rem))] max-w-[42rem] py-28 md:mb-16">
        <p className="animate-rise animate-rise-delay-1 font-display text-[clamp(3rem,10vw,5.6rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-balance">
          {person.name}
        </p>
        <h1 className="animate-rise animate-rise-delay-2 mt-4 max-w-[30rem] font-sans text-[clamp(1.05rem,2.4vw,1.35rem)] font-normal leading-snug text-pretty text-white/92">
          {hero.headline}
        </h1>
        <p className="animate-rise animate-rise-delay-3 mt-4 max-w-[30rem] text-[0.98rem] leading-relaxed text-white/82">
          {hero.support}
        </p>
        <div className="animate-rise animate-rise-delay-4 mt-6 flex flex-wrap gap-3">
          <a
            href="#experience"
            className="inline-flex min-h-11 items-center justify-center rounded-[0.35rem] border border-amber/70 bg-amber px-5 text-xs font-semibold tracking-[0.08em] text-lake-deep uppercase no-underline transition hover:-translate-y-px hover:bg-[color-mix(in_srgb,var(--amber)_85%,white)]"
          >
            View experience
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center rounded-[0.35rem] border border-white/45 bg-white/8 px-5 text-xs font-semibold tracking-[0.08em] text-white uppercase no-underline transition hover:-translate-y-px hover:bg-white/16"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
