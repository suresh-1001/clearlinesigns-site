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
