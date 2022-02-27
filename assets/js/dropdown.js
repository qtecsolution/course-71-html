// const dropdownLink = document.querySelector('.dropdown-link');
// const dropdownMenu = document.querySelector('.dropdownmain');

// dropdownLink.addEventListener('mouseover', () => {

//     if(dropdownMenu.classList.contains('show')) {
//         dropdownMenu.classList.remove('show');
//     } else {
//         dropdownMenu.classList.add('show');
//     }
// });

// window.addEventListener('click', e => {  
//     if(e.target !== dropdownMenu) {
//         dropdownMenu.classList.remove('show');
//     } else {
//         return false;
//     }

//     if(e.target === dropdownMenu) {
//         dropdownMenu.classList.add('show');
//     } else {
//         return false;
//     }
// });


// // DEFINE CARTLINK AND WISHLINK AND CARTLIST AND WISHLIST
// const desktopCartLink = document.querySelector('.desktop-cartlink');
// const desktopCartList = document.querySelector('#desktop-cartlist');
// const desktopWishLink = document.querySelector('.desktop-wishlink');
// const desktopWishList = document.querySelector('#desktop-wishlist');

// // LISTENING TO CARTLINK AND WISHLINK TRIGGERED
// desktopCartLink.addEventListener('mouseover', showCartList);
// desktopWishLink.addEventListener('mouseover', showWishList);

// function showCartList() {
//     desktopCartList.classList.add('show');
// }

// function showWishList() {
//     desktopWishList.classList.add('show');
// }

// // REMOVE CARTLIST AND WISHLIST
// const removeCartlist =  document.querySelector('#cart-remove');
// const removeWishlist =  document.querySelector('#wish-remove');

// removeCartlist.addEventListener('click', () => {
//     desktopCartList.classList.remove('show');
// })

// removeWishlist.addEventListener('click', () => {
//     desktopWishList.classList.remove('show');
// })

// // LISTENING TO WINDOW TRIGGERED FOR CLOSING CARTLIST AND WISHLIST
// window.addEventListener('click', () => {
//     desktopCartList.addEventListener('click',function(event){
//         event.stopPropagation();
//     });
//     desktopCartList.classList.remove('show');

//     desktopWishList.addEventListener('click',function(event){
//         event.stopPropagation();
//     });
//     desktopWishList.classList.remove('show');
// });