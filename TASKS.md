# Tasks

## In Progress

- [ ] UI/design updates - Visual changes, animations, styling

## Up Next
- [ ] Develop content for multi-location business pages
- [ ] Create anonymized Salad Project case study
- [ ] Build SMB pricing page
- [ ] Develop framework comparison page
- [ ] Create post-MVP scaling stories
- [ ] Design cost calculator
- [ ] Refine /ai-agents, /ai-product-studio, and /context-engineering pages to clarify target audience
- [ ] Create additional comparison pages for AI technologies and services
- [ ] Verify and update all remaining pages to use 'POSTMAN' instead of 'P0STMAN'
- [ ] Refine waveform animation transitions
- [ ] Test waveform color changes across different devices and browsers
- [ ] Fix Vercel API route TypeScript errors (@vercel/node module)
- [ ] Consolidate service URLs to /services/* pattern (requires routing changes)
- [ ] Add internal linking between content silos
- [ ] Generate dynamic OG images per page type
- [ ] Add schema markup to remaining case study pages (pattern established in RhythmLuxury.tsx)

## Completed

- [x] Initial documentation setup (CLAUDE.md, TASKS.md, BACKLOG.md, PROGRESS.md, SUMMARY.md)
- [x] Voice agent Simli avatar integration - Fixed 402 error (API key trailing newline)
- [x] Voice agent pronunciation - Changed all P0STMAN to POSTMAN in prompts
- [x] Added "Click to chat with AI" hint below waveform
- [x] Added Video Call button to homepage (bottom left)
- [x] Added rude user handling to voice prompts
- [x] Review and update static HTML pages (industries, locations, guides) - still have P0STMAN references
- [x] Update /paulgosnell page - removed Dubai references, now Norfolk UK
- [x] SEO Audit & Fixes (2026-01-21):
  - [x] Updated all sitemap lastmod dates to 2026-01-21
  - [x] Updated robots.txt to block admin/internal routes (/admin, /proposals, /contracts, /invoice, /thanks)
  - [x] Added noindex to /thanks page
  - [x] Added schema markup example to case study pages (RhythmLuxury.tsx)
  - [x] Verified trailing slash convention is correct (static dirs have slashes, React routes don't)
  - [x] Verified solutions vs use-cases are differentiated content (no canonicalization needed)
  - [x] Confirmed guides and pricing pages already in main sitemap
