import { SectionHeading } from "@/components/ui/SectionHeading";
import { nowEntries } from "@/content/now";

export function Now() {
  return (
    <section id="now" aria-labelledby="now-heading">
      <div className="content-width px-4 py-20 sm:px-6">
        <SectionHeading id="now-heading">Now</SectionHeading>

        <ul className="divide-y divide-line">
          {nowEntries.map((entry) => (
            <li key={entry.id} className="py-6 first:pt-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="text-xs text-muted">{entry.label}</span>
                <span className="text-xs text-muted">{entry.timeframe}</span>
              </div>

              <h3 className="mt-2 text-lg font-semibold text-head">
                {entry.heading}
              </h3>

              <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-muted">
                {entry.line}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
