let burger = document.querySelector('.header__burger');
let burgerMenu = document.querySelector('.header-nav__burger-menu');
let burgerLink = document.querySelectorAll('.header-nav__menu-item');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('open-burger-menu');
});

for (link of burgerLink) {
    link.addEventListener('click', function () {
        burgerMenu.classList.toggle('open-burger-menu');
        burger.classList.toggle('active');
    })
}