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

$('.form-quiz-slider').slick({
    slidesToShow: 1,
    fade: true,
    nextArrow: '<button type="button" class="slick-next"><span class="slick-arrow-text">Далее</span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="slick-arrow-text">Назад</span></button>',
    appendArrows: '.form-quiz-slider__nav',
    infinite: false,
});

let homeSlider = $('.form-quiz-slider');

$('.counter-slide__default').text("/" + homeSlider.slick("getSlick").slideCount);

homeSlider.on('afterChange', function(event, slick, currentSlide){
    $(".counter-slide__cp").text(currentSlide<10?`${currentSlide+1}`:currentSlide+1);
});

$('.btn-add').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('clicked');
});