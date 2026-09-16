import React from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../data/portfolioData.ts';
import { SocialIcon } from './SocialIcons.tsx';

interface HeroProps {
  heroPhotoSlotRef: React.RefObject<HTMLDivElement | null>;
}

export const Hero: React.FC<HeroProps> = ({ heroPhotoSlotRef }) => {
  return (
    <header className="relative min-h-[calc(100vh-61px)] py-12 px-0 overflow-hidden flex flex-col justify-between">
      {/* Target slot for the morphing photo in Hero state */}
      <div
        ref={heroPhotoSlotRef}
        id="heroPhotoSlot"
        className="absolute top-1/2 right-[6%] -translate-y-1/2 w-[clamp(170px,19vw,260px)] h-[clamp(170px,19vw,260px)] invisible pointer-events-none max-sm:bottom-[12%] max-sm:top-auto max-sm:translate-y-0 max-sm:w-[110px] max-sm:h-[110px]"
        aria-hidden="true"
      />

      <div className="wrap-wide flex-1 flex flex-col justify-between h-full">
        <div className="flex-1 flex flex-col justify-center py-8 relative z-[1]">
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4 animate-rise-1">
            // Full-Stack &amp; Computer Vision
          </div>
          <h1
            className="font-bold tracking-tight uppercase leading-[0.94] text-[clamp(52px,11vw,150px)] animate-rise-1"
            style={{ fontFamily: 'var(--display)' }}
          >
            <span className="block">{PERSONAL_INFO.firstName}</span>
            <span className="block text-[#C7CCD1]">{PERSONAL_INFO.lastName}</span>
          </h1>
          <p
            className="text-[clamp(18px,2.4vw,24px)] text-[var(--muted)] mt-5 font-medium animate-rise-2 max-w-[42ch]"
            style={{ fontFamily: 'var(--display)' }}
          >
            Pre-final year IT student moving into computer vision &amp; building fast under real deadlines.
          </p>
        </div>

        <div className="flex items-end justify-between max-sm:flex-col max-sm:items-start gap-6 pt-4 border-t border-[var(--line)]/50">
          <div className="font-mono text-xs text-[var(--muted)] tracking-wider">
            BASED IN <b className="text-[var(--accent)] font-medium">ASANSOL, WB</b> · {PERSONAL_INFO.college.toUpperCase()}
          </div>

          <div className="flex items-center gap-3 max-sm:w-full">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={link.ariaLabel}
                title={link.title}
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-200 ${
                  link.solid
                    ? 'bg-[var(--accent)] text-[#06110E] border-[var(--accent)] hover:bg-[#55e0ca] hover:-translate-y-0.5'
                    : 'bg-[var(--surface)] text-[var(--ink)] border-[var(--line)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5'
                }`}
              >
                <SocialIcon type={link.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
