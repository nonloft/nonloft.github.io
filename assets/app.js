'use strict';

/* -------------------------------------------------------------
   nonloft portfolio — Interactive Application Logic
   - Draggable & Switchable Card Deck
   - Floating & Docking Navbar
   - Real Liquid Water Wave & Gradient Theme Transition
   ------------------------------------------------------------- */

const GITHUB_USER = 'nonloft';
const DARK_BG = '#000000';
const LIGHT_BG = '#ffffff';

// Catalog of curated projects with technical depth
const PROJECTS = [
  {
    id: 'deepseek-harness-desktop',
    title: 'DeepSeek Harness Desktop',
    category: 'desktop',
    status: 'Релиз',
    version: 'v1.0',
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
    url: 'https://github.com/nonloft/DeepSeek-Harness-Desktop',
    isPublic: true
  },
  {
    id: 'eavevpn-app',
    title: 'EaveVPN-App',
    category: 'vpn',
    status: 'Активен',
    version: 'v1.2',
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
    url: 'https://github.com/nonloft/EaveVPN-App',
    isPublic: true
  },
  {
    id: 'island',
    title: 'island (Desktop Assistant)',
    category: 'desktop',
    status: 'В разработке',
    version: 'v0.9 (Pre-release)',
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
    url: 'https://github.com/nonloft',
    isPublic: false
  },
  {
    id: 'flclash-mod',
    title: 'FlClash-Mod',
    category: 'vpn',
    status: 'Модификация',
    version: 'v0.8.18-mod',
    statusType: 'active',
    badge: 'MOD',
    shortDesc: 'Кастомная сборка клиента FlClash для ядер mihomo (Clash Meta) с расширенным парсингом и TCP-пингом.',
    fullDesc: 'Модифицированный форк клиента FlClash на Flutter. Направлен на решение проблем с нестандартными форматами подписок, улучшенное детектирование задержек нод и стабильную работу под высокой нагрузкой.',
    highlights: [
      'Поддержка гибридного режима маршрутизации и расширенные правила гео-IP',
      'Оптимизированное переключение профилей без разрыва активных соединений',
      'Точные замеры задержки с фильтрацией ложных таймаутов',
      'Чистый темный UI без лишних визуальных элементов'
    ],
    tags: ['Flutter', 'Clash Meta', 'mihomo', 'Network', 'Dart'],
    url: 'https://github.com/nonloft',
    isPublic: false
  },
  {
    id: 'eavevpn-qt',
    title: 'eaveVPN (Qt Desktop)',
    category: 'desktop',
    status: 'Активен',
    version: 'v2.0',
    statusType: 'active',
    badge: 'GUI',
    shortDesc: 'Легковесный десктопный клиент на Python и PyQt с минимальным потреблением ОЗУ и нативным треем.',
    fullDesc: 'Компактное приложение для управления подключением и маршрутами. Написано на Python с использованием PyQt6. Занимает минимум оперативной памяти, мгновенно сворачивается в трей и восстанавливает соединение при сбоях сети.',
    highlights: [
      'Мгновенный холодный старт и потребление памяти менее 45 МБ',
      'Фоновая работа в системном трее с контекстным быстрым меню',
      'Автоматический Kill Switch при непредвиденном разрыве туннеля',
      'Поддержка импорта кастомных конфигураций одним кликом'
    ],
    tags: ['Python', 'PyQt6', 'Qt', 'Networking', 'Tray'],
    url: 'https://github.com/nonloft',
    isPublic: false
  },
  {
    id: 'eavevpn-automation',
    title: 'EaveVPN Infrastructure & Automation',
    category: 'vpn',
    status: 'В проде',
    version: 'v1.5',
    statusType: 'active',
    badge: 'OPS',
    shortDesc: 'Автоматизированный стек развертывания нод, мониторинга доступности и синхронизации конфигураций.',
    fullDesc: 'Комплекс серверных скриптов и CI/CD пайплайнов для управления распределенной сетью прокси-серверов. Автоматизирует выпуск сертификатов, ротацию ключей, сбор метрик задержки и генерацию пользовательских ссылок подписки.',
    highlights: [
      'Полностью автоматический деплой новых нод через Ansible и Bash-скрипты',
      'Периодический health-check доступности протоколов из разных регионов',
      'Генерация шифрованных ссылок подписки с динамической актуализацией',
      'Интеграция с Telegram-ботом для мгновенного оповещения о деградации нод'
    ],
    tags: ['Bash', 'Python', 'DevOps', 'CI/CD', 'Telegram API'],
    url: 'https://github.com/nonloft',
    isPublic: false
  },
  {
    id: 'plotter-grbl',
    title: 'PlotterGRBL',
    category: 'tools',
    status: 'Заморожен',
    version: 'v0.4-alpha',
    statusType: 'wip',
    badge: 'CNC',
    shortDesc: 'Утилита для управления 2-осевым плоттером по протоколу GRBL с предпросмотром траекторий.',
    fullDesc: 'Специализированная программа для отправки G-кода на контроллер станка. Поддерживает парсинг векторных файлов, расчет траектории перемещения пера и управление скоростью подачи в реальном времени.',
    highlights: [
      'Прямой обмен пакетами по COM-порту с контроллером Arduino GRBL',
      'Визуализатор рабочей зоны и отображение текущей позиции пера',
      'Удобная калибровка нулевой точки (Homing) и шагов двигателей',
      'Оптимизация холостых перемещений для ускорения отрисовки'
    ],
    tags: ['Python', 'GRBL', 'Hardware', 'Serial', 'Automation'],
    url: 'https://github.com/nonloft',
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
   Theme Management (Locked to Pure Jet Black Dark Mode)
   ------------------------------------------------------------- */
root.setAttribute('data-theme', 'dark');
try { localStorage.setItem('portfolio-theme', 'dark'); } catch (_) {}

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
      <article class="deck-card project-card ${idx === activeDeckIndex ? 'is-active' : ''}" data-index="${idx}" data-id="${p.id}" tabindex="0">
        <div class="project-card__body">
          <div class="project-card__badge-row">
            <span class="project-card__type-badge">${escapeHtml(p.badge)}</span>
            <span class="project-card__status ${statusClass}">${escapeHtml(p.status)}</span>
          </div>
          <h3 class="project-card__title">${escapeHtml(p.title)}</h3>
          <p class="project-card__desc">${escapeHtml(p.shortDesc)}</p>
          <div class="project-card__tags">
            ${p.tags.slice(0, 4).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>
        <div class="project-card__bar" data-action="preview" role="button" tabindex="0" aria-label="Открыть превью ${escapeHtml(p.title)}">
          <span class="project-card__bar-text">Смотреть превью</span>
          <svg class="project-card__bar-icon" viewBox="0 0 20 20" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/>
          </svg>
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

  let isPointerDown = false;
  let isDragging = false;
  let hasMoved = false;
  let startX = 0;
  let startY = 0;
  let startScrollY = 0;
  let currentTranslate = 0;
  let dragDiff = 0;
  let pointerDownTime = 0;
  let capturedPointerId = null;

  function getCurrentTranslate() {
    const style = window.getComputedStyle(deckTrack);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
  }

  // Pointer Down (Mouse or Touch)
  deckStage.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    isPointerDown = true;
    isDragging = false;
    hasMoved = false;
    startX = e.clientX;
    startY = e.clientY;
    startScrollY = window.scrollY;
    dragDiff = 0;
    pointerDownTime = Date.now();
    capturedPointerId = e.pointerId;
    currentTranslate = getCurrentTranslate();
  });

  // Pointer Move
  deckStage.addEventListener('pointermove', (e) => {
    if (!isPointerDown) return;
    const diffX = e.clientX - startX;
    const diffY = e.clientY - startY;
    const dist = Math.hypot(diffX, diffY);

    if (dist > 6) {
      hasMoved = true;
    }

    if (!isDragging) {
      if (Math.abs(diffX) > 8 && Math.abs(diffX) > Math.abs(diffY)) {
        isDragging = true;
        deckStage.classList.add('is-dragging');
        try {
          deckStage.setPointerCapture(capturedPointerId);
        } catch (_) {}
      } else {
        return;
      }
    }

    dragDiff = diffX;
    deckTrack.style.transform = `translateX(${currentTranslate + dragDiff}px)`;
  });

  // Pointer Up / Cancel
  const handlePointerEnd = (e) => {
    if (!isPointerDown) return;
    const wasDragging = isDragging;
    isPointerDown = false;
    isDragging = false;
    deckStage.classList.remove('is-dragging');

    if (capturedPointerId !== null) {
      try {
        deckStage.releasePointerCapture(capturedPointerId);
      } catch (_) {}
      capturedPointerId = null;
    }

    if (wasDragging) {
      if (Math.abs(dragDiff) > 40) {
        if (dragDiff < 0) {
          goToCard(activeDeckIndex + 1);
        } else {
          goToCard(activeDeckIndex - 1);
        }
      } else {
        goToCard(activeDeckIndex);
      }
    } else {
      // If user moved finger during scroll or drag, ignore!
      const totalDist = Math.hypot(e.clientX - startX, e.clientY - startY);
      const scrollDiff = Math.abs(window.scrollY - startScrollY);
      if (hasMoved || totalDist > 6 || scrollDiff > 2) {
        return;
      }

      // Check click target
      const card = e.target.closest('.deck-card') || document.elementFromPoint(e.clientX, e.clientY)?.closest('.deck-card');
      if (!card) return;

      const idx = parseInt(card.dataset.index, 10);
      if (idx !== activeDeckIndex) {
        // Clicking a side card safely switches to it
        goToCard(idx);
      } else {
        // On active card: open modal ONLY if deliberate action clicked (button or title)
        const isPreviewAction = e.target.closest('[data-action="preview"]');
        if (isPreviewAction) {
          openModal(PROJECTS[idx]);
        }
      }
    }
  };

  deckStage.addEventListener('pointerup', handlePointerEnd);
  deckStage.addEventListener('pointercancel', handlePointerEnd);

  // Card click & double click handlers
  deckTrack.querySelectorAll('.deck-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (hasMoved || isDragging || Math.abs(dragDiff) > 6) return;
      const idx = parseInt(card.dataset.index, 10);
      if (idx !== activeDeckIndex) {
        goToCard(idx);
        return;
      }
      const isPreviewAction = e.target.closest('[data-action="preview"]');
      if (isPreviewAction) {
        openModal(PROJECTS[idx]);
      }
    });

    // Double-click shortcut on active card also opens preview
    card.addEventListener('dblclick', (e) => {
      const idx = parseInt(card.dataset.index, 10);
      if (idx === activeDeckIndex) {
        openModal(PROJECTS[idx]);
      }
    });

    // Keyboard support: Enter / Space
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = parseInt(card.dataset.index, 10);
        if (idx === activeDeckIndex) {
          openModal(PROJECTS[idx]);
        } else {
          goToCard(idx);
        }
      }
    });
  });

  // Window resize
  window.addEventListener('resize', () => {
    goToCard(activeDeckIndex, false);
  }, { passive: true });
}

