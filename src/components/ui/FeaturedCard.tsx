import type { Project } from "@/content/projects";

export function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="glass grid gap-8 overflow-hidden rounded-xl p-6 sm:p-8 md:grid-cols-[1fr_1.15fr] md:gap-10 md:p-10">
      <div className="flex min-w-0 flex-col">
        <span className="mb-3 w-fit rounded-full border border-accent/40 px-3 py-1 text-xs text-accent">
          Featured
        </span>
        <h3 className="text-2xl font-semibold text-head">{project.name}</h3>
        <p className="mt-4 leading-relaxed text-text">{project.blurb}</p>

        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="mt-6 w-fit text-sm text-accent hover:underline"
          >
            View showcase repo
          </a>
        )}
      </div>

      {/* Below md the card is only ~260px wide, where a 54-column diagram is
          either unreadably small or a scroll-box — so the card goes text-only. */}
      <div className="hidden min-w-0 items-center justify-center rounded-lg border border-line bg-[radial-gradient(circle_at_30%_20%,rgba(196,166,255,0.10),transparent_70%)] bg-panel-h p-6 md:flex">
        <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed text-text">
          {project.ascii}
        </pre>
      </div>
    </article>
  );
}
