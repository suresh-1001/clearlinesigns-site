/* shared.js — injects nav, topbar, and footer into every page */
(function () {
  var rawPath = window.location.pathname.replace(/\/$/, '').split('/').pop() || 'index';
  var path = rawPath.replace(/\.html$/, '') || 'index';

  /* Detect if we're one level deep (e.g. /cities/ or /products/) */
  var depth = window.location.pathname.split('/').filter(Boolean).length;
  var base = depth >= 2 ? '../' : './';

  /* Detect current directory name for subfolder-aware active state */
  var pathParts = window.location.pathname.split('/').filter(Boolean);
  var dirName = pathParts.length >= 2 ? pathParts[pathParts.length - 2] : '';

  function isActive(page) {
    if (page === 'index' && (!path || path === 'index')) return 'active';
    if (page === 'products' && dirName === 'products') return 'active';
    if (page === 'cities' && dirName === 'cities') return 'active';
    return path.startsWith(page) ? 'active' : '';
  }

  var TOPBAR = '<div class="topbar"><div class="inner"><div class="tb-left"><span>Serving San Jose \xb7 Santa Clara \xb7 Sunnyvale \xb7 Silicon Valley</span></div><div class="tb-right"><a href="tel:4087801035">(408) 780-1035</a><a href="mailto:info@clearlinesigns.com">info@clearlinesigns.com</a></div></div></div>';

  var NAV = '<nav id="mainNav"><div class="nav-inner"><a href="' + base + 'index.html" class="logo"><img src="' + base + 'assets/images/logo.webp" alt="Clear Line Signs" /></a><ul class="nav-links" id="navLinks"><li><a href="' + base + 'index.html" class="' + isActive('index') + '">Home</a></li><li><a href="' + base + 'services.html" class="' + isActive('services') + '">Services</a></li><li><a href="' + base + 'products/index.html" class="' + isActive('products') + '">Products</a></li><li><a href="' + base + 'portfolio.html" class="' + isActive('portfolio') + '">Portfolio</a></li><li><a href="https://blog.clearlinesigns.com" target="_blank">Blog</a></li><li><a href="' + base + 'pricing.html" class="' + isActive('pricing') + '">Pricing Guide</a></li><li><a href="tel:4087801035" class="nav-phone">(408) 780-1035</a></li><li><a href="' + base + 'contact.html" class="nav-cta ' + isActive('contact') + '">Free Quote</a></li></ul><button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button></div></nav>';

  var FOOTER = '<footer><div class="footer-grid"><div class="footer-col"><div class="footer-logo"><img src="' + base + 'assets/images/logo-white.webp" alt="Clear Line Signs" /></div><p>Custom commercial signage for businesses across San Jose and Silicon Valley. Design \xb7 Fabrication \xb7 Installation.</p><p><a href="tel:4087801035">(408) 780-1035</a></p><p><a href="mailto:info@clearlinesigns.com">info@clearlinesigns.com</a></p></div><div class="footer-col"><h4>Services</h4><ul><li><a href="' + base + 'services.html">Indoor &amp; Lobby Signs</a></li><li><a href="' + base + 'services.html">Outdoor Building Signs</a></li><li><a href="' + base + 'services.html">Vinyl Graphics &amp; Decals</a></li><li><a href="' + base + 'services.html">Acrylic &amp; Dimensional Letters</a></li><li><a href="' + base + 'services.html">Trade Show Displays</a></li><li><a href="' + base + 'services.html">Custom Signs</a></li><li><a href="' + base + 'pricing.html">Pricing Guide</a></li></ul></div><div class="footer-col"><h4>Products</h4><ul><li><a href="' + base + 'products/index.html" style="font-weight:600;color:var(--teal-400)">Browse All Products &#8594;</a></li><li><a href="' + base + 'products/vinyl-banners.html">Vinyl Banners</a></li><li><a href="' + base + 'products/window-graphics.html">Window Graphics</a></li><li><a href="' + base + 'products/trade-show-displays.html">Trade Show Displays</a></li><li><a href="' + base + 'products/banner-stands.html">Banner Stands</a></li><li><a href="' + base + 'products/real-estate-signs.html">Real Estate Signs</a></li><li><a href="' + base + 'products/custom-event-tents.html">Event Tents</a></li><li><a href="' + base + 'products/rigid-signs-magnets.html">Rigid Signs &amp; Magnets</a></li></ul></div><div class="footer-col"><h4>Company</h4><ul><li><a href="' + base + 'index.html">Home</a></li><li><a href="' + base + 'portfolio.html">Portfolio</a></li><li><a href="https://blog.clearlinesigns.com" target="_blank">Blog</a></li><li><a href="' + base + 'pricing.html">Pricing Guide</a></li><li><a href="' + base + 'cities.html">Cities We Serve</a></li><li><a href="' + base + 'contact.html">Get a Quote</a></li><li><a href="tel:4087801035">(408) 780-1035</a></li><li><a href="mailto:info@clearlinesigns.com">Contact Us</a></li></ul></div></div><div class="footer-bottom"><p>\u00a9 2026 Clear Line Signs \xb7 San Jose, CA \xb7 (408) 780-1035 \xb7 All Rights Reserved</p><p>Custom Signs \xb7 Storefront Signs \xb7 Business Signs \xb7 <a href="' + base + 'contact.html">Get a Free Quote</a></p></div></footer>';

  function inject() {
    document.body.insertAdjacentHTML('afterbegin', NAV);
    document.body.insertAdjacentHTML('afterbegin', TOPBAR);
    document.body.insertAdjacentHTML('beforeend', FOOTER);

    document.getElementById('hamburger').addEventListener('click', function () {
      document.getElementById('navLinks').classList.toggle('open');
    });

    var nav = document.getElementById('mainNav');
    if (nav) {
      window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 20);
      }, { passive: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();

/* ============================================================
   ClearLine Signs — Floating AI Chat Widget
   Add this entire block to the bottom of assets/js/shared.js
   Calls: https://ai-proxy.clearlinesigns.com/v1/messages
   ============================================================ */

(function () {
  'use strict';

  // ── Don't load on contact.html (already has full advisor) ──
  if (window.location.pathname.includes('contact')) return;

  // ── Config ──────────────────────────────────────────────────
  const PROXY  = 'https://ai-proxy.clearlinesigns.com/v1/messages';
  const MODEL  = 'claude-sonnet-4-6';
  const SYSTEM = `You are a friendly sign specialist at Clear Line Signs, a commercial sign company in San Jose, CA serving Silicon Valley.

Services: storefront signs, channel letters, monument signs, lobby signs, ADA/wayfinding, vinyl graphics, window graphics, wall murals, vehicle wraps, trade show displays, banners, retractable stands, real estate signs, SEG lightboxes — full design, fabrication, and installation.

Rules:
- SHORT replies: 2–3 sentences max
- Be specific and helpful
- Never quote prices — direct to the quote form
- After any recommendation say: "Get an exact quote at clearlinesigns.com/contact.html"
- Sound like a local sign expert, not a bot`;

  const CHIPS = [
    'What signs do I need for my storefront?',
    'I need trade show displays',
    'How long does a sign take?',
    'Do you handle permits?',
    'I need wall graphics for my office',
  ];

  // ── Color tokens (matches clearlinesigns.com) ───────────────
  const C = {
    teal:     '#0891B2',
    tealDark: '#0672A0',
    navy:     '#0A1B2A',
    navy2:    '#0F2436',
    white:    '#FFFFFF',
    textDim:  'rgba(255,255,255,0.5)',
    border:   'rgba(255,255,255,0.08)',
    msgAI:    'rgba(255,255,255,0.07)',
    msgUser:  'rgba(8,145,178,0.22)',
  };

  // ── Inject styles ────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #cls-chat-btn {
      position: fixed; bottom: 24px; right: 24px; z-index: 9998;
      width: 56px; height: 56px; border-radius: 50%;
      background: ${C.teal}; border: none; cursor: pointer;
      box-shadow: 0 4px 20px rgba(8,145,178,0.45);
      display: flex; align-items: center; justify-content: center;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    #cls-chat-btn:hover {
      transform: scale(1.08);
      box-shadow: 0 6px 28px rgba(8,145,178,0.6);
    }
    #cls-chat-btn svg { width: 24px; height: 24px; }

    #cls-chat-panel {
      position: fixed; bottom: 92px; right: 24px; z-index: 9999;
      width: 360px; max-height: 540px;
      background: ${C.navy}; border: 1px solid ${C.border};
      border-radius: 14px; overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
      display: flex; flex-direction: column;
      font-family: 'DM Sans', sans-serif;
      transform-origin: bottom right;
      transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s;
    }
    #cls-chat-panel.cls-hidden {
      transform: scale(0.85); opacity: 0; pointer-events: none;
    }

    #cls-chat-hdr {
      padding: 14px 16px;
      background: ${C.navy2};
      border-bottom: 1px solid ${C.border};
      display: flex; align-items: center; gap: 10px;
    }
    .cls-hdr-dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: #22c55e; flex-shrink: 0;
      animation: cls-pulse 2s infinite;
    }
    @keyframes cls-pulse { 0%,100%{opacity:1} 50%{opacity:.35} }
    .cls-hdr-info { flex: 1; }
    .cls-hdr-name {
      font-size: 13px; font-weight: 600; color: ${C.white};
      line-height: 1.2;
    }
    .cls-hdr-status {
      font-size: 11px; color: ${C.textDim};
    }
    #cls-chat-close {
      background: none; border: none; cursor: pointer;
      color: ${C.textDim}; font-size: 18px; line-height: 1;
      padding: 2px 4px; transition: color 0.15s;
    }
    #cls-chat-close:hover { color: ${C.white}; }

    #cls-chat-msgs {
      flex: 1; overflow-y: auto; padding: 14px;
      display: flex; flex-direction: column; gap: 10px;
      scroll-behavior: smooth; min-height: 0;
    }
    #cls-chat-msgs::-webkit-scrollbar { width: 3px; }
    #cls-chat-msgs::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.1); border-radius: 2px;
    }

    .cls-msg { display: flex; gap: 8px; animation: cls-in .22s ease; }
    @keyframes cls-in { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:translateY(0)} }
    .cls-av {
      width: 24px; height: 24px; border-radius: 50%; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      font-size: 9px; font-weight: 700;
    }
    .cls-av.ai { background: ${C.teal}; color: ${C.white}; }
    .cls-av.user { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); font-size: 11px; }
    .cls-bbl {
      font-size: 13px; line-height: 1.6; padding: 8px 11px;
      border-radius: 8px; max-width: 85%;
    }
    .cls-msg.ai .cls-bbl { background: ${C.msgAI}; color: rgba(255,255,255,0.85); }
    .cls-msg.user { flex-direction: row-reverse; }
    .cls-msg.user .cls-bbl { background: ${C.msgUser}; color: rgba(255,255,255,0.85); }

    .cls-typing {
      display: flex; gap: 4px; padding: 8px 11px;
      background: ${C.msgAI}; border-radius: 8px; width: fit-content;
    }
    .cls-td {
      width: 5px; height: 5px; border-radius: 50%;
      background: rgba(255,255,255,0.35);
      animation: cls-dot 1.2s infinite;
    }
    .cls-td:nth-child(2){animation-delay:.18s}
    .cls-td:nth-child(3){animation-delay:.36s}
    @keyframes cls-dot {
      0%,60%,100%{transform:translateY(0);opacity:.35}
      30%{transform:translateY(-4px);opacity:1}
    }

    #cls-chips {
      padding: 0 14px 10px;
      display: flex; flex-wrap: wrap; gap: 6px;
    }
    .cls-chip {
      font-size: 11px; padding: 5px 11px;
      background: rgba(255,255,255,0.05);
      color: rgba(255,255,255,0.55);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 999px; cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      transition: all 0.15s; white-space: nowrap;
    }
    .cls-chip:hover {
      background: rgba(8,145,178,0.2);
      border-color: rgba(8,145,178,0.5);
      color: ${C.white};
    }

    #cls-chat-ftr {
      padding: 10px; border-top: 1px solid ${C.border};
      display: flex; gap: 8px; background: ${C.navy2};
    }
    #cls-inp {
      flex: 1; background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 6px; padding: 9px 12px;
      font-family: 'DM Sans', sans-serif;
      font-size: 13px; color: ${C.white}; outline: none;
      transition: border-color 0.2s;
    }
    #cls-inp::placeholder { color: rgba(255,255,255,0.22); }
    #cls-inp:focus { border-color: rgba(8,145,178,0.5); }
    #cls-send {
      background: ${C.teal}; border: none; border-radius: 6px;
      width: 36px; height: 36px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s; flex-shrink: 0;
    }
    #cls-send:hover { background: ${C.tealDark}; }
    #cls-send:disabled { opacity: 0.45; cursor: not-allowed; }
    #cls-send svg { width: 16px; height: 16px; }

    #cls-cta-bar {
      padding: 8px 14px;
      background: rgba(8,145,178,0.1);
      border-top: 1px solid rgba(8,145,178,0.2);
      text-align: center;
    }
    #cls-cta-bar a {
      font-size: 12px; font-weight: 600;
      color: ${C.teal}; text-decoration: none;
    }
    #cls-cta-bar a:hover { color: ${C.white}; }

    @media (max-width: 420px) {
      #cls-chat-panel { width: calc(100vw - 20px); right: 10px; bottom: 80px; }
      #cls-chat-btn   { bottom: 16px; right: 16px; }
    }
  `;
  document.head.appendChild(style);

  // ── Build DOM ────────────────────────────────────────────────
  // Toggle button
  const btn = document.createElement('button');
  btn.id = 'cls-chat-btn';
  btn.setAttribute('aria-label', 'Open AI sign advisor');
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="${C.white}" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    </svg>`;

  // Panel
  const panel = document.createElement('div');
  panel.id = 'cls-chat-panel';
  panel.classList.add('cls-hidden');
  panel.innerHTML = `
    <div id="cls-chat-hdr">
      <div class="cls-hdr-dot"></div>
      <div class="cls-hdr-info">
        <div class="cls-hdr-name">ClearLine Signs AI</div>
        <div class="cls-hdr-status">Sign advisor · Online</div>
      </div>
      <button id="cls-chat-close" aria-label="Close">✕</button>
    </div>
    <div id="cls-chat-msgs"></div>
    <div id="cls-chips"></div>
    <div id="cls-cta-bar">
      <a href="/contact.html#quote">📋 Request a Free Quote →</a>
    </div>
    <div id="cls-chat-ftr">
      <input id="cls-inp" type="text" placeholder="Ask about signage…" autocomplete="off"/>
      <button id="cls-send" aria-label="Send">
        <svg viewBox="0 0 24 24" fill="none" stroke="${C.white}" stroke-width="2.5"
             stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </button>
    </div>`;

  document.body.appendChild(btn);
  document.body.appendChild(panel);

  // ── State ────────────────────────────────────────────────────
  let history   = [];
  let open      = false;
  let greeted   = false;

  const msgsEl  = panel.querySelector('#cls-chat-msgs');
  const chipsEl = panel.querySelector('#cls-chips');
  const inp     = panel.querySelector('#cls-inp');
  const sendBtn = panel.querySelector('#cls-send');

  // ── Helpers ──────────────────────────────────────────────────
  function addMsg(role, text) {
    const d = document.createElement('div');
    d.className = `cls-msg ${role}`;
    d.innerHTML = `
      <div class="cls-av ${role}">${role === 'ai' ? 'CL' : '→'}</div>
      <div class="cls-bbl">${text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>')}</div>`;
    msgsEl.appendChild(d);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return d;
  }

  function addTyping() {
    const d = document.createElement('div');
    d.className = 'cls-msg ai';
    d.id = 'cls-typing';
    d.innerHTML = `<div class="cls-av ai">CL</div>
      <div class="cls-typing">
        <div class="cls-td"></div>
        <div class="cls-td"></div>
        <div class="cls-td"></div>
      </div>`;
    msgsEl.appendChild(d);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function removeTyping() {
    const t = document.getElementById('cls-typing');
    if (t) t.remove();
  }

  function showChips() {
    chipsEl.innerHTML = '';
    CHIPS.forEach(text => {
      const c = document.createElement('button');
      c.className = 'cls-chip';
      c.textContent = text;
      c.onclick = () => { chipsEl.innerHTML = ''; sendMessage(text); };
      chipsEl.appendChild(c);
    });
  }

  function greet() {
    if (greeted) return;
    greeted = true;
    addMsg('ai', "Hi! I'm Clear Line Signs' AI advisor. What kind of signage project can I help you with?");
    showChips();
  }

  // ── Send message ─────────────────────────────────────────────
  async function sendMessage(text) {
    text = (text || inp.value).trim();
    if (!text) return;
    inp.value = '';
    chipsEl.innerHTML = '';
    addMsg('user', text);
    history.push({ role: 'user', content: text });

    sendBtn.disabled = true;
    addTyping();

    try {
      const res = await fetch(PROXY, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: MODEL, max_tokens: 250,
          system: SYSTEM, messages: history
        })
      });
      const data  = await res.json();
      const reply = data.content[0].text;
      history.push({ role: 'assistant', content: reply });
      removeTyping();
      addMsg('ai', reply);
    } catch {
      removeTyping();
      addMsg('ai', 'Something went wrong — visit <a href="/contact.html" style="color:#0891B2">our contact page</a> and we\'ll get back to you quickly!');
    }

    sendBtn.disabled = false;
    inp.focus();
  }

  // ── Toggle open/close ────────────────────────────────────────
  function togglePanel() {
    open = !open;
    panel.classList.toggle('cls-hidden', !open);
    btn.innerHTML = open
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="${C.white}" stroke-width="2.5"
             stroke-linecap="round" stroke-linejoin="round">
           <line x1="18" y1="6" x2="6" y2="18"/>
           <line x1="6" y1="6" x2="18" y2="18"/>
         </svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="${C.white}" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
           <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
         </svg>`;
    if (open) { greet(); setTimeout(() => inp.focus(), 300); }
  }

  // ── Events ───────────────────────────────────────────────────
  btn.addEventListener('click', togglePanel);
  panel.querySelector('#cls-chat-close').addEventListener('click', togglePanel);
  sendBtn.addEventListener('click', () => sendMessage());
  inp.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (open && !panel.contains(e.target) && e.target !== btn) togglePanel();
  });

})();
