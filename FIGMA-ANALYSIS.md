# Parylene Landing Page — Figma Design Analysis (Desktop)

**Source:** `https://www.figma.com/design/C7QPZyuxT3J4daoTdSjvRE/Untitled?node-id=51-133`
**Root frame:** `Parylene landing page` (id `51:133`)
**Canvas:** `1400 × 9522` px (desktop only)
**Reference screenshot:** `figma-screenshot.png` (downloaded from Figma)
**Per-section raw XML:** `.figma-section-0.xml` … `.figma-section-11.xml`

> NOTE: Color tokens / variable definitions could not be fetched — Figma MCP rate limit reached on Starter plan (`get_variable_defs` blocked). Colors below are **inferred from the screenshot** and must be color-picked from the Figma file before final implementation.

---

## Section Map (12 depth-1 frames, top → bottom)

| # | Section | Frame ID | Y-pos | Height |
|---|---------|----------|-------|--------|
| 1 | Hero | 51:134 | 0 | 794 |
| 2 | About Us | 51:157 | 794 | 588 |
| 3 | What is Parylene | 51:164 | 1382 | 902 |
| 4 | Application (Trusted across critical systems) | 51:225 | 2284 | 910 |
| 5 | Why Choose Parylene | 51:274 | 3194 | 785 |
| 6 | Parylene Advantages | 51:387 | 3979 | 1348 |
| 7 | How Parylene Coating Works | 51:442 | 5327 | 765 |
| 8 | State-of-the-art Bangalore Facility | 51:507 | 6092 | 816 |
| 9 | Conformal Coating Comparison Chart | 51:520 | 6908 | 981 |
| 10 | Industries We Serve | 51:631 | 7889 | 558 |
| 11 | Future of Protection (CTA) | 51:666 | 8447 | 476 |
| 12 | Get in Touch / Footer | 51:676 | 8923 | 599 |

Page padding: **100px left/right** in all standard content rows (content width = 1200px).

---

## 1. Hero — `51:134` (1400 × 794)

**Background:** Full-bleed image (-16, -102, 1416×1058) — `openart-image_…` — circuit-board / chip illustration with light gradient overlay.

**Top Nav (`Frame 18`, 1400×125):**
- Inner container `Frame 1707482482` at x=100, y=29 — width 1122, height ~91
- **Logo:** `Gemini_Generated_Image_w3lqadw3lqadw3lq 2` — 129 × 90.78 (rounded rectangle)
- **Nav links** (right block, total width 957, links spaced):
  - Home (52w) → x=0
  - About (53w) → x=82
  - What is Parylene (145w) → x=165
  - Benefits (71w) → x=340
  - Process (69w) → x=441
  - Applications (107w) → x=540
  - Industries (86w) → x=677
  - Contact (69w) → x=793
- All link text height = 22px (likely 16px font, 22px line-height)

**Headline:** `Advanced Conformal Coating Solutions for Ultimate Protection`
- Position: x=245, y=216 — width 911, height 106 → ~2 lines, large display font (~44–48px, bold)

**Subheadline:** `Parylene delivers ultra-thin, conformal coating technology that protects critical components across industries — from electronics to medical devices.`
- Position: x=171, y=328 — width 1059, height 64 (~2 lines, 16–18px)

**CTA buttons (`Frame 22`, 402 × 52, centered at x=499, y=427):**
- Primary `Get a Quote` — 194 × 52 (filled — text x=28, y=10, w=138, h=32)
- Secondary `Contact Us` — 185 × 52 with 23px gap (likely outlined / ghost)
- Both buttons: ~32px text height (looks 16–18px font with vertical centering)

---

## 2. About Us — `51:157` (1400 × 588)

Two-column row: text left, image right.

**Left column** `Frame 25` (x=100, y=94, 608 × 393):
- Eyebrow: `ABOUT US` — 608 × 19 (uppercase small label, ~14px)
- H2: `About Parylene` — 608 × 36 (~28–32px bold)
- Body: full paragraph — 608 × 300 starting at y=93 inside the column. Text:
  > "Parylene is a specialized nano-coating solution provider offering advanced conformal coating technology for high-performance applications. Inspired by India's growing semiconductor and manufacturing ecosystem, Parylene was established to bring world-class coating solutions locally — eliminating dependency on overseas services while improving quality, speed, and cost-efficiency. Our facility, built with global expertise, delivers precision coating solutions tailored for modern industries."

