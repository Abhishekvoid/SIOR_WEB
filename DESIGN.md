# SIOR (Σείριος) — Design System & Architectural Specification

> **Brand Origin**: SIOR is derived from *Seirios* (Σείριος), the ancient Greek name for Sirius — the brightest star in the night sky (α Canis Majoris, Spectral Class A1V).
> **Design Philosophy**: **Awwwards-Caliber Cosmic Sanctuary & Teenage Engineering Acoustic Instrument**. A synthesis of cosmic depth and industrial hardware precision, built around the user's authentic astronaut celestial meadow canvas.
> **Absolute Design Directives**:
> - **ZERO Generic AI Blue / Cyan**: Banned `#38bdf8`. Replaced with **Zen Coral / Solar Vermilion** (`#f76f53`).
> - **ZERO Harsh Pure White**: Banned `#ffffff` and clinical `#fcfcfd`. Replaced with **Warm Architectural Off-White / Bone / Linen** (`#eae7e1`, `#dedad2`).
> - **ZERO Generic Green Beat Indicators**: Banned pulsing green radar dots (`#34d399`). Replaced with **Modern Architectural Monospace Brackets** (`[LIVE]`, `[STANDBY]`, `[EXEC // OK]`, `[01]`).
> - **ZERO AI Gradient Text & Glowing Cards**: Banned rounded glass cards with glowing cyan drop-shadows. Replaced with **Swiss borderless architectural matrix layouts** and **Teenage Engineering hardware rails**.

---

## 1. Aesthetic Identity & Design System Archetype

* **Archetype**: High-End Industrial / Teenage Engineering Acoustic Console meets Cinematic Celestial Canvas.
* **Core Principles**:
  - **Unobstructed Cosmic Sanctuary**: The hero stage preserves the celestial artwork (`assets/sior_astronaut_cosmos.jpg`) with full clarity. Monumental, oversized `SIOR` typography floats in perfect balance with the seated astronaut, ringed planet, and meadow.
  - **Teenage Engineering Acoustic Instrument**: Below the hero, the interface acts as a physical hardware console with an interactive fluid mathematical canvas oscilloscope, single-line telemetry rail, and large editorial phrase rows.
  - **Swiss Architectural Matrix**: Sections 2, 3, and 4 discard boxy generic SaaS cards in favor of a borderless 1px hairline grid (`--sior-line`).
  - **Kinetic Physics**: Driven by GSAP 3.12.5 and ScrollTrigger — character-staggered typography entrance, horizon parallax, and magnetic spring buttons with specular beam reflections.

---

## 2. Color Palette & Semantic Tokens

```css
:root {
  /* Hardware Obsidian Void */
  --sior-void: #05060a;                  /* Deepest space void */
  --sior-instrument-bg: #06080e;        /* Teenage Engineering console canvas */
  --sior-line: rgba(234, 231, 225, 0.09);/* Architectural hairline grid */
  --sior-line-bright: rgba(234, 231, 225, 0.22);

  /* Zen Coral & Solar Vermilion (Zero Generic AI Blue!) */
  --sior-zen-coral: #f76f53;            /* Brand primary accent (Zen Browser brand color) */
  --sior-zen-coral-soft: rgba(247, 111, 83, 0.15);
  --sior-zen-coral-border: rgba(247, 111, 83, 0.45);

  /* Architectural Warm Off-White (Bone / Linen / Parchment — Zero Harsh Blinding White!) */
  --sior-stark-white: #eae7e1;          /* Monumental display & headline typography */
  --sior-off-white: #eae7e1;            /* Tactile bone tone */
  --sior-off-white-bright: #f2efe9;     /* Highlight off-white */
  --sior-btn-bone: #eae7e1;             /* Physical matte bone action CTA button */
  --sior-btn-bone-hover: #dedad2;       /* Soft tactile hover state */
  --sior-amethyst-radiance: #c084fc;     /* Telemetry frequency highlight */
  --sior-amber: #f59e0b;                 /* Solar amber hardware status & dev milestone */

  /* Modern Architectural Status Indicators (Zero Generic Green Pulsing Dots!) */
  --sior-status-tag: #f76f53;           /* [LIVE] / [EXEC // OK] */
  --sior-status-rail: #eae7e1;          /* Monospace bracket badge */

  /* Typography Colors (Warm Architectural Stone Palette) */
  --sior-text-primary: #eae7e1;         /* Primary off-white text */
  --sior-text-secondary: #a8a59d;       /* Warm stone secondary text */
  --sior-text-muted: #615e57;           /* Muted code brackets & indices */
}
```

---

## 3. Typographic Hierarchy

