import { contactMeData } from '../profileData';
import { ContactMe } from '../types';

export async function getContactMe(): Promise<ContactMe> {
  return contactMeData;
}
