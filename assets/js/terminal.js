/* ── Terminal Portfolio — Kaushal Sharma ──────────────────────────── */
'use strict';

/* ── Data ─────────────────────────────────────────────────────────── */
const DATA = {
  name: 'Kaushal Sharma',
  handle: 'kaushal',
  role: 'Senior Software Engineer · Distributed Systems & Backend',
  email: 'kaushalworkss@gmail.com',
  location: 'Bangalore, India',
  education: 'IIIT Jabalpur · B.Tech CSE · 2017–2021',
  github: 'https://github.com/init-kaushal',
  linkedin: 'https://www.linkedin.com/in/kaushal-kishor-sharma',
  leetcode: 'https://leetcode.com/u/sharmakaushal',
  twitter: 'https://x.com/kaushaltwt',
  resume: 'assets/files/Kaushal_5YOE.pdf',
  experience: [
    {
      company: 'RapidAI',
      title: 'Senior Software Engineer, Platform',
      period: 'Oct 2025 – Present',
      bullets: [
        'Built the on-prem deployment system for hospital networks: automated Kubernetes cluster setup, configuration management, and continuous delivery using Helm and ArgoCD',
        'Set up distributed tracing across 12+ services using Tempo and Grafana, giving the team visibility into where requests slow down or fail across the system',
        'Shipped poirot, an AI agent that does real-time reliability and risk checks on Kubernetes clusters. Cut incident resolution from 2h+ to under 30 minutes; 80%+ team adoption',
        'Built the backend pipeline that processes 500k+ webhook events per day reliably at scale',
      ],
    },
    {
      company: 'Eka Care',
      title: 'Software Engineer 2',
      period: 'Feb 2023 – Sep 2025',
      bullets: [
        'Designed a high-throughput notification platform delivering 1M+ messages per day at 99.9% uptime',
        'Built a secure webhook system for encrypted real-time delivery to 50+ clients at 100+ requests per second',
        'Built backend services in Go for core prescription and appointment workflows',
        'Led and mentored 3 interns to build an internal analytics platform tracking customer usage across services and APIs',
      ],
    },
    {
      company: 'IBM',
      title: 'Software Engineer, MQ',
      period: 'Jun 2021 – Jan 2023',
      bullets: [
        'Contributed to the WebSphere MQ High Availability architecture, reducing message latency by 20%',
        'Built Java programs processing 1K+ messages per second across applications and cloud platforms',
      ],
    },
  ],
  projects: [
    {
      cmd: 'poirot run',
      name: 'poirot',
      url: 'https://github.com/init-kaushal/poirot',
      landing: 'https://init-kaushal.github.io/poirot/',
      desc: 'Point-in-time reliability, cost, and change-risk report for a Kubernetes cluster. Give it a kubeconfig and a poirot.yaml; run poirot run; read report.md.',
      detail: [
        'Runs deterministic analyzers: reliability · SLO · cost (OpenCost / estimated) · change-risk',
        'LLM layer is additive: enriches warning+ findings with probable cause and an executive summary',
        'Works without an API key — the deterministic report is always complete',
        'Output: report.json + report.md · exits 0 (clean) / 1 (warnings) / 2 (critical)',
      ],
      tags: ['go', 'kubernetes', 'prometheus', 'llm'],
      badge: null,
      execSteps: [
        '→ Connecting to cluster via kubeconfig...',
        '→ Running reliability analyzers...',
        '→ Running SLO + cost analyzers (OpenCost)...',
        '→ Running change-risk analysis...',
        '→ LLM enrichment: correlating findings...',
        '→ Writing report.md...',
      ],
    },
    {
      cmd: 'echo-health',
      name: 'echo-health',
      url: 'https://github.com/init-kaushal/echo-health',
      landing: null,
      desc: 'A doctor sends a voice note on WhatsApp; a bot delivers the structured prescription back. Built at Ekathon 2025.',
      detail: [
        'Two decoupled webhooks: voice note in (Interakt) → Eka Care AI (Ekascribe) → prescription callback out',
        'request_id correlates async prescription generation back to the originating WhatsApp chat',
        'Stack: FastAPI · Eka Care API · Interakt (WhatsApp Business) · httpx',
      ],
      tags: ['python', 'fastapi', 'aws'],
      badge: '🏆 1st · Ekathon 2025',
      execSteps: [
        '→ Listening on WhatsApp webhook...',
        '→ Doctor voice note received...',
        '→ Forwarding to Eka Care AI (Ekascribe)...',
        '→ Waiting for prescription callback...',
        '→ Formatting and delivering via Interakt...',
      ],
    },
    {
      cmd: 'skim build',
      name: 'skim',
      url: 'https://github.com/init-kaushal/skim',
      landing: 'https://init-kaushal.github.io/skim/',
      desc: 'Claude Code plugin that intercepts oversized Read, Grep, and Bash calls before they run and substitutes a compact Haiku digest, keeping the main session context clean.',
      detail: [
        'Hooks Claude Code\'s PreToolUse event: denies the call, puts a digest in permissionDecisionReason',
        'Routes expensive Read/Grep/Bash calls to a cheap Haiku worker instead of the session model',
        'Model-agnostic on the driving side — works with Opus, Sonnet, Fable, or any future model',
        'Fails open: if the hook exits 0, the original tool runs completely normally',
      ],
      tags: ['go', 'claude api', 'mcp'],
      badge: null,
      execSteps: [
        '→ Loading plugin manifest...',
        '→ Compiling Read interception handler...',
        '→ Compiling Grep interception handler...',
        '→ Compiling Bash interception handler...',
        '→ Configuring Haiku worker (claude-haiku-4-5)...',
        '→ Linking PreToolUse hooks...',
      ],
    },
    {
      cmd: 'careeros init',
      name: 'careeros',
      url: 'https://github.com/init-kaushal/careeros',
      landing: 'https://init-kaushal.github.io/careeros/',
      desc: 'Markdown-native job-search workspace for Claude Code. One command scaffolds a structured workspace; the agent interviews you to build your profile; after that you chat your way through discovery, research, applications, outreach, interview prep, and offers.',
      detail: [
        'Your data — profile, pipeline, activity log — lives in a plain-text directory you own',
        'No account, no cloud sync, no third-party access to your job search',
        'Covers the full lifecycle: discovery · research · application · outreach · interviews · offers',
        'Works with Claude Code (real browser via Claude-in-Chrome) or ChatGPT Projects',
      ],
      tags: ['python', 'claude code', 'ai agents'],
      badge: null,
      execSteps: [
        '→ Scaffolding workspace directory...',
        '→ Generating profile.md and boards.md...',
        '→ Bootstrapping agent entry point (CLAUDE.md)...',
        '→ Loading job-search skills...',
        '→ Ready — open the directory in Claude Code to begin',
      ],
    },
  ],
  skills: [
    { cat: 'systems', vals: 'Go · Python · Kubernetes · Prometheus · Grafana' },
    { cat: 'cloud', vals: 'AWS · GCP · Docker · Terraform · Helm · ArgoCD' },
    { cat: 'backend', vals: 'PostgreSQL · Redis · Kafka · gRPC · REST' },
    { cat: 'ai', vals: 'Claude API · MCP · AI Agents · LLMs' },
  ],
  exploring: {
    building: 'careeros — a privacy-first, markdown-native job search workspace that runs in Claude Code',
    investigating: 'Jev · hackathons to put skills to actual use · trails longer than is sensible',
    learning: 'table tennis · guitar · what the air fryer is actually capable of',
    next: 'Agent Harness · CKAD and CKS · learning to not immediately sink in a pool',
  },
};

