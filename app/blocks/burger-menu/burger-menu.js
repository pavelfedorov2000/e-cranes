app.burger = {
    name: 'burger',
    description: 'burger menu logic',
    init() {
        $('.burger-btn').on('click', function () {
            $('body').toggleClass('_lock');
            $('.nav-menu').toggleClass('active');
        });

        $('.nav-menu__close').on('click', function () {
            $('body').removeClass('_lock');
            $('.nav-menu').removeClass('active');
        });

        $('.menu-link__drop').on('click', function () {
            const $btn = $(this);
            const $dropMenu = $btn.closest('li').find('.nav-menu__drop');

            if ($(window).width() < 1100) {
                if ($btn.attr('aria-expanded') === 'false') {
                    $btn.attr('aria-expanded', true);
                    $dropMenu.slideDown();
                } else {
                    $btn.attr('aria-expanded', false);
                    $dropMenu.slideUp();
                }
            }
        });

        // native js
        /* const body = document.querySelector('body');
        const burgerBtn = document.querySelector('.burger-btn');
        const burgerMenu = document.querySelector('.burger-menu');
        const burgerMenuClose = document.querySelector('.burger-menu__close');
        const menuLinks = document.querySelectorAll('.menu__link');

        burgerBtn.addEventListener('click', () => {
            body.classList.toggle('_lock');
            burgerBtn.classList.toggle('burger-btn--active');
            burgerMenu.classList.toggle('burger-menu--active');
        });
        burgerBtn.addEventListener('click', () => {
            body.classList.add('_lock');
            burgerBtn.classList.add('burger-btn--active');
            burgerMenu.classList.add('burger-menu--active');
        });
        burgerMenuClose.addEventListener('click', () => {
            body.classList.remove('_lock');
            burgerBtn.classList.remove('burger-btn--active');
            burgerMenu.classList.remove('burger-menu--active');
        }); */
    },
};