/* -------------------------------------------------------------
   Interactive Project Preview Modal
   ------------------------------------------------------------- */
function openModal(p) {
  const catEl = document.getElementById('modalCategory');
  if (catEl) {
    catEl.textContent = 
      p.category === 'desktop' ? 'Десктопное приложение' :
      p.category === 'vpn' ? 'VPN & Сетевой стек' : 'Утилиты & Инструменты';
  }
  const titleEl = document.getElementById('modalTitle');
  if (titleEl) titleEl.textContent = p.title;

  const versionEl = document.getElementById('modalVersion');
  if (versionEl) {
    versionEl.textContent = 'Версия: ' + (p.version || 'v1.0');
  }

  const statusEl = document.getElementById('modalStatus');
  if (statusEl) {
    statusEl.textContent = p.status;
    statusEl.className = 'modal__status ' + (p.statusType === 'active' ? 'project-card__status--active' : 'project-card__status--wip');
  }

  const descEl = document.getElementById('modalDesc');
  if (descEl) descEl.textContent = p.fullDesc;

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
    linkBtn.href = 'https://github.com/nonloft';
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
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Enforce dark mode
root.setAttribute('data-theme', 'dark');
try {
  localStorage.setItem('portfolio-theme', 'dark');
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


/* -------------------------------------------------------------
   Programming Languages Knowledge Data & Modal Logic
   ------------------------------------------------------------- */
const LANG_KNOWLEDGE = [
  {
    id: 'python',
    name: 'Python',
    badge: 'Основной стек / GUI & Win32',
    level: 'Глубокий практический опыт',
    desc: 'Ключевой язык для создания настольных утилит под Windows, фоновых служб, OSD-ассистентов и скриптов автоматизации.',
    highlights: [
      'Глубокая интеграция с Win32 API и ctypes: глобальный перехват хоткеев, прямое управление системным микшером звука, невидимые OSD-окна поверх всех приложений без потери фокуса активного окна.',
      'Разработка нативных десктопных интерфейсов на PyQt6 и PySide6 с чистым треем, контекстными меню и кастомными полупрозрачными виджетами.',
      'Асинхронная архитектура на asyncio для одновременной фоновой обработки сетевых сокетов, событий Discord RPC и Telegram API.',
      'Сборка автономных бинарных дистрибутивов через PyInstaller с оптимизацией веса, сокрытием консоли и чистым стартом.'
    ],
    tags: ['PyQt6', 'PySide6', 'Win32 API', 'ctypes', 'asyncio', 'PyInstaller', 'WebSockets', 'Requests']
  },
  {
    id: 'dart',
    name: 'Dart (Flutter)',
    badge: 'Основной стек / Cross-platform',
    level: 'Production-ready',
    desc: 'Основной инструмент для создания высокопроизводительных кроссплатформенных приложений и VPN-клиентов с плавной работой в 120 FPS.',
    highlights: [
      'Построение сложных отзывчивых интерфейсов на Flutter под Windows и Android с высокой кадровой частотой и адаптивной версткой.',
      'Интеграция сетевых прокси-ядер (mihomo / Clash Meta, VLESS, Shadowsocks): парсинг кастомных профилей, динамическая маршрутизация и замеры RTT-задержки.',
      'Чистая архитектура с разделением состояния, изоляцией логики в фоновые Isolate-потоки для предотвращения зависаний интерфейса.',
      'Взаимодействие с платформенным кодом через MethodChannel и нативными C-библиотеками через Dart FFI.'
    ],
    tags: ['Flutter', 'Dart FFI', 'MethodChannel', 'Clash Meta', 'State Management', 'Isolates', '120 FPS']
  },
  {
    id: 'cpp',
    name: 'C++',
    badge: 'Системный уровень',
    level: 'Уверенная практическая база',
    desc: 'Написание системных модулей, низкоуровневых библиотек и интеграция критичной к производительности логики.',
    highlights: [
      'Понимание управления памятью, указателей, ссылок и принципа RAII для безопасной работы без утечек ресурсов.',
      'Прямое взаимодействие с операционной системой через Win32 API: обработка оконных процедур (WndProc), системные хуки, создание динамических библиотек (DLL).',
      'Интеграция C++ компонентов в проекты на Qt, связка с Python через нативные C-биндинги.',
      'Оптимизация ресурсоемких алгоритмов и работа с сетевыми потоками ввода-вывода.'
    ],
    tags: ['Modern C++', 'Win32 API', 'Memory Management', 'DLL Interop', 'STL', 'Qt C++']
  },
  {
    id: 'csharp',
    name: 'C# (.NET)',
    badge: 'Windows Desktop',
    level: 'Практический опыт',
    desc: 'Разработка классического Windows-софта, служебных инструментов и графических оболочек.',
    highlights: [
      'Построение настольных интерфейсов на WPF и XAML с разделением разметки и логики.',
      'Использование асинхронного программирования (async/await, Task Parallel Library) для отзывчивости GUI.',
      'Интеграция с Win32 через механизм P/Invoke для вызова системных функций Windows.',
      'Работа со службами Windows, реестром и локальным хранилищем конфигураций.'
    ],
    tags: ['.NET', 'WPF', 'XAML', 'P/Invoke', 'Task Parallel Library', 'Windows Services']
  },
  {
    id: 'js',
    name: 'JavaScript / TypeScript',
    badge: 'Desktop & Tooling',
    level: 'Уверенный практический опыт',
    desc: 'Создание автономных десктопных оболочек на Electron, Node.js процессов и веб-интерфейсов.',
    highlights: [
      'Архитектура приложений на Electron: безопасный IPC-мост между Main и Renderer процессами, contextIsolation, управление жизненным циклом фоновых Node.js воркеров.',
      'Создание быстрых и компактных интерфейсов на чистом современном JS (ES6+) без лишней нагрузки и громоздких библиотек.',
      'Работа с асинхронными операциями, потоками Node.js (fs/streams), REST API и WebSocket.',
      'Интеграция и сборка проекта с нативными установщиками Windows.'
    ],
    tags: ['Electron', 'Node.js', 'TypeScript', 'IPC Bridge', 'Async/Await', 'DOM API']
  },
  {
    id: 'powershell',
    name: 'PowerShell & Bash',
    badge: 'Автоматизация & Скрипты',
    level: 'Регулярная практика',
    desc: 'Автоматизация системного администрирования, пайплайнов CI/CD и сборки готовых инсталляторов.',
    highlights: [
      'Написание скриптов автоматизации для подготовки окружения, конфигурации прав доступа и настройки сетевых адаптеров.',
      'Управление DNS, правилами маршрутизации и проксированием сетевого трафика в Windows и Linux.',
      'Интеграция со скриптами установщиков NSIS для сборки чистых установщиков в один клик.',
      'Автоматизация релизных сборок в GitHub Actions.'
    ],
    tags: ['PowerShell', 'Bash', 'NSIS Scripts', 'Windows Registry', 'GitHub Actions', 'Automation']
  }
];

const langModal = document.getElementById('langModal');
const langModalBackdrop = document.getElementById('langModalBackdrop');
const langModalClose = document.getElementById('langModalClose');
const langModalCloseBtn = document.getElementById('langModalCloseBtn');
const langTabs = document.getElementById('langTabs');
const langCardsList = document.getElementById('langCardsList');
const langStackCard = document.getElementById('langStackCard');

function renderLangCards(activeFilter = 'all') {
  if (!langCardsList) return;
  const filtered = activeFilter === 'all' 
    ? LANG_KNOWLEDGE 
    : LANG_KNOWLEDGE.filter(item => item.id === activeFilter);

  langCardsList.innerHTML = filtered.map(lang => `
    <div class="lang-detail-card" data-lang="${lang.id}">
      <div class="lang-detail-card__header">
        <h4 class="lang-detail-card__title">${escapeHtml(lang.name)}</h4>
        <span class="lang-detail-card__badge">${escapeHtml(lang.badge)}</span>
      </div>
      <p class="lang-detail-card__desc">${escapeHtml(lang.desc)}</p>
      <ul class="lang-detail-card__list">
        ${lang.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
      </ul>
      <div class="lang-detail-card__tags">
        ${lang.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
      </div>
    </div>
  `).join('');

  if (langTabs) {
    langTabs.querySelectorAll('.lang-tab').forEach(tab => {
      tab.classList.toggle('is-active', tab.dataset.filter === activeFilter);
    });
  }
}

function openLangModal(filter = 'all') {
  if (!langModal) return;
  renderLangCards(filter);
  langModal.classList.add('is-open');
  langModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLangModal() {
  if (!langModal) return;
  langModal.classList.remove('is-open');
  langModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (langModalClose) langModalClose.addEventListener('click', closeLangModal);
if (langModalCloseBtn) langModalCloseBtn.addEventListener('click', closeLangModal);
if (langModalBackdrop) langModalBackdrop.addEventListener('click', closeLangModal);

if (langStackCard) {
  langStackCard.addEventListener('click', (e) => {
    const tagBtn = e.target.closest('.tag--interactive');
    if (tagBtn) {
      e.stopPropagation();
      openLangModal(tagBtn.dataset.lang || 'all');
    } else {
      openLangModal('all');
    }
  });

  langStackCard.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLangModal('all');
    }
  });
}

if (langTabs) {
  langTabs.querySelectorAll('.lang-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      renderLangCards(btn.dataset.filter || 'all');
    });
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && langModal && langModal.classList.contains('is-open')) {
    closeLangModal();
  }
});
