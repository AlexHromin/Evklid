// burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click', function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll');
    });
});


// Scroll

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href') 
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth", 
            block: "start"
        })
    })
};

// loupe

let search = document.querySelector('.search');
let searchForm = document.querySelector('.search-form');
let navClose = document.querySelector('.search-close');

search.addEventListener('click', function () {
    searchForm.classList.add('search-form--active');
})

navClose.addEventListener('click', function () {
    searchForm.classList.remove('search-form--active');
})


// Tabs 

let tabsbtn = document.querySelectorAll('.how-tabs__btn');
let howtabs = document.querySelectorAll('.how-tabs');

tabsbtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsbtn.forEach(function (btn) { btn.classList.remove('how-tabs__btn--active') });
        e.currentTarget.classList.add('how-tabs__btn--active');

        howtabs.forEach(function (element) { element.classList.remove('how-tabs--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('how-tabs--active');
    });
});

// Swiper

const swiper = new Swiper('.swiper', {
    speed: 600,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
});

// accordion

new Accordion('.accordion');