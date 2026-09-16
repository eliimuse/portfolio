import React from 'react';
import { MARQUEE_ITEMS } from '../data/portfolioData.ts';

export const Marquee: React.FC = () => {
  return (
    <div
      className="border-y border-[var(--line)] py-5 overflow-hidden whitespace-nowrap bg-[var(--surface)]/30"
      aria-hidden="true"
    >
      <div
        className="animate-marquee font-bold text-[clamp(20px,4vw,30px)]"
        style={{ fontFamily: 'var(--display)' }}
      >
        {/* First copy */}
        {MARQUEE_ITEMS.map((item, i) => (
          <span
            key={`m1-${i}`}
            className={`mr-10 transition-colors ${
              item.highlight
                ? 'text-transparent [-webkit-text-stroke:1px_var(--accent-dim)]'
                : 'text-transparent [-webkit-text-stroke:1px_var(--line)]'
            }`}
          >
            {item.text}
          </span>
        ))}
        {/* Duplicate copy for seamless loop */}
        {MARQUEE_ITEMS.map((item, i) => (
          <span
            key={`m2-${i}`}
            className={`mr-10 transition-colors ${
              item.highlight
                ? 'text-transparent [-webkit-text-stroke:1px_var(--accent-dim)]'
                : 'text-transparent [-webkit-text-stroke:1px_var(--line)]'
            }`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};
