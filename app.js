// =============================================
// HAITI INVESTOR PORTAL — APP DATA & STATE
// =============================================

const STORAGE_KEY = 'haiti_portal_v1';

// ── Mock News Data ──────────────────────────
const NEWS_ITEMS = [
  {
    id: 'n1',
    date: '2026-08-28',
    title: 'Portal Launch: Haiti National Investment Fund Initiative',
    excerpt: 'The government of Haiti officially launches the National Investment Fund portal, inviting diaspora and international investors to participate in rebuilding Haiti\'s economic future.',
    isNew: true
  },
  {
    id: 'n2',
    date: '2026-08-20',
    title: 'First Round of Infrastructure Projects Selected',
    excerpt: 'The Ministry of Finance has announced the first round of priority infrastructure projects eligible for investment, including port modernization and renewable energy initiatives.',
    isNew: false
  },
  {
    id: 'n3',
    date: '2026-08-12',
    title: 'Investment Framework Agreement Signed with Caribbean Development Bank',
    excerpt: 'A landmark agreement with the Caribbean Development Bank ensures investor protections and provides structured oversight of all fund allocations.',
    isNew: false
  },
  {
    id: 'n4',
    date: '2026-08-05',
    title: 'Diaspora Investment Drive: Reaching 1 Million Haitian-Americans',
    excerpt: 'A nationwide campaign begins to engage the 1 million+ Haitian-Americans in the investment initiative, with community events planned across Miami, New York, Boston, and Montreal.',
    isNew: false
  },
  {
    id: 'n5',
    date: '2026-07-28',
    title: 'Tax Incentives Announced for Early Investors',
    excerpt: 'The Haitian government announces attractive tax incentive packages for early-stage investors registered before December 31, 2026, pending legislative approval.',
    isNew: false
  }
];

