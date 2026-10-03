# Portfolio Terminal Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current portfolio with a terminal-aesthetic site using a custom dark palette, IBM Plex Mono, and minimal interactions.

**Architecture:** Single `index.html` + `assets/css/style.css`. No frameworks, no build step, no external JS. Vanilla JS only for scroll reveals (IntersectionObserver). Deploys to GitHub Pages via the existing workflow.

**Tech Stack:** HTML5, CSS custom properties, vanilla JS (IntersectionObserver only), IBM Plex Mono via Google Fonts.

**Spec:** `docs/superpowers/specs/2026-10-04-portfolio-terminal-redesign.md`

## Global Constraints

- IBM Plex Mono weights 300, 400, 500 only — no 600 or 700 loaded
- No light mode, no theme toggle, no `[data-theme]` attribute logic
- Single accent color: `#4fd1c7` — never used outside the roles defined in the spec
- Max-width 680px centered — never wider
- No external JavaScript libraries
- No `transform` on scroll reveals — opacity only
- All existing files in `assets/img/` and `assets/files/` left untouched

## Review Focus

- **Mobile nav overflow:** With no hamburger, nav links must wrap gracefully at 375px without horizontal scroll — verify at exactly 375px width.
- **Cursor blink in reduced-motion:** The `blink` animation must respect `prefers-reduced-motion: reduce` — cursor should be visible but static.
- **Project `↗` link accessibility:** The `↗` links have no visible label — each must have an `aria-label` describing the project.
- **Font flash (FOUT):** IBM Plex Mono loads async — body text must not reflow visibly; use `font-display: swap` and set a monospace fallback stack that closely matches IBM Plex Mono metrics.
- **Scroll reveal on page load:** Elements above the fold must be visible on load without waiting for IntersectionObserver — observer threshold `0.1` fires on elements already in viewport, but verify the hero is never opacity:0 on a fast render.

---

## Task 1: CSS Foundation — Palette, Reset, Typography

**Files:**
- Replace: `assets/css/style.css`

**Interfaces:**
- Produces: All CSS custom properties and base typographic styles consumed by every subsequent task

- [ ] **Step 1: Replace style.css with reset + tokens**

Write `assets/css/style.css` with the following content — **replace the entire file**:

```css
/* ── Reset ─────────────────────────────────────────────── */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

/* ── Tokens ─────────────────────────────────────────────── */
:root {
  --bg:      #0e0e0e;
  --surface: #161616;
  --border:  #262626;
  --text:    #e8e8e3;
  --muted:   #717171;
  --dim:     #3a3a3a;
  --accent:  #4fd1c7;
}

/* ── Base ────────────────────────────────────────────────── */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 72px;
}

body {
  font-family: "IBM Plex Mono", ui-monospace, "Cascadia Code", "Fira Code", Menlo, monospace;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.9;
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

/* ── Typography helpers ──────────────────────────────────── */
.label {
  font-size: 11px;
  font-weight: 400;
  color: var(--dim);
  letter-spacing: 0.08em;
  display: block;
  margin-bottom: 32px;
}

/* ── Layout ──────────────────────────────────────────────── */
.container {
  max-width: 680px;
  margin: 0 auto;
  padding: 0 24px;
}

section {
  padding: 96px 0;
}

/* ── Scroll reveals ──────────────────────────────────────── */
.reveal {
  opacity: 0;
  transition: opacity 400ms ease;
}
.reveal.visible {
  opacity: 1;
}

/* Respect reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transition: none; }
}
```

- [ ] **Step 2: Verify file is valid CSS**

Open `index.html` in a browser (or use `python3 -m http.server 8080` in the portfolio directory). Confirm the page background is `#0e0e0e`. No console errors.

- [ ] **Step 3: Commit**

```bash
git add assets/css/style.css
git commit -m "feat: css foundation — void+teal palette, mono base"
```

---

## Task 2: Navigation

**Files:**
- Modify: `assets/css/style.css` — append nav styles
- Modify: `index.html` — replace `<nav>` block

