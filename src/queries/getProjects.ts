import { projectsData } from '../profileData';
import { Project } from '../types';

export async function getProjects(): Promise<Project[]> {
  return projectsData;
}
