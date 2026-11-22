---
name: Trinawa Bhuwana
colors:
  surface: '#f4fbfc'
  surface-dim: '#d4dbdc'
  surface-bright: '#f4fbfc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef5f6'
  surface-container: '#e8eff0'
  surface-container-high: '#e2e9ea'
  surface-container-highest: '#dde4e5'
  on-surface: '#161d1e'
  on-surface-variant: '#5a4138'
  inverse-surface: '#2b3233'
  inverse-on-surface: '#ebf2f3'
  outline: '#8e7166'
  outline-variant: '#e2bfb2'
  surface-tint: '#a73a00'
  primary: '#a33900'
  on-primary: '#ffffff'
  primary-container: '#cc4900'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb599'
  secondary: '#28695a'
  on-secondary: '#ffffff'
  secondary-container: '#aff0dc'
  on-secondary-container: '#2f6f60'
  tertiary: '#006a35'
  on-tertiary: '#ffffff'
  tertiary-container: '#008645'
  on-tertiary-container: '#f6fff4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb599'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#7f2b00'
  secondary-fixed: '#aff0dc'
  secondary-fixed-dim: '#93d3c0'
  on-secondary-fixed: '#002019'
  on-secondary-fixed-variant: '#055042'
  tertiary-fixed: '#60ff99'
  tertiary-fixed-dim: '#25e37c'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005228'
  background: '#f4fbfc'
  on-background: '#161d1e'
  surface-variant: '#dde4e5'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system expresses the spirited, grounded vitality of high school mountaineering and ecological stewardship. The aesthetic merges tactile outdoor expedition cues with crisp, editorial modernism—termed **Charm UI**. It rejects gritty tactical realism in favor of high-legibility, warm, sun-drenched adventure graphics that feel optimistic, disciplined, and communal.

### Target Audience & Persona
- **Primary:** High school students, active nature lover club members (*Pecinta Alam*), and incoming inductees seeking camaraderie, survival skills, trail discipline, and environmental action.
- **Secondary:** School administration, alumni networks (*alumni SMAN 39*), and parents seeking safety assurances, operational precision, and verified organizational pedigree.

### Design Principles
1. **Kinetic Warmth:** High-visibility safety accents and morning sunlight tones anchor calls to action without causing visual fatigue.
2. **Topographic Clarity:** Layouts mimic structured expedition logs, trail waypoints, and topographical registers. Information architecture is dense, clean, and immediately scannable.
3. **Grounded Solidity:** Dark pine slate balances vibrant citrus tones, imparting institutional maturity, environmental reverence, and structural stability.

## Colors

The color architecture is built on the contrast between high-vis trail markings and deep canopy shade.

- **Primary (`#EA580C`):** *Expedition Orange*. Utilized for primary calls-to-action, active wayfinding indicators, progress gauges, and key focus states. Conveys youth, vigor, and outdoor safety markers.
- **Secondary (`#065143`):** *Deep Forest Emerald*. Anchors the system in biological depth and institutional credibility. Serves as high-contrast structural text, navigation bars, and primary badges.
- **Tertiary (`#31E981`):** *Neon Flora*. Reserved for merit badges, specialized survival tier markers, alert banners, and telemetry highlights.
- **Neutral Surface Palette:**
  - Base Canvas: `#F7FEFF` (Cyan Morning Light / Neutral Surface)
  - Surface Card: `#FFFFFF` (Crisp Base)
  - Surface Muted: `#D7FAFF` (Low Canvas Contrast)
  - Border Subtle: `#E2BFB2` (Outline Variant)
  - Text Primary: `#001F23` (Dark Cyan Neutral)
  - Text Muted: `#5A4138` (Surface Variant)

### Surface Contrast Hierarchy
Ensure text maintains WCAG AAA (7:1) contrast against light surfaces. When pairing `#EA580C` with text, always use crisp `#FFFFFF` for internal button text or `#001F23` when placed over tertiary neon flora highlights.

## Typography

The typography system pairs **Inter** for clean, legible headers and neutral body readability across expedition guides, equipment checklists, and club documentation, with **Plus Jakarta Sans** for tactical labels and badges.

- **Display & Headlines:** Use *Inter* with tight negative tracking (`-0.02em` to `-0.03em`) and heavy weights (`700`, `800`) to evoke trail signs, expedition banners, and summit logs.
- **Body:** Use *Inter* with balanced line height (`1.5` to `1.6`) to maintain effortless scanning on dense operational schedules and trail reports.
- **Tactical Metadata:** Apply `label-caps` in uppercase styling (`text-transform: uppercase`) paired with subtle letter-spacing for equipment serials, coordinate readouts, elevation tags, and division categories (e.g., *RC*, *SAR*, *MOUNTAINEERING*, *GH*).

## Layout & Spacing

The layout is grounded in a flexible, 12-column responsive grid engineered for desktop dashboard clarity and Astro content-driven pages.

### Grid Parameters
- **Desktop (>= 1024px):** 12 columns, max content container width `1280px`, `2rem` (32px) gutters, and `3rem` (48px) margin bounds.
- **Tablet (640px – 1023px):** 8 columns, `1.5rem` (24px) gutters, and `2rem` (32px) screen margins.
- **Mobile (< 640px):** 4 columns, `1rem` (16px) gutters, and `1rem` (16px) margin bounds.