**Interfaces:**
- Consumes: `--bg`, `--accent`, `--muted`, `--text`, `.container` from Task 1
- Produces: `.nav` component used at top of every page view

- [ ] **Step 1: Replace the `<nav>` block in index.html**

Find the current `<nav class="nav" id="nav">…</nav>` block and replace it with:

```html
<nav class="nav" id="nav">
  <div class="container nav-inner">
    <a href="#hero" class="nav-logo">KS<span class="nav-dot">.</span></a>
    <div class="nav-links">
      <a href="#about" class="nav-link">about</a>
      <a href="#experience" class="nav-link">experience</a>
      <a href="#projects" class="nav-link">projects</a>
      <a href="#contact" class="nav-link">contact</a>
    </div>
  </div>
</nav>
```

- [ ] **Step 2: Append nav styles to style.css**

```css
/* ── Nav ─────────────────────────────────────────────────── */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  flex-wrap: wrap;
  gap: 8px;
}

.nav-logo {
  font-size: 14px;
  font-weight: 500;
  color: var(--accent);
  letter-spacing: 0.02em;
}

.nav-dot { color: var(--accent); }

.nav-links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.nav-link {
  font-size: 13px;
  font-weight: 400;
  color: var(--muted);
  transition: color 200ms ease;
}

.nav-link:hover { color: var(--text); }
```

- [ ] **Step 3: Verify at 375px and 1440px**

Resize browser to 375px. Confirm nav links wrap without horizontal scroll. Resize to 1440px. Confirm nav stays at max-width of its content, not full-width stretched.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: minimal terminal nav — no hamburger, no blur"
```

---

## Task 3: Hero Section

**Files:**
- Modify: `index.html` — replace `<section id="hero">` block
- Modify: `assets/css/style.css` — append hero styles

**Interfaces:**
- Consumes: `--dim`, `--text`, `--muted`, `--accent`, `.container`, `.reveal` from Task 1
- Produces: `.hero`, `.cursor` — the first visible section

- [ ] **Step 1: Replace the hero section in index.html**

Find `<section id="hero" class="hero">…</section>` and replace with:

```html
<section id="hero" class="hero">
  <div class="container">
    <p class="hero-prompt reveal">~$</p>
    <h1 class="hero-name reveal">kaushal sharma<span class="cursor"></span></h1>
    <p class="hero-role reveal">backend engineer</p>
    <p class="hero-tagline reveal">building systems that ship,<br>scale, and stay up.</p>
    <p class="hero-meta reveal">bangalore · rapidai · go · python</p>
    <div class="hero-actions reveal">
      <a href="assets/files/Kaushal_5YOE.pdf" target="_blank" rel="noopener" class="hero-link">↓ resume</a>
      <a href="#contact" class="hero-link">→ contact</a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append hero styles to style.css**

```css
/* ── Hero ────────────────────────────────────────────────── */
.hero {
  padding-top: 152px; /* 56px nav + 96px top padding */
  padding-bottom: 96px;
}

.hero-prompt {
  font-size: 16px;
  font-weight: 400;
  color: var(--dim);
  margin-bottom: 8px;
  line-height: 1.2;
}

.hero-name {
  font-size: 56px;
  font-weight: 500;
  color: var(--text);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.hero-role {
  font-size: 15px;
  font-weight: 300;
  color: var(--muted);
  margin-bottom: 24px;
}

.hero-tagline {
  font-size: 16px;
  font-weight: 300;
  color: var(--text);
  max-width: 440px;
  line-height: 1.7;
  margin-bottom: 16px;
}

.hero-meta {
  font-size: 13px;
  font-weight: 400;
  color: var(--muted);
  margin-bottom: 40px;
}

.hero-actions {
  display: flex;
  gap: 32px;
}

.hero-link {
  font-size: 14px;
  font-weight: 400;
  color: var(--accent);
  transition: opacity 200ms ease;
}

.hero-link:hover { opacity: 0.7; }

/* ── Cursor ──────────────────────────────────────────────── */
.cursor {
  display: inline-block;
  width: 2px;
  height: 0.85em;
  background: var(--accent);
  animation: blink 530ms step-end infinite;
  vertical-align: text-bottom;
  margin-left: 3px;
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .cursor { animation: none; opacity: 1; }
}

/* ── Mobile hero ─────────────────────────────────────────── */
@media (max-width: 480px) {
  .hero-name { font-size: 40px; }
}
```

