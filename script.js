const portfolio = {
  owner: 'Sagarika Pattabhi',
  title: 'Data Analyst',
  kpis: {
    projects: 4,
    internships: 3,
    languages: 3
  },
  nodes: [
    { id: 'sagarika', label: 'Sagarika', type: 'core', detail: 'M.Sc. Data Analytics student at University of Galway with ML, BI, and automation experience.' },
    { id: 'projects', label: 'Projects', type: 'project', detail: 'Signease, CPS dashboards, SM Electronic automation, and Firebase expense tracking.' },
    { id: 'skills', label: 'Skills', type: 'skill', detail: 'Python, SQL, R, Power BI, Tableau, Power Automate, Excel, MongoDB, and C.' },
    { id: 'education', label: 'Education', type: 'education', detail: 'M.Sc. CS-Data Analytics at University of Galway; B.E. AI & ML at BNMIT, First Class Honours.' },
    { id: 'internships', label: 'Internships', type: 'internship', detail: 'Project App Development at Accenture, Data Analytics at SM Electronic, and Cybersecurity at TechByheart.' },
    { id: 'volunteer', label: 'Volunteer', type: 'service', detail: '120+ hours with LGS Trust and Vikasana Foundation on research and community events.' },
    { id: 'hobbies', label: 'Hobbies', type: 'expertise', detail: 'Painting, video games, event management, prop making, and cosplaying beyond the dashboard.' },
    { id: 'sql', label: 'SQL', type: 'skill', detail: 'Querying, joining, and validating data — used in internship dashboards and reporting.' },
    { id: 'python', label: 'Python', type: 'skill', detail: 'Data analysis, ML modelling, NLP, and automation across coursework and projects.' },
    { id: 'bi', label: 'BI', type: 'skill', detail: 'Power BI and Tableau dashboards for sales, HR, inventory, and student attendance.' },
    { id: 'story', label: 'Storytelling', type: 'expertise', detail: 'Translating analysis into decisions, presentations, and stakeholder-ready recommendations.' },
    { id: 'stats', label: 'Statistics', type: 'expertise', detail: 'Trend analysis, segmentation, and inference supporting real-world reporting and ML work.' },
    { id: 'excel', label: 'Excel', type: 'skill', detail: 'Pivot models, analysis workflows, and rapid validation for business reporting.' },
    { id: 'viz', label: 'Visualization', type: 'expertise', detail: 'Charts and dashboards designed around audience comprehension — from data notebooks to exec views.' }
  ],
  links: [
    ['sagarika', 'projects'],
    ['sagarika', 'skills'],
    ['sagarika', 'education'],
    ['sagarika', 'internships'],
    ['sagarika', 'volunteer'],
    ['projects', 'sql'],
    ['projects', 'python'],
    ['projects', 'bi'],
    ['projects', 'story'],
    ['skills', 'sql'],
    ['skills', 'python'],
    ['skills', 'excel'],
    ['skills', 'viz'],
    ['skills', 'stats'],
    ['internships', 'bi'],
    ['internships', 'python'],
    ['education', 'stats'],
    ['education', 'story'],
    ['volunteer', 'story'],
    ['viz', 'story'],
    ['sagarika', 'hobbies'],
    ['hobbies', 'viz']
  ],
  skills: [
    { name: 'SQL', category: 'Data querying', level: 86, projects: 'Used for relational analysis, joins, aggregation, and validation in internship reporting.' },
    { name: 'Python', category: 'Analysis & ML', level: 88, projects: 'Applied in data analysis, NLP, deep learning (Signease), and automation notebooks.' },
    { name: 'R', category: 'Statistical computing', level: 74, projects: 'Used in coursework for statistical analysis and visualization.' },
    { name: 'Power BI', category: 'Dashboarding', level: 80, projects: 'Built dashboards for sales, HR, inventory, and student attendance at Accenture and SM Electronic.' },
    { name: 'Tableau', category: 'Visualization', level: 74, projects: 'Builds visual narratives for patterns, comparisons, and drilldowns.' },
    { name: 'Power Automate', category: 'Workflow automation', level: 80, projects: 'Designed a finance reporting workflow at SM Electronic, cutting report time from 3-5 hours to under a minute.' },
    { name: 'Excel', category: 'Business analysis', level: 88, projects: 'Used for fast modeling, pivot analysis, and stakeholder-ready summaries.' },
    { name: 'MongoDB', category: 'NoSQL data', level: 70, projects: 'Used in the Firebase Expense Tracker for concurrent user data and authentication.' },
    { name: 'Storytelling', category: 'Communication', level: 84, projects: 'Translates analysis into decisions, stakeholder presentations, and clear recommendations.' }
  ],
  projects: [
    {
      title: 'Signease — Sign Language Interpreter',
      problem: 'Real-time sign-to-text and text-to-sign translation for accessible communication.',
      dataset: 'Camera-captured gesture data, sign language vocabulary, and 3D sign models.',
      methodology: 'Deep learning for gesture recognition, 3D avatar design in Blender, and a camera-based input pipeline.',
      tools: ['Python', 'Deep Learning', 'Blender', 'OpenCV'],
      result: 'A working real-time translator with a 3D avatar for visual sign demonstration and accurate gesture recognition.',
      insight: 'Accessible communication',
      bars: [62, 78, 88, 74, 92, 80, 86, 95]
    },
    {
      title: 'SM Electronic — Finance Automation',
      problem: 'The Finance team spent 3–5 hours on each manual reporting cycle.',
      dataset: 'Finance team reporting workflows, sales and HR data, and Singapore inventory data.',
      methodology: 'Identified reporting inefficiencies, designed a Power Automate workflow, and built supporting dashboards.',
      tools: ['Power Automate', 'Power BI', 'Excel', 'SAP Business One'],
      result: 'Report preparation dropped from 3–5 hours to under a minute; presented to company stakeholders in India.',
      insight: 'Hours to seconds',
      bars: [55, 72, 88, 82, 78, 90, 74, 86]
    },
    {
      title: 'Chicago Public Schools — Data Insights',
      problem: 'Mentors needed visibility into student attendance and data trends to make decisions.',
      dataset: 'Chicago Public Schools student and operational data, plus ingestion pipelines.',
      methodology: 'Researched and tested Microsoft Fabric and Lakehouse for data ingestion; built interactive dashboards.',
      tools: ['Microsoft Fabric', 'Lakehouse', 'Power BI'],
      result: 'A student attendance tracker and a data insights dashboard for mentors to visualise trends.',
      insight: 'Mentor-ready dashboards',
      bars: [48, 66, 80, 72, 85, 78, 82, 88]
    },
    {
      title: 'Firebase Expense Tracker',
      problem: 'People need a simple, secure way to track expenses and visualise spending.',
      dataset: 'User expense entries, concurrent multi-user data, and authentication records.',
      methodology: 'Responsive web app with secure auth, dashboards, data visualisations, and financial reports.',
      tools: ['Firebase', 'JavaScript', 'Charting', 'Authentication'],
      result: 'A responsive web app supporting concurrent users with dashboards and financial reports.',
      insight: 'Secure multi-user tracking',
      bars: [38, 58, 72, 64, 78, 70, 82, 76]
    }
  ],
  internships: [
    { title: 'Project App Development Intern', company: 'Accenture', period: 'Feb 2025 – Jun 2025', focus: 'Data & AI' },
    { title: 'Data Analyst Intern', company: 'SM Electronic Technologies', period: 'Nov 2024 – Feb 2025', focus: 'Analytics' },
    { title: 'Cybersecurity Intern', company: 'TechByheart', period: 'Oct 2023 – Nov 2023', focus: 'Security' }
  ]
};

