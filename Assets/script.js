(function () {

  const links = document.querySelectorAll('nav a[href]');
  if (!links.length) return;

  const current = window.location.pathname.split('/').pop();

  links.forEach((a) => {
    const href = a.getAttribute('href');
    if (!href) return;

    // Normalize to filename
    const target = href.split('/').pop();

    if (target === current || href === window.location.pathname) {
      a.classList.add('active');
      return;
    }

    // Home page special-case when visiting root index.html
    if (current === 'index.html' && target === 'index.html') {
      a.classList.add('active');
    }
  });
})();

