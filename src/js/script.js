$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
         adaptiveHeight: false, 
        prevArrow: '<button type="button" class="prev"><img src="icons/slide/left.svg"></button>',
        nextArrow: '<button type="button" class="next"><img src="icons/slide/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    /* centerMode: true,
                    focusOnSelect: true */

                }
            },
        ]
    });
});

/* var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    navPosition: 'bottom',
    
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
}); */