/* ── Utilities ─────────────────────────────────────────────────────── */
function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ── Progress bar animation ────────────────────────────────────────── */
function animateBar(el, width, totalMs, done) {
  const w = width || 22;
  let n = 0;
  const stepMs = Math.max(10, totalMs / w);
  const go = () => {
    if (n > w) { done?.(); return; }
    el.textContent = `[${'█'.repeat(n)}${'░'.repeat(w - n)}] ${Math.round(n / w * 100)}%`;
    n++;
    setTimeout(go, stepMs);
  };
  go();
}

/* ── Project execution animation ───────────────────────────────────── */
function execProject(proj) {
  const container = document.createElement('div');
  container.className = 'out-section';
  Terminal.outputEl.appendChild(container);
  Terminal.scrollBottom();

  let d = 60;
  (proj.execSteps || []).forEach(step => {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'exec-step';
      el.textContent = step;
      container.appendChild(el);
      Terminal.scrollBottom();
    }, d);
    d += 90;
  });

  setTimeout(() => {
    const barEl = document.createElement('div');
    barEl.className = 'exec-bar';
    barEl.textContent = '[░░░░░░░░░░░░░░░░░░░░░░] 0%';
    container.appendChild(barEl);
    Terminal.scrollBottom();

    animateBar(barEl, 22, 550, () => {
      const ok = document.createElement('div');
      ok.className = 'exec-ok';
      ok.textContent = '✓ done';
      container.appendChild(ok);
      Terminal.scrollBottom();

      setTimeout(() => {
        const card = document.createElement('div');
        card.className = 'out-project exec-reveal';
        card.innerHTML = `
          <div class="out-project-top">
            <span class="out-company">${proj.name}</span>
            ${proj.badge ? `<span class="out-badge">${proj.badge}</span>` : ''}
            <a href="${proj.url}" target="_blank" rel="noopener" class="out-link out-link-arrow">↗ github</a>
          </div>
          <div class="out-project-desc">${proj.desc}</div>
          <div class="out-project-tags">${proj.tags.join(' &nbsp; ')}</div>`;
        container.appendChild(card);
        Terminal.scrollBottom();
      }, 250);
    });
  }, d + 80);
}

/* ── Boot sequence ─────────────────────────────────────────────────── */
const BOOT_LINES = [
  { text: 'KAUSHAL_OS v2.6.1', cls: 'boot-title', instant: true, after: 120 },
  { text: '─'.repeat(42), cls: 'boot-sep', instant: true, after: 200 },
  { prefix: '[  OK  ] ', text: 'Initializing kernel...', cls: 'boot-ok', charDelay: 10, after: 40 },
  { prefix: '[  OK  ] ', text: 'Loading developer profile...', cls: 'boot-ok', charDelay: 10, after: 40 },
  { prefix: '[  OK  ] ', text: 'Mounting /home/kaushal/portfolio...', cls: 'boot-ok', charDelay: 10, after: 40 },
  { prefix: '[  OK  ] ', text: 'Connecting to github.com...', cls: 'boot-ok', charDelay: 10, after: 40 },
  { prefix: '[  OK  ] ', text: 'Loading experience.log (5+ years)...', cls: 'boot-ok', charDelay: 10, after: 40 },
  { prefix: '[  OK  ] ', text: 'Parsing projects manifest...', cls: 'boot-ok', charDelay: 10, after: 40 },
  { prefix: '[  OK  ] ', text: 'Establishing secure session...', cls: 'boot-ok', charDelay: 10, after: 200 },
  { text: '─'.repeat(42), cls: 'boot-sep', instant: true, after: 200 },
  { text: 'SYSTEM READY', cls: 'boot-ready', instant: true, after: 600 },
];

