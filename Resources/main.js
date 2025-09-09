const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('nav-open');
    const isExpanded = mainNav.classList.contains('nav-open');
    menuToggle.setAttribute('aria-expanded', isExpanded);
  });
}

const backToTopButton = document.querySelector('.back-to-top');
const siteNav = document.querySelector('.site-nav');

if (backToTopButton && siteNav) {
  window.addEventListener('scroll', () => {
    const siteNavRect = siteNav.getBoundingClientRect();
    if (siteNavRect.bottom < 0) {
      backToTopButton.classList.add('show-btt');
    } else {
      backToTopButton.classList.remove('show-btt');
    }
  });
}
