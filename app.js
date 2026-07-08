// ============================
// DATOS DE PRODUCTOS
// ============================
const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const PRODUCTS = [
  { name: "BRIOCHE DELEITE 4U",     mon: 3.40, tue: 4.00, wed: 3.75, thu: 4.50, fri: 5.50, sat: 6.75, sun: 2.50 },
  { name: "BROWNIE DELEITE",        mon: 0.80, tue: 2.80, wed: 1.25, thu: 1.25, fri: 1.50, sat: 1.00, sun: 0.50 },
  { name: "CACHITOS DELEITE HORNEADO UND", mon: 31.20, tue: 22.40, wed: 24.75, thu: 32.50, fri: 27.75, sat: 38.00, sun: 21.00 },
  { name: "CACHITOS JAMON Y QUESO DELEITE", mon: 3.60, tue: 17.40, wed: 12.25, thu: 8.75, fri: 6.75, sat: 2.25, sun: 0.00 },
  { name: "CANAPES DELEITE 250G",   mon: 0.20, tue: 0.60, wed: 0.50, thu: 0.50, fri: 1.00, sat: 1.00, sun: 0.00 },
  { name: "CANILLAS DELEITE 3UND",  mon: 65.80, tue: 75.80, wed: 65.00, thu: 60.50, fri: 75.00, sat: 69.75, sun: 51.00 },
  { name: "CINAMONROLL MINI 4 UNID", mon: 1.60, tue: 3.80, wed: 4.75, thu: 3.75, fri: 4.50, sat: 3.25, sun: 3.75 },
  { name: "CROISSANT DELEITE 2 U",  mon: 0.00, tue: 0.20, wed: 0.00, thu: 0.00, fri: 0.00, sat: 0.00, sun: 0.75 },
  { name: "CROUTONS DELEITE",       mon: 0.40, tue: 0.20, wed: 0.50, thu: 0.50, fri: 0.50, sat: 0.75, sun: 0.75 },
  { name: "FOCACCIA UNIDAD",        mon: 6.80, tue: 10.80, wed: 13.00, thu: 7.00, fri: 10.25, sat: 11.75, sun: 4.25 },
  { name: "MASA HOJALDRE X KILO",   mon: 0.16, tue: 0.00, wed: 0.00, thu: 0.00, fri: 0.00, sat: 0.19, sun: 0.00 },
  { name: "MINI CAMPESINO DELEITE", mon: 12.60, tue: 14.60, wed: 13.75, thu: 17.50, fri: 15.75, sat: 17.00, sun: 15.25 },
  { name: "MINI PAN BRIOCHE 3 UNID", mon: 0.40, tue: 3.40, wed: 0.75, thu: 4.50, fri: 1.00, sat: 2.50, sun: 3.50 },
  { name: "PALMERITAS DELEITE X KG", mon: 0.11, tue: 0.10, wed: 0.10, thu: 0.05, fri: 0.00, sat: 0.36, sun: 0.31 },
  { name: "PAN CAMPESINO DELEITE",  mon: 10.80, tue: 10.60, wed: 10.75, thu: 12.75, fri: 9.00, sat: 12.50, sun: 8.00 },
  { name: "PAN CIABATTA",           mon: 79.40, tue: 83.40, wed: 66.00, thu: 83.75, fri: 73.25, sat: 80.75, sun: 57.50 },
  { name: "PAN DE AREQUIPE 2 UNID", mon: 6.40, tue: 5.80, wed: 9.00, thu: 5.50, fri: 7.75, sat: 7.50, sun: 3.75 },
  { name: "PAN DE COCO 4 UNID",     mon: 10.40, tue: 10.80, wed: 11.00, thu: 10.00, fri: 6.50, sat: 8.75, sun: 6.50 },
  { name: "PAN DE GUAYABA DELEITE 2U", mon: 8.80, tue: 4.40, wed: 6.25, thu: 7.75, fri: 5.75, sat: 9.00, sun: 3.50 },
  { name: "PAN DE LECHE DELEITE 12 UNID", mon: 2.20, tue: 2.40, wed: 2.25, thu: 1.75, fri: 2.75, sat: 2.75, sun: 3.50 },
  { name: "PAN DE PERRO 12 UNID DELEITE", mon: 2.60, tue: 1.80, wed: 2.75, thu: 2.00, fri: 3.50, sat: 1.75, sun: 2.75 },
  { name: "PAN FRANCES DELEITE 8UND", mon: 111.20, tue: 121.80, wed: 104.50, thu: 121.75, fri: 107.50, sat: 86.75, sun: 86.25 },
  { name: "PAN INTEGRAL NEGRO PEQUEÑO", mon: 9.20, tue: 12.60, wed: 14.75, thu: 12.75, fri: 4.00, sat: 3.25, sun: 1.75 },
  { name: "PAN JUMBO DELEITE 6U",   mon: 0.60, tue: 0.60, wed: 0.50, thu: 0.50, fri: 0.00, sat: 0.25, sun: 0.75 },
  { name: "PAN RALLADO DELEITE 200G", mon: 0.80, tue: 0.60, wed: 0.75, thu: 0.25, fri: 3.50, sat: 1.50, sun: 1.75 },
  { name: "PAN SOBADO",             mon: 59.20, tue: 58.40, wed: 66.50, thu: 48.50, fri: 64.50, sat: 66.25, sun: 51.50 },
  { name: "PASTA SECA DELEITE X KG", mon: 0.21, tue: 0.22, wed: 0.49, thu: 0.46, fri: 0.43, sat: 0.58, sun: 0.20 },
  { name: "PASTELITOS JAMON Y QUESO FRITO", mon: 1.60, tue: 0.00, wed: 0.50, thu: 0.25, fri: 0.50, sat: 0.00, sun: 1.50 },
  { name: "PIZZA PORCION DELEITE",  mon: 14.20, tue: 16.00, wed: 15.75, thu: 14.50, fri: 5.50, sat: 14.25, sun: 5.75 },
  { name: "TORTA PONQUE DELEITE 500GR", mon: 2.60, tue: 2.20, wed: 1.50, thu: 3.00, fri: 2.25, sat: 2.25, sun: 3.75 },
];

