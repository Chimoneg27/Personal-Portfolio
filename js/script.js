const hamburger = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.mobile-nav');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})