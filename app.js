(function () {
  var S = window.SITE_CONFIG || {};
  var flagsOn = S.showFlags !== false;
  var review = [];

  function get(path) {
    return path.split('.').reduce(function (o, k) { return o && o[k]; }, S) || '';
  }
  function chip(el, label, note, kind) {
    review.push({ kind: kind, label: label, note: note });
    if (!flagsOn) return;
    var c = document.createElement('span');
    c.className = 'flag flag--' + kind;
    c.textContent = kind === 'link' ? 'Add link' : kind === 'text' ? 'Placeholder' : 'Verify';
    c.title = note;
    el.appendChild(c);
  }

  // Links
  document.querySelectorAll('[data-link]').forEach(function (el) {
    var key = el.getAttribute('data-link');
    var url = (S.links || {})[key];
    if (url) {
      el.href = url;
      if (/^https?:/i.test(url)) { el.target = '_blank'; el.rel = 'noopener'; }
    } else {
      el.setAttribute('href', '#');
      el.setAttribute('aria-disabled', 'true');
      el.addEventListener('click', function (e) { e.preventDefault(); });
      if (flagsOn) { el.classList.add('is-placeholder'); chip(el, 'Link: ' + key, 'No URL set for "' + key + '" in config.js', 'link'); }
      else { review.push({ kind: 'link', label: 'Link: ' + key, note: 'missing' }); if (!S.keepEmptyButtons) el.hidden = true; }
    }
  });

  // Text from config (stats, contact, conference)
  document.querySelectorAll('[data-text]').forEach(function (el) {
    var key = el.getAttribute('data-text');
    var val = get(key);
    var wrap = el.closest('[data-wrap]');
    if (val) {
      el.textContent = val;
      if (/^https?:/i.test(val) === false && el.tagName === 'A' && key.indexOf('email') > -1) el.href = 'mailto:' + val;
      if (el.tagName === 'A' && key.indexOf('phone') > -1) el.href = 'tel:' + val.replace(/[^+\d]/g, '');
    } else {
      if (flagsOn) { el.textContent = '[add ' + key.split('.').pop() + ']'; chip(el.parentNode, key, 'Empty in config.js', 'text'); }
      else { review.push({ kind: 'text', label: key, note: 'missing' }); if (wrap) wrap.hidden = true; else el.hidden = true; }
    }
  });

  // Hide optional blocks that are empty in production
  document.querySelectorAll('[data-hide-empty]').forEach(function (el) {
    var key = el.getAttribute('data-hide-empty');
    if (!get(key) && !flagsOn) el.hidden = true;
  });

  // Verification flags
  document.querySelectorAll('[data-flag]').forEach(function (el) {
    var key = el.getAttribute('data-flag');
    var note = (S.flags || {})[key];
    if (note) chip(el, key, note, 'verify');
  });

  // Review panel (preview mode only)
  if (flagsOn) {
    var btn = document.createElement('button');
    btn.className = 'review-btn';
    btn.type = 'button';
    btn.textContent = 'Preview mode: ' + review.length + ' items to confirm';
    var panel = document.createElement('aside');
    panel.className = 'review-panel';
    panel.hidden = true;
    panel.setAttribute('aria-label', 'Items to confirm before publishing');
    var seen = {}; review = review.filter(function (r) { var k = r.label + r.note; if (seen[k]) return false; seen[k] = 1; return true; });
    btn.textContent = 'Preview mode: ' + review.length + ' items to confirm';
    var html = '<h2>Confirm before publishing</h2><p>Set <code>showFlags: false</code> in config.js to hide this.</p><ul>';
    review.forEach(function (r) {
      html += '<li><strong>' + r.label + '</strong> ' + (r.kind === 'verify' ? r.note : r.kind === 'link' ? 'Link not set.' : 'Value not set.') + '</li>';
    });
    panel.innerHTML = html + '</ul>';
    btn.addEventListener('click', function () { panel.hidden = !panel.hidden; });
    document.body.appendChild(panel);
    document.body.appendChild(btn);
  }
})();
