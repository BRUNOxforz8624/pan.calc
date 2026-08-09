// ============================
// DATOS DE PRODUCTOS
// ============================
const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const DAY_KEYS = ['mon','tue','wed','thu','fri','sat','sun'];

const DEFAULT_PRODUCTS = [
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

let PRODUCTS = [...DEFAULT_PRODUCTS];

const DEFAULT_INGREDIENTES = [
  { name: "HARINA DE TRIGO" },
  { name: "HARINA INTEGRAL" },
  { name: "AFRECHO" },
  { name: "HUEVO" },
  { name: "LECHE" },
  { name: "AZÚCAR" },
  { name: "SAL" },
  { name: "LEVADURA" },
  { name: "ESENCIA DE MANTEQUILLA" },
  { name: "ESENCIA DE VAINILLA" },
  { name: "QUESO MOZARELLA" },
  { name: "JAMÓN" },
  { name: "CHARCUTERÍA" },
  { name: "QUESO CREMA" },
];

let INGREDIENTS = [...DEFAULT_INGREDIENTES];

// ============================
// FIREBASE
// ============================
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCo-Qai0Vh7tR6p7Q-_ppGo5Pskp2L7do8",
  authDomain: "pancal-25c84.firebaseapp.com",
  databaseURL: "https://pancal-25c84-default-rtdb.firebaseio.com",
  projectId: "pancal-25c84",
};

firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.database();
const prodRef = db.ref('production');
const batchRef = db.ref('batch');
const productsRef = db.ref('products');
const ordersRef = db.ref('orders');
const ingredientsRef = db.ref('ingredients');
const rawmaterialsRef = db.ref('rawmaterials');

// ============================
// ESTADO
// ============================
function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function getDayIndex() {
  return (new Date().getDay() + 6) % 7;
}

let production = {};
let currentDay = getDayIndex();
let currentTab = 'today';
let searchQuery = '';
let dbReady = false;
let pendingRender = false;

// ============================
// CACHÉ LOCAL (los datos sobreviven a la recarga de la página)
// ============================
function saveCache(key, obj) {
  try { localStorage.setItem('pancalc_cache_' + key, JSON.stringify(obj || {})); } catch (e) {}
}
function loadCache(key) {
  try { return JSON.parse(localStorage.getItem('pancalc_cache_' + key) || 'null'); } catch (e) { return null; }
}
function restoreFromCache() {
  let restored = false;
  const p = loadCache('production');
  if (p && typeof p === 'object') { production = p; restored = true; }
  const b = loadCache('batch');
  if (b && typeof b === 'object') { batchData = b; restored = true; }
  const o = loadCache('orders');
  if (o && typeof o === 'object') { orderData = o; restored = true; }
  const r = loadCache('rawmaterials');
  if (r && typeof r === 'object') { rawmaterialsData = r; restored = true; }
  const pr = loadCache('products');
  if (pr && pr.length) { PRODUCTS = pr; restored = true; }
  const ing = loadCache('ingredients');
  if (ing && ing.length) { INGREDIENTS = ing; restored = true; }
  return restored;
}

function getTodayProd() {
  const key = getTodayKey();
  if (!production[key]) production[key] = {};
  return production[key];
}

function getTarget(p, dayIdx) {
  return p[DAY_KEYS[dayIdx]] || 0;
}

function getTargetWithOrders(p, dayIdx, dateKey) {
  let t = getTarget(p, dayIdx);
  const orders = orderData[dateKey] || {};
  Object.values(orders).forEach(o => {
    if (o.productName === p.name) t += o.quantity;
  });
  return t;
}

function getOrdersForDate(dateKey) {
  return orderData[dateKey] || {};
}

function getWeeklyTarget(p) {
  return getTarget(p,0)+getTarget(p,1)+getTarget(p,2)+getTarget(p,3)+getTarget(p,4)+getTarget(p,5)+getTarget(p,6);
}

function addProduction(productName, amount) {
  // Incremento atómico server-side: no pierde toques entre dispositivos
  // (antes se escribía el día completo con .set() y un dispositivo pisaba al otro).
  // Además Firebase lo aplica en caché local → la vista se actualiza al instante.
  const ref = prodRef.child(getTodayKey()).child(productName);
  const todayProd = getTodayProd();
  const cur = todayProd[productName] || 0;
  const nextVal = cur + amount;

  if (nextVal <= 0) {
    ref.remove();
    delete todayProd[productName];
  } else {
    ref.set(firebase.database.ServerValue.increment(amount));
    todayProd[productName] = nextVal;
  }

  try { navigator.vibrate(10); } catch(e) {}

  const totalSimple = Object.values(getTodayProd()).reduce((s, v) => s + v, 0);
  if (totalSimple % 5 === 0 || amount < 0) sendToThingSpeak();

  renderForCurrentTab();
}

function renderForCurrentTab() {
  if (currentTab === 'today') renderTodayView();
  else if (currentTab === 'report') { renderReport(); renderReporteFinal(); }
}

// Migrar datos de localStorage a Firebase (1 vez)
function migrateFromLocal() {
  try {
    const saved = localStorage.getItem('pancalc_v2_production');
    if (saved && !localStorage.getItem('pancalc_migrated_prod')) {
      localStorage.setItem('pancalc_migrated_prod', '1');
      const data = JSON.parse(saved);
      if (data && typeof data === 'object' && Object.keys(data).length) {
        // Fusiona por día: no pisa días que ya existan en Firebase
        const updates = {};
        Object.keys(data).forEach(k => { updates['/' + k] = data[k]; });
        prodRef.update(updates);
      }
      localStorage.removeItem('pancalc_v2_production');
    }
    const savedBatch = localStorage.getItem('pancalc_batch');
    if (savedBatch && !localStorage.getItem('pancalc_migrated_batch')) {
      localStorage.setItem('pancalc_migrated_batch', '1');
      const data = JSON.parse(savedBatch);
      if (data && typeof data === 'object' && Object.keys(data).length) {
        const updates = {};
        Object.keys(data).forEach(k => { updates['/' + k] = data[k]; });
        batchRef.update(updates);
      }
      localStorage.removeItem('pancalc_batch');
    }
  } catch(e) {}
}

