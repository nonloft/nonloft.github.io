'use strict';

/* -------------------------------------------------------------
   nonloft portfolio — Interactive Application Logic
   Clean Developer Aesthetic (Zero Emojis)
   ------------------------------------------------------------- */

const GITHUB_USER = 'Kirillo4ka';
const DARK_BG = '#090d14';
const LIGHT_BG = '#f8fafc';

// Catalog of curated projects with technical depth
const PROJECTS = [
  {
    id: 'deepseek-harness-desktop',
    title: 'DeepSeek Harness Desktop',
    category: 'desktop',
    status: 'Релиз v1.0',
    statusType: 'active',
    badge: 'EXE',
    shortDesc: 'Автономная десктопная оболочка на Electron для ИИ-агента DeepSeek Harness с нативным NSIS-инсталлятором.',
    fullDesc: 'Полноценное настольное приложение для комфортной работы с автономным агентом DeepSeek Harness. Позволяет запускать агента в отдельном окне без возни с консолями и ручной настройки окружения. Включает готовый установщик Windows.',
    highlights: [
      'Полная изоляция рабочего окна и удобный GUI вместо командной строки',
      'Собственный NSIS-установщик с ярлыками и чистым деинсталлятором',
      'Автоматическое управление жизненным циклом фоновых Node.js процессов',
      'Минимальный оверхед и оптимизированное потребление ресурсов'
    ],
    tags: ['Electron', 'NSIS', 'JavaScript', 'Node.js', 'Desktop'],
    url: 'https://github.com/Kirillo4ka/DeepSeek-Harness-Desktop',
    isPublic: true
  },
  {
    id: 'eavevpn-app',
    title: 'EaveVPN-App',
    category: 'vpn',
    status: 'Активен',
    statusType: 'active',
    badge: 'VPN',
    shortDesc: 'Быстрый кроссплатформенный VPN-клиент на Flutter (Dart) с чистым интерфейсом и минимальной задержкой.',
    fullDesc: 'Современный клиент для безопасного подключения к зашифрованным прокси и VPN-серверам. Написан на Flutter для плавной работы интерфейса в 120 FPS. Поддерживает динамическое получение зашифрованных профилей и умную фильтрацию.',
    highlights: [
      'Плавный отзывчивый UI на Flutter под мобильные и десктопные платформы',
      'Автоматический выбор оптимальной ноды по реальной задержке (RTT / TCP ping)',
      'Интеграция с облачной инфраструктурой динамических конфигов',
      'Поддержка раздельного туннелирования (Split Tunneling)'
    ],
    tags: ['Flutter', 'Dart', 'VPN', 'Proxy', 'Cross-platform'],
    url: 'https://github.com/Kirillo4ka/EaveVPN-App',
    isPublic: true
  },
  {
    id: 'island',
    title: 'island (Desktop Assistant)',
    category: 'desktop',
    status: 'В разработке',
    statusType: 'wip',
    badge: 'HUD',
    shortDesc: 'Динамический плавающий HUD-остров под Windows: медиа-контроль, Win32 оверлей, Discord RPC и Telegram.',
    fullDesc: 'Интерактивный десктопный ассистент для Windows на Python. Реализует концепцию динамического островка (Dynamic Island): плавный всплывающий оверлей поверх окон, OSD-индикация громкости, хоткеи управления аудио, Discord Rich Presence и уведомления.',
    highlights: [
      'Плавная анимация всплывающего HUD-острова без потери фокуса активного окна',
      'Прямой перехват медиа-клавиш и управление системным звуком через Win32 API',
      'Глубокая интеграция с Discord RPC (текущий трек, статус) и Telegram-событиями',
      'Миниатюрные системные метрики (CPU / RAM) прямо на рабочем столе'
    ],
    tags: ['Python', 'Win32 API', 'Overlay', 'Discord RPC', 'Hotkeys'],
    url: 'https://github.com/Kirillo4ka',
    isPublic: false
  },
  {
    id: 'flclash-mod',
    title: 'FlClash-Mod',
    category: 'vpn',
    status: 'Модификация',
    statusType: 'active',
    badge: 'MOD',
    shortDesc: 'Кастомная сборка клиента FlClash для ядер mihomo (Clash Meta) с расширенным парсингом и TCP-пингом.',
    fullDesc: 'Модифицированный форк клиента FlClash на Flutter. Направлен на решение проблем с нестандартными форматами подписок, улучшенное детектирование задержек нод и стабильную работу под высокой нагрузкой.',
    highlights: [
      'Нативная поддержка прямого TCP ping тестирования для точного замера пинга',
      'Расширенный парсер сырых конфигураций (vless, vmess, trojan, ss, hy2)',
      'Тонкая настройка правил маршрутизации (Direct, Global, Rule)',
      'Оптимизированный менеджер системного прокси для Windows'
    ],
    tags: ['Dart', 'Flutter', 'mihomo', 'Clash Meta', 'Proxy'],
    url: 'https://github.com/Kirillo4ka/FlClash-Mod',
    isPublic: true
  },
  {
    id: 'eavevpn-qt',
    title: 'eaveVPN (Qt Desktop)',
    category: 'vpn',
    status: 'Активен',
    statusType: 'active',
    badge: 'GUI',
    shortDesc: 'Легковесный клиент для ядра mihomo / Clash Meta на Python и Qt6 (PySide6) с темами оформления.',
    fullDesc: 'Минималистичный десктопный GUI-клиент для управления сетевыми профилями mihomo. Разработан на PySide6 для максимальной производительности, минимального потребления памяти (~40MB RAM) и быстрого холодного старта.',
    highlights: [
      'Мгновенный холодный запуск и низкое потребление системных ресурсов',
      'Автоматическое обновление профилей по внешней HTTPS-ссылке',
      'Детальный лог подключений и реал-тайм графики сетевого трафика',
      'Встроенная поддержка тёмной и светлой тем оформления'
    ],
    tags: ['Python', 'Qt6', 'PySide6', 'mihomo', 'Clash'],
    url: 'https://github.com/Kirillo4ka',
    isPublic: false
  },
  {
    id: 'eavevpn-automation',
    title: 'EaveVPN Infrastructure & Automation',
    category: 'tools',
    status: 'В проде',
    statusType: 'active',
    badge: 'OPS',
    shortDesc: 'Автоматизированный пайплайн: сбор, проверка доступности, шифрование и раздача конфигураций.',
    fullDesc: 'Бэкенд-инфраструктура и набор скриптов автоматизации на Python и Node.js. Обеспечивает непрерывную валидацию серверов, удаление недоступных узлов, шифрование конфигураций и их автоматическую публикацию для приложений EaveVPN.',
    highlights: [
      'Автономные пайплайны на базе GitHub Actions без выделенного сервера',
      'Многопоточная проверка доступности серверов и замера задержек',
      'End-to-End шифрование конфигов перед отдачей клиенту',
      'Высокая отказоустойчивость и автоматический fallback'
    ],
    tags: ['Python', 'JavaScript', 'GitHub Actions', 'Automation', 'CI/CD'],
    url: 'https://github.com/Kirillo4ka/configs-EaveVPN-app',
    isPublic: true
  },
  {
    id: 'plotter-grbl',
    title: 'PlotterGRBL',
    category: 'tools',
    status: 'Заморожен',
    statusType: 'wip',
    badge: 'CNC',
    shortDesc: 'Управляющее ПО на Python для лазерных и перовых GRBL ЧПУ-плоттеров: векторизация и G-code.',
    fullDesc: 'Инструмент для генерации траекторий и отправки команд на GRBL-контроллеры плоттеров и граверов. Включает модуль векторизации контуров, оптимизацию холостых перемещений пера и визуализацию процесса.',
    highlights: [
      'Прямое взаимодействие с микроконтроллером через COM / Serial порт',
      'Трейсинг и сглаживание векторных контуров в компактный G-code',
      'Предпросмотр траектории движения инструмента в реальном времени'
    ],
    tags: ['Python', 'GRBL', 'Hardware', 'CNC', 'G-code'],
    url: 'https://github.com/Kirillo4ka',
    isPublic: false
  }
];

