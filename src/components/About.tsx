import React from 'react';

interface AboutProps {
  aboutPhotoSlotRef: React.RefObject<HTMLDivElement | null>;
}

export const About: React.FC<AboutProps> = ({ aboutPhotoSlotRef }) => {
  return (
    <section id="about" className="py-32 max-sm:py-20 border-t border-[var(--line)]/50">
      <div className="wrap-wide flex items-center justify-center gap-16 flex-wrap max-lg:gap-10">
        <div className="w-[min(300px,90vw)] shrink-0">
          <div className="font-mono text-xs text-[var(--accent)] tracking-wider mb-2 uppercase">
            // Background
          </div>
          <h2
            className="text-[clamp(40px,6vw,56px)] font-bold mb-4 tracking-tight leading-none"
            style={{ fontFamily: 'var(--display)' }}
          >
            Hey!
          </h2>
          <p className="text-[#C7CCD1] text-[15px] leading-relaxed">
            I'm Soumeli, a developer based in Asansol, West Bengal — pre-final year IT student at
            Asansol Engineering College. I like problems more than I like finished answers.
          </p>
        </div>

        {/* Target slot for the morphing photo in About section */}
        <div
          ref={aboutPhotoSlotRef}
          id="aboutPhotoSlot"
          className="w-[clamp(260px,26vw,340px)] aspect-[4/5] shrink-0 invisible pointer-events-none rounded-[14px]"
          aria-hidden="true"
        />

        <div className="w-[min(360px,90vw)] shrink-0 space-y-4">
          <p className="text-[#C7CCD1] text-[15.5px] leading-relaxed">
            Outside of shipping projects, most of my time goes into solving problems for fun — I'm a
            5-star Python coder on HackerRank and placed 3rd in Compile or Cry, a competitive coding event.
            I like the puzzle-solving side of this as much as the building side.
          </p>
          <p className="text-[#C7CCD1] text-[15.5px] leading-relaxed">
            On the building side, I move fast under real deadlines — Fielda and Docly both went from
            idea to a live deployed demo for Google PromptWars.
          </p>
          <p className="text-[#C7CCD1] text-[15.5px] leading-relaxed">
            Right now I'm teaching myself computer vision, working through OpenCV and MediaPipe fundamentals
            with small projects like Volume in Air.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="font-mono text-[13px] text-[var(--ink)] hover:text-[var(--accent)] hover:border-[var(--accent)] border-b border-[var(--line)] pb-1 transition-colors inline-flex items-center gap-1"
            >
              Get in touch <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
