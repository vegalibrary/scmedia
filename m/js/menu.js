let menuBtn = document.getElementById('menuToggle');
let menu = document.getElementById('menu');
let isMenuVisible = false; // Variable to track the visibility state of the menu

menuBtn.addEventListener('click', function () {
    if (isMenuVisible) {
        hideMenu();
    } else {
        showMenu();
    }
});

document.body.addEventListener('click', function (event) {
    if (!isMenuVisible) return;
    if (event.target !== menu && !menu.contains(event.target)) {
        hideMenu();
    }
});

function showMenu() {
    menu.style.display = 'flex';
    menu.style.animation = 'fadeIn_Menu .4s ease forwards';
    menu.style.opacity = '1';
    isMenuVisible = true;
}

function hideMenu() {
    menu.style.animation = 'fadeOut_Menu .4s ease forwards';
    menu.style.opacity = '0';
    setTimeout(function () {
        menu.style.display = 'none';
    }, 400);
    isMenuVisible = false;
}
