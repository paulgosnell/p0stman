# P0STMAN - AI Expert Portfolio

## Project Overview

AI consulting portfolio site with voice agent capabilities. Built with React/TypeScript, deployed on Vercel with Supabase backend.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion (animations)
- **Backend**: Supabase, Vercel Serverless Functions
- **Voice Agent**: Google Gemini Live API (WebSocket streaming)
- **Testing**: Vitest, Testing Library

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run test     # Run tests
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── components/     # React components
│   ├── voice-agent/   # Gemini voice agent (orb, overlay, waveform)
│   ├── ui/            # Reusable UI components
│   ├── shared/        # Shared components
│   └── ...            # Feature-specific components
├── pages/          # Page components (Home, About, Services, etc.)
├── hooks/          # Custom React hooks
├── config/         # Configuration (gemini-realtime.ts, etc.)
├── lib/            # Utility libraries
├── types/          # TypeScript types
└── utils/          # Helper utilities

api/                # Vercel serverless functions
├── gemini-session.ts    # Gemini Live session handler
├── chat.ts              # Chat endpoint
└── webhooks/            # Webhook handlers

supabase/           # Supabase configuration
```

## Environment Variables

Required in `.env`:
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anon key
- `VITE_GEMINI_API_KEY` - Google Gemini API key (browser)
- `GEMINI_API_KEY` - Google Gemini API key (server)

## Voice Agent

The voice agent uses **Gemini Live API** for real-time voice conversation:
- WebSocket-based bidirectional audio streaming
- Configuration in `src/config/gemini-realtime.ts`
- Components in `src/components/voice-agent/`
- Available voices: Aoede, Charon, Fenrir, Kore, Puck, Zephyr

## Code Conventions

- Components use PascalCase (`VoiceAgentOverlay.tsx`)
- Hooks use camelCase with `use` prefix (`useGeminiVoiceWaveform.ts`)
- Config files use kebab-case (`gemini-realtime.ts`)
- Use Framer Motion for animations
- Prefer Tailwind classes over custom CSS

## Deployment

Deployed on Vercel. Configuration in `vercel.json`:
- SPA routing with rewrites
- API routes have CORS enabled
- Static pages excluded from SPA routing (industries, locations, etc.)
