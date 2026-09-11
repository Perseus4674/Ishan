import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { research } from "@/content/research";

export function Research() {
  return (
    <section id="research" aria-labelledby="research-heading">
      <div className="content-width px-4 py-20 sm:px-6">
        <SectionHeading id="research-heading">Research</SectionHeading>

        <article className="rounded-xl border border-line bg-panel p-6 sm:p-8 md:p-10">
          <span className="mb-3 inline-block w-fit rounded-full border border-line-2 px-3 py-1 text-xs text-head">
            {research.status}
          </span>

          <h3 className="text-2xl font-semibold text-head">
            {research.heading}
          </h3>

          <p className="mt-4 max-w-prose leading-relaxed text-text">{research.blurb}</p>

          <BulletList items={research.points} className="mt-5" />

          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
            {research.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-muted">{research.closing}</p>
        </article>
      </div>
    </section>
  );
}
