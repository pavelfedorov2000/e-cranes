$(function () {
    app.burger.init();

    $('.geography__logo').each(function ($index, $logo) {
        const $clone = $($logo).clone();

        $('.geography__logos').append($clone);
    });

    document.querySelectorAll('[data-section]').forEach((link) => {
        link.addEventListener('click', () => {
            window.scrollTo({
                top: document.querySelector(`#${link.getAttribute('data-section')}`).offsetTop,
                behavior: "smooth"
            });
        });
    });

    $('input[type="file"]').on('change', function () {
        const $input = $(this);
        const fileName = this.files[0].name;
        const $placeholder = $input.closest('label').find('.placeholder');
        $placeholder.text(fileName);
    });

    const animatedItems = document.querySelectorAll('.animated');

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target)
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }

    const options = {
        // root: по умолчанию window, но можно задать любой элемент-контейнер
        rootMargin: '0px 0px 75px 0px',
        threshold: 0,
    };

    const observer = new IntersectionObserver(callback, options);

    animatedItems.forEach((item) => observer.observe(item));

    // popups
    //jquery
    /* $('.open-popup').on('click', function () {
        $('body').addClass('_lock');
        $('.overlay').fadeIn('slow');
        $(`#${$(this).data('popup')}-popup`).fadeIn('slow');
    });
    $('.popup__close').on('click', function () {
        $('body').removeClass('_lock');
        $('.overlay').fadeOut('slow');
        $(this).parent().fadeIn('slow');
    }); */

    //js
    /* const overlay = document.querySelector('.overlay');
    const openPopup = document.querySelectorAll('.open-popup');
    const popup = document.querySelector('#popup');
    const thanksPopup = document.querySelector('#thanks');
    const popupClose = document.querySelectorAll('.popup__close');
    openPopup.addEventListener('click', function () {
        body.classList.add('_lock');
        overlay.style.display = 'block';
        document.getElementById(this.getAttribute('data-popup')).style.display = 'block';
    });
    popupClose.forEach(close => {
        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            close.parentElement.style.display = 'none';
            body.classList.remove('_lock');
        });
    });
    document.querySelectorAll('.popup').forEach(popup => {
        let popupForm = popup.querySelector('form');
        popupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            popupForm.querySelectorAll('input').forEach(input => {
                input.value = '';
            });
            popupForm.parentElement.style.display = 'none';
            thanksPopup.style.display = 'block';
        });
    }); */
});