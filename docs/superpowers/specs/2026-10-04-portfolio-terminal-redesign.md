# Portfolio Terminal Redesign — Design Spec

**Date:** 2026-10-04  
**Status:** Approved  
**Replaces:** Current Rosé Pine portfolio at `init-kaushal.github.io/portfolio`

---

## Goal

Replace the current portfolio with a terminal-aesthetic site: fully committed, clean, and minimal. Every design decision serves legibility and character — no decoration for its own sake.

---

## Design Principles

1. **Terminal language, designed.** Prompt symbols, comment labels, and monospace text are the visual vocabulary — used precisely, not sprinkled for effect.
2. **One accent color.** `#4fd1c7` (teal-mint) applied to: prompt symbol, project commands, cursor, link hover. Nothing else.
3. **Grayscale everything else.** Hierarchy via weight and opacity, not color.
4. **Breathing room.** Line-height 1.9, generous vertical spacing. A terminal that has been given room to think.
5. **One animation.** The cursor blinks in the hero. Nothing else moves except scroll reveals (opacity fade only, no transforms).

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#0e0e0e` | Page background — near-black, slight warmth |
| `--surface` | `#161616` | Elevated surfaces, code contexts |
| `--border` | `#262626` | Section dividers |
| `--text` | `#e8e8e3` | Body text, headings — warm off-white |
| `--muted` | `#717171` | Secondary text, dates, meta |
| `--dim` | `#3a3a3a` | Section labels `//`, prompt symbol `~$` |
| `--accent` | `#4fd1c7` | Prompt, project commands, cursor, link hover |

**No light mode.** Dark only — the toggle is removed entirely.

---

## Typography

**Font:** IBM Plex Mono exclusively. Loaded from Google Fonts: weights 300, 400, 500 only. No Rajdhani.

| Role | Size | Weight | Color |
|------|------|--------|-------|
| Hero name | 56px | 500 | `--text` |
| Prompt `~$` | 16px | 400 | `--dim` |
| Section labels `// …` | 11px | 400 | `--dim` |
| Body paragraphs | 15px | 300 | `--text` |
| Project commands `$ …` | 14px | 400 | `--accent` |
| Project descriptions | 14px | 300 | `--muted` |
| Tech tags | 12px | 400 | `--dim` |
| Dates / meta / subtext | 13px | 400 | `--muted` |
| Nav links | 13px | 400 | `--muted` |

Line-height: **1.9** for body and descriptions. **1.2** for hero name and command lines.

---

## Layout

- Max-width: **680px**, centered, `margin: 0 auto`
- Horizontal padding: `24px` on mobile, auto on desktop
- Vertical gap between sections: `96px`
- Single column throughout — no grids

### Navigation

Minimal top bar, plain `--bg` background (no blur, no shadow):
- Left: `KS.` — 14px, `--accent`, links to `#hero`
- Right: `about · experience · projects · contact` — 13px, `--muted`, hover `--text`
- Mobile: links wrap to a second row, no hamburger

---

## Section Specs

### Hero

```
~$                                         ← 16px, --dim, margin-bottom 8px
kaushal sharma_                            ← 56px, 500, --text; _ = blinking cursor
backend engineer                           ← 15px, 300, --muted, margin-top 12px

building systems that ship,
scale, and stay up.                        ← 16px, 300, --text, max-width 440px

bangalore · rapidai · go · python          ← 13px, --muted

[↓ resume]    [→ contact]                  ← plain text links, --accent
```

**Cursor:** `<span class="cursor"></span>` — `2px × 1em` block, `--accent` background, CSS blink animation, `vertical-align: text-bottom`.

---

### About

Label: `// about`

Two paragraphs followed by a key-value detail block:

**Paragraph 1:**
> I'm a backend engineer who enjoys working on systems that need to be fast, reliable, and scalable. Over the past five years, I've built messaging platforms, webhook pipelines, Kubernetes-native platforms, and AI agents — mostly using Go, Python, and a mix of AWS and GCP services.

**Paragraph 2:**
> Lately that's meant building on-prem Kubernetes deployments for hospital-scale workloads, instrumenting distributed tracing across a dozen services, and shipping AI agents that help platform teams resolve incidents faster. I care about writing clean, maintainable code and making the right trade-offs between speed and complexity.

**Paragraph 3:**
> Outside of work, you'll find me backpacking, reading, or on a badminton court.

**Detail block** (monospace key-value, `--dim` keys, `--text` values):
```
location    Bangalore, India
email       kaushalworkss@gmail.com
education   IIIT Jabalpur — B.Tech CSE (2017–2021)
```

---

### Experience

Label: `// experience`

Each role layout:
```
[Company]                       [Date range]   ← company: --text 500, dates: --muted 13px
[Title]                                        ← --muted 13px
  · [bullet]                                   ← --text 300 14px, indented 2em
  · [bullet]
```

