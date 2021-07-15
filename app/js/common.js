$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.reviews-slider-content').slick({
    slidesToShow: 1,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    fade: true
});

$('.reviews-slider-video').slick({
    slidesToShow: 1,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    fade: true
});

$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    $('.reviews-slider-video').slick('setPosition');
    $('.reviews-slider-content').slick('setPosition');
});

$('.advantages-slider').slick({
    slidesToShow: 1,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    fade: true,
    dots: true,
    infinite: false,
});

new WOW().init();