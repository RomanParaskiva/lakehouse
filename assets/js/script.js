"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const headerMenuBtn = document.querySelector('.header__menu-btn'),
    sidebarMenu = document.querySelector('#sidebar-menu'),
    closeMenuBtn = document.querySelector('.close-menu-btn'),
    requestBtns = [...document.querySelectorAll('[data-target="booking"')],
    modal = document.querySelector('#modal'),
    modalClose = document.querySelector('.modal__close')

    requestBtns.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault()
        modal.style.display = 'flex'
        document.body.style.overflowY = 'hidden'  
        handleModal()
        })
    })

    modalClose.addEventListener('click', e => {
        e.preventDefault()
        modal.style.display = ''
        document.body.style.overflowY = ''  
    })

    const showCheckedImg = (id, modal) => {
        const parent = modal.querySelector(`label[for="${id}"]`),
              img = parent.querySelector('img.checked')
              img.classList.contains('show') ? img.classList.remove('show') : img.classList.add('show') 
              img.hidden = !img.hidden 
    }

    const showUncheckedImg = (id, modal) => {
        const parent = modal.querySelector(`label[for="${id}"]`),
              img = parent.querySelector('img.unchecked')
              img.classList.contains('show') ? img.classList.remove('show') : img.classList.add('show') 
              img.hidden = !img.hidden 
    }

    const handleModal = () => {
        const modal = document.querySelector('.modal'),
              modalInputs = [...modal.querySelectorAll('input[type="checkbox"]')],
              modalNextBtn = modal.querySelector('.modal__btn-next'),
              modalBodys = [...modal.querySelectorAll('.modal__body')],
              modalData = {}

              let step = 1

              modalInputs.forEach(item => {
                item.addEventListener('change', e => {
                   showCheckedImg(e.target.name, modal) 
                   showUncheckedImg(e.target.name, modal)
                   modalData[e.target.name] = true
                })
              })

              modalNextBtn.addEventListener('click', e => {
                  modalBodys[0].classList.remove('active')
                  modalBodys[1].classList.add('active')
              })
    }


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
    } catch (e) {}
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

    var owl = $('.modal__body-slider');
    owl.owlCarousel({
        loop:true,
        items: 1,
        dots: false,
        nav: false,
        navText: ["", ""],
        lazyLoad: true, 
        smartSpeed: 200,
        animateOut: 'fadeOut',
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true
    });
    // Go to the next item
    $('.modal__nav-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.modal__nav-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    $('input[name="daterange"]').daterangepicker({
        "startDate": new Date('dMY'),
        "endDate": "05/20/2021",
        "opens": "center",
        "drops": "auto"
    }, function(start, end, label) {
      console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    });
});