const Boot = {
  el: null,
  linesEl: null,
  skipBtn: null,
  stopped: false,
  done: false,

  init() {
    this.el = document.getElementById('boot-screen');
    this.linesEl = document.getElementById('boot-lines');
    this.skipBtn = document.getElementById('boot-skip');
    if (!this.el) { this.finish(); return; }

    const skip = () => this.finish();
    this.skipBtn?.addEventListener('click', skip);

    if (sessionStorage.getItem('kaushal_boot_done')) {
      this.finish();
      return;
    }

    /* Attach keydown skip listener with small delay so programmatic events don't fire it */
    setTimeout(() => {
      document.addEventListener('keydown', skip, { once: true });
    }, 400);

    this.runLine(BOOT_LINES, 0);
  },

  runLine(lines, idx) {
    if (this.stopped || idx >= lines.length) {
      if (!this.stopped) this.finish();
      return;
    }
    const line = lines[idx];
    const el = document.createElement('div');
    el.className = `boot-line ${line.cls}`;
    this.linesEl.appendChild(el);
    this.linesEl.scrollTop = this.linesEl.scrollHeight;

    if (line.instant || !line.text) {
      el.textContent = line.text || line.prefix || '';
      setTimeout(() => this.runLine(lines, idx + 1), line.after || 100);
    } else {
      if (line.prefix) {
        const pfx = document.createElement('span');
        pfx.className = 'boot-ok-tag';
        pfx.textContent = line.prefix;
        el.appendChild(pfx);
      }
      const msg = document.createElement('span');
      el.appendChild(msg);
      this.typeInto(msg, line.text, line.charDelay || 12, () => {
        setTimeout(() => this.runLine(lines, idx + 1), line.after || 80);
      });
    }
  },

  typeInto(el, text, charDelay, done) {
    let i = 0;
    const step = () => {
      if (this.stopped) { el.textContent += text.slice(i); done?.(); return; }
      if (i >= text.length) { done?.(); return; }
      el.textContent += text[i++];
      this.linesEl.scrollTop = this.linesEl.scrollHeight;
      setTimeout(step, charDelay);
    };
    step();
  },

  finish() {
    if (this.done) return;
    this.done = true;
    this.stopped = true;
    sessionStorage.setItem('kaushal_boot_done', '1');

    if (this.el) {
      this.el.classList.add('boot-exit');
      setTimeout(() => {
        this.el.style.display = 'none';
        Terminal.init();
        Terminal.runWelcome();
      }, 500);
    } else {
      Terminal.init();
      Terminal.runWelcome();
    }
  },
};

/* ── Commands ─────────────────────────────────────────────────────── */
const COMMANDS = {};
function cmd(names, fn) {
  (Array.isArray(names) ? names : [names]).forEach(n => { COMMANDS[n.toLowerCase()] = fn; });
}

cmd('help', () => `<div class="out-section">
<div class="out-label">Available commands</div>
<div class="out-table">
  <div class="out-row"><span class="out-key">about</span><span class="out-val">About me</span></div>
  <div class="out-row"><span class="out-key">whoami</span><span class="out-val">Quick introduction</span></div>
  <div class="out-row"><span class="out-key">experience</span><span class="out-val">Work experience</span></div>
  <div class="out-row"><span class="out-key">projects</span><span class="out-val">Featured projects</span></div>
  <div class="out-row"><span class="out-key">poirot run</span><span class="out-val">Execute reliability assessment</span></div>
  <div class="out-row"><span class="out-key">echo-health</span><span class="out-val">Run echo-health demo</span></div>
  <div class="out-row"><span class="out-key">skim build</span><span class="out-val">Build the skim plugin</span></div>
  <div class="out-row"><span class="out-key">careeros init</span><span class="out-val">Scaffold job-search workspace</span></div>
  <div class="out-row"><span class="out-key">skills</span><span class="out-val">Technical stack</span></div>
  <div class="out-row"><span class="out-key">education</span><span class="out-val">Education background</span></div>
  <div class="out-row"><span class="out-key">contact</span><span class="out-val">Contact information</span></div>
  <div class="out-row"><span class="out-key">resume</span><span class="out-val">View / download resume</span></div>
  <div class="out-row"><span class="out-key">github</span><span class="out-val">Open GitHub profile</span></div>
  <div class="out-row"><span class="out-key">neofetch</span><span class="out-val">System information</span></div>
  <div class="out-row"><span class="out-key">status</span><span class="out-val">Current availability</span></div>
  <div class="out-row"><span class="out-key">ls</span><span class="out-val">List directory</span></div>
  <div class="out-row"><span class="out-key">pwd</span><span class="out-val">Print working directory</span></div>
  <div class="out-row"><span class="out-key">date</span><span class="out-val">Current date and time</span></div>
  <div class="out-row"><span class="out-key">exploring</span><span class="out-val">What I'm working on now</span></div>
  <div class="out-row"><span class="out-key">analytics</span><span class="out-val">Analytics setup and status</span></div>
  <div class="out-row"><span class="out-key">history</span><span class="out-val">Command history</span></div>
  <div class="out-row"><span class="out-key">clear</span><span class="out-val">Clear terminal (Ctrl+L)</span></div>
</div>
<div class="out-hint">↑/↓ history &nbsp;·&nbsp; TAB autocomplete &nbsp;·&nbsp; Ctrl+L clear</div>
</div>`);

cmd('whoami', () => {
  const container = document.createElement('div');
  container.className = 'out-section';
  container.innerHTML = `
    <div class="out-whoami-name">${DATA.name}</div>
    <div class="out-whoami-role">${DATA.role} &nbsp;·&nbsp; RapidAI</div>
    <div class="out-whoami-bio">
      Building reliable, scalable backend systems and the infrastructure behind them.<br>
      5+ yrs. Go · Python · Kubernetes · AWS · GCP<br>
      <span class="out-muted">Distributed systems: because one machine failing was never enough trouble.</span>
    </div>`;
  Terminal.outputEl.appendChild(container);
  Terminal.scrollBottom();

  /* Explore nav appears shortly after whoami content */
  setTimeout(() => {
    const firstVisit = !sessionStorage.getItem('kaushal_explored');
    const nav = document.createElement('div');
    nav.className = 'explore-nav' + (firstVisit ? ' explore-nav--first' : '');
    nav.innerHTML = `
      <div class="explore-header">// explore</div>
      <div class="explore-grid">
        <button class="explore-btn" data-cmd="about"><span class="explore-cmd">about</span><span class="explore-sep">·</span><span class="explore-desc">Who I am</span></button>
        <button class="explore-btn" data-cmd="experience"><span class="explore-cmd">experience</span><span class="explore-sep">·</span><span class="explore-desc">Where I've worked</span></button>
        <button class="explore-btn" data-cmd="projects"><span class="explore-cmd">projects</span><span class="explore-sep">·</span><span class="explore-desc">Things I've built</span></button>
        <button class="explore-btn" data-cmd="skills"><span class="explore-cmd">skills</span><span class="explore-sep">·</span><span class="explore-desc">Technologies I use</span></button>
        <button class="explore-btn" data-cmd="contact"><span class="explore-cmd">contact</span><span class="explore-sep">·</span><span class="explore-desc">Let's talk</span></button>
        <button class="explore-btn" data-cmd="resume"><span class="explore-cmd">resume</span><span class="explore-sep">·</span><span class="explore-desc">View / download</span></button>
      </div>
      <div class="explore-hint-text">Choose a section, or type a command.</div>
      ${firstVisit ? '<div class="explore-onboard-tip">New here? These buttons navigate the same content as terminal commands.</div>' : ''}`;
    Terminal.outputEl.appendChild(nav);
    Terminal.scrollBottom();

    if (firstVisit) {
      setTimeout(() => nav.classList.add('explore-nav--onboard-done'), 4000);
    }
  }, 180);

  return null;
});

