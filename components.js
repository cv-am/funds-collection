// =============================================
// COMPONENTS — Reusable UI Elements
// =============================================

// ── Haiti Flag SVG ────────────────────────────
function HaitiFlag({ size = 48, className = '' }) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="${size}" height="${size * 0.667}" class="${className}" role="img" aria-label="Haiti Flag">
      <rect width="900" height="300" fill="#00209F"/>
      <rect y="300" width="900" height="300" fill="#D21034"/>
      <rect x="325" y="200" width="250" height="200" fill="white"/>
      <!-- Palm tree simplified -->
      <rect x="437" y="250" width="6" height="100" fill="#5D4037"/>
      <ellipse cx="440" cy="255" rx="30" ry="15" fill="#2E7D32" transform="rotate(-15,440,255)"/>
      <ellipse cx="440" cy="255" rx="25" ry="12" fill="#388E3C" transform="rotate(15,440,255)"/>
      <ellipse cx="440" cy="255" rx="20" ry="10" fill="#43A047"/>
      <!-- Cannons simplified -->
      <rect x="335" y="355" width="50" height="18" rx="4" fill="#616161"/>
      <rect x="515" y="355" width="50" height="18" rx="4" fill="#616161"/>
      <!-- Flags on palm -->
      <rect x="443" y="248" width="25" height="14" fill="#D21034"/>
      <rect x="443" y="248" width="25" height="7" fill="#00209F"/>
      <!-- Ground -->
      <rect x="330" y="370" width="240" height="8" rx="3" fill="#795548"/>
      <!-- Cannonballs -->
      <circle cx="355" cy="358" r="6" fill="#424242"/>
      <circle cx="545" cy="358" r="6" fill="#424242"/>
    </svg>`;
}

// ── Haiti Emblem SVG ──────────────────────────
function HaitiEmblem({ size = 80, className = '' }) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="${size}" height="${size}" class="${className}" role="img" aria-label="Haiti Coat of Arms">
      <defs>
        <radialGradient id="emblemGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1A3BBF"/>
          <stop offset="100%" stop-color="#00209F"/>
        </radialGradient>
      </defs>
      <!-- Shield outline -->
      <path d="M100 15 L185 50 L185 120 Q185 165 100 190 Q15 165 15 120 L15 50 Z" fill="url(#emblemGrad)" stroke="#D21034" stroke-width="4"/>
      <!-- Flag stripes on shield -->
      <clipPath id="shieldClip">
        <path d="M100 15 L185 50 L185 120 Q185 165 100 190 Q15 165 15 120 L15 50 Z"/>
      </clipPath>
      <rect x="15" y="15" width="170" height="87" fill="#00209F" clip-path="url(#shieldClip)"/>
      <rect x="15" y="102" width="170" height="88" fill="#D21034" clip-path="url(#shieldClip)"/>
      <!-- White center panel -->
      <rect x="70" y="75" width="60" height="55" fill="white" rx="3" clip-path="url(#shieldClip)"/>
      <!-- Palm tree on white panel -->
      <rect x="98" y="90" width="4" height="30" fill="#5D4037"/>
      <ellipse cx="100" cy="92" rx="14" ry="7" fill="#2E7D32" transform="rotate(-10,100,92)"/>
      <ellipse cx="100" cy="92" rx="12" ry="6" fill="#43A047" transform="rotate(10,100,92)"/>
      <!-- Cannons -->
      <rect x="74" y="120" width="22" height="7" rx="2" fill="#757575"/>
      <rect x="104" y="120" width="22" height="7" rx="2" fill="#757575"/>
      <!-- Stars above shield -->
      <text x="100" y="60" text-anchor="middle" font-size="8" fill="#FFD700">★ ★ ★ ★ ★ ★</text>
      <!-- Banner below -->
      <path d="M30 165 Q100 180 170 165 L175 175 Q100 195 25 175 Z" fill="#D21034"/>
      <text x="100" y="176" text-anchor="middle" font-size="7" fill="white" font-weight="bold">L'UNION FAIT LA FORCE</text>
      <!-- Wreath elements -->
      <path d="M20 100 Q10 80 25 60" stroke="#2E7D32" stroke-width="4" fill="none"/>
      <path d="M180 100 Q190 80 175 60" stroke="#2E7D32" stroke-width="4" fill="none"/>
      <circle cx="20" cy="100" r="5" fill="#2E7D32"/>
      <circle cx="180" cy="100" r="5" fill="#2E7D32"/>
    </svg>`;
}

