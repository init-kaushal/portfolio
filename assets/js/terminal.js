/* ── Terminal Portfolio — Kaushal Sharma ──────────────────────────── */
'use strict';

/* ── Data (verified content only) ──────────────────────────────────── */
const DATA = {
  name: 'Kaushal Sharma',
  handle: 'kaushal',
  role: 'Backend Engineer',
  email: 'kaushalworkss@gmail.com',
  location: 'Bangalore, India',
  education: 'IIIT Jabalpur — B.Tech CSE (2017–2021)',
  github: 'https://github.com/init-kaushal',
  linkedin: 'https://www.linkedin.com/in/kaushal-kishor-sharma',
  leetcode: 'https://leetcode.com/u/sharmakaushal',
  twitter: 'https://x.com/kaushaltwt',
  resume: 'assets/files/Kaushal_5YOE.pdf',
  experience: [
    {
      company: 'RapidAI',
      title: 'Senior Software Engineer, Platform',
      period: 'Jun 2023 – Present',
      bullets: [
        'Built on-prem Kubernetes deployment pipeline for hospital-scale workloads (Helm, ArgoCD)',
        'Instrumented distributed tracing across 12+ services (Tempo + Grafana)',
        'Shipped poirot AI agent — cut escalation resolution time from 2h+ to <30 min, 80%+ team adoption',
        'Designed webhook ingestion pipeline handling 500k+ events/day',
      ],
    },
    {
      company: 'Eka Care',
      title: 'Software Engineer',
      period: 'Jul 2021 – Jun 2023',
      bullets: [
        'Built core prescription and appointment microservices in Go',
        'Migrated monolith services to Istio service mesh with zero downtime',
        'Led WhatsApp integration layer powering patient notifications at scale',
      ],
    },
  ],
  projects: [
    {
      cmd: 'poirot run',
      name: 'poirot',
      url: 'https://github.com/init-kaushal/poirot',
      desc: 'Point-in-time reliability, cost and change-risk assessment for Kubernetes clusters. Give it a kubeconfig and a poirot.yaml — read report.md.',
      tags: ['go', 'kubernetes', 'prometheus', 'llm'],
      badge: null,
    },
    {
      cmd: 'echo-health',
      name: 'echo-health',
      url: 'https://github.com/init-kaushal/echo-health',
      desc: 'Doctors send a voice note on WhatsApp; bot delivers the structured prescription back. Built at Ekathon 2025.',
      tags: ['python', 'fastapi', 'aws'],
      badge: '🏆 1st · Ekathon 2025',
    },
    {
      cmd: 'skim build',
      name: 'skim',
      url: 'https://github.com/init-kaushal/skim',
      desc: 'Claude Code plugin — intercepts oversized tool calls and substitutes a Haiku digest, keeping your context window clean.',
      tags: ['go', 'claude api', 'mcp'],
      badge: null,
    },
  ],
  skills: [
    { cat: 'systems', vals: 'Go · Python · Kubernetes · Prometheus · Grafana' },
    { cat: 'cloud', vals: 'AWS · GCP · Docker · Terraform · Helm · ArgoCD' },
    { cat: 'backend', vals: 'PostgreSQL · Redis · Kafka · gRPC · REST' },
    { cat: 'ai', vals: 'Claude API · MCP · AI Agents · LLMs' },
  ],
};

/* ── Boot sequence messages ─────────────────────────────────────────── */
const BOOT_MESSAGES = [
  { text: 'KAUSHAL_OS v2.6.1', delay: 0, cls: 'boot-title' },
  { text: '─'.repeat(42), delay: 120, cls: 'boot-sep' },
  { text: '[  OK  ] Initializing kernel...', delay: 300, cls: 'boot-ok' },
  { text: '[  OK  ] Loading developer profile...', delay: 500, cls: 'boot-ok' },
  { text: '[  OK  ] Mounting /home/kaushal/portfolio...', delay: 750, cls: 'boot-ok' },
  { text: '[  OK  ] Connecting to github.com...', delay: 980, cls: 'boot-ok' },
  { text: '[  OK  ] Loading experience.log...', delay: 1200, cls: 'boot-ok' },
  { text: '[  OK  ] Parsing projects manifest...', delay: 1420, cls: 'boot-ok' },
  { text: '[  OK  ] Establishing secure session...', delay: 1600, cls: 'boot-ok' },
  { text: '─'.repeat(42), delay: 1800, cls: 'boot-sep' },
  { text: 'SYSTEM READY', delay: 1950, cls: 'boot-ready' },
];

