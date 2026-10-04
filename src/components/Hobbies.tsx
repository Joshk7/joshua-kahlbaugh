import Image from "next/image";
import { hobbies } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Hobbies() {
  return (
    <section id="hobbies" className="mx-auto w-[min(72rem,calc(100%-2rem))] py-24 md:py-28">
      <Reveal>
        <div className="mb-8 max-w-xl md:mb-10">
          <p className="text-xs font-semibold tracking-[0.16em] text-spruce uppercase">
            Hobbies
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3rem)] text-lake-deep">
            {hobbies.lead}
          </h2>
          <p className="mt-3 max-w-xl text-pretty text-ink-soft">{hobbies.intro}</p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-12 md:mt-12 md:gap-16">
        {hobbies.items.map((item, index) => (
          <Reveal key={item.title}>
            <article
              className={`grid items-center gap-5 md:gap-10 ${
                index % 2 === 1
                  ? "md:grid-cols-[1fr_1.15fr]"
                  : "md:grid-cols-[1.15fr_1fr]"
              }`}
            >
              <div
                className={`relative min-h-64 overflow-hidden rounded-[0.2rem] ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1600}
                  height={2133}
                  sizes="(min-width: 74rem) 37rem, (min-width: 48rem) 54vw, calc(100vw - 2rem)"
                  className="min-h-72 w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-[clamp(1.6rem,3vw,2.1rem)] text-lake-deep">
                  {item.title}
                </h3>
                <p className="mt-3 text-ink-soft">{item.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