const STACK_ITEMS = [
  'Flutter', 'Dart', 'Python', 'Qt6', 'PySide6', 'Electron', 'Node.js',
  'C++', 'C#', 'WPF', 'Win32 API', 'PowerShell', 'mihomo', 'Clash Meta',
  'NSIS', 'GitHub Actions', 'Docker', 'VLESS', 'Shadowsocks', 'REST API'
];

// Clean SVGs by category (no emojis)
function getCategorySvg(category) {
  switch (category) {
    case 'desktop':
      return `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;
    case 'vpn':
      return `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
    case 'tools':
      return `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;
    default:
      return `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`;
  }
}

// DOM references
const root = document.documentElement;
const wave = document.getElementById('wave');
const themeBtn = document.getElementById('themeBtn');
const projectsGrid = document.getElementById('projectsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const tickerTrack = document.getElementById('tickerTrack');
const projectModal = document.getElementById('projectModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const progress = document.getElementById('progress');

let isWaveBusy = false;
let currentFilter = 'all';

/* -------------------------------------------------------------
   Dynamic Wave Transition Engine
   ------------------------------------------------------------- */
function triggerWave({ color, callback }) {
  if (isWaveBusy) {
    if (callback) callback();
    return;
  }
  isWaveBusy = true;

  const currentTheme = root.getAttribute('data-theme') || 'dark';
  const waveColor = color || (currentTheme === 'dark' ? '#0f172a' : '#e2e8f0');
  wave.style.setProperty('--wave-c', waveColor);

  // Smooth upward sweep
  wave.style.transition = 'transform 0.58s cubic-bezier(0.65, 0, 0.35, 1)';
  wave.style.transform = 'translate3d(0, 0, 0)';

  // Peak moment (everything is covered)
  window.setTimeout(() => {
    if (callback) {
      try { callback(); } catch (e) { console.error(e); }
    }

    // Continue sweeping off to the top
    wave.style.transform = 'translate3d(0, -106%, 0)';

    // Reset back to bottom silently
    window.setTimeout(() => {
      wave.style.transition = 'none';
      wave.style.transform = 'translate3d(0, 106%, 0)';
      void wave.offsetWidth; // force reflow
      wave.style.transition = '';
      isWaveBusy = false;
    }, 600);
  }, 580);
}

/* -------------------------------------------------------------
   Theme Management
   ------------------------------------------------------------- */
function applyTheme(next) {
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('portfolio-theme', next); } catch (_) {}
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', next === 'dark' ? DARK_BG : LIGHT_BG);
  }
}

themeBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  triggerWave({
    color: next === 'dark' ? DARK_BG : LIGHT_BG,
    callback: () => applyTheme(next)
  });
});

/* -------------------------------------------------------------
   Project Cards Rendering & Filtering
   ------------------------------------------------------------- */
function renderProjects(filter = 'all') {
  currentFilter = filter;
  const filtered = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  projectsGrid.innerHTML = filtered.map(p => {
    const statusClass = p.statusType === 'active' 
      ? 'project-card__status--active' 
      : 'project-card__status--wip';

    return `
      <article class="project-card reveal in" data-id="${p.id}">
        <div>
          <div class="project-card__top">
            <div class="project-card__icon-wrap">
              ${getCategorySvg(p.category)}
            </div>
            <div class="project-card__badge-row">
              <span class="project-card__type-badge">${escapeHtml(p.badge)}</span>
              <span class="project-card__status ${statusClass}">${escapeHtml(p.status)}</span>
            </div>
          </div>
          <h3 class="project-card__title">${escapeHtml(p.title)}</h3>
          <p class="project-card__desc">${escapeHtml(p.shortDesc)}</p>
        </div>

        <div>
          <div class="project-card__tags">
            ${p.tags.slice(0, 4).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
          </div>

          <div class="project-card__bottom">
            <span class="project-card__preview-btn">
              <span>Смотреть превью</span>
              <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true"><path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06z"/></svg>
            </span>
            <span class="project-card__link-icon" title="${p.isPublic ? 'Репозиторий на GitHub' : 'Локальный проект'}">
              ${p.isPublic ? 'GitHub ↗' : 'В разработке'}
            </span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Attach click listeners to cards
  projectsGrid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const id = card.dataset.id;
      const project = PROJECTS.find(p => p.id === id);
      if (project) {
        // Trigger the signature wave effect upon project preview click!
        triggerWave({
          color: root.getAttribute('data-theme') === 'dark' ? '#111827' : '#e2e8f0',
          callback: () => openModal(project)
        });
      }
    });
  });

  attachCardGlow();
}

