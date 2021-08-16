"use strict";

let btnBurgerMenu = document.getElementById('menu-responsive-opening');
console.log(btnBurgerMenu);

let containerMenuResponsive = document.getElementById('container-menu-responsive');
console.log(containerMenuResponsive);

let menuBurger = document.getElementById('menu-responsive');
console.log(menuBurger);

let body = document.getElementsByTagName('body');
body = body[0];
console.log(body);

let menuIsOpen;
menuIsOpen = false;

btnBurgerMenu.addEventListener('click', function () {


    if (!menuIsOpen) {

        menuIsOpen = true;
        console.log(menuIsOpen);

        btnBurgerMenu.style.background = "url(images/icon-close.svg) no-repeat center";
        btnBurgerMenu.style.transition = "background 200ms"

        body.style.overflow = "hidden";

        containerMenuResponsive.style.display = "block";

        setTimeout(function () {

            containerMenuResponsive.style.transition = "opacity 200ms"
            containerMenuResponsive.style.opacity = "1";

            menuBurger.style.transition = "margin 500ms"
            menuBurger.style.margin = "24px 24px 0 24px";
        }, 100)
    } else {

        menuIsOpen = false;
        console.log(menuIsOpen);

        btnBurgerMenu.style.background = "url(images/icon-hamburger.svg) no-repeat center"
        btnBurgerMenu.style.transition = "background 300ms"

        body.style.overflow = "initial";

        containerMenuResponsive.style.transition = "opacity 300ms"
        containerMenuResponsive.style.opacity = "0";

        menuBurger.style.transition = "margin 300ms"
        menuBurger.style.margin = "0px 24px 0 24px";

        setTimeout(function () {

            containerMenuResponsive.style.display = "none";
        }, 500)
    }
})