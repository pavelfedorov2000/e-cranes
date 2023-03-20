$(function () {
    new Swiper('.our-works-slider', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 1000,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 4,
            },
        },
    });
});