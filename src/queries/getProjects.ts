import { projectsData } from '../data/vishnuProfile';
import { Project } from '../types';

export async function getProjects(): Promise<Project[]> {
  return projectsData;
}