cmd('about', () => {
  Terminal.setSection('about');
  return `<div class="out-section">
<div class="out-label">// about</div>
<p class="out-p">Five years building distributed backend systems and the infrastructure that keeps them running: event pipelines, Kubernetes-native deployment tooling, observability setups, and reliability tooling. Go is my primary language, Python when it fits, Kubernetes in most of the places I've worked.</p>
<p class="out-p">At RapidAI: automated Kubernetes deployments for hospital networks, distributed tracing across 12+ services (because guessing where things break gets old fast), and an AI reliability agent that cut incident resolution from 2+ hours to under 30 minutes. At Eka Care before that: built the backend for prescriptions and appointments, a notification platform handling 1M+ messages a day, and a webhook system serving 50+ clients.</p>
<p class="out-p">Outside work: backpacking, reading, badminton. Currently learning guitar and table tennis — simultaneously, which is ambitious.</p>
<div class="out-table">
  <div class="out-row"><span class="out-key">location</span><span class="out-val">${DATA.location}</span></div>
  <div class="out-row"><span class="out-key">email</span><span class="out-val"><a href="mailto:${DATA.email}" class="out-link">${DATA.email}</a></span></div>
  <div class="out-row"><span class="out-key">education</span><span class="out-val">${DATA.education}</span></div>
</div>
</div>`;
});

/* experience — cd-style preamble + progressive bullets */
cmd('experience', () => {
  Terminal.setSection('experience');
  const container = document.createElement('div');
  container.className = 'out-section';
  Terminal.outputEl.appendChild(container);
  Terminal.scrollBottom();

  /* Log-style preamble before data renders */
  const preamble = [
    { t: 0,   cls: 'out-label',  text: '// cat /var/log/career.log' },
    { t: 60,  cls: 'exec-step',  text: '→ reading career.log...' },
    { t: 160, cls: 'exec-step',  text: `→ ${DATA.experience.length} records found` },
    { t: 260, cls: 'exec-step',  text: '→ rendering...' },
  ];
  preamble.forEach(({ t, cls, text }) => {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = cls;
      el.textContent = text;
      container.appendChild(el);
      Terminal.scrollBottom();
    }, t);
  });

  let baseDelay = 380;

  DATA.experience.forEach((exp, ri) => {
    const roleDelay = baseDelay + (ri === 0 ? 0 : 300);
    baseDelay = roleDelay;

    setTimeout(() => {
      const header = document.createElement('div');
      header.className = 'out-exp-role';
      header.innerHTML = `
        <div class="out-exp-header">
          <span class="out-company">${exp.company}</span>
          <span class="out-dates">${exp.period}</span>
        </div>
        <div class="out-title">${exp.title}</div>`;
      container.appendChild(header);
      Terminal.scrollBottom();
    }, roleDelay);

    const ul = document.createElement('ul');
    ul.className = 'out-bullets';

    exp.bullets.forEach((b, bi) => {
      const liDelay = roleDelay + 180 + bi * 110;
      baseDelay = Math.max(baseDelay, liDelay);

      setTimeout(() => {
        if (!ul.parentNode) container.appendChild(ul);
        const li = document.createElement('li');
        li.textContent = b;
        ul.appendChild(li);
        Terminal.scrollBottom();
      }, liDelay);
    });

    baseDelay += 200;
  });

  return null;
});

/* projects — directory listing then card reveal */
cmd('projects', () => {
  Terminal.setSection('projects');
  const container = document.createElement('div');
  container.className = 'out-section';
  Terminal.outputEl.appendChild(container);
  Terminal.scrollBottom();

  /* Step 1: directory listing */
  const labelEl = document.createElement('div');
  labelEl.className = 'out-label';
  labelEl.textContent = '// ls -la ./projects';
  container.appendChild(labelEl);

  const dirListing = document.createElement('div');
  dirListing.className = 'out-ls';
  container.appendChild(dirListing);

  DATA.projects.forEach((p, i) => {
    setTimeout(() => {
      const row = document.createElement('div');
      row.innerHTML = `<span class="ls-dir">drwxr-xr-x</span>&nbsp; ${p.name}/`;
      dirListing.appendChild(row);
      Terminal.scrollBottom();
    }, 80 + i * 100);
  });

  /* Step 2: full cards appear after listing */
  DATA.projects.forEach((p, i) => {
    setTimeout(() => {
      const card = document.createElement('div');
      card.className = 'out-project exec-reveal';
      const detailHtml = (p.detail || []).map(d =>
        `<div class="out-detail-line">${escHtml(d)}</div>`
      ).join('');
      const landingLink = p.landing
        ? `<a href="${p.landing}" target="_blank" rel="noopener" class="out-link out-link-arrow">↗ site</a>`
        : '';
      card.innerHTML = `
        <div class="out-project-top">
          <span class="out-cmd-green">$ ${escHtml(p.cmd)}</span>
          ${p.badge ? `<span class="out-badge">${p.badge}</span>` : ''}
          ${landingLink}
          <a href="${p.url}" target="_blank" rel="noopener" class="out-link out-link-arrow">↗ github</a>
        </div>
        <div class="out-project-desc">${p.desc}</div>
        ${detailHtml ? `<div class="out-project-detail">${detailHtml}</div>` : ''}
        <div class="out-project-tags">${p.tags.join(' &nbsp; ')}</div>`;
      container.appendChild(card);
      Terminal.scrollBottom();
    }, 500 + i * 260);
  });

  return null;
});

/* individual project execution commands */
cmd('poirot run',     () => { execProject(DATA.projects[0]); return null; });
cmd('echo-health',   () => { execProject(DATA.projects[1]); return null; });
cmd('skim build',    () => { execProject(DATA.projects[2]); return null; });
cmd('careeros init', () => { execProject(DATA.projects[3]); return null; });

