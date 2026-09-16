import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData.ts';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="wrap">
        <div className="flex items-baseline justify-between mb-8 gap-4 border-b border-[var(--line)]/50 pb-4">
          <h2
            className="text-2xl font-semibold tracking-tight text-[var(--ink)]"
            style={{ fontFamily: 'var(--display)' }}
          >
            Notes &amp; Recognition
          </h2>
          <span className="font-mono text-xs text-[var(--muted)]">04 highlights</span>
        </div>

        <ul className="list-none divide-y divide-[var(--line)]">
          {ACHIEVEMENTS.map((item) => (
            <li key={item.id} className="flex gap-4 py-5 items-baseline">
              <span className="font-mono text-[var(--accent)] text-[13px] shrink-0 w-9 font-medium">
                {item.mark}
              </span>
              <div className="text-[15px]">
                <b className="font-semibold text-[var(--ink)]">{item.title}</b>
                <span className="text-[var(--muted)] text-sm block mt-1">
                  {item.subtitle}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
