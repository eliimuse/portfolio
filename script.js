const skillCategories = [
  {
    name: "Languages",
    desc: "The foundation — reached for daily across coursework, contests, and hackathons.",
    tags: ["C", "Python", "Java", "SQL"]
  },
  {
    name: "Frontend",
    desc: "Interfaces that get out of the way, built with HTML, JavaScript, React, and Tailwind CSS.",
    tags: ["HTML", "JavaScript", "React", "Tailwind CSS"]
  },
  {
    name: "Backend",
    desc: "Server-side logic on the JVM, powering the backend of full-stack builds like Fielda and Docly.",
    tags: ["Java Servlet", "JSP"]
  },
  {
    name: "Database",
    desc: "Structured data, done properly — for anything that needs to persist.",
    tags: ["PostgreSQL", "MySQL"]
  },
  {
    name: "AI / ML",
    desc: "Where most of my new learning time goes — computer vision on top of the usual ML toolkit.",
    tags: ["OpenCV", "MediaPipe", "NumPy", "scikit-learn"]
  },
  {
    name: "Tools",
    desc: "Git for version control, Render for shipping fast, GCP for everything else.",
    tags: ["Git", "Render", "GCP"]
  }
];

const pathEl = document.getElementById('skillPath');
const panelEl = document.getElementById('skillPanel');
const eyebrowEl = document.getElementById('panelEyebrow');
const titleEl = document.getElementById('panelTitle');
const descEl = document.getElementById('panelDesc');
const tagsEl = document.getElementById('panelTags');

skillCategories.forEach((cat, i) => {
  const dot = document.createElement('div');
  dot.className = 'path-dot' + (i === 0 ? ' active' : '');
  dot.textContent = String(i + 1).padStart(2, '0');
  pathEl.appendChild(dot);
});

const dotEls = [...pathEl.children];
let lastActiveIndex = -1;

function renderSkillPanel(index){
  const cat = skillCategories[index];
  eyebrowEl.textContent = 'Category ' + String(index + 1).padStart(2, '0');
  titleEl.textContent = cat.name;
  descEl.textContent = cat.desc;
  tagsEl.innerHTML = cat.tags.map(t => `<span class="tag">${t}</span>`).join('');
  panelEl.classList.remove('fade');
  void panelEl.offsetWidth;
  panelEl.classList.add('fade');
}

renderSkillPanel(0);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (window.gsap && window.ScrollTrigger && !reduceMotion) {
  gsap.registerPlugin(ScrollTrigger);

  /* ---- Projects: horizontal scroll-jack ---- */
  const track = document.getElementById('projectsTrack');
  const viewport = track.parentElement;
  const cards = [...track.children];
  const fillEl = document.getElementById('projectsFill');
  const counterEl = document.getElementById('projectsCounter');

  function scrollDistance(){
    return Math.max(0, track.scrollWidth - viewport.clientWidth);
  }

  ScrollTrigger.create({
    trigger: '#projects',
    start: 'top top',
    end: () => '+=' + (scrollDistance() + window.innerHeight * 0.6),
    pin: '.projects-pin',
    scrub: 0.6,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      const dist = scrollDistance();
      track.style.transform = `translateX(${-dist * self.progress}px)`;
      const idx = Math.min(cards.length - 1, Math.round(self.progress * (cards.length - 1)));
      fillEl.style.width = (self.progress * 100) + '%';
      counterEl.textContent = String(idx + 1).padStart(2, '0') + ' / ' + String(cards.length).padStart(2, '0');
    }
  });

  /* ---- Skills: vertical scroll-jack path ---- */
  const dotSpacing = 78;   // dot height (48) + gap (30)
  const dotRadius = 24;
  const windowHeight = pathEl.parentElement.clientHeight;
  const activeY = windowHeight / 2;

  gsap.set(pathEl, { xPercent: -50, left: '50%', top: 0 });

  ScrollTrigger.create({
    trigger: '#skills',
    start: 'top top',
    end: () => '+=' + (window.innerHeight * (skillCategories.length - 1) * 0.9),
    pin: '.skills-pin',
    scrub: 0.6,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      const idxFloat = self.progress * (skillCategories.length - 1);
      const dotCenterLocal = idxFloat * dotSpacing + dotRadius;
      const y = activeY - dotCenterLocal;
      pathEl.style.transform = `translate(-50%, ${y}px)`;

      const idx = Math.min(skillCategories.length - 1, Math.round(idxFloat));
      if (idx !== lastActiveIndex) {
        lastActiveIndex = idx;
        dotEls.forEach((d, i) => d.classList.toggle('active', i === idx));
        renderSkillPanel(idx);
      }
    }
  });
} else {
  // Fallback: no scroll-jacking (reduced motion or GSAP failed to load) — show first state only.
  dotEls[0] && dotEls[0].classList.add('active');
}

/* ---- Hero -> About photo morph ---- */
(function(){
  const img = document.getElementById('morphPhoto');
  const heroSlot = document.getElementById('heroPhotoSlot');
  const aboutSlot = document.getElementById('aboutPhotoSlot');
  const heroSection = document.querySelector('.hero');
  const aboutSection = document.getElementById('about');
  if (!img || !heroSlot || !aboutSlot || !heroSection || !aboutSection) return;

  if (reduceMotion) {
    // Simple, static handoff: just show the photo sitting in the About slot.
    img.style.position = 'absolute';
    img.style.borderRadius = '14px';
    const r = aboutSlot.getBoundingClientRect();
    img.style.width = r.width + 'px';
    img.style.height = r.height + 'px';
    aboutSlot.style.visibility = 'visible';
    aboutSlot.appendChild(img);
    return;
  }

  let heroDoc, aboutDoc, startY, endY;

  function measure(){
    const scrollY = window.scrollY;
    const hr = heroSlot.getBoundingClientRect();
    const ar = aboutSlot.getBoundingClientRect();
    heroDoc = { top: hr.top + scrollY, left: hr.left, width: hr.width, height: hr.height };
    aboutDoc = { top: ar.top + scrollY, left: ar.left, width: ar.width, height: ar.height };
    // Start the moment the top of the viewport reaches the top of the photo in the hero.
    startY = heroDoc.top;
    // Finish once the About photo has settled into the middle of the viewport.
    endY = aboutDoc.top + aboutDoc.height / 2 - window.innerHeight / 2;
    if (endY <= startY) endY = startY + window.innerHeight * 0.6;
  }

  function lerp(a, b, t){ return a + (b - a) * t; }

  let ticking = false;
  function update(){
    ticking = false;
    const scrollY = window.scrollY;
    let progress = (scrollY - startY) / Math.max(1, (endY - startY));
    progress = Math.max(0, Math.min(1, progress));
    // smoothstep easing
    const t = progress * progress * (3 - 2 * progress);

    const docTop = lerp(heroDoc.top, aboutDoc.top, t);
    const docLeft = lerp(heroDoc.left, aboutDoc.left, t);
    const w = lerp(heroDoc.width, aboutDoc.width, t);
    const h = lerp(heroDoc.height, aboutDoc.height, t);
    const rot = lerp(-2, 0, t);
    const gray = lerp(1, 0, t);

    img.style.top = (docTop - scrollY) + 'px';
    img.style.left = docLeft + 'px';
    img.style.width = w + 'px';
    img.style.height = h + 'px';
    img.style.transform = `rotate(${rot}deg)`;
    img.style.filter = `grayscale(${gray})`;
  }

  function onScroll(){
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }

  function onResize(){
    measure();
    update();
  }

  measure();
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
})();