cmd('skills', () => {
  Terminal.setSection('skills');
  const rows = DATA.skills.map(s =>
    `<div class="out-row"><span class="out-key">${s.cat}</span><span class="out-val">${s.vals}</span></div>`
  ).join('');
  return `<div class="out-section">
<div class="out-label">// skills --list</div>
<div class="out-table">${rows}</div>
</div>`;
});

cmd('education', () => `<div class="out-section">
<div class="out-label">// education</div>
<div class="out-table">
  <div class="out-row"><span class="out-key">institution</span><span class="out-val">Indian Institute of Information Technology, Jabalpur</span></div>
  <div class="out-row"><span class="out-key">degree</span><span class="out-val">B.Tech — Computer Science and Engineering</span></div>
  <div class="out-row"><span class="out-key">period</span><span class="out-val">2017 – 2021</span></div>
</div>
</div>`);

cmd('contact', () => {
  Terminal.setSection('contact');
  return `<div class="out-section">
<div class="out-label">// ./contact</div>
<div class="out-table">
  <div class="out-row"><span class="out-key">email</span><span class="out-val"><a href="mailto:${DATA.email}" class="out-link">${DATA.email}</a></span></div>
  <div class="out-row"><span class="out-key">github</span><span class="out-val"><a href="${DATA.github}" target="_blank" rel="noopener" class="out-link">→ init-kaushal</a></span></div>
  <div class="out-row"><span class="out-key">linkedin</span><span class="out-val"><a href="${DATA.linkedin}" target="_blank" rel="noopener" class="out-link">→ kaushal-kishor-sharma</a></span></div>
  <div class="out-row"><span class="out-key">leetcode</span><span class="out-val"><a href="${DATA.leetcode}" target="_blank" rel="noopener" class="out-link">→ sharmakaushal</a></span></div>
  <div class="out-row"><span class="out-key">x</span><span class="out-val"><a href="${DATA.twitter}" target="_blank" rel="noopener" class="out-link">→ kaushaltwt</a></span></div>
</div>
<div class="out-status-line"><span class="status-dot">●</span> Available for interesting opportunities</div>
</div>`;
});

cmd('resume', () => `<div class="out-section">
<div class="out-label">// resume</div>
<div class="out-p">Loading resume...</div>
<div class="out-resume-links">
  <a href="${DATA.resume}" target="_blank" rel="noopener" class="out-btn">[ VIEW RESUME ]</a>
  <a href="${DATA.resume}" download class="out-btn out-btn-secondary">[ DOWNLOAD PDF ]</a>
</div>
</div>`);

cmd('github', () => {
  window.open(DATA.github, '_blank', 'noopener');
  return `<div class="out-section"><div class="out-p out-muted">Opening <a href="${DATA.github}" target="_blank" rel="noopener" class="out-link">github.com/init-kaushal</a> ...</div></div>`;
});

/* neofetch — progressive row rendering */
cmd('neofetch', () => {
  const ASCII = `  ██╗  ██╗███████╗
  ██║ ██╔╝██╔════╝
  █████╔╝ ███████╗
  ██╔═██╗ ╚════██║
  ██║  ██╗███████║
  ╚═╝  ╚═╝╚══════╝`;

  const container = document.createElement('div');
  container.className = 'out-section out-neofetch';
  container.innerHTML = `<pre class="out-ascii">${ASCII}</pre><div class="nf-rows"></div>`;
  Terminal.outputEl.appendChild(container);
  Terminal.scrollBottom();

  const rowsEl = container.querySelector('.nf-rows');
  const rows = [
    `<div class="out-nf-name">${DATA.handle}@portfolio</div>`,
    `<div class="out-nf-sep">──────────────────────</div>`,
    `<div class="out-row"><span class="out-key">OS</span><span class="out-val">KaushalOS 2.6.1</span></div>`,
    `<div class="out-row"><span class="out-key">Role</span><span class="out-val">Senior SWE · Distributed Systems &amp; Backend · RapidAI</span></div>`,
    `<div class="out-row"><span class="out-key">Location</span><span class="out-val">${DATA.location}</span></div>`,
    `<div class="out-row"><span class="out-key">Runtime</span><span class="out-val">Go · Python</span></div>`,
    `<div class="out-row"><span class="out-key">Cloud</span><span class="out-val">AWS · GCP</span></div>`,
    `<div class="out-row"><span class="out-key">K8s</span><span class="out-val">Kubernetes · Helm · ArgoCD</span></div>`,
    `<div class="out-row"><span class="out-key">Database</span><span class="out-val">PostgreSQL · Redis</span></div>`,
    `<div class="out-row"><span class="out-key">AI</span><span class="out-val">Agents · MCP · LLMs</span></div>`,
    `<div class="out-row"><span class="out-key">Experience</span><span class="out-val">5+ years</span></div>`,
    `<div class="out-nf-sep">──────────────────────</div>`,
    `<div class="out-row"><span class="out-key">Status</span><span class="out-val"><span class="status-dot">●</span> Open to opportunities</span></div>`,
  ];

  let i = 0;
  const next = () => {
    if (i >= rows.length) return;
    rowsEl.insertAdjacentHTML('beforeend', rows[i++]);
    Terminal.scrollBottom();
    setTimeout(next, i < 3 ? 60 : 80);
  };
  setTimeout(next, 80);

  return null;
});

cmd('status', () => `<div class="out-section">
<div class="out-label">// status</div>
<div class="out-status-line"><span class="status-dot">●</span> Available for interesting opportunities. Uninteresting ones too, depending on the problem.</div>
<div class="out-table">
  <div class="out-row"><span class="out-key">location</span><span class="out-val">${DATA.location}</span></div>
  <div class="out-row"><span class="out-key">currently</span><span class="out-val">@RapidAI — Senior Software Engineer · Distributed Systems &amp; Backend</span></div>
  <div class="out-row"><span class="out-key">open to</span><span class="out-val">Distributed systems · backend · platform · AI engineering</span></div>
</div>
</div>`);

