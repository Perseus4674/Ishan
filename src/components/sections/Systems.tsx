import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedCard } from "@/components/ui/FeaturedCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { talos, nonFeaturedProjects } from "@/content/projects";

export function Systems() {
  return (
    <section id="systems" aria-labelledby="systems-heading" className="content-width px-4 py-20 sm:px-6">
      <SectionHeading id="systems-heading">Systems</SectionHeading>

      <FeaturedCard project={talos} />

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {nonFeaturedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-8">
        <Link href="/projects" className="text-sm text-amber hover:underline">
          view all projects
        </Link>
      </div>
    </section>
  );
}
