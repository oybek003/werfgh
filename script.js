const body = document.querySelector('body');
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
    on: {
        slideChange: function () {
            let activeSlide = document.querySelector('.swiper-slide-active');
            if(activeSlide) {
                let bgColor = activeSlide.getAttribute('data-bg');
                body.style.backgroundColor = bgColor;
            }
        }
    }
})