/* ── Commands ───────────────────────────────────────────────────────── */
const COMMANDS = {};

function cmd(names, fn) {
  const list = Array.isArray(names) ? names : [names];
  list.forEach(n => { COMMANDS[n.toLowerCase()] = fn; });
}

cmd('help', () => `<div class="out-section">
<div class="out-label">Available commands</div>
<div class="out-table">
  <div class="out-row"><span class="out-key">about</span><span class="out-val">About me</span></div>
  <div class="out-row"><span class="out-key">whoami</span><span class="out-val">Quick introduction</span></div>
  <div class="out-row"><span class="out-key">experience</span><span class="out-val">Work experience</span></div>
  <div class="out-row"><span class="out-key">projects</span><span class="out-val">Featured projects</span></div>
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
  <div class="out-row"><span class="out-key">history</span><span class="out-val">Command history</span></div>
  <div class="out-row"><span class="out-key">clear</span><span class="out-val">Clear terminal (also Ctrl+L)</span></div>
</div>
<div class="out-hint">↑/↓ history &nbsp;·&nbsp; TAB autocomplete &nbsp;·&nbsp; Ctrl+L clear</div>
</div>`);

cmd('whoami', () => `<div class="out-section">
<div class="out-whoami-name">${DATA.name}</div>
<div class="out-whoami-role">${DATA.role} &nbsp;·&nbsp; Senior Software Engineer</div>
<div class="out-whoami-bio">
Building distributed systems, Kubernetes-native platforms, and AI agents.<br>
5+ years — Go · Python · AWS · GCP · Kubernetes
</div>
<div class="out-hint">Type <span class="out-cmd-inline">about</span> for more &nbsp;·&nbsp; <span class="out-cmd-inline">help</span> to explore</div>
</div>`);

cmd('about', () => `<div class="out-section">
<div class="out-label">// about</div>
<p class="out-p">I'm a backend engineer who enjoys working on systems that need to be fast, reliable, and scalable. Over the past five years, I've built messaging platforms, webhook pipelines, Kubernetes-native platforms, and AI agents — mostly using Go, Python, and a mix of AWS and GCP services.</p>
<p class="out-p">Lately that's meant building on-prem Kubernetes deployments for hospital-scale workloads, instrumenting distributed tracing across a dozen services, and shipping AI agents that help platform teams resolve incidents faster. I care about writing clean, maintainable code and making the right trade-offs between speed and complexity.</p>
<p class="out-p">Outside of work, you'll find me backpacking, reading, or on a badminton court.</p>
<div class="out-table">
  <div class="out-row"><span class="out-key">location</span><span class="out-val">${DATA.location}</span></div>
  <div class="out-row"><span class="out-key">email</span><span class="out-val"><a href="mailto:${DATA.email}" class="out-link">${DATA.email}</a></span></div>
  <div class="out-row"><span class="out-key">education</span><span class="out-val">${DATA.education}</span></div>
</div>
</div>`);

cmd('experience', () => {
  const roles = DATA.experience.map(e => `
<div class="out-exp-role">
  <div class="out-exp-header">
    <span class="out-company">${e.company}</span>
    <span class="out-dates">${e.period}</span>
  </div>
  <div class="out-title">${e.title}</div>
  <ul class="out-bullets">
    ${e.bullets.map(b => `<li>${b}</li>`).join('')}
  </ul>
</div>`).join('');
  return `<div class="out-section">
<div class="out-label">// cat /var/log/career.log</div>
${roles}
</div>`;
});

cmd('projects', () => {
  const items = DATA.projects.map(p => `
<div class="out-project">
  <div class="out-project-top">
    <span class="out-cmd-green">$ ${p.cmd}</span>
    ${p.badge ? `<span class="out-badge">${p.badge}</span>` : ''}
    <a href="${p.url}" target="_blank" rel="noopener" class="out-link out-link-arrow">↗ github</a>
  </div>
  <div class="out-project-desc">${p.desc}</div>
  <div class="out-project-tags">${p.tags.join(' &nbsp; ')}</div>
</div>`).join('');
  return `<div class="out-section">
<div class="out-label">// ls ./projects</div>
${items}
</div>`;
});

