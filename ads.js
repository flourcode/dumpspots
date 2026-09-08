// Google AdSense. After approval, put your publisher ID (looks like ca-pub-1234567890123456) between the quotes.
// Ads are placed automatically by Google (Auto ads) so you don't need to edit any pages.
// Also paste your ads.txt line into /ads.txt.
var ADSENSE_CLIENT = '';

(function () {
  if (!ADSENSE_CLIENT) return;
  var s = document.createElement('script');
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + encodeURIComponent(ADSENSE_CLIENT);
  document.head.appendChild(s);
})();