### Spacing Philosophy
- Use `space-xs` (4px) and `space-sm` (8px) for tightly coupled visual badges, inline icon-text lockups, and breadcrumb trails.
- Use `space-md` (16px) for interior card padding, control groupings, and list item separations.
- Use `space-lg` (24px) to separate sub-modules inside larger card components or form clusters.
- Use `space-xl` (40px) and `space-2xl` (64px) for distinct vertical section blocks, narrative chapters, and major grid breakpoints.

## Elevation & Depth

Visual hierarchy uses crisp, ambient tonal layering punctuated by structural 1px micro-borders to maintain an athletic, modern outdoor aesthetic without heavy drop shadows.

### Elevation Levels
1. **Level 0 (Base Floor):** Pure `#F7FEFF`. The canvas background for whole pages and documentation feeds.
2. **Level 1 (Card & Module Resting):** Solid `#FFFFFF` background with a crisp border: `1px solid #E2BFB2`. Shadow: `0 1px 3px 0 rgba(0, 31, 35, 0.04), 0 1px 2px -1px rgba(0, 31, 35, 0.04)`.
3. **Level 2 (Hover & Interactive Focus):** Shift surface up slightly using `0 10px 15px -3px rgba(0, 31, 35, 0.06), 0 4px 6px -4px rgba(0, 31, 35, 0.03)` with an updated border color of `#D7FAFF`.
4. **Level 3 (Overlays, Floating Action Bar, & Modals):** Backdrop blur `backdrop-filter: blur(12px)` over `rgba(255, 255, 255, 0.85)` framed with `1px solid rgba(226, 191, 178, 0.8)`. Shadow: `0 20px 25px -5px rgba(0, 31, 35, 0.08), 0 8px 10px -6px rgba(0, 31, 35, 0.03)`.
5. **Brand Accents:** Key active items, such as primary action buttons, carry an orange ambient halo: `0 8px 16px -4px rgba(234, 88, 12, 0.28)`.

## Shapes

The design system employs **Roundedness Level 1**, generating a clean, precise, and compact product geometry suited for technical outdoor gear and rapid scanning.

- **Base Radius (0.25rem / 4px):** Standard inputs, regular action buttons, tactical badges, and contextual popovers.
- **Large Radius (0.75rem / 12px):** Content cards, expedition log modules, itinerary boxes, and imagery frames.
- **Extra Large Radius (1rem / 16px):** Hero feature panels, registration modal dialogues, and visual banner wrappers.
- **Pill Radius (9999px):** Status chips, categorical micro-pills, numerical step markers, and floating notification badges.

## Components

All components are optimized for semantic HTML and modular composition within the Astro framework. Iconography strictly utilizes **Google Material Symbols Outlined** (fill: 0, weight: 500, grade: 0, optical size: 24).

### Buttons
- **Primary Button:** `#EA580C` background, `#FFFFFF` text, `font-weight: 600`, radius `0.25rem`, padding `0.75rem 1.5rem`. Subtle box shadow with hover elevation (`#C2410C`) and active scale `0.98`.
- **Secondary Button:** Solid `#065143` base or `#001F23` background with crisp white typography.
- **Tertiary / Outline Button:** `#FFFFFF` background with `1px solid #E2BFB2` border, `#001F23` text, hover state with `#D7FAFF` background and `#EA580C` border.
- **Icon Button:** 40px × 40px rigid bounds, centered Material Symbol (`20px`), rounded `0.25rem`.

### Chips & Badges
- **Status Chip:** Compact inline pills (`padding: 0.25rem 0.75rem`, `font-size: 11px`, `rounded-full`).
  - *Active / Ready:* Light emerald background (`#ECFDF5`), deep emerald text (`#047857`).
  - *Expedition / Ongoing:* Light orange background (`#FFF7ED`), brand orange text (`#C2410C`).
  - *Notice / Advisory:* Amber background (`#FEF3C7`), amber slate text (`#B45309`).
- **Tactical Category Badge:** Plus Jakarta Sans uppercase labels (`label-caps`), subtle neutral tint (`#D7FAFF`), dark cyan text (`#001F23`), with an inset `1px solid #E2BFB2`.

### Cards & Modules
- **Expedition Card:** White background, `1px solid #E2BFB2`, rounded `0.75rem`, `padding: 1.5rem`. Includes an image container with an embedded category badge in the top corner, metadata row (distance, elevation, difficulty rating) using Material Symbols, bold title, and action link.
- **Stats / Metric Card:** Surface light with an accent vertical border (3px solid `#EA580C` or `#065143`) on the left edge, display number in Inter (`headline-md`), and label in Inter (`body-sm`).

### Form Elements
- **Input Fields:** Background `#FFFFFF`, border `1px solid #E2BFB2`, text `#001F23`, height `44px`, radius `0.25rem`, padding horizontal `0.875rem`. Focus ring: `2px solid #EA580C` with an outline offset of `2px`.
- **Checkboxes & Radios:** Dimensions 18px × 18px. Accent color `#EA580C`. Border `#8E7166`. Radios are fully circular; checkboxes utilize radius `0.25rem`.

### Navigation & Header (Astro Compatible)
- Sticky top bar with blurred glass surface (`rgba(255, 255, 255, 0.9)`), border bottom `1px solid #E2BFB2`.
- Integrated club crest / identity mark lockup with school identifier (*SMAN 39 Jakarta*), high-contrast links, and a high-vis expedition call-to-action button.