**Right column** `Frame 1707482385` (x=822, y=72, 478 × 452) — image placeholder (chip / wafer visual per screenshot).

---

## 3. What is Parylene — `51:164` (1400 × 902)

Two columns inside a 1200×715 inner container at (100, 121.5).

**Background image (right side):** `ChatGPT Image Apr 29… 1` at x=1400, y=5, 1400×761 — extends off-canvas (decorative).

**Left column** `Frame 1707482508` (523 × 562):
- Eyebrow: `WHAT IS PARYLENE` (513 × 18)
- H2: `What is Parylene Coating ?` (513 × 124 → ~3-line large heading)
- Sub-heading: `PARYLENE COATING IS THE MODERN TECHNOLOGY IN CONFORMAL COATING` (513 × 48, ~2 lines uppercase)
- Body: "Parylene is a conformal protective polymer coating material utilized to uniformly protect any component configuration on such diverse substrates as metal, glass, paper, resin, plastic, ceramic, ferrite & silicon." (464 × 120)
- **Molecular structures image** at y=429 (524 × 133) with caption: `Molecular structures of Parylene variants — N, C, D, F, and HT`

**Right column** `Frame 1707482395` (556 × 715):
- Title centered top: `Top Reasons to use Parylene` (262 × 23, ~18px bold)
- 6 feature rows, each 67px tall, 100px vertical gap, layout = 67×67 circular icon + 351×74 text block:

| # | Title (19h) | Description (height) |
|---|-------------|----------------------|
| 1 | Waterproofing Electronics | "Parylene provides a pinhole-free, ultra-thin barrier that protects electronics from moisture, corrosion, and contaminants." (45h) |
| 2 | Dielectric Strength | "Parylene offers high dielectric insulation, allowing safe high-voltage performance even in thin layers." (30h) |
| 3 | Dry Lubricity | "Parylene creates a low-friction surface that reduces wear and improves component longevity without lubrication." (30h) |
| 4 | Adhesion Tie Layer | "Parylene enhances bonding between surfaces, improving coating adhesion and durability." (30h) |
| 5 | Biocompatibility | "Parylene is FDA-approved and safe for use in medical and implantable devices." (30h) |
| 6 | Ruggedization | "Parylene strengthens delicate components and PCBs, increasing resistance to physical stress." (30h) |

Each icon = green circle (ellipse) with a small product image inside.

---

## 4. Application (Trusted Across Critical Systems) — `51:225` (1400 × 910)

**Eyebrow/title block** at top (`Frame 1707482416`, x=414, y=94, 573×89):
- Eyebrow: `APPLICATION` (348 × 19)
- H2: `Trusted across critical systems.` (1033 × 62, ~44px display, centered)

**Image grid** `Frame 1707482414` at (100, 249), 1200 × 600:
- 2 rows × 3 columns grid
- Each cell **384 × 288** with **24px gap** between cells (col gap = 408−384 = 24, row gap = 312−288 = 24)
- 6 image placeholders (PCBs, components per screenshot)

---

## 5. Why Choose Parylene — `51:274` (1400 × 785)

Decorative full-bleed background image `ChatGPT Image Apr 30… 1` at (0, -257, 1400×2488) — green tinted background.

**Center element** `Group 13` (484, 177, 403×385):
- Large ellipse `Ellipse 12` (403×385) — center circle
- Inside (`Frame 1707482438` 510, 324, 348×105):
  - Eyebrow: `Why Parylene? (Key Benefits)` (348 × 19)
  - H2: `Why Choose Parylene` (276 × 72 → 2-line)

**8 feature badges arranged radially around the center:**

| # | Frame | Approx position | Label |
|---|-------|-----------------|-------|
| 1 | 1707482448 | top-right (910, 131) | Completely conformal and uniform |
| 2 | 1707482452 | top-left (458, 131) | Transparent and optically clear |
| 3 | 1707482449 | upper-mid-right (970, 282) | Ultra-thin and lightweight |
| 4 | 1707482453 | upper-mid-left (398, 283) | No thermal stress during application |
| 5 | 1707482450 | lower-mid-right (959, 429) | Moisture and chemical resistant |
| 6 | 1707482454 | lower-mid-left (409, 430) | Biocompatible and environmentally friendly |
| 7 | 1707482451 | bottom-right (860, 583) | High dielectric strength |
| 8 | 1707482455 | bottom-left (508, 584) | Free from pinholes and defects |

