/* ============================================
   BINEESH B S — Embedded Engineer
   Site logic + dynamic effects
   ============================================ */

// =================================================================
// PROJECTS
// =================================================================
const PROJECTS = [
  {
    id: 'P-001',
    tag: 'iiot',
    tagLabel: 'Industrial IoT',
    title: 'Thermostat',
    company: 'RIOD Logic Pvt Ltd',
    image: 'images/waltech_3d_top.png',
    desc: 'Designed a 6-layer PCB integrating three microcontrollers (ESP32-S3, Nuvoton M03, STM32) along with a cellular modem. Implemented on-PCB antenna for BLE and Zigbee with impedance matching and RF layout to meet wireless performance targets.',
    specs: ['6-layer PCB', 'ESP32-S3', 'Nuvoton M03', 'STM32', 'Cellular', 'BLE Antenna', 'Zigbee Antenna']
  },
  {
    id: 'P-002',
    tag: 'iiot',
    tagLabel: 'Industrial IoT',
    title: 'RDPMS',
    company: 'RIOD Logic Pvt Ltd',
    image: 'images/rdpms_3d_top.png',
    desc: '4-layer PCB built around STM32 and ESP32, supporting Ethernet, RS485, and RS232 industrial communication. Integrated 15 ADC channels, 8 digital input channels, multi-sensor interfaces, plus 4G modem, LoRa, and Zigbee modules for distributed monitoring.',
    specs: ['4-layer PCB', 'STM32', 'ESP32', 'Ethernet', 'RS485', 'RS232', '15 ADC ch', '4G/LoRa/Zigbee']
  },
  {
    id: 'P-003',
    tag: 'automation',
    tagLabel: 'Automation',
    title: 'Smart Elevator Monitoring System',
    company: 'RIOD Logic Pvt Ltd',
    image: 'images/escon_3d_top.png',
    desc: '4-layer PCB with dual STM32 controllers and an EC200U modem, supporting RS485 and CAN communication. Designed the on-board power section with 1.8V, 3.3V, 4V, and 5V rails plus voltage divider networks for sensing and protection.',
    specs: ['4-layer PCB', 'Dual STM32', 'EC200U 4G', 'RS485', 'CAN', 'Multi-rail PSU']
  },
  {
    id: 'P-004',
    tag: 'automation',
    tagLabel: 'Automation',
    title: 'Smart Street Light Monitoring System',
    company: 'RIOD Logic Pvt Ltd',
    image: 'images/kell_3d.png',
    desc: 'Three-board hardware solution: a relay control board, a 2-layer main controller card based on the Quectel EC200U, and a dedicated SMPS module that converts 3-phase 230V AC into a reference voltage for over-voltage and supply-quality monitoring.',
    specs: ['2-layer PCB', 'Quectel EC200U', '3-phase 230V', 'SMPS', 'Relay Control']
  },
  {
    id: 'P-005',
    tag: 'power',
    tagLabel: 'Power · SMPS',
    title: 'SMPS Card',
    company: 'RIOD Logic Pvt Ltd',
    image: 'images/smps_3d.png',
    desc: 'Dedicated SMPS module that converts 3-phase 230V AC into a reference voltage for over-voltage and supply-quality monitoring. Companion power board to the KELL Smart Street Light Monitoring System.',
    specs: ['SMPS', '3-phase 230V AC', 'Voltage Reference', 'OV Sensing', 'Supply Quality']
  },
  {
    id: 'P-006',
    tag: 'metering',
    tagLabel: 'Metering',
    title: 'Smart Meter Optical Data Reader',
    company: 'RIOD Logic Pvt Ltd',
    image: 'images/optical_3d.png',
    desc: 'Compact circular PCB designed for optical data reading from smart energy meters with RS232 output. Integrated photodiode sensing, NPN driver stage, TVS protection, and RS232 line interface in a tight form factor.',
    specs: ['Circular PCB', 'Optical Sensor', 'RS232', 'TVS Protected', 'Compact form']
  }
];

// =================================================================
// BOARD GALLERY — grouped by project for cleaner arrangement
// =================================================================
const BOARD_GROUPS = [
  {
    name: 'Thermostat',
    meta: '6-layer · Industrial IoT',
    images: [
      { sub: 'PCB layout', img: 'images/waltech_pcb.png' },
      { sub: '3D render · top', img: 'images/waltech_3d_top.png' },
      { sub: '3D render · bottom', img: 'images/waltech_3d_bottom.png' }
    ]
  },
  {
    name: 'RDPMS',
    meta: '4-layer · Industrial IoT',
    images: [
      { sub: 'PCB layout', img: 'images/rdpms_pcb.png' },
      { sub: '3D render · top', img: 'images/rdpms_3d_top.png' },
      { sub: '3D render · bottom', img: 'images/rdpms_3d_bottom.png' }
    ]
  },
  {
    name: 'Smart Elevator Monitoring System',
    meta: '4-layer · Automation',
    images: [
      { sub: 'PCB layout', img: 'images/escon_pcb.png' },
      { sub: '3D render · top', img: 'images/escon_3d_top.png' },
      { sub: '3D render · bottom', img: 'images/escon_3d_bottom.png' }
    ]
  },
  {
    name: 'Smart Street Light Monitoring System',
    meta: '2-layer · Automation',
    images: [
      { sub: 'PCB layout', img: 'images/kell_pcb.png' },
      { sub: '3D render', img: 'images/kell_3d.png' }
    ]
  },
  {
    name: 'SMPS Card',
    meta: 'Power · 3-phase 230V',
    images: [
      { sub: 'PCB layout', img: 'images/smps_pcb.png' },
      { sub: '3D render', img: 'images/smps_3d.png' }
    ]
  },
  {
    name: 'Smart Meter Optical Reader',
    meta: 'Compact · RS232',
    images: [
      { sub: 'PCB layout', img: 'images/optical_pcb.png' },
      { sub: '3D render', img: 'images/optical_3d.png' }
    ]
  }
];

