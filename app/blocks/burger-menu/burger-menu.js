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
    },
};