Each badge: 71×78 icon container (62×62 circle with image) + 220×48 text block.

---

## 6. Parylene Advantages — `51:387` (1400 × 1348)

Decorative background image extends -1089 to +1433 (full bleed).

**Header block** (414, 94, 573×89):
- Eyebrow: `INDUSTRIES` (348 × 19) — *⚠ likely a Figma typo; based on context should be `ADVANTAGES`*
- H2: `Parylene Advantages` (596 × 62)

**5 advantage cards** — alternating left/right (offset layout):

| # | Group | Position | Title | Bullet items |
|---|-------|----------|-------|--------------|
| 1 | Group 21 | (100, 219), 758×204 | **PHISICAL** *(Figma typo for "Physical")* | • Nano-level precision coating  • Uniform even on complex surfaces  • Controlled thickness |
| 2 | Group 22 | (100, 627), 758×204 | **Electrical** | • Excellent insulation  • Anti-static properties |
| 3 | Group 24 | (100, 1035), 758×204 | **Thermal** | • Withstands extreme temperatures |
| 4 | Group 20 | (541, 423), 758×204 | **Barrier Protection** | • Resistant to moisture, chemicals, and corrosion  • Prevents gas permeability |
| 5 | Group 23 | (541, 831), 758×204 | **Mechanical** | • Smooth surface (dry lubrication)  • No stress during coating |

Each card: 116 × 148 product image (left) + title (~28–32px) + bullet list with green polygon (triangle) markers (16×16) and 3-column text.

---

## 7. How Parylene Coating Works — `51:442` (1400 × 765)

Decorative side images (-526 to +2488 vertical bleed).

**Header** (414, 64, 573×89):
- Eyebrow: `COATING PROCESS` (348 × 19)
- H2: `How Parylene Coating Works` (791 × 62)

**Left column (Group 30, 100, 205, 541×430)** — 4 numbered steps:

| Step | Title | Description | Y-offset |
|------|-------|-------------|----------|
| 1 | Vaporization | Raw material is converted into vapor under controlled temperature | 222 |
| 2 | Pyrolysis | Vapor transforms into reactive monomers | 334 |
| 3 | Deposition | Monomers form a thin polymer layer on the surface in a vacuum | 446 |
| 4 | Cold Trap | Excess material is safely captured and disposed | 558 |

Each step: 85.5 × 94 icon (74.7 circle + image) + 380.7 wide text. Vertical connector line (Vector 13) joins all 4 numbered circles.

**Right column (Group 31, 765, 151, 535×533)** — Process diagram image (`image 104`, 391×533) + 4 labels at right:
- Raw material (Dimer)
- Reactive Monomer (Gas Phase)
- Coating on Substrate (Polymer Layer)
- Excess Material (Captured)

---

## 8. State-of-the-art Bangalore Facility — `51:507` (1400 × 816)

Decorative side images (same family as section 7).

**Header** (414, 64, 573×89):
- Eyebrow: `Our faculty` *(Figma copy — should be "Our Facility")*
- H2: `State-of-the-art bangalore Facility` (1055 × 62)

**Image gallery** `Group 33` at (100, 213), 1200 × 522:
- **Component 7** — large left image (587 × 522) at (100, 213)
- **Component 8** — top-mid (292 × 255) at (700, 213)
- **Component 9** — top-right (292 × 255) at (1008, 213)
- **Component 10** — bottom-mid (292 × 254) at (700, 481)
- **Component 6** — bottom-right (292 × 254) at (1008, 481)
- Layout: 8px gaps between right-side cells, 13px between left and right blocks

---

## 9. Conformal Coating Comparison Chart — `51:520` (1400 × 981)

**Header** (414, 64, 573×89):
- Eyebrow: `comparision` *(Figma typo — "comparison")*
- H2: `Conformal Coating Comparison Chart` (1127 × 62)

