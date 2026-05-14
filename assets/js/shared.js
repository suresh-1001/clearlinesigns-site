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

  var NAV = '<nav id="mainNav"><div class="nav-inner"><a href="' + base + 'index.html" class="logo"><img src="' + base + 'assets/images/logo.webp" alt="Clear Line Signs" /></a><ul class="nav-links" id="navLinks"><li><a href="' + base + 'index.html" class="' + isActive('index') + '">Home</a></li><li><a href="' + base + 'services.html" class="' + isActive('services') + '">Services</a></li><li><a href="' + base + 'products/index.html" class="' + isActive('products') + '">Products</a></li><li><a href="' + base + 'portfolio.html" class="' + isActive('portfolio') + '">Portfolio</a></li><li><a href="' + base + 'about.html" class="' + isActive('about') + '">About</a></li><li><a href="https://blog.clearlinesigns.com" target="_blank">Blog</a></li><li><a href="' + base + 'sign-copy-generator.html" class="' + isActive('sign-copy-generator') + '">Sign Copy Tool</a></li><li><a href="' + base + 'design-brief.html" class="' + isActive('design-brief') + '">Design Brief</a></li><li><a href="' + base + 'pricing.html" class="' + isActive('pricing') + '">Pricing Guide</a></li><li><a href="tel:4087801035" class="nav-phone">(408) 780-1035</a></li><li><a href="' + base + 'contact.html" class="nav-cta ' + isActive('contact') + '">Free Quote</a></li></ul><button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button></div></nav>';

  var FOOTER = '<footer><div class="footer-grid"><div class="footer-col"><div class="footer-logo"><img src="' + base + 'assets/images/logo-white.webp" alt="Clear Line Signs" /></div><p>Custom commercial signage for businesses across San Jose and Silicon Valley. Design \xb7 Fabrication \xb7 Installation.</p><p><a href="tel:4087801035">(408) 780-1035</a></p><p><a href="mailto:info@clearlinesigns.com">info@clearlinesigns.com</a></p></div><div class="footer-col"><h4>Services</h4><ul><li><a href="' + base + 'services.html">Indoor &amp; Lobby Signs</a></li><li><a href="' + base + 'services.html">Outdoor Building Signs</a></li><li><a href="' + base + 'services.html">Vinyl Graphics &amp; Decals</a></li><li><a href="' + base + 'services.html">Acrylic &amp; Dimensional Letters</a></li><li><a href="' + base + 'services.html">Trade Show Displays</a></li><li><a href="' + base + 'services.html">Custom Signs</a></li><li><a href="' + base + 'pricing.html">Pricing Guide</a></li></ul></div><div class="footer-col"><h4>Products</h4><ul><li><a href="' + base + 'products/index.html" style="font-weight:600;color:var(--teal-400)">Browse All Products &#8594;</a></li><li><a href="' + base + 'products/vinyl-banners.html">Vinyl Banners</a></li><li><a href="' + base + 'products/window-graphics.html">Window Graphics</a></li><li><a href="' + base + 'products/trade-show-displays.html">Trade Show Displays</a></li><li><a href="' + base + 'products/banner-stands.html">Banner Stands</a></li><li><a href="' + base + 'products/real-estate-signs.html">Real Estate Signs</a></li><li><a href="' + base + 'products/custom-event-tents.html">Event Tents</a></li><li><a href="' + base + 'products/rigid-signs-magnets.html">Rigid Signs &amp; Magnets</a></li></ul></div><div class="footer-col"><h4>Company</h4><ul><li><a href="' + base + 'index.html">Home</a></li><li><a href="' + base + 'about.html">About Us</a></li><li><a href="' + base + 'portfolio.html">Portfolio</a></li><li><a href="https://blog.clearlinesigns.com" target="_blank">Blog</a></li><li><a href="' + base + 'pricing.html">Pricing Guide</a></li><li><a href="' + base + 'cities.html">Cities We Serve</a></li><li><a href="' + base + 'contact.html">Get a Quote</a></li><li><a href="tel:4087801035">(408) 780-1035</a></li><li><a href="mailto:info@clearlinesigns.com">Contact Us</a></li></ul></div></div><div class="footer-bottom"><p>\u00a9 2026 Clear Line Signs \xb7 San Jose, CA \xb7 (408) 780-1035 \xb7 All Rights Reserved</p><p>Custom Signs \xb7 Storefront Signs \xb7 Business Signs \xb7 <a href="' + base + 'contact.html">Get a Free Quote</a></p></div></footer>';

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
   Replace everything from this comment to end of shared.js
   ============================================================ */

