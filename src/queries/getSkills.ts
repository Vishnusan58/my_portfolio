import { skillsData } from '../data/vishnuProfile';
import { Skill } from '../types';

export async function getSkills(): Promise<Skill[]> {
  return skillsData;
}
