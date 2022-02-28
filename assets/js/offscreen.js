const mobileMenu = document.querySelector('#mobileMenu');
const menu = new bootstrap.Offcanvas(mobileMenu);

// const appmenu = document.querySelector('.appmenu');

document.querySelector('#btn-signin').addEventListener('click', function() {
    menu.hide();
    
    // appmenu.classList.add('d-none');
});

document.querySelector('#btn-signup').addEventListener('click', function() {
    menu.hide();
    
    // appmenu.classList.add('d-none');
});

document.querySelector('#btn-logout').addEventListener('click', function() {
    menu.hide();
    
    // appmenu.classList.add('d-none');
});