// Escuchar cambios en Firebase (tiempo real)
prodRef.on('value', snap => {
  production = snap.val() || {};
  saveCache('production', production);
  dbReady = true;
  if (pendingRender) { renderAll(); pendingRender = false; }
  else if (currentTab === 'today') renderTodayView();
  else if (currentTab === 'report') { renderReport(); renderReporteFinal(); }
});

// ============================
// RENDER
// ============================
function renderAll() {
  renderDate();
  renderTodayView();
  renderCalView();
  renderReport();
  renderReporteFinal();
  renderProduction();
  renderRawMaterials();
}

function switchReportSubtab(subtab) {
  document.querySelectorAll('.subtab').forEach(t => t.classList.toggle('active', t.dataset.subtab === subtab));
  document.querySelectorAll('.report-subview').forEach(v => v.classList.toggle('active', v.id === subtab));
  if (subtab === 'report-prod') renderReport();
  if (subtab === 'report-final') renderReporteFinal();
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
  const todayKey = getTodayKey();
  let totalTarget = 0, totalProduced = 0;

  let html = '';
  PRODUCTS.forEach(p => {
    const target = getTargetWithOrders(p, todayIdx, todayKey);
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

let selectedDateKey = getTodayKey();

function renderCalView() {
  document.getElementById('cal-date-picker').value = selectedDateKey;
  renderCalDetail();
}

function renderCalDetail() {
  const header = document.getElementById('cal-detail-header');
  const body = document.getElementById('cal-detail-body');
  const [y, m, d] = selectedDateKey.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = dt.toLocaleDateString('es-ES', opts);
  header.textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
  body.innerHTML = buildDayDetailHTML(selectedDateKey);
  renderOrders(selectedDateKey);
  document.getElementById('cal-add-order-btn').onclick = () => openAddOrderModal(selectedDateKey);
}

function selectCalDay(dateKey) {
  selectedDateKey = dateKey;
  document.getElementById('cal-date-picker').value = dateKey;
  renderCalDetail();
}

function prevDay() {
  const dt = new Date(selectedDateKey + 'T12:00:00');
  dt.setDate(dt.getDate() - 1);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, '0');
  const d = String(dt.getDate()).padStart(2, '0');
  selectCalDay(`${y}-${m}-${d}`);
}

function nextDay() {
  const dt = new Date(selectedDateKey + 'T12:00:00');
  dt.setDate(dt.getDate() + 1);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, '0');
  const d = String(dt.getDate()).padStart(2, '0');
  selectCalDay(`${y}-${m}-${d}`);
}

function buildDayDetailHTML(dateKey) {
  const [y, m, d] = dateKey.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  const dayIdx = (dt.getDay() + 6) % 7;
  const dayBatch = batchData[dateKey] || {};

  let totalTandas = 0, totalMermas = 0, totalNeto = 0;
  const rows = [];

  PRODUCTS.forEach(p => {
    const target = getTargetWithOrders(p, dayIdx, dateKey);
    if (target === 0) return;
    const pb = dayBatch[p.name];
    const tandas = pb ? calcTandaTotal(pb.tandas) : 0;
    const reciclaje = pb ? (pb.reciclaje || 0) : 0;
    const transformacion = pb ? (pb.transformacion || 0) : 0;
    const perdida = pb ? (pb.perdida || 0) : 0;
    const mermas = reciclaje + transformacion + perdida;
    const neto = Math.max(0, tandas - mermas);
    totalTandas += tandas;
    totalMermas += mermas;
    totalNeto += neto;
    rows.push({ name: p.name, target, tandas, reciclaje, transformacion, perdida, neto });
  });

  let html = rows.map(r => {
    const isDone = r.neto >= r.target;
    const remaining = Math.max(0, r.target - r.neto);
    return `
      <div class="report-row ${isDone ? 'done' : ''}">
        <span class="report-row-name">${r.name}</span>
        <span class="report-row-numbers">
          <span class="report-row-produced">${r.neto.toFixed(0)}</span>
          <span class="report-row-target"> / ${r.target.toFixed(1)}</span>
          <span style="color:#999;font-size:0.7rem"> (r:${r.reciclaje} t:${r.transformacion} p:${r.perdida})</span>
        </span>
        <span class="report-row-missing">${isDone ? '✅' : remaining.toFixed(1)}</span>
      </div>`;
  }).join('');

  return `
    <div style="display:flex;gap:6px;padding:6px 0;margin-bottom:8px">
      <div style="flex:1;background:#fff;border-radius:8px;padding:10px;text-align:center;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
        <strong style="display:block;font-size:1.1rem;color:#283618">${totalTandas.toFixed(0)}</strong>
        <span style="font-size:0.7rem;color:#999">Tandas</span>
      </div>
      <div style="flex:1;background:#fff;border-radius:8px;padding:10px;text-align:center;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
        <strong style="display:block;font-size:1.1rem;color:#9c6644">${totalMermas.toFixed(0)}</strong>
        <span style="font-size:0.7rem;color:#999">Mermas</span>
      </div>
      <div style="flex:1;background:#fff;border-radius:8px;padding:10px;text-align:center;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
        <strong style="display:block;font-size:1.1rem;color:#606c38">${totalNeto.toFixed(0)}</strong>
        <span style="font-size:0.7rem;color:#999">Neto</span>
      </div>
    </div>
  ` + (rows.length ? html : '<p style="text-align:center;color:#999;padding:16px;font-size:0.85rem">Sin productos para este día</p>');
}

function openDayModal(dateKey) {
  try {
    const [y, m, d] = dateKey.split('-').map(Number);
    const dt = new Date(y, m - 1, d);
    const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = dt.toLocaleDateString('es-ES', opts);
    document.getElementById('day-modal-header').textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
    document.getElementById('day-modal-body').innerHTML = buildDayDetailHTML(dateKey);
    document.getElementById('day-modal').classList.remove('hidden');
  } catch(e) {
    document.getElementById('day-modal-body').innerHTML = '<p style="text-align:center;color:#999;padding:20px">Error al cargar datos</p>';
    document.getElementById('day-modal').classList.remove('hidden');
  }
}

function closeDayModal() {
  document.getElementById('day-modal').classList.add('hidden');
}

// ============================
// GESTIÓN DE PRODUCTOS
// ============================
function loadProducts() {
  productsRef.once('value', snap => {
    const data = snap.val();
    if (data && data.length) {
      PRODUCTS = data;
    } else {
      productsRef.set(DEFAULT_PRODUCTS);
      PRODUCTS = [...DEFAULT_PRODUCTS];
    }
    saveCache('products', PRODUCTS);
    renderAll();
  });
}

function saveProducts() {
  productsRef.set(PRODUCTS);
  renderAll();
}

function openManageModal() {
  renderManageModal();
  renderIngredientList();
  switchManageSection('products');
  document.getElementById('manage-modal').classList.remove('hidden');
}

function switchManageSection(section) {
  document.getElementById('products-section').style.display = section === 'products' ? '' : 'none';
  document.getElementById('ingredients-section').style.display = section === 'ingredients' ? '' : 'none';
  document.getElementById('nav-products').classList.toggle('active', section === 'products');
  document.getElementById('nav-ingredients').classList.toggle('active', section === 'ingredients');
}

function closeManageModal() {
  document.getElementById('manage-modal').classList.add('hidden');
}

function renderManageModal() {
  const list = document.getElementById('manage-list');
  let html = '';
  PRODUCTS.forEach((p, i) => {
    const avg = DAY_KEYS.reduce((s, k) => s + (p[k] || 0), 0) / 7;
    html += `
      <div class="manage-item">
        <div class="manage-item-header" onclick="toggleManageEdit(${i})">
          <span class="manage-item-name">${p.name}</span>
          <span class="manage-item-avg">Prom: ${avg.toFixed(1)}</span>
          <button class="manage-delete-btn" onclick="event.stopPropagation(); deleteProduct(${i})">✕</button>
        </div>
        <div class="manage-edit" id="manage-edit-${i}">
          <input class="manage-name-input" id="manage-name-${i}" value="${p.name}" placeholder="Nombre">
          <div class="manage-day-grid">
            ${DAYS.map((d, di) => `
              <label>${d.slice(0,3)} <input type="number" id="manage-val-${i}-${di}" value="${p[DAY_KEYS[di]] || ''}" step="0.1" inputmode="decimal"></label>
            `).join('')}
          </div>
          <button class="manage-save-btn" onclick="saveProductEdit(${i})">Guardar</button>
        </div>
      </div>`;
  });
  list.innerHTML = html;
}

function toggleManageEdit(i) {
  const el = document.getElementById(`manage-edit-${i}`);
  el.classList.toggle('open');
}

function saveProductEdit(i) {
  const nameEl = document.getElementById(`manage-name-${i}`);
  const newName = nameEl.value.trim();
  if (!newName) return alert('El nombre no puede estar vacío');
  PRODUCTS[i].name = newName;
  DAY_KEYS.forEach((k, di) => {
    const val = parseFloat(document.getElementById(`manage-val-${i}-${di}`).value) || 0;
    PRODUCTS[i][k] = val;
  });
  PRODUCTS[i].avg = DAY_KEYS.reduce((s, k) => s + (PRODUCTS[i][k] || 0), 0) / 7;
  saveProducts();
  renderManageModal();
}

function addProduct() {
  const p = { name: "Nuevo producto" };
  DAY_KEYS.forEach(k => p[k] = 0);
  p.avg = 0;
  PRODUCTS.push(p);
  saveProducts();
  renderManageModal();
  setTimeout(() => {
    const last = PRODUCTS.length - 1;
    const editEl = document.getElementById(`manage-edit-${last}`);
    if (editEl) editEl.classList.add('open');
    const nameInput = document.getElementById(`manage-name-${last}`);
    if (nameInput) nameInput.focus();
  }, 100);
}

function deleteProduct(i) {
  if (!confirm(`¿Eliminar "${PRODUCTS[i].name}"?`)) return;
  PRODUCTS.splice(i, 1);
  saveProducts();
  renderManageModal();
}

function resetDefaultProducts() {
  if (!confirm('¿Restaurar productos por defecto? Se perderán los cambios.')) return;
  productsRef.set(DEFAULT_PRODUCTS);
  PRODUCTS = [...DEFAULT_PRODUCTS];
  saveProducts();
  renderManageModal();
}

// ============================
// GESTIÓN DE INSUMOS
// ============================
function saveIngredients() {
  ingredientsRef.set(INGREDIENTS);
}

function renderIngredientList() {
  const list = document.getElementById('manage-ingredients-list');
  let html = '';
  INGREDIENTS.forEach((ing, i) => {
    html += `
      <div class="manage-item">
        <div class="manage-item-header" onclick="toggleIngredientEdit(${i})">
          <span class="manage-item-name">${ing.name}</span>
          <button class="manage-delete-btn" onclick="event.stopPropagation(); deleteIngredient(${i})">✕</button>
        </div>
        <div class="manage-edit" id="manage-ingredient-edit-${i}">
          <input class="manage-name-input" id="manage-ingredient-name-${i}" value="${ing.name}" placeholder="Nombre del insumo">
          <button class="manage-save-btn" onclick="saveIngredientEdit(${i})">Guardar</button>
        </div>
      </div>`;
  });
  list.innerHTML = html;
}

function toggleIngredientEdit(i) {
  const el = document.getElementById(`manage-ingredient-edit-${i}`);
  el.classList.toggle('open');
}

function saveIngredientEdit(i) {
  const nameEl = document.getElementById(`manage-ingredient-name-${i}`);
  const newName = nameEl.value.trim();
  if (!newName) return alert('El nombre no puede estar vacío');
  INGREDIENTS[i].name = newName;
  saveIngredients();
  renderIngredientList();
  renderRawMaterials();
}

function addIngredient() {
  INGREDIENTS.push({ name: "Nuevo insumo" });
  saveIngredients();
  renderIngredientList();
  renderRawMaterials();
  setTimeout(() => {
    const last = INGREDIENTS.length - 1;
    const editEl = document.getElementById(`manage-ingredient-edit-${last}`);
    if (editEl) editEl.classList.add('open');
    const nameInput = document.getElementById(`manage-ingredient-name-${last}`);
    if (nameInput) nameInput.focus();
  }, 100);
}

function deleteIngredient(i) {
  if (!confirm(`¿Eliminar "${INGREDIENTS[i].name}"?`)) return;
  INGREDIENTS.splice(i, 1);
  saveIngredients();
  renderIngredientList();
  renderRawMaterials();
}

function renderReport() {
  const container = document.getElementById('report-product-list');
  const todayIdx = getDayIndex();
  const todayProd = getTodayProd();
  const todayKey = getTodayKey();

  // Date
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = new Date().toLocaleDateString('es-ES', opts);
  document.getElementById('report-date').textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);

  let totalTarget = 0, totalProduced = 0;

  const rows = [];
  PRODUCTS.forEach(p => {
    const target = getTargetWithOrders(p, todayIdx, todayKey);
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

function updateModalProgress() {
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

function modalAdd(amount) {
  addProduction(modalProductName, amount);
  updateModalProgress();
}

function modalSetValue() {
  const input = document.getElementById('modal-set-input');
  let value = parseFloat(input.value);
  if (isNaN(value) || value < 0) value = 0;

  // Fija el valor absoluto. .set() dispara evento local → la UI se actualiza
  // al instante. Como es un valor absoluto, el último que escribe manda (correcto).
  const ref = prodRef.child(getTodayKey()).child(modalProductName);
  if (value === 0) ref.remove();
  else ref.set(value);

  const todayProd = getTodayProd();
  if (value === 0) delete todayProd[modalProductName];
  else todayProd[modalProductName] = value;

  input.value = '';
  updateModalProgress();
  renderForCurrentTab();
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
  if (tab === 'week') { selectedDateKey = getTodayKey(); renderCalView(); }
  if (tab === 'report') renderReport();
  if (tab === 'production') renderProduction();
  if (tab === 'rawmaterials') renderRawMaterials();
}

// ============================
// PRODUCCIÓN (TANDAS)
// ============================
let batchData = {};
let orderData = {};
let rawmaterialsData = {};

function getTodayBatch() {
  const key = getTodayKey();
  if (!batchData[key]) batchData[key] = {};
  return batchData[key];
}

function getProductBatch(productName) {
  const day = getTodayBatch();
  if (!day[productName]) {
    day[productName] = { tandas: [{time:'',qty:0},{time:'',qty:0},{time:'',qty:0},{time:'',qty:0},{time:'',qty:0}], reciclaje: 0, transformacion: 0, perdida: 0 };
  }
  return day[productName];
}

function calcTandaTotal(tandas) {
  if (!Array.isArray(tandas)) return 0;
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

  document.getElementById('tanda-reciclaje-input').value = pb.reciclaje || 0;
  document.getElementById('tanda-transformacion-input').value = pb.transformacion || 0;
  document.getElementById('tanda-perdida-input').value = pb.perdida || 0;
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

  const reciclaje = parseFloat(document.getElementById('tanda-reciclaje-input').value) || 0;
  const transformacion = parseFloat(document.getElementById('tanda-transformacion-input').value) || 0;
  const perdida = parseFloat(document.getElementById('tanda-perdida-input').value) || 0;
  const totalMermas = reciclaje + transformacion + perdida;
  document.getElementById('tanda-neto').textContent = Math.max(0, total - totalMermas).toFixed(0);
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
  pb.reciclaje = parseFloat(document.getElementById('tanda-reciclaje-input').value) || 0;
  pb.transformacion = parseFloat(document.getElementById('tanda-transformacion-input').value) || 0;
  pb.perdida = parseFloat(document.getElementById('tanda-perdida-input').value) || 0;
  batchRef.child(getTodayKey()).child(editingProduct).set(pb);
  closeTandaModal();
  renderProduction();
  sendToThingSpeak();
}

function closeTandaModal() {
  document.getElementById('tanda-modal').classList.add('hidden');
}

function resetAllData() {
  if (!confirm('¿Borrar TODOS los datos de producción y tandas? Esta acción no se puede deshacer.')) return;
  if (!confirm('¿Seguro? Se perderá todo el registro del día.')) return;
  prodRef.set({});
  batchRef.set({});
  localStorage.removeItem('pancalc_v2_production');
  localStorage.removeItem('pancalc_batch');
}

// ============================
// PEDIDOS
// ============================
let editingOrderDate = '';

function openAddOrderModal(dateKey) {
  editingOrderDate = dateKey;
  document.getElementById('order-date').value = dateKey;
  document.getElementById('order-qty').value = '';
  document.getElementById('order-time').value = '';

  const select = document.getElementById('order-product');
  select.innerHTML = PRODUCTS.map(p => `<option value="${p.name.replace(/"/g,'&quot;')}">${p.name}</option>`).join('');
  document.getElementById('order-modal').classList.remove('hidden');
}

function saveOrder() {
  const dateKey = document.getElementById('order-date').value;
  const productName = document.getElementById('order-product').value;
  const qty = parseFloat(document.getElementById('order-qty').value) || 0;
  const time = document.getElementById('order-time').value;
  if (!productName || qty <= 0) return alert('Selecciona producto y cantidad válida');

  const orderId = Date.now().toString(36) + Math.random().toString(36).slice(2,5);
  const order = { productName, quantity: qty, deliveryTime: time, createdAt: Date.now() };

  ordersRef.child(dateKey).child(orderId).set(order);
  closeOrderModal();
}

function deleteOrder(dateKey, orderId) {
  if (!confirm('¿Eliminar este pedido?')) return;
  ordersRef.child(dateKey).child(orderId).remove();
}

function closeOrderModal() {
  document.getElementById('order-modal').classList.add('hidden');
}

function renderOrders(dateKey) {
  const list = document.getElementById('cal-orders-list');
  const orders = getOrdersForDate(dateKey);
  const keys = Object.keys(orders);
  if (!keys.length) {
    list.innerHTML = '<div class="cal-orders-empty">Sin pedidos para este día</div>';
    return;
  }
  let html = '';
  keys.forEach(id => {
    const o = orders[id];
    html += `
      <div class="cal-order-item">
        <div class="cal-order-info">
          <span class="cal-order-product">${o.productName}</span>
          <span class="cal-order-meta">${o.quantity} ud — ${o.deliveryTime || 'Sin hora'}</span>
        </div>
        <button class="cal-order-delete" onclick="deleteOrder('${dateKey}','${id}')">✕</button>
      </div>`;
  });
  list.innerHTML = html;
}

function renderProduction() {
  const container = document.getElementById('prod-product-list');
  const dateEl = document.getElementById('prod-date');
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = new Date().toLocaleDateString('es-ES', opts);
  dateEl.textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);

  const todayIdx = getDayIndex();
  const todayBatch = getTodayBatch();
  const todayKey = getTodayKey();

  let html = '';
  PRODUCTS.forEach(p => {
    const target = getTargetWithOrders(p, todayIdx, todayKey);
    if (target === 0) return;

    const pb = todayBatch[p.name];
    const total = pb ? calcTandaTotal(pb.tandas) : 0;
    const mermas = pb ? (pb.reciclaje || 0) + (pb.transformacion || 0) + (pb.perdida || 0) : 0;
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

// ============================
// MATERIA PRIMA
// ============================
function loadIngredients() {
  ingredientsRef.once('value', snap => {
    const data = snap.val();
    if (data && data.length) {
      INGREDIENTS = data;
    } else {
      ingredientsRef.set(DEFAULT_INGREDIENTES);
      INGREDIENTS = [...DEFAULT_INGREDIENTES];
    }
    saveCache('ingredients', INGREDIENTS);
    applyDailyCarryover();
  });
}

function getIngredientDayData(ingredientName) {
  const todayKey = getTodayKey();
  if (!rawmaterialsData[todayKey]) rawmaterialsData[todayKey] = {};
  const day = rawmaterialsData[todayKey];
  if (!day[ingredientName]) {
    day[ingredientName] = { total: 0, time: '', ingresos: [{time:'',qty:0},{time:'',qty:0},{time:'',qty:0},{time:'',qty:0},{time:'',qty:0}] };
  }
  if (typeof day[ingredientName] === 'number') {
    day[ingredientName] = { total: 0, time: '', ingresos: [{time:'',qty:0},{time:'',qty:0},{time:'',qty:0},{time:'',qty:0},{time:'',qty:0}] };
  }
  return day[ingredientName];
}

function calcIngresosTotal(ingresos) {
  if (!Array.isArray(ingresos)) return 0;
  return ingresos.reduce((s, t) => s + (parseFloat(t.qty) || 0), 0);
}

function getPreviousDayRestante(ingredientName) {
  const todayKey = getTodayKey();
  const dates = Object.keys(rawmaterialsData).sort().reverse();
  for (const dateKey of dates) {
    if (dateKey >= todayKey) continue;
    const id = rawmaterialsData[dateKey] && rawmaterialsData[dateKey][ingredientName];
    if (id === undefined || id === null) continue;
    const total = typeof id === 'number' ? id : (id.total || 0);
    const consumo = typeof id === 'number' ? 0 : calcIngresosTotal(id.ingresos);
    return Math.max(0, total - consumo);
  }
  return null;
}

function applyDailyCarryover() {
  const todayKey = getTodayKey();
  if (!rawmaterialsData[todayKey]) rawmaterialsData[todayKey] = {};
  const emptyIngresos = () => [{time:'',qty:0},{time:'',qty:0},{time:'',qty:0},{time:'',qty:0},{time:'',qty:0}];
  INGREDIENTS.forEach(ing => {
    const name = ing.name;
    if (rawmaterialsData[todayKey][name] !== undefined) return;
    const restante = getPreviousDayRestante(name);
    if (restante === null) return;
    const carry = { total: restante, time: '', ingresos: emptyIngresos() };
    rawmaterialsData[todayKey][name] = carry;
    // Escritura atómica por ingrediente: solo crea el carryover si aún no existe
    // (no pisa datos recién guardados por otro dispositivo con snapshot viejo)
    rawmaterialsRef.child(todayKey).child(name).transaction(current => {
      return (current === null || current === undefined) ? carry : undefined;
    });
  });
}

function renderRawMaterials() {
  const container = document.getElementById('rawmaterials-list');
  const dateEl = document.getElementById('rawmaterials-date');
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = new Date().toLocaleDateString('es-ES', opts);
  dateEl.textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);

  const todayKey = getTodayKey();
  const dayData = rawmaterialsData[todayKey] || {};

  let html = '';
  INGREDIENTS.forEach(ing => {
    const id = getIngredientDayData(ing.name);
    const ingresados = calcIngresosTotal(id.ingresos);
    const total = id.total || 0;
    const restante = Math.max(0, total - ingresados);
    const pct = total > 0 ? Math.min(100, (ingresados / total) * 100) : 0;
    const isDone = ingresados >= total && total > 0;
    const dashArray = pct.toFixed(0);

    html += `
      <div class="prod-card" onclick="openIngredientModal('${ing.name.replace(/'/g, "\\'")}')">
        <div class="prod-card-left">
          <div class="prod-card-name">${ing.name}</div>
          <div class="prod-card-stats">
            <span class="prod-card-stat">Consumo: <strong>${ingresados.toFixed(0)}</strong></span>
            <span class="prod-card-stat neto">Total: <strong>${restante.toFixed(0)}</strong></span>
            ${id.time ? `<span class="prod-card-stat time">Hora: <strong>${id.time}</strong></span>` : ''}
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

  container.innerHTML = html || '<div class="prod-empty">Sin ingredientes registrados</div>';
}

let ingredientModalName = '';

function openIngredientModal(name) {
  ingredientModalName = name;
  document.getElementById('ingredient-modal-name').textContent = name;

  const id = getIngredientDayData(name);
  const list = document.getElementById('ingreso-list');

  let html = '';
  id.ingresos.forEach((t, i) => {
    html += `
      <div class="tanda-row">
        <span class="tanda-row-label">Consumo ${i + 1}</span>
        <input type="time" id="ingreso-time-${i}" value="${t.time || ''}">
        <input type="number" id="ingreso-qty-${i}" min="0" value="${t.qty || ''}" inputmode="numeric" placeholder="Cant">
      </div>`;
  });
  list.innerHTML = html;

  document.getElementById('ingreso-total-input').value = id.total || 0;
  document.getElementById('ingreso-time-input').value = id.time || '';
  updateIngredientSummary();
  document.getElementById('ingredient-modal').classList.remove('hidden');

  for (let i = 0; i < 5; i++) {
    const qtyEl = document.getElementById(`ingreso-qty-${i}`);
    if (qtyEl) qtyEl.addEventListener('input', updateIngredientSummary);
  }

  setTimeout(() => {
    const firstTime = document.getElementById('ingreso-time-0');
    if (firstTime) firstTime.focus();
  }, 300);
}

function updateIngredientSummary() {
  let total = 0;
  for (let i = 0; i < 5; i++) {
    const qtyEl = document.getElementById(`ingreso-qty-${i}`);
    if (qtyEl) total += parseFloat(qtyEl.value) || 0;
  }
  document.getElementById('ingreso-sum').textContent = total.toFixed(0);

  const diario = parseFloat(document.getElementById('ingreso-total-input').value) || 0;
  document.getElementById('ingreso-restante').textContent = Math.max(0, diario - total).toFixed(0);
}

function saveIngredientIngresos() {
  const id = getIngredientDayData(ingredientModalName);
  for (let i = 0; i < 5; i++) {
    const timeEl = document.getElementById(`ingreso-time-${i}`);
    const qtyEl = document.getElementById(`ingreso-qty-${i}`);
    if (timeEl && qtyEl) {
      id.ingresos[i] = { time: timeEl.value, qty: parseFloat(qtyEl.value) || 0 };
    }
  }
  id.total = parseFloat(document.getElementById('ingreso-total-input').value) || 0;
  id.time = document.getElementById('ingreso-time-input').value;
  rawmaterialsRef.child(getTodayKey()).child(ingredientModalName).set(id);
  document.getElementById('ingredient-modal').classList.add('hidden');
  renderRawMaterials();
}

function closeIngredientModal() {
  document.getElementById('ingredient-modal').classList.add('hidden');
}

function renderReporteFinal() {
  const list = document.getElementById('report-final-list');
  const todayIdx = getDayIndex();
  const dayBatch = getTodayBatch();
  const todayKey = getTodayKey();

  let totalTandas = 0, totalMermas = 0, totalNeto = 0;

  const rows = [];
  PRODUCTS.forEach(p => {
    const target = getTargetWithOrders(p, todayIdx, todayKey);
    if (target === 0) return;

    const pb = dayBatch[p.name];
    const tandas = pb ? calcTandaTotal(pb.tandas) : 0;
    const reciclaje = pb ? (pb.reciclaje || 0) : 0;
    const transformacion = pb ? (pb.transformacion || 0) : 0;
    const perdida = pb ? (pb.perdida || 0) : 0;
    const mermas = reciclaje + transformacion + perdida;
    const neto = Math.max(0, tandas - mermas);

    totalTandas += tandas;
    totalMermas += mermas;
    totalNeto += neto;

    rows.push({ name: p.name, target, tandas, reciclaje, transformacion, perdida, neto });
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
          <span style="color:#999;font-size:0.7rem"> (r:${r.reciclaje} t:${r.transformacion} p:${r.perdida})</span>
        </span>
        <span class="report-row-missing">${isDone ? '✅' : Math.max(0, r.target - r.neto).toFixed(1)}</span>
      </div>`;
  }).join('');

  list.innerHTML = html;
}

// Escuchar cambios en batch (tiempo real)
batchRef.on('value', snap => {
  batchData = snap.val() || {};
  saveCache('batch', batchData);
  renderProduction();
  renderReporteFinal();
  renderAllViews();
});

// Escuchar cambios en pedidos
ordersRef.on('value', snap => {
  orderData = snap.val() || {};
  saveCache('orders', orderData);
  if (currentTab === 'week') renderCalView();
  renderAllViews();
});

// Escuchar cambios en materia prima
rawmaterialsRef.on('value', snap => {
  rawmaterialsData = snap.val() || {};
  saveCache('rawmaterials', rawmaterialsData);
  applyDailyCarryover();
  if (currentTab === 'rawmaterials') renderRawMaterials();
  renderAllViews();
});

function renderAllViews() {
  if (currentTab === 'week') renderCalView();
  if (currentTab === 'report') {
    renderReport();
    renderReporteFinal();
  }
  if (currentTab === 'production') renderProduction();
  if (currentTab === 'rawmaterials') renderRawMaterials();
}

// ============================
// IMPRIMIR
// ============================
function openPrintModal() {
  document.getElementById('print-modal').classList.remove('hidden');
}

function closePrintModal() {
  document.getElementById('print-modal').classList.add('hidden');
}

function printReport(type) {
  closePrintModal();
  const todayIdx = getDayIndex();
  const todayProd = getTodayProd();
  const todayBatch = getTodayBatch();
  const todayKey = getTodayKey();
  const dateOpts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = new Date().toLocaleDateString('es-ES', dateOpts);

  const isElab = type === 'elaboracion';
  const title = isElab ? 'Reporte de Elaboración' : 'Reporte Final';

  let rowsHtml = '';
  let totalTarget = 0, total1 = 0, total2 = 0, total3 = 0;

  PRODUCTS.forEach(p => {
    const target = getTargetWithOrders(p, todayIdx, todayKey);
    if (target === 0) return;
    totalTarget += target;

    if (isElab) {
      const produced = todayProd[p.name] || 0;
      total1 += produced;
      const falta = Math.max(0, target - produced);
      rowsHtml += `<tr><td>${p.name}</td><td class="num">${target.toFixed(1)}</td><td class="num">${produced.toFixed(0)}</td><td class="num">${falta.toFixed(1)}</td></tr>`;
    } else {
      const pb = todayBatch[p.name];
      const tandas = pb ? calcTandaTotal(pb.tandas) : 0;
      const mermas = pb ? (pb.reciclaje || 0) + (pb.transformacion || 0) + (pb.perdida || 0) : 0;
      const neto = Math.max(0, tandas - mermas);
      total1 += tandas; total2 += mermas; total3 += neto;
      rowsHtml += `<tr><td>${p.name}</td><td class="num">${target.toFixed(1)}</td><td class="num">${tandas.toFixed(0)}</td><td class="num">${mermas.toFixed(0)}</td><td class="num">${neto.toFixed(0)}</td></tr>`;
    }
  });

  const w = window.open('', '_blank');
  const cols = isElab
    ? `<th>Producto</th><th>Meta</th><th>Producido</th><th>Faltan</th>`
    : `<th>Producto</th><th>Meta</th><th>Tandas</th><th>Mermas</th><th>Neto</th>`;
  const totalRow = isElab
    ? `<tr class="total"><td>TOTAL</td><td class="num">${totalTarget.toFixed(1)}</td><td class="num">${total1.toFixed(0)}</td><td class="num">${Math.max(0,totalTarget-total1).toFixed(1)}</td></tr>`
    : `<tr class="total"><td>TOTAL</td><td class="num">${totalTarget.toFixed(1)}</td><td class="num">${total1.toFixed(0)}</td><td class="num">${total2.toFixed(0)}</td><td class="num">${total3.toFixed(0)}</td></tr>`;

  // Orders section
  const orders = getOrdersForDate(todayKey);
  const orderKeys = Object.keys(orders);
  let ordersHtml = '';
  if (orderKeys.length) {
    ordersHtml = '<h2 style="font-size:1rem;margin:20px 0 8px;color:#9c6644">📦 Pedidos del día</h2><table><thead><tr><th>Producto</th><th>Cantidad</th><th>Entrega</th></tr></thead><tbody>';
    orderKeys.forEach(id => {
      const o = orders[id];
      ordersHtml += `<tr><td>${o.productName}</td><td class="num">${o.quantity}</td><td class="num">${o.deliveryTime || '—'}</td></tr>`;
    });
    ordersHtml += '</tbody></table>';
  }

  w.document.write(`
    <!DOCTYPE html><html><head><meta charset="UTF-8"><title>${title} - PanCalc</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: 'Segoe UI', Arial, sans-serif; padding: 30px; color: #222; }
      h1 { font-size: 1.3rem; color: #bc6c25; margin-bottom: 2px; }
      .sub { color: #666; font-size: 0.85rem; margin-bottom: 20px; }
      table { width: 100%; border-collapse: collapse; font-size: 0.8rem; }
      th { background: #283618; color: #fff; padding: 8px 6px; text-align: left; }
      th:first-child { border-radius: 6px 0 0 0; }
      th:last-child { border-radius: 0 6px 0 0; }
      td { padding: 5px 6px; border-bottom: 1px solid #e0e0e0; }
      .num { text-align: right; font-weight: 600; }
      .total td { font-weight: 800; background: #fefae0; border-top: 2px solid #283618; padding-top: 8px; }
      @media print { body { padding: 15px; } }
    </style></head><body>
    <h1>${title}</h1>
    <div class="sub">${dateStr.charAt(0).toUpperCase() + dateStr.slice(1)}</div>
    <table><thead><tr>${cols}</tr></thead><tbody>${rowsHtml}${totalRow}</tbody></table>
    ${ordersHtml}
    <p style="text-align:center;color:#999;margin-top:30px;font-size:0.75rem">PanCalc — usa Imprimir o RawBT para generar el PDF</p>
    </body></html>`);
  w.document.close();
}

// ============================
// THINGSPEAK INTEGRATION
// ============================
// Cambia estos valores por los de tu canal:
const TS_CHANNEL_ID = 'XXXXXX';        // Tu Channel ID
const TS_WRITE_KEY  = 'XXXXXXXXXXXX';  // Tu Write API Key
const TS_URL = `https://api.thingspeak.com/update?api_key=${TS_WRITE_KEY}`;

function sendToThingSpeak() {
  const todayIdx = getDayIndex();
  const todayProd = getTodayProd();
  const todayBatch = getTodayBatch();
  const todayKey = getTodayKey();

  let totalTarget = 0, totalProduced = 0;
  let totalTandas = 0, totalMermas = 0, totalNeto = 0;

  PRODUCTS.forEach(p => {
    const target = getTargetWithOrders(p, todayIdx, todayKey);
    if (target === 0) return;
    totalTarget += target;
    totalProduced += todayProd[p.name] || 0;

    const pb = todayBatch[p.name];
    const tandas = pb ? calcTandaTotal(pb.tandas) : 0;
    const mermas = pb ? (pb.reciclaje || 0) + (pb.transformacion || 0) + (pb.perdida || 0) : 0;
    totalTandas += tandas;
    totalMermas += mermas;
    totalNeto += Math.max(0, tandas - mermas);
  });

  const faltan = Math.max(0, totalTarget - totalProduced);
  const pct = totalTarget > 0 ? Math.round((totalProduced / totalTarget) * 100) : 0;

  const params = new URLSearchParams({
    field1: totalTarget.toFixed(1),    // Meta total del día
    field2: totalProduced.toFixed(0),  // Producido (simple)
    field3: faltan.toFixed(1),         // Faltan
    field4: totalTandas.toFixed(0),    // Total tandas
    field5: totalMermas.toFixed(0),    // Mermas
    field6: totalNeto.toFixed(0),      // Neto (tandas - mermas)
    field7: pct.toFixed(0),            // % progreso
    field8: new Date().toLocaleDateString('es-ES'), // Fecha
  });

  fetch(`${TS_URL}&${params.toString()}`)
    .then(r => console.log('ThingSpeak:', r.ok ? 'OK' : 'Error ' + r.status))
    .catch(e => console.log('ThingSpeak error:', e));
}

// Llama a sendToThingSpeak() donde quieras enviar los datos.
// Por ahora se envía al guardar tandas y al añadir producción simple.
// ============================
// EVENTS
// ============================
document.addEventListener('DOMContentLoaded', () => {
  migrateFromLocal();

  // Restaurar datos guardados localmente (sobreviven a la recarga, incluso offline)
  const hadCache = restoreFromCache();

  // Cargar productos desde Firebase
  loadProducts();
  loadIngredients();

  // Si Firebase ya cargó datos o hay caché, renderiza; sino espera el listener
  if (dbReady || hadCache) renderAll();
  else pendingRender = true;

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

  // Date picker navigation
  document.getElementById('cal-prev-day').addEventListener('click', prevDay);
  document.getElementById('cal-next-day').addEventListener('click', nextDay);
  document.getElementById('cal-date-picker').addEventListener('change', e => {
    if (e.target.value) selectCalDay(e.target.value);
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

  // Gestión de productos
  document.getElementById('btn-manage').addEventListener('click', openManageModal);
  document.getElementById('manage-close').addEventListener('click', closeManageModal);
  document.getElementById('manage-add-btn').addEventListener('click', addProduct);
  document.getElementById('manage-add-ingredient-btn').addEventListener('click', addIngredient);

  // Imprimir
  document.getElementById('btn-print').addEventListener('click', openPrintModal);
  document.getElementById('print-modal-close').addEventListener('click', closePrintModal);

  // Pedidos
  document.getElementById('order-modal-close').addEventListener('click', closeOrderModal);
  document.getElementById('order-save-btn').addEventListener('click', saveOrder);

  // Modal Día
  document.getElementById('day-modal-close').addEventListener('click', closeDayModal);

  // Modal Tandas
  document.getElementById('tanda-modal-close').addEventListener('click', closeTandaModal);
  document.getElementById('tanda-reciclaje-input').addEventListener('input', updateTandaSummary);
  document.getElementById('tanda-transformacion-input').addEventListener('input', updateTandaSummary);
  document.getElementById('tanda-perdida-input').addEventListener('input', updateTandaSummary);
  document.getElementById('tanda-list').addEventListener('input', updateTandaSummary);

  // Modal Ingrediente
  document.getElementById('ingredient-modal-close').addEventListener('click', closeIngredientModal);
  document.getElementById('ingreso-total-input').addEventListener('input', updateIngredientSummary);

  // Keyboard escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeTandaModal(); closeDayModal(); closeManageModal(); closePrintModal(); closeOrderModal(); closeIngredientModal(); }
  });

  renderAll();
});
