(function () {
    'use strict';

    /* ── Theme Toggle ──────────────────────────────── */
    const toggle = document.getElementById('themeToggle');
    toggle.addEventListener('click', () => {
        const html = document.documentElement;
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('portfolio-theme', next);
    });

    /* ── Mobile Nav ────────────────────────────────── */
    const hamburger = document.getElementById('navHamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    /* ── Scroll Reveal ─────────────────────────────── */
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => revealObserver.observe(el));

    /* ── Back to Top ───────────────────────────────── */
    const backBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backBtn.classList.toggle('visible', window.scrollY > 400);
    });
    backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ── Nav Active Link ───────────────────────────── */
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 200;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);
            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    });

    /* ── Stat Counter Animation ────────────────────── */
    const statNums = document.querySelectorAll('.stat-num');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10);
                const duration = 1500;
                const start = performance.now();
                const animate = (now) => {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.round(target * eased);
                    if (progress < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    statNums.forEach(el => counterObserver.observe(el));

    /* ── Contact Form ──────────────────────────────── */
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            status.textContent = 'Sending...';
            status.className = 'form-status';
            try {
                const res = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });
                if (res.ok) {
                    status.textContent = '✓ Message sent. Thank you!';
                    status.classList.add('success');
                    form.reset();
                } else {
                    throw new Error();
                }
            } catch {
                status.textContent = '✗ Something went wrong. Try again.';
                status.classList.add('error');
            }
        });
    }

    /* ── Nav shrink on scroll ──────────────────────── */
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

})();