import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PROJECTS } from '../data/portfolioData.ts';

export const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const totalCards = PROJECTS.length;

  const updateProgress = useCallback((progress: number) => {
    const clamped = Math.max(0, Math.min(1, progress));
    setScrollProgress(clamped);
    const activeIdx = Math.min(totalCards - 1, Math.round(clamped * (totalCards - 1)));
    setCurrentIndex(activeIdx);

    if (trackRef.current && viewportRef.current) {
      const maxScroll = Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth);
      trackRef.current.style.transform = `translateX(${-maxScroll * clamped}px)`;
    }
  }, [totalCards]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          if (!container) return;
          const rect = container.getBoundingClientRect();
          const totalDistance = container.offsetHeight - window.innerHeight;
          if (totalDistance <= 0) return;

          const currentY = -rect.top;
          const progress = currentY / totalDistance;
          updateProgress(progress);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [updateProgress]);

  const goToSlide = (index: number) => {
    const targetProgress = index / (totalCards - 1);
    updateProgress(targetProgress);
    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const totalDistance = containerRef.current.offsetHeight - window.innerHeight;
      window.scrollTo({
        top: containerTop + totalDistance * targetProgress,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative"
      style={{ minHeight: '260vh' }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center gap-8 overflow-hidden py-6">
        <div className="flex items-center gap-14 w-full px-8 max-md:flex-col max-md:items-start max-md:gap-6">
          {/* Title column */}
          <div className="shrink-0 w-[200px] max-md:w-auto">
            <div className="font-mono text-xs text-[var(--accent)] tracking-wider mb-2 uppercase">
              // Selected Work
            </div>
            <h2
              className="text-[clamp(34px,6vw,52px)] font-bold tracking-tight leading-[1.05]"
              style={{ fontFamily: 'var(--display)' }}
            >
              Projects
            </h2>
            <div className="flex items-center gap-3 mt-4">
              <span className="font-mono text-xs text-[var(--muted)] border-t border-[var(--line)] pt-3 inline-block">
                Scroll down ↓
              </span>
              <div className="flex items-center gap-1 border-t border-[var(--line)] pt-3">
                <button
                  type="button"
                  onClick={() => goToSlide(Math.max(0, currentIndex - 1))}
                  disabled={currentIndex === 0}
                  className="w-7 h-7 rounded border border-[var(--line)] flex items-center justify-center text-xs text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Previous project"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => goToSlide(Math.min(totalCards - 1, currentIndex + 1))}
                  disabled={currentIndex === totalCards - 1}
                  className="w-7 h-7 rounded border border-[var(--line)] flex items-center justify-center text-xs text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Next project"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Sliding viewport */}
          <div
            ref={viewportRef}
            className="relative flex-1 min-w-0 overflow-hidden h-[clamp(360px,52vh,480px)] max-md:w-full"
          >
            <div
              ref={trackRef}
              className="absolute top-0 left-0 flex h-full transition-transform ease-out"
              style={{ willChange: 'transform' }}
            >
              {PROJECTS.map((project, idx) => (
                <article
                  key={project.id}
                  className={`relative w-[min(580px,78vw)] shrink-0 pr-10 flex flex-col justify-center transition-opacity duration-300 ${
                    idx === currentIndex ? 'opacity-100' : 'opacity-60 hover:opacity-90'
                  }`}
                >
                  {/* Atmospheric Glow */}
                  <div
                    className="absolute top-1/2 left-[48%] -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full blur-[110px] opacity-25 pointer-events-none -z-10"
                    style={{
                      background: `radial-gradient(circle, ${project.glowColor}, transparent 70%)`,
                    }}
                  />

                  <div className="text-xs font-mono text-[var(--accent-dim)] mb-2 tracking-wider">
                    {project.context}
                  </div>

                  <h3
                    className="text-[clamp(28px,4vw,40px)] font-bold text-[var(--ink)] tracking-tight"
                    style={{ fontFamily: 'var(--display)' }}
                  >
                    {project.name}
                  </h3>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-[13.5px] text-[var(--accent)] hover:border-[var(--accent)] border-b border-[var(--accent-dim)] pb-0.5 w-fit transition-colors"
                    >
                      View live ↗
                    </a>
                  ) : (
                    <span className="inline-block mt-3 text-[13.5px] text-[var(--muted)]">
                      No live demo — local app
                    </span>
                  )}

                  <div className="mt-4 text-[15px] text-[#C7CCD1] leading-relaxed max-w-[62ch]">
                    <p>{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-[var(--muted)] px-2.5 py-1 bg-[var(--surface)] border border-[var(--line)]/60 rounded-[5px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar & Counter */}
        <div className="flex items-center gap-4 px-8 shrink-0">
          <div className="flex-1 h-[2px] bg-[var(--line)] relative overflow-hidden rounded-full">
            <div
              className="h-full bg-[var(--accent)] transition-all duration-150"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
          <span className="font-mono text-[12.5px] text-[var(--muted)] whitespace-nowrap">
            {String(currentIndex + 1).padStart(2, '0')} / {String(totalCards).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
};
