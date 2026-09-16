export interface Project {
  id: string;
  number: string;
  context: string;
  name: string;
  link?: string;
  isLocalOnly?: boolean;
  description: string;
  stack: string[];
  glowColor: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  name: string;
  desc: string;
  tags: string[];
}

export interface Achievement {
  id: string;
  mark: string;
  title: string;
  subtitle: string;
}

export interface SocialLink {
  id: string;
  name: string;
  href: string;
  ariaLabel: string;
  title: string;
  solid?: boolean;
  icon: 'email' | 'github' | 'linkedin' | 'hackerrank';
}