function attachCardGlow() {
  document.querySelectorAll('.project-card, .stack-card').forEach(card => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
    });
  });
}

// Filter tabs listener
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    renderProjects(btn.dataset.filter);
  });
});

/* -------------------------------------------------------------
   Interactive Project Preview Modal
   ------------------------------------------------------------- */
function openModal(p) {
  document.getElementById('modalIcon').innerHTML = getCategorySvg(p.category);
  document.getElementById('modalCategory').textContent = 
    p.category === 'desktop' ? 'Десктопное приложение' :
    p.category === 'vpn' ? 'VPN & Сетевой стек' : 'Утилиты & Инструменты';
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalStatus').textContent = p.status;
  document.getElementById('modalDesc').textContent = p.fullDesc;

  const highlightsEl = document.getElementById('modalHighlights');
  highlightsEl.innerHTML = p.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('');

  const stackEl = document.getElementById('modalStack');
  stackEl.innerHTML = p.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('');

  const linkBtn = document.getElementById('modalLink');
  if (p.isPublic && p.url) {
    linkBtn.href = p.url;
    linkBtn.style.display = 'inline-flex';
    linkBtn.querySelector('span').textContent = 'Открыть на GitHub';
    linkBtn.onclick = (e) => {
      e.preventDefault();
      // Wave transition before opening external project link!
      triggerWave({
        color: '#0284c7',
        callback: () => {
          window.open(p.url, '_blank', 'noopener');
        }
      });
    };
  } else {
    linkBtn.href = 'https://github.com/Kirillo4ka';
    linkBtn.style.display = 'inline-flex';
    linkBtn.querySelector('span').textContent = 'GitHub профиль';
    linkBtn.onclick = null;
  }

  projectModal.classList.add('is-open');
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  projectModal.classList.remove('is-open');
  projectModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalCloseBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModal.classList.contains('is-open')) {
    closeModal();
  }
});

