'use strict';

const USER = 'Kirillo4ka';
const DARK_BG = '#0a0d14';
const LIGHT_BG = '#f6f8fc';

const LANG_COLORS = {
  Dart: '#00B4AB',
  NSIS: '#3D5A80',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  'C++': '#f34b7d',
  'C#': '#178600',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Java: '#b07219',
  Rust: '#dea584',
  Go: '#00ADD8',
  PowerShell: '#5391FE',
  Electron: '#47848F',
};

const FALLBACK = [
  {
    name: 'DeepSeek-Harness-Desktop',
    full_name: 'Kirillo4ka/DeepSeek-Harness-Desktop',
    description: 'Десктопная оболочка (Electron) для агента DeepSeek Harness — двойной клик и агент в отдельном окне.',
    language: 'NSIS',
    stargazers_count: 0,
    forks_count: 0,
    html_url: 'https://github.com/Kirillo4ka/DeepSeek-Harness-Desktop',
    updated_at: '2026-11-13T15:43:17Z',
    featured: true,
  },
  {
    name: 'EaveVPN-App',
    full_name: 'Kirillo4ka/EaveVPN-App',
    description: 'VPN-клиент на Flutter.',
    language: 'Dart',
    stargazers_count: 1,
    forks_count: 0,
    html_url: 'https://github.com/Kirillo4ka/EaveVPN-App',
    updated_at: '2026-08-31T20:30:22Z',
  },
  {
    name: 'FlClash-Mod',
    full_name: 'Kirillo4ka/FlClash-Mod',
    description: 'Модификация FlClash.',
    language: 'Dart',
    stargazers_count: 0,
    forks_count: 0,
    html_url: 'https://github.com/Kirillo4ka/FlClash-Mod',
    updated_at: '2026-08-26T18:18:01Z',
  },
];

const root = document.documentElement;
const wave = document.getElementById('wave');
const themeBtn = document.getElementById('themeBtn');

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' });
}

/* ---------- reveal on scroll ---------- */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        entry.target.style.transitionDelay = delay + 'ms';
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
revealEls.forEach((el) => io.observe(el));

/* ---------- theme with wave transition ---------- */
let themeBusy = false;

function applyTheme(next) {
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (_) { /* ignore */ }
  document.querySelector('meta[name="theme-color"]').setAttribute('content', next === 'dark' ? DARK_BG : LIGHT_BG);
}

function waveTheme(next) {
  if (themeBusy) return;
  themeBusy = true;
  wave.style.setProperty('--wave-c', next === 'dark' ? DARK_BG : LIGHT_BG);

  wave.style.transition = 'transform 0.62s cubic-bezier(0.7, 0, 0.25, 1)';
  wave.style.transform = 'translate3d(0, 0, 0)';

  window.setTimeout(() => {
    applyTheme(next);
    wave.style.transform = 'translate3d(0, -106%, 0)';
    window.setTimeout(() => {
      wave.style.transition = 'none';
      wave.style.transform = 'translate3d(0, 106%, 0)';
      // force reflow so the reset position is applied without animating
      void wave.offsetWidth;
      wave.style.transition = '';
      themeBusy = false;
    }, 640);
  }, 640);
}

themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  waveTheme(next);
});

/* ---------- repos ---------- */
const reposEl = document.getElementById('repos');

function langColor(lang) {
  return LANG_COLORS[lang] || '#8b95a5';
}

function cardTemplate(repo) {
  const color = langColor(repo.language);
  const featured = repo.featured ? ' card--featured' : '';
  const desc = repo.description || 'Описание отсутствует.';
  const lang = repo.language
    ? `<span class="lang"><span class="lang__dot" style="background:${color}"></span>${escapeHtml(repo.language)}</span>`
    : '';
  const updated = repo.updated_at ? `<span>обновлено ${escapeHtml(formatDate(repo.updated_at))}</span>` : '';
  return `
    <article class="card${featured}" data-url="${escapeHtml(repo.html_url)}">
      <div class="card__top">
        <h3 class="card__name"><a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener">${escapeHtml(repo.name)}</a></h3>
        ${featured ? '<span class="card__badge">featured</span>' : ''}
      </div>
      <p class="card__desc">${escapeHtml(desc)}</p>
      <div class="card__meta">
        ${lang}
        <span class="card__star">★ ${repo.stargazers_count ?? 0}</span>
        ${updated}
      </div>
      <span class="card__arrow">→</span>
    </article>`;
}

function renderRepos(repos) {
  reposEl.innerHTML = repos.map(cardTemplate).join('');
  attachCardGlow();
}

function attachCardGlow() {
  reposEl.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
    });
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      const url = card.dataset.url;
      if (url) window.open(url, '_blank', 'noopener');
    });
  });
}

async function loadRepos() {
  reposEl.innerHTML = '<div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div>';
  try {
    const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    let repos = await res.json();
    repos = repos.filter((r) => !r.fork && r.name !== `${USER}.github.io`);
    if (repos.length === 0) repos = FALLBACK;
    // featured first, then by pushed date
    repos.sort((a, b) => (Number(Boolean(b.featured)) - Number(Boolean(a.featured))) || new Date(b.updated_at) - new Date(a.updated_at));
    updateStats(repos);
    renderRepos(repos);
  } catch (_) {
    updateStats(FALLBACK);
    renderRepos(FALLBACK);
  }
}

function updateStats(repos) {
  const stars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
  const langs = new Set(repos.map((r) => r.language).filter(Boolean));
  document.getElementById('statRepos').textContent = repos.length;
  document.getElementById('statStars').textContent = stars;
  document.getElementById('statLang').textContent = langs.size;
}

/* ---------- stack marquee + chips ---------- */
const STACK = ['Flutter', 'Dart', 'Electron', 'Node.js', 'JavaScript', 'NSIS', 'PowerShell', 'GitHub Actions', 'REST API', 'Docker'];

const marqueeTrack = document.getElementById('marqueeTrack');
marqueeTrack.innerHTML = STACK.concat(STACK).map((s) => `<span class="marquee__item">${s}</span>`).join('');

const chipsEl = document.getElementById('chips');
chipsEl.innerHTML = STACK.map((s) => `<li>${s}</li>`).join('');

/* ---------- misc ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
}, { passive: true });

/* restore saved theme on first paint (no wave) */
try {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') applyTheme(saved);
} catch (_) { /* ignore */ }

loadRepos();