// =================================================================
// RENDER GROUPED GALLERY
// =================================================================
const galleryGroups = document.getElementById('galleryGroups');
BOARD_GROUPS.forEach((group, gi) => {
  const groupEl = document.createElement('div');
  groupEl.className = 'gallery-group';
  groupEl.style.animationDelay = `${gi * 0.1}s`;

  const num = String(gi + 1).padStart(2, '0');
  const layoutClass = `layout-${group.images.length}`;

  groupEl.innerHTML = `
    <div class="group-head">
      <span class="group-num">${num}</span>
      <span class="group-name">${group.name}</span>
      <span class="group-meta">${group.meta}</span>
    </div>
    <div class="group-grid ${layoutClass}">
      ${group.images.map(b => `
        <div class="board-card" data-img="${b.img}" data-name="${group.name}" data-sub="${b.sub}">
          <img src="${b.img}" alt="${group.name} - ${b.sub}" loading="lazy"/>
          <div class="board-zoom-icon">⤢</div>
          <div class="board-meta">
            <strong>${group.name}</strong>
            <span>${b.sub}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  galleryGroups.appendChild(groupEl);
});

// Wire up lightbox for all board cards
document.querySelectorAll('.board-card[data-img]').forEach(card => {
  card.addEventListener('click', () => {
    openLightbox({
      img: card.dataset.img,
      name: card.dataset.name,
      sub: card.dataset.sub
    });
  });
});

// =================================================================
// RENDER PROJECTS
// =================================================================
const grid = document.getElementById('projectsGrid');
function renderProjects(list) {
  grid.innerHTML = '';
  if (list.length === 0) {
    grid.innerHTML = '<p style="color:var(--ink-mute);grid-column:1/-1;text-align:center;padding:3rem">No matching projects found.</p>';
    return;
  }
  list.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="project-thumb">
        <img src="${p.image}" alt="${p.title}" loading="lazy"/>
      </div>
      <div class="project-body">
        <span class="project-tag">${p.tagLabel}</span>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-company">${p.company}</p>
        <p class="project-desc">${p.desc}</p>
        <div class="project-specs">
          ${p.specs.map(s => `<span class="spec">${s}</span>`).join('')}
        </div>
      </div>
    `;
    card.addEventListener('click', () => openLightbox({ name: p.title, sub: p.tagLabel, img: p.image }));
    grid.appendChild(card);
  });
}
renderProjects(PROJECTS);

// =================================================================
// FILTER + SEARCH
// =================================================================
let currentFilter = 'all';
const chips = document.querySelectorAll('.chip');
const search = document.getElementById('searchInput');

function applyFilter() {
  const q = search.value.toLowerCase().trim();
  const filtered = PROJECTS.filter(p => {
    const matchTag = currentFilter === 'all' || p.tag === currentFilter;
    const matchQ = !q || p.title.toLowerCase().includes(q) ||
                   p.desc.toLowerCase().includes(q) ||
                   p.company.toLowerCase().includes(q) ||
                   p.specs.some(s => s.toLowerCase().includes(q));
    return matchTag && matchQ;
  });
  renderProjects(filtered);
}

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentFilter = chip.dataset.filter;
    applyFilter();
  });
});
search.addEventListener('input', applyFilter);

// =================================================================
// LIGHTBOX
// =================================================================
const lightbox = document.getElementById('lightbox');
const lbContent = document.getElementById('lbContent');
const lbCaption = document.getElementById('lbCaption');
const lbClose = document.getElementById('lbClose');

function openLightbox(b) {
  lbContent.innerHTML = `<img src="${b.img}" alt="${b.name}"/>`;
  lbCaption.textContent = `${b.name} — ${b.sub}`;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}
lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// =================================================================
// COUNTER ANIMATION
// =================================================================
const counters = document.querySelectorAll('.stat-num [data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = +el.dataset.count;
      const duration = 1400;
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });
counters.forEach(c => counterObserver.observe(c));

// =================================================================
// SCROLL PROGRESS BAR
// =================================================================
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = (scrollTop / docHeight) * 100;
  progressBar.style.width = pct + '%';
}, { passive: true });

// =================================================================
// HEADER SCROLL EFFECT
// =================================================================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}, { passive: true });

// =================================================================
// SECTION REVEAL ON SCROLL
// =================================================================
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      sectionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

document.querySelectorAll('.reveal-section').forEach(s => sectionObserver.observe(s));

// =================================================================
// SUBTLE TILT EFFECT ON PROJECT CARDS
// =================================================================
document.addEventListener('mousemove', (e) => {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (e.clientX < rect.left - 100 || e.clientX > rect.right + 100 ||
        e.clientY < rect.top - 100 || e.clientY > rect.bottom + 100) {
      card.style.transform = '';
      return;
    }
    if (e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top && e.clientY <= rect.bottom) {
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-8px) perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
    }
  });
});

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// =================================================================
// SMOOTH SCROLL FOR NAV LINKS
// =================================================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
