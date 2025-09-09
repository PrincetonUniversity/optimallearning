const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('nav-open');
    const isExpanded = mainNav.classList.contains('nav-open');
    menuToggle.setAttribute('aria-expanded', isExpanded);
  });
}
