$(document).ready(function(){

    $('.slider__inner').slick({
        arrows: true,
        dots: false,
        nextArrow: '<button type="button" class="slick-next"><div class="my__next-arrow"></div></button>',
        prevArrow: '<button type="button" class="slick-prev"><div class="my__prev-arrow"></div></button>',
        asNavFor: '.slider__nav',

    });

    $('.slider__nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        dots: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 941,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 731,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 431,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 291,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    

});


$('.header__menu-btn').on('click', function () {
    $('.header__menu > ul').slideToggle();
});
