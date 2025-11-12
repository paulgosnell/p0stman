# Voice Agent Maintenance Toggle

## Current Status: 🍔 OUT FOR LUNCH (Disabled)

The voice agent has been temporarily disabled and shows a fun maintenance message to testers.

---

## To Re-Enable the Voice Agent

When you're ready to bring the voice agent back online, simply:

1. Open the file: `src/components/voice-agent/SectionVoiceAgent.tsx`

2. Find line 76 (near the top of the component function):
   ```typescript
   // TEMPORARY: Voice agent maintenance mode
   const VOICE_AGENT_MAINTENANCE = true;
   ```

3. Change `true` to `false`:
   ```typescript
   // TEMPORARY: Voice agent maintenance mode
   const VOICE_AGENT_MAINTENANCE = false;
   ```

4. Save the file and rebuild/redeploy:
   ```bash
   npm run build
   vercel --prod
   ```

That's it! The voice agent will be fully functional again.

---

## What the Maintenance Mode Shows

### Inline Mode (full-width):
- 🍔 Animated hamburger icon (bouncing)
- Message: "Voice Agent Out for Lunch"
- Subtitle: "Our AI assistant is being upgraded with new capabilities. Back online soon!"
- CTA: Link to contact page

### Floating Mode (compact button):
- 🍔 Badge with "Voice Agent out for lunch" text
- Gradient orange-to-pink styling
- Hover animation

---

## Where the Voice Agent Appears

The SectionVoiceAgent component is used in several places across the site:
- Contact Page
- Voice Agent Demo page
- Sales Prospect Demo
- Floating Guide Agent
- Any other pages using the voice agent

All instances will show the maintenance message when `VOICE_AGENT_MAINTENANCE = true`.

---

## Alternative Messages

If you want to change the maintenance message, edit the same file around lines 285-339. You can:
- Change the emoji (currently 🍔)
- Change the title (currently "Voice Agent Out for Lunch")
- Change the subtitle text
- Customize the styling/colors

Example alternative messages:
- 🔧 "Voice Agent Being Upgraded"
- 🌙 "Voice Agent Taking a Power Nap"
- ⚡ "Voice Agent Getting Supercharged"
- 🚀 "Voice Agent in Hyperdrive Mode"
- 🎯 "Voice Agent in Training"

---

**Last Updated:** 2025-11-12
**Modified By:** Claude Code