- [ ] **Step 3: Verify cursor blinks**

Open in browser. Confirm the cursor after "kaushal sharma" blinks at ~530ms cycle in `#4fd1c7`. Open DevTools → Rendering → check "Emulate CSS media feature prefers-reduced-motion: reduce" — confirm cursor is visible and static.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: hero with blinking cursor"
```

---

## Task 4: About Section

**Files:**
- Modify: `index.html` — replace `<section id="about">` block
- Modify: `assets/css/style.css` — append about styles

**Interfaces:**
- Consumes: `.label`, `.container`, `.reveal`, `--text`, `--muted`, `--dim` from Task 1
- Produces: `.about`, `.about-details` components

- [ ] **Step 1: Replace the about section in index.html**

Find `<section id="about"…>…</section>` and replace with:

```html
<section id="about">
  <div class="container">
    <span class="label reveal">// about</span>
    <div class="about-body reveal">
      <p>I'm a backend engineer who enjoys working on systems that need to be fast, reliable, and scalable. Over the past five years, I've built messaging platforms, webhook pipelines, Kubernetes-native platforms, and AI agents — mostly using Go, Python, and a mix of AWS and GCP services.</p>
      <p>Lately that's meant building on-prem Kubernetes deployments for hospital-scale workloads, instrumenting distributed tracing across a dozen services, and shipping AI agents that help platform teams resolve incidents faster. I care about writing clean, maintainable code and making the right trade-offs between speed and complexity.</p>
      <p>Outside of work, you'll find me backpacking, reading, or on a badminton court.</p>
    </div>
    <div class="about-details reveal">
      <div class="detail-row"><span class="detail-key">location</span><span class="detail-val">Bangalore, India</span></div>
      <div class="detail-row"><span class="detail-key">email</span><span class="detail-val">kaushalworkss@gmail.com</span></div>
      <div class="detail-row"><span class="detail-key">education</span><span class="detail-val">IIIT Jabalpur — B.Tech CSE (2017–2021)</span></div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append about styles to style.css**

```css
/* ── About ───────────────────────────────────────────────── */
.about-body p {
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 300;
  color: var(--text);
  max-width: 600px;
}

.about-body p:last-child { margin-bottom: 40px; }

.about-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.detail-row {
  display: flex;
  gap: 24px;
  font-size: 13px;
}

.detail-key {
  font-weight: 400;
  color: var(--dim);
  min-width: 80px;
  flex-shrink: 0;
}

.detail-val {
  font-weight: 300;
  color: var(--muted);
}
```

- [ ] **Step 3: Verify layout**

Confirm three paragraphs render with correct spacing, detail block shows below with key-value alignment. On mobile (375px), detail rows stack or wrap cleanly.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: about section"
```

---

## Task 5: Experience Section

**Files:**
- Modify: `index.html` — replace `<section id="experience">` block
- Modify: `assets/css/style.css` — append experience styles

**Interfaces:**
- Consumes: `.label`, `.container`, `.reveal`, `--text`, `--muted`, `--dim` from Task 1
- Produces: `.experience`, `.exp-role` components

- [ ] **Step 1: Replace the experience section in index.html**

Find `<section id="experience"…>…</section>` and replace with:

```html
<section id="experience">
  <div class="container">
    <span class="label reveal">// experience</span>
    <div class="exp-list">

      <div class="exp-role reveal">
        <div class="exp-header">
          <span class="exp-company">RapidAI</span>
          <span class="exp-dates">Jun 2023–present</span>
        </div>
        <p class="exp-title">Senior Software Engineer, Platform</p>
        <ul class="exp-bullets">
          <li>Built on-prem Kubernetes deployment pipeline for hospital-scale workloads using Helm and ArgoCD</li>
          <li>Instrumented distributed tracing across 12+ services (Tempo + Grafana)</li>
          <li>Shipped AI platform agent (poirot) that cut escalation resolution time from 2h+ to under 30 minutes with 80%+ adoption</li>
          <li>Designed webhook ingestion pipeline handling 500k+ events/day</li>
        </ul>
      </div>

      <div class="exp-role reveal">
        <div class="exp-header">
          <span class="exp-company">Eka Care</span>
          <span class="exp-dates">Jul 2021–Jun 2023</span>
        </div>
        <p class="exp-title">Software Engineer</p>
        <ul class="exp-bullets">
          <li>Built core prescription and appointment microservices in Go</li>
          <li>Migrated monolith services to Istio service mesh with zero downtime</li>
          <li>Led WhatsApp integration layer powering patient notifications at scale</li>
        </ul>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Append experience styles to style.css**

