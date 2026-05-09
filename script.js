document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.site-header');
  const backToTop = document.getElementById('backToTop');
  const heroSection = document.querySelector('.hero-section');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const pageLoader = document.getElementById('pageLoader');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const testimonialBtns = document.querySelectorAll('.testimonial-btn');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const counters = document.querySelectorAll('.counter');

  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    header.classList.toggle('scrolled', scroll > 40);
    backToTop.style.display = scroll > 500 ? 'grid' : 'none';
  });

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
    });
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const filterProjects = (filter) => {
    projectCards.forEach((card) => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((button) => button.classList.remove('active'));
      btn.classList.add('active');
      filterProjects(btn.dataset.filter);
    });
  });

  testimonialBtns.forEach((button) => {
    button.addEventListener('click', () => {
      testimonialBtns.forEach((btn) => btn.classList.remove('active'));
      testimonialCards.forEach((card) => card.classList.remove('active'));
      button.classList.add('active');
      document.querySelector(`.testimonial-card[data-index="${button.dataset.slide}"]`).classList.add('active');
    });
  });

  let activeSlide = 0;
  setInterval(() => {
    activeSlide = (activeSlide + 1) % testimonialCards.length;
    testimonialBtns[activeSlide].click();
  }, 8000);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const countEl = entry.target;
        const target = +countEl.dataset.target;
        let start = 0;
        const increment = Math.ceil(target / 110);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            countEl.textContent = target;
            clearInterval(timer);
          } else {
            countEl.textContent = start;
          }
        }, 18);
        observer.unobserve(countEl);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach((counter) => observer.observe(counter));

  AOS.init({
    duration: 900,
    easing: 'ease-out-cubic',
    once: true,
    mirror: false,
  });

  window.addEventListener('load', () => {
    pageLoader.classList.add('fade-out');
    setTimeout(() => {
      pageLoader.style.display = 'none';
    }, 700);
  });
});
