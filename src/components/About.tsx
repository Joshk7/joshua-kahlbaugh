import Image from "next/image";
import { about, person } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto w-[min(72rem,calc(100%-2rem))] py-24 md:py-28">
      <Reveal>
        <div className="mb-10 max-w-xl md:mb-14">
          <p className="text-xs font-semibold tracking-[0.16em] text-spruce uppercase">
            {about.lead}
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3rem)] text-lake-deep">
            Software Engineer with roots in Minnesota
          </h2>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid items-center gap-8 md:grid-cols-[minmax(14rem,22rem)_1fr] md:gap-14">
          <Image
            src="/images/me.webp"
            alt={`Portrait of ${person.name}`}
            width={900}
            height={1350}
            className="aspect-[3/4] w-full rounded-[0.2rem] object-cover object-[center_18%]"
          />

          <div className="grid gap-4">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? "text-[1.08rem] text-ink" : "text-ink-soft"}
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4 text-sm text-ink-soft">
              <span>
                <strong className="font-semibold text-lake">Based in</strong> {person.location}
              </span>
              <span>
                <strong className="font-semibold text-lake">Focus</strong> {person.title}
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
