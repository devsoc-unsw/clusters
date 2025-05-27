import type { UserRoleType } from '@/lib/types/enums';

export interface User {
  id: string;
  zid?: string;
  email: string;
  display_name?: string;
  profile_picture_url?: string;
  platform_role: UserRoleType;
  is_arc_member: boolean;

  created_at: string;
  updated_at: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface SignUpData {
  email: string;
  password: string;
  display_name?: string;
  zid?: string;
  is_arc_member?: boolean;
}

export interface SignInData {
  email: string;
  password: string;
}
