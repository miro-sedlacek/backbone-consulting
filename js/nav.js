/**
 * nav.js — Shared navigation and footer injection for all pages.
 * Injects nav into #nav-placeholder and footer into #footer-placeholder.
 * Sets active nav link by matching window.location.pathname.
 * Handles hamburger menu toggle for mobile.
 */

(function () {
  'use strict';

  var NAV_HTML = [
    '<nav class="site-nav">',
    '  <div class="container">',
    '    <div class="nav-inner">',
    '      <a href="index.html" class="nav-logo">Backbone <em>Consulting</em></a>',
    '      <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle navigation" aria-expanded="false">',
    '        <span></span><span></span><span></span>',
    '      </button>',
    '      <ul class="nav-links" id="nav-links">',
    '        <li><a href="index.html">Home</a></li>',
    '        <li><a href="about.html">About</a></li>',
    '        <li><a href="pricing.html">Pricing</a></li>',
    '        <li><a href="case-studies.html">Case Studies</a></li>',
    '        <li><a href="contact.html">Contact</a></li>',
    '        <li class="nav-cta-item"><a href="contact.html">Schedule a Call</a></li>',
    '      </ul>',
    '    </div>',
    '  </div>',
    '</nav>'
  ].join('\n');

  var FOOTER_HTML = [
    '<footer class="site-footer">',
    '  <div class="container">',
    '    <div class="footer-inner">',
    '      <div class="footer-brand">',
    '        <div class="footer-logo">Backbone Consulting</div>',
    '        <p class="footer-tagline">Operations, automation &amp; Odoo ERP for small and medium businesses.</p>',
    '      </div>',
    '      <nav class="footer-nav" aria-label="Footer navigation">',
    '        <a href="index.html">Home</a>',
    '        <a href="about.html">About</a>',
    '        <a href="pricing.html">Pricing</a>',
    '        <a href="case-studies.html">Case Studies</a>',
    '        <a href="contact.html">Contact</a>',
    '      </nav>',
    '      <div class="footer-contact">',
    '        <a href="mailto:miroslav.sedlacek11@gmail.com">miroslav.sedlacek11@gmail.com</a>',
    '        <a href="tel:+420702065207">+420 702 065 207</a>',
    '        <a href="https://linkedin.com/in/miroslavsedlacek" target="_blank" rel="noopener">LinkedIn</a>',
    '        <span class="footer-location">Prague, Czech Republic</span>',
    '      </div>',
    '    </div>',
    '    <div class="footer-bottom">',
    '      <p class="footer-note">&copy; 2026 Miroslav Sedl&aacute;&ccaron;ek &middot; Prague &middot; All prices exclusive of VAT</p>',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join('\n');

  // ── Inject nav ──
  var navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    navPlaceholder.insertAdjacentHTML('beforebegin', NAV_HTML);
    navPlaceholder.parentNode.removeChild(navPlaceholder);
  }

  // ── Inject footer ──
  var footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.insertAdjacentHTML('beforebegin', FOOTER_HTML);
    footerPlaceholder.parentNode.removeChild(footerPlaceholder);
  }

  // ── Active nav state ──
  // Compares window.location.pathname to each link's href.
  // Handles: '/', '/index.html', '/about.html', '/pricing.html', etc.
  var path = window.location.pathname.replace(/\/$/, '') || '/';

  var navLinkEls = document.querySelectorAll('.nav-links li:not(.nav-cta-item) a');
  navLinkEls.forEach(function (link) {
    var href = link.getAttribute('href');
    var isActive = false;

    if (href === 'index.html') {
      isActive = path === '/' || path === '' || path.endsWith('/index.html') || path.endsWith('/');
    } else {
      isActive = path.endsWith('/' + href) || path === '/' + href || path.endsWith(href);
    }

    if (isActive) {
      link.classList.add('active');
    }
  });

  // ── Hamburger toggle ──
  var hamburger = document.getElementById('nav-hamburger');
  var navLinksEl = document.getElementById('nav-links');

  if (hamburger && navLinksEl) {
    hamburger.addEventListener('click', function () {
      var isOpen = navLinksEl.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a nav link is clicked
    var allLinks = navLinksEl.querySelectorAll('a');
    allLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinksEl.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside the nav
    document.addEventListener('click', function (e) {
      var nav = document.querySelector('.site-nav');
      if (nav && !nav.contains(e.target)) {
        navLinksEl.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

})();
