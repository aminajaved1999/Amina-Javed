'use strict';

// ─── Bootstrap ───────────────────────────────────────────────────────────────

function bootstrap() {
  try {
    renderAll(PORTFOLIO_DATA);
    initAll();
  } catch (err) {
    console.error(err);
    const msg = document.getElementById('loading-msg');
    if (msg) msg.textContent = 'Could not load portfolio data. Please refresh.';
  }
}

// ─── Render coordinator ───────────────────────────────────────────────────────

function renderAll(data) {
  renderHero(data);
  renderExperience(data.experience);
  renderEducation(data.education);
  renderAchievements(data.achievements || []);
  renderProjects(data.projects);
  renderSkills(data.skills);
  renderCertifications(data.certifications);
  renderContact(data.profile);
  updateCounts(data);
  document.getElementById('loading-msg').remove();
}

// ─── Section renderers ────────────────────────────────────────────────────────

function calcYearsExp(startYear, startMonth) {
  const now   = new Date();
  const years = now.getFullYear() - startYear;
  const extra = (now.getMonth() + 1) >= startMonth ? 0 : -1;
  return (years + extra) + '+';
}

function renderHero(data) {
  const p        = data.profile;
  const yearsExp = calcYearsExp(p.stats.expStartYear, p.stats.expStartMonth);
  const projCount = data.projects.length;
  const certCount = data.certifications.length;
  const initials = p.name.split(' ').map(n => n[0]).join('');

  const resumeBtn = p.resume
    ? `<a href="${p.resume}" target="_blank" rel="noopener noreferrer"
          class="border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-8 py-3 rounded-sm transition-colors font-mono text-sm tracking-widest flex items-center uppercase">
          <i class="fas fa-file-alt mr-2"></i> Resume
       </a>`
    : '';

  const githubBtn = p.github
    ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer"
          class="border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-8 py-3 rounded-sm transition-colors font-mono text-sm tracking-widest flex items-center uppercase">
          <i class="fab fa-github mr-2"></i> GitHub
       </a>`
    : '';

  set('hero-content', `
    <div class="reveal">
      <div class="inline-flex items-center space-x-2 border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 rounded-full mb-6 font-mono text-xs text-cyan-400">
        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        <span>STATUS: ONLINE &amp; READY</span>
      </div>
      <h1 class="font-display text-5xl md:text-7xl font-black text-white leading-tight mb-4 uppercase">
        Architecting <br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 glow-text">Enterprise</span> <br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-magenta-400 to-purple-600 glow-text-magenta">Systems.</span>
      </h1>
      <p class="text-gray-300 text-lg md:text-xl font-sans max-w-lg mb-8 leading-relaxed">${esc(p.bio)}</p>
      <div class="flex flex-wrap gap-4">
        <a href="#projects" class="btn-cyber px-8 py-3 rounded-sm font-bold">
          <i class="fas fa-satellite-dish mr-2"></i> EXPLORE DATA
        </a>
        <a href="${p.linkedin}" target="_blank" rel="noopener noreferrer"
           class="border border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-sm transition-colors font-mono text-sm tracking-widest flex items-center uppercase">
          <i class="fab fa-linkedin mr-2"></i> LinkedIn
        </a>
        ${githubBtn}${resumeBtn}
      </div>
    </div>

    <div class="reveal cyber-card p-8 rounded-lg relative hidden md:block">
      <div class="absolute top-0 right-0 p-4 font-mono text-xs text-cyan-400/50">ID: AJ-1999</div>
      <div class="w-20 h-20 rounded-full border-2 border-cyan-400 flex items-center justify-center text-2xl font-display font-bold text-cyan-400 mb-6 shadow-[0_0_15px_rgba(0,243,255,0.4)]">
        ${initials}
      </div>
      <h3 class="font-display text-2xl font-bold text-white mb-1">${esc(p.name)}</h3>
      <p class="font-mono text-cyan-400 text-sm mb-6">// ${p.headline.toLowerCase().replace(/\s+/g, '_')}.exe</p>
      <div class="grid grid-cols-3 gap-4 mb-6">
        <div class="bg-black/50 border border-gray-700/50 p-3 rounded text-center">
          <div class="text-2xl font-display font-bold text-magenta-400">${yearsExp}</div>
          <div class="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Years Exp</div>
        </div>
        <div class="bg-black/50 border border-gray-700/50 p-3 rounded text-center">
          <div class="text-2xl font-display font-bold text-magenta-400">${projCount}</div>
          <div class="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Projects</div>
        </div>
        <div class="bg-black/50 border border-gray-700/50 p-3 rounded text-center">
          <div class="text-2xl font-display font-bold text-magenta-400">${certCount}</div>
          <div class="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Certs</div>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 font-mono text-xs">
        ${p.topSkills.map(s => `<span class="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 px-2 py-1 rounded">${esc(s)}</span>`).join('')}
      </div>
    </div>
  `);

  // wire navbar contact button
  const navBtn = document.getElementById('nav-contact-btn');
  if (navBtn) navBtn.href = `mailto:${p.email}`;
}

function renderExperience(experience) {
  set('experience-list', experience.map(job => {
    const dateBadge = job.featured
      ? `<div class="mt-2 md:mt-0 inline-block bg-magenta-500/20 border border-magenta-500/50 text-magenta-300 font-mono text-xs px-3 py-1 rounded-full">${esc(job.period)}</div>`
      : `<div class="mt-2 md:mt-0 font-mono text-gray-400 text-xs px-3 py-1">${esc(job.period)}</div>`;

    const body = job.points
      ? `<ul class="space-y-2 text-gray-300 text-sm md:text-base font-sans list-none">
           ${job.points.map(p => `
             <li class="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-cyan-400">${esc(p)}</li>
           `).join('')}
         </ul>`
      : `<p class="text-gray-300 text-sm md:text-base">${esc(job.description)}</p>`;

    return `
      <div class="reveal timeline-item relative pl-8 md:pl-12">
        <div class="timeline-dot"></div>
        <div class="cyber-card p-6 rounded-lg">
          <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <div>
              <h3 class="font-display text-xl font-bold text-white">${esc(job.role)}</h3>
              <p class="font-mono text-cyan-400 text-sm">${esc(job.company)} | ${esc(job.location)}</p>
            </div>
            ${dateBadge}
          </div>
          ${body}
        </div>
      </div>`;
  }).join(''));
}

function renderEducation(education) {
  set('education-list', education.map(edu => `
    <div class="reveal cyber-card p-6 md:p-8 rounded-lg flex flex-col md:flex-row gap-6 items-start md:items-center">
      <div class="w-16 h-16 rounded bg-black/50 border border-cyan-500/50 flex items-center justify-center text-3xl text-cyan-400 shadow-[0_0_15px_rgba(0,243,255,0.2)] shrink-0">
        <i class="fas fa-graduation-cap"></i>
      </div>
      <div class="flex-grow w-full">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <div>
            <h3 class="font-display text-xl md:text-2xl font-bold text-white">${esc(edu.degree)}</h3>
            <p class="font-mono text-cyan-400 text-sm mt-1">${esc(edu.institution)}</p>
          </div>
          <div class="mt-2 md:mt-0 inline-block bg-magenta-500/20 border border-magenta-500/50 text-magenta-300 font-mono text-xs px-3 py-1 rounded-full whitespace-nowrap">
            ${esc(edu.period)}
          </div>
        </div>
        <p class="text-gray-400 text-sm mt-2 font-mono flex items-center gap-2">
          <i class="fas fa-map-marker-alt text-magenta-400"></i> ${esc(edu.location)}
        </p>
      </div>
    </div>
  `).join(''));
}

function sourceBadge(source, size = 'card') {
  if (!source) return '';
  const styles = {
    professional:  'border-gray-600    bg-gray-800/60      text-gray-400',
    certification: 'border-cyan-500/40 bg-cyan-500/10      text-cyan-400',
    freelance:     'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
    university:    'border-amber-500/40 bg-amber-500/10    text-amber-400',
    personal:      'border-gray-600    bg-gray-800/60      text-gray-400',
  };
  const cls = styles[source.type] || styles.personal;
  const textSize = size === 'modal' ? 'text-xs' : 'text-[10px]';
  const wrap     = size === 'modal' ? '' : 'max-w-[160px] truncate';
  return `<span class="inline-flex items-center gap-1.5 border ${cls} font-mono ${textSize} px-2 py-1 rounded uppercase tracking-wide ${wrap}" title="${esc(source.label)}">
    <i class="${source.icon} text-[9px] shrink-0"></i><span class="truncate">${esc(source.label)}</span>
  </span>`;
}

function renderAchievements(achievements) {
  const types = {
    academic:  { border: 'rgba(0,243,255,0.3)',   icon: '#00f3ff', bg: 'rgba(0,243,255,0.06)',   label: 'Academic',  labelCls: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400'    },
    sports:    { border: 'rgba(245,158,11,0.35)',  icon: '#f59e0b', bg: 'rgba(245,158,11,0.06)',  label: 'Sports',    labelCls: 'border-amber-500/40 bg-amber-500/10 text-amber-400'  },
    community: { border: 'rgba(188,19,254,0.3)',   icon: '#bc13fe', bg: 'rgba(188,19,254,0.06)',  label: 'Community', labelCls: 'border-magenta-500/40 bg-magenta-500/10 text-magenta-400' },
  };

  set('achievements-list', achievements.map(a => {
    const c = types[a.type] || types.community;
    return `
      <div class="reveal cyber-card flex items-start gap-4 p-5 rounded-lg"
           style="border-color:${c.border}; background:${c.bg};">
        <div class="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
             style="border:1px solid ${c.border}; background:rgba(0,0,0,0.4);">
          <i class="${a.icon}" style="color:${c.icon}; font-size:1rem;"></i>
        </div>
        <div class="min-w-0 flex-1">
          <div class="flex items-start justify-between gap-2 mb-1">
            <h4 class="font-display font-bold text-white text-sm leading-snug">${esc(a.title)}</h4>
            <span class="shrink-0 inline-flex items-center font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded border ${c.labelCls}">
              ${esc(c.label)}
            </span>
          </div>
          <p class="font-mono text-[11px]" style="color:${c.icon}; opacity:0.85;">${esc(a.detail)}</p>
          <p class="font-mono text-[10px] text-gray-500 mt-0.5">${esc(a.org)}</p>
        </div>
      </div>`;
  }).join(''));
}

function renderProjects(projects) {
  _projects = projects;
  set('project-grid', projects.map(p => {
    const featuredBadge = p.featured
      ? `<span class="bg-magenta-500/20 border border-magenta-500/50 text-magenta-300 font-mono text-[10px] px-2 py-1 rounded uppercase">Featured</span>`
      : '';

    const githubBtn = p.github
      ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer"
            class="flex-1 flex items-center justify-center gap-2 py-2 px-3
                   border border-gray-600 hover:border-cyan-400
                   text-gray-400 hover:text-cyan-400
                   font-mono text-[11px] uppercase tracking-wider rounded
                   transition-all duration-200">
           <i class="fab fa-github"></i> Code
         </a>`
      : '';

    const demoBtn = p.demo
      ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer"
            class="flex-1 flex items-center justify-center gap-2 py-2 px-3
                   border border-cyan-500/50 hover:border-cyan-400
                   text-cyan-400 hover:bg-cyan-500/10
                   font-mono text-[11px] uppercase tracking-wider rounded
                   transition-all duration-200"
            style="box-shadow: 0 0 8px rgba(0,243,255,0.1);">
           <i class="fas fa-external-link-alt"></i> Live
         </a>`
      : '';

    const proprietaryBadge = p.proprietary
      ? `<div class="mt-4 pt-4 border-t border-gray-700/40">
           <span class="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-gray-500 border border-gray-700 px-2.5 py-1 rounded">
             <i class="fas fa-lock text-[9px]"></i> Proprietary — Beacon Impex Pvt. Ltd.
           </span>
         </div>`
      : '';

    const links = p.proprietary
      ? proprietaryBadge
      : (p.github || p.demo)
        ? `<div class="flex gap-2 mt-4 pt-4 border-t border-gray-700/40">
             ${githubBtn}${demoBtn}
           </div>`
        : '';

    return `
      <div class="project-card cyber-card p-6 rounded-lg reveal" data-category="${p.categories.join(' ')}">
        <div class="flex justify-between items-start mb-3">
          <i class="${p.icon} text-2xl text-cyan-400"></i>
          <div class="flex flex-wrap gap-1 justify-end">
            ${featuredBadge}
            ${sourceBadge(p.source)}
          </div>
        </div>
        <h3 class="font-display text-lg font-bold text-white mb-2">${esc(p.title)}</h3>
        <p class="text-sm text-gray-400 mb-4 font-sans leading-relaxed">${esc(p.description)}</p>
        <div class="flex flex-wrap gap-2 font-mono text-[10px] text-cyan-300">
          ${p.tags.map(t => `<span class="border border-cyan-500/30 bg-black/50 px-2 py-1">${esc(t)}</span>`).join('')}
        </div>
        ${links}
      </div>`;
  }).join(''));
}

function renderSkills(skills) {
  const delayStep = 0.1;
  set('skills-matrix', skills.map((cat, i) => {
    const hoverClass = cat.hoverColor === 'magenta'
      ? 'hover:border-magenta-400 hover:text-magenta-400'
      : 'hover:border-cyan-400 hover:text-cyan-400';

    return `
      <div class="cyber-card p-5 rounded-lg reveal" style="transition-delay: ${(i * delayStep).toFixed(1)}s;">
        <h4 class="font-mono text-cyan-400 text-sm mb-3 uppercase border-b border-gray-700 pb-2">
          <i class="${cat.icon} mr-2"></i>${esc(cat.category)}
        </h4>
        <div class="flex flex-wrap gap-2 font-mono text-[11px]">
          ${cat.items.map(item => `
            <span class="bg-gray-800 border border-gray-600 px-2 py-1 rounded text-gray-300 ${hoverClass} transition-colors cursor-default">${esc(item)}</span>
          `).join('')}
        </div>
      </div>`;
  }).join(''));
}

function renderCertifications(certs) {
  set('cert-list', certs.map((cert, i) => {
    const isLast = i === certs.length - 1;
    const borderClass = isLast ? '' : 'border-b border-gray-800 pb-3';

    const credLink = cert.credentialUrl
      ? `<a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer"
            class="font-mono text-[10px] text-cyan-400 hover:underline mt-0.5 flex items-center gap-1">
            <i class="fas fa-external-link-alt text-[9px]"></i> View Credential
         </a>`
      : '';

    return `
      <div class="cert-item flex items-center space-x-4 ${borderClass} pt-${i === 0 ? '0' : '2'} hover:pl-2 transition-all" data-category="${cert.category}">
        ${certLogo(cert.category)}
        <div>
          <h5 class="text-white font-semibold text-sm">${esc(cert.title)}</h5>
          <p class="text-gray-400 text-xs font-mono">${esc(cert.date)}</p>
          ${credLink}
        </div>
      </div>`;
  }).join(''));
}

function renderContact(p) {
  const links = [
    {
      href: `mailto:${p.email}`,
      icon: 'fas fa-envelope',
      label: 'Email',
      value: p.email,
      external: false
    },
    {
      href: p.linkedin,
      icon: 'fab fa-linkedin',
      label: 'Network',
      value: p.linkedin.replace('https://', ''),
      external: true
    },
    {
      href: `tel:${p.phone.replace(/\s/g, '')}`,
      icon: 'fas fa-phone',
      label: 'Commlink',
      value: p.phone,
      external: false
    }
  ];

  if (p.github) {
    links.push({
      href: p.github,
      icon: 'fab fa-github',
      label: 'Source',
      value: p.github.replace('https://', ''),
      external: true
    });
  }

  set('contact-items', links.map(l => `
    <a href="${l.href}" ${l.external ? 'target="_blank" rel="noopener noreferrer"' : ''}
       class="cyber-card flex items-center justify-center gap-4 px-8 py-4 rounded-lg group">
      <i class="${l.icon} text-cyan-400 text-2xl group-hover:scale-110 transition-transform"></i>
      <div class="text-left">
        <p class="font-mono text-xs text-gray-400 uppercase">${l.label}</p>
        <p class="font-bold text-white group-hover:text-cyan-400 transition-colors">${esc(l.value)}</p>
      </div>
    </a>
  `).join(''));
}

// ─── Dynamic count labels ─────────────────────────────────────────────────────

function updateCounts(data) {
  const projectsLabel = document.getElementById('projects-count-label');
  const certsLabel    = document.getElementById('certs-count-label');
  if (projectsLabel) projectsLabel.textContent = `// ${data.projects.length} Projects on record`;
  if (certsLabel)    certsLabel.textContent    = `${data.certifications.length} Active Vendor Certs`;
}

