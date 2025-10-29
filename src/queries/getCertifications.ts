import { certificationsData } from '../profileData';
import { Certification } from '../types';

export async function getCertifications(): Promise<Certification[]> {
  return certificationsData;
}
