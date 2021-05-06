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

    const roomsContainer = $('.rooms__container ')
    
    roomsContainer.owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },            
            960:{
                items:2
            },
            1200:{
                items:3
            }
        }
    })
    roomsContainer.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            roomsContainer.trigger('next.owl');
        } else {
            roomsContainer.trigger('prev.owl');
        }
        e.preventDefault();
    });
    

});