import { Project, SkillCategory, Achievement, SocialLink } from '../types.ts';

export const PERSONAL_INFO = {
  name: 'Soumeli Dasgupta',
  firstName: 'Soumeli',
  lastName: 'Dasgupta',
  role: 'Developer & IT Student',
  location: 'Asansol, West Bengal',
  college: 'Asansol Engineering College',
  year: 'Pre-final Year B.Tech IT',
  email: 'rumadasgupta45@gmail.com',
  github: 'https://github.com/eliimuse',
  linkedin: 'https://www.linkedin.com/in/soumeli-dasgupta-b50a793b0/',
  hackerrank: 'https://www.hackerrank.com/profile/soumeli04',
  profilePhoto: '/profile.jpg',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'email',
    name: 'Email',
    href: `mailto:${PERSONAL_INFO.email}`,
    ariaLabel: 'Email Soumeli',
    title: 'Email',
    solid: true,
    icon: 'email',
  },
  {
    id: 'github',
    name: 'GitHub',
    href: PERSONAL_INFO.github,
    ariaLabel: 'GitHub',
    title: 'GitHub',
    icon: 'github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: PERSONAL_INFO.linkedin,
    ariaLabel: 'LinkedIn',
    title: 'LinkedIn',
    icon: 'linkedin',
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    href: PERSONAL_INFO.hackerrank,
    ariaLabel: 'HackerRank — 5 star Python',
    title: 'HackerRank',
    icon: 'hackerrank',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'fielda',
    number: '01',
    context: '01 · Google PromptWars: Virtual — GenAI stadium operations',
    name: 'Fielda',
    link: 'https://fielda.onrender.com/',
    description:
      'A GenAI-powered stadium operations and fan-experience platform built for FIFA World Cup 2026, with two modules sharing one live data layer: Operations Intelligence, a command console with live telemetry and AI-assisted staff deployment, and Unity Path, a fan-facing companion built for accessibility — sensory-safe navigation, wheelchair routing, and a multilingual AI assistant.',
    stack: ['React', 'GenAI', 'Real-time telemetry', 'Accessibility'],
    glowColor: 'var(--accent)',
  },
  {
    id: 'docly',
    number: '02',
    context: '02 · PromptWars hackathon — document → workflow AI agent',
    name: 'Docly',
    link: 'https://docly-oyvd.onrender.com/',
    description:
      'A universal document-to-workflow agent. Upload any document — an invoice, purchase order, resume, or student application — and Docly extracts the data, validates it, makes an approve, flag, or reject decision, and logs it to a ledger. Most document-automation demos stop at OCR; Docly takes one upload through the entire workflow, end to end.',
    stack: ['Document AI', 'Workflow automation', 'Validation logic'],
    glowColor: '#E8A23F',
  },
  {
    id: 'volume-in-air',
    number: '03',
    context: '03 · Self-directed — computer vision',
    name: 'Volume in Air',
    isLocalOnly: true,
    description:
      'A Python application that controls Windows system volume using hand gestures read through a webcam — no physical contact required. It uses computer vision and hand tracking to measure the distance between thumb and index finger, then maps that distance to system volume in real time.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'Pycaw'],
    glowColor: '#9D7FE8',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    number: '01',
    name: 'Languages',
    desc: 'The foundation — reached for daily across coursework, contests, and hackathons.',
    tags: ['C', 'Python', 'Java', 'SQL'],
  },
  {
    id: 'frontend',
    number: '02',
    name: 'Frontend',
    desc: 'Interfaces that get out of the way, built with HTML, JavaScript, React, and Tailwind CSS.',
    tags: ['HTML', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    number: '03',
    name: 'Backend',
    desc: 'Server-side logic on the JVM, powering the backend of full-stack builds like Fielda and Docly.',
    tags: ['Java Servlet', 'JSP'],
  },
  {
    id: 'database',
    number: '04',
    name: 'Database',
    desc: 'Structured data, done properly — for anything that needs to persist.',
    tags: ['PostgreSQL', 'MySQL'],
  },
  {
    id: 'aiml',
    number: '05',
    name: 'AI / ML',
    desc: 'Where most of my new learning time goes — computer vision on top of the usual ML toolkit.',
    tags: ['OpenCV', 'MediaPipe', 'NumPy', 'scikit-learn'],
  },
  {
    id: 'tools',
    number: '06',
    name: 'Tools',
    desc: 'Git for version control, Render for shipping fast, GCP for everything else.',
    tags: ['Git', 'Render', 'GCP'],
  },
];

export const MARQUEE_ITEMS = [
  { text: 'PRE-FINAL YEAR', highlight: true },
  { text: 'ASANSOL ENGINEERING COLLEGE', highlight: false },
  { text: 'B.TECH IT', highlight: true },
  { text: 'LEARNING COMPUTER VISION', highlight: false },
  { text: 'PRE-FINAL YEAR', highlight: true },
  { text: 'ASANSOL ENGINEERING COLLEGE', highlight: false },
  { text: 'B.TECH IT', highlight: true },
  { text: 'LEARNING COMPUTER VISION', highlight: false },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'hackerrank-5star',
    mark: '05★',
    title: '5-star Python on HackerRank',
    subtitle: 'Problem solving in Python',
  },
  {
    id: 'compile-or-cry',
    mark: '03',
    title: '3rd position, Compile or Cry',
    subtitle: 'Competitive coding event on HackerRank',
  },
  {
    id: 'promptwars',
    mark: 'HK',
    title: 'Built and shipped 2 projects at Google PromptWars',
    subtitle: 'Fielda and Docly, both taken from idea to a live deployed demo',
  },
  {
    id: 'education',
    mark: 'ED',
    title: 'B.Tech in Information Technology',
    subtitle: 'Asansol Engineering College — pre-final year',
  },
];
