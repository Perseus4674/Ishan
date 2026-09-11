import type { Project } from "@/content/projects";
import { GithubIcon } from "@/components/ui/SocialIcons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-panel p-6 transition-colors hover:border-line-2">
      <h3 className="text-lg font-semibold text-head">{project.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.blurb}</p>

      <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-4">
        <ul className="flex min-w-0 flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="shrink-0 text-muted transition-colors hover:text-amber"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        ) : (
          <span className="shrink-0 text-xs text-muted">
            {project.status ?? "No public repo"}
          </span>
        )}
      </div>
    </article>
  );
}
