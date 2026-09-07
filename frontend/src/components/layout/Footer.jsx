import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { siteConfig } from "../../data/siteConfig";
import EmailLink from "../ui/EmailLink";

const socialIcons = [
  { href: siteConfig.social.github, icon: FiGithub, label: "GitHub" },
  { href: siteConfig.social.linkedin, icon: FiLinkedin, label: "LinkedIn" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="container-main section-padding !py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg font-bold italic text-[var(--text-primary)]">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Copyright © {year}, All Rights Reserved
            </p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--text-secondary)]">
            {siteConfig.navLinks
              .filter((l) => l.id !== "home")
              .map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>

          <div className="flex gap-3">
            {socialIcons.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-secondary)] transition-all hover:border-[var(--border-glow)] hover:text-brand-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
            <EmailLink
              aria-label="Email"
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-secondary)] transition-all hover:border-[var(--border-glow)] hover:text-brand-400"
            >
              <FiMail className="h-5 w-5" />
            </EmailLink>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/30 transition-opacity hover:opacity-90"
      >
        <FiArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
