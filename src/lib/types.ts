export interface GuideSection {
  id: number;
  title: string;
  content: string;
  video_url?: string | null;
  order_position: number;
  created_at: string;
  chapter_type: 'chapter' | 'sub-chapter';
  prevSection?: {
    id: number;
    title: string;
  } | null;
  nextSection?: {
    id: number;
    title: string;
  } | null;
}

export interface Note {
  id: string;
  chapterId: number;
  text: string;
  highlight?: {
    start: number;
    end: number;
    content: string;
  };
  createdAt: string;
}

export interface GuideAccessToken {
  id: number;
  token: string;
  email: string;
  expires_at: string;
  last_used_at: string | null;
  is_valid: boolean;
}

interface Project {
  id: number;
  created_at: string;
  name: string;
  email: string;
  project_type: string;
  budget: string;
  timeline: string;
  description: string;
  replied?: boolean;
  replied_at?: string;
  reply_content?: string;
}

export interface Contact {
  id: number;
  created_at: string;
  name: string;
  email: string;
  project_type: string;
  budget: string;
  timeline: string;
  description: string;
  replied?: boolean;
  replied_at?: string;
  reply_content?: string;
}