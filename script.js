// Colours Wood Works — mobile nav toggle + cookie consent banner
// No external dependencies, no tracking logic (that belongs in the CMP snippet in <head>).

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

  // ---- Cookie consent banner ----
  var CONSENT_KEY = 'coloursWoodWorksConsent';
  var banner = document.getElementById('cookieBanner');
  if (!banner) return;

  var acceptBtn = document.getElementById('cookieAccept');
  var rejectBtn = document.getElementById('cookieReject');
  var preferencesBtn = document.getElementById('cookiePreferences');

  function getStoredConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (e) { /* localStorage unavailable — banner will just reappear next visit */ }
  }

  if (!getStoredConsent()) {
    banner.hidden = false;
  }

  acceptBtn.addEventListener('click', function () {
    storeConsent('accepted');
    banner.hidden = true;
    // TODO: once a CMP script (CookieYes/Cookiebot) is added in <head>,
    // this is where you'd call its "accept all" API instead.
  });

  rejectBtn.addEventListener('click', function () {
    storeConsent('rejected');
    banner.hidden = true;
  });

  preferencesBtn.addEventListener('click', function () {
    // Placeholder: a real CMP will replace this with a granular preferences modal.
    window.alert('Cookie preferences: replace this with your CMP\'s preferences panel (CookieYes/Cookiebot) once installed.');
  });
})();
