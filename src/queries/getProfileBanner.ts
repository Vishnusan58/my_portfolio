import { profileBannerData } from '../profileData';
import { ProfileBanner } from '../types';

export async function getProfileBanner(): Promise<ProfileBanner> {
  return profileBannerData;
}
