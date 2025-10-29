import { contactMeData } from '../data/vishnuProfile';
import { ContactMe } from '../types';

export async function getContactMe(): Promise<ContactMe> {
  return contactMeData;
}
