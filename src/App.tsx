import React, { useRef } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { MorphingPhoto } from './components/MorphingPhoto.tsx';
import { Projects } from './components/Projects.tsx';
import { Skills } from './components/Skills.tsx';
import { Marquee } from './components/Marquee.tsx';
import { Achievements } from './components/Achievements.tsx';
import { Footer } from './components/Footer.tsx';
import { PERSONAL_INFO } from './data/portfolioData.ts';

export default function App() {
  const heroPhotoSlotRef = useRef<HTMLDivElement | null>(null);
  const aboutPhotoSlotRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] selection:bg-[var(--accent)] selection:text-[#0C0E11]">
      <Navbar />

      {/* Floating morphing portrait that animates from Hero into About slot */}
      <MorphingPhoto
        heroSlotRef={heroPhotoSlotRef}
        aboutSlotRef={aboutPhotoSlotRef}
        src={PERSONAL_INFO.profilePhoto}
        alt={PERSONAL_INFO.name}
      />

      <main>
        <Hero heroPhotoSlotRef={heroPhotoSlotRef} />
        <About aboutPhotoSlotRef={aboutPhotoSlotRef} />
        <Projects />
        <Skills />
        <Marquee />
        <Achievements />
      </main>

      <Footer />
    </div>
  );
}
