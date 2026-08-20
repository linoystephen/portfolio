export type ProjectCategory =
  | 'all'
  | 'branding'
  | 'packaging'
  | 'exhibition'
  | 'video'
  | 'web'
  | 'ai';

export interface ProjectMedia {
  type: 'image' | 'video' | 'website';
  url: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  longDescription: string;
  coverImage: string;
  galleryImages?: string[]; // Multi-image support for galleries & manuals
  videoUrl?: string;       // Direct MP4 or YouTube / Vimeo embed URL
  websiteUrl?: string;     // Live site link button
  deliverables: string[];  // e.g. ["Brand Guidelines", "SOP Packaging", "3D Booth"]
  tools: string[];         // e.g. ["InDesign", "Illustrator", "Photoshop", "After Effects"]
  featured: boolean;
  year: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tools: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface LinoyProfile {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  existingPortfolioUrl: string;
  linkedinUrl: string;
  summary: string;
  yearsOfExperience: string;
  keyStats: { value: string; label: string; subtext: string }[];
}
