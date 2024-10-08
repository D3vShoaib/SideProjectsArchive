burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.right-nav');
leftnav = document.querySelector('.left-nav');

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class');
    leftnav.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})
