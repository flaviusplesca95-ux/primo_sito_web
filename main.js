/* ─── RESET ─── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: 'Inter', sans-serif;
  background: #FFFFFF;
  color: #0A0A0A;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* ─── TOKENS ─── */
:root {
  --black:   #0A0A0A;
  --white:   #FFFFFF;
  --mid:     #555555;
  --soft:    #999999;
  --rule:    #E8E8E8;
  --rule-dk: rgba(255,255,255,0.1);
  --pad-x:   clamp(24px, 6vw, 96px);
}

/* ─── NAV ─── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  height: 60px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--pad-x);
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--rule);
}
.logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 20px;
  letter-spacing: -0.5px;
  color: var(--black);
  text-decoration: none;
}
.nav-links {
  display: flex; gap: 36px; list-style: none;
}
.nav-links a {
  font-size: 13px; font-weight: 500;
  color: var(--mid);
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--black); }
.nav-btn {
  font-size: 13px; font-weight: 500;
  padding: 9px 22px;
  border: 1px solid var(--black);
  border-radius: 2px;
  color: var(--black);
  background: transparent;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  letter-spacing: 0.02em;
}
.nav-btn:hover { background: var(--black); color: var(--white); }

/* hamburger */
.hamburger {
  display: none; flex-direction: column; justify-content: center;
  gap: 5px; cursor: pointer; border: none; background: none;
  width: 32px; height: 32px; padding: 4px;
}
.hamburger span {
  display: block; width: 100%; height: 1.5px;
  background: var(--black); border-radius: 1px;
  transition: all 0.3s;
}
.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* mobile drawer */
.drawer {
  display: none; position: fixed;
  top: 60px; left: 0; right: 0; bottom: 0;
  background: var(--white);
  z-index: 199;
  flex-direction: column;
  padding: 40px var(--pad-x);
  gap: 28px;
  border-top: 1px solid var(--rule);
}
.drawer.open { display: flex; }
.drawer a {
  font-family: 'Syne', sans-serif;
  font-size: 28px; font-weight: 700;
  color: var(--black); text-decoration: none;
  letter-spacing: -0.5px;
}
.drawer-cta {
  margin-top: auto;
  font-family: 'Inter', sans-serif !important;
  font-size: 14px !important; font-weight: 500 !important;
  padding: 14px 28px;
  border: 1px solid var(--black);
  border-radius: 2px;
  display: inline-block;
  text-align: center;
}

/* ─── HERO ─── */
#hero {
  min-height: 100vh;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 100px var(--pad-x) 64px;
  border-bottom: 1px solid var(--rule);
}
.hero-label {
  font-size: 11px; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--soft);
  margin-bottom: 32px;
}
h1 {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(42px, 8vw, 96px);
  line-height: 0.95;
  letter-spacing: -3px;
  color: var(--black);
  max-width: 900px;
  margin-bottom: 48px;
}
h1 .outline {
  -webkit-text-stroke: 2px var(--black);
  color: transparent;
}
.hero-footer {
  display: flex; align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap; gap: 32px;
}
.hero-sub {
  font-size: clamp(14px, 1.6vw, 17px);
  color: var(--mid);
  line-height: 1.7;
  max-width: 420px;
}
.hero-cta {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 14px; font-weight: 500;
  padding: 14px 32px;
  background: var(--black); color: var(--white);
  border: 1px solid var(--black);
  border-radius: 2px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s, color 0.2s;
}
.hero-cta:hover { background: var(--white); color: var(--black); }
.hero-cta svg { transition: transform 0.2s; }
.hero-cta:hover svg { transform: translateX(3px); }

/* ─── SECTION BASE ─── */
section { padding: 100px var(--pad-x); border-bottom: 1px solid var(--rule); }
.eyebrow {
  font-size: 10px; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--soft);
  margin-bottom: 48px;
}
h2 {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(28px, 4.5vw, 54px);
  letter-spacing: -2px;
  line-height: 1.0;
  color: var(--black);
}