(function () {
  'use strict';

  if (window.location.pathname.includes('contact')) return;

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

  const C = {
    teal:    '#0891B2',
    tealDk:  '#0672A0',
    navy:    '#0A1B2A',
    navy2:   '#0F2436',
    white:   '#FFFFFF',
    dim:     'rgba(255,255,255,0.5)',
    border:  'rgba(255,255,255,0.08)',
    msgAI:   'rgba(255,255,255,0.07)',
    msgUser: 'rgba(8,145,178,0.22)',
  };

  /* ── Styles ── */
  const s = document.createElement('style');
  s.textContent = `
    #cls-btn {
      position:fixed; bottom:24px; right:24px; z-index:9998;
      width:56px; height:56px; border-radius:50%;
      background:${C.teal}; border:none; cursor:pointer;
      box-shadow:0 4px 20px rgba(8,145,178,0.45);
      display:flex; align-items:center; justify-content:center;
      transition:transform .2s,box-shadow .2s;
    }
    #cls-btn:hover { transform:scale(1.08); box-shadow:0 6px 28px rgba(8,145,178,0.6); }
    #cls-btn * { pointer-events:none; }

    #cls-panel {
      position:fixed; bottom:92px; right:24px; z-index:9999;
      width:360px; max-height:540px;
      background:${C.navy}; border:1px solid ${C.border};
      border-radius:14px; overflow:hidden;
      box-shadow:0 20px 60px rgba(0,0,0,0.5);
      display:flex; flex-direction:column;
      font-family:'DM Sans',sans-serif;
      transform-origin:bottom right;
      transition:transform .25s cubic-bezier(.34,1.56,.64,1),opacity .2s;
    }
    #cls-panel.cls-off { transform:scale(0.85); opacity:0; pointer-events:none; }

    #cls-hdr {
      padding:14px 16px; background:${C.navy2};
      border-bottom:1px solid ${C.border};
      display:flex; align-items:center; gap:10px;
    }
    .cls-dot { width:8px;height:8px;border-radius:50%;background:#22c55e;animation:cls-p 2s infinite; }
    @keyframes cls-p { 0%,100%{opacity:1} 50%{opacity:.35} }
    .cls-hi { flex:1; }
    .cls-hn { font-size:13px;font-weight:600;color:${C.white};line-height:1.2; }
    .cls-hs { font-size:11px;color:${C.dim}; }
    #cls-x  { background:none;border:none;cursor:pointer;color:${C.dim};font-size:18px;line-height:1;padding:2px 4px;transition:color .15s; }
    #cls-x:hover { color:${C.white}; }

    #cls-msgs {
      flex:1;overflow-y:auto;padding:14px;
      display:flex;flex-direction:column;gap:10px;
      scroll-behavior:smooth;min-height:0;
    }
    #cls-msgs::-webkit-scrollbar{width:3px}
    #cls-msgs::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:2px}

    .cm { display:flex;gap:8px;animation:cls-i .22s ease; }
    @keyframes cls-i { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:none} }
    .cav {
      width:24px;height:24px;border-radius:50%;flex-shrink:0;
      display:flex;align-items:center;justify-content:center;
      font-size:9px;font-weight:700;
    }
    .cav.ai   { background:${C.teal};color:${C.white}; }
    .cav.user { background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.5);font-size:11px; }
    .cbb { font-size:13px;line-height:1.6;padding:8px 11px;border-radius:8px;max-width:85%; }
    .cm.ai   .cbb { background:${C.msgAI};color:rgba(255,255,255,0.85); }
    .cm.user { flex-direction:row-reverse; }
    .cm.user .cbb { background:${C.msgUser};color:rgba(255,255,255,0.85); }

    .cls-typ { display:flex;gap:4px;padding:8px 11px;background:${C.msgAI};border-radius:8px;width:fit-content; }
    .ctd { width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,0.35);animation:cls-d 1.2s infinite; }
    .ctd:nth-child(2){animation-delay:.18s}.ctd:nth-child(3){animation-delay:.36s}
    @keyframes cls-d { 0%,60%,100%{transform:translateY(0);opacity:.35} 30%{transform:translateY(-4px);opacity:1} }

    #cls-chips { padding:0 14px 10px;display:flex;flex-wrap:wrap;gap:6px; }
    .cch {
      font-size:11px;padding:5px 11px;
      background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.55);
      border:1px solid rgba(255,255,255,0.1);border-radius:999px;
      cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s;white-space:nowrap;
    }
    .cch:hover { background:rgba(8,145,178,0.2);border-color:rgba(8,145,178,0.5);color:${C.white}; }

    #cls-cta { padding:8px 14px;background:rgba(8,145,178,0.1);border-top:1px solid rgba(8,145,178,0.2);text-align:center; }
    #cls-cta a { font-size:12px;font-weight:600;color:${C.teal};text-decoration:none; }
    #cls-cta a:hover { color:${C.white}; }

    #cls-ftr { padding:10px;border-top:1px solid ${C.border};display:flex;gap:8px;background:${C.navy2}; }
    #cls-inp {
      flex:1;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);
      border-radius:6px;padding:9px 12px;font-family:'DM Sans',sans-serif;
      font-size:13px;color:${C.white};outline:none;transition:border-color .2s;
    }
    #cls-inp::placeholder { color:rgba(255,255,255,0.22); }
    #cls-inp:focus { border-color:rgba(8,145,178,0.5); }
    #cls-go {
      background:${C.teal};border:none;border-radius:6px;
      width:36px;height:36px;cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      transition:background .15s;flex-shrink:0;
    }
    #cls-go * { pointer-events:none; }
    #cls-go:hover{background:${C.tealDk}}
    #cls-go:disabled{opacity:.45;cursor:not-allowed}

    @media(max-width:420px){
      #cls-panel{width:calc(100vw - 20px);right:10px;bottom:80px;}
      #cls-btn{bottom:16px;right:16px;}
    }
  `;
  document.head.appendChild(s);

  /* ── DOM ── */
  const CHAT_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="${C.white}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`;
  const CLOSE_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="${C.white}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
  const SEND_ICON  = `<svg viewBox="0 0 24 24" fill="none" stroke="${C.white}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;

  const btn = document.createElement('button');
  btn.id = 'cls-btn';
  btn.setAttribute('aria-label', 'Open AI sign advisor');
  btn.innerHTML = CHAT_ICON;

  const panel = document.createElement('div');
  panel.id = 'cls-panel';
  panel.classList.add('cls-off');
  panel.innerHTML = `
    <div id="cls-hdr">
      <div class="cls-dot"></div>
      <div class="cls-hi">
        <div class="cls-hn">ClearLine Signs AI</div>
        <div class="cls-hs">Sign advisor · Online</div>
      </div>
      <button id="cls-x" aria-label="Close">✕</button>
    </div>
    <div id="cls-msgs"></div>
    <div id="cls-chips"></div>
    <div id="cls-cta"><a href="/contact.html#quote">📋 Request a Free Quote →</a></div>
    <div id="cls-ftr">
      <input id="cls-inp" type="text" placeholder="Ask about signage…" autocomplete="off"/>
      <button id="cls-go" aria-label="Send">${SEND_ICON}</button>
    </div>`;

  document.body.appendChild(btn);
  document.body.appendChild(panel);

  /* ── State ── */
  let chatHistory  = [];
  let isOpen       = false;
  let greeted      = false;
  let userMsgCount = 0;
  let leadCaptured = false;
  let _inside      = false;

  const msgsEl  = document.getElementById('cls-msgs');
  const chipsEl = document.getElementById('cls-chips');
  const inp     = document.getElementById('cls-inp');
  const goBtn   = document.getElementById('cls-go');

  /* ── Message helpers ── */
  function addMsg(role, html) {
    const d = document.createElement('div');
    d.className = 'cm ' + role;
    d.innerHTML = `<div class="cav ${role}">${role === 'ai' ? 'CL' : '→'}</div>
                   <div class="cbb">${html.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>')}</div>`;
    msgsEl.appendChild(d);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return d;
  }

  function addTyping() {
    const d = document.createElement('div');
    d.className = 'cm ai'; d.id = 'cls-typ';
    d.innerHTML = `<div class="cav ai">CL</div><div class="cls-typ"><div class="ctd"></div><div class="ctd"></div><div class="ctd"></div></div>`;
    msgsEl.appendChild(d);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }
  function removeTyping() { const t = document.getElementById('cls-typ'); if (t) t.remove(); }

  /* ── Chips ── */
  function showChips() {
    chipsEl.innerHTML = '';
    CHIPS.forEach(function(text) {
      const c = document.createElement('button');
      c.className = 'cch';
      c.textContent = text;
      c.addEventListener('click', function(e) {
        e.stopPropagation();
        chipsEl.innerHTML = '';
        sendMessage(text);
      });
      chipsEl.appendChild(c);
    });
  }

  function greet() {
    if (greeted) return;
    greeted = true;
    addMsg('ai', "Hi! I'm Clear Line Signs' AI advisor. What kind of signage project can I help you with?");
    showChips();
  }

  /* ── Lead capture ── */
  function showLeadCapture() {
    if (leadCaptured) return;
    leadCaptured = true;
    const d = document.createElement('div');
    d.style.cssText = 'display:flex;flex-direction:column;gap:8px;animation:cls-i .22s ease';
    d.innerHTML = `
      <div class="cm ai"><div class="cav ai">CL</div>
        <div class="cbb">Want us to follow up with a quote? Drop your email and we'll reach out.</div></div>
      <div style="display:flex;gap:6px;padding-left:32px">
        <input id="cls-lead-email" type="email" placeholder="your@email.com"
          style="flex:1;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);
                 border-radius:6px;padding:7px 10px;font-size:12px;color:#fff;
                 font-family:'DM Sans',sans-serif;outline:none;"/>
        <button id="cls-lead-go"
          style="background:#0891B2;border:none;border-radius:6px;padding:7px 12px;
                 color:#fff;font-size:12px;font-weight:600;cursor:pointer;
                 font-family:'DM Sans',sans-serif;white-space:nowrap;">Send →</button>
      </div>
      <div style="padding-left:32px">
        <button id="cls-lead-skip"
          style="background:none;border:none;color:rgba(255,255,255,0.3);
                 font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;padding:0;">
          No thanks — I'll use the quote form</button></div>`;
    msgsEl.appendChild(d);
    msgsEl.scrollTop = msgsEl.scrollHeight;

    document.getElementById('cls-lead-email').addEventListener('click', function(e) { e.stopPropagation(); });

    document.getElementById('cls-lead-go').addEventListener('click', async function(e) {
      e.stopPropagation();
      const emailEl = document.getElementById('cls-lead-email');
      const email   = emailEl.value.trim();
      if (!email || email.indexOf('@') < 1) { emailEl.style.borderColor = '#ef4444'; return; }
      this.textContent = 'Sending…'; this.disabled = true;
      const transcript = chatHistory.map(function(m) {
        return (m.role === 'user' ? 'Customer' : 'AI') + ': ' + m.content;
      }).join('\n\n');
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: '0163d307-e9bf-40cd-a985-2e75f3a645c5',
            subject:    'AI Chat Lead — Clear Line Signs',
            email: email, name: email,
            message: 'Chat transcript:\n\n' + transcript,
            source:  window.location.href
          })
        });
      } catch(err) {}
      d.innerHTML = `<div class="cm ai"><div class="cav ai">CL</div>
        <div class="cbb">Got it! We'll follow up at <strong>${email}</strong> with a quote. 👋</div></div>`;
      msgsEl.scrollTop = msgsEl.scrollHeight;
    });

    document.getElementById('cls-lead-skip').addEventListener('click', function(e) {
      e.stopPropagation();
      const transcript = chatHistory.map(function(m) {
        return (m.role === 'user' ? 'Customer' : 'AI') + ': ' + m.content;
      }).join('\n\n');
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '0163d307-e9bf-40cd-a985-2e75f3a645c5',
          subject:    'AI Chat (Anonymous) — Clear Line Signs',
          email:      'noreply@clearlinesigns.com',
          name:       'Anonymous Visitor',
          message:    'Visitor declined to share email.\n\nPage: ' + window.location.href + '\n\nChat transcript:\n\n' + transcript
        })
      }).catch(function() {});
      d.remove();
    });
  }

  /* ── Send message ── */
  async function sendMessage(text) {
    text = (text || inp.value).trim();
    if (!text) return;
    inp.value = '';
    chipsEl.innerHTML = '';
    addMsg('user', text);
    chatHistory.push({ role: 'user', content: text });
    userMsgCount++;
    goBtn.disabled = true;
    addTyping();
    try {
      const res  = await fetch(PROXY, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: MODEL, max_tokens: 250, system: SYSTEM, messages: chatHistory })
      });
      const data  = await res.json();
      const reply = data.content[0].text;
      chatHistory.push({ role: 'assistant', content: reply });
      removeTyping();
      addMsg('ai', reply);
      if (userMsgCount >= 2) showLeadCapture();
    } catch {
      removeTyping();
      addMsg('ai', 'Something went wrong — visit <a href="/contact.html" style="color:#0891B2">our contact page</a> for help!');
    }
    goBtn.disabled = false;
    inp.focus();
  }

  /* ── Toggle ── */
  function togglePanel() {
    isOpen = !isOpen;
    panel.classList.toggle('cls-off', !isOpen);
    btn.innerHTML = isOpen ? CLOSE_ICON : CHAT_ICON;
    if (isOpen) { greet(); setTimeout(function() { inp.focus(); }, 300); }
  }

  /* ── Events ── */
  btn.addEventListener('click', function(e) { e.stopPropagation(); togglePanel(); });
  document.getElementById('cls-x').addEventListener('click', function(e) { e.stopPropagation(); togglePanel(); });
  goBtn.addEventListener('click', function(e) { e.stopPropagation(); sendMessage(); });
  inp.addEventListener('click', function(e) { e.stopPropagation(); });
  inp.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });

  panel.addEventListener('mousedown',  function() { _inside = true; });
  panel.addEventListener('touchstart', function() { _inside = true; }, { passive: true });
  document.addEventListener('mouseup', function() { setTimeout(function() { _inside = false; }, 0); });
  document.addEventListener('click', function(e) {
    if (_inside) return;
    if (isOpen && e.target !== btn) togglePanel();
  });

})();