// ── Navbar ────────────────────────────────────
function renderNavbar() {
  const user = window.APP.getCurrentUser();
  const isAuth = !!user;
  const lang = window.APP.get('language') || 'en';

  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  navbar.innerHTML = `
    <div class="navbar-top">
      <div class="container navbar-top-inner">
        <button class="lang-btn ${lang === 'ht' ? 'active' : ''}" onclick="setLanguage('ht')">🇭🇹 Kreyòl</button>
        <button class="lang-btn ${lang === 'fr' ? 'active' : ''}" onclick="setLanguage('fr')">🇫🇷 Français</button>
        <button class="lang-btn ${lang === 'en' ? 'active' : ''}" onclick="setLanguage('en')">🇺🇸 English</button>
      </div>
    </div>
    <div class="navbar-main">
      <div class="container navbar-main-inner">
        <a href="index.html" class="navbar-brand" id="nav-home-link">
          ${HaitiEmblem({ size: 44 })}
          <div class="navbar-brand-text">
            <h1>Fon Nasyonal Ayiti</h1>
            <p>National Investment Fund of Haiti</p>
          </div>
        </a>
        <button class="hamburger" id="hamburger-btn" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="nav-links-list">
          <li><a href="news.html" id="nav-news-link">📰 ${t('nav_news')}</a></li>
          <li><a href="contact.html" id="nav-contact-link">✉️ ${t('nav_contact')}</a></li>
          <li>
            <button onclick="sharePortal()" class="">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              ${t('nav_share')}
            </button>
          </li>
          ${isAuth ? `
            <li class="dropdown" id="account-dropdown">
              <button>👤 ${t('nav_myaccount')} ▾</button>
              <div class="dropdown-menu">
                <a href="dashboard.html">📊 My Dashboard</a>
                <a href="dashboard.html" onclick="openEditProfile()">✏️ Edit Profile</a>
                <hr style="margin:4px 0;border:none;border-top:1px solid #f1f5f9">
                <a href="payment.html">💳 Make Investment</a>
              </div>
            </li>
            <li><button class="btn-logout" onclick="handleLogout()">🚪 ${t('nav_logout')}</button></li>
          ` : `
            <li><button class="btn-login" onclick="window.location.href='login.html'" id="nav-login-btn">${t('nav_login')}</button></li>
          `}
        </ul>
      </div>
    </div>`;

  // Hamburger
  const hamburger = document.getElementById('hamburger-btn');
  const navList = document.getElementById('nav-links-list');
  if (hamburger && navList) {
    hamburger.addEventListener('click', () => navList.classList.toggle('open'));
  }
}

function setLanguage(lang) {
  window.APP.set('language', lang);
  renderNavbar();
  if (typeof renderPageContent === 'function') renderPageContent();
}

function handleLogout() {
  window.APP.logout();
  toast('You have been logged out.', 'info');
  setTimeout(() => window.location.href = 'index.html', 800);
}

