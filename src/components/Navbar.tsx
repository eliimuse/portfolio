import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-[var(--bg)] border-b border-[var(--line)]/40 sticky top-0 z-20 backdrop-blur-md bg-opacity-90">
      <div className="wrap-wide flex items-center justify-between h-[60px]">
        <a
          href="#"
          className="text-xs uppercase font-mono tracking-wider text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
        >
          // soumeli.dev
        </a>
        <ul className="flex items-center gap-6 list-none">
          <li>
            <a
              href="#about"
              className="text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#achievements"
              className="text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
            >
              Notes
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
