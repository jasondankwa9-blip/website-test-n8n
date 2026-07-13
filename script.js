// Colours Wood Works — shared site behaviour
// No external dependencies. Carousels use native scroll-snap; FAQ uses native <details>.

(function () {
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('primaryNav');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Infinite-feeling carousels (project carousel, magazine carousel) ----
  document.querySelectorAll('[data-carousel]').forEach(function (wrap) {
    var track = wrap.querySelector('.carousel-track');
    var prevBtn = wrap.querySelector('.carousel-arrow.prev');
    var nextBtn = wrap.querySelector('.carousel-arrow.next');
    if (!track || !prevBtn || !nextBtn) return;

    function step() {
      var item = track.querySelector('.carousel-item');
      return item ? item.getBoundingClientRect().width + 20 : track.clientWidth * 0.8;
    }

    nextBtn.addEventListener('click', function () {
      var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 10;
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: step(), behavior: 'smooth' });
      }
    });

    prevBtn.addEventListener('click', function () {
      var atStart = track.scrollLeft <= 10;
      if (atStart) {
        track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: -step(), behavior: 'smooth' });
      }
    });
  });

  // ---- Back to top ----
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Cookie consent banner ----
  var CONSENT_KEY = 'coloursWoodWorksConsent';
  var banner = document.getElementById('cookieBanner');
  if (!banner) return;

  var acceptBtn = document.getElementById('cookieAccept');
  var rejectBtn = document.getElementById('cookieReject');
  var preferencesBtn = document.getElementById('cookiePreferences');
  var whatsappFloat = document.querySelector('.whatsapp-float');

  function getStoredConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function storeConsent(value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* localStorage unavailable */ }
  }

  // Keep the floating WhatsApp (and back-to-top) button above the cookie
  // banner so it's never hidden behind it, on any screen size.
  function positionFloatingButtons() {
    var offset = 18;
    if (banner && !banner.hidden) offset = banner.offsetHeight + 8;
    if (whatsappFloat) whatsappFloat.style.bottom = offset + 'px';
    if (backToTop) backToTop.style.bottom = (offset + 64) + 'px';
  }

  function dismissBanner(value) {
    storeConsent(value);
    banner.hidden = true;
    positionFloatingButtons();
  }

  if (!getStoredConsent()) banner.hidden = false;
  positionFloatingButtons();
  requestAnimationFrame(positionFloatingButtons);
  window.addEventListener('load', positionFloatingButtons);
  window.addEventListener('resize', positionFloatingButtons);
  if (window.ResizeObserver) {
    try { new ResizeObserver(positionFloatingButtons).observe(banner); } catch (e) {}
  }

  acceptBtn.addEventListener('click', function () {
    // TODO: once a CMP script (CookieYes/Cookiebot) is added in <head>,
    // this is where you'd call its "accept all" API instead.
    dismissBanner('accepted');
  });
  rejectBtn.addEventListener('click', function () {
    dismissBanner('rejected');
  });
  preferencesBtn.addEventListener('click', function () {
    window.alert('Cookie preferences: replace this with your CMP\'s preferences panel (CookieYes/Cookiebot) once installed.');
  });
})();
