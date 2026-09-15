import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="content-width px-4 py-14 sm:px-6">
        <SectionHeading id="contact-heading">Contact</SectionHeading>

        <div className="max-w-xl">
          <h3 className="text-2xl font-semibold text-head sm:text-3xl">
            Got something worth building?
          </h3>
          <p className="mt-4 leading-relaxed text-muted">
            I&rsquo;m open to internships, freelance work, and just talking shop
            about systems that remember things. Email is the fastest way to
            reach me.
          </p>
          <a
            href={`mailto:${profile.links.email}`}
            className="mt-8 inline-flex items-center rounded-full border border-line-2 px-8 py-4 text-base text-accent transition-colors hover:border-accent"
          >
            Say hi
          </a>
        </div>
      </div>
    </section>
  );
}