document.body.classList.add('loading');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  const delay = prefersReducedMotion ? 50 : 1200;
  setTimeout(() => {
    loader.classList.add('is-hidden');
    document.body.classList.remove('loading');
  }, delay);
});

function initTheme() {
  const toggle = document.querySelector('#themeToggle');
  const stored = localStorage.getItem('portfolio-theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (systemDark ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;

  toggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
  });
}

function initReveal() {
  const items = document.querySelectorAll('.reveal, .timeline-item');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );
  items.forEach(item => observer.observe(item));
}

function animateCounters() {
  const cards = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.count);
        const duration = prefersReducedMotion ? 1 : 950;
        const start = performance.now();
        const tick = now => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased).toLocaleString();
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    },
    { threshold: 0.8 }
  );
  cards.forEach(card => observer.observe(card));
}

function drawNetwork() {
  const svg = document.querySelector('#portfolioNetwork');
  const inspector = document.querySelector('#nodeInspector');
  const box = svg.parentElement.getBoundingClientRect();
  const width = box.width;
  const height = box.height;
  const centerX = width / 2;
  const centerY = height / 2 - 8;
  const radius = Math.min(width, height) * 0.29;
  const colors = {
    core: '#192841',
    project: '#0d6a7d',
    skill: '#3aa6b2',
    education: '#a3b18a',
    internship: '#f5e8aa',
    service: '#a3b18a',
    expertise: '#8fd5d3'
  };

  const positioned = portfolio.nodes.map((node, index) => {
    if (node.id === 'sagarika') return { ...node, x: centerX, y: centerY };
    const step = (Math.PI * 2) / (portfolio.nodes.length - 1);
    const angle = step * (index - 1) - Math.PI / 2;
    const wobble = index % 2 ? 0.86 : 1.08;
    return {
      ...node,
      x: centerX + Math.cos(angle) * radius * wobble,
      y: centerY + Math.sin(angle) * radius * wobble
    };
  });

  const byId = new Map(positioned.map(node => [node.id, node]));
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.innerHTML = '';

  const linkGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const nodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  svg.append(linkGroup, nodeGroup);

  portfolio.links.forEach(([source, target]) => {
    const a = byId.get(source);
    const b = byId.get(target);
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', a.x);
    line.setAttribute('y1', a.y);
    line.setAttribute('x2', b.x);
    line.setAttribute('y2', b.y);
    line.dataset.source = source;
    line.dataset.target = target;
    line.classList.add('network-link');
    linkGroup.append(line);
  });

  positioned.forEach((node, index) => {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('transform', `translate(${node.x}, ${node.y})`);
    group.setAttribute('tabindex', '0');
    group.setAttribute('role', 'button');
    group.setAttribute('aria-label', `${node.label}: ${node.detail}`);
    group.dataset.id = node.id;
    group.classList.add('network-node');

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('r', node.type === 'core' ? 20 : 12);
    circle.setAttribute('fill', colors[node.type]);

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('class', 'network-label');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('y', node.type === 'core' ? 34 : 26);
    text.textContent = node.label;

    if (!prefersReducedMotion) {
      group.animate(
        [
          { opacity: 0, transform: `translate(${centerX}px, ${centerY}px) scale(0.8)` },
          { opacity: 1, transform: `translate(${node.x}px, ${node.y}px) scale(1)` }
        ],
        { duration: 700, delay: index * 45, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' }
      );
    }

    group.append(circle, text);
    nodeGroup.append(group);

    const activate = () => setActiveNode(node.id, byId, inspector);
    group.addEventListener('mouseenter', activate);
    group.addEventListener('focus', activate);
    group.addEventListener('click', activate);
  });

  svg.addEventListener('mouseleave', clearActiveNode);
}

function relatedIds(id) {
  const ids = new Set([id]);
  portfolio.links.forEach(([a, b]) => {
    if (a === id) ids.add(b);
    if (b === id) ids.add(a);
  });
  return ids;
}

function setActiveNode(id, byId, inspector) {
  const related = relatedIds(id);
  document.querySelectorAll('.network-node').forEach(node => {
    const active = related.has(node.dataset.id);
    node.classList.toggle('is-muted', !active);
    node.classList.toggle('is-active', node.dataset.id === id);
  });
  document.querySelectorAll('.network-link').forEach(link => {
    const active = link.dataset.source === id || link.dataset.target === id;
    link.classList.toggle('is-muted', !active);
    link.classList.toggle('is-active', active);
  });

  const node = byId.get(id);
  inspector.innerHTML = `<span>${node.type}</span><strong>${node.label}</strong><p>${node.detail}</p>`;
}

function clearActiveNode() {
  document.querySelectorAll('.network-node, .network-link').forEach(el => {
    el.classList.remove('is-muted', 'is-active');
  });
}

function renderSkills() {
  const map = document.querySelector('#skillMap');
  const detail = document.querySelector('#skillDetail');
  map.innerHTML = portfolio.skills
    .map(
      skill => `
        <button class="skill-chip" type="button" data-skill="${skill.name}">
          <strong>${skill.name}</strong>
          <span>${skill.category}</span>
        </button>
      `
    )
    .join('');

  const setSkill = skill => {
    detail.innerHTML = `
      <span>${skill.category}</span>
      <h3>${skill.name}</h3>
      <p>${skill.projects}</p>
      <div class="meter" aria-label="${skill.level}% proficiency"><i style="--level: ${skill.level}%"></i></div>
      <p>${skill.level}% applied confidence based on the current portfolio inventory.</p>
    `;
    document.querySelectorAll('.skill-chip').forEach(chip => {
      chip.classList.toggle('is-active', chip.dataset.skill === skill.name);
    });
  };

  map.querySelectorAll('.skill-chip').forEach(chip => {
    const skill = portfolio.skills.find(item => item.name === chip.dataset.skill);
    chip.addEventListener('mouseenter', () => setSkill(skill));
    chip.addEventListener('focus', () => setSkill(skill));
    chip.addEventListener('click', () => setSkill(skill));
  });
}

function renderProjects() {
  const grid = document.querySelector('#projectsGrid');
  grid.innerHTML = portfolio.projects
    .map(
      (project, index) => `
        <article class="project-card reveal">
          <button type="button" aria-expanded="false">
            <div class="project-topline">
              <span class="eyebrow">Case ${String(index + 1).padStart(2, '0')}</span>
              <span class="result-badge">${project.insight}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.problem}</p>
            <div class="project-preview" aria-hidden="true">
              ${project.bars.map(value => `<i style="--h: ${value}%"></i>`).join('')}
            </div>
          </button>
          <div class="project-details">
            <div class="project-meta">
              <p><span>Results</span><br>${project.result}</p>
              <p><span>Method</span><br>${project.methodology}</p>
              <div class="tools">${project.tools.map(tool => `<em>${tool}</em>`).join('')}</div>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  const cards = grid.querySelectorAll('.project-card');
  cards.forEach(card => {
    const button = card.querySelector('button');
    button.addEventListener('click', () => {
      const isOpen = card.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
    });
  });
}

function renderInternships() {
  const grid = document.querySelector('#internshipGrid');
  grid.innerHTML = portfolio.internships
    .map(
      role => `
        <article class="internship-card reveal">
          <span>${role.focus}</span>
          <h3>${role.title}</h3>
          <p>${role.company}</p>
          <small>${role.period}</small>
        </article>
      `
    )
    .join('');
}

function initTimeline() {
  const START = new Date('2021-08-01');
  const END   = new Date('2026-06-01');
  const TOTAL = END - START;

  function pct(d) { return ((new Date(d) - START) / TOTAL * 100).toFixed(3) + '%'; }
  function pctNum(d) { return (new Date(d) - START) / TOTAL * 100; }
  function span(s, e) { return (pctNum(e) - pctNum(s)).toFixed(3) + '%'; }

  const tl = document.getElementById('tl');
  if (!tl) return;

  tl.innerHTML = '';

  const eduRow = document.createElement('div');
  eduRow.className = 'edu-row';

  [
    { start: '2021-08-01', end: '2025-08-01', name: 'BE in AI & Machine Learning', detail: 'BNMIT, Bengaluru · Aug 2021–Aug 2025' },
    { start: '2025-08-01', end: '2026-06-01', name: 'MSc Computer Science — Data Analytics', detail: 'University of Galway · Aug 2025–present' },
  ].forEach(e => {
    const block = document.createElement('div');
    block.className = 'edu-block';
    block.style.left = pct(e.start);
    block.style.width = span(e.start, e.end);
    block.innerHTML = `<div class="tl-tag">Education</div><div class="tl-name">${e.name}</div><div class="tl-detail">${e.detail}</div>`;
    eduRow.appendChild(block);
  });
  tl.appendChild(eduRow);

  const axisRow = document.createElement('div');
  axisRow.className = 'axis-row';
  const axisLine = document.createElement('div');
  axisLine.className = 'axis-line';
  axisRow.appendChild(axisLine);

  ['2021-08-01', '2022-01-01', '2023-01-01', '2024-01-01', '2025-01-01', '2025-08-01', '2026-01-01'].forEach(d => {
    const lbl = document.createElement('div');
    lbl.className = 'tl-year-label';
    lbl.style.left = pct(d);
    lbl.textContent = d === '2025-08-01' ? 'Aug 2025' : new Date(d).getFullYear();
    axisRow.appendChild(lbl);
  });
  tl.appendChild(axisRow);

  const bottomRow = document.createElement('div');
  bottomRow.className = 'bottom-row';

  const bottomItems = [
    { type: 'work',    start: '2023-10-01', end: '2023-11-30', name: 'Cybersecurity intern',     detail: 'TechByheart',       offset: 0 },
    { type: 'project', start: '2024-05-01', end: '2024-08-31', name: 'Firebase expense tracker', detail: 'May–Aug 2024',      offset: 0 },
    { type: 'work',    start: '2024-11-01', end: '2025-02-28', name: 'Data analyst intern',       detail: 'SM Electronics',    offset: 0 },
    { type: 'project', start: '2024-11-01', end: '2025-03-31', name: 'Signease',                 detail: 'Nov 2024–Mar 2025', offset: 58 },
    { type: 'work',    start: '2025-02-01', end: '2025-06-30', name: 'App dev intern',            detail: 'Accenture',         offset: 0 },
  ];

  bottomItems.forEach(item => {
    const midPct = (pctNum(item.start) + pctNum(item.end)) / 2;

    const stem = document.createElement('div');
    stem.className = 'tl-stem';
    stem.style.left = midPct.toFixed(3) + '%';
    stem.style.top = '0';
    stem.style.height = (item.offset ? item.offset + 16 : 16) + 'px';
    bottomRow.appendChild(stem);

    const dot = document.createElement('div');
    dot.className = `tl-dot tl-dot-${item.type}`;
    dot.style.left = midPct.toFixed(3) + '%';
    axisRow.appendChild(dot);

    const card = document.createElement('div');
    card.className = `item-block ${item.type}`;
    card.style.left = `calc(${midPct.toFixed(3)}% - 65px)`;
    card.style.top = (item.offset ? item.offset + 16 : 16) + 'px';
    card.innerHTML = `<div class="tl-tag">${item.type}</div><div class="tl-name">${item.name}</div><div class="tl-detail">${item.detail}</div>`;
    bottomRow.appendChild(card);
  });

  ['2021-08-01', '2025-08-01'].forEach(d => {
    const dot = document.createElement('div');
    dot.className = 'tl-dot tl-dot-edu';
    dot.style.left = pct(d);
    axisRow.appendChild(dot);
  });

  tl.appendChild(bottomRow);
}

initTheme();
renderSkills();
renderProjects();
initTimeline();
renderInternships();
initReveal();
animateCounters();
drawNetwork();

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    drawNetwork();
    initTimeline();
  }, 120);
});