* **Display & Sans Stack**: `Bricolage Grotesque` (Zen Browser display font), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif.
  - **Monumental Display (Hero SIOR)**: `Bricolage Grotesque 800`, `clamp(6.5rem, 16vw, 13rem)`, `tracking: -0.06em`, `line-height: 0.88`, Warm Bone Off-White (`#eae7e1`).
  - **Section Headings**: `Bricolage Grotesque 800`, `clamp(2.2rem, 3.4vw, 3rem)`, `tracking: -0.04em`, `line-height: 1.12`.
  - **Interactive Phrase Quotes**: `Bricolage Grotesque 600`, `clamp(1.2rem, 1.8vw, 1.55rem)`, `tracking: -0.02em`.
* **Monospace Engine Stack**: `JetBrains Mono`, monospace.
  - **Hardware Telemetry Stream**: `0.8rem`, `tracking: 0.06em`.
  - **Status Indicators**: `[LIVE]`, `[STANDBY]`, `[EXEC // OK]`, `[01]`, `[STAR // A1V]`.
  - **AST Function Signatures**: `irctc.book_tatkal()`, `upi.instant_pay()`, `gst.audit_portal()`.
* **Indic Vernacular Typography**: `Noto Sans Devanagari`, `Noto Sans Tamil`, `Noto Sans Telugu`, `Noto Sans Bengali`.
  - Tuned with identical optical size and baseline alignment for authentic Hinglish, Devanagari, and Dravidian script rendering.

---

## 4. Component Architecture & Motion Specifications

### 4.1 Unobstructed Cosmic Sanctuary Hero
* **Artwork Canvas**: `assets/sior_astronaut_cosmos.jpg` spans 100% full viewport with subtle GSAP horizon parallax.
* **Top Eyebrow Badge**: `[SYSTEM // ACTIVE]` with Zen Coral badge, followed by `α CANIS MAJORIS • SOVEREIGN DESKTOP AGENT`.
* **Monumental Display Typography**: Big bold `SIOR` with split character GSAP entrance.
* **Modern Frontier Value Proposition**:
  - Headline: *"The sovereign voice operator for Windows."*
  - Subtext: *"Colloquial Hindi, Hinglish, and English compiled into validated desktop actions."* (Under 20 words per `design-taste-frontend`).
* **Ultra-Sleek Monospace Telemetry Bar**: Single-line floating bar (`SILERO VAD + SARVAM SAARAS • GROQ 120B COMPILER • NATIVE WIN32 EXECUTION`) floating above CTAs without obscuring the artwork.
* **Architectural Corner Reticles**: Precise hairline crosshair brackets (`.telemetry-bracket.top-left`, `.top-right`).
* **Tactile Bone CTA Button**: Solid `#eae7e1` pill button (`.btn-stark-inverted`) featuring custom magnetic mouse physics (`quickTo`) and internal specular beam sweep on hover.

### 4.2 Teenage Engineering Acoustic Instrument
* **Fluid Mathematical Oscilloscope**: HTML5 Canvas rendering continuous harmonic sine waves with multi-frequency superposition ($y = \sum A_i \sin(k_i x \pm \omega_i t)$). Reacts dynamically with acoustic energy bursts when phrases are selected.
* **Single-Line Hardware Telemetry Rail**: Continuous single-line monospace readout with zero generic chips or blue pills. Updates status from `[STANDBY]` to `[EXEC // OK]` with approximate stage timestamps.
* **Large Editorial Phrase Selector**: Five full-width borderless rows (`01`–`05`) displaying authentic spoken Hinglish commands that map directly to sovereign Indian APIs (IRCTC, NPCI UPI, Parivahan, GSTN, Blinkit/ONDC).

### 4.3 Swiss Architectural Grid
* Replaces cards with an integrated, borderless 4-column matrix separated only by 1px hairlines (`rgba(234, 231, 225, 0.09)`).
* Strict typographic hierarchy: step number in Zen Coral, title in off-white, description in warm stone, and technical engine footer.

### 4.4 Modern Architectural Status Badges
* Strictly forbids generic pulsing green dots.
* Replaced with high-precision bracket tags:
  - Navbar: `<span class="telemetry-bracket-tag">[LIVE]</span>`
  - Hero Badge: `<span class="hero-badge-prefix">[STAR // A1V]</span>`
  - Instrument Header: `<span class="inst-tag-bracket">[01]</span>`
  - Telemetry Stream: `<span class="rail-status-badge">[STANDBY]</span>` / `[EXEC // OK]`
  - Speed Metric: `<span class="stream-segment speed">240ms</span>` in warm off-white borderless monospace.
