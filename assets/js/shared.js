/* shared.js — injects nav, topbar, and footer into every page */
(function () {
  // Determine active page
  const rawPath = window.location.pathname.replace(/\/$/, '').split('/').pop() || 'index';
  const path = rawPath.replace(/\.html$/, '') || 'index';

  function isActive(page) {
    if (page === 'index' && (path === '' || path === 'index')) return 'active';
    if (path.startsWith(page)) return 'active';
    return '';
  }

  /* ── TOPBAR ── */
  const topbar = `
  <div class="topbar">
    <div class="inner">
      <div class="tb-left">
        <span>Serving San Jose · Santa Clara · Sunnyvale · Silicon Valley</span>
      </div>
      <a href="mailto:info@clearlinesigns.com">info@clearlinesigns.com</a>
    </div>
  </div>`;

  /* ── NAV ── */
  const nav = `
  <nav>
    <div class="nav-inner">
      <a href="./index.html" class="logo">
        <img src="./assets/images/logo.png" alt="Clear Line Signs – San Jose Sign Company" />
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="./index.html" class="${isActive('index')}">Home</a></li>
        <li><a href="./services.html" class="${isActive('services')}">Services</a></li>
        <li><a href="./portfolio.html" class="${isActive('portfolio')}">Portfolio</a></li>
        <li><a href="https://blog.clearlinesigns.com" target="_blank">Blog</a></li>
        <li><a href="https://pricing.clearlinesigns.com" target="_blank">Pricing Guide</a></li>
        <li><a href="./contact.html" class="nav-cta ${isActive('contact')}">Free Quote</a></li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;

  /* ── FOOTER ── */
  const footer = `
  <footer>
    <div class="footer-grid">
      <div class="footer-col">
        <div class="footer-logo">
          <img src="./assets/images/logo-white.png" alt="Clear Line Signs" />
        </div>
        <p>Custom commercial signage for businesses across San Jose and Silicon Valley. Design · Fabrication · Installation.</p>
        <p><a href="mailto:info@clearlinesigns.com">info@clearlinesigns.com</a></p>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="./services.html">Indoor &amp; Lobby Signs</a></li>
          <li><a href="./services.html">Outdoor Building Signs</a></li>
          <li><a href="./services.html">Vinyl Graphics &amp; Decals</a></li>
          <li><a href="./services.html">Acrylic &amp; Dimensional Letters</a></li>
          <li><a href="./services.html">Trade Show Displays</a></li>
          <li><a href="./services.html">Custom Signs</a></li>
          <li><a href="https://pricing.clearlinesigns.com">Pricing Guide</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Areas Served</h4>
        <ul>
          <li><a href="./contact.html">San Jose Signs</a></li>
          <li><a href="./contact.html">Santa Clara Signs</a></li>
          <li><a href="./contact.html">Sunnyvale Signs</a></li>
          <li><a href="./contact.html">Milpitas Signs</a></li>
          <li><a href="./contact.html">Mountain View Signs</a></li>
          <li><a href="./contact.html">Cupertino Signs</a></li>
          <li><a href="./contact.html">Campbell Signs</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="./index.html">Home</a></li>
          <li><a href="./portfolio.html">Portfolio</a></li>
          <li><a href="https://blog.clearlinesigns.com">Blog</a></li>
          <li><a href="https://pricing.clearlinesigns.com">Pricing Guide</a></li>
          <li><a href="./contact.html">Get a Quote</a></li>
          <li><a href="mailto:info@clearlinesigns.com">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Clear Line Signs · San Jose, CA · All Rights Reserved</p>
      <p>Custom Signs · Storefront Signs · Business Signs · <a href="./contact.html">Get a Free Quote</a></p>
    </div>
  </footer>`;

  // Inject before body content
  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('afterbegin', topbar);
  document.body.insertAdjacentHTML('beforeend', footer);

  // Hamburger toggle
  document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('navLinks').classList.toggle('open');
  });
})();
