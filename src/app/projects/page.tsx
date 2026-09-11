import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsArchive } from "@/components/projects/ProjectsArchive";

export const metadata: Metadata = {
  title: "projects",
  description:
    "The full archive of Ishan Jain's projects — Talos and every other build, filterable by stack.",
};

export default function ProjectsPage() {
  return (
    <div className="content-width px-4 py-16 sm:px-6 sm:py-20">
      <Link href="/#systems" className="text-sm text-amber hover:underline">
        back home
      </Link>

      <div className="mt-6">
        <SectionHeading id="projects-heading">Projects</SectionHeading>
      </div>

      <p className="max-w-prose leading-relaxed text-muted">
        everything i&rsquo;ve built worth showing, in one place. filter by stack to find
        what you&rsquo;re looking for.
      </p>

      <div className="mt-10">
        <ProjectsArchive />
      </div>
    </div>
  );
}