function sharePortal() {
  if (navigator.share) {
    navigator.share({ title: 'Haiti National Investment Fund', url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => toast('Link copied to clipboard!', 'info'));
  }
}

// ── Footer ────────────────────────────────────
function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          ${HaitiEmblem({ size: 48 })}
          <h3 style="margin-top:12px">Fon Nasyonal Ayiti</h3>
          <p>Haiti National Investment Fund — A government-backed initiative to rebuild Haiti's economic future through diaspora and international investment.</p>
          <div style="display:flex;gap:8px;margin-top:16px">
            ${HaitiFlag({ size: 36 })}
          </div>
        </div>
        <div class="footer-col">
          <h4>Portal</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="register.html">Register</a></li>
            <li><a href="dashboard.html">My Dashboard</a></li>
            <li><a href="payment.html">Make Investment</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Information</h4>
          <ul>
            <li><a href="news.html">News & Updates</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@haiti-fund.gov.ht">info@haiti-fund.gov.ht</a></li>
            <li><a href="tel:+50933000000">+509 3300-0000</a></li>
            <li><a href="#">Port-au-Prince, Haiti</a></li>
            <li><a href="#">Ministère des Finances</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 République d'Haïti — Fon Nasyonal Ayiti. All rights reserved.</p>
        <div style="display:flex;align-items:center;gap:12px">
          <span style="font-size:0.75rem;color:rgba(255,255,255,0.3)">Prototype v1.0</span>
          <button class="admin-trigger" onclick="window.location.href='admin.html'" title="Admin">⚙</button>
        </div>
      </div>
    </div>`;
}

// ── News Panel ────────────────────────────────
function renderNewsPanel(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const news = window.APP.get('news') || [];

  container.innerHTML = `
    <div class="news-panel">
      <div class="news-panel-header">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
        <h3>${t('news_panel_title')}</h3>
      </div>
      ${news.map(item => `
        <div class="news-item">
          <div class="news-date">${formatDate(item.date)}${item.isNew ? '<span class="news-badge">NEW</span>' : ''}</div>
          <div class="news-title">${item.title}</div>
          <div class="news-excerpt">${item.excerpt}</div>
        </div>
      `).join('')}
    </div>`;
}

// ── Amount Tiles ──────────────────────────────
const AMOUNT_RANGES = [
  { id: 'r1', label: '$20 – $200',     min: 20,   max: 200,   placeholder: 'e.g. $100' },
  { id: 'r2', label: '$300 – $500',    min: 300,  max: 500,   placeholder: 'e.g. $400' },
  { id: 'r3', label: '$600 – $800',    min: 600,  max: 800,   placeholder: 'e.g. $700' },
  { id: 'r4', label: '$900 – $1,000',  min: 900,  max: 1000,  placeholder: 'e.g. $950' },
  { id: 'r5', label: '$1,100 – $5,000', min: 1100, max: 5000, placeholder: 'e.g. $2,500' },
  { id: 'r6', label: '$5,100+',        min: 5100, max: null,  placeholder: 'e.g. $10,000' }
];

function renderAmountTiles(containerId, selectedId = null, selectedAmount = '') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="amount-grid" id="amount-grid">
      ${AMOUNT_RANGES.map(range => `
        <div class="amount-tile ${selectedId === range.id ? 'selected' : ''}"
             data-range-id="${range.id}" data-range-label="${range.label}"
             onclick="selectAmountTile('${range.id}', '${range.label}')">
          <div class="tile-check">
            ${selectedId === range.id ? `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
          </div>
          <span class="tile-range">${range.label}</span>
          <input type="number" class="tile-input" id="amount-input-${range.id}"
            placeholder="${range.placeholder}"
            value="${selectedId === range.id && selectedAmount ? selectedAmount : ''}"
            min="${range.min}" ${range.max ? `max="${range.max}"` : ''}
            onclick="event.stopPropagation()"
            oninput="onAmountInput('${range.id}', '${range.label}', this.value)">
        </div>
      `).join('')}
    </div>`;
}

let _selectedTileId = null;
let _selectedAmount = '';
let _selectedLabel  = '';

function selectAmountTile(rangeId, rangeLabel) {
  _selectedTileId = rangeId;
  _selectedLabel  = rangeLabel;
  const inputVal = document.getElementById(`amount-input-${rangeId}`);
  _selectedAmount = inputVal ? inputVal.value : '';
  renderAmountTiles('amount-tiles-container', rangeId, _selectedAmount);
  if (typeof onAmountSelected === 'function') onAmountSelected(rangeId, rangeLabel, _selectedAmount);
}

function onAmountInput(rangeId, rangeLabel, value) {
  _selectedTileId = rangeId;
  _selectedLabel  = rangeLabel;
  _selectedAmount = value;
  // Update tile selected state without full re-render
  document.querySelectorAll('.amount-tile').forEach(tile => {
    tile.classList.toggle('selected', tile.dataset.rangeId === rangeId);
    const check = tile.querySelector('.tile-check');
    if (tile.dataset.rangeId === rangeId) {
      check.innerHTML = value ? `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>` : '';
    } else {
      check.innerHTML = '';
    }
  });
  if (typeof onAmountSelected === 'function') onAmountSelected(rangeId, rangeLabel, value);
}

// ── DataTable Component ────────────────────────
class DataTable {
  constructor(containerId, columns, data, options = {}) {
    this.containerId = containerId;
    this.columns = columns;
    this.data = data;
    this.filtered = [...data];
    this.sortKey = null;
    this.sortDir = 'asc';
    this.options = { actions: true, ...options };
    this.render();
  }

  sort(key) {
    if (this.sortKey === key) this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    else { this.sortKey = key; this.sortDir = 'asc'; }
    this.filtered.sort((a, b) => {
      const av = a[key] ?? ''; const bv = b[key] ?? '';
      return this.sortDir === 'asc' ? (av > bv ? 1 : -1) : (av < bv ? 1 : -1);
    });
    this.render();
  }

  filter(query) {
    const q = query.toLowerCase();
    this.filtered = this.data.filter(row =>
      Object.values(row).some(v => String(v).toLowerCase().includes(q))
    );
    this.render();
  }

  setData(data) {
    this.data = data;
    this.filtered = [...data];
    this.render();
  }

  render() {
    const container = document.getElementById(this.containerId);
    if (!container) return;
    container.innerHTML = `
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              ${this.columns.map(col => `
                <th class="${this.sortKey === col.key ? 'sorted' : ''}"
                    onclick="window._tables['${this.containerId}'].sort('${col.key}')">
                  ${col.label}
                  <span class="sort-icon">${this.sortKey === col.key ? (this.sortDir === 'asc' ? '↑' : '↓') : '↕'}</span>
                </th>
              `).join('')}
              ${this.options.actions ? '<th>Actions</th>' : ''}
            </tr>
          </thead>
          <tbody>
            ${this.filtered.length === 0 ? `
              <tr><td colspan="${this.columns.length + (this.options.actions ? 1 : 0)}" style="text-align:center;color:var(--gray-400);padding:40px">
                No records found
              </td></tr>
            ` : this.filtered.map(row => `
              <tr>
                ${this.columns.map(col => `<td>${col.render ? col.render(row) : (row[col.key] ?? '—')}</td>`).join('')}
                ${this.options.actions ? `
                  <td>
                    <div class="action-row">
                      <button class="btn btn-sm btn-outline" onclick="openContactModal('${row.id}', '${(row.firstName + ' ' + row.lastName).replace(/'/g,"\\'")}', '${row.email}')">
                        ✉️ Contact
                      </button>
                    </div>
                  </td>
                ` : ''}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div style="padding:12px 16px;color:var(--gray-400);font-size:0.8rem;border-top:1px solid var(--gray-100)">
        Showing ${this.filtered.length} of ${this.data.length} records
      </div>`;
    window._tables = window._tables || {};
    window._tables[this.containerId] = this;
  }
}

