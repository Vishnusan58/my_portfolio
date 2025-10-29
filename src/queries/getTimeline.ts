import { timelineData } from '../profileData';
import { TimelineItem } from '../types';

export async function getTimeline(): Promise<TimelineItem[]> {
  return timelineData;
}
