"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/content/nav";
import { profile } from "@/content/profile";
import { useScrollSpy } from "@/lib/useScrollSpy";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/SocialIcons";
import { MobileNav } from "@/components/layout/MobileNav";

const sectionIds = navLinks.map((link) => link.id);

export function Nav() {
  const pathname = usePathname();
  const activeId = useScrollSpy(pathname === "/" ? sectionIds : []);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="glass sticky top-0 z-50">
      <div className="content-width flex h-16 items-center justify-between px-4 sm:px-6">
        <Link
          href="/#hero"
          className="text-sm font-semibold tracking-wide text-head"
        >
          Ishan Jain
        </Link>

        <nav aria-label="primary" className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <Link
                    href={`/#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`text-sm transition-colors hover:text-accent ${
                      isActive ? "text-accent" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4 border-l border-line pl-6">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Ishan's GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Ishan's LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              aria-label="Email Ishan"
              className="text-muted transition-colors hover:text-accent"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded text-head md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} activeId={activeId} />
    </header>
  );
}