```css
/* ── Experience ──────────────────────────────────────────── */
.exp-list {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 4px;
  flex-wrap: wrap;
}

.exp-company {
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
}

.exp-dates {
  font-size: 13px;
  font-weight: 400;
  color: var(--muted);
}

.exp-title {
  font-size: 13px;
  font-weight: 400;
  color: var(--muted);
  margin-bottom: 12px;
}

.exp-bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-left: 2em;
}

.exp-bullets li {
  font-size: 14px;
  font-weight: 300;
  color: var(--text);
  position: relative;
}

.exp-bullets li::before {
  content: "·";
  position: absolute;
  left: -1.5em;
  color: var(--dim);
}
```

- [ ] **Step 3: Verify at 375px**

Confirm the date wraps below company name gracefully on narrow screens (not overlapping).

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: experience section"
```

---

## Task 6: Projects Section

**Files:**
- Modify: `index.html` — replace `<section id="projects">` block
- Modify: `assets/css/style.css` — append projects styles

**Interfaces:**
- Consumes: `.label`, `.container`, `.reveal`, `--accent`, `--muted`, `--dim`, `--text` from Task 1
- Produces: `.projects`, `.project-item` components

- [ ] **Step 1: Replace the projects section in index.html**

Find `<section id="projects"…>…</section>` and replace with:

```html
<section id="projects">
  <div class="container">
    <span class="label reveal">// projects</span>
    <div class="projects-list">

      <div class="project-item reveal">
        <div class="project-top">
          <span class="project-cmd">$ poirot run</span>
          <a href="https://github.com/init-kaushal/poirot" target="_blank" rel="noopener" class="project-link" aria-label="poirot on GitHub">↗</a>
        </div>
        <p class="project-desc">Point-in-time reliability, cost and change-risk assessment for Kubernetes clusters.</p>
        <p class="project-tags">go &nbsp; kubernetes &nbsp; prometheus &nbsp; llm</p>
      </div>

      <div class="project-item reveal">
        <div class="project-top">
          <span class="project-cmd">$ echo-health</span>
          <span class="project-badge">🏆 1st · Ekathon 2025</span>
          <a href="https://github.com/init-kaushal/echo-health" target="_blank" rel="noopener" class="project-link" aria-label="echo-health on GitHub">↗</a>
        </div>
        <p class="project-desc">Doctors send a voice note on WhatsApp; bot delivers the structured prescription back.</p>
        <p class="project-tags">python &nbsp; fastapi &nbsp; aws</p>
      </div>

      <div class="project-item reveal">
        <div class="project-top">
          <span class="project-cmd">$ skim build</span>
          <a href="https://github.com/init-kaushal/skim" target="_blank" rel="noopener" class="project-link" aria-label="skim on GitHub">↗</a>
        </div>
        <p class="project-desc">Claude Code plugin — intercepts oversized tool calls and substitutes a Haiku digest.</p>
        <p class="project-tags">go &nbsp; claude api &nbsp; mcp</p>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Append projects styles to style.css**

