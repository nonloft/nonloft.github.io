'use strict';

/* -------------------------------------------------------------
   nonloft portfolio — Interactive Application Logic
   - Draggable & Switchable Card Deck
   - Floating & Docking Navbar
   - Real Liquid Water Wave & Gradient Theme Transition
   ------------------------------------------------------------- */

const GITHUB_USER = 'Kirillo4ka';
const DARK_BG = '#000000';
const LIGHT_BG = '#ffffff';

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
      'Высокая скорость работы и оптимизированное потребление ресурсов'
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

// DOM references
const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const deckTrack = document.getElementById('deckTrack');
const deckStage = document.getElementById('deckStage');
const deckPrev = document.getElementById('deckPrev');
const deckNext = document.getElementById('deckNext');
const deckCounter = document.getElementById('deckCounter');
const deckDots = document.getElementById('deckDots');
const tickerTrack = document.getElementById('tickerTrack');
const projectModal = document.getElementById('projectModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const navWrapper = document.getElementById('navWrapper');

let activeDeckIndex = 0;

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
  applyTheme(next);
});

/* -------------------------------------------------------------
   Floating & Docking Navbar
   - Docked to top at scroll position 0
   - Smoothly detaches as a floating pill on scroll
   - Reattaches seamlessly when returning to top
   ------------------------------------------------------------- */
function initFloatingNav() {
  if (!navWrapper) return;
  let isFloating = false;

  const handleScroll = () => {
    const shouldFloat = window.scrollY > 25;
    if (shouldFloat !== isFloating) {
      isFloating = shouldFloat;
      navWrapper.classList.toggle('is-floating', isFloating);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* -------------------------------------------------------------
   Interactive Draggable & Switchable Card Deck
   ------------------------------------------------------------- */
function renderDeck() {
  if (!deckTrack) return;

  // Render cards
  deckTrack.innerHTML = PROJECTS.map((p, idx) => {
    const statusClass = p.statusType === 'active' 
      ? 'project-card__status--active' 
      : 'project-card__status--wip';

    return `
      <article class="deck-card project-card ${idx === activeDeckIndex ? 'is-active' : ''}" data-index="${idx}" data-id="${p.id}" role="button" tabindex="0">
        <div>
          <div class="project-card__badge-row">
            <span class="project-card__type-badge">${escapeHtml(p.badge)}</span>
            <span class="project-card__status ${statusClass}">${escapeHtml(p.status)}</span>
          </div>
          <h3 class="project-card__title">${escapeHtml(p.title)}</h3>
          <p class="project-card__desc">${escapeHtml(p.shortDesc)}</p>
        </div>

        <div class="project-card__tags">
          ${p.tags.slice(0, 4).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      </article>
    `;
  }).join('');

  // Render pagination dots
  if (deckDots) {
    deckDots.innerHTML = PROJECTS.map((_, idx) => `
      <button class="deck-dot ${idx === activeDeckIndex ? 'is-active' : ''}" data-index="${idx}" type="button" aria-label="Перейти к проекту ${idx + 1}"></button>
    `).join('');

    deckDots.querySelectorAll('.deck-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        goToCard(parseInt(dot.dataset.index, 10));
      });
    });
  }

  attachCardGlow();
  initDeckInteractions();
  goToCard(activeDeckIndex, false);
}

function goToCard(index, animate = true) {
  if (index < 0) index = PROJECTS.length - 1;
  if (index >= PROJECTS.length) index = 0;
  activeDeckIndex = index;

  const cards = deckTrack.querySelectorAll('.deck-card');
  const dots = deckDots ? deckDots.querySelectorAll('.deck-dot') : [];

  cards.forEach((card, idx) => {
    card.classList.toggle('is-active', idx === activeDeckIndex);
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle('is-active', idx === activeDeckIndex);
  });

  if (deckCounter) {
    const currentNum = String(activeDeckIndex + 1).padStart(2, '0');
    const totalNum = String(PROJECTS.length).padStart(2, '0');
    deckCounter.textContent = `${currentNum} / ${totalNum}`;
  }

  // Calculate track position to center active card
  if (cards.length > 0) {
    const card = cards[activeDeckIndex];
    const stageWidth = deckStage.offsetWidth;
    const cardWidth = card.offsetWidth;
    const cardLeft = card.offsetLeft;
    const targetOffset = (stageWidth / 2) - (cardWidth / 2) - cardLeft;

    if (!animate) {
      deckTrack.style.transition = 'none';
      deckTrack.style.transform = `translateX(${targetOffset}px)`;
      void deckTrack.offsetWidth;
      deckTrack.style.transition = '';
    } else {
      deckTrack.style.transform = `translateX(${targetOffset}px)`;
    }
  }
}

