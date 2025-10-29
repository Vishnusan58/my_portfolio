import { timelineData } from '../data/vishnuProfile';
import { TimelineItem } from '../types';

export async function getTimeline(): Promise<TimelineItem[]> {
  return timelineData;
}