cmd('skills', () => {
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

cmd('contact', () => `<div class="out-section">
<div class="out-label">// ./contact</div>
<div class="out-table">
  <div class="out-row"><span class="out-key">email</span><span class="out-val"><a href="mailto:${DATA.email}" class="out-link">${DATA.email}</a></span></div>
  <div class="out-row"><span class="out-key">github</span><span class="out-val"><a href="${DATA.github}" target="_blank" rel="noopener" class="out-link">→ init-kaushal</a></span></div>
  <div class="out-row"><span class="out-key">linkedin</span><span class="out-val"><a href="${DATA.linkedin}" target="_blank" rel="noopener" class="out-link">→ kaushal-kishor-sharma</a></span></div>
  <div class="out-row"><span class="out-key">leetcode</span><span class="out-val"><a href="${DATA.leetcode}" target="_blank" rel="noopener" class="out-link">→ sharmakaushal</a></span></div>
  <div class="out-row"><span class="out-key">x</span><span class="out-val"><a href="${DATA.twitter}" target="_blank" rel="noopener" class="out-link">→ kaushaltwt</a></span></div>
</div>
<div class="out-status-line"><span class="status-dot">●</span> Available for interesting opportunities</div>
</div>`);

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

cmd('neofetch', () => `<div class="out-section out-neofetch">
<pre class="out-ascii">  ██╗  ██╗███████╗
  ██║ ██╔╝██╔════╝
  █████╔╝ ███████╗
  ██╔═██╗ ╚════██║
  ██║  ██╗███████║
  ╚═╝  ╚═╝╚══════╝</pre>
<div class="out-neofetch-info">
  <div class="out-nf-name">${DATA.handle}@portfolio</div>
  <div class="out-nf-sep">──────────────────────</div>
  <div class="out-row"><span class="out-key">OS</span><span class="out-val">KaushalOS 2.6.1</span></div>
  <div class="out-row"><span class="out-key">Role</span><span class="out-val">Backend Engineer</span></div>
  <div class="out-row"><span class="out-key">Location</span><span class="out-val">${DATA.location}</span></div>
  <div class="out-row"><span class="out-key">Runtime</span><span class="out-val">Go · Python</span></div>
  <div class="out-row"><span class="out-key">Cloud</span><span class="out-val">AWS · GCP</span></div>
  <div class="out-row"><span class="out-key">K8s</span><span class="out-val">Kubernetes · Helm · ArgoCD</span></div>
  <div class="out-row"><span class="out-key">Database</span><span class="out-val">PostgreSQL · Redis</span></div>
  <div class="out-row"><span class="out-key">AI</span><span class="out-val">Agents · MCP · LLMs</span></div>
  <div class="out-row"><span class="out-key">Experience</span><span class="out-val">5+ years</span></div>
  <div class="out-nf-sep">──────────────────────</div>
  <div class="out-row"><span class="out-key">Status</span><span class="out-val"><span class="status-dot">●</span> Open to opportunities</span></div>
</div>
</div>`);

cmd('status', () => `<div class="out-section">
<div class="out-label">// status</div>
<div class="out-status-line"><span class="status-dot">●</span> Available for interesting opportunities</div>
<div class="out-table">
  <div class="out-row"><span class="out-key">location</span><span class="out-val">${DATA.location}</span></div>
  <div class="out-row"><span class="out-key">currently</span><span class="out-val">@RapidAI — Senior Software Engineer, Platform</span></div>
  <div class="out-row"><span class="out-key">open to</span><span class="out-val">Distributed systems · infra · platform · AI engineering</span></div>
</div>
</div>`);

cmd('ls', () => `<div class="out-section">
<div class="out-ls">
  <span class="ls-dir">drwxr-xr-x</span>&nbsp; about/
  <span class="ls-dir">drwxr-xr-x</span>&nbsp; experience/
  <span class="ls-dir">drwxr-xr-x</span>&nbsp; projects/
  <span class="ls-dir">drwxr-xr-x</span>&nbsp; skills/
  <span class="ls-dir">drwxr-xr-x</span>&nbsp; contact/
  <span class="ls-file">-rw-r--r--</span>&nbsp; resume.pdf
  <span class="ls-exec">-rwxr-xr-x</span>&nbsp; neofetch*
</div>
</div>`);

cmd('pwd', () => `<div class="out-section"><div class="out-p">/home/kaushal/portfolio</div></div>`);

cmd('date', () => {
  const now = new Date();
  return `<div class="out-section"><div class="out-p">${now.toDateString()} ${now.toLocaleTimeString('en-IN', { timeZoneName: 'short' })}</div></div>`;
});

cmd('history', () => {
  const h = Terminal.history;
  if (!h.length) return `<div class="out-section"><div class="out-muted">No history yet.</div></div>`;
  const lines = h.map((c, i) =>
    `<div class="out-row"><span class="out-key" style="min-width:2em">${i + 1}</span><span class="out-val">${escHtml(c)}</span></div>`
  ).join('');
  return `<div class="out-section"><div class="out-table">${lines}</div></div>`;
});

cmd('clear', () => { Terminal.clear(); return null; });

/* Easter eggs */
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
  ];
  const f = fortunes[Math.floor(Math.random() * fortunes.length)];
  return `<div class="out-section"><div class="out-p out-amber">${f}</div></div>`;
});

