"use client";

import { useMemo, useState } from "react";
import { projects } from "@/content/projects";
import { StatusFlag } from "@/components/ui/StatusFlag";

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
                  ? "border-amber bg-amber/10 text-amber"
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
          <li key={project.slug} className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="sm:w-48 sm:flex-shrink-0">
              <h3 className="text-base font-semibold text-head">
                {project.name}
              </h3>
              {project.featured && (
                <span className="mt-1 inline-block text-[11px] text-amber">
                  Featured
                </span>
              )}
            </div>

            <p className="flex-1 text-sm leading-relaxed text-muted">{project.blurb}</p>

            <div className="flex flex-col items-start gap-2 sm:w-40 sm:flex-shrink-0 sm:items-end">
              <ul className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-muted sm:justify-end">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-amber hover:underline"
                >
                  View repo
                </a>
              ) : (
                <StatusFlag label={project.status ?? "No public repo"} />
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
