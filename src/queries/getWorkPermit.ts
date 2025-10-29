import { workPermitData } from '../data/vishnuProfile';
import { WorkPermit } from '../types';

export async function getWorkPermit(): Promise<WorkPermit> {
  return workPermitData;
}
