export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string | null;
  repoUrl: string | null;
  liveUrl: string | null;
  tags: string[];
  featured: boolean;
  order: number;
}

export interface ProjectsResponse {
  projects: Project[];
}
