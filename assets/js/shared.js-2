/* shared.js — injects nav, topbar, and footer into every page */
(function () {
  var rawPath = window.location.pathname.replace(/\/$/, '').split('/').pop() || 'index';
  var path = rawPath.replace(/\.html$/, '') || 'index';

  function isActive(page) {
    if (page === 'index' && (!path || path === 'index')) return 'active';
    return path.startsWith(page) ? 'active' : '';
  }

  var TOPBAR = '<div class="topbar"><div class="inner"><div class="tb-left"><span>Serving San Jose \xb7 Santa Clara \xb7 Sunnyvale \xb7 Silicon Valley</span></div><div class="tb-right"><a href="tel:4087801035">(408) 780-1035</a><a href="mailto:info@clearlinesigns.com">info@clearlinesigns.com</a></div></div></div>';

  var NAV = '<nav id="mainNav"><div class="nav-inner"><a href="./index.html" class="logo"><img src="./assets/images/logo.webp" alt="Clear Line Signs" /></a><ul class="nav-links" id="navLinks"><li><a href="./index.html" class="' + isActive('index') + '">Home</a></li><li><a href="./services.html" class="' + isActive('services') + '">Services</a></li><li><a href="./portfolio.html" class="' + isActive('portfolio') + '">Portfolio</a></li><li><a href="https://blog.clearlinesigns.com" target="_blank">Blog</a></li><li><a href="./pricing.html" class="' + isActive('pricing') + '">Pricing Guide</a></li><li><a href="tel:4087801035" class="nav-phone">(408) 780-1035</a></li><li><a href="./contact.html" class="nav-cta ' + isActive('contact') + '">Free Quote</a></li></ul><button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button></div></nav>';

  var FOOTER = '<footer><div class="footer-grid"><div class="footer-col"><div class="footer-logo"><img src="./assets/images/logo-white.webp" alt="Clear Line Signs" /></div><p>Custom commercial signage for businesses across San Jose and Silicon Valley. Design \xb7 Fabrication \xb7 Installation.</p><p><a href="tel:4087801035">(408) 780-1035</a></p><p><a href="mailto:info@clearlinesigns.com">info@clearlinesigns.com</a></p></div><div class="footer-col"><h4>Services</h4><ul><li><a href="./services.html">Indoor &amp; Lobby Signs</a></li><li><a href="./services.html">Outdoor Building Signs</a></li><li><a href="./services.html">Vinyl Graphics &amp; Decals</a></li><li><a href="./services.html">Acrylic &amp; Dimensional Letters</a></li><li><a href="./services.html">Trade Show Displays</a></li><li><a href="./services.html">Custom Signs</a></li><li><a href="./pricing.html">Pricing Guide</a></li></ul></div><div class="footer-col"><h4>Areas Served</h4><ul><li><a href="./contact.html">San Jose Signs</a></li><li><a href="./contact.html">Santa Clara Signs</a></li><li><a href="./contact.html">Sunnyvale Signs</a></li><li><a href="./contact.html">Milpitas Signs</a></li><li><a href="./contact.html">Mountain View Signs</a></li><li><a href="./contact.html">Cupertino Signs</a></li><li><a href="./contact.html">Campbell Signs</a></li></ul></div><div class="footer-col"><h4>Company</h4><ul><li><a href="./index.html">Home</a></li><li><a href="./portfolio.html">Portfolio</a></li><li><a href="https://blog.clearlinesigns.com" target="_blank">Blog</a></li><li><a href="./pricing.html">Pricing Guide</a></li><li><a href="./contact.html">Get a Quote</a></li><li><a href="tel:4087801035">(408) 780-1035</a></li><li><a href="mailto:info@clearlinesigns.com">Contact Us</a></li></ul></div></div><div class="footer-bottom"><p>\u00a9 2025 Clear Line Signs \xb7 San Jose, CA \xb7 (408) 780-1035 \xb7 All Rights Reserved</p><p>Custom Signs \xb7 Storefront Signs \xb7 Business Signs \xb7 <a href="./contact.html">Get a Free Quote</a></p></div></footer>';

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
