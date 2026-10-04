import { contact, person } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-[min(72rem,calc(100%-2rem))] py-24 md:py-28">
      <Reveal>
        <div className="grid gap-6 border-y border-line py-8 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-12 md:py-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-spruce uppercase">
              Contact
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3rem)] text-lake-deep">
              {contact.lead}
            </h2>
            <p className="mt-3 max-w-lg text-ink-soft">{contact.body}</p>
          </div>

          <div className="grid gap-2.5">
            <a
              href={`mailto:${person.email}`}
              className="w-fit text-[1.05rem] text-lake no-underline transition hover:border-b hover:border-amber hover:text-lake-deep"
            >
              {person.email}
            </a>
            <a
              href={`tel:${person.phone.replaceAll("-", "")}`}
              className="w-fit text-[1.05rem] text-lake no-underline transition hover:border-b hover:border-amber hover:text-lake-deep"
            >
              {person.phone}
            </a>
            <a
              href={person.links.linkedin}
              className="w-fit text-[1.05rem] text-lake no-underline transition hover:border-b hover:border-amber hover:text-lake-deep"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={person.links.github}
              className="w-fit text-[1.05rem] text-lake no-underline transition hover:border-b hover:border-amber hover:text-lake-deep"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