// ─── Interactivity ────────────────────────────────────────────────────────────

function initAll() {
  initProjectFilter();
  initCertFilter();
  initScrollReveal();
  initCardTilt();
  initMobileMenu();
  initNavbarScroll();
  initProjectModals();
  initScrollProgress();
  initBackToTop();
}

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  const update = () => {
    const scrolled = window.scrollY;
    const total    = document.body.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initProjectFilter() {
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9) translateY(20px)';
        card.style.transition = 'opacity 0.3s, transform 0.3s';

        setTimeout(() => {
          const match = filter === 'all' || card.dataset.category.includes(filter);
          card.style.display = match ? 'block' : 'none';
          if (match) {
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1) translateY(0)';
            }, 50);
          }
        }, 300);
      });
    });
  });
}

function initCertFilter() {
  const certBtns  = document.querySelectorAll('.cert-filter-btn');
  const certItems = document.querySelectorAll('.cert-item');

  certBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      certBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      certItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-10px)';
        item.style.transition = 'opacity 0.3s, transform 0.3s';

        setTimeout(() => {
          const match = filter === 'all' || item.dataset.category === filter;
          item.style.display = match ? 'flex' : 'none';
          if (match) {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateX(0)';
            }, 50);
          }
        }, 300);
      });
    });
  });
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');

  const check = () => {
    const viewH = window.innerHeight;
    elements.forEach(el => {
      if (el.getBoundingClientRect().top < viewH - 80) {
        el.classList.add('active');
      }
    });
  };

  check();
  window.addEventListener('scroll', check, { passive: true });
}

