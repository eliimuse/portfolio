import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData.ts';
import { SocialIcon } from './SocialIcons.tsx';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="min-h-[85vh] flex flex-col justify-between py-20 border-t border-[var(--line)]/60">
      <div className="wrap-wide flex flex-col justify-between flex-1">
        <div className="flex-1 flex flex-col justify-center py-10">
          <div className="font-mono text-xs text-[var(--accent)] tracking-wider mb-5">
            // let's build something
          </div>
          <h2
            className="text-[clamp(40px,9vw,108px)] leading-[0.98] tracking-tight font-bold max-w-[16ch] mb-10 uppercase text-[var(--ink)]"
            style={{ fontFamily: 'var(--display)' }}
          >
            Got something worth building?
          </h2>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--accent)] rounded-full text-sm font-semibold text-[#06110E] bg-[var(--accent)] hover:bg-[#55e0ca] transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              <SocialIcon type="email" className="w-4 h-4 fill-current" />
              {PERSONAL_INFO.email}
            </a>

            {SOCIAL_LINKS.filter((l) => l.id !== 'email').map((link) => (
              <a
                key={`foot-${link.id}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                title={link.title}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <SocialIcon type={link.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-3 pt-8 border-t border-[var(--line)]/40 text-xs font-mono text-[var(--muted)]">
          <span>{PERSONAL_INFO.name} © {currentYear}</span>
          <span>{PERSONAL_INFO.location}</span>
        </div>
      </div>
    </footer>
  );
};