```css
/* ── Projects ────────────────────────────────────────────── */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.project-item { cursor: default; }

.project-top {
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 6px;
  flex-wrap: wrap;
}

.project-cmd {
  font-size: 14px;
  font-weight: 400;
  color: var(--accent);
  transition: color 200ms ease;
}

.project-item:hover .project-cmd { color: var(--text); }

.project-badge {
  font-size: 12px;
  font-weight: 400;
  color: var(--muted);
}

.project-link {
  font-size: 14px;
  color: var(--accent);
  margin-left: auto;
  transition: opacity 200ms ease;
}

.project-item:hover .project-link { text-decoration: underline; }

.project-desc {
  font-size: 14px;
  font-weight: 300;
  color: var(--muted);
  margin-bottom: 6px;
  max-width: 560px;
  line-height: 1.7;
}

.project-tags {
  font-size: 12px;
  font-weight: 400;
  color: var(--dim);
}
```

- [ ] **Step 3: Verify hover and aria**

Hover over each project — confirm command line color shifts. In DevTools, inspect each `↗` link and confirm `aria-label` is present.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: projects section — command-style list"
```

---

## Task 7: Skills Section

**Files:**
- Modify: `index.html` — replace `<section id="skills">` block
- Modify: `assets/css/style.css` — append skills styles

**Interfaces:**
- Consumes: `.label`, `.container`, `.reveal`, `--text`, `--muted`, `--dim` from Task 1
- Produces: `.skills`, `.skill-row` components

- [ ] **Step 1: Replace the skills section in index.html**

Find `<section id="skills"…>…</section>` and replace with:

```html
<section id="skills">
  <div class="container">
    <span class="label reveal">// skills</span>
    <div class="skills-list reveal">
      <div class="skill-row">
        <span class="skill-cat">systems</span>
        <span class="skill-vals">go · python · kubernetes · prometheus · grafana</span>
      </div>
      <div class="skill-row">
        <span class="skill-cat">cloud</span>
        <span class="skill-vals">aws · gcp · docker · terraform</span>
      </div>
      <div class="skill-row">
        <span class="skill-cat">backend</span>
        <span class="skill-vals">postgresql · redis · kafka · grpc · rest</span>
      </div>
      <div class="skill-row">
        <span class="skill-cat">ai</span>
        <span class="skill-vals">claude api · mcp · ai agents</span>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append skills styles to style.css**

```css
/* ── Skills ──────────────────────────────────────────────── */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.skill-row {
  display: flex;
  gap: 24px;
  align-items: baseline;
  flex-wrap: wrap;
}

.skill-cat {
  font-size: 12px;
  font-weight: 400;
  color: var(--dim);
  min-width: 72px;
  flex-shrink: 0;
}

.skill-vals {
  font-size: 14px;
  font-weight: 300;
  color: var(--text);
}
```

- [ ] **Step 3: Verify alignment**

Confirm category labels align at 72px, values wrap cleanly on mobile.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: skills section — inline category list"
```

---

## Task 8: Contact Section + Footer

**Files:**
- Modify: `index.html` — replace `<section id="contact">` and `<footer>` blocks
- Modify: `assets/css/style.css` — append contact + footer styles

**Interfaces:**
- Consumes: `.label`, `.container`, `.reveal`, `--text`, `--muted`, `--dim`, `--accent` from Task 1
- Produces: `.contact`, `.footer` components

- [ ] **Step 1: Replace the contact section and footer in index.html**

Find `<section id="contact"…>…</section>` and the existing footer and replace both with:

```html
<section id="contact">
  <div class="container">
    <span class="label reveal">// contact</span>
    <div class="contact-body reveal">
      <p class="contact-intro">Have a question or just want to say hi?</p>
      <a href="mailto:kaushalworkss@gmail.com" class="contact-email">kaushalworkss@gmail.com</a>
      <div class="contact-links">
        <div class="contact-row">
          <span class="contact-key">github</span>
          <a href="https://github.com/init-kaushal" target="_blank" rel="noopener" class="contact-val">→ init-kaushal</a>
        </div>
        <div class="contact-row">
          <span class="contact-key">linkedin</span>
          <a href="https://www.linkedin.com/in/kaushal-kishor-sharma" target="_blank" rel="noopener" class="contact-val">→ kaushal-kishor-sharma</a>
        </div>
        <div class="contact-row">
          <span class="contact-key">leetcode</span>
          <a href="https://leetcode.com/u/sharmakaushal" target="_blank" rel="noopener" class="contact-val">→ sharmakaushal</a>
        </div>
        <div class="contact-row">
          <span class="contact-key">x</span>
          <a href="https://x.com/kaushaltwt" target="_blank" rel="noopener" class="contact-val">→ kaushaltwt</a>
        </div>
      </div>
    </div>
  </div>
