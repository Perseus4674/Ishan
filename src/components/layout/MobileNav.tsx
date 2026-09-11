"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { navLinks } from "@/content/nav";
import { profile } from "@/content/profile";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/SocialIcons";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  activeId: string;
};

export function MobileNav({ open, onClose, activeId }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    lastFocused.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      lastFocused.current?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-nav"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="site navigation"
      hidden={!open}
      className="fixed inset-0 z-[60] bg-void md:hidden"
    >
      <div className="content-width flex h-16 items-center justify-between px-4 sm:px-6">
        <span className="text-sm font-semibold text-head">Menu</span>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-10 w-10 items-center justify-center rounded text-head"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      <nav aria-label="mobile primary" className="content-width px-4 pt-6 sm:px-6">
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <li key={link.id}>
                <Link
                  href={`/#${link.id}`}
                  onClick={onClose}
                  aria-current={isActive ? "true" : undefined}
                  className={`block border-b border-line py-4 text-2xl ${
                    isActive ? "text-amber" : "text-head"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex items-center gap-6">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Ishan's GitHub"
            className="text-muted hover:text-amber"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Ishan's LinkedIn"
            className="text-muted hover:text-amber"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${profile.links.email}`}
            aria-label="Email Ishan"
            className="text-muted hover:text-amber"
          >
            <MailIcon className="h-6 w-6" />
          </a>
        </div>
      </nav>
    </div>
  );
}
