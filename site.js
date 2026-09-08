// DumpSpots — search box and distance sorting. The site works without this file.
(function () {
  var MATERIALS = [{"s":"concrete","n":"Concrete","a":["concrete","cement","asphalt","brick","block","pavers","rubble","masonry"]},{"s":"dirt","n":"Dirt & soil","a":["dirt","soil","fill","sand","gravel","rocks"]},{"s":"construction-debris","n":"Construction debris","a":["construction debris","demolition","drywall","sheetrock","lumber","wood","shingles","roofing","fence","remodel"]},{"s":"mattresses","n":"Mattresses","a":["mattress","box spring","bed"]},{"s":"furniture","n":"Furniture","a":["furniture","couch","sofa","dresser","table","chair","desk"]},{"s":"appliances","n":"Appliances","a":["appliance","washer","dryer","stove","dishwasher","refrigerator","fridge","freezer","water heater","air conditioner"]},{"s":"electronics","n":"TVs & electronics","a":["tv","television","electronics","e-waste","computer","monitor","laptop","printer"]},{"s":"tires","n":"Tires","a":["tire","tires"]},{"s":"paint","n":"Paint","a":["paint","stain","varnish","primer"]},{"s":"motor-oil","n":"Motor oil & antifreeze","a":["motor oil","oil","used oil","antifreeze","coolant","oil filters"]},{"s":"batteries","n":"Batteries","a":["battery","batteries","car battery","lithium"]},{"s":"hazardous-waste","n":"Household chemicals","a":["chemicals","hazardous","solvent","thinner","pesticide","weed killer","pool chemicals","chlorine","fluorescent","light bulbs","propane","cleaners","aerosol"]},{"s":"yard-waste","n":"Yard waste","a":["yard waste","green waste","branches","brush","leaves","palm fronds","stump"]},{"s":"scrap-metal","n":"Scrap metal","a":["metal","scrap","steel","aluminum","copper","rebar"]}];
  var CITIES = [{"s":"palm-springs","n":"Palm Springs","lat":33.8303,"lng":-116.5453},{"s":"cathedral-city","n":"Cathedral City","lat":33.7797,"lng":-116.4653},{"s":"rancho-mirage","n":"Rancho Mirage","lat":33.7397,"lng":-116.4128},{"s":"palm-desert","n":"Palm Desert","lat":33.7222,"lng":-116.3745},{"s":"indio","n":"Indio","lat":33.7206,"lng":-116.2156},{"s":"coachella","n":"Coachella","lat":33.6803,"lng":-116.1739},{"s":"riverside","n":"Riverside","lat":33.9533,"lng":-117.3962},{"s":"moreno-valley","n":"Moreno Valley","lat":33.9425,"lng":-117.2297},{"s":"corona","n":"Corona","lat":33.8753,"lng":-117.5664},{"s":"beaumont","n":"Beaumont","lat":33.9295,"lng":-116.9773},{"s":"temecula","n":"Temecula","lat":33.4936,"lng":-117.1484},{"s":"hemet","n":"Hemet","lat":33.7475,"lng":-116.972},{"s":"san-bernardino","n":"San Bernardino","lat":34.1083,"lng":-117.2898},{"s":"rialto","n":"Rialto","lat":34.1064,"lng":-117.3703},{"s":"redlands","n":"Redlands","lat":34.0556,"lng":-117.1825},{"s":"fontana","n":"Fontana","lat":34.0922,"lng":-117.435},{"s":"ontario","n":"Ontario","lat":34.0633,"lng":-117.6509},{"s":"rancho-cucamonga","n":"Rancho Cucamonga","lat":34.1064,"lng":-117.5931},{"s":"anaheim","n":"Anaheim","lat":33.8366,"lng":-117.9143},{"s":"irvine","n":"Irvine","lat":33.6846,"lng":-117.8265},{"s":"santa-ana","n":"Santa Ana","lat":33.7455,"lng":-117.8677},{"s":"brea","n":"Brea","lat":33.9167,"lng":-117.9001},{"s":"san-juan-capistrano","n":"San Juan Capistrano","lat":33.5017,"lng":-117.6625},{"s":"huntington-beach","n":"Huntington Beach","lat":33.6595,"lng":-117.9988},{"s":"los-angeles","n":"Los Angeles","lat":34.0522,"lng":-118.2437},{"s":"long-beach","n":"Long Beach","lat":33.7701,"lng":-118.1937},{"s":"pasadena","n":"Pasadena","lat":34.1478,"lng":-118.1445},{"s":"whittier","n":"Whittier","lat":33.9792,"lng":-118.0328},{"s":"santa-clarita","n":"Santa Clarita","lat":34.3917,"lng":-118.5426},{"s":"san-diego","n":"San Diego","lat":32.7157,"lng":-117.1611},{"s":"santee","n":"Santee","lat":32.8384,"lng":-116.9739},{"s":"chula-vista","n":"Chula Vista","lat":32.6401,"lng":-117.0842},{"s":"el-cajon","n":"El Cajon","lat":32.7948,"lng":-116.9625},{"s":"escondido","n":"Escondido","lat":33.1192,"lng":-117.0864},{"s":"oceanside","n":"Oceanside","lat":33.1959,"lng":-117.3795},{"s":"glendale","n":"Glendale","lat":34.1425,"lng":-118.2551},{"s":"burbank","n":"Burbank","lat":34.1808,"lng":-118.309},{"s":"torrance","n":"Torrance","lat":33.8358,"lng":-118.3406},{"s":"downey","n":"Downey","lat":33.9401,"lng":-118.1332},{"s":"compton","n":"Compton","lat":33.8958,"lng":-118.2201},{"s":"santa-monica","n":"Santa Monica","lat":34.0195,"lng":-118.4912},{"s":"inglewood","n":"Inglewood","lat":33.9617,"lng":-118.3531},{"s":"pomona","n":"Pomona","lat":34.0551,"lng":-117.75},{"s":"azusa","n":"Azusa","lat":34.1336,"lng":-117.9076},{"s":"carson","n":"Carson","lat":33.8317,"lng":-118.282},{"s":"lancaster","n":"Lancaster","lat":34.6868,"lng":-118.1542},{"s":"palmdale","n":"Palmdale","lat":34.5794,"lng":-118.1165},{"s":"sun-valley","n":"Sun Valley (Los Angeles)","lat":34.2178,"lng":-118.3701},{"s":"el-monte","n":"El Monte","lat":34.0686,"lng":-118.0276},{"s":"city-of-industry","n":"City of Industry","lat":34.0197,"lng":-117.9587},{"s":"calabasas","n":"Calabasas","lat":34.1578,"lng":-118.6384},{"s":"castaic","n":"Castaic","lat":34.4889,"lng":-118.6229},{"s":"fullerton","n":"Fullerton","lat":33.8704,"lng":-117.9242},{"s":"orange","n":"Orange","lat":33.7879,"lng":-117.8531},{"s":"stanton","n":"Stanton","lat":33.8025,"lng":-117.9931},{"s":"costa-mesa","n":"Costa Mesa","lat":33.6411,"lng":-117.9187},{"s":"newport-beach","n":"Newport Beach","lat":33.6189,"lng":-117.9289},{"s":"mission-viejo","n":"Mission Viejo","lat":33.6,"lng":-117.672},{"s":"garden-grove","n":"Garden Grove","lat":33.7743,"lng":-117.938},{"s":"lake-forest","n":"Lake Forest","lat":33.6469,"lng":-117.6892},{"s":"chino","n":"Chino","lat":34.0122,"lng":-117.6889},{"s":"upland","n":"Upland","lat":34.0975,"lng":-117.6484},{"s":"victorville","n":"Victorville","lat":34.5362,"lng":-117.2928},{"s":"hesperia","n":"Hesperia","lat":34.4264,"lng":-117.3009},{"s":"apple-valley","n":"Apple Valley","lat":34.5008,"lng":-117.1859},{"s":"barstow","n":"Barstow","lat":34.8958,"lng":-117.0173},{"s":"big-bear-lake","n":"Big Bear Lake","lat":34.2439,"lng":-116.9114},{"s":"yucca-valley","n":"Yucca Valley","lat":34.1142,"lng":-116.4322},{"s":"twentynine-palms","n":"Twentynine Palms","lat":34.1356,"lng":-116.0542},{"s":"yucaipa","n":"Yucaipa","lat":34.0336,"lng":-117.0431},{"s":"colton","n":"Colton","lat":34.0739,"lng":-117.3137},{"s":"highland","n":"Highland","lat":34.1283,"lng":-117.2087},{"s":"lake-arrowhead","n":"Lake Arrowhead","lat":34.2483,"lng":-117.1892},{"s":"perris","n":"Perris","lat":33.7825,"lng":-117.2286},{"s":"menifee","n":"Menifee","lat":33.6971,"lng":-117.185},{"s":"murrieta","n":"Murrieta","lat":33.5539,"lng":-117.2139},{"s":"lake-elsinore","n":"Lake Elsinore","lat":33.6681,"lng":-117.3273},{"s":"idyllwild","n":"Idyllwild","lat":33.74,"lng":-116.7189},{"s":"blythe","n":"Blythe","lat":33.6103,"lng":-114.5964},{"s":"la-quinta","n":"La Quinta","lat":33.6634,"lng":-116.31},{"s":"desert-hot-springs","n":"Desert Hot Springs","lat":33.9611,"lng":-116.5017},{"s":"jurupa-valley","n":"Jurupa Valley","lat":34,"lng":-117.4855},{"s":"carlsbad","n":"Carlsbad","lat":33.1581,"lng":-117.3506},{"s":"vista","n":"Vista","lat":33.2,"lng":-117.2425},{"s":"san-marcos","n":"San Marcos","lat":33.1434,"lng":-117.1661},{"s":"poway","n":"Poway","lat":32.9628,"lng":-117.0359},{"s":"la-mesa","n":"La Mesa","lat":32.7678,"lng":-117.0231},{"s":"national-city","n":"National City","lat":32.6781,"lng":-117.0992},{"s":"ramona","n":"Ramona","lat":33.0417,"lng":-116.8681},{"s":"fallbrook","n":"Fallbrook","lat":33.3764,"lng":-117.2511},{"s":"lakeside","n":"Lakeside","lat":32.8573,"lng":-116.9225},{"s":"borrego-springs","n":"Borrego Springs","lat":33.2559,"lng":-116.375}];

  // Opened from a folder (file://) instead of a web server? Make links work locally.
  var LOCAL = location.protocol === 'file:';
  var ROOT = LOCAL ? (document.querySelector('link[rel=stylesheet]').getAttribute('href').replace('style.css', '') || './') : '/';
  function go(path) { location.href = LOCAL ? ROOT + path.replace(/^\//, '').replace(/\/(\?|$)/, '/index.html$1') : path; }
  if (LOCAL) {
    Array.prototype.forEach.call(document.querySelectorAll('a[href^="/"]'), function (a) {
      var h = a.getAttribute('href'), hash = '';
      if (h.indexOf('#') >= 0) { hash = h.slice(h.indexOf('#')); h = h.slice(0, h.indexOf('#')); }
      a.setAttribute('href', ROOT + h.slice(1).replace(/\/(\?|$)/, '/index.html$1') + hash);
    });
  }

  function norm(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim(); }
  function findMaterial(q) {
    q = norm(q); if (!q) return null;
    var best = null, len = 0;
    MATERIALS.forEach(function (m) {
      [m.n].concat(m.a).forEach(function (a) {
        a = norm(a);
        if (a && ((' ' + q + ' ').indexOf(' ' + a + ' ') >= 0 || (' ' + a + ' ').indexOf(' ' + q + ' ') >= 0) && a.length > len) { best = m; len = a.length; }
      });
    });
    return best;
  }
  function findCity(q) {
    q = norm(q).replace(/\b(ca|california)\b/g, '').trim(); if (!q) return null;
    var hit = null;
    CITIES.forEach(function (c) { var n = norm(c.n); if (n === q) hit = c; else if (!hit && (n.indexOf(q) === 0 || q.indexOf(n) >= 0)) hit = c; });
    return hit;
  }
  function nearest(lat, lng) {
    var best = null, d = Infinity;
    CITIES.forEach(function (c) { var x = (c.lat - lat) * (c.lat - lat) + (c.lng - lng) * (c.lng - lng); if (x < d) { d = x; best = c; } });
    return best;
  }
  function locate(cb, msg) {
    if (!navigator.geolocation) { msg.textContent = 'Location not available here. Type your city.'; return; }
    msg.textContent = 'Finding you…';
    navigator.geolocation.getCurrentPosition(function (p) { msg.textContent = ''; cb(p.coords.latitude, p.coords.longitude); },
      function () { msg.textContent = 'Couldn\u2019t get your location. Type your city.'; }, { timeout: 8000, maximumAge: 600000 });
  }

  // Home / 404 search
  var form = document.querySelector('[data-finder]');
  if (form) {
    var qIn = form.querySelector('[name=q]'), cIn = form.querySelector('[name=city]'), msg = form.querySelector('[data-msg]');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var m = findMaterial(qIn.value), c = findCity(cIn.value);
      if (m && c) go('/materials/' + m.s + '/?city=' + c.s);
      else if (m) go('/materials/' + m.s + '/');
      else if (c) go('/california/' + c.s + '/');
      else msg.textContent = 'Try something like “concrete” or “mattress”, and a city like “Palm Springs”.';
    });
    form.querySelector('[data-locate]').addEventListener('click', function () {
      locate(function (lat, lng) { var c = nearest(lat, lng); if (c) cIn.value = c.n; }, msg);
    });
  }

  // Material page: sort spots by distance from a city or from the user
  var sorter = document.querySelector('[data-sorter]');
  if (sorter) {
    var lists = Array.prototype.slice.call(document.querySelectorAll('[data-list],[data-list2]')), input = sorter.querySelector('[name=city]'), smsg = sorter.querySelector('[data-msg]');
    function sortFrom(lat, lng, label) {
     lists.forEach(function (list) {
      var items = Array.prototype.slice.call(list.querySelectorAll('.spot'));
      items.forEach(function (li) {
        var d = 3958.8 * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin((li.dataset.lat - lat) * Math.PI / 360), 2) + Math.cos(lat * Math.PI / 180) * Math.cos(li.dataset.lat * Math.PI / 180) * Math.pow(Math.sin((li.dataset.lng - lng) * Math.PI / 360), 2)));
        li.dataset.d = d;
        var meta = li.querySelector('.spot-meta');
        meta.textContent = meta.textContent.replace(/ · [\d.]+ mi.*$/, '') + ' · ' + (d < 10 ? d.toFixed(1) : Math.round(d)) + ' mi' + (label ? ' from ' + label : ' away');
      });
      items.sort(function (a, b) { return a.dataset.d - b.dataset.d; });
      var ul = document.createElement('ul'); ul.className = 'spots';
      items.forEach(function (li) { ul.appendChild(li); });
      list.innerHTML = ''; list.appendChild(ul);
     });
    }
    // Used-oil centers: fetch the list on demand and show the closest 20
    var nearest = document.querySelector('[data-nearest]'), oilData = null;
    function nearestOil(lat, lng) {
      if (!nearest) return;
      var src = nearest.getAttribute('data-src'); if (LOCAL) src = ROOT + src.slice(1);
      (oilData ? Promise.resolve(oilData) : fetch(src).then(function (r) { return r.json(); }).then(function (d) { oilData = d; return d; })).then(function (d) {
        var rows = d.map(function (o) { var la = o[6], lo = o[7]; var dist = 3958.8 * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin((la - lat) * Math.PI / 360), 2) + Math.cos(lat * Math.PI / 180) * Math.cos(la * Math.PI / 180) * Math.pow(Math.sin((lo - lng) * Math.PI / 360), 2))); return { o: o, d: dist }; });
        rows.sort(function (a, b) { return a.d - b.d; });
        var ul = nearest.querySelector('ul'); ul.innerHTML = '';
        rows.slice(0, 20).forEach(function (r) {
          var o = r.o, li = document.createElement('li'); li.className = 'spot oil';
          var dest = encodeURIComponent(o[1] + ', ' + o[2] + ', CA ' + o[3]);
          li.innerHTML = '<span class="spot-name"></span><p class="spot-meta"></p><p class="spot-act"><a target="_blank" rel="noopener nofollow" data-track="directions">Directions</a>' + (o[4] ? '<a data-track="call"></a>' : '') + '</p>';
          li.querySelector('.spot-name').textContent = o[0];
          li.querySelector('.spot-meta').textContent = o[1] + ', ' + o[2] + ' · about ' + (r.d < 10 ? r.d.toFixed(1) : Math.round(r.d)) + ' mi' + (o[5] ? ' · takes oil filters' : '');
          li.querySelector('[data-track=directions]').href = 'https://www.google.com/maps/dir/?api=1&destination=' + dest;
          if (o[4]) { var t = li.querySelector('[data-track=call]'); t.href = 'tel:' + o[4].replace(/[^0-9+]/g, ''); t.textContent = o[4]; }
          ul.appendChild(li);
        });
        nearest.hidden = false;
      }).catch(function () {});
    }
    function applyCity(c) { if (!c) return; input.value = c.n; sortFrom(c.lat, c.lng, c.n); nearestOil(c.lat, c.lng); }
    input.addEventListener('change', function () { var c = findCity(input.value); if (c) applyCity(c); else smsg.textContent = 'We don\u2019t cover that city yet.'; });
    sorter.querySelector('[data-locate]').addEventListener('click', function () { locate(function (lat, lng) { sortFrom(lat, lng, ''); nearestOil(lat, lng); }, smsg); });
    var param = new URLSearchParams(location.search).get('city');
    if (param) applyCity(CITIES.filter(function (c) { return c.s === param; })[0]);
  }
})();
