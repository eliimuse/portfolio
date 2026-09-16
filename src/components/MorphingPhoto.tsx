import React, { useEffect, useRef, useState } from 'react';

interface MorphingPhotoProps {
  heroSlotRef: React.RefObject<HTMLDivElement | null>;
  aboutSlotRef: React.RefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
}

export const MorphingPhoto: React.FC<MorphingPhotoProps> = ({
  heroSlotRef,
  aboutSlotRef,
  src,
  alt,
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    const heroSlot = heroSlotRef.current;
    const aboutSlot = aboutSlotRef.current;

    if (!img || !heroSlot || !aboutSlot) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      const rect = heroSlot.getBoundingClientRect();
      img.style.position = 'absolute';
      img.style.top = `${rect.top + window.scrollY}px`;
      img.style.left = `${rect.left}px`;
      img.style.width = `${rect.width}px`;
      img.style.height = `${rect.height}px`;
      img.style.transform = 'none';
      img.style.filter = 'none';
      setIsReady(true);
      return;
    }

    let heroDoc = { top: 0, left: 0, width: 0, height: 0 };
    let aboutDoc = { top: 0, left: 0, width: 0, height: 0 };
    let startY = 0;
    let endY = 0;

    const measure = () => {
      const scrollY = window.scrollY;
      const hr = heroSlot.getBoundingClientRect();
      const ar = aboutSlot.getBoundingClientRect();

      heroDoc = {
        top: hr.top + scrollY,
        left: hr.left,
        width: hr.width,
        height: hr.height,
      };

      aboutDoc = {
        top: ar.top + scrollY,
        left: ar.left,
        width: ar.width,
        height: ar.height,
      };

      startY = heroDoc.top;
      endY = aboutDoc.top + aboutDoc.height / 2 - window.innerHeight / 2;
      if (endY <= startY) {
        endY = startY + window.innerHeight * 0.6;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let ticking = false;
    const update = () => {
      ticking = false;
      const scrollY = window.scrollY;
      let progress = (scrollY - startY) / Math.max(1, endY - startY);
      progress = Math.max(0, Math.min(1, progress));

      // Smoothstep easing
      const t = progress * progress * (3 - 2 * progress);

      const docTop = lerp(heroDoc.top, aboutDoc.top, t);
      const docLeft = lerp(heroDoc.left, aboutDoc.left, t);
      const w = lerp(heroDoc.width, aboutDoc.width, t);
      const h = lerp(heroDoc.height, aboutDoc.height, t);
      const rot = lerp(-2, 0, t);
      const gray = lerp(1, 0, t);

      img.style.top = `${docTop - scrollY}px`;
      img.style.left = `${docLeft}px`;
      img.style.width = `${w}px`;
      img.style.height = `${h}px`;
      img.style.transform = `rotate(${rot}deg)`;
      img.style.filter = `grayscale(${gray})`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const onResize = () => {
      measure();
      update();
    };

    // Initial measure after DOM paint
    measure();
    update();
    setIsReady(true);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [heroSlotRef, aboutSlotRef]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`fixed top-0 left-0 object-cover rounded-[14px] border border-[var(--line)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] z-[10] pointer-events-none transition-opacity duration-300 ${
        isReady ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        willChange: 'top, left, width, height, transform, filter',
      }}
    />
  );
};
