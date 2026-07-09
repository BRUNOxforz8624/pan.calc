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
  renderReport();
  renderReporteFinal();
  renderProduction();
}

function switchReportSubtab(subtab) {
  document.querySelectorAll('.subtab').forEach(t => t.classList.toggle('active', t.dataset.subtab === subtab));
  document.querySelectorAll('.report-subview').forEach(v => v.classList.toggle('active', v.id === subtab));
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

function renderReport() {
  const container = document.getElementById('report-product-list');
  const todayIdx = getDayIndex();
  const todayProd = getTodayProd();

  // Date
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = new Date().toLocaleDateString('es-ES', opts);
  document.getElementById('report-date').textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);

  let totalTarget = 0, totalProduced = 0;

  const rows = [];
  PRODUCTS.forEach(p => {
    const target = getTarget(p, todayIdx);
    if (target === 0) return;
    totalTarget += target;
    const produced = todayProd[p.name] || 0;
    totalProduced += produced;
    const remaining = Math.max(0, target - produced);
    const isDone = produced >= target;
    rows.push({ name: p.name, target, produced, remaining, isDone });
  });

  document.getElementById('report-total-target').textContent = totalTarget.toFixed(1);
  document.getElementById('report-total-produced').textContent = totalProduced.toFixed(0);
  document.getElementById('report-total-missing').textContent = Math.max(0, totalTarget - totalProduced).toFixed(1);

  let html = rows.map(r => `
    <div class="report-row ${r.isDone ? 'done' : ''}">
      <span class="report-row-name">${r.name}</span>
      <span class="report-row-numbers">
        <span class="report-row-produced">${r.produced.toFixed(0)}</span>
        <span class="report-row-target"> / ${r.target.toFixed(1)}</span>
      </span>
      <span class="report-row-missing">${r.isDone ? '✅' : r.remaining.toFixed(1)}</span>
    </div>
  `).join('');

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
  if (tab === 'report') renderReport();
  if (tab === 'production') renderProduction();
}

// ============================
// PRODUCCIÓN (TANDAS)
// ============================
const BATCH_KEY = 'pancalc_batch';
let batchData = {};

function loadBatch() {
  try { const s = localStorage.getItem(BATCH_KEY); if (s) batchData = JSON.parse(s); } catch(e) {}
}

function saveBatch() {
  localStorage.setItem(BATCH_KEY, JSON.stringify(batchData));
}

function getTodayBatch() {
  const key = getTodayKey();
  if (!batchData[key]) batchData[key] = {};
  return batchData[key];
}

function getProductBatch(productName) {
  const day = getTodayBatch();
  if (!day[productName]) {
    day[productName] = { tandas: [{time:'',qty:0},{time:'',qty:0},{time:'',qty:0},{time:'',qty:0},{time:'',qty:0}], mermas: 0 };
  }
  return day[productName];
}

function calcTandaTotal(tandas) {
  return tandas.reduce((s, t) => s + (parseFloat(t.qty) || 0), 0);
}

let editingProduct = '';

function openTandaModal(productName) {
  editingProduct = productName;
  document.getElementById('tanda-product-name').textContent = productName;

  const pb = getProductBatch(productName);
  const list = document.getElementById('tanda-list');

  let html = '';
  pb.tandas.forEach((t, i) => {
    html += `
      <div class="tanda-row">
        <span class="tanda-row-label">Tanda ${i + 1}</span>
        <input type="time" id="tanda-time-${i}" value="${t.time || ''}">
        <input type="number" id="tanda-qty-${i}" min="0" value="${t.qty || ''}" inputmode="numeric" placeholder="Cant">
      </div>`;
  });
  list.innerHTML = html;

  document.getElementById('tanda-mermas-input').value = pb.mermas || 0;
  updateTandaSummary();
  document.getElementById('tanda-modal').classList.remove('hidden');

  // Auto-focus first empty time
  setTimeout(() => {
    const firstTime = document.getElementById('tanda-time-0');
    if (firstTime) firstTime.focus();
  }, 300);
}

function updateTandaSummary() {
  let total = 0;
  for (let i = 0; i < 5; i++) {
    const qtyEl = document.getElementById(`tanda-qty-${i}`);
    if (qtyEl) total += parseFloat(qtyEl.value) || 0;
  }
  document.getElementById('tanda-total').textContent = total.toFixed(0);

  const mermas = parseFloat(document.getElementById('tanda-mermas-input').value) || 0;
  document.getElementById('tanda-neto').textContent = Math.max(0, total - mermas).toFixed(0);
}

function saveTandas() {
  const pb = getProductBatch(editingProduct);
  for (let i = 0; i < 5; i++) {
    const timeEl = document.getElementById(`tanda-time-${i}`);
    const qtyEl = document.getElementById(`tanda-qty-${i}`);
    if (timeEl && qtyEl) {
      pb.tandas[i] = { time: timeEl.value, qty: parseFloat(qtyEl.value) || 0 };
    }
  }
  pb.mermas = parseFloat(document.getElementById('tanda-mermas-input').value) || 0;
  saveBatch();
  closeTandaModal();
  renderProduction();
}

