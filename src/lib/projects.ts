import fs from 'fs';
import path from 'path';

const projectsFile = path.join(process.cwd(), 'content/projects.json');

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsFile)) return [];

  const fileContents = fs.readFileSync(projectsFile, 'utf8');
  return JSON.parse(fileContents) as Project[];
}
