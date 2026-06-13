export interface Project {
  id: string;
  num: string;
  label: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  challenge: string;
  arch: ArchNode[];
  metrics: Metric[];
  stack: string[];
  live?: string;
  github: string;
  accent: string;
  accentSecondary: string;
}

export interface ArchNode {
  label: string;
  color: string;
}

export interface Metric {
  val: string;
  key: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Command {
  label: string;
  icon: string;
  action: () => void;
}

export interface SkillCategory {
  id: string;
  title: string;
  span: string;
  accent: string;
  items: string[];
  desc?: string;
  icon: string;
}

export interface ExperienceBullet {
  text: string;
  highlight: string;
  tags: string[];
}
