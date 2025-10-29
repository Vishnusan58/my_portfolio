import { certificationsData } from '../data/vishnuProfile';
import { Certification } from '../types';

export async function getCertifications(): Promise<Certification[]> {
  return certificationsData;
}
