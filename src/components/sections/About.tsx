import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutCopy } from "@/content/profile";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-deep">
      <div className="content-width px-4 py-20 sm:px-6">
        <SectionHeading id="about-heading">About</SectionHeading>

        <div className="grid gap-12 md:grid-cols-[1fr_300px] md:gap-16">
          <div>
            {aboutCopy.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-5 max-w-prose leading-relaxed text-text last:mb-0">
                {paragraph}
              </p>
            ))}

            <div className="mt-10">
              <h3 className="mb-4 text-xs text-muted">
                Core stack
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 max-w-sm">
                {aboutCopy.coreTech.map((column, i) => (
                  <ul key={i} className="space-y-2">
                    {column.map((tech) => (
                      <li key={tech} className="text-sm text-muted">
                        {tech}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-lg border border-line bg-panel p-6">
            <h3 className="mb-4 text-sm font-semibold text-head">
              At a glance
            </h3>
            <dl className="space-y-4">
              {aboutCopy.atAGlance.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm text-text">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
