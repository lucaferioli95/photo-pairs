/* Shared "Install app" / "Uninstall app" button. Same file in every app. Needs a <button id="installBtn">. Optional <span id="hostNote"> shows where the app is hosted.
   Shows "Install app" in the browser and "Uninstall app" (with steps) once installed. Uses the browser's install
   prompt when it has one, otherwise shows short steps for the current browser. */
(function () {
  var note = document.getElementById('hostNote');
  if (note) {
    var h = location.hostname;
    note.textContent = /workers\.dev$/.test(h) ? 'Hosted on Cloudflare'
      : /github\.io$/.test(h) ? 'Hosted on GitHub Pages (old address)'
      : /netlify\.app$/.test(h) ? 'Hosted on Netlify'
      : (h === 'localhost' || h === '127.0.0.1') ? 'Local test copy' : 'Hosted on ' + h;
  }
  var btn = document.getElementById('installBtn');
  if (!btn) return;
  var evt = null;
  var standalone = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  function hide() { btn.hidden = true; }
  var appName = (document.title || 'this app').split(/[·|–-]/)[0].trim();
  if (standalone) {
    btn.hidden = false;
    btn.textContent = 'Uninstall app';
    btn.addEventListener('click', function () {
      var ua = navigator.userAgent || '';
      show(/iPhone|iPad|iPod/.test(ua)
        ? 'Press and hold the app icon on your Home Screen, then choose "Remove App".'
        : /Android/.test(ua)
          ? 'Press and hold the app icon, then choose "Uninstall" (or drag it to Uninstall).'
          : 'Click the menu (⋮ or ⋯) at the top right of this app window, then choose "Uninstall ' + appName + '". You can also do it from chrome://apps (right-click the app) in Chrome. Your saved data stays online if you use sync.');
    });
    return;
  }
  btn.hidden = false;
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); evt = e; });
  window.addEventListener('appinstalled', function () { evt = null; hide(); });
  function show(msg) {
    var old = document.getElementById('installHelp');
    if (old) old.remove();
    var d = document.createElement('div');
    d.id = 'installHelp'; d.setAttribute('role', 'status');
    d.style.cssText = 'position:fixed;left:16px;right:16px;bottom:16px;max-width:420px;margin:0 auto;padding:12px 14px;border-radius:8px;background:#222;color:#fff;font:14px/1.45 system-ui,sans-serif;box-shadow:0 4px 16px rgba(0,0,0,.35);z-index:99999;cursor:pointer';
    d.textContent = msg + '  (tap to close)';
    d.addEventListener('click', function () { d.remove(); });
    document.body.appendChild(d);
    setTimeout(function () { if (d.parentNode) d.remove(); }, 20000);
  }
  function help() {
    var ua = navigator.userAgent || '';
    var steps = /iPhone|iPad|iPod/.test(ua)
      ? 'In Safari, tap the Share button, then "Add to Home Screen".'
      : /Android/.test(ua)
        ? 'In Chrome, open the ⋮ menu, then "Install app" (or "Add to Home screen").'
        : /Firefox/.test(ua)
          ? 'Firefox on a computer cannot install apps. Open this page in Chrome or Edge.'
          : 'In Chrome or Edge, click the install icon at the right end of the address bar, or open the menu and choose "Install".';
    show(steps);
  }
  btn.addEventListener('click', function () {
    if (!evt) { help(); return; }
    evt.prompt();
    evt.userChoice.finally(function () { evt = null; });
  });
})();