// ── Mini Bar Chart ────────────────────────────
function renderMiniChart(containerId, data, color1 = '#00209F', color2 = '#D21034') {
  const container = document.getElementById(containerId);
  if (!container) return;
  const max = Math.max(...data.map(d => d.value));
  const sliced = data.slice(-14);

  container.innerHTML = `
    <div class="chart-bar-container" style="height:80px">
      ${sliced.map((d, i) => `
        <div class="chart-bar" title="${d.label}: ${d.value}"
          style="height:${Math.max(4, (d.value / max) * 80)}px;background:${i % 2 === 0 ? color1 : color2};opacity:0.85">
        </div>
      `).join('')}
    </div>
    <div class="chart-labels">
      ${sliced.filter((_, i) => i % 3 === 0).map(d => `<span class="chart-label" style="flex:3">${d.label}</span>`).join('')}
    </div>`;
}

// ── Profile Summary Card ───────────────────────
function renderProfileSummary(containerId, investor) {
  const container = document.getElementById(containerId);
  if (!container || !investor) return;
  container.innerHTML = `
    <div class="profile-summary">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
        <h3>👤 Investor Profile</h3>
        <span class="badge ${investor.status === 'confirmed' ? 'badge-green' : 'badge-yellow'}">
          ${investor.status === 'confirmed' ? '✅ Confirmed' : '⏳ Potential'}
        </span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Full Name</span>
        <span class="profile-value">${investor.firstName} ${investor.lastName}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Investor ID</span>
        <span class="profile-value" style="font-family:monospace;letter-spacing:2px">#${investor.id}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Email</span>
        <span class="profile-value">${investor.email}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">WhatsApp</span>
        <span class="profile-value">${investor.whatsapp}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Investment Range</span>
        <span class="profile-value">${investor.amountRange}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Amount Pledged</span>
        <span class="profile-value" style="color:#93C5FD">${formatCurrency(investor.exactAmount)}</span>
      </div>
      ${investor.totalInvested > 0 ? `
      <div class="profile-row">
        <span class="profile-label">Total Invested</span>
        <span class="profile-value" style="color:#86EFAC">${formatCurrency(investor.totalInvested)}</span>
      </div>` : ''}
      <div class="profile-row">
        <span class="profile-label">Registered</span>
        <span class="profile-value">${formatDate(investor.registeredAt)}</span>
      </div>
    </div>`;
}

