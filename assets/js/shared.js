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

  var NAV = '<nav id="mainNav"><div class="nav-inner"><a href="' + base + 'index.html" class="logo"><img src="' + base + 'assets/images/logo.webp" srcset="' + base + 'assets/images/logo-sm.webp 360w, ' + base + 'assets/images/logo.webp 720w" sizes="160px" alt="Clear Line Signs" width="160" height="40" /></a><ul class="nav-links" id="navLinks"><li><a href="' + base + 'index.html" class="' + isActive('index') + '">Home</a></li><li><a href="' + base + 'services.html" class="' + isActive('services') + '">Services</a></li><li><a href="' + base + 'products/index.html" class="' + isActive('products') + '">Products</a></li><li><a href="' + base + 'portfolio.html" class="' + isActive('portfolio') + '">Portfolio</a></li><li><a href="' + base + 'about.html" class="' + isActive('about') + '">About</a></li><li><a href="https://clearlinesigns.com/blog/">Blog</a></li><li><a href="' + base + 'sign-copy-generator.html" class="' + isActive('sign-copy-generator') + '">Sign Copy Tool</a></li><li><a href="' + base + 'design-brief.html" class="' + isActive('design-brief') + '">Design Brief</a></li><li><a href="' + base + 'pricing.html" class="' + isActive('pricing') + '">Pricing Guide</a></li><li><a href="tel:4087801035" class="nav-phone">(408) 780-1035</a></li><li><a href="' + base + 'contact.html" class="nav-cta ' + isActive('contact') + '">Free Quote</a></li></ul><button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button></div></nav>';

  var FOOTER = '<footer><div class="footer-grid"><div class="footer-col"><div class="footer-logo"><img src="' + base + 'assets/images/logo-white.webp" alt="Clear Line Signs" width="160" height="40" /></div><p>Custom commercial signage for businesses across San Jose and Silicon Valley. Design \xb7 Fabrication \xb7 Installation.</p><p><a href="tel:4087801035">(408) 780-1035</a></p><p><a href="mailto:info@clearlinesigns.com">info@clearlinesigns.com</a></p><div class="footer-social"><a href="https://www.facebook.com/profile.php?id=61584811306047" target="_blank" rel="noopener" aria-label="Facebook"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a><a href="https://www.linkedin.com/company/clearlinesigns" target="_blank" rel="noopener" aria-label="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a></div></div><div class="footer-col"><h4>Services</h4><ul><li><a href="' + base + 'lobby-signs-san-jose.html">Lobby &amp; Indoor Signs</a></li><li><a href="' + base + 'dimensional-letters-san-jose.html">Dimensional Letters</a></li><li><a href="' + base + 'storefront-signs-san-jose.html">Storefront Signs</a></li><li><a href="' + base + 'channel-letter-signs-bay-area.html">Channel Letters</a></li><li><a href="' + base + 'monument-signs-silicon-valley.html">Monument Signs</a></li><li><a href="' + base + 'window-graphics-san-jose.html">Window &amp; Wall Graphics</a></li><li><a href="' + base + 'vehicle-graphics-san-jose.html">Vehicle Graphics</a></li><li><a href="' + base + 'trade-show-displays-silicon-valley.html">Trade Show Displays</a></li><li><a href="' + base + 'ada-compliant-signs-san-jose.html">ADA Signs</a></li><li><a href="' + base + 'pricing.html">Pricing Guide</a></li></ul></div><div class="footer-col"><h4>Products</h4><ul><li><a href="' + base + 'products/index.html" style="font-weight:600;color:var(--teal-400)">Browse All Products &#8594;</a></li><li><a href="' + base + 'products/vinyl-banners.html">Vinyl Banners</a></li><li><a href="' + base + 'products/window-graphics.html">Window Graphics</a></li><li><a href="' + base + 'products/trade-show-displays.html">Trade Show Displays</a></li><li><a href="' + base + 'products/banner-stands.html">Banner Stands</a></li><li><a href="' + base + 'products/real-estate-signs.html">Real Estate Signs</a></li><li><a href="' + base + 'products/custom-event-tents.html">Event Tents</a></li><li><a href="' + base + 'products/rigid-signs-magnets.html">Rigid Signs &amp; Magnets</a></li></ul></div><div class="footer-col"><h4>Company</h4><ul><li><a href="' + base + 'index.html">Home</a></li><li><a href="' + base + 'about.html">About Us</a></li><li><a href="' + base + 'portfolio.html">Portfolio</a></li><li><a href="https://clearlinesigns.com/blog/">Blog</a></li><li><a href="' + base + 'pricing.html">Pricing Guide</a></li><li><a href="' + base + 'cities.html">Cities We Serve</a></li><li><a href="' + base + 'contact.html">Get a Quote</a></li><li><a href="tel:4087801035">(408) 780-1035</a></li><li><a href="mailto:info@clearlinesigns.com">Contact Us</a></li></ul></div></div><div class="footer-bottom"><p>\u00a9 2026 Clear Line Signs \xb7 San Jose, CA \xb7 (408) 780-1035 \xb7 All Rights Reserved</p><p>Custom Signs \xb7 Storefront Signs \xb7 Business Signs \xb7 <a href="' + base + 'contact.html">Get a Free Quote</a></p></div></footer>';

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