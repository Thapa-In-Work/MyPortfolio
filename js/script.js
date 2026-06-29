window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('fade-out');
    setTimeout(() => {
        preloader.remove();
    }, 2000);
});

const menuBtn = document.querySelector('.menu');
const sideMenu = document.querySelector('.side-menu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.getElementById('nav');

menuBtn.onclick = () => sideMenu.classList.toggle('active');

navLinks.forEach(link => {
    link.onclick = () => sideMenu.classList.remove('active');
});

window.onscroll = () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};
