/* shared.js — nav, footer, scroll effects */
(function () {
  const path = window.location.pathname.replace(/\/$/, '').split('/').pop() || 'index';
  function active(page) {
    if (page === 'index' && (!path || path === 'index' || path === '')) return 'active';
    return path.startsWith(page) ? 'active' : '';
  }

  const TOPBAR = `
<div class="topbar">
  <div class="inner">
    <div class="topbar-left">
      <svg viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.5"/><path d="M7 4v3l2 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      <span>Mon–Fri · San Jose · Santa Clara · Sunnyvale · Silicon Valley</span>
    </div>
    <a href="mailto:info@clearlinesigns.com">info@clearlinesigns.com</a>
  </div>
</div>`;

  const NAV = `
<nav id="mainNav">
  <div class="nav-inner">
    <a href="/" class="logo">
      <img src="/assets/images/logo.png" alt="Clear Line Signs – San Jose Sign Company" />
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="/" class="${active('index')}">Home</a></li>
      <li><a href="/services.html" class="${active('services')}">Services</a></li>
      <li><a href="/portfolio.html" class="${active('portfolio')}">Portfolio</a></li>
      <li><a href="https://blog.clearlinesigns.com" target="_blank" rel="noopener">Blog</a></li>
      <li><a href="https://pricing.clearlinesigns.com" target="_blank" rel="noopener">Pricing Guide</a></li>
      <li><a href="/contact.html" class="nav-cta ${active('contact')}">Free Quote</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

  const FOOTER = `
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <div class="footer-logo">
        <img src="/assets/images/logo.png" alt="Clear Line Signs" />
      </div>
      <p>Custom commercial signage for businesses across San Jose and Silicon Valley. Precision in every detail — from concept to installation.</p>
      <a href="mailto:info@clearlinesigns.com">info@clearlinesigns.com</a>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="/services.html#indoor">Indoor &amp; Lobby Signs</a></li>
        <li><a href="/services.html#outdoor">Outdoor Building Signs</a></li>
        <li><a href="/services.html#vinyl">Vinyl Graphics &amp; Decals</a></li>
        <li><a href="/services.html#dimensional">Acrylic &amp; Dimensional</a></li>
        <li><a href="/services.html#tradeshow">Trade Show Displays</a></li>
        <li><a href="/services.html#custom">Custom Signs</a></li>
        <li><a href="https://pricing.clearlinesigns.com" target="_blank">Pricing Guide</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Areas Served</h4>
      <ul>
        <li><a href="/contact.html">San Jose Signs</a></li>
        <li><a href="/contact.html">Santa Clara Signs</a></li>
        <li><a href="/contact.html">Sunnyvale Signs</a></li>
        <li><a href="/contact.html">Milpitas Signs</a></li>
        <li><a href="/contact.html">Mountain View Signs</a></li>
        <li><a href="/contact.html">Cupertino Signs</a></li>
        <li><a href="/contact.html">Campbell Signs</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/portfolio.html">Portfolio</a></li>
        <li><a href="https://blog.clearlinesigns.com" target="_blank">Blog</a></li>
        <li><a href="https://pricing.clearlinesigns.com" target="_blank">Pricing Guide</a></li>
        <li><a href="/contact.html">Get a Quote</a></li>
        <li><a href="mailto:info@clearlinesigns.com">Contact Us</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Clear Line Signs · San Jose, CA · All Rights Reserved</span>
    <span>Custom Signs · Storefront Signs · Business Signs · <a href="/contact.html">Free Quote</a></span>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', NAV);
  document.body.insertAdjacentHTML('afterbegin', TOPBAR);
  document.body.insertAdjacentHTML('beforeend', FOOTER);

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('navLinks').classList.toggle('open');
  });

  // Nav scroll shadow
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
})();
