'use strict';

/* ── Mobile drawer ── */
function toggleDrawer() {
  const d = document.getElementById('drawer');
  const h = document.getElementById('hamburger');
  const open = d.classList.toggle('open');
  h.classList.toggle('open', open);
  h.setAttribute('aria-label', open ? 'Chiudi menu' : 'Apri menu');
  document.body.style.overflow = open ? 'hidden' : '';
}

function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => io.observe(el));

/* ── Nav active link ── */
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navAs.forEach(a => {
    const active = a.getAttribute('href') === '#' + current;
    a.style.color = active ? 'var(--black)' : '';
    a.style.fontWeight = active ? '500' : '';
  });
}, { passive: true });

/* ── Form submit ── */
function handleSubmit(e) {
  e.preventDefault();
  const btn  = document.getElementById('submitBtn');
  const note = document.getElementById('formNote');
  btn.disabled = true;
  btn.innerHTML = 'Invio in corso…';
  setTimeout(() => {
    btn.innerHTML = 'Inviato ✓';
    note.textContent = 'Messaggio ricevuto. Ti risponderemo entro 24 ore.';
    note.className = 'f-note success';
    document.getElementById('contactForm').reset();
    setTimeout(() => {
      btn.innerHTML = `Invia messaggio
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor"
          stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 7h10M8 3l4 4-4 4"/>
        </svg>`;
      btn.disabled = false;
      note.textContent = '';
      note.className = 'f-note';
    }, 4000);
  }, 1100);
}
