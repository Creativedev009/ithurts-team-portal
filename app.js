// Fills the page from config.js and runs the daily checklist (ticks are remembered per day in this browser).
(function () {
  var cfg = window.PORTAL || {};

  var open = document.getElementById('open-studio');
  var urlEl = document.getElementById('studio-url');
  if (open && cfg.studioUrl) open.href = cfg.studioUrl;
  if (urlEl) urlEl.textContent = cfg.studioUrl || 'not set yet';

  var owner = document.getElementById('owner-contact');
  if (owner) owner.textContent = cfg.ownerContact || '';

  var links = document.getElementById('links');
  if (links && cfg.links) {
    cfg.links.forEach(function (l) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = l.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = l.label;
      li.appendChild(a);
      links.appendChild(li);
    });
  }

  // Daily checklist: one tick list per calendar day, kept in this browser only.
  var list = document.getElementById('checklist');
  if (!list) return;
  var today = new Date().toISOString().slice(0, 10);
  var key = 'ithurts-checklist-' + today;
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { saved = {}; }
  var dateEl = document.getElementById('checklist-date');
  if (dateEl) dateEl.textContent = new Date().toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' });

  var boxes = list.querySelectorAll('input[type="checkbox"]');
  function update() {
    var done = 0;
    boxes.forEach(function (b) { if (b.checked) done += 1; });
    var p = document.getElementById('progress');
    if (p) p.textContent = done + ' of ' + boxes.length + ' done';
  }
  boxes.forEach(function (b) {
    b.checked = Boolean(saved[b.id]);
    b.addEventListener('change', function () {
      saved[b.id] = b.checked;
      try { localStorage.setItem(key, JSON.stringify(saved)); } catch (e) { /* private window: ticks are not kept */ }
      update();
    });
  });
  var reset = document.getElementById('reset');
  if (reset) reset.addEventListener('click', function () {
    boxes.forEach(function (b) { b.checked = false; });
    saved = {};
    try { localStorage.removeItem(key); } catch (e) { /* ignore */ }
    update();
  });
  update();
})();
