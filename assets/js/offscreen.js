const mobileMenu = document.querySelector('#mobileMenu');
const menu = new bootstrap.Offcanvas(mobileMenu);

document.querySelector('#btn-signin').addEventListener('click', function() {
    menu.hide();
});

document.querySelector('#btn-signup').addEventListener('click', function() {
    menu.hide();
});

document.querySelector('#btn-logout').addEventListener('click', function() {
    menu.hide();
});