const hamburger = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.mobile-nav');
const navLink = document.querySelector('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLink.forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));