**Role 1: RapidAI**
- Dates: Jun 2023–present
- Title: Senior Software Engineer, Platform
- Bullets:
  - Built on-prem Kubernetes deployment pipeline for hospital-scale workloads using Helm and ArgoCD
  - Instrumented distributed tracing across 12+ services (Tempo + Grafana)
  - Shipped AI platform agent (poirot) that cut escalation resolution time from 2h+ to under 30 minutes with 80%+ adoption
  - Designed webhook ingestion pipeline handling 500k+ events/day

**Role 2: Eka Care**
- Dates: Jul 2021–Jun 2023
- Title: Software Engineer
- Bullets:
  - Built core prescription and appointment microservices in Go (FastAPI for async jobs)
  - Migrated monolith services to Istio service mesh with zero downtime
  - Led WhatsApp integration layer powering patient notifications at scale

---

### Projects

Label: `// projects`

Each project layout:
```
$ [command]    [optional badge]              ↗   ← --accent command, ↗ right-aligned --accent
  [description line 1]                          ← --muted 300 14px
  [description line 2]
  [tag]  [tag]  [tag]                           ← --dim 12px
```

Hover: command brightens to `--text`, `↗` underlines.

**Project 1: poirot**
- Command: `$ poirot run`
- Description: Point-in-time reliability, cost and change-risk assessment for Kubernetes clusters.
- Tags: `go  kubernetes  prometheus  llm`
- Link: `https://github.com/init-kaushal/poirot`

**Project 2: echo-health**
- Command: `$ echo-health`
- Badge: `🏆 1st · Ekathon 2025` in `--muted`
- Description: Doctors send a voice note on WhatsApp; bot delivers the structured prescription back.
- Tags: `python  fastapi  aws`
- Link: `https://github.com/init-kaushal/echo-health`

**Project 3: skim**
- Command: `$ skim build`
- Description: Claude Code plugin — intercepts oversized tool calls and substitutes a Haiku digest.
- Tags: `go  claude api  mcp`
- Link: `https://github.com/init-kaushal/skim`

---

### Skills

Label: `// skills`

Inline two-column layout: category label (`--dim`, 12px, min-width 80px) + values (`--text`, 14px, 300):

```
systems    go · python · kubernetes · prometheus · grafana
cloud      aws · gcp · docker · terraform
backend    postgresql · redis · kafka · grpc · rest
ai         claude api · mcp · ai agents
```

---

### Contact

Label: `// contact`

```
Have a question or just want to say hi?

kaushalworkss@gmail.com

github      → init-kaushal
linkedin    → kaushal-kishor-sharma
leetcode    → sharmakaushal
x           → kaushaltwt
```

Links: `--muted` default, `--accent` hover, no underline default, underline on hover. Each `→` is `--dim`.

---

## Interactions

### Cursor Blink

```css
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
.cursor {
  display: inline-block;
  width: 2px;
  height: 0.9em;
  background: var(--accent);
  animation: blink 530ms step-end infinite;
  vertical-align: text-bottom;
  margin-left: 2px;
}
```

### Scroll Reveals

Elements with class `.reveal`:
- Initial state: `opacity: 0`
- Triggered state: `opacity: 1`
- Transition: `opacity 400ms ease`
- No `transform`
- IntersectionObserver threshold: `0.1`

### Project Hover

```css
.project-item:hover .project-cmd { color: var(--text); }
.project-item:hover .project-link { text-decoration: underline; }
```

No background, no shadow, no movement.

---

## Footer

```
kaushal sharma · built with IBM Plex Mono + vanilla html
```

13px, `--dim`. No links.

---

## File Changes

| File | Action |
|------|--------|
| `index.html` | Replace entirely |
| `assets/css/style.css` | Replace entirely |
| `assets/img/*` | Keep — profile pic and favicon unchanged |
| `assets/files/*` | Keep — resume PDF unchanged |

---

## Removed from Current Site

| Element | Reason |
|---------|--------|
| Light mode + theme toggle | Terminal is dark |
| Achievements section | Hackathon win lives on the echo-health project card |
| Section numbers `01.` `02.` | Replaced by `//` comment labels |
| Project card grid | Replaced by stacked command-style list |
| Rajdhani font | All mono |
| Box shadows, gradient accents | Contradicts the aesthetic |
| Mobile hamburger + slide menu | Simple wrapped link row |
| `.section-alt` alternating backgrounds | Single `--bg` throughout |

---

## Success Criteria

- Loads under 1s on a standard connection (no external JS, one font)
- Renders cleanly at 375px (mobile) and 1440px (desktop)
- Fully keyboard-navigable
- No JS errors in console
- Deploys to GitHub Pages via existing workflow without config changes
