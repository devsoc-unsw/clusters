import { supabase } from './client';
import type { SignUpData, SignInData, User } from '@/features/auth/types';

export const authService = {
  signUp: async (data: SignUpData) => {
    const { email, password, ...profileData } = data;

    const authResult = await supabase.auth.signUp({ email, password });

    if (authResult.data.user && !authResult.error) {
      const profileResult = await supabase
        .from('users')
        .insert({
          id: authResult.data.user.id,
          email: email,
          display_name: profileData.display_name,
          zid: profileData.zid,
          is_arc_member: profileData.is_arc_member || false,
          platform_role: 'student',
        })
        .select()
        .single();

      return { authResult, profileResult };
    }

    return { authResult, profileResult: null };
  },

  signIn: async (data: SignInData) => {
    return await supabase.auth.signInWithPassword(data);
  },

  signOut: async () => {
    return await supabase.auth.signOut();
  },

  getCurrentUser: async () => {
    return await supabase.auth.getUser();
  },

  getCurrentUserProfile: async (): Promise<User | null> => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return null;

    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) throw error;
    return data;
  },

  updateUserProfile: async (updates: Partial<User>) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error('Not authenticated');

    return await supabase
      .from('users')
      .update(updates)
      .eq('id', user.id)
      .select()
      .single();
  },

  onAuthStateChange: (callback: (event: string, session: unknown) => void) => {
    return supabase.auth.onAuthStateChange(callback);
  },
};