</section>

<footer class="footer">
  <div class="container">
    <p>kaushal sharma · built with IBM Plex Mono + vanilla html</p>
  </div>
</footer>
```

- [ ] **Step 2: Append contact + footer styles to style.css**

```css
/* ── Contact ─────────────────────────────────────────────── */
.contact-intro {
  font-size: 15px;
  font-weight: 300;
  color: var(--muted);
  margin-bottom: 20px;
}

.contact-email {
  display: block;
  font-size: 15px;
  font-weight: 400;
  color: var(--text);
  margin-bottom: 32px;
  transition: color 200ms ease;
}

.contact-email:hover { color: var(--accent); }

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-row {
  display: flex;
  gap: 24px;
  align-items: baseline;
}

.contact-key {
  font-size: 12px;
  font-weight: 400;
  color: var(--dim);
  min-width: 72px;
  flex-shrink: 0;
}

.contact-val {
  font-size: 14px;
  font-weight: 300;
  color: var(--muted);
  transition: color 200ms ease;
}

.contact-val:hover { color: var(--accent); text-decoration: underline; }

/* ── Footer ──────────────────────────────────────────────── */
.footer {
  padding: 40px 0 48px;
  border-top: 1px solid var(--border);
}

.footer p {
  font-size: 13px;
  font-weight: 400;
  color: var(--dim);
}
```

- [ ] **Step 3: Verify links**

Click each contact link — confirm it opens the correct URL. Hover the email — confirm it turns `--accent`.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: contact section and footer"
```

---

## Task 9: Scroll Reveals + Head Cleanup

**Files:**
- Modify: `index.html` — replace `<head>`, remove old JS, add IntersectionObserver script
- No CSS changes

**Interfaces:**
- Consumes: `.reveal` class from Task 1
- Produces: Functioning scroll reveals; clean `<head>` with correct meta, new font URL, no Rajdhani, no theme-toggle JS

- [ ] **Step 1: Replace the `<head>` block in index.html**

Replace everything from `<!DOCTYPE html>` through `</head>` with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kaushal Sharma — Backend Engineer</title>
  <meta name="description" content="Kaushal Sharma is a backend engineer building distributed systems, Kubernetes-native platforms, and AI agents. Go, Python, AWS, GCP.">

  <meta property="og:title" content="Kaushal Sharma — Backend Engineer">
  <meta property="og:description" content="Distributed systems, Kubernetes-native platforms &amp; AI agents — Go, Python, AWS, GCP.">
  <meta property="og:image" content="https://init-kaushal.github.io/portfolio/assets/img/profile-pic.png">
  <meta property="og:url" content="https://init-kaushal.github.io/portfolio/">
  <meta property="og:type" content="website">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Kaushal Sharma — Backend Engineer">
  <meta name="twitter:description" content="Distributed systems, Kubernetes-native platforms &amp; AI agents — Go, Python, AWS, GCP.">
  <meta name="twitter:image" content="https://init-kaushal.github.io/portfolio/assets/img/profile-pic.png">

  <link rel="canonical" href="https://init-kaushal.github.io/portfolio/">
  <link href="assets/img/favicon.ico" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&display=swap" rel="stylesheet">
  <!-- display=swap prevents invisible text during font load (FOUT instead of FOIT) -->

  <link href="assets/css/style.css" rel="stylesheet">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kaushal Sharma",
    "jobTitle": "Senior Software Engineer",
    "url": "https://init-kaushal.github.io/portfolio/",
    "email": "mailto:kaushalworkss@gmail.com",
    "worksFor": { "@type": "Organization", "name": "RapidAI" },
    "alumniOf": { "@type": "CollegeOrUniversity", "name": "Indian Institute of Information Technology, Jabalpur" },
    "sameAs": [
      "https://github.com/init-kaushal",
      "https://www.linkedin.com/in/kaushal-kishor-sharma",
      "https://leetcode.com/u/sharmakaushal",
      "https://x.com/kaushaltwt"
    ]
  }
  </script>
