/* ============ THEME TOGGLE ============ */
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  if (saved) {
    root.setAttribute('data-theme', saved);
  } else if (prefersLight) {
    root.setAttribute('data-theme', 'light');
  }

  toggle.addEventListener('click', function () {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

/* ============ MOBILE MENU ============ */
(function () {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  menuBtn.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ============ TYPING EFFECT ============ */
(function () {
  const el = document.getElementById('typing');
  if (!el) return;

  const roles = [
    'Software Engineer',
    'Machine Learning Enthusiast',
    'Data Analyst',
    'Backend Developer'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(tick, deleting ? 45 : 85);
  }

  tick();
})();

/* ============ PROJECT CAROUSELS ============ */
(function () {
  const carousels = document.querySelectorAll('[data-carousel]');

  carousels.forEach(function (carousel) {
    const track = carousel.querySelector('.carousel-track');
    const images = track.querySelectorAll('img');
    const dotsWrap = carousel.querySelector('.carousel-dots');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    const slideCount = images.length;
    let index = 0;
    let timer = null;

    images.forEach(function (_, i) {
      const dot = document.createElement('span');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', function () {
        goTo(i);
        restart();
      });
      dotsWrap.appendChild(dot);
    });
    const dots = dotsWrap.querySelectorAll('span');

    function render() {
      track.style.transform = 'translateX(-' + (index * (100 / slideCount)) + '%)';
      dots.forEach(function (d, i) { d.classList.toggle('active', i === index); });
    }

    function goTo(i) {
      index = (i + slideCount) % slideCount;
      render();
    }

    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    function start() {
      timer = setInterval(next, 3200);
    }
    function stop() {
      clearInterval(timer);
    }
    function restart() {
      stop();
      start();
    }

    nextBtn.addEventListener('click', function () { next(); restart(); });
    prevBtn.addEventListener('click', function () { prev(); restart(); });
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);

    render();
    start();
  });
})();

/* ============ CONTACT FORM ============ */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Message Sent ✓';
    form.reset();
    setTimeout(function () { btn.textContent = original; }, 2500);
  });
})();