**Table container** `Frame 1707482519` (112, 181, 1131 × 706):
- Top-left cell: `Performance Factors` (197 × 44, large heading)
- Column headers (row at y=75): **ACRYLIC** (269), **URETHANE** (440), **EPOXY** (634), **SILICONE** (812) — and **PARALYENE** *(spelling typo of "PARYLENE")* in the highlighted column at x=969
- 9 rows × 6 columns of `CONTENTS` instances (component placeholders) — likely status icons/check marks in production
- Performance row labels (column 1, 9 instances of "Performance") — 60px row height, 9 rows = 480px high
- Highlighted Parylene column has a small badge image (`Frame 1707482513` at 1045, 198, 184×93 — "Best" / featured ribbon)
- Horizontal grid lines (Vector 18–26) at every 60px
- Vertical grid lines (Vector 27–31) at column boundaries

> ⚠ The actual "Performance Factor" labels and per-cell values are component instances (not text in metadata). When implementing, color-pick from screenshot or fetch via `get_design_context` once rate limit resets.

---

## 10. Industries We Serve — `51:631` (1400 × 558)

**Header `Frame 1707482415` (327, 0, 573×89):**
- Eyebrow: `INDUSTRIES` (348 × 19)
- H2: `Industries We Serve` (596 × 62)

**Industry cards** `Group 17` (6.5, 153, 1214 × 213) — 7 cards in a row:

| # | Frame | X-pos | Width | Label |
|---|-------|-------|-------|-------|
| 1 | 1707482439 | 0 | 121 | EV & Automotive |
| 2 | 1707482440 | 163 | 161 | Electronics & Semiconductors |
| 3 | 1707482441 | 366 | 156 | Medical & Healthcare |
| 4 | 1707482442 | 564 | 127 | Aerospace & Defense |
| 5 | 1707482443 | 733 | 138 | Renewable Energy |
| 6 | 1707482444 | 913 | 124 | Oil & Gas |
| 7 | 1707482445 | 1079 | 148 | Industrial Manufacturing |

Each card: 121×137 image rectangle + label below (label rect 24–48h, font ~16–18px, 2 lines max).

---

## 11. Future of Protection (CTA) — `51:666` (1400 × 476)

**Container** `Frame 1707482480` (100, 69, 1200 × 338) with rounded background.

- Right image `image 107` at (621, 0, 595 × 338) — large product shot, full right half
- Eyebrow: `Future of Protection` (348 × 22, ~16px)
- H2: `Built for Next-Gen Technologies` (509 × 96 → ~2-line, ~40–44px bold)
- Body (884 × 34, ~1 line wrap):
  > "Parylene plays a critical role in protecting modern electronics, especially in electric vehicles, smart devices, and advanced medical systems — ensuring reliability in harsh environments."
- CTA button: `Get in touch` (158 × 44, primary filled, text 116×24 padded 21,10)

Background is a vibrant gradient (looks blue→purple→pink in screenshot — color-pick required).

---

## 12. Get in Touch / Footer — `51:676` (1400 × 599)

**Header** (100, 50, 573×85):
- Eyebrow: `Contact` (348 × 19)
- H2: `Get in Touch` (596 × 58)

**Two address blocks** at y=182 (each 489 × 137, with 74×74 circular icon + 389-wide text block):

**Left — Factory** (icon `hugeicons:factory-01`):
- `FACTORY ADDRESS` (24h title)
- `Parylene Asia Technologies Pvt Ltd`
- `Doddaballapur Integrated Textile Park Ltd, SW-51, Phase II, Doddaballapur Apparel Park, Doddaballapur, Bangalore - 561 203. INDIA.`

**Right — Corporate** (icon `heroicons-outline:office-building`):
- `CORPORATE OFFICE`
- `INTENT InfoTech Building,`
- `#226, INTENT InfoTech Building, Maria Street, Mariyannapalya, Near Manyata Tech Park, Bangalore – 560 024, INDIA.`

**Vertical divider** between blocks (Vector 15 at x=697, h=146)

**Contact bar `Group 34`** at (70, 373.5), 1261 × 124.5, separated by horizontal Vector 14:
- Logo at (100, 404, 126 × 94)
- Phone block (52×52 circle icon `material-symbols:call-outline-sharp`):
  - Label: `PHONE`
  - Value: `+91 98402 64453`
- Vertical divider Vector 16 at x=494
- Website block (52×52 circle icon `mynaui:globe`):
  - Label: `WEBSITE` — Value: `www.parylene.com`
