import { skillsData } from '../profileData';
import { Skill } from '../types';

export async function getSkills(): Promise<Skill[]> {
  return skillsData;
}