// ============================
// ESTADO
// ============================
const PROD_KEY = 'pancalc_v2_production';
const WEEK_KEY = 'pancalc_v2_week';

function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function getDayIndex() {
  // js getDay(): 0=Sun,1=Mon,...6=Sat -> map to 6,0,1,2,3,4,5
  return (new Date().getDay() + 6) % 7;
}

let production = {}; // { "YYYY-MM-DD": { "Product Name": count } }
let currentDay = getDayIndex();
let currentTab = 'today';
let searchQuery = '';

function loadProduction() {
  try {
    const saved = localStorage.getItem(PROD_KEY);
    if (saved) production = JSON.parse(saved);
  } catch(e) {}
}

function saveProduction() {
  localStorage.setItem(PROD_KEY, JSON.stringify(production));
}

function getTodayProd() {
  const key = getTodayKey();
  if (!production[key]) production[key] = {};
  return production[key];
}

function getProductCount(productName, dayKey) {
  if (!dayKey) dayKey = getTodayKey();
  if (!production[dayKey]) return 0;
  return production[dayKey][productName] || 0;
}

function getTarget(p, dayIdx) {
  const map = ['mon','tue','wed','thu','fri','sat','sun'];
  return p[map[dayIdx]] || 0;
}

function getWeeklyTarget(p) {
  return getTarget(p,0)+getTarget(p,1)+getTarget(p,2)+getTarget(p,3)+getTarget(p,4)+getTarget(p,5)+getTarget(p,6);
}

function getWeeklyProduced(p, productionData) {
  let total = 0;
  DAYS.forEach((_, i) => {
    // get date keys for the current week
    // approximate: we don't know exact dates, so we sum what's in production
  });
  // simpler: sum across all production entries for this product
  Object.values(productionData).forEach(dayProd => {
    total += dayProd[p.name] || 0;
  });
  return total;
}

