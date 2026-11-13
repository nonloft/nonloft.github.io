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
  Lua: '#000080',
  QML: '#41cd52',
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

const REPO_DESC = {
  'DeepSeek-Harness-Desktop': 'Десктопная оболочка (Electron) для агента DeepSeek Harness — агент в отдельном окне, со своим установщиком.',
  'EaveVPN-App': 'VPN-клиент на Flutter (Dart).',
  'FlClash-Mod': 'Модификация FlClash.',
};

const LOCAL_PROJECTS = [
  {
    name: 'island',
    status: 'в разработке',
    description: 'Динамический десктопный ассистент для Windows: управление аудио и медиа-клавишами, оверлей, Discord RPC, Telegram call/reply, горячие клавиши, OSD громкости и системные метрики.',
    languages: ['Python'],
    wip: true,
  },
  {
    name: 'eaveVPN (Qt)',
    status: 'активен',
    description: 'VPN-клиент для ядра mihomo/Clash Meta на Python + Qt6 (PySide6): профили по ссылке, проверка задержек узлов, журнал, тёмная/светлая темы.',
    languages: ['Python'],
  },
  {
    name: 'PlotterGRBL',
    status: 'заморожен',
    description: 'Контроллер GRBL-плоттера/лазера на Python: контуры, текст и трейсинг в G-code.',
    languages: ['Python'],
  },
];

const SKILLS = [
  { lang: 'Python', level: 4, note: 'PySide6 · aiogram · Flet · GRBL' },
  { lang: 'C++', level: 3, note: 'форк Telegram Desktop / AyuGram' },
  { lang: 'C#', level: 3, note: 'WPF' },
  { lang: 'Dart / Flutter', level: 3, note: 'EaveVPN-App, FlClash-Mod' },
  { lang: 'JavaScript / TypeScript', level: 3, note: 'Next.js · Electron' },
  { lang: 'PowerShell', level: 3, note: 'автоматизация, сборка NSIS' },
  { lang: 'Lua / Luau', level: 2, note: 'игровые скрипты' },
  { lang: 'HTML / CSS', level: 3, note: 'этот сайт' },
];

const STACK = [
  'Python', 'C++', 'C#', 'Dart', 'Flutter', 'TypeScript', 'JavaScript', 'Lua',
  'PowerShell', 'PySide6', 'Flet', 'WPF', 'Next.js', 'Electron', 'aiogram',
  'mihomo', 'GRBL', 'PyInstaller', 'NSIS', 'GitHub Actions', 'REST API', 'Docker',
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

function langColor(lang) {
  return LANG_COLORS[lang] || '#8b95a5';
}

/* ---------- reveal on scroll ---------- */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
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

/* ---------- GitHub repos ---------- */
const reposEl = document.getElementById('repos');

function cardTemplate(repo) {
  const color = langColor(repo.language);
  const featured = repo.featured ? ' card--featured' : '';
  const desc = REPO_DESC[repo.name] || repo.description || 'Описание отсутствует.';
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

function attachCardGlow(scope) {
  scope.querySelectorAll('.card').forEach((card) => {
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

function renderRepos(repos) {
  reposEl.innerHTML = repos.map(cardTemplate).join('');
  attachCardGlow(reposEl);
}

async function loadRepos() {
  reposEl.innerHTML = '<div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div>';
  try {
    const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    let repos = await res.json();
    repos = repos.filter((r) => !r.fork && r.name !== `${USER}.github.io`);
    if (repos.length === 0) repos = FALLBACK;
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

/* ---------- local projects ---------- */
function localCard(p) {
  const langs = (p.languages || [])
    .map((l) => `<span class="lang"><span class="lang__dot" style="background:${langColor(l)}"></span>${escapeHtml(l)}</span>`)
    .join('');
  const badge = p.wip ? ' card__badge--wip' : '';
  return `
    <article class="card">
      <div class="card__top">
        <h3 class="card__name">${escapeHtml(p.name)}</h3>
        <span class="card__badge${badge}">${escapeHtml(p.status)}</span>
      </div>
      <p class="card__desc">${escapeHtml(p.description)}</p>
      <div class="card__meta">${langs}</div>
    </article>`;
}

function renderLocal() {
  const el = document.getElementById('localProjects');
  el.innerHTML = LOCAL_PROJECTS.map(localCard).join('');
  attachCardGlow(el);
}

/* ---------- skills ---------- */
function renderSkills() {
  const el = document.getElementById('skillBars');
  el.innerHTML = SKILLS.map((s) => `
    <div class="skill">
      <div class="skill__head">
        <span class="skill__name">${escapeHtml(s.lang)}</span>
        <span class="skill__note">${escapeHtml(s.note)}</span>
        <span class="skill__lvl">${s.level}/5</span>
      </div>
      <div class="skill__bar"><span class="skill__fill" style="--w:${s.level * 20}%"></span></div>
    </div>`).join('');
}

/* ---------- stack marquee + chips ---------- */
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

try {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') applyTheme(saved);
} catch (_) { /* ignore */ }

renderLocal();
renderSkills();
loadRepos();