/* ─── ABOUT ─── */
#about { background: var(--white); }
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-top: 64px;
  align-items: start;
}
.about-text p {
  font-size: 16px; line-height: 1.8;
  color: var(--mid); margin-bottom: 20px;
}
.about-text p:last-child { margin-bottom: 0; }
.about-pillars { display: flex; flex-direction: column; }
.pillar {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 20px;
  padding: 28px 0;
  border-top: 1px solid var(--rule);
  align-items: start;
}
.pillar:last-child { border-bottom: 1px solid var(--rule); }
.pillar-num {
  font-size: 11px; letter-spacing: 0.08em;
  color: var(--soft); padding-top: 3px;
}
.pillar h3 {
  font-family: 'Syne', sans-serif;
  font-size: 16px; font-weight: 700;
  color: var(--black); margin-bottom: 6px;
}
.pillar p { font-size: 13px; color: var(--mid); line-height: 1.65; }

/* ─── SERVICES ─── */
#services { background: var(--black); }
#services .eyebrow { color: #666; }
#services h2 { color: var(--white); margin-bottom: 64px; }
.services-list { display: flex; flex-direction: column; }
.service-row {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 40px;
  align-items: start;
  padding: 40px 0;
  border-top: 1px solid var(--rule-dk);
  transition: opacity 0.2s;
}
.services-list .service-row:last-child { border-bottom: 1px solid var(--rule-dk); }
.service-row:hover { opacity: 0.75; }
.service-row h3 {
  font-family: 'Syne', sans-serif;
  font-size: 20px; font-weight: 700;
  color: var(--white); letter-spacing: -0.5px;
}
.service-row p {
  font-size: 14px; color: #888;
  line-height: 1.75;
}
.service-tags {
  display: flex; flex-wrap: wrap; gap: 8px;
  justify-content: flex-end;
}
.s-tag {
  font-size: 11px; letter-spacing: 0.06em;
  padding: 5px 12px;
  border: 1px solid #2A2A2A;
  border-radius: 1px;
  color: #666;
}

/* ─── CONTACT ─── */
#contatti { background: var(--white); }
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-top: 64px;
  align-items: start;
}
.contact-intro p {
  font-size: 16px; color: var(--mid);
  line-height: 1.8; margin-bottom: 48px;
}
.contact-detail {
  display: flex; flex-direction: column; gap: 20px;
}
.c-item {
  display: flex; flex-direction: column; gap: 3px;
}
.c-label {
  font-size: 10px; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--soft);
}
.c-value { font-size: 15px; color: var(--black); font-weight: 500; }

/* form */
.contact-form { display: flex; flex-direction: column; gap: 20px; }
.f-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.f-group { display: flex; flex-direction: column; gap: 8px; }
.f-group label {
  font-size: 11px; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--soft);
}
.f-group input,
.f-group textarea {
  padding: 14px 0;
  border: none;
  border-bottom: 1px solid var(--rule);
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: var(--black);
  background: transparent;
  outline: none;
  border-radius: 0;
  transition: border-color 0.2s;
  resize: none;
}
.f-group input:focus,
.f-group textarea:focus { border-bottom-color: var(--black); }
.f-group textarea { min-height: 120px; }
.f-submit {
  align-self: flex-start;
  margin-top: 8px;
  display: inline-flex; align-items: center; gap: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 14px; font-weight: 500;
  padding: 14px 32px;
  background: var(--black); color: var(--white);
  border: 1px solid var(--black);
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.f-submit:hover { background: var(--white); color: var(--black); }
.f-note { font-size: 12px; color: var(--soft); }
.f-note.success { color: #1a7a4a; }

/* ─── FOOTER ─── */
footer {
  padding: 28px var(--pad-x);
  display: flex; align-items: center;
  justify-content: space-between; flex-wrap: wrap; gap: 12px;
}
.footer-logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800; font-size: 18px; color: var(--black);
}
footer p { font-size: 12px; color: var(--soft); }

/* ─── ANIMATIONS ─── */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.in { opacity: 1; transform: translateY(0); }
.reveal-d1 { transition-delay: 0.1s; }
.reveal-d2 { transition-delay: 0.2s; }
.reveal-d3 { transition-delay: 0.3s; }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}

/* ─── RESPONSIVE ─── */
@media (max-width: 860px) {
  .nav-links, .nav-btn { display: none; }
  .hamburger { display: flex; }
  .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 48px; }
  .service-row { grid-template-columns: 1fr; gap: 16px; }
  .service-tags { justify-content: flex-start; }
  .f-row { grid-template-columns: 1fr; }
  h1 { letter-spacing: -2px; }
}