function addProduction(productName, amount) {
  const todayProd = getTodayProd();
  todayProd[productName] = (todayProd[productName] || 0) + amount;
  if (todayProd[productName] <= 0) delete todayProd[productName];
  saveProduction();
  renderAll();

  try { navigator.vibrate(10); } catch(e) {}
}

// ============================
// RENDER
// ============================
function renderAll() {
  renderDate();
  renderTodayView();
  renderWeekView();
  renderSummary();
}

function renderDate() {
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('current-date').textContent = new Date().toLocaleDateString('es-ES', opts);
}

function renderTodayView() {
  const container = document.getElementById('today-product-list');
  const todayEl = document.getElementById('today-day');
  const todayIdx = getDayIndex();
  todayEl.textContent = DAYS[todayIdx];

  const todayProd = getTodayProd();
  let totalTarget = 0, totalProduced = 0;

  let html = '';
  PRODUCTS.forEach(p => {
    const target = getTarget(p, todayIdx);
    if (target === 0) return;
    totalTarget += target;
    const produced = todayProd[p.name] || 0;
    totalProduced += produced;
    const pct = Math.min(100, (produced / target) * 100);
    const isDone = produced >= target;
    const searchMatch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (!searchMatch) return;

    html += `
      <div class="product-card ${isDone ? 'completed' : ''}" onclick="openModal('${p.name.replace(/'/g, "\\'")}', ${target})">
        <div class="product-card-header">
          <span class="product-name">${p.name}</span>
          <span class="product-target">Meta: ${target.toFixed(1)}</span>
        </div>
        <div class="product-progress-row">
          <div class="product-count-controls">
            <button class="btn-count btn-count-minus" onclick="event.stopPropagation(); addProduction('${p.name.replace(/'/g, "\\'")}', -1)">−</button>
            <span class="product-count">${produced}</span>
            <button class="btn-count btn-count-plus" onclick="event.stopPropagation(); addProduction('${p.name.replace(/'/g, "\\'")}', 1)">+</button>
          </div>
          <div class="product-progress-container">
            <div class="product-progress-fill" style="width:${pct}%"></div>
          </div>
          <span class="product-progress-pct">${Math.round(pct)}%</span>
        </div>
      </div>`;
  });

  container.innerHTML = html || '<p style="text-align:center;color:#999;padding:20px">Sin productos para hoy</p>';

  // Circular progress
  const totalPct = totalTarget > 0 ? Math.round((totalProduced / totalTarget) * 100) : 0;
  const circle = document.getElementById('today-circle-progress');
  const circumference = 100;
  circle.setAttribute('stroke-dasharray', `${Math.min(totalPct, 100)}, 100`);
  document.getElementById('today-pct-text').textContent = `${totalPct}%`;
}

function renderWeekView() {
  const container = document.getElementById('week-product-list');
  const selector = document.getElementById('day-selector');

  selector.innerHTML = DAYS.map((d, i) =>
    `<option value="${i}" ${i === currentDay ? 'selected' : ''}>${d}</option>`
  ).join('');

  const dayIdx = parseInt(selector.value);
  const isToday = dayIdx === getDayIndex();

  let html = '';
  PRODUCTS.forEach(p => {
    const target = getTarget(p, dayIdx);
    if (target === 0) return;

    html += `
      <div class="product-card">
        <div class="product-card-header">
          <span class="product-name">${p.name}</span>
          <span class="product-target">${target.toFixed(1)}</span>
        </div>
        <div style="font-size:0.75rem;color:#999;text-align:right">${isToday ? '← Hoy' : DAYS[dayIdx]}</div>
      </div>`;
  });

  container.innerHTML = html || '<p style="text-align:center;color:#999;padding:20px">Sin productos para este día</p>';
}

