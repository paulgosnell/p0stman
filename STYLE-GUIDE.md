# P0STMAN Brand Style Guide

A comprehensive guide for creating on-brand proposals, pitch decks, and documents.

---

## Brand Overview

**Name:** P0STMAN (note: zero not letter O)
**Tagline:** AI-Native Product Studio
**Positioning:** AI-powered product studio building the impossible — fast, brilliant, limitless
**Tone:** Premium, confident, forward-thinking, minimal

---

## Logo & Icon

### Icon Description
The P0STMAN icon features speed lines with a chevron, representing motion, delivery, and forward momentum.

```
[Speed Lines] + [Chevron >]
```

### Logo Usage
- **Icon only:** Use on dark backgrounds, favicons, small spaces
- **Icon + wordmark:** Primary logo for headers, documents
- **Icon + wordmark + strapline:** For hero sections, cover pages

### Logo Colors
- **On dark:** White icon on charcoal/dark gray container
- **Container gradient:** `from-gray-700 via-gray-800 to-gray-900`
- **Icon stroke:** White at 90% opacity

---

## Color Palette

### Primary Colors (Dark Theme - Default)

| Name | Hex | Usage |
|------|-----|-------|
| Black | `#000000` | Primary background |
| Charcoal | `#111827` | Secondary background, cards |
| Gray 800 | `#1F2937` | Tertiary background, borders |
| Gray 700 | `#374151` | Borders, dividers |
| Gray 600 | `#4B5563` | Muted elements |
| Gray 500 | `#6B7280` | Secondary text, captions |
| Gray 400 | `#9CA3AF` | Tertiary text |
| Gray 300 | `#D1D5DB` | Body text (dark mode) |
| White | `#FFFFFF` | Headlines, primary text |

### Accent Colors

| Name | Hex | Usage |
|------|-----|-------|
| Blue 600 | `#2563EB` | Primary CTA, links, focus states |
| Blue 500 | `#3B82F6` | Hover states, gradients |
| Blue 400 | `#60A5FA` | Light accents |
| Cyan 500 | `#06B6D4` | Secondary accent, gradients |
| Purple 600 | `#7C3AED` | Tertiary accent |
| Green 500 | `#10B981` | Success states |
| Pink 600 | `#DB2777` | Hover state for primary buttons |

### Gradients

```css
/* Primary background gradient */
background: linear-gradient(135deg, #000000 0%, #111827 50%, #1F2937 100%);

/* Text gradient (blue to cyan) */
background: linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%);

/* Accent gradient (purple to blue) */
background: linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%);
```

---

## Typography

### Font Family

**Primary:** Inter
**Fallback:** system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

```css
font-family: 'Inter', system-ui, sans-serif;
```

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Thin | 100 | Hero headlines |
| Light | 300 | Subheadings, body (premium) |
| Regular | 400 | Body text |
| Medium | 500 | Emphasis |
| Semibold | 600 | Button text, strong emphasis |
| Bold | 700 | Rarely used, specific emphasis |

### Type Scale

| Size | Desktop | Mobile | Usage |
|------|---------|--------|-------|
| Hero 1 | 8-14rem | 4-5rem | Main hero headline |
| Hero 2 | 6rem | 3.5rem | Secondary hero |
| H1 | 4.5rem | 3rem | Page titles |
| H2 | 3rem | 2rem | Section headings |
| H3 | 1.875rem | 1.5rem | Subsections |
| H4 | 1.5rem | 1.25rem | Card titles |
| Body Large | 1.125rem | 1rem | Lead paragraphs |
| Body | 1rem | 0.875rem | Standard text |
| Caption | 0.875rem | 0.75rem | Labels, captions |
| Small | 0.75rem | 0.75rem | Fine print |

### Letter Spacing

| Element | Spacing |
|---------|---------|
| Hero headlines | -0.02em (tight) |
| Large headings | -0.01em |
| Body text | Normal (0) |
| Labels/Caps | 0.2em - 0.3em |

### Line Heights

| Element | Line Height |
|---------|-------------|
| Headlines | 1.0 - 1.1 |
| Subheadings | 1.2 - 1.3 |
| Body text | 1.5 - 1.8 |

---

## Spacing System

Based on 4px base unit.

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight spacing |
| sm | 8px | Small gaps |
| md | 16px | Standard spacing |
| lg | 24px | Section padding |
| xl | 32px | Large gaps |
| 2xl | 48px | Section margins |
| 3xl | 64px | Major sections |
| 4xl | 96px | Hero spacing |

### Container Widths

