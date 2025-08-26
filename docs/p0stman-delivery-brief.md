# P0STMAN — “Special Delivery for [Agency]” Animated Outreach Microsite

**URL pattern:** `https://p0stman.com/delivery-for-[agency-slug]`  (e.g., `/delivery-for-akqa`)

---

## 1) Goal & Story

Build a bespoke, **animated digital letter** that lands as a personalised “Special Delivery” for each target agency. The experience opens with an **envelope → letter** transition, then tells a tight story about Paul (“The Postman”) and what he delivers: **AI‑powered prototypes, activations, and digital products — fast**. It ends with a bold CTA to book a jam.

**This is NOT a consumer postcard sender.** It’s a **one‑page, agency‑specific pitch experience** that proves capability through the medium itself.

**Core line:** *“The Postman always delivers.”*

**Tone:** Playful, senior, fast-moving, confident.  
**Devices:** Mobile‑first, premium on desktop.

---

## 2) Tech & Hosting

- as is

---

## 3) Personalisation

- **Agency slug** taken from the path: `/delivery-for-[agency-slug]`.  
- **Readable agency name** from `?agency=AKQA` (fallback: title‑case the slug).  
- **Optional params:**  
  - `?rep=First+Name` → personalises greetings (e.g., “Hey Sam @ AKQA”).  
  - `?cal=...` → override Calendly link.  
  - `?minimal=true` → reduced‑motion/high‑contrast.
- Inject agency name into on‑page copy, `<title>`, meta description, and OG image.

---

## 4) Information Architecture (Screens)

### step 1 — **The Delivery**
- Visual: Clean desk background. **Envelope slides in** with a soft “thud”.  
- Envelope text:  
  ```
  Special Delivery for [Agency Name]
  From: The Postman (Paul Gosnell)
  ```
- Click/tap → flap opens → paper **folds out** into a letter.
- Micro‑line fades in: *“The Postman always delivers.”*

### step 2 — **Opening Letter**
Typewriter‑style lines:
> Dear [Agency Name],  
> This isn’t a pitch deck.  
> This is a delivery.

### step 3 — **Who I Am**
Short copy block + animated circular stamp **“20 Years • Delivered”**:
- *“I’ve spent 20 years in agencies and startups — even founded and sold one.”*  
- *“I know pitch pressure, client curveballs, and shipping at speed.”*  
- *“Now I vibe‑code with AI to deliver prototypes, products and activations — fast.”*

### step 4 — **Case Studies (3 envelope cards)**
Each card opens like a mini envelope; hover/press stamps **DELIVERED**.
- **Jack Morton / Saudi Football Team Pitch**  
  *Dropped in, hit the ground running. Built unique digital elements woven into the pitch. High‑stakes, high‑impact, delivered.*
- **Belong Interactive (Dubai)**  
  *Repositioned and modernised the agency in 2 months.*
- **Monstarlab (Dubai)**  
  *Product strategy, design and build. Hands‑on, commercial, client‑ready.*

### step 5 — **Agency & Brand Highlights (logo grid)**
Logos animate in like stamps being pressed:
- **Agencies:** Jack Morton • Belong Interactive • Monstarlab • Genieology • Dehora • Grampy  
- **Brands:** HSBC • Visa • FAB • Al Arabiya • Al Futtaim • Coutts • Ferrari World • Saudi Football Team  
- **Own ventures:** Bolt • Chilled • P0STMAN

Tagline under grid:  
*“If your clients recognise these names, you’ll recognise the value I bring.”*

### step 6 — **Recent Wins (ticker/carousel)**
- *Founded Genieology → 30 staff → acquired.*  
- *Supported Bolt through hypergrowth (>$100m raise), world’s fastest‑growing AI startup.*  
- *Created Vibe Gaming sponsorship: world’s largest hackathon & AI builders community.*  
- *Built my own AI products: P0STMAN & Chilled Sites.*

### step 7 — **The Offer + CTA**
Bold letter panel with a **wax‑seal CTA**:
> *“Think of me as your freelance secret weapon — the Postman you call when you need something live, not slides.*  
> *Prototypes. Activations. Digital products. **Delivered.***”

CTA: **Book a Jam →** (google calendar)

### step 8 — **The Close**
Letter folds back into the envelope → **seal presses** with a satisfying stamp.  
Final line: *“Signed, sealed, delivered… let’s make your next pitch unstoppable.”*  
Footer: name + contact.

---

## 5) Visual Style

- **Palette:** P0STMAN   
- **Motifs:** envelope, stamps, postal marks, wax seal, paper grain.  
- **Type:** Inter (Google Fonts) or system stack; big, confident headings.  
- **Assets:** SVG for stamps/seal; subtle grain as tiny repeating PNG.  
- **Motion feel:** deliberate, tactile, playful — but performant.

---

## 6) Animation Plan (GSAP)

