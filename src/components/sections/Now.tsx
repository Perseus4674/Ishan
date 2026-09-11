import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { nowEntries } from "@/content/now";

export function Now() {
  return (
    <section id="now" aria-labelledby="now-heading" className="content-width px-4 py-20 sm:px-6">
      <SectionHeading id="now-heading">Now</SectionHeading>

      <ul className="divide-y divide-line">
        {nowEntries.map((entry) => (
          <li key={entry.id} className="py-8 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                {entry.label}
              </span>
              <span className="font-mono text-xs text-muted">{entry.timeframe}</span>
            </div>

            <h3 className="mt-2 font-heading text-lg font-semibold text-head">
              {entry.heading}
            </h3>

            <BulletList items={entry.bullets} className="mt-4 max-w-prose" />
          </li>
        ))}
      </ul>
    </section>
  );
}