// ── Mock Investor Data (12 records) ──────────
const INITIAL_CONFIRMED_INVESTORS = [
  { id: '100001', firstName: 'Marie', lastName: 'Dubois', email: 'marie.dubois@gmail.com', whatsapp: '+1-305-555-0101', amountRange: '$1,100–$5,000', exactAmount: 2500, totalInvested: 2500, registeredAt: '2026-08-10', confirmedAt: '2026-08-11', cardLast4: '4532', transactionId: 'TXN-A7F2K9', status: 'confirmed', country: 'USA' },
  { id: '100002', firstName: 'Jean-Pierre', lastName: 'Toussaint', email: 'jp.toussaint@outlook.com', whatsapp: '+1-718-555-0202', amountRange: '$300–$500', exactAmount: 450, totalInvested: 450, registeredAt: '2026-08-12', confirmedAt: '2026-08-12', cardLast4: '7891', transactionId: 'TXN-B3M1P4', status: 'confirmed', country: 'USA' },
  { id: '100003', firstName: 'Claudette', lastName: 'Pierre', email: 'claudette.p@yahoo.fr', whatsapp: '+33-6-55-01-0303', amountRange: '$5,100+', exactAmount: 7500, totalInvested: 7500, registeredAt: '2026-08-13', confirmedAt: '2026-08-14', cardLast4: '2247', transactionId: 'TXN-C9R5T2', status: 'confirmed', country: 'France' },
  { id: '100004', firstName: 'Réginald', lastName: 'Alexandre', email: 'reginald.alexandre@gmail.com', whatsapp: '+1-514-555-0404', amountRange: '$900–$1,000', exactAmount: 1000, totalInvested: 1000, registeredAt: '2026-08-15', confirmedAt: '2026-08-15', cardLast4: '6673', transactionId: 'TXN-D4S8W7', status: 'confirmed', country: 'Canada' },
  { id: '100005', firstName: 'Naomie', lastName: 'Étienne', email: 'naomie.etienne@hotmail.com', whatsapp: '+1-617-555-0505', amountRange: '$20–$200', exactAmount: 150, totalInvested: 150, registeredAt: '2026-08-16', confirmedAt: '2026-08-17', cardLast4: '3318', transactionId: 'TXN-E1X6Q3', status: 'confirmed', country: 'USA' },
  { id: '100006', firstName: 'Lionel', lastName: 'Morency', email: 'l.morency@gmail.com', whatsapp: '+1-786-555-0606', amountRange: '$600–$800', exactAmount: 750, totalInvested: 750, registeredAt: '2026-08-18', confirmedAt: '2026-08-19', cardLast4: '9924', transactionId: 'TXN-F2Y9L5', status: 'confirmed', country: 'USA' },
  { id: '100007', firstName: 'Farah', lastName: 'Jean-Baptiste', email: 'farah.jb@gmail.com', whatsapp: '+44-7700-555070', amountRange: '$1,100–$5,000', exactAmount: 3200, totalInvested: 3200, registeredAt: '2026-08-20', confirmedAt: '2026-08-21', cardLast4: '5561', transactionId: 'TXN-G6Z4N1', status: 'confirmed', country: 'UK' },
  { id: '100008', firstName: 'Michèle', lastName: 'Beauvoir', email: 'm.beauvoir@gmail.com', whatsapp: '+1-954-555-0808', amountRange: '$300–$500', exactAmount: 300, totalInvested: 300, registeredAt: '2026-08-22', confirmedAt: '2026-08-22', cardLast4: '8834', transactionId: 'TXN-H8P3M9', status: 'confirmed', country: 'USA' },
  { id: '100009', firstName: 'Robert', lastName: 'Célestin', email: 'robert.celestin@outlook.com', whatsapp: '+1-212-555-0909', amountRange: '$5,100+', exactAmount: 10000, totalInvested: 10000, registeredAt: '2026-08-24', confirmedAt: '2026-08-25', cardLast4: '1129', transactionId: 'TXN-J7T2K6', status: 'confirmed', country: 'USA' },
  { id: '100010', firstName: 'Carline', lastName: 'Lafortune', email: 'carline.l@gmail.com', whatsapp: '+1-407-555-1010', amountRange: '$20–$200', exactAmount: 75, totalInvested: 75, registeredAt: '2026-08-26', confirmedAt: '2026-08-26', cardLast4: '4477', transactionId: 'TXN-K3V1R8', status: 'confirmed', country: 'USA' }
];

const INITIAL_POTENTIAL_INVESTORS = [
  { id: '100011', firstName: 'Edouard', lastName: 'Vernet', email: 'e.vernet@gmail.com', whatsapp: '+1-305-555-1111', amountRange: '$1,100–$5,000', exactAmount: 5000, totalInvested: 0, registeredAt: '2026-08-28', confirmedAt: null, cardLast4: null, transactionId: null, status: 'potential', country: 'USA' },
  { id: '100012', firstName: 'Guerline', lastName: 'Mathieu', email: 'g.mathieu@yahoo.fr', whatsapp: '+33-6-55-01-1212', amountRange: '$600–$800', exactAmount: 600, totalInvested: 0, registeredAt: '2026-08-29', confirmedAt: null, cardLast4: null, transactionId: null, status: 'potential', country: 'France' },
  { id: '100013', firstName: 'Willy', lastName: 'Désir', email: 'willy.desir@hotmail.com', whatsapp: '+1-514-555-1313', amountRange: '$300–$500', exactAmount: 400, totalInvested: 0, registeredAt: '2026-08-30', confirmedAt: null, cardLast4: null, transactionId: null, status: 'potential', country: 'Canada' },
  { id: '100014', firstName: 'Roseline', lastName: 'Cadet', email: 'r.cadet@gmail.com', whatsapp: '+1-617-555-1414', amountRange: '$900–$1,000', exactAmount: 950, totalInvested: 0, registeredAt: '2026-09-01', confirmedAt: null, cardLast4: null, transactionId: null, status: 'potential', country: 'USA' },
  { id: '100015', firstName: 'Endy', lastName: 'François', email: 'endy.francois@gmail.com', whatsapp: '+1-786-555-1515', amountRange: '$20–$200', exactAmount: 100, totalInvested: 0, registeredAt: '2026-09-02', confirmedAt: null, cardLast4: null, transactionId: null, status: 'potential', country: 'USA' }
];