function renderSummary() {
  const container = document.getElementById('summary-product-list');

  let totalTarget = 0, totalProduced = 0;
  const items = [];

  PRODUCTS.forEach(p => {
    const weeklyTarget = getWeeklyTarget(p);
    if (weeklyTarget === 0) return;
    totalTarget += weeklyTarget;
    const produced = getWeeklyProduced(p, production);
    totalProduced += produced;
    const pct = Math.min(100, (produced / weeklyTarget) * 100);
    items.push({ name: p.name, target: weeklyTarget, produced, pct });
  });

  document.getElementById('summary-total-target').textContent = totalTarget.toFixed(1);
  document.getElementById('summary-total-produced').textContent = totalProduced.toFixed(0);
  const totalPct = totalTarget > 0 ? Math.round((totalProduced / totalTarget) * 100) : 0;
  document.getElementById('summary-total-pct').textContent = `${totalPct}%`;

  // Sort by least progress first
  items.sort((a, b) => (a.produced / a.target) - (b.produced / b.target));

  let html = items.map(item => {
    const pct = Math.min(100, (item.produced / item.target) * 100);
    const isDone = item.produced >= item.target;
    return `
      <div class="product-card ${isDone ? 'completed' : ''}">
        <div class="product-card-header">
          <span class="product-name">${item.name}</span>
          <span class="product-target">${item.produced.toFixed(0)}/${item.target.toFixed(1)}</span>
        </div>
        <div class="product-progress-row">
          <div class="product-progress-container">
            <div class="product-progress-fill" style="width:${pct}%"></div>
          </div>
          <span class="product-progress-pct">${Math.round(pct)}%</span>
        </div>
      </div>`;
  }).join('');

  container.innerHTML = html;
}

// ============================
// MODAL
// ============================
let modalProductName = '';
let modalTarget = 0;

function openModal(name, target) {
  modalProductName = name;
  modalTarget = target;
  document.getElementById('modal-product-name').textContent = name;
  document.getElementById('modal-target-value').textContent = target.toFixed(1);

  const todayProd = getTodayProd();
  const count = todayProd[name] || 0;
  document.getElementById('modal-count').textContent = count;

  const pct = target > 0 ? Math.min(100, (count / target) * 100) : 0;
  document.getElementById('modal-progress-bar').style.width = pct + '%';

  document.getElementById('product-modal').classList.remove('hidden');
}

function modalAdd(amount) {
  addProduction(modalProductName, amount);
  const todayProd = getTodayProd();
  const count = todayProd[modalProductName] || 0;
  document.getElementById('modal-count').textContent = count;
  const pct = modalTarget > 0 ? Math.min(100, (count / modalTarget) * 100) : 0;
  document.getElementById('modal-progress-bar').style.width = pct + '%';
}

function closeModal() {
  document.getElementById('product-modal').classList.add('hidden');
}

// ============================
// TABS
// ============================
function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === `view-${tab}`));
  if (tab === 'today') renderTodayView();
  if (tab === 'week') renderWeekView();
  if (tab === 'summary') renderSummary();
}

// ============================
// EVENTS
// ============================
document.addEventListener('DOMContentLoaded', () => {
  loadProduction();

  // Tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  // Search
  document.getElementById('search-input').addEventListener('input', e => {
    searchQuery = e.target.value;
    renderTodayView();
  });

  // Day selector (week view)
  document.getElementById('day-selector').addEventListener('change', e => {
    currentDay = parseInt(e.target.value);
    renderWeekView();
  });

  document.getElementById('prev-day').addEventListener('click', () => {
    currentDay = (currentDay - 1 + 7) % 7;
    document.getElementById('day-selector').value = currentDay;
    renderWeekView();
  });

  document.getElementById('next-day').addEventListener('click', () => {
    currentDay = (currentDay + 1) % 7;
    document.getElementById('day-selector').value = currentDay;
    renderWeekView();
  });

  // Modal
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.querySelector('.modal-backdrop').addEventListener('click', closeModal);

  // Reset week
  document.getElementById('reset-week').addEventListener('click', () => {
    if (confirm('¿Reiniciar toda la producción semanal?')) {
      production = {};
      saveProduction();
      renderAll();
    }
  });

  // Keyboard escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  renderAll();
});
