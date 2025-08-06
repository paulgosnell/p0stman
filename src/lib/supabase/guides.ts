import { supabase } from './index';
import type { GuideSection, GuideAccessToken } from '../types';

export async function getAccessTokens(): Promise<GuideAccessToken[]> {
  try {
    const { data, error } = await supabase
      .from('guide_access_tokens')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('Error getting access tokens:', err);
    throw err;
  }
}

export async function createAccessToken(email: string, expiresInDays: number = 365): Promise<GuideAccessToken> {
  try {
    const token = `gat_${Math.random().toString(36).substring(2)}${Date.now().toString(36)}`;
    const expires_at = new Date();
    expires_at.setDate(expires_at.getDate() + expiresInDays);

    const { data, error } = await supabase
      .from('guide_access_tokens')
      .insert([{ token, email, expires_at: expires_at.toISOString() }])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (err) {
    console.error('Error creating access token:', err);
    throw err;
  }
}

export async function revokeAccessToken(id: number): Promise<void> {
  try {
    const { error } = await supabase
      .from('guide_access_tokens')
      .update({ is_valid: false })
      .eq('id', id);

    if (error) throw error;
  } catch (err) {
    console.error('Error revoking access token:', err);
    throw err;
  }
}

export async function verifyGuideAccess(token: string): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from('guide_access_tokens')
      .select()
      .eq('token', token)
      .eq('is_valid', true)
      .gt('expires_at', new Date().toISOString())
      .single();

    if (error || !data) return false;

    // Update last used timestamp
    await supabase
      .from('guide_access_tokens')
      .update({ last_used_at: new Date().toISOString() })
      .eq('id', data.id);

    return true;
  } catch (err) {
    console.error('Error verifying guide access:', err);
    return false;
  }
}

export async function getGuideSections(): Promise<GuideSection[] | never> {
  try {
    const { data, error } = await supabase
      .from('guide_sections')
      .select(`
        id,
        title,
        content,
        video_url,
        order_position,
        created_at,
        chapter_type
      `)
      .order('order_position', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Failed to load guide sections');
    }

    if (!data) {
      throw new Error('No guide sections found');
    }

    return data || [];
  } catch (err) {
    console.error('Error in getGuideSections:', err);
    throw err;
  }
}

export async function getGuideSection(id: string): Promise<GuideSection | never> {
  try {
    const { data: section, error } = await supabase
      .from('guide_sections')
      .select(`
        id,
        title,
        content,
        video_url,
        order_position,
        created_at,
        chapter_type
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Failed to load guide section');
    }

    if (!section) {
      throw new Error('Guide section not found');
    }

    // Get next and previous sections
    const { data: allSections } = await supabase
      .from('guide_sections')
      .select('id, title, order_position, chapter_type')
      .order('order_position', { ascending: true });

    if (allSections) {
      const currentIndex = allSections.findIndex(s => s.id === Number(id));
      const prevSection = currentIndex > 0 ? allSections[currentIndex - 1] : null;
      const nextSection = currentIndex < allSections.length - 1 ? allSections[currentIndex + 1] : null;

      return {
        ...section,
        prevSection,
        nextSection
      };
    }

    return section;
  } catch (err) {
    console.error('Error in getGuideSection:', err);
    throw err;
  }
}