cmd(['rm -rf /', 'rm -rf /*'], () => `<div class="out-section">
<div class="out-p out-amber">rm: refusing to remove '/' recursively</div>
<div class="out-p out-muted">Nice try. The portfolio stays.</div>
</div>`);

/* ── Terminal object ────────────────────────────────────────────────── */
const Terminal = {
  history: [],
  histCursor: -1,
  inputEl: null,
  outputEl: null,
  bodyEl: null,
  pendingInput: '',

  init() {
    this.inputEl = document.getElementById('term-input');
    this.outputEl = document.getElementById('term-output');
    this.bodyEl = document.getElementById('term-body');

    if (!this.inputEl) return;

    this.inputEl.addEventListener('keydown', e => this.onKeyDown(e));

    /* Click anywhere in term-body to focus input */
    this.bodyEl.addEventListener('click', () => this.inputEl.focus());

    /* Keep input focused on desktop */
    document.addEventListener('keydown', e => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (document.activeElement !== this.inputEl && !this.isTextFocus()) {
        this.inputEl.focus();
      }
    });

    /* Mobile: tap terminal header to focus */
    const titlebar = document.querySelector('.term-titlebar');
    if (titlebar) titlebar.addEventListener('click', () => this.inputEl.focus());
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
      this.clear();
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
      this.print(`<div class="out-section"><div class="out-ls">${matches.join('&nbsp; &nbsp;')}</div></div>`);
    }
  },

  execute(raw) {
    if (!raw) return;
    this.history.push(raw);

    /* Print the command line */
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
    const el = document.createElement('div');
    el.className = 'out-prompt-line';
    el.innerHTML = `<span class="prompt-str">${DATA.handle}@portfolio:~$</span> <span class="prompt-cmd">${escHtml(cmd)}</span>`;
    this.outputEl.appendChild(el);
  },

  print(html) {
    const el = document.createElement('div');
    el.innerHTML = html;
    this.outputEl.appendChild(el);
  },

  clear() {
    this.outputEl.innerHTML = '';
  },

  scrollBottom() {
    this.bodyEl.scrollTop = this.bodyEl.scrollHeight;
  },

  /* Run the initial whoami after boot */
  runWelcome() {
    /* Small delay so it feels like the cursor just appeared */
    const simulateType = (str, cb) => {
      let i = 0;
      this.inputEl.value = '';
      const iv = setInterval(() => {
        if (i < str.length) {
          this.inputEl.value += str[i++];
        } else {
          clearInterval(iv);
          setTimeout(cb, 200);
        }
      }, 60);
    };

    setTimeout(() => {
      simulateType('whoami', () => {
        this.execute('whoami');
        this.inputEl.value = '';
      });
    }, 400);
  },
};

