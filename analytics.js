// Google Analytics. Put your GA4 Measurement ID (looks like G-XXXXXXXXXX) between the quotes.
// This file is on every page, so this is the only line you change.
var GA_MEASUREMENT_ID = 'G-MQ9H368Z60';

(function () {
  if (!GA_MEASUREMENT_ID) return;
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
  document.head.appendChild(s);
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  // Counts taps on Directions and Call links.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-track]');
    if (a) gtag('event', a.getAttribute('data-track'), { event_label: document.title });
  });
})();
