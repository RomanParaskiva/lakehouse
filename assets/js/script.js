"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const headerMenuBtn = document.querySelector('.header__menu-btn'),
    sidebarMenu = document.querySelector('#sidebar-menu'),
    closeMenuBtn = document.querySelector('.close-menu-btn')


    try {
        headerMenuBtn.addEventListener('click', e => {
            sidebarMenu.classList.add('show')
        })

        closeMenuBtn.addEventListener('click', e => {
            sidebarMenu.classList.remove('show')
        })

        document.addEventListener('scroll', () => {
            let scrollTop = window.scrollY
            if(scrollTop >= 100){
                headerMenuBtn.classList.add('scroll');
            }else{    
                headerMenuBtn.classList.remove('scroll');
            }
        })
    } catch (e) {
        
    }
})

$(document).ready(function () {
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
                items:3
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

    $('.modal__body-slider').owlCarousel({
        loop:true,
        items: 1,
        nav: true,
        navText : ["",""],
        lazyLoad: true, 
        smartSpeed: 200,
        animateOut: 'fadeOut',
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true
    })

    const modalBodySlider = document.querySelector('.modal__body-slider'),
        next = modalBodySlider.querySelector('.owl-next'),
        prev = modalBodySlider.querySelector('.owl-prev')


        next.setAttribute('aria-label', 'next')
        prev.setAttribute('aria-label', 'prev')
});