cmd('ls', () => `<div class="out-section">
<div class="out-ls">
  <div><span class="ls-dir">drwxr-xr-x</span>&nbsp; about/</div>
  <div><span class="ls-dir">drwxr-xr-x</span>&nbsp; experience/</div>
  <div><span class="ls-dir">drwxr-xr-x</span>&nbsp; projects/</div>
  <div><span class="ls-dir">drwxr-xr-x</span>&nbsp; skills/</div>
  <div><span class="ls-dir">drwxr-xr-x</span>&nbsp; exploring/</div>
  <div><span class="ls-dir">drwxr-xr-x</span>&nbsp; contact/</div>
  <div><span class="ls-file">-rw-r--r--</span>&nbsp; resume.pdf</div>
  <div><span class="ls-exec">-rwxr-xr-x</span>&nbsp; neofetch*</div>
</div>
</div>`);

cmd('pwd', () => {
  const section = Terminal.currentSection;
  const path = section ? `/home/kaushal/portfolio/${section}` : '/home/kaushal/portfolio';
  return `<div class="out-section"><div class="out-p">${path}</div></div>`;
});

/* cd — navigate sections or return home */
const CD_SECTIONS = ['about', 'experience', 'projects', 'skills', 'contact'];
cmd(['cd', 'cd ~', 'cd /', 'cd ~/', 'cd ..'], () => {
  Terminal.setSection(null);
  return `<div class="out-section"><div class="out-p">/home/kaushal/portfolio</div></div>`;
});
CD_SECTIONS.forEach(s => {
  cmd([`cd ${s}`, `cd ./${s}`, `cd ${s}/`], () => {
    Terminal.execute(s);
    return null;
  });
});

cmd('date', () => {
  const now = new Date();
  return `<div class="out-section"><div class="out-p">${now.toDateString()} ${now.toLocaleTimeString('en-IN', { timeZoneName: 'short' })}</div></div>`;
});

cmd('history', () => {
  const h = Terminal.history;
  if (!h.length) return `<div class="out-section"><div class="out-muted out-p">No history yet.</div></div>`;
  const lines = h.map((c, i) =>
    `<div class="out-row"><span class="out-key" style="min-width:2.2em;text-align:right">${i + 1}</span><span class="out-val" style="padding-left:12px">${escHtml(c)}</span></div>`
  ).join('');
  return `<div class="out-section"><div class="out-table">${lines}</div></div>`;
});

cmd('clear', () => {
  Terminal.outputEl.innerHTML = '';
  Terminal.bodyEl.classList.add('term-clear-flash');
  setTimeout(() => Terminal.bodyEl.classList.remove('term-clear-flash'), 120);
  return null;
});

/* ── Easter eggs ───────────────────────────────────────────────────── */
cmd('sudo hire kaushal', () => `<div class="out-section">
<div class="out-p out-muted">[sudo] password for recruiter: <span class="cursor-inline">█</span></div>
<div class="out-p out-amber">──────────────────────────────</div>
<div class="out-p out-green">Access granted.</div>
<div class="out-p out-green">You found the engineer.</div>
<div class="out-p">→ <a href="mailto:${DATA.email}" class="out-link">${DATA.email}</a></div>
</div>`);

cmd('coffee', () => `<div class="out-section">
<div class="out-p">Brewing...</div>
<div class="out-p out-amber">☕ Error: caffeine dependency not found in /home/kaushal</div>
<div class="out-p out-muted">Hint: try pinging me instead.</div>
</div>`);

cmd('ping kaushal', () => `<div class="out-section">
<div class="out-p">PING kaushal (${DATA.email})</div>
<div class="out-p out-green">64 bytes from ${DATA.email}: icmp_seq=1 ttl=64 time=&lt;instant ms</div>
<div class="out-p out-green">64 bytes from ${DATA.email}: icmp_seq=2 ttl=64 time=&lt;instant ms</div>
<div class="out-p out-green">64 bytes from ${DATA.email}: icmp_seq=3 ttl=64 time=&lt;instant ms</div>
<div class="out-p">--- kaushal ping statistics ---</div>
<div class="out-p">3 packets transmitted, 3 received, 0% packet loss</div>
<div class="out-p out-muted">Response guaranteed. DM preferred.</div>
</div>`);

cmd('vim', () => `<div class="out-section">
<div class="out-p out-amber">vim: error: you are trapped</div>
<div class="out-p out-muted">:q! to escape (good luck)</div>
<div class="out-p out-green">Kidding. Type <span class="out-cmd-inline">clear</span> to continue.</div>
</div>`);

cmd('fortune', () => {
  const fortunes = [
    '"The best code is no code at all." — Jeff Atwood',
    '"Make it work, make it right, make it fast." — Kent Beck',
    '"A distributed system is one in which the failure of a computer you didn\'t even know existed can render your own computer unusable." — Leslie Lamport',
    '"Premature optimization is the root of all evil." — Knuth',
    '"Kubernetes: because who needs simplicity when you can have eventual consistency?"',
    '"It works on my cluster." — every platform engineer, once, before a 3am page',
    '"Observability: the practice of realising, after the fact, what you should have measured from the start."',
    '"The cloud is just someone else\'s computer. A distributed system is just several people\'s computers all disagreeing."',
    '"Good distributed systems look boring. You only notice them when they stop being boring."',
  ];
  const f = fortunes[Math.floor(Math.random() * fortunes.length)];
  return `<div class="out-section"><div class="out-p out-amber">${f}</div></div>`;
});

/* exploring / now */
cmd(['exploring', 'now'], () => {
  const e = DATA.exploring;
  const items = [
    { key: 'building',      val: e.building },
    { key: 'investigating', val: e.investigating },
    { key: 'learning',      val: e.learning },
    { key: 'next',          val: e.next },
  ];
  const rows = items.map(i =>
    `<div class="out-row"><span class="out-key">${i.key}</span><span class="out-val">${escHtml(i.val)}</span></div>`
  ).join('');
  return `<div class="out-section">
<div class="out-label">// cat exploring.json</div>
<div class="out-table">${rows}</div>
</div>`;
});

