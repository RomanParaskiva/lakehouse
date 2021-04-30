"use strict"

document.addEventListener('DOMContentLoaded', () => {

    
})

$(document).ready(function(){
    console.log('Doc ready')
    $('.owl-carousel').owlCarousel({
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
  });