// ── Mock Visitor Data (30 days) ───────────────
function generateVisitorData() {
  const data = [];
  const base = 120;
  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dayOfWeek = d.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const visitors = Math.floor(base * (isWeekend ? 0.6 : 1) + Math.random() * 80 + (29 - i) * 3);
    data.push({ date: d.toISOString().split('T')[0], visitors });
  }
  return data;
}

// ── Mock Messages ────────────────────────────
const INITIAL_MESSAGES = [
  { id: 'm1', from: 'Marie Dubois', email: 'marie.dubois@gmail.com', subject: 'Question about my investment', body: 'Hello, I would like to know the expected timeline for my investment to be processed. Thank you.', receivedAt: '2026-09-01T10:23:00', read: false },
  { id: 'm2', from: 'Jean-Pierre Toussaint', email: 'jp.toussaint@outlook.com', subject: 'Transfer confirmation receipt', body: 'Good morning, I completed my transfer yesterday but haven\'t received a confirmation email yet.', receivedAt: '2026-09-02T09:15:00', read: false },
  { id: 'm3', from: 'General Inquiry', email: 'diaspora.info@example.com', subject: 'Diaspora Group Investment', body: 'We represent a group of 20 Haitian-Americans interested in a collective investment. Please advise on how to proceed.', receivedAt: '2026-09-02T14:40:00', read: false },
  { id: 'm4', from: 'Farah Jean-Baptiste', email: 'farah.jb@gmail.com', subject: 'Document upload request', body: 'Is there a way to submit KYC documents digitally through the portal? I cannot mail physical documents from the UK.', receivedAt: '2026-09-03T11:05:00', read: false },
  { id: 'm5', from: 'Robert Célestin', email: 'robert.celestin@outlook.com', subject: 'High-value investor interest', body: 'I represent a New York-based investment fund with interest in a $50,000+ commitment. Please contact me directly.', receivedAt: '2026-09-04T08:30:00', read: false },
  { id: 'm6', from: 'Carline Lafortune', email: 'carline.l@gmail.com', subject: 'Merci pour votre service', body: 'I just completed my first investment. The process was very smooth and professional. Thank you to the team!', receivedAt: '2026-09-04T16:45:00', read: true }
];

// ── Application State Class ───────────────────
class AppState {
  constructor() {
    this.data = this.load();
    if (!this.data.initialized) {
      this.data = this.getDefaultState();
      this.data.initialized = true;
      this.save();
    }
  }

  getDefaultState() {
    return {
      initialized: true,
      currentUserId: null,
      language: 'en',
      confirmedInvestors: [...INITIAL_CONFIRMED_INVESTORS],
      potentialInvestors: [...INITIAL_POTENTIAL_INVESTORS],
      visitors: generateVisitorData(),
      messages: [...INITIAL_MESSAGES],
      news: [...NEWS_ITEMS],
      nextId: 100016,
      contactMessages: []
    };
  }

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  }

  save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data)); }
    catch(e) { console.warn('Storage error:', e); }
  }

  get(key) { return this.data[key]; }

  set(key, value) {
    this.data[key] = value;
    this.save();
  }

  getCurrentUser() {
    const uid = this.data.currentUserId;
    if (!uid) return null;
    return this.findInvestorById(uid);
  }

  findInvestorById(id) {
    return [...this.data.confirmedInvestors, ...this.data.potentialInvestors]
      .find(inv => inv.id === id) || null;
  }

  findInvestorByCredentials(idOrEmail, contact) {
    const all = [...this.data.confirmedInvestors, ...this.data.potentialInvestors];
    return all.find(inv => {
      const matchId = inv.id === idOrEmail;
      const matchEmail = inv.email.toLowerCase() === idOrEmail.toLowerCase();
      const matchContact = inv.email.toLowerCase() === contact.toLowerCase()
        || inv.whatsapp.replace(/\D/g,'').includes(contact.replace(/\D/g,''));
      return (matchId || matchEmail) && matchContact;
    }) || null;
  }

  login(investor) {
    this.data.currentUserId = investor.id;
    this.save();
  }

  logout() {
    this.data.currentUserId = null;
    this.save();
  }

  registerPotential(data) {
    const id = String(this.data.nextId++);
    const investor = {
      id, ...data,
      totalInvested: 0, registeredAt: new Date().toISOString().split('T')[0],
      confirmedAt: null, cardLast4: null, transactionId: null, status: 'potential'
    };
    this.data.potentialInvestors.push(investor);
    this.data.currentUserId = id;
    this.save();
    return investor;
  }

  confirmPayment(investorId, paymentData) {
    const idx = this.data.potentialInvestors.findIndex(i => i.id === investorId);
    if (idx !== -1) {
      const investor = { ...this.data.potentialInvestors[idx], ...paymentData, status: 'confirmed', confirmedAt: new Date().toISOString().split('T')[0] };
      this.data.potentialInvestors.splice(idx, 1);
      this.data.confirmedInvestors.push(investor);
      this.save();
      return investor;
    }
    // Already confirmed - update
    const ci = this.data.confirmedInvestors.findIndex(i => i.id === investorId);
    if (ci !== -1) {
      this.data.confirmedInvestors[ci] = { ...this.data.confirmedInvestors[ci], ...paymentData };
      this.save();
      return this.data.confirmedInvestors[ci];
    }
    return null;
  }

  getStats() {
    const confirmed = this.data.confirmedInvestors;
    const potential = this.data.potentialInvestors;
    const totalReceived = confirmed.reduce((s,i) => s + (i.totalInvested || i.exactAmount), 0);
    const totalPledged  = potential.reduce((s,i) => s + (i.exactAmount || 0), 0);
    const totalVisitors = this.data.visitors.reduce((s,v) => s + v.visitors, 0);
    const unreadCount   = this.data.messages.filter(m => !m.read).length;
    return { confirmed: confirmed.length, potential: potential.length, totalReceived, totalPledged, totalVisitors, unreadCount };
  }

  searchInvestors(query) {
    if (!query.trim()) return { confirmed: this.data.confirmedInvestors, potential: this.data.potentialInvestors };
    const q = query.toLowerCase().trim();
    const filter = inv =>
      inv.id.includes(q) ||
      inv.firstName.toLowerCase().includes(q) ||
      inv.lastName.toLowerCase().includes(q) ||
      inv.email.toLowerCase().includes(q) ||
      inv.whatsapp.replace(/\D/g,'').includes(q.replace(/\D/g,'')) ||
      String(inv.exactAmount).includes(q) ||
      (inv.country && inv.country.toLowerCase().includes(q));
    return {
      confirmed: this.data.confirmedInvestors.filter(filter),
      potential: this.data.potentialInvestors.filter(filter)
    };
  }

  markMessageRead(id) {
    const msg = this.data.messages.find(m => m.id === id);
    if (msg) { msg.read = true; this.save(); }
  }

  addContactMessage(msg) {
    this.data.contactMessages = this.data.contactMessages || [];
    this.data.contactMessages.push({ ...msg, id: 'cm' + Date.now(), receivedAt: new Date().toISOString() });
    this.data.messages.push({ ...msg, id: 'cm' + Date.now(), read: false, receivedAt: new Date().toISOString() });
    this.save();
  }

  recordVisit() {
    const today = new Date().toISOString().split('T')[0];
    const entry = this.data.visitors.find(v => v.date === today);
    if (entry) entry.visitors++;
    else this.data.visitors.push({ date: today, visitors: 1 });
    this.save();
  }

  updateInvestorAmount(investorId, amountRange, exactAmount) {
    const all = [...this.data.confirmedInvestors, ...this.data.potentialInvestors];
    const inv = all.find(i => i.id === investorId);
    if (inv) {
      inv.amountRange = amountRange;
      inv.exactAmount = exactAmount;
      this.save();
    }
  }
}

// Global state instance
window.APP = new AppState();
window.APP.recordVisit();

// ── Utilities ────────────────────────────────
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount || 0);
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function generateTxnId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let id = 'TXN-';
  for (let i = 0; i < 8; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

function maskCard(num) {
  return '•••• •••• •••• ' + num.replace(/\D/g,'').slice(-4);
}

function toast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  t.innerHTML = `<span class="toast-icon">${icons[type]}</span><span class="toast-message">${message}</span>`;
  container.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(100%)'; t.style.transition = 'all 0.3s'; setTimeout(() => t.remove(), 300); }, 3500);
}

function debounce(fn, ms) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); };
}

// ── TRANSLATIONS (simplified) ─────────────────
const TRANSLATIONS = {
  en: {
    nav_news: 'News', nav_contact: 'Contact Us', nav_share: 'Share',
    nav_login: 'Log In', nav_logout: 'Log Out', nav_myaccount: 'My Account',
    hero_title: 'Invest in Haiti\'s Future', hero_subtitle: 'Join thousands of Haitians worldwide in rebuilding our nation\'s economic foundation.',
    intro_title: 'Your Country Needs You', intro_body: 'As a Haitian citizen or member of the diaspora, you have the unique opportunity to participate in the National Investment Fund — a government-backed initiative to rebuild Haiti\'s infrastructure, economy, and future. Registration is free. No payment is required today.',
    cta_register: 'Register as Potential Investor',
    news_panel_title: 'Investors News & Information'
  },
  fr: {
    nav_news: 'Actualités', nav_contact: 'Nous Contacter', nav_share: 'Partager',
    nav_login: 'Se Connecter', nav_logout: 'Se Déconnecter', nav_myaccount: 'Mon Compte',
    hero_title: 'Investissez dans l\'Avenir d\'Haïti', hero_subtitle: 'Rejoignez des milliers d\'Haïtiens dans la reconstruction du fondement économique de notre nation.',
    intro_title: 'Votre Pays a Besoin de Vous', intro_body: 'En tant que citoyen haïtien ou membre de la diaspora, vous avez l\'opportunité unique de participer au Fonds National d\'Investissement — une initiative gouvernementale pour reconstruire l\'infrastructure, l\'économie et l\'avenir d\'Haïti. L\'inscription est gratuite. Aucun paiement n\'est requis aujourd\'hui.',
    cta_register: 'S\'inscrire comme Investisseur Potentiel',
    news_panel_title: 'Actualités et Informations pour Investisseurs'
  },
  ht: {
    nav_news: 'Nouvèl', nav_contact: 'Kontakte Nou', nav_share: 'Pataje',
    nav_login: 'Konekte', nav_logout: 'Dekonekte', nav_myaccount: 'Kont Mwen',
    hero_title: 'Envesti nan Avni Ayiti', hero_subtitle: 'Rejwenn plizyè milye Ayisyen nan lemonn antye pou rekonstrui fondasyon ekonomik nasyon nou an.',
    intro_title: 'Peyi Ou Bezwen Ou', intro_body: 'Kòm yon sitwayen ayisyen oswa manm dyaspora a, ou gen opòtinite inik pou patisipe nan Fon Nasyonal Envestisman — yon inisyativ gouvènman pou rekonstrui enfrastrikti, ekonomi ak avni Ayiti. Enskripsyon an gratis. Pa gen peman ki obligatwa jodi a.',
    cta_register: 'Enskri kòm Envestisè Potansyèl',
    news_panel_title: 'Nouvèl ak Enfòmasyon pou Envestisè'
  }
};

function t(key) {
  const lang = window.APP.get('language') || 'en';
  return (TRANSLATIONS[lang] || TRANSLATIONS.en)[key] || key;
}