/* analytics */
cmd('analytics', () => {
  const configured = !!document.querySelector('[data-cf-beacon]');
  const statusCls = configured ? 'out-green' : 'out-amber';
  const statusText = configured ? '● tracking active' : '○ not configured — see setup steps below';
  return `<div class="out-section">
<div class="out-label">// analytics status</div>
<div class="out-table">
  <div class="out-row"><span class="out-key">provider</span><span class="out-val">Cloudflare Web Analytics</span></div>
  <div class="out-row"><span class="out-key">status</span><span class="out-val ${statusCls}">${statusText}</span></div>
  <div class="out-row"><span class="out-key">tracks</span><span class="out-val">page views · project link clicks · resume clicks</span></div>
</div>
${!configured ? `<div class="out-hint">Setup: 1) sign up at dash.cloudflare.com/web-analytics  2) add your token to the script tag in index.html  3) uncomment the &lt;script&gt; block near &lt;/body&gt;</div>` : ''}
</div>`;
});

cmd('analytics status', () => Terminal.execute('analytics'));

cmd('analytics open', () => {
  window.open('https://dash.cloudflare.com/web-analytics', '_blank', 'noopener');
  return `<div class="out-section"><div class="out-p out-muted">Opening Cloudflare Web Analytics...</div></div>`;
});

cmd('analytics report', () => {
  const configured = !!document.querySelector('[data-cf-beacon]');
  if (!configured) {
    return `<div class="out-section">
<div class="out-p out-amber">analytics not configured — no data available yet.</div>
<div class="out-hint">Run <span class="out-cmd-inline">analytics</span> for setup steps.</div>
</div>`;
  }
  window.open('https://dash.cloudflare.com/web-analytics', '_blank', 'noopener');
  return `<div class="out-section"><div class="out-p out-muted">Opening analytics dashboard — live data is there.</div></div>`;
});

cmd(['rm -rf /', 'rm -rf /*'], () => `<div class="out-section">
<div class="out-p out-amber">rm: refusing to remove '/' recursively</div>
<div class="out-p out-muted">Nice try. The portfolio stays.</div>
</div>`);

/* ── Terminal ──────────────────────────────────────────────────────── */
const Terminal = {
  history: [],
  histCursor: -1,
  inputEl: null,
  outputEl: null,
  bodyEl: null,
  pendingInput: '',
  currentSection: null,

  init() {
    this.inputEl = document.getElementById('term-input');
    this.outputEl = document.getElementById('term-output');
    this.bodyEl = document.getElementById('term-body');
    if (!this.inputEl) return;

    this.inputEl.addEventListener('keydown', e => this.onKeyDown(e));

    /* Click on explore buttons (event delegation — buttons are injected later) */
    this.outputEl.addEventListener('click', e => {
      const btn = e.target.closest('.explore-btn');
      if (btn) {
        const c = btn.getAttribute('data-cmd');
        if (c) {
          sessionStorage.setItem('kaushal_explored', '1');
          this.execute(c);
        }
        return;
      }
      this.inputEl.focus();
    });

    this.bodyEl.addEventListener('click', e => {
      if (!e.target.closest('.explore-btn') && !e.target.closest('a')) {
        this.inputEl.focus();
      }
    });

    document.addEventListener('keydown', e => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (document.activeElement !== this.inputEl && !this.isTextFocus()) {
        this.inputEl.focus();
      }
    });
  },

  setSection(name) {
    this.currentSection = name;
    const path = name ? `~/${name}` : '~';
    const titleEl = document.querySelector('.term-title');
    const promptEl = document.querySelector('.term-prompt-label');
    if (titleEl && titleEl.textContent !== `kaushal@portfolio: ${path}`) {
      titleEl.classList.add('term-title--changing');
      setTimeout(() => {
        titleEl.textContent = `kaushal@portfolio: ${path}`;
        titleEl.classList.remove('term-title--changing');
      }, 120);
    }
    if (promptEl) {
      promptEl.textContent = `kaushal@portfolio:${path}$ `;
    }
    /* Also update printed prompt-lines for consistency */
  },

  isTextFocus() {
    const t = document.activeElement?.tagName;
    return t === 'INPUT' || t === 'TEXTAREA' || t === 'A';
  },

  onKeyDown(e) {
    if (e.key === 'Enter') {
      const raw = this.inputEl.value.trim();
      this.inputEl.value = '';
      this.histCursor = -1;
      this.pendingInput = '';
      this.execute(raw);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (this.histCursor === -1) this.pendingInput = this.inputEl.value;
      if (this.histCursor < this.history.length - 1) {
        this.histCursor++;
        this.inputEl.value = this.history[this.history.length - 1 - this.histCursor];
        this.moveCaretEnd();
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (this.histCursor > 0) {
        this.histCursor--;
        this.inputEl.value = this.history[this.history.length - 1 - this.histCursor];
      } else if (this.histCursor === 0) {
        this.histCursor = -1;
        this.inputEl.value = this.pendingInput;
      }
      this.moveCaretEnd();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      this.tabComplete();
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      COMMANDS['clear']?.();
    }
  },

  moveCaretEnd() {
    const len = this.inputEl.value.length;
    this.inputEl.setSelectionRange(len, len);
  },

  tabComplete() {
    const val = this.inputEl.value.toLowerCase();
    if (!val) return;
    const matches = Object.keys(COMMANDS).filter(c => c.startsWith(val));
    if (matches.length === 1) {
      this.inputEl.value = matches[0];
    } else if (matches.length > 1) {
      this.printPromptLine(val);
      this.print(`<div class="out-section"><div class="out-ls">${matches.map(escHtml).join('&nbsp; &nbsp;')}</div></div>`);
    }
  },

  execute(raw) {
    if (!raw) return;
    this.history.push(raw);
    this.printPromptLine(raw);

    const key = raw.toLowerCase();
    const fn = COMMANDS[key];
    if (fn) {
      const html = fn();
      if (html) this.print(html);
    } else {
      this.print(`<div class="out-section"><div class="out-error">command not found: ${escHtml(raw)} &nbsp;·&nbsp; type <span class="out-cmd-inline">help</span></div></div>`);
    }

    this.scrollBottom();
    this.inputEl.focus();
  },

  printPromptLine(cmd) {
    const path = this.currentSection ? `~/${this.currentSection}` : '~';
    const el = document.createElement('div');
    el.className = 'out-prompt-line';
    el.innerHTML = `<span class="prompt-str">${DATA.handle}@portfolio:${path}$</span> <span class="prompt-cmd">${escHtml(cmd)}</span>`;
    this.outputEl.appendChild(el);
  },

  print(html) {
    const el = document.createElement('div');
    el.innerHTML = html;
    this.outputEl.appendChild(el);
  },

  scrollBottom() {
    this.bodyEl.scrollTop = this.bodyEl.scrollHeight;
  },

  runWelcome() {
    const simulateType = (str, cb) => {
      let i = 0;
      this.inputEl.value = '';
      const iv = setInterval(() => {
        if (i < str.length) {
          this.inputEl.value += str[i++];
        } else {
          clearInterval(iv);
          setTimeout(cb, 180);
        }
      }, 55);
    };

    setTimeout(() => {
      simulateType('whoami', () => {
        this.execute('whoami');
        this.inputEl.value = '';
      });
    }, 380);
  },
};