- Vertical divider Vector 17 at x=740.5
- Email block (52×52 circle icon `material-symbols:mail-outline-rounded`):
  - Label: `EMAIL` — Value: `enqiry@parylene.com` *(Figma typo — "enquiry")*
- "Follow us" label (1074, 425) + social icons:
  - LinkedIn (`skill-icons:linkedin`, 26×26)
  - Mail (`uiw:mail`, 20×20)

**Footer bottom strip** `Frame 1707482495` at y=523, 1400×76:
- `Privacy Policy | Terms of Service` (224 × 17)
- `© 2026 Parylene. All Rights Reserved` (261 × 17)
- Centered at x=444 (combined ~513 wide)

---

## Inferred Color Palette (from screenshot — verify before use)

> Variables blocked by Figma rate limit. Color-pick these from the file before final values.

| Token | Likely value | Used in |
|-------|--------------|---------|
| Primary green | `#1E7A3E` / `#2E9F4F` (deep emerald) | Headline accent, "Parylene Coating" highlight, CTAs, badges, polygon bullets |
| Accent green-light | `#A8E6BC` / pale mint | Section 5 background tint, badge backgrounds |
| Body text | `#1F2A37` / near-black | Paragraph text |
| Muted text | `#6B7280` | Eyebrow labels, captions |
| White | `#FFFFFF` | Cards, comparison table cells, button text |
| Background neutral | `#F7F9FB` / very pale gray | Section backgrounds |
| CTA gradient (Sec 11) | Blue → purple → pink (e.g., `#3B82F6 → #8B5CF6 → #EC4899`) | "Built for Next-Gen Technologies" banner |

---

## Typography (heights only — Figma variables blocked)

| Style | Approx px | Source |
|-------|-----------|--------|
| Display H1 (hero) | 44–48 / bold | "Advanced Conformal Coating…" 911×106 |
| H2 section title | 28–32 / bold | "What is Parylene Coating?", "Parylene Advantages" |
| H3 card title | 18–20 / semibold | Feature card titles |
| Body | 14–16 / regular | Paragraph text |
| Eyebrow label | 12–14 / medium uppercase tracked | "ABOUT US", "INDUSTRIES" labels |
| Button | 14–16 / semibold | "Get a Quote", "Get in touch" |

---

## Implementation Notes

1. **Page width:** 1400px design canvas; treat as `max-width: 1400px` centered with `100px` horizontal padding (content = 1200px).
2. **Section padding (top):** Each section has a header block at y≈64–94 — translate to ~`pt: 80–96px`.
3. **Typos to verify with you (likely Figma copy issues):**
   - Section 5: name "Why choode parylene" → display "Why Choose Parylene" ✓
   - Section 6 eyebrow: "INDUSTRIES" — should likely be "ADVANTAGES"
   - Section 6 card 1: "PHISICAL" → "PHYSICAL"
   - Section 8 eyebrow: "Our faculty" → "Our Facility"; "bangalore" → "Bangalore"
   - Section 9 eyebrow: "comparision" → "comparison"; "PARALYENE" → "PARYLENE"
   - Section 12 email: "enqiry" → "enquiry" (or keep as-is if intentional)
4. **Component instances** (Section 8 facility, Section 9 comparison cells) need a second `get_design_context` call once rate limit resets — they hide their label/icon content behind component swaps.
5. **6 background "ChatGPT Image …" blocks** appear behind sections 5, 6, 7, 8, 9 — these are the same large green-tinted illustration positioned to bleed off-canvas, creating the green ambient wash. In code this is one repeating background, not 6 separate images.
6. **Per AGENTS.md** in this repo: Next.js conventions here differ from training data — read `node_modules/next/dist/docs/` before implementing.

---

## What's missing (couldn't fetch due to rate limit)

- `get_variable_defs` — exact color tokens, font families, font sizes, line heights, font weights
- `get_design_context` per-section — image asset download URLs, exact paddings/gaps from auto-layout, component instance content
- Asset images — all `ChatGPT Image …`, `Gemini_Generated_Image …`, `openart-image …` references will need to be exported separately

**To complete the spec:** wait for monthly Starter quota reset (~30 days) or upgrade Figma plan to Professional+ to re-run `get_variable_defs` and per-section `get_design_context` calls.
