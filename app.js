// ============================
// DATOS DE PRODUCTOS
// ============================
const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const PRODUCTS = [
  { name: "PAN FRANCES DELEITE UND",     mon: 889.6, tue: 974.4, wed: 836.0, thu: 974.0, fri: 860.0, sat: 694.0, sun: 690.0, avg: 845.4 },
  { name: "CANILLAS DELEITE UND",        mon: 197.4, tue: 227.4, wed: 195.0, thu: 181.5, fri: 225.0, sat: 209.3, sun: 153.0, avg: 198.4 },
  { name: "PAN CIABATTA",                mon:  79.4, tue:  83.4, wed:  66.0, thu:  83.8, fri:  73.3, sat:  80.8, sun:  57.5, avg:  74.9 },
  { name: "PAN SOBADO",                  mon:  59.2, tue:  58.4, wed:  66.5, thu:  48.5, fri:  64.5, sat:  66.3, sun:  51.5, avg:  59.3 },
  { name: "MINI CAMPESINO DELEITE",      mon:  12.6, tue:  14.6, wed:  13.8, thu:  17.5, fri:  15.8, sat:  17.0, sun:  15.3, avg:  15.2 },
  { name: "CACHITOS DELEITE HORNEADO UND", mon: 62.4, tue:  44.8, wed:  49.5, thu:  65.0, fri:  55.5, sat:  76.0, sun:  42.0, avg:  56.5 },
  { name: "CACHITOS JAMON Y QUESO DELEITE", mon: 7.2, tue:  34.8, wed:  24.5, thu:  17.5, fri:  13.5, sat:   4.5, sun:   0.0, avg:  14.6 },
  { name: "PIZZA PORCION DELEITE",       mon:  14.2, tue:  16.0, wed:  15.8, thu:  14.5, fri:   5.5, sat:  14.3, sun:   5.8, avg:  12.3 },
  { name: "PAN CAMPESINO DELEITE",       mon:  10.8, tue:  10.6, wed:  10.8, thu:  12.8, fri:   9.0, sat:  12.5, sun:   8.0, avg:  10.6 },
  { name: "FOCACCIA UNIDAD",             mon:   6.8, tue:  10.8, wed:  13.0, thu:   7.0, fri:  10.3, sat:  11.8, sun:   4.3, avg:   9.1 },
  { name: "PAN INTEGRAL NEGRO PEQUEÑO",  mon:   9.2, tue:  12.6, wed:  14.8, thu:  12.8, fri:   4.0, sat:   3.3, sun:   1.8, avg:   8.3 },
  { name: "BRIOCHE DELEITE 4U",          mon:   3.4, tue:   4.0, wed:   3.8, thu:   4.5, fri:   5.5, sat:   6.8, sun:   2.5, avg:   4.3 },
  { name: "PAN DE PERRO 12 UNID DELEITE", mon:  2.6, tue:   1.8, wed:   2.8, thu:   2.0, fri:   3.5, sat:   1.8, sun:   2.8, avg:   2.5 },
  { name: "MINI PAN BRIOCHE 3 UNID",     mon:   0.4, tue:   3.4, wed:   0.8, thu:   4.5, fri:   1.0, sat:   2.5, sun:   3.5, avg:   2.3 },
  { name: "PAN JUMBO DELEITE 6U",        mon:   0.6, tue:   0.6, wed:   0.5, thu:   0.5, fri:   3.5, sat:   0.3, sun:   0.8, avg:   1.0 },
  { name: "PAN RALLADO DELEITE 200G",    mon:   0.8, tue:   0.6, wed:   0.8, thu:   0.3, fri:   0.0, sat:   1.5, sun:   1.8, avg:   0.8 },
  { name: "CANAPES DELEITE 250G",        mon:   0.2, tue:   0.6, wed:   0.5, thu:   0.0, fri:   1.0, sat:   1.0, sun:   0.0, avg:   0.5 },
  { name: "CROUTONS DELEITE",            mon:   0.4, tue:   0.2, wed:   0.5, thu:   0.5, fri:   0.5, sat:   0.8, sun:   0.5, avg:   0.5 },
  { name: "PAN DE COCO 4 UNID",          mon:  10.4, tue:  10.8, wed:  11.0, thu:  10.0, fri:   6.5, sat:   8.8, sun:   6.5, avg:   9.1 },
  { name: "PAN DE AREQUIPE 2 UNID",      mon:   6.4, tue:   5.8, wed:   9.0, thu:   5.5, fri:   7.8, sat:   7.5, sun:   3.8, avg:   6.5 },
  { name: "PAN DE GUAYABA DELEITE 2U",   mon:   8.8, tue:   4.4, wed:   6.3, thu:   7.8, fri:   5.8, sat:   9.0, sun:   3.5, avg:   6.5 },
  { name: "CINAMONROLL MINI 4 UNID",     mon:   1.6, tue:   3.8, wed:   4.8, thu:   3.8, fri:   4.5, sat:   3.3, sun:   3.8, avg:   3.6 },
  { name: "PAN DE LECHE DELEITE 12 UNID", mon:  2.2, tue:   2.4, wed:   2.3, thu:   1.8, fri:   2.8, sat:   2.8, sun:   3.5, avg:   2.5 },
  { name: "TORTA PONQUE DELEITE 500GR",  mon:   2.6, tue:   2.2, wed:   1.5, thu:   3.0, fri:   2.3, sat:   2.3, sun:   3.8, avg:   2.5 },
  { name: "BROWNIE DELEITE",             mon:   0.8, tue:   2.8, wed:   1.3, thu:   1.3, fri:   1.5, sat:   1.0, sun:   0.5, avg:   1.3 },
  { name: "PASTA SECA DELEITE X KG",     mon:   0.2, tue:   0.2, wed:   0.5, thu:   0.5, fri:   0.4, sat:   0.6, sun:   0.2, avg:   0.4 },
  { name: "PALMERITAS DELEITE X KG",     mon:   0.1, tue:   0.1, wed:   0.1, thu:   0.0, fri:   0.0, sat:   0.4, sun:   0.3, avg:   0.1 },
  { name: "MASA HOJALDRE X KILO",        mon:   0.2, tue:   0.0, wed:   0.0, thu:   0.0, fri:   0.0, sat:   0.2, sun:   0.0, avg:   0.1 },
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

    const remaining = Math.max(0, target - produced);

    html += `
      <div class="product-card ${isDone ? 'completed' : ''}" onclick="openModal('${p.name.replace(/'/g, "\\'")}', ${target})">
        <div class="product-card-header">
          <span class="product-name">${p.name}</span>
          <span class="product-target">${produced} / ${target.toFixed(1)}</span>
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
        </div>
        <div class="product-remaining">
          ${isDone ? '✅ Completado' : 'Faltan ' + remaining.toFixed(1)}
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
    const remaining = Math.max(0, item.target - item.produced);
    return `
      <div class="product-card ${isDone ? 'completed' : ''}">
        <div class="product-card-header">
          <span class="product-name">${item.name}</span>
          <span class="product-target">${item.produced.toFixed(0)} / ${item.target.toFixed(1)}</span>
        </div>
        <div class="product-progress-row">
          <div class="product-progress-container">
            <div class="product-progress-fill" style="width:${pct}%"></div>
          </div>
        </div>
        <div class="product-remaining">
          ${isDone ? '✅ Completado' : 'Faltan ' + remaining.toFixed(1)}
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

  const remaining = Math.max(0, target - count);
  const remEl = document.getElementById('modal-remaining');
  if (remaining === 0) {
    remEl.textContent = '✅ ¡Completado!';
    remEl.style.color = '#606c38';
  } else {
    remEl.textContent = `Faltan: ${remaining.toFixed(1)}`;
    remEl.style.color = '#9c6644';
  }

  document.getElementById('modal-set-input').value = '';
  document.getElementById('modal-set-input').focus();

  document.getElementById('product-modal').classList.remove('hidden');
}

function modalAdd(amount) {
  addProduction(modalProductName, amount);
  const todayProd = getTodayProd();
  const count = todayProd[modalProductName] || 0;
  document.getElementById('modal-count').textContent = count;
  const pct = modalTarget > 0 ? Math.min(100, (count / modalTarget) * 100) : 0;
  document.getElementById('modal-progress-bar').style.width = pct + '%';

  const remaining = Math.max(0, modalTarget - count);
  const remEl = document.getElementById('modal-remaining');
  if (remaining === 0) {
    remEl.textContent = '✅ ¡Completado!';
    remEl.style.color = '#606c38';
  } else {
    remEl.textContent = `Faltan: ${remaining.toFixed(1)}`;
    remEl.style.color = '#9c6644';
  }
}

function modalSetValue() {
  const input = document.getElementById('modal-set-input');
  let value = parseInt(input.value, 10);
  if (isNaN(value) || value < 0) value = 0;

  const todayProd = getTodayProd();
  const current = todayProd[modalProductName] || 0;
  const diff = value - current;
  if (diff !== 0) {
    addProduction(modalProductName, diff);
  }
  input.value = '';
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
  document.getElementById('modal-set-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') modalSetValue();
  });

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