// ── Contact / Message Modal ───────────────────
function openContactModal(investorId, name, email) {
  const existing = document.getElementById('contact-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'contact-modal';
  modal.innerHTML = `
    <div class="modal-box">
      <div class="modal-header">
        <h3 style="font-size:1.1rem">✉️ Contact Investor</h3>
        <button class="modal-close" onclick="document.getElementById('contact-modal').remove()">✕</button>
      </div>
      <div class="modal-body">
        <div class="form-group" style="margin-bottom:14px">
          <label class="form-label">To</label>
          <input class="form-control" value="${name} &lt;${email}&gt;" readonly>
        </div>
        <div class="form-group" style="margin-bottom:14px">
          <label class="form-label">Send via</label>
          <div style="display:flex;gap:8px">
            <button class="btn btn-sm btn-outline" onclick="selectChannel(this,'email')">📧 Email</button>
            <button class="btn btn-sm btn-outline" onclick="selectChannel(this,'whatsapp')">💬 WhatsApp</button>
          </div>
        </div>
        <div class="form-group" style="margin-bottom:14px">
          <label class="form-label">Subject</label>
          <input class="form-control" id="msg-subject" placeholder="Re: Your Investment Application" value="Update on Your Investment Application">
        </div>
        <div class="form-group">
          <label class="form-label">Message</label>
          <textarea class="compose-textarea" id="msg-body" rows="5">Dear ${name},\n\nThank you for your interest in the Haiti National Investment Fund. We would like to follow up with you regarding your investment application.\n\nBest regards,\nThe Haiti Investment Fund Team</textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-ghost" onclick="document.getElementById('contact-modal').remove()">Cancel</button>
        <button class="btn btn-primary" onclick="sendMessage('${investorId}')">📤 Send Message</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

function openBulkContactModal() {
  const existing = document.getElementById('bulk-contact-modal');
  if (existing) existing.remove();
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'bulk-contact-modal';
  const stats = window.APP.getStats();
  modal.innerHTML = `
    <div class="modal-box">
      <div class="modal-header">
        <h3 style="font-size:1.1rem">📢 Contact All Investors</h3>
        <button class="modal-close" onclick="document.getElementById('bulk-contact-modal').remove()">✕</button>
      </div>
      <div class="modal-body">
        <div style="background:#FEF3C7;border-radius:8px;padding:12px;margin-bottom:16px;font-size:0.85rem;color:#92400E">
          ⚠️ This will send a message to <strong>${stats.confirmed + stats.potential} investors</strong> (${stats.confirmed} confirmed + ${stats.potential} potential).
        </div>
        <div class="form-group" style="margin-bottom:14px">
          <label class="form-label">Send via</label>
          <div style="display:flex;gap:8px">
            <button class="btn btn-sm btn-outline" onclick="selectChannel(this,'email')">📧 Email</button>
            <button class="btn btn-sm btn-outline" onclick="selectChannel(this,'whatsapp')">💬 WhatsApp</button>
            <button class="btn btn-sm btn-outline" onclick="selectChannel(this,'both')">📬 Both</button>
          </div>
        </div>
        <div class="form-group" style="margin-bottom:14px">
          <label class="form-label">Subject</label>
          <input class="form-control" id="bulk-subject" value="Important Update: Haiti National Investment Fund">
        </div>
        <div class="form-group">
          <label class="form-label">Message</label>
          <textarea class="compose-textarea" id="bulk-body" rows="6">Dear Investor,\n\nWe have an important update regarding the Haiti National Investment Fund.\n\nThank you for your continued support.\n\nBest regards,\nThe Haiti Investment Fund Team</textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-ghost" onclick="document.getElementById('bulk-contact-modal').remove()">Cancel</button>
        <button class="btn btn-red" onclick="sendBulkMessage()">📤 Send to All</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

function selectChannel(btn, channel) {
  btn.closest('div').querySelectorAll('button').forEach(b => b.classList.remove('btn-primary'));
  btn.classList.add('btn-primary');
}

function sendMessage(investorId) {
  toast('✅ Message sent successfully!', 'success');
  document.getElementById('contact-modal')?.remove();
}

function sendBulkMessage() {
  toast('✅ Bulk message sent to all investors!', 'success');
  document.getElementById('bulk-contact-modal')?.remove();
}

// ── QR Code Visual ────────────────────────────
function renderQRCode(containerId, value) {
  const container = document.getElementById(containerId);
  if (!container) return;
  // Generate a pseudo-QR pattern from the value string
  const seed = value.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const pattern = [];
  for (let i = 0; i < 49; i++) {
    const isCorner = (i < 3 || i > 45) || (i % 7 < 3 || i % 7 > 4);
    const r = ((seed * (i + 1)) % 97) > 48;
    pattern.push(isCorner || r ? 'b' : 'w');
  }
  container.innerHTML = `
    <div class="qr-placeholder" style="width:96px;height:96px">
      <div class="qr-grid">
        ${pattern.map(c => `<div class="qr-cell ${c}"></div>`).join('')}
      </div>
    </div>
    <p style="font-size:0.65rem;color:var(--gray-400);margin-top:4px;text-align:center">Scan to verify</p>`;
}

// ── Step Indicator ────────────────────────────
function renderSteps(containerId, steps, currentStep) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="steps">
      ${steps.map((step, i) => {
        const idx = i + 1;
        const state = idx < currentStep ? 'completed' : idx === currentStep ? 'active' : 'pending';
        return `
          ${i > 0 ? `<div class="step-line ${idx <= currentStep ? 'completed' : ''}"></div>` : ''}
          <div class="step ${state}">
            <div class="step-number">
              ${state === 'completed' ? '✓' : idx}
            </div>
            <div class="step-label">${step}</div>
          </div>`;
      }).join('')}
    </div>`;
}