/* ── Boot sequence ──────────────────────────────────────────────────── */
const Boot = {
  el: null,
  linesEl: null,
  skipBtn: null,
  timers: [],
  done: false,

  init() {
    this.el = document.getElementById('boot-screen');
    this.linesEl = document.getElementById('boot-lines');
    this.skipBtn = document.getElementById('boot-skip');
    if (!this.el) { this.finish(); return; }

    /* Skip on any key or click */
    const skip = () => this.finish();
    this.skipBtn?.addEventListener('click', skip);
    document.addEventListener('keydown', skip, { once: true });

    const seen = sessionStorage.getItem('kaushal_boot_done');
    if (seen) { this.finish(); return; }

    BOOT_MESSAGES.forEach(m => {
      const t = setTimeout(() => this.addLine(m.text, m.cls), m.delay);
      this.timers.push(t);
    });

    const lastDelay = BOOT_MESSAGES[BOOT_MESSAGES.length - 1].delay + 600;
    const t = setTimeout(() => this.finish(), lastDelay);
    this.timers.push(t);
  },

  addLine(text, cls) {
    const el = document.createElement('div');
    el.className = `boot-line ${cls || ''}`;
    el.textContent = text;
    this.linesEl.appendChild(el);
    this.linesEl.scrollTop = this.linesEl.scrollHeight;
  },

  finish() {
    if (this.done) return;
    this.done = true;
    this.timers.forEach(clearTimeout);
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

/* ── Network canvas ─────────────────────────────────────────────────── */
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

    /* Pause when tab hidden */
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(this.raf);
      else this.loop(0);
    });

    /* Respect reduced motion */
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
    /* Move nodes */
    this.nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > this.canvas.width) n.vx *= -1;
      if (n.y < 0 || n.y > this.canvas.height) n.vy *= -1;
    });

    /* Occasionally spawn a packet */
    if (Math.random() < 0.04 && this.packets.length < 8) {
      const ai = Math.floor(Math.random() * this.nodes.length);
      let bi = Math.floor(Math.random() * this.nodes.length);
      if (bi === ai) bi = (ai + 1) % this.nodes.length;
      this.packets.push({ ai, bi, t: 0, speed: 0.008 + Math.random() * 0.012 });
    }

    /* Move packets */
    this.packets = this.packets.filter(p => {
      p.t += p.speed;
      return p.t < 1;
    });
  },

  draw() {
    const { ctx, canvas, nodes, packets } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const DIST = 220;

    /* Edges */
    ctx.lineWidth = 0.5;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < DIST) {
          const alpha = (1 - d / DIST) * 0.12;
          ctx.strokeStyle = `rgba(93,228,255,${alpha})`;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    /* Nodes */
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(93,228,255,0.25)';
      ctx.fill();
    });

    /* Packets */
    packets.forEach(p => {
      const a = nodes[p.ai], b = nodes[p.bi];
      const x = a.x + (b.x - a.x) * p.t;
      const y = a.y + (b.y - a.y) * p.t;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(124,255,107,0.6)';
      ctx.fill();
    });
  },
};

/* ── Metrics counter animation ──────────────────────────────────────── */
function initMetrics() {
  const nums = document.querySelectorAll('.metric-num[data-target]');
  if (!nums.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const raw = el.getAttribute('data-target');
      const suffix = el.getAttribute('data-suffix') || '';
      const prefix = el.getAttribute('data-prefix') || '';
      const target = parseFloat(raw);
      const duration = 1400;
      const start = performance.now();
      const isFloat = raw.includes('.');
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const val = target * eased;
        el.textContent = prefix + (isFloat ? val.toFixed(1) : Math.round(val)) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  nums.forEach(el => obs.observe(el));
}

/* ── Scroll reveals ─────────────────────────────────────────────────── */
function initReveals() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── Nav keyboard shortcuts ─────────────────────────────────────────── */
function initKeyNav() {
  const map = {
    '1': '#about', '2': '#experience', '3': '#projects',
    '4': '#skills', '5': '#contact',
  };
  document.addEventListener('keydown', e => {
    if (document.activeElement === Terminal.inputEl) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const target = map[e.key];
    if (target) {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/* ── Mobile command buttons ─────────────────────────────────────────── */
function initMobileCommands() {
  document.querySelectorAll('[data-cmd]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      Terminal.execute(cmd);
      document.getElementById('term-body')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ── Utilities ──────────────────────────────────────────────────────── */
function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ── Init ───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  Network.init();
  initMetrics();
  initReveals();
  initKeyNav();
  initMobileCommands();
  Boot.init();
});
