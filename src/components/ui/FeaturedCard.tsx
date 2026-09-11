import type { Project } from "@/content/projects";

export function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="grid gap-8 overflow-hidden rounded-xl border border-line bg-panel p-6 sm:p-8 md:grid-cols-2 md:gap-10 md:p-10">
      <div className="flex flex-col">
        <span className="mb-3 w-fit rounded-full border border-amber/40 px-3 py-1 font-mono text-xs text-amber">
          featured
        </span>
        <h3 className="font-heading text-2xl font-semibold text-head">{project.name}</h3>
        <p className="mt-4 leading-relaxed text-text">{project.blurb}</p>

        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="mt-6 w-fit text-sm text-amber hover:underline"
          >
            view showcase repo
          </a>
        )}
      </div>

      <div className="flex items-center justify-center rounded-lg border border-line bg-[radial-gradient(circle_at_30%_20%,rgba(228,179,99,0.10),transparent_70%)] bg-deep p-6">
        <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-muted sm:text-xs">
          {project.ascii}
        </pre>
      </div>
    </article>
  );
}
