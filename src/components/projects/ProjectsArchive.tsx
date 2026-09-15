"use client";

import { useMemo, useState } from "react";
import { projects } from "@/content/projects";
import { GithubIcon } from "@/components/ui/SocialIcons";

export function ProjectsArchive() {
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => project.stack.forEach((tech) => tags.add(tech)));
    return Array.from(tags).sort();
  }, []);

  const [activeTags, setActiveTags] = useState<string[]>([]);

  const visibleProjects = useMemo(() => {
    if (activeTags.length === 0) return projects;
    return projects.filter((project) =>
      project.stack.some((tech) => activeTags.includes(tech))
    );
  }, [activeTags]);

  function toggleTag(tag: string) {
    setActiveTags((current) =>
      current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag]
    );
  }

  return (
    <div>
      <div role="group" aria-label="filter projects by stack" className="flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const isActive = activeTags.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={isActive}
              onClick={() => toggleTag(tag)}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                isActive
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-line-2 text-muted hover:text-text"
              }`}
            >
              {tag}
            </button>
          );
        })}
        {activeTags.length > 0 && (
          <button
            type="button"
            onClick={() => setActiveTags([])}
            className="rounded-full px-3 py-1.5 text-xs text-muted hover:text-text"
          >
            Clear
          </button>
        )}
      </div>

      <p aria-live="polite" className="mt-4 text-xs text-muted">
        {visibleProjects.length} of {projects.length} projects
      </p>

      <ul className="mt-6 divide-y divide-line border-y border-line">
        {visibleProjects.map((project) => (
          <li key={project.slug} className="py-8">
            <div className="flex items-baseline gap-3">
              <h3 className="text-base font-semibold text-head">
                {project.name}
              </h3>
              {project.featured && (
                <span className="text-[11px] text-accent">Featured</span>
              )}
            </div>

            <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
              {project.blurb}
            </p>

            <div className="mt-5 flex items-end justify-between gap-4 border-t border-line pt-4">
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
                  className="shrink-0 text-muted transition-colors hover:text-accent"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
              ) : (
                <span className="shrink-0 text-xs text-muted">
                  {project.status ?? "No public repo"}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>

      {visibleProjects.length === 0 && (
        <p className="mt-8 text-sm text-muted">Nothing matches that filter.</p>
      )}
    </div>
  );
}
