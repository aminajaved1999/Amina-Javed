export interface NavLink {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  brandSuffix: string;
  role: string;
  headline: string;
  summary: string;
  avatarInitials: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
}

export interface SkillCategory {
  title: string;
  icon: string;
  items: string[];
}

export interface Project {
  title: string;
  techStack: string;
  description: string;
  link: string;
  linkLabel: string;
}

export interface ContactLink {
  type: string;
  label: string;
  url: string;
}

export interface ContactSection {
  title: string;
  message: string;
  links: ContactLink[];
}

export interface Footer {
  text: string;
}

export interface PortfolioData {
  profile: Profile;
  navigation: NavLink[];
  skills: SkillCategory[];
  projects: Project[];
  contact: ContactSection;
  footer: Footer;
}
