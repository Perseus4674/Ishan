import type { Project } from "@/content/projects";
import { StatusFlag } from "@/components/ui/StatusFlag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-panel p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-line-2 motion-reduce:hover:translate-y-0">
      <h3 className="font-heading text-lg font-semibold text-head">{project.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.blurb}</p>

      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-dim">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div className="mt-5">
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-mint hover:underline"
          >
            view repo
          </a>
        ) : (
          <StatusFlag label={project.status ?? "private"} />
        )}
      </div>
    </article>
  );
}
