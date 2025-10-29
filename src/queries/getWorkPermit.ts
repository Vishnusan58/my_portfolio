import { workPermitData } from '../profileData';
import { WorkPermit } from '../types';

export async function getWorkPermit(): Promise<WorkPermit> {
  return workPermitData;
}
