document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        slideElement('navigation', getElementHeight('navigation'));
    } else {
        slideElement('navigation', 0);
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

function slideElement(elementId, translateY) {
    let slideElement = document.getElementById(elementId);
    slideElement.style.transform = `translateY(${translateY}px)`;
}

function getElementHeight(elementId) {
    let element = document.getElementById(elementId);
    return element.offsetHeight;
}

// Navigation class

let navigationDiv = document.getElementById('navigation');
let buttons = navigationDiv.querySelectorAll('.navbtn');
let menuToggle = document.getElementById('menuToggle');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        buttons.forEach(function (btn) {
            btn.classList.remove('active');
        });


        this.querySelector('.icon .material-symbols-rounded').classList.add('pop__animation');

        setTimeout(function () {
            button.querySelector('.icon .material-symbols-rounded').classList.remove('pop__animation');
        }, 300);

        this.classList.add('active');


    });
});

menuToggle.addEventListener('click', function (event) {
    event.stopPropagation(); // Stop the event from propagating to parent elements
});

import './js/add_menu.js';
import './js/menu.js';
