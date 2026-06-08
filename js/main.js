/**
 * main.js — Shared behaviors across all pages.
 * Handles: scroll-reveal animation, pricing tab switching.
 */

(function () {
  'use strict';

  // ── Scroll reveal ──
  // Adds .visible to .reveal elements as they enter the viewport.
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  // ── Pricing tab switching ──
  // Used on pricing.html. Exported to window so inline onclick can call it.
  window.showTab = function (id, btn) {
    document.querySelectorAll('.tab').forEach(function (t) {
      t.classList.remove('active');
    });
    document.querySelectorAll('.panel').forEach(function (p) {
      p.classList.remove('active');
    });

    btn.classList.add('active');

    var panel = document.getElementById('panel-' + id);
    if (panel) {
      panel.classList.add('active');
      // Trigger reveals inside the newly shown panel
      panel.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('visible');
      });
    }
  };

})();
