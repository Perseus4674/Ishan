import { SectionHeading } from "@/components/ui/SectionHeading";
import { research } from "@/content/research";

export function Research() {
  return (
    <section id="research" aria-labelledby="research-heading" className="content-width px-4 py-20 sm:px-6">
      <SectionHeading id="research-heading">Research</SectionHeading>

      <article className="rounded-xl border border-line bg-panel p-6 sm:p-8 md:p-10">
        <span className="mb-3 inline-block w-fit rounded-full border border-line-2 px-3 py-1 font-mono text-xs text-head">
          {research.status}
        </span>

        <h3 className="font-heading text-2xl font-semibold text-head">
          {research.heading}
        </h3>

        <p className="mt-4 max-w-prose leading-relaxed text-text">{research.blurb}</p>

        <ul className="mt-5 space-y-2">
          {research.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
          {research.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-muted">{research.closing}</p>
      </article>
    </section>
  );
}