function closeTandaModal() {
  document.getElementById('tanda-modal').classList.add('hidden');
}

function renderProduction() {
  const container = document.getElementById('prod-product-list');
  const dateEl = document.getElementById('prod-date');
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = new Date().toLocaleDateString('es-ES', opts);
  dateEl.textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);

  const todayIdx = getDayIndex();
  const todayBatch = getTodayBatch();

  let html = '';
  PRODUCTS.forEach(p => {
    const target = getTarget(p, todayIdx);
    if (target === 0) return;

    const pb = todayBatch[p.name];
    const total = pb ? calcTandaTotal(pb.tandas) : 0;
    const mermas = pb ? (pb.mermas || 0) : 0;
    const neto = Math.max(0, total - mermas);
    const pct = target > 0 ? Math.min(100, (neto / target) * 100) : 0;
    const isDone = neto >= target;
    const dashArray = pct.toFixed(0);

    html += `
      <div class="prod-card" onclick="openTandaModal('${p.name.replace(/'/g, "\\'")}')">
        <div class="prod-card-left">
          <div class="prod-card-name">${p.name}</div>
          <div class="prod-card-stats">
            <span class="prod-card-stat">Total: <strong>${total.toFixed(0)}</strong></span>
            <span class="prod-card-stat mermas">Mermas: <strong>${mermas.toFixed(0)}</strong></span>
            <span class="prod-card-stat neto">Neto: <strong>${neto.toFixed(0)}</strong></span>
          </div>
        </div>
        <div class="prod-card-circle ${isDone ? 'done' : ''}">
          <svg viewBox="0 0 36 36">
            <path class="prod-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path class="prod-circle-fill" stroke-dasharray="${dashArray}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <text x="18" y="20.5" class="prod-circle-text">${Math.round(pct)}%</text>
          </svg>
        </div>
      </div>`;
  });

  container.innerHTML = html || '<div class="prod-empty">Toca un producto para registrar tandas</div>';
}

function renderReporteFinal() {
  const list = document.getElementById('report-final-list');
  const todayIdx = getDayIndex();
  const todayBatch = getTodayBatch();

  let totalTandas = 0, totalMermas = 0, totalNeto = 0;

  const rows = [];
  PRODUCTS.forEach(p => {
    const target = getTarget(p, todayIdx);
    if (target === 0) return;

    const pb = todayBatch[p.name];
    const tandas = pb ? calcTandaTotal(pb.tandas) : 0;
    const mermas = pb ? (pb.mermas || 0) : 0;
    const neto = Math.max(0, tandas - mermas);

    totalTandas += tandas;
    totalMermas += mermas;
    totalNeto += neto;

    rows.push({ name: p.name, target, tandas, mermas, neto });
  });

  document.getElementById('final-total-tandas').textContent = totalTandas.toFixed(0);
  document.getElementById('final-total-mermas').textContent = totalMermas.toFixed(0);
  document.getElementById('final-total-neto').textContent = totalNeto.toFixed(0);

  let html = rows.map(r => {
    const pct = r.target > 0 ? Math.min(100, (r.neto / r.target) * 100) : 0;
    const isDone = r.neto >= r.target;
    return `
      <div class="report-row ${isDone ? 'done' : ''}">
        <span class="report-row-name">${r.name}</span>
        <span class="report-row-numbers">
          <span class="report-row-produced">${r.neto.toFixed(0)}</span>
          <span class="report-row-target"> / ${r.target.toFixed(1)}</span>
          <span style="color:#999;font-size:0.7rem"> (m:${r.mermas.toFixed(0)})</span>
        </span>
        <span class="report-row-missing">${isDone ? '✅' : Math.max(0, r.target - r.neto).toFixed(1)}</span>
      </div>`;
  }).join('');

  list.innerHTML = html;
}

// ============================
// EVENTS
// ============================
document.addEventListener('DOMContentLoaded', () => {
  loadProduction();
  loadBatch();

  // Tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  // Report sub-tabs
  document.querySelectorAll('.subtab').forEach(tab => {
    tab.addEventListener('click', () => switchReportSubtab(tab.dataset.subtab));
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

  // Modal (Hoy)
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.querySelectorAll('.modal-backdrop').forEach(el => {
    el.addEventListener('click', (e) => {
      const modal = e.currentTarget.closest('.modal');
      if (modal) modal.classList.add('hidden');
    });
  });
  document.getElementById('modal-set-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') modalSetValue();
  });

  // Modal Tandas
  document.getElementById('tanda-modal-close').addEventListener('click', closeTandaModal);
  document.getElementById('tanda-mermas-input').addEventListener('input', updateTandaSummary);
  document.getElementById('tanda-list').addEventListener('input', updateTandaSummary);

  // Keyboard escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeTandaModal(); }
  });

  renderAll();
});