/* ── Network canvas ────────────────────────────────────────────────── */
const Network = {
  canvas: null,
  ctx: null,
  nodes: [],
  packets: [],
  raf: null,
  lastFrame: 0,
  FPS: 30,

  init() {
    this.canvas = document.getElementById('net-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    this.buildNodes();
    window.addEventListener('resize', () => { this.resize(); this.buildNodes(); });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(this.raf);
      else this.loop(0);
    });
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.loop(0);
    }
  },

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },

  buildNodes() {
    const n = window.innerWidth < 600 ? 10 : 18;
    this.nodes = Array.from({ length: n }, () => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: Math.random() * 1.5 + 1,
    }));
    this.packets = [];
  },

  loop(ts) {
    if (ts - this.lastFrame < 1000 / this.FPS) {
      this.raf = requestAnimationFrame(t => this.loop(t));
      return;
    }
    this.lastFrame = ts;
    this.tick();
    this.draw();
    this.raf = requestAnimationFrame(t => this.loop(t));
  },

  tick() {
    this.nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > this.canvas.width)  n.vx *= -1;
      if (n.y < 0 || n.y > this.canvas.height) n.vy *= -1;
    });
    if (Math.random() < 0.04 && this.packets.length < 8) {
      const ai = Math.floor(Math.random() * this.nodes.length);
      let bi = Math.floor(Math.random() * this.nodes.length);
      if (bi === ai) bi = (ai + 1) % this.nodes.length;
      this.packets.push({ ai, bi, t: 0, speed: 0.008 + Math.random() * 0.012 });
    }
    this.packets = this.packets.filter(p => { p.t += p.speed; return p.t < 1; });
  },

  draw() {
    const { ctx, canvas, nodes, packets } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const DIST = 220;

    ctx.lineWidth = 0.5;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < DIST) {
          ctx.strokeStyle = `rgba(93,228,255,${(1 - d / DIST) * 0.12})`;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(93,228,255,0.25)';
      ctx.fill();
    });
    packets.forEach(p => {
      const a = nodes[p.ai], b = nodes[p.bi];
      ctx.beginPath();
      ctx.arc(a.x + (b.x - a.x) * p.t, a.y + (b.y - a.y) * p.t, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(124,255,107,0.6)';
      ctx.fill();
    });
  },
};

/* ── Metrics counters + telemetry sparklines ───────────────────────── */
const SPARK_PATHS = {
  '500': 'M0,10 L6,3 L12,12 L18,2 L24,8 L30,1 L36,9 L42,4 L48,11 L54,2 L60,7',   /* high-frequency traffic */
  '12':  'M0,7 L12,7 L18,4 L24,7 L36,6 L42,4 L48,7 L60,7',                        /* steady, distributed */
  '80':  'M0,12 L12,10 L24,8 L36,5 L48,3 L60,2',                                   /* upward adoption */
  '5':   'M0,11 L15,10 L30,8 L45,6 L60,4',                                          /* gradual growth */
  '0':   'M0,7 L20,7 L22,5 L24,7 L60,7',                                            /* flat — zero downtime */
};

function metricSparkSvg(dataTarget) {
  const d = SPARK_PATHS[dataTarget] || 'M0,7 L60,7';
  return `<svg class="metric-spark" viewBox="0 0 60 14" aria-hidden="true"><path d="${d}"/></svg>`;
}

function initMetrics() {
  /* Inject sparklines */
  document.querySelectorAll('.metric').forEach(m => {
    const numEl = m.querySelector('.metric-num');
    if (!numEl) return;
    const t = numEl.getAttribute('data-target');
    if (!t) return;
    const svg = document.createElement('div');
    svg.innerHTML = metricSparkSvg(t);
    m.appendChild(svg.firstElementChild);
  });

  const els = document.querySelectorAll('.metric-num[data-target]');
  if (!els.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.getAttribute('data-target'));
      const suffix = el.getAttribute('data-suffix') || '';
      const prefix = el.getAttribute('data-prefix') || '';
      const raw = el.getAttribute('data-target');
      const isFloat = raw.includes('.');
      const duration = 1400;
      const start = performance.now();

      /* Trigger sparkline draw animation */
      const spark = el.closest('.metric')?.querySelector('.metric-spark path');
      if (spark) spark.classList.add('metric-spark--animating');

      /* Reset then count up */
      el.textContent = prefix + (isFloat ? '0.0' : '0') + suffix;
      const step = now => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + (isFloat ? (target * eased).toFixed(1) : Math.round(target * eased)) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: 0.15 });

  els.forEach(el => obs.observe(el));
}

/* ── Scroll reveals ────────────────────────────────────────────────── */
function initReveals() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── Nav keyboard shortcuts ────────────────────────────────────────── */
function initKeyNav() {
  const map = { '1': '#about', '2': '#experience', '3': '#projects', '4': '#skills', '5': '#contact' };
  document.addEventListener('keydown', e => {
    if (document.activeElement === Terminal.inputEl) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const target = map[e.key];
    if (target) document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  });
}

/* ── Mobile quick-command buttons ──────────────────────────────────── */
function initMobileCommands() {
  document.querySelectorAll('[data-cmd]').forEach(btn => {
    btn.addEventListener('click', () => {
      Terminal.execute(btn.getAttribute('data-cmd'));
      document.getElementById('term-body')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ── Init ──────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  Network.init();
  initMetrics();
  initReveals();
  initKeyNav();
  initMobileCommands();
  Boot.init();
});
