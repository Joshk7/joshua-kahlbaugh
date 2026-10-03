import { skills } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-[min(72rem,calc(100%-2rem))] py-24 md:py-28">
      <Reveal>
        <div className="mb-10 max-w-xl md:mb-14">
          <p className="text-xs font-semibold tracking-[0.16em] text-spruce uppercase">
            Skills
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3rem)] text-lake-deep">
            {skills.lead}
          </h2>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {skills.groups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 border-b border-line pb-2 font-display text-lg text-lake-deep">
                {group.label}
              </h3>
              <ul className="grid gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="relative pl-3.5 text-[0.95rem] text-ink-soft before:absolute before:top-[0.55em] before:left-0 before:h-1.5 before:w-1.5 before:rounded-[1px] before:bg-spruce"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
