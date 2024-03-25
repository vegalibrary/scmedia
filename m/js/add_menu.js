let longClickTimer;
let longClickDuration = 400;

let target = document.getElementById('target');
let addAction = document.getElementById('add_action');
let isAddMenuVisible = false;

target.addEventListener('mousedown', function (event) {
    longClickTimer = setTimeout(function () {
        showAddMenu();
    }, longClickDuration);
});

target.addEventListener('touchstart', function (event) {
    longClickTimer = setTimeout(function () {
        showAddMenu();
    }, longClickDuration);
});

// Clear the timer if mouse/touch is released before the long click duration
target.addEventListener('mouseup', function (event) {
    clearTimeout(longClickTimer);
    event.stopPropagation();
});

target.addEventListener('touchend', function (event) {
    clearTimeout(longClickTimer);
    event.stopPropagation();
});

// Function to show the action menu
function showAddMenu() {
    addAction.style.display = 'flex';
    addAction.style.animation = 'fadeIn_addMenu .4s ease forwards';
    addAction.style.opacity = '1';
    isAddMenuVisible = true;
}

// Function to hide the action menu
function hideAddMenu() {
    addAction.style.animation = 'fadeOut_addMenu .4s ease forwards';
    addAction.style.opacity = '0';
    setTimeout(function () {
        addAction.style.display = 'none';
    }, 400); // Wait for the animation to complete before hiding the menu
    isAddMenuVisible = false;
}

// Click event listener on the document body to hide the menu when clicking outside of it
document.body.addEventListener('click', function (event) {
    if (!isAddMenuVisible) return; // If the menu is not visible, do nothing
    if (event.target !== addAction && !addAction.contains(event.target)) {
        hideAddMenu();
    }
});