function initCardTilt() {
  if (window.matchMedia('(hover: none)').matches) return; // skip on touch devices
  document.querySelectorAll('.cyber-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const cx = r.width / 2;
      const cy = r.height / 2;
      const rx = ((e.clientY - r.top  - cy) / cy) * -5;
      const ry = ((e.clientX - r.left - cx) / cx) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    });
  });
}

function initMobileMenu() {
  const btn  = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('hidden');
    btn.querySelector('i').className = open ? 'fas fa-bars' : 'fas fa-times';
  });

  // Close when a link is clicked
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.add('hidden');
      btn.querySelector('i').className = 'fas fa-bars';
    });
  });
}

// ─── Project detail modal ─────────────────────────────────────────────────────

let _projects = [];

function initProjectModals() {
  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.addEventListener('click', () => openModal(_projects[i]));
  });

  document.getElementById('modal-backdrop').addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(project) {
  if (!project) return;
  document.getElementById('modal-inner').innerHTML = buildModalHTML(project);
  document.getElementById('project-modal').classList.add('open');
  document.body.style.overflow = 'hidden';

  // image gallery navigation
  const imgs = project.images || [];
  if (imgs.length > 1) {
    let cur = 0;
    const imgEl  = document.getElementById('modal-gallery-img');
    const counter = document.getElementById('modal-img-counter');
    const update  = () => {
      imgEl.src = imgs[cur];
      if (counter) counter.textContent = `${cur + 1} / ${imgs.length}`;
    };
    document.getElementById('modal-prev')?.addEventListener('click', e => {
      e.stopPropagation();
      cur = (cur - 1 + imgs.length) % imgs.length;
      update();
    });
    document.getElementById('modal-next')?.addEventListener('click', e => {
      e.stopPropagation();
      cur = (cur + 1) % imgs.length;
      update();
    });
  }
}

