/* Pick & Go legal pages: show one language, remember the choice */
(function () {
  var root = document.documentElement;
  root.classList.add('js');

  function initial() {
    try {
      var saved = localStorage.getItem('pg-lang');
      if (saved === 'en' || saved === 'es') return saved;
    } catch (e) {}
    return (navigator.language || '').toLowerCase().indexOf('es') === 0 ? 'es' : 'en';
  }

  function apply(lang) {
    root.lang = lang;
    document.querySelectorAll('[data-lang-block]').forEach(function (el) {
      el.hidden = el.getAttribute('data-lang-block') !== lang;
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    var title = document.body.getAttribute('data-title-' + lang);
    if (title) document.title = title;
    try { localStorage.setItem('pg-lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
  });

  apply(initial());
})();