| Size | Max Width |
|------|-----------|
| Standard | 1280px (max-w-6xl) |
| Wide | 1536px (max-w-7xl) |
| Full | 100% |

### Padding

- **Container horizontal:** 24px mobile, 32px tablet, 48px desktop
- **Section vertical:** 64px mobile, 96px tablet, 128px desktop
- **Cards:** 32px (p-8)

---

## Components

### Buttons

**Primary Button**
```
Background: #2563EB (Blue 600)
Text: White
Hover: #DB2777 (Pink 600)
Border radius: 8px
Padding: 16px 32px
Font weight: 500 (Medium)
Transition: 0.3s ease-out
```

**Secondary Button**
```
Background: Transparent
Border: 1px solid #4B5563 (Gray 600)
Text: #D1D5DB (Gray 300)
Hover Background: #1F2937 (Gray 800)
Hover Border: #6B7280 (Gray 500)
```

### Cards

```
Background: #111827 (Charcoal)
Border: 1px solid #374151 (Gray 700)
Border radius: 8px
Padding: 32px
Hover: Lift -4px, border lightens
Shadow on hover: 0 8px 30px rgba(0, 0, 0, 0.4)
```

### Glass Effect (Overlays)

```
Background: rgba(17, 24, 39, 0.8)
Backdrop blur: 16px
Border: 1px solid rgba(55, 65, 81, 0.3)
```

---

## Animation Guidelines

### Timing

| Type | Duration | Easing |
|------|----------|--------|
| Fast | 0.2s | ease-out |
| Standard | 0.3s | cubic-bezier(0.4, 0, 0.2, 1) |
| Slow | 0.8-1.2s | cubic-bezier(0.16, 1, 0.3, 1) |

### Common Animations

- **Fade in up:** Start 20px below, opacity 0 to 1
- **Hover lift:** Translate -4px on Y axis
- **Scale on click:** Scale to 0.95

### Accessibility

Always respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  animation: none;
  transition: none;
}
```

---

## Iconography

**Library:** Lucide React
**Style:** Line icons, stroke width 1.5-2
**Never use emojis**

### Common Icons
- Arrow right (navigation)
- Arrow down (scroll indicator)
- Settings (gear)
- Check (success)
- X (close)

---

## Document Templates

### Cover Page

```
[Dark gradient background: #000 to #111827]

[Logo - centered, medium size]

[Title - Hero 1, Thin weight, White]
[Subtitle - H3, Light weight, Gray 400]

[Date and version - Caption, Gray 500, bottom]
```

### Section Header

```
[Section number - Caption, uppercase, tracking 0.2em, Gray 500]
[Title - H2, Light weight, White]
[Divider line - Gray 700, 1px]
```

### Content Page

```
[Page number - Small, Gray 500, bottom corner]
[Body text - Body, Regular, Gray 300]
[Emphasis - Semibold, White]
```

---

## Pitch Deck Structure

1. **Cover** - Logo, title, tagline
2. **Problem** - Clear statement of the challenge
3. **Solution** - Your approach (keep minimal)
4. **How it works** - 3-4 key points
5. **Proof** - Case studies, metrics
6. **Team** - Brief credentials
7. **Next steps** - Clear CTA

### Slide Design Rules

- One idea per slide
- Max 6 words in headlines
- Use full-bleed images or solid dark backgrounds
- Text left-aligned, max 60% width
- Generous whitespace

---

## Voice & Tone

### Writing Style

- **Confident** but not arrogant
- **Direct** - get to the point
- **Premium** - quality over quantity
- **Forward-looking** - focus on outcomes

### Headlines

```
Bad:  "We help companies with their digital transformation needs"
Good: "Ambition. Accelerated."

Bad:  "Our AI-powered solutions can help you..."
Good: "AI-powered. Built for speed. Shipped with care."
```

### Avoid

- Jargon and buzzwords
- Passive voice
- Long sentences
- Exclamation marks
- Emojis

---

## Quick Reference

### Essential Hex Codes

```
Black:       #000000
Charcoal:    #111827
Gray 800:    #1F2937
Gray 700:    #374151
Gray 300:    #D1D5DB
White:       #FFFFFF
Blue 600:    #2563EB
Blue 500:    #3B82F6
```

### Essential Font Specs

```
Font: Inter
Hero: 100 weight, -0.02em tracking
Body: 400 weight, normal tracking
Labels: 500 weight, 0.2em tracking, uppercase
```

### Border Radius

```
Small: 4px
Default: 8px
Large: 12px
Full: 9999px
```

---

*Last updated: January 2025*