function initDeckInteractions() {
  if (!deckStage || !deckTrack) return;

  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let dragDiff = 0;

  function getCurrentTranslate() {
    const style = window.getComputedStyle(deckTrack);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
  }

  // Pointer Down (Mouse or Touch)
  deckStage.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return; // only left click
    isDragging = true;
    startX = e.clientX;
    dragDiff = 0;
    currentTranslate = getCurrentTranslate();
    deckStage.classList.add('is-dragging');
    deckStage.setPointerCapture(e.pointerId);
  });

  // Pointer Move
  deckStage.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    dragDiff = e.clientX - startX;
    deckTrack.style.transform = `translateX(${currentTranslate + dragDiff}px)`;
  });

  // Pointer Up / Cancel
  const handlePointerEnd = (e) => {
    if (!isDragging) return;
    isDragging = false;
    deckStage.classList.remove('is-dragging');
    try { deckStage.releasePointerCapture(e.pointerId); } catch (_) {}

    // Check drag threshold
    if (Math.abs(dragDiff) > 50) {
      if (dragDiff < 0) {
        goToCard(activeDeckIndex + 1);
      } else {
        goToCard(activeDeckIndex - 1);
      }
    } else {
      // Small drag or click: snap back to current
      goToCard(activeDeckIndex);
    }
  };

  deckStage.addEventListener('pointerup', handlePointerEnd);
  deckStage.addEventListener('pointercancel', handlePointerEnd);

  // Card click handler (open preview or switch)
  deckTrack.querySelectorAll('.deck-card').forEach((card) => {
    card.addEventListener('click', () => {
      if (Math.abs(dragDiff) > 10) return; // ignore if was dragging
      const idx = parseInt(card.dataset.index, 10);
      if (idx === activeDeckIndex) {
        // Direct click opens preview modal with smooth zoom inflation!
        openModal(PROJECTS[idx]);
      } else {
        // Click on side card slides it into active view!
        goToCard(idx);
      }
    });
  });

  // Prev / Next button listeners
  if (deckPrev) {
    deckPrev.onclick = () => goToCard(activeDeckIndex - 1);
  }
  if (deckNext) {
    deckNext.onclick = () => goToCard(activeDeckIndex + 1);
  }

  // Keyboard navigation
  deckStage.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      goToCard(activeDeckIndex - 1);
    } else if (e.key === 'ArrowRight') {
      goToCard(activeDeckIndex + 1);
    }
  });

  // Window resize re-centering
  window.addEventListener('resize', () => {
    goToCard(activeDeckIndex, false);
  }, { passive: true });
}

/* -------------------------------------------------------------
   Interactive Project Preview Modal
   ------------------------------------------------------------- */
function openModal(p) {
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
    linkBtn.onclick = null;
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
   Mouse Cursor Card Glow
   ------------------------------------------------------------- */
function attachCardGlow() {
  document.querySelectorAll('.deck-card, .stack-card').forEach(card => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
    });
  });
}

/* -------------------------------------------------------------
   Tech Ticker Track
   ------------------------------------------------------------- */
function initTicker() {
  if (!tickerTrack) return;
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
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

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

initFloatingNav();
initTicker();
renderDeck();
initScrollReveal();
fetchGitHubStats();

// Ensure background video plays reliably across all browsers including Firefox
const bgVideo = document.getElementById('bgVideo') || document.querySelector('.video-bg');
if (bgVideo) {
  bgVideo.muted = true;
  bgVideo.defaultMuted = true;
  bgVideo.volume = 0;
  
  const startPlayback = () => {
    if (bgVideo.paused) {
      bgVideo.muted = true;
      bgVideo.play().catch(() => {});
    }
  };

  const playPromise = bgVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      bgVideo.muted = true;
      ['pointerdown', 'pointermove', 'scroll', 'touchstart', 'click', 'keydown'].forEach(evt => {
        window.addEventListener(evt, startPlayback, { once: true, passive: true });
      });
    });
  }
}
