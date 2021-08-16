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




// HOVER

let btnRequest = document.getElementsByClassName('btn-request');
console.log(btnRequest);

for (let i = 0; i < btnRequest.length; i++) {

    btnRequest[i].addEventListener('mouseenter', function () {

        btnRequest[i].style.transition = "background 300ms";
        btnRequest[i].style.background = "linear-gradient(90deg, rgba(49, 211, 92, 0.53) 49%, rgba(43, 218, 183, 0.59) 100%)";
    })

    btnRequest[i].addEventListener('mouseleave', function () {

        btnRequest[i].style.transition = "background 300ms";
        btnRequest[i].style.background = "linear-gradient(90deg, rgba(49, 211, 92, 1) 49%, rgba(43, 218, 183, 1) 100%)";
    })
}

let menuDesktop = document.getElementsByClassName('link-menu');
console.log(menuDesktop);

let borderBottomMenu = document.getElementsByClassName('bottom-border-menu');
console.log(borderBottomMenu);

for (let i = 0; i < menuDesktop.length; i++) {

    menuDesktop[i].addEventListener('mouseenter', function () {

        borderBottomMenu[i].style.transition = "width 300ms";
        borderBottomMenu[i].style.width = "100%";
    })

    menuDesktop[i].addEventListener('mouseleave', function () {

        borderBottomMenu[i].style.transition = "width 300ms";
        borderBottomMenu[i].style.width = "0";
    })
}

let articleTitle = document.getElementsByClassName('article-title');
console.log(articleTitle);

for (let i = 0; i < articleTitle.length; i++) {

    articleTitle[i].addEventListener('mouseenter', function () {

        articleTitle[i].style.transition = "color 300ms";
        articleTitle[i].style.color = "rgb(112, 210, 187)";
    })

    articleTitle[i].addEventListener('mouseleave', function () {

        articleTitle[i].style.color = "black";
    })
}

let menuFooter = document.getElementsByClassName('link-menu-footer');
console.log(menuFooter);

for (let i = 0; i < menuFooter.length; i++) {

    menuFooter[i].addEventListener('mouseenter', function () {

        menuFooter[i].style.transition = "color 300ms";
        menuFooter[i].style.color = "rgb(112, 210, 187)";
    })

    menuFooter[i].addEventListener('mouseleave', function () {

        menuFooter[i].style.color = "white";
    })
}