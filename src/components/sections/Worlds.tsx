import { SectionHeading } from "@/components/ui/SectionHeading";
import { worldsCards } from "@/content/worlds";

export function Worlds() {
  return (
    <section id="worlds" aria-labelledby="worlds-heading">
      <div className="content-width px-4 py-14 sm:px-6">
        <SectionHeading id="worlds-heading">Worlds</SectionHeading>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {worldsCards.map((card) => (
            <article key={card.title} className="glass rounded-lg p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-head">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
