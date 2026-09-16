import React, { useState, useEffect, useRef } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData.ts';

export const Skills: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathWindowRef = useRef<HTMLDivElement | null>(null);

  const totalCategories = SKILL_CATEGORIES.length;

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
          const progress = Math.max(0, Math.min(1, currentY / totalDistance));
          const index = Math.min(totalCategories - 1, Math.round(progress * (totalCategories - 1)));
          setActiveIndex(index);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [totalCategories]);

  // Calculate vertical translation of the dot path to center the active dot
  const dotSpacing = 78; // 48px height + 30px gap
  const dotRadius = 24;
  const windowHeight = 360;
  const activeY = windowHeight / 2;
  const dotCenterLocal = activeIndex * dotSpacing + dotRadius;
  const translateY = activeY - dotCenterLocal;

  const activeCategory = SKILL_CATEGORIES[activeIndex];

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const totalDistance = containerRef.current.offsetHeight - window.innerHeight;
      const targetProgress = index / (totalCategories - 1);
      window.scrollTo({
        top: containerTop + totalDistance * targetProgress,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative"
      style={{ minHeight: '280vh' }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-12">
        <div className="wrap w-full">
          <div className="flex items-baseline justify-between mb-8 gap-4 border-b border-[var(--line)]/50 pb-4">
            <h2
              className="text-2xl font-semibold tracking-tight text-[var(--ink)]"
              style={{ fontFamily: 'var(--display)' }}
            >
              Skills &amp; Tech
            </h2>
            <span className="font-mono text-xs text-[var(--muted)] whitespace-nowrap">
              scroll or click
            </span>
          </div>

          <div className="grid grid-cols-[90px_1fr] max-sm:grid-cols-1 gap-8 items-center">
            {/* Vertical Path Window */}
            <div
              ref={pathWindowRef}
              className="relative h-[360px] max-sm:h-[120px] overflow-hidden flex justify-center before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-16 before:z-10 before:pointer-events-none before:bg-gradient-to-b before:from-[var(--bg)] before:to-transparent after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-16 after:z-10 after:pointer-events-none after:bg-gradient-to-t after:from-[var(--bg)] after:to-transparent"
            >
              <div
                className="absolute top-0 flex flex-col items-center gap-[30px] transition-transform duration-300 ease-out"
                style={{
                  transform: `translateY(${translateY}px)`,
                }}
              >
                {/* Vertical Center Line */}
                <div className="absolute left-1/2 -top-[400px] -bottom-[400px] w-[1px] bg-[var(--line)] -translate-x-1/2 -z-10" />

                {SKILL_CATEGORIES.map((cat, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleDotClick(idx)}
                      className={`relative z-10 w-12 h-12 rounded-full border font-mono text-[12.5px] flex items-center justify-center shrink-0 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-[var(--accent)] border-[var(--accent)] text-[#06110E] font-semibold scale-110 shadow-[0_0_20px_rgba(63,214,190,0.3)]'
                          : 'bg-[var(--bg)] border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent-dim)] hover:text-[var(--ink)]'
                      }`}
                      aria-label={`Select category ${cat.name}`}
                    >
                      {cat.number}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Panel */}
            <div className="min-h-[240px] pt-1 animate-panel key-[activeIndex]">
              <div className="font-mono text-xs text-[var(--accent)] tracking-wider mb-3">
                Category {activeCategory.number} / 06
              </div>
              <h3
                className="text-[clamp(28px,5vw,42px)] font-bold tracking-tight mb-3.5 text-[var(--ink)]"
                style={{ fontFamily: 'var(--display)' }}
              >
                {activeCategory.name}
              </h3>
              <p className="text-[#C7CCD1] max-w-[52ch] mb-6 text-[15.5px] leading-relaxed">
                {activeCategory.desc}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {activeCategory.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-4 py-2 rounded-[9px] border border-[var(--line)] bg-[var(--surface)] text-[#D3D7DB] hover:border-[var(--accent-dim)] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
