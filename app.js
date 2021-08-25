const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

// display moblie menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};


menu.addEventListener('click', mobileMenu);

//show active menu when scrolling
const hightlightmenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesamenu = document.querySelector('#services-pafe');
    let scrollpos = window.scrollY;
    console.log(scrollpos);


    //adds highlight class to my menu items
    if (window.innerWidth > 960 && scrollpos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollpos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesamenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollpos < 2345) {
        aboutMenu.classList.add('highlight');
        servicesamenu.classList.remove('highlight');
        return;
    }
    if ((elem && window.innerWidth < 960 && scrollpos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', hightlightmenu);
window.addEventListener('click', hightlightmenu);

//close mobile menu

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);