</head>
```

- [ ] **Step 2: Remove all old JS from `<body>`, add IntersectionObserver**

Remove the old theme-toggle script and nav-hamburger JS blocks entirely. Just before the closing `</body>` tag, add:

```html
<script>
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
</script>
```

- [ ] **Step 3: Verify hero is visible on load**

Hard-refresh the page. The hero (prompt, name, role, tagline) must be immediately visible — not opacity:0. This confirms IntersectionObserver fires on elements already in viewport. If the hero is invisible, add `if (e.intersectionRatio > 0)` as the condition instead of `e.isIntersecting`.

- [ ] **Step 4: Verify no old CSS classes are referenced**

Search `index.html` for any remaining references to old classes:

```bash
grep -E "btn-primary-custom|btn-outline-custom|section-alt|skill-tag|hero-greeting|nav-hamburger|theme-toggle|section-num" index.html
```

Expected output: no matches. If any found, remove those elements.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: scroll reveals, clean head — drop Rajdhani and theme toggle"
```

---

## Task 10: Final Polish + Deploy

**Files:**
- Modify: `assets/css/style.css` — any remaining responsive fixes
- Modify: `index.html` — verify structural integrity

**Interfaces:**
- Consumes: All previous tasks

- [ ] **Step 1: Full visual check at 375px, 768px, 1280px**

Open in browser and resize to each breakpoint. Check:
- No horizontal scrollbar at any width
- Section spacing consistent
- Font sizes readable on mobile
- All `↗` links in projects right-aligned

Add any missing responsive rules at the bottom of `style.css`:

```css
/* ── Responsive ──────────────────────────────────────────── */
@media (max-width: 600px) {
  section { padding: 64px 0; }
  .hero { padding-top: 120px; padding-bottom: 64px; }
  .exp-header { flex-direction: column; gap: 2px; }
  .hero-actions { flex-direction: column; gap: 16px; }
}
```

- [ ] **Step 2: Check for orphaned CSS**

Search `style.css` for any old class names that no longer exist in `index.html`:

```bash
# In the portfolio directory:
grep -oE '\.[a-z][a-z0-9-]+' assets/css/style.css | sort -u > /tmp/css-classes.txt
grep -oE 'class="[^"]*"' index.html | grep -oE '[a-z][a-z0-9-]+' | sort -u > /tmp/html-classes.txt
comm -23 /tmp/css-classes.txt /tmp/html-classes.txt
```

Remove any orphaned CSS classes found.

- [ ] **Step 3: Run Lighthouse (optional but recommended)**

```bash
npx lighthouse http://localhost:8080 --only-categories=performance,accessibility,best-practices --output=json --output-path=/tmp/lh.json
cat /tmp/lh.json | python3 -c "import json,sys; d=json.load(sys.stdin); [print(k,v['score']) for k,v in d['categories'].items()]"
```

Target: Performance ≥ 90, Accessibility ≥ 90.

- [ ] **Step 4: Commit and push**

```bash
git add index.html assets/css/style.css
git commit -m "feat: responsive polish, remove orphaned CSS"
git push origin main
```

- [ ] **Step 5: Verify GitHub Pages deployment**

```bash
gh run list --repo init-kaushal/portfolio --limit 1
```

Wait for status `completed success`. Then open `https://init-kaushal.github.io/portfolio/` and do a final visual check.
