var homecarousels = new Swiper(".swiper-carousels", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        '499': {
            slidesPerView: 2,
            spaceBetween: 24
        },
        '500': {
            slidesPerView: 2
        },
        '768': {
            slidesPerView: 3
        },
        '992': {
            slidesPerView: 4
        },
    }
});