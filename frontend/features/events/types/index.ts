import type { EventStatusType } from '@/lib/types/enums';

export interface Event {
  id: string;
  society_id: string;
  created_by_user_id: string;
  title: string;
  description?: string;
  cover_image_url?: string;
  start_time: string;
  end_time?: string;
  category_tags?: string[];
  status: EventStatusType;
  capacity_limit?: number;
  created_at: string;
  updated_at: string;
}

export interface UserEventRSVP {
  id: string;
  user_id: string;
  event_id: string;
  rsvp_at: string;
  attended?: boolean;
}

export type CreateEventData = Omit<Event, 'id' | 'created_at' | 'updated_at'>;
export type UpdateEventData = Partial<
  Omit<Event, 'id' | 'created_at' | 'updated_at'>
>;
