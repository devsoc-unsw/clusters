import type { SocietyMemberRoleType } from '@/lib/types/enums';

export interface Society {
  id: string;
  name: string;
  logo_url?: string;
  description?: string;
  contact_email?: string;
  social_media_links?: Record<string, string>;
  is_verified: boolean;
  created_by_user_id?: string;
  created_at: string;
  updated_at: string;
}

export interface SocietyMember {
  id: string;
  user_id: string;
  society_id: string;
  role: SocietyMemberRoleType;
  is_active: boolean;
  invited_by_user_id?: string;
  joined_at: string;
  updated_at: string;
}

export type CreateSocietyData = Omit<
  Society,
  'id' | 'is_verified' | 'created_by_user_id' | 'created_at' | 'updated_at'
>;
export type UpdateSocietyData = Partial<
  Omit<Society, 'id' | 'created_by_user_id' | 'created_at' | 'updated_at'>
>;

export type InviteSocietyMemberData = Omit<
  SocietyMember,
  'id' | 'is_active' | 'joined_at' | 'updated_at'
>;
export type UpdateSocietyMemberData = Partial<
  Pick<SocietyMember, 'role' | 'is_active'>
>;
