"use strict"

document.addEventListener('DOMContentLoaded', () => {


})

$(document).ready(function () {
    console.log('Doc ready')
    $('.hero__slider-wrapper').owlCarousel({
        nav: true,
        lazyLoad: true,
        items: 1,
        loop: true,
        smartSpeed: 200,
        animateOut: 'fadeOut',
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true
    });

    $(function () {

        $('.arrow-down').on('click', function (e) {
            $('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
            e.preventDefault();
        });

    });

    function setDots(){
        $(".news__slider-wrapper .owl-dots").removeClass('disabled');
      }

    $('.news__slider-wrapper').owlCarousel({
        loop:true,
        items: 1,
        onInitialized:setDots,
        onChanged:setDots,
        dots: true
    })
});