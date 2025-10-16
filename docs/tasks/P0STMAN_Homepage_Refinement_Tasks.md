# P0STMAN Homepage Refinement Tasks
## Claude Code Action Items

**Status:** 80% complete, ready for final polish  
**Target:** Ship-ready in 1 session  
**Time estimate:** 30-45 minutes

---

## Priority 1: Color & Backgrounds (Critical)

### Task 1.1: Remove All Purple/Gradient Backgrounds
**Current issue:** Purple/gradient backgrounds are still appearing in sections, breaking the white + blue + orange color system.

**Action:**
- Audit ALL sections for background colors
- Remove any `bg-purple-*`, `bg-gradient-*`, or non-white backgrounds (except footer which is dark gray)
- Every section should have `bg-white` as default
- Only exception: Footer can stay dark (`bg-gray-900`)

**Sections to check:**
- [ ] "What We Build" section (Agents)
- [ ] "Recent Work" section (CaseStudies)
- [ ] "How We Work" section (Services) - especially the middle orange card
- [ ] Any hover states that add gradients

### Task 1.2: Services Cards - Fix Middle Card (MVP to Market)
**Current issue:** Middle card has full orange background, dilutes hierarchy and looks inconsistent.

**Action:**
- Change the middle "MVP to Market" card from `bg-orange-*` to `bg-white`
- Keep the blue top border (4px) on all three cards for consistency
- Move the orange to the CTA button only (`bg-orange-500` on button)
- All three cards should be: White background + blue top border + blue CTA button

**Result:** All cards match. Orange is reserved for CTAs only.

---

## Priority 2: Spacing & Gaps (Important)

### Task 2.1: Increase Gap Between Sections
**Current issue:** Sections feel slightly cramped. Need more breathing room (60% negative space target).

**Action:**
- Audit section padding/margins
- Current typical: `py-32` (128px top/bottom)
- New target: `py-40` or `py-48` (160-192px top/bottom) on desktop
- Mobile: Keep `py-16` or increase to `py-20`
- Between grid items: Ensure `gap-16` or `gap-20` (64-80px)

**Sections to adjust:**
- [ ] Hero section (increase bottom padding)
- [ ] Metrics section (increase padding)
- [ ] Agents section (increase padding)
- [ ] Case Studies section (increase padding between each case)
- [ ] Services section (increase padding)
- [ ] CTA section (increase padding)

### Task 2.2: Hero Visual (Orb/Waveform) - Add More Gap
**Current issue:** On desktop, the gap between text (left) and orb visualization (right) could be larger.

**Action:**
- Increase gap in the hero grid from current value to `gap-20` or `gap-24` (80-96px)
- Ensure the orb visualization doesn't feel cramped on the right
- Visual should feel spacious, not squeezed

---

## Priority 3: Case Studies - Highlight Results (Important)

### Task 3.1: Make Case Study Results Bold & Blue
**Current issue:** Case study outcomes/metrics blend in with regular text.

**Action:**
- Each case study has a result/metric line (e.g., "500+ leads qualified/month")
- Make this text: `font-bold` + `text-blue-600`
- Consider increasing font size slightly (text-lg instead of base)
- This makes the "proof point" pop and draws the eye

**Example structure:**
```
[Project Image]

Client Name (small, gray)
Project Title (large, bold, black)
Problem (regular, gray)
Solution (regular, gray)

Result/Metric (BOLD, BLUE, text-lg) ← Make this pop
```

**Cases to update:**
- [ ] AI Website Generator - make the result metric bold + blue
- [ ] Content Generation AI - make the result metric bold + blue
- [ ] Voice-First Patient Portal - make the result metric bold + blue

---

## Priority 4: Typography Fine-Tuning (Nice to Have)

### Task 4.1: Body Text Size on Mobile
**Current issue:** Some body text might be too small on mobile (hard to read).

**Action:**
- Audit base font size on mobile
- Ensure minimum 16px for body text on phones (helps with mobile zoom)
- Headers should scale down proportionally but remain readable
- Check: Description text in "What We Build" cards

**Check these components:**
- [ ] Agent card descriptions (should be readable on small screens)
- [ ] Case study descriptions
- [ ] Service tier descriptions

### Task 4.2: Line Height
**Current issue:** (If applicable) Text might feel too tight.

**Action:**
- Ensure line-height is comfortable (1.6 or 1.7)
- Apply `leading-relaxed` or `leading-loose` to body text
- Keep headlines tighter (`leading-tight` or `leading-snug`)

---

## Priority 5: Responsive Breakpoints Audit (Nice to Have)

### Task 5.1: Mobile Spacing Consistency
**Action:**
- Test all sections on mobile (375px, 414px, 768px)
- Ensure no horizontal scroll
- Padding on mobile should be `px-6` (24px) consistently
- Buttons should be large enough to tap (min 48px height)

**Test these:**
- [ ] Hero section on mobile (text + orb should stack vertically)
- [ ] Metrics on mobile (3 columns → 1 column stacked)
- [ ] Agent cards on mobile (3 columns → 1 column)
- [ ] Case studies on mobile (images should be full width)
- [ ] Service cards on mobile (3 columns → 1 column)

---

## Quick Reference: Color Usage

**After refinement, colors should be used ONLY as follows:**

```
Primary Blue (#0066FF):
- Headers (h1, h2, h3)
- Links
- CTA buttons
- Accent text (metrics, results)
- Top borders on service cards

Orange (#FF6B35):
- CTA buttons ONLY
- Used on text inside buttons (or as background for primary CTAs)

White (#FFFFFF):
- Background for all main sections
- Card backgrounds
- Text background

Gray scale:
- Body text: gray-700 or gray-600
- Secondary text: gray-600 or gray-500
- Borders: gray-100 or gray-200
- Footer background: gray-900
- Footer text: white or gray-100
```

**Red flags to fix:**
- Any purple backgrounds → Change to white
- Any gradients → Remove, use solid colors
- Orange on non-CTA elements → Change to blue or gray
- Any other colors → Should not exist

---

## Testing Checklist (Before Ship)

- [ ] All backgrounds are white (except footer)
- [ ] Orange appears ONLY on CTA buttons
- [ ] Services cards all match: white + blue top border
- [ ] Hero has adequate gap between text and orb
- [ ] All section padding increased (py-40+)
- [ ] Case study metrics are bold + blue
- [ ] Mobile view has no horizontal scroll
- [ ] Buttons are at least 48px tall
- [ ] Body text is minimum 16px on mobile
- [ ] Hover states work smoothly
- [ ] All links have proper focus states (keyboard nav)
- [ ] Lighthouse score 90+ (performance, accessibility, SEO, best practices)

---

## Git Workflow

```bash
# Start from current branch
git status

# Make changes to:
# - components/Agents.tsx (remove purple bg)
# - components/CaseStudies.tsx (make results bold + blue)
# - components/Services.tsx (fix middle card, white bg)
# - components/Hero.tsx (increase gap)
# - All components (increase section padding)

# Commit changes
git add .
git commit -m "refine: polish spacing, colors, and case study results

- Remove purple/gradient backgrounds, keep white system
- Fix Services middle card to white with orange CTA
- Increase section padding for 60% negative space
- Make case study metrics bold + blue
- Add more gap in hero section (text vs orb)
- Audit mobile spacing and typography"

# Push to branch
git push origin redesign/homepage-v2
```

---

## Success Criteria

✅ **All backgrounds are white (except footer)**  
✅ **Orange only on CTAs**  
✅ **Increased spacing (60% negative space)**  
✅ **Case results are visually prominent (bold + blue)**  
✅ **Services cards are consistent**  
✅ **Mobile view is clean and readable**  
✅ **Lighthouse 90+ on all metrics**  
✅ **Localhost preview looks ship-ready**

---

## If You Get Stuck

Common issues + fixes:

**"Purple background won't go away"**
→ Search for `bg-purple`, `bg-gradient`, `bg-slate-*` in all component files
→ Replace with `bg-white`

**"Services cards don't match"**
→ All three need: `border-t-4 border-blue-600` + `bg-white`
→ CTA buttons: `bg-orange-500 text-white` OR `bg-blue-600 text-white`

**"Spacing looks uneven"**
→ Check: Each `<section>` should have `py-40` or `py-48` on desktop
→ Check: Grid gaps should be `gap-16` or `gap-20`
→ Mobile should have `py-16` or `py-20`

**"Mobile text is too small"**
→ Find components with small text
→ Add `text-base` or `text-lg` class
→ Ensure `leading-relaxed` for body text

---

## Notes

- This is final polish before shipping to production
- Estimated time: 30-45 minutes
- After these changes: Ready to deploy to p0stman.com
- No major restructuring needed—just refinement

**You're 80% there. These tweaks get you to 100%.**
