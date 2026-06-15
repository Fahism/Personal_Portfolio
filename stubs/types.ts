export interface ProjectData {
  id: string;
  title: string;
  description: string;
  url: string;
  technologies: string[];
}

export type Theme = 'light' | 'dark' | 'system';
