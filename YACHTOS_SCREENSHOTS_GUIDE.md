# YachtOS Case Study - Adding Your 5 App Screenshots

## What I Built

I've created a beautiful horizontal scrolling gallery specifically for showcasing the 5 YachtOS apps. Here's what it includes:

### Features:
- ✨ Horizontal scrolling gallery with smooth snap-to behavior
- 📱 Mobile-optimized with 9:16 aspect ratio cards
- 🎨 Elegant white cards with shadow effects
- 🏷️ App name badges at the top of each screenshot
- 💬 Hover descriptions that appear on desktop
- 📊 Scroll indicators at the bottom
- 🎭 Smooth animations as cards enter view

---

## How to Add Your Screenshots

### Step 1: Add Your 5 App Screenshots to the Project

Place your 5 app screenshots in the `public/agents/` folder with these names (or similar):

```
public/agents/yachtos-command.png    (COMMAND app)
public/agents/yachtos-fleet.png      (FLEET app)
public/agents/yachtos-harbor.png     (HARBOR app)
public/agents/yachtos-owner.png      (OWNER app)
public/agents/yachtos-guest.png      (GUEST app)
```

### Step 2: Update the Image Paths

Open `src/pages/case-studies/YachtOS.tsx` and find the `appScreenshots` array (around line 56).

Update the image paths to point to your new screenshots:

```typescript
const appScreenshots = [
  {
    name: "COMMAND",
    image: "/agents/yachtos-command.png",  // Update this path
    description: "Voice-first captain operations with AI tools for hands-free vessel management"
  },
  {
    name: "FLEET",
    image: "/agents/yachtos-fleet.png",     // Update this path
    description: "Multi-vessel analytics with AI cost optimization and health scoring"
  },
  {
    name: "HARBOR",
    image: "/agents/yachtos-harbor.png",    // Update this path
    description: "Berth coordination and marina operations management"
  },
  {
    name: "OWNER",
    image: "/agents/yachtos-owner.png",     // Update this path
    description: "Real-time oversight and vessel tracking for yacht owners"
  },
  {
    name: "GUEST",
    image: "/agents/yachtos-guest.png",     // Update this path
    description: "Luxury concierge AI with cabin climate control and services"
  }
];
```

### Step 3: Customize the Descriptions (Optional)

You can customize the hover descriptions for each app by editing the `description` field in each object above.

### Step 4: Update the Main Hero Image (Optional)

If you want to update the main large image at the top of the Solution section, update this line (around line 94):

```typescript
image: "/agents/yachtos-2.png",  // Change to your preferred hero image
```

---

## Screenshot Requirements

For best results, your screenshots should be:
- **Format**: PNG or JPG
- **Aspect Ratio**: 9:16 (mobile portrait)
- **Recommended Size**: 1080x1920px or similar mobile dimensions
- **Quality**: High resolution for sharp display
- **Content**: Show the main UI of each app clearly

---

## What It Looks Like

The gallery section will appear:
1. After the main solution image
2. Before the tech stack section
3. With the heading "Five Specialized Apps"
4. With horizontal scrolling on mobile/tablet
5. With all 5 apps visible in a row on desktop (if screen is wide enough)

### Desktop Features:
- All apps visible in a row (on wide screens)
- Hover to see descriptions
- Cards lift slightly on hover
- Gradient overlay appears on hover

### Mobile Features:
- Swipe to scroll horizontally
- Snap-to behavior (each card snaps into place)
- No scrollbars (clean look)
- Touch-friendly navigation

---

## Testing Locally

After adding your screenshots, test it:

```bash
npm run dev
```

Then visit: `http://localhost:5173/case-study/yachtos`

---

## Reusing This for Other Multi-App Case Studies

This component is reusable! If you have other case studies with multiple apps, you can use the same pattern:

```typescript
const appScreenshots = [
  {
    name: "App Name",
    image: "/path/to/screenshot.png",
    description: "Short description of the app"
  },
  // ... more apps
];

const solution = {
  // ... other fields
  appScreenshots,  // Add this
  // ... other fields
};
```

Then pass it to SolutionLuxury:

```tsx
<SolutionLuxury
  // ... other props
  appScreenshots={solution.appScreenshots}
  // ... other props
/>
```

---

## Current Placeholder Images

Right now, I'm using these placeholder images (you have these):
- `/agents/yachtos-mobile-1.png`
- `/agents/yachtos-mobile-2.png`
- `/agents/yachtos-mobile-3.png`

Some apps are using the same image as placeholders. Once you add your actual 5 app screenshots, update the paths as described above.

---

**Last Updated:** 2025-11-12
**Component Location:** `src/components/case-studies/SolutionLuxury.tsx`
**Page Location:** `src/pages/case-studies/YachtOS.tsx`
