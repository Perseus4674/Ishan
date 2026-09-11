import { profile } from "@/content/profile";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="content-width flex flex-col items-center gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>&copy; {new Date().getFullYear()} Ishan Jain. Built with Next.js, not a template.</p>

        <div className="flex items-center gap-5">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Ishan's GitHub"
            className="hover:text-mint"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Ishan's LinkedIn"
            className="hover:text-mint"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.links.email}`}
            aria-label="Email Ishan"
            className="hover:text-mint"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
