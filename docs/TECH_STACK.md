# Tech Stack Documentation

This document provides a comprehensive overview of the technology stack used in the p0stman AI Expert Portfolio project.

## Core Framework & Language

### Frontend
- **React 18.3.1** - Modern UI library with Hooks-based development
- **TypeScript 5.5.3** - Full type safety with strict mode enabled
  - ES2020 target
  - `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`
- **React Router DOM 6.22.3** - Client-side routing for SPA navigation

### Build Tools
- **Vite 5.4.2** - Lightning-fast build tool and dev server (port 5174)
- **@vitejs/plugin-react 4.3.1** - React Fast Refresh support
- **Node module type**: ESM (`"module"`)

## Styling & Design System

### CSS Framework
- **Tailwind CSS 3.4.1** - Utility-first CSS with extensive customization
  - Custom color palette (premium blacks, grays, blues, purples)
  - Custom animations (fade-in-up, hover-lift, pulse-subtle, gradient)
  - Dark mode support (`darkMode: 'class'`)
  - Premium design tokens and shadow system
- **PostCSS 8.4.35** - CSS transformation pipeline
- **Autoprefixer 10.4.18** - Automatic vendor prefixing
- **@tailwindcss/typography 0.5.10** - Enhanced prose styling

### Animation Libraries
- **Framer Motion 11.0.8** - Advanced React animation library for transitions and gestures
- **GSAP 3.13.0** - Professional animation library for complex sequences
- **React Intersection Observer 9.8.1** - Lazy loading and scroll-triggered animations

## Backend & Database

### Backend as a Service
- **Supabase 2.39.7** - PostgreSQL backend with real-time capabilities
  - Authentication & authorization
  - Real-time subscriptions
  - Storage for file uploads
  - Auto-generated REST API

### Database Services (Modularized)
- `/lib/supabase/invoicing.ts` - Invoice management
- `/lib/supabase/contracts.ts` - Contract handling
- `/lib/supabase/clients.ts` - Client data management
- `/lib/supabase/guides.ts` - Guide content
- `/lib/supabase/elevenlabs.ts` - Voice agent integration data

## AI & Voice Features

- **ElevenLabs 0.7.1** - AI voice generation and voice agent capabilities
  - Voice agent SDK
  - React integration package
  - Configured via environment variables

## UI Components & Libraries

### Component Libraries
- **Headless UI 1.7.18** - Unstyled, accessible component primitives
- **Heroicons React 2.2.0** - Beautiful hand-crafted SVG icons
- **Lucide React 0.344.0** - Comprehensive icon library

### Data Visualization
- **Recharts 3.1.2** - Composable charting library for analytics dashboards

### Carousels & Sliders
- **Embla Carousel React 8.0.0** - Lightweight, flexible carousel
- **Swiper 12.0.3** - Modern touch slider with advanced features

## Utilities & Services

### Document Generation
- **html2canvas 1.4.1** - Client-side screenshot/canvas rendering
- **jspdf 2.5.1** - PDF generation for proposals and contracts

### Communication
- **EmailJS 3.11.0** - Client-side email sending service for contact forms

### SEO & Meta Management
- **React Helmet Async 2.0.4** - Dynamic head/meta tag management

### Analytics
- **Vercel Analytics 1.5.0** - Web performance and user analytics

## Internationalization (i18n)

### Custom Implementation
- React Context-based i18n system
- Supported languages: English (en), Arabic (ar)
- RTL (Right-to-Left) support for Arabic
- Translation key-based system with parameter interpolation
- LocalStorage persistence for language preference

## Testing Framework

### Test Runner & Libraries
- **Vitest 1.3.1** - Fast, Vite-native unit test runner
  - jsdom environment for DOM testing
  - Coverage reporting (text, JSON, HTML formats)
- **React Testing Library 14.2.1** - React component testing utilities
- **@testing-library/jest-dom 6.4.2** - Custom DOM matchers
- **@testing-library/user-event 14.5.2** - User interaction simulation

### Test Coverage
- 5 test files across components
- Unit tests for critical business logic

## Code Quality & Linting

### ESLint Configuration
- **ESLint 9.9.1** with TypeScript support
- **@typescript-eslint 8.3.0** - TypeScript-specific linting rules
- **eslint-plugin-react-hooks 5.1.0** - React Hooks best practices
- **eslint-plugin-react-refresh 0.4.11** - Fast Refresh compliance
- **globals 15.9.0** - Browser global definitions

### TypeScript Strictness
- Strict mode enabled across all files
- No unused locals or parameters allowed
- No fallthrough cases in switch statements
- Comprehensive type checking

## Project Architecture

### Scale
- **338 source files** (TypeScript/TSX)
- **~22,818 lines of code**
- **50+ routes** in the application

### Directory Structure

#### `/src/components`
- `/hero` - Hero sections for landing pages
- `/sections` - Reusable page sections
- `/guide` - Guide-specific components
- `/voice-agent` - Voice agent UI components
- `/ui` - Base UI components
- `/v3` - V3 design system components
- `/case-studies` - Portfolio case study components
- `/contact`, `/footer`, `/proposals` - Feature-specific components

#### `/src/pages`
- 40+ page components including:
  - Home, About, Services
  - Admin dashboard (CRM, invoicing, contracts, reporting)
  - Case studies and portfolio
  - Training and support pages

#### `/src/hooks`
- Custom React hooks:
  - Dark mode management
  - Konami code detection
  - Scroll tracking
  - Voice capture
  - And more...

#### `/src/utils`
- Helper functions and utilities
- Business logic helpers

#### `/src/config`
- Voice agent prompts and configuration
- Application settings

#### `/src/content`
- Static content and guide markdown

## Environment Configuration

### Environment Variables (`.env.example`)
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key
- `VITE_ELEVENLABS_AGENT_ID` - ElevenLabs agent ID
- `VITE_ELEVENLABS_API_KEY` - ElevenLabs API key

### Configuration Access
- Type-safe environment access via `import.meta.env`
- LocalStorage for user preferences (language, theme)

## Notable Features

1. **Multi-page SPA** with 50+ routes and comprehensive navigation
2. **Admin Dashboard** with CRM, invoicing, contract management, and reporting
3. **Voice Agent Demo** with real-time ElevenLabs integration
4. **Proposal & Contract Generation** with PDF export capabilities
5. **Case Study Portfolio** with luxury design aesthetics
6. **Full Internationalization** with RTL support for Arabic
7. **Rich Animations** using Framer Motion and GSAP
8. **Real-time Data** via Supabase subscriptions
9. **Dark Mode** support with system preference detection
10. **SEO Optimized** with dynamic meta tags

## Performance Optimizations

- Code splitting via React Router
- Lazy loading of components
- Optimized images and assets
- Vercel edge network deployment
- Fast Refresh for development
- Production-optimized Vite builds

## Development Workflow

### Scripts
- `npm run dev` - Start development server (port 5174)
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm test` - Run Vitest tests
- `npm run lint` - Run ESLint

### Version Control
- Git-based version control
- Currently on `main` branch

---

**Last Updated**: November 1, 2025
**Project**: p0stman - AI Expert Portfolio
**Total Dependencies**: 500+ (including dev dependencies)
