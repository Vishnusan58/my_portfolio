import { profileBannerData } from '../data/vishnuProfile';
import { ProfileBanner } from '../types';

export async function getProfileBanner(): Promise<ProfileBanner> {
  return profileBannerData;
}