Suggested timeline (pseudo):
```
const tl = gsap.timeline({ defaults: { ease: 'power3.out' }});
tl.from('.env', { y: -80, opacity: 0, duration: 0.6 })
  .to('.env', { y: 0, rotation: 0.5, duration: 0.3 })
  .to('.env-flap', { rotateX: 180, transformOrigin: 'top center', duration: 0.7 })
  .from('.letter', { y: 30, scale: 0.98, opacity: 0, duration: 0.5 }, '-=0.3')
  .from('.type-line', { opacity: 0, stagger: 0.25, duration: 0.2 })
  .from('.stamp-20yrs', { scale: 0.8, opacity: 0, duration: 0.3, ease: 'back.out(1.6)' })
  .from('.case-card', { y: 24, opacity: 0, stagger: 0.12 })
  .from('.logo-stamp', { scale: 0.9, opacity: 0, stagger: 0.06 })
  .from('.ticker', { x: 40, opacity: 0, duration: 0.4 })
  .from('.cta', { scale: 0.85, opacity: 0, duration: 0.25 })
```
**Hover/press effects:** case cards scale(1.02) + soft shadow; stamp press = scale 1.12 → 1 with bounce.

---

## 7) Content Config (editable JSON)

Create `/content/delivery.json`:
```json
{
  "defaultCalendly": "https://calendly.com/paulgosnell/jam",
  "sections": {
    "openingLines": [
      "Dear [Agency Name],",
      "This isn’t a pitch deck.",
      "This is a delivery."
    ],
    "whoIAm": [
      "20 years across agencies & startups (founded and sold one).",
      "I know pitch pressure and client reality.",
      "I vibe-code with AI to deliver prototypes, products and activations—fast."
    ],
    "caseStudies": [
      {
        "title": "Jack Morton / Saudi Football Team Pitch",
        "copy": "Dropped in. Built unique digital elements woven into the pitch. High-stakes, high-impact, delivered."
      },
      {
        "title": "Belong Interactive (Dubai)",
        "copy": "Repositioned and modernised the agency in 2 months."
      },
      {
        "title": "Monstarlab (Dubai)",
        "copy": "Product strategy, design and build. Hands-on, commercial, client-ready."
      }
    ],
    "logos": {
      "agencies": ["Jack Morton","Belong Interactive","Monstarlab","Genieology","Dehora","Grampy"],
      "brands": ["HSBC","Visa","FAB","Al Arabiya","Al Futtaim","Coutts","Ferrari World","Saudi Football Team"],
      "ventures": ["Bolt","Chilled","P0STMAN"]
    },
    "wins": [
      "Founded Genieology → 30 staff → acquired.",
      "Supported Bolt through hypergrowth ($100m+ raise).",
      "Created Vibe Gaming sponsorship: world’s largest hackathon & AI builders community.",
      "Built P0STMAN & Chilled Sites (AI products)."
    ],
    "offer": [
      "Your freelance secret weapon.",
      "When you need something live, not slides.",
      "Prototypes. Activations. Digital products. Delivered."
    ]
  }
}
```

---

## 8) CTA & Links

- Primary CTA: **Book a Jam →** (`defaultCalendly`, override via `?cal=`)  
- Secondary links (small text): **P0STMAN Case Studies**, **Chilled Sites**

---

## 9) Tracking & Events (Supabase)

Send `POST /api/events` (or direct Supabase Edge Function) with:
```json
{
  "timestamp": "<ISO8601>",
  "path": "/delivery-for-akqa",
  "agency": "AKQA",
  "event": "view|open_envelope|scroll_50|cta_click",
  "userAgent": "...",
  "referrer": "..."
}
```
Minimum events: `view`, `open_envelope`, `cta_click`.  
Table: `events` indexed by `timestamp`, `agency`, `event`.

---

## 10) Performance & Accessibility

- LCP < **2.0s** on 4G; total JS < **120kb gz**.  
- SVGs, lazy‑load heavier images.  
- `prefers-reduced-motion`: switch to fades, no big transforms.  
- Keyboard: **Enter** opens envelope; Tab order logical; focus rings visible.  
- ARIA on interactive elements; alt text on logos/stamps.

---

## 13) Acceptance Criteria (must‑haves)

- Smooth envelope → letter fold animation on mobile & desktop.  
- Agency name appears in **≥ 3** locations (hero, copy, meta).  
- Three interactive case study cards with **DELIVERED** stamp effect.  
- Logo grid with press‑in animation.  
- CTA opens Calendly; tracking fires `cta_click`.  
- Events logged: `view`, `open_envelope`, `cta_click`.  
- Lighthouse ≥ **90** (Perf, Best Practices, SEO); basic a11y passes.

---

## 14) Nice‑to‑Haves

- **Konami code** Easter egg → “Special Delivery Mode” confetti stamp.  
- Tiny paper‑grain overlay toggle.  
- `?minimal=true` query for clean, reduced‑motion variant.
