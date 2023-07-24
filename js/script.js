const hamburger = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.mobile-nav');

document.querySelector('.nav-link').forEach(n =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);
