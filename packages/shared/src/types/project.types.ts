export interface Project {
  id: string;
  slug: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  imageUrl: string | null;
  repoUrl: string | null;
  liveUrl: string | null;
  tags: readonly string[];
  featured: boolean;
  order: number;
}

export interface ProjectsResponse {
  projects: Project[];
}