function closeModal() {
  document.getElementById('project-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function buildModalHTML(p) {
  const imgs = p.images || [];

  const gallery = imgs.length
    ? `<div class="modal-img-gallery">
         <img id="modal-gallery-img" src="${imgs[0]}" alt="${esc(p.title)} screenshot">
         ${imgs.length > 1 ? `
           <button class="modal-img-nav prev" id="modal-prev"><i class="fas fa-chevron-left"></i></button>
           <button class="modal-img-nav next" id="modal-next"><i class="fas fa-chevron-right"></i></button>
           <span class="modal-img-counter" id="modal-img-counter">1 / ${imgs.length}</span>
         ` : ''}
       </div>`
    : `<div class="modal-img-placeholder">
         <i class="fas fa-satellite text-4xl" style="color:rgba(0,243,255,0.2)"></i>
         <span class="font-mono text-xs" style="color:rgba(0,243,255,0.3)">No preview available</span>
       </div>`;

  const metaBadges = [
    p.period ? `<span class="inline-flex items-center gap-1 bg-magenta-500/20 border border-magenta-500/40 text-magenta-300 font-mono text-xs px-3 py-1 rounded-full"><i class="fas fa-calendar-alt"></i> ${esc(p.period)}</span>` : '',
    p.role   ? `<span class="inline-flex items-center gap-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs px-3 py-1 rounded-full"><i class="fas fa-user-astronaut"></i> ${esc(p.role)}</span>` : '',
    p.source ? sourceBadge(p.source, 'modal') : '',
  ].filter(Boolean).join('');

  const features = (p.features || []).length
    ? `<div class="mb-6">
         <h4 class="font-mono text-xs text-gray-500 uppercase tracking-widest mb-3">Key Highlights</h4>
         <ul class="space-y-2">
           ${p.features.map(f => `
             <li class="flex items-start gap-2 text-sm text-gray-300">
               <span class="text-cyan-400 mt-0.5 shrink-0">›</span>
               <span>${esc(f)}</span>
             </li>`).join('')}
         </ul>
       </div>`
    : '';

  const githubBtn = p.github
    ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 py-2.5 px-4
                 border border-gray-600 hover:border-cyan-400
                 text-gray-400 hover:text-cyan-400
                 font-mono text-xs uppercase tracking-wider rounded transition-all">
         <i class="fab fa-github"></i> View Code
       </a>` : '';

  const demoBtn = p.demo
    ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 py-2.5 px-4
                 border border-cyan-500/50 hover:border-cyan-400
                 text-cyan-400 hover:bg-cyan-500/10
                 font-mono text-xs uppercase tracking-wider rounded transition-all"
          style="box-shadow:0 0 10px rgba(0,243,255,0.1)">
         <i class="fas fa-external-link-alt"></i> Live Demo
       </a>` : '';

  const modalProprietaryNote = p.proprietary
    ? `<div class="flex items-center gap-2 pt-4 border-t border-gray-700/50">
         <i class="fas fa-lock text-gray-600 text-xs"></i>
         <span class="font-mono text-xs text-gray-500">Source code is proprietary — developed professionally at Beacon Impex Pvt. Ltd.</span>
       </div>` : '';

  return `
    ${gallery}
    <div class="p-6 md:p-8">
      <div class="flex items-start justify-between gap-4 mb-4">
        <div class="flex items-center gap-3">
          <i class="${p.icon} text-2xl text-cyan-400"></i>
          <h2 id="modal-title" class="font-display text-xl md:text-2xl font-bold text-white">${esc(p.title)}</h2>
        </div>
        <button onclick="closeModal()"
          class="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg
                 border border-gray-700 hover:border-cyan-400 text-gray-400
                 hover:text-cyan-400 transition-colors text-sm">
          <i class="fas fa-times"></i>
        </button>
      </div>

      ${metaBadges ? `<div class="flex flex-wrap gap-2 mb-5">${metaBadges}</div>` : ''}

      <p class="text-gray-300 leading-relaxed mb-6">${esc(p.description)}</p>

      ${features}

      <div class="mb-6">
        <h4 class="font-mono text-xs text-gray-500 uppercase tracking-widest mb-3">Tech Stack</h4>
        <div class="flex flex-wrap gap-2">
          ${p.tags.map(t => `<span class="border border-cyan-500/30 bg-black/50 text-cyan-300 font-mono text-[11px] px-2 py-1 rounded">${esc(t)}</span>`).join('')}
        </div>
      </div>

      ${p.proprietary
          ? modalProprietaryNote
          : (githubBtn || demoBtn)
            ? `<div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-700/50">${githubBtn}${demoBtn}</div>`
            : ''}
    </div>`;
}

function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  const update = () => {
    if (window.scrollY > 50) {
      nav.classList.add('bg-black/80', 'backdrop-blur-md', 'shadow-lg', 'shadow-black/50');
    } else {
      nav.classList.remove('bg-black/80', 'backdrop-blur-md', 'shadow-lg', 'shadow-black/50');
    }
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function set(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function esc(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function certLogo(category) {
  const logos = {
    meta:   `<div class="w-10 h-10 rounded bg-blue-600 flex items-center justify-center flex-shrink-0"><i class="fab fa-meta text-white text-xl"></i></div>`,
    ibm:    `<div class="w-10 h-10 rounded bg-[#054ada] flex items-center justify-center flex-shrink-0"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" class="w-7 h-7 object-contain brightness-0 invert"></div>`,
    ms:     `<div class="w-10 h-10 rounded bg-[#00a4ef] flex items-center justify-center flex-shrink-0"><i class="fab fa-microsoft text-white text-lg"></i></div>`,
    google: `<div class="w-10 h-10 rounded bg-[#ea4335] flex items-center justify-center flex-shrink-0"><i class="fab fa-google text-white text-lg"></i></div>`,
  };
  return logos[category] ?? `<div class="w-10 h-10 rounded bg-gray-700 flex items-center justify-center flex-shrink-0"><i class="fas fa-certificate text-white text-lg"></i></div>`;
}

// ─── Start ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', bootstrap);
