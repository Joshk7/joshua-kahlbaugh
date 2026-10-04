import { experience, person } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-[min(72rem,calc(100%-2rem))] py-24 md:py-28">
      <Reveal>
        <div className="mb-10 max-w-xl md:mb-14">
          <p className="text-xs font-semibold tracking-[0.16em] text-spruce uppercase">
            Resume
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3rem)] text-lake-deep">
            {experience.lead}
          </h2>
          <p className="mt-3 text-ink-soft">{experience.intro}</p>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid gap-7">
          {experience.jobs.map((job) => (
            <article key={`${job.company}-${job.role}`} className="grid gap-3 border-b border-line pb-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2 md:gap-6">
                <div>
                  <h3 className="font-display text-[clamp(1.35rem,2.5vw,1.7rem)] text-lake-deep">
                    {job.role}
                  </h3>
                  <p className="font-medium text-spruce">
                    {job.company}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                  {"stack" in job && job.stack ? (
                    <p className="mt-1 text-sm text-ink-soft">{job.stack}</p>
                  ) : null}
                </div>
                <p className="text-sm tracking-[0.04em] text-ink-soft uppercase whitespace-nowrap">
                  {job.dates}
                </p>
              </div>
              <ul className="grid list-disc gap-2 pl-5 text-ink-soft marker:text-amber">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-9 grid gap-1 border-t border-line pt-6">
          <h3 className="font-display text-[1.45rem] text-lake-deep">Education</h3>
          <p className="text-ink">
            {experience.education.degree}, {experience.education.school} ·{" "}
            {experience.education.place}
          </p>
          <p className="text-ink-soft">
            {experience.education.minor} · {experience.education.honors} · GPA{" "}
            {experience.education.gpa}
          </p>
          <p className="text-sm text-ink-soft">{experience.education.dates}</p>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10">
          <h3 className="mb-4 font-display text-[1.45rem] text-lake-deep">Selected projects</h3>
          <div className="grid gap-7">
            {experience.projects.map((project) => (
              <div key={project.name} className="grid gap-3 border-b border-line pb-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2 md:gap-6">
                  <div>
                    <h4 className="font-display text-[clamp(1.35rem,2.5vw,1.7rem)] text-lake-deep">
                      {project.name}
                    </h4>
                    {"stack" in project && project.stack ? (
                      <p className="font-medium text-spruce">{project.stack}</p>
                    ) : null}
                  </div>
                  {"dates" in project && project.dates ? (
                    <p className="text-sm tracking-[0.04em] text-ink-soft uppercase whitespace-nowrap">
                      {project.dates}
                    </p>
                  ) : null}
                </div>
                <p className="text-ink-soft">{project.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={person.links.resumePdf}
            className="inline-flex min-h-11 items-center justify-center rounded-[0.35rem] bg-lake px-5 text-xs font-semibold tracking-[0.08em] text-white uppercase no-underline transition hover:-translate-y-px hover:bg-lake-deep"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download resume PDF
          </a>
          <a
            href={person.links.github}
            className="inline-flex min-h-11 items-center justify-center rounded-[0.35rem] border border-lake/35 px-5 text-xs font-semibold tracking-[0.08em] text-lake uppercase no-underline transition hover:-translate-y-px hover:bg-lake hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