/* -------------------------------------------------------------
   Tech Ticker Track
   ------------------------------------------------------------- */
function initTicker() {
  const repeated = STACK_ITEMS.concat(STACK_ITEMS);
  tickerTrack.innerHTML = repeated
    .map(item => `<span class="ticker-pill">${escapeHtml(item)}</span>`)
    .join('');
}

/* -------------------------------------------------------------
   Scroll Reveal Observer
   ------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
}

/* -------------------------------------------------------------
   Scroll Progress
   ------------------------------------------------------------- */
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
  progress.style.width = pct + '%';
}, { passive: true });

/* -------------------------------------------------------------
   Live GitHub Stats
   ------------------------------------------------------------- */
async function fetchGitHubStats() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`);
    if (!res.ok) return;
    const repos = await res.json();
    if (Array.isArray(repos)) {
      const valid = repos.filter(r => !r.fork);
      const el = document.getElementById('statRepos');
      if (el) el.textContent = valid.length || '8';
    }
  } catch (_) {}
}

/* -------------------------------------------------------------
   Utilities
   ------------------------------------------------------------- */
function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* -------------------------------------------------------------
   Initialization
   ------------------------------------------------------------- */
document.getElementById('year').textContent = new Date().getFullYear();

// Check saved theme
try {
  const saved = localStorage.getItem('portfolio-theme');
  if (saved === 'light' || saved === 'dark') {
    applyTheme(saved);
  }
} catch (_) {}

initTicker();
renderProjects();
attachCardGlow();
initScrollReveal();
fetchGitHubStats();
