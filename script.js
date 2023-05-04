const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';


const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 350,
        modifier: 3,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const swiper2 = new Swiper(".trust-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
    },
    pagination: {
        el: ".trust-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".trust-swiper-button-next",
        prevEl: ".trust-swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
    }
});


$(function () {
    $.mask.definitions['9'] = false;
    $.mask.definitions['5'] = "[0-9]";
    $('.consulting_tel').mask("+996(555)-55-55-55");
    $('#tel').mask("+996(555)-55-55-55");

    $('.blog-item').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nav: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                    // dots: false,
                }
            },
        ]
    })




    // let number = document.querySelector('.count');
    // let numberTop = number.getBoundingClientRect().top;
    // let start = +number.innerHTML;
    // let end = +number.dataset.max;

    // window.addEventListener('scroll', function onScroll() {
    //     if (this.window.pageYOffset > numberTop - this.window.innerHeight / 2) {
    //         this.removeEventListener('scroll', onScroll);
    //         var interval = this.setInterval(function () {
    //             number.innerHTML = ++start;
    //             if (start == end) {
    //                 clearInterval(interval);
    //             }
    //         }, 5)
    //     }
    // })

    // $('.count').each(function () {
    //     $(this).prop('Counter', 0).animate({
    //         Counter: $(this).text()
    //     }, {
    //         duration: 4000,
    //         easing: 'swing',
    //         step: function (now) {
    //             $(this).text(Math.ceil(now));
    //         }
    //     })
    // })
})


let hamburger = document.querySelector('.hamburger');
let btn_close = document.querySelector('.btn-close');
let menu_item = document.getElementsByClassName('menu_item');
let experts = document.getElementById('experts');
let trust = document.getElementById('trust');
let contacts = document.getElementById('contacts');


// console.log(menu_item)

for (let i = 0; i < menu_item.length - 1; i++) {
    menu_item[i].addEventListener('click', function (e) {
        // e.preventDefault();
        hamburger.classList.remove('is-active');
        setTimeout(() => {
            if (i === 0 || i === 3) {
                experts.scrollIntoView({ block: "start", behavior: "smooth" });
            }
            if (i === 1 || i === 4) {
                trust.scrollIntoView({ block: "start", behavior: "smooth" });
            }
            if (i === 2 || i === 5) {
                contacts.scrollIntoView({ block: "start", behavior: "smooth" });
            }
        }, [1000])
    })
}
btn_close.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
})
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
})
// var map;

// DG.then(function () {
//     map = DG.map('map', {
//         center: [42.884147, 74.589958],
//         zoom: 13
//     });

//     DG.marker([42.88401467044253, 74.58993673324586]).addTo(map).bindPopup('Вы кликнули по мне!');
// });
// var map2;
// DG.then(function () {
//     map2 = DG.map('map2', {
//         center: [42.884147, 74.589958],
//         zoom: 13
//     });

//     DG.marker([42.884147, 74.589958]).addTo(map2).bindPopup('Вы кликнули по мне!');
// });

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')



///validation Form

let consulting_form = document.getElementById('consulting_form');
let flexCheckDefault = document.getElementById('flexCheckDefault');
let checkboxTooltip = document.querySelector('.checkboxTooltip');

if (consulting_form) {
    consulting_form.addEventListener('submit', function (e) {
        if (!flexCheckDefault.checked) {
            e.preventDefault();
            if (window.animate_time) {
                clearTimeout(animate_time);
            }
            this.classList.add('was-validated');
            checkboxTooltip.classList.add('checkboxTooltip_show');
            checkboxTooltip.classList.add('animate__fadeIn');
            window.animate_time = setTimeout(() => {
                setTimeout(() => {
                    checkboxTooltip.classList.remove('checkboxTooltip_show');
                    checkboxTooltip.classList.remove('animate__fadeOut');
                }, 1500)
                checkboxTooltip.classList.remove('animate__fadeIn');
                checkboxTooltip.classList.add('animate__fadeOut');
            }, 1500)
        }
    })
}



let name = document.getElementById('name');
let tel = document.getElementById('tel');
let form = document.getElementById('form');
let checkbox = document.getElementById('flexCheckDefault1');

form.addEventListener('submit', function (e) {
    if (!name.value.trim() || !tel.value.trim() || !checkbox.checked) {
        form.classList.add('was-validated');
        e.preventDefault();
    }
})






let rubrika = document.querySelector('.category_a');
let dropdowCatgeory = document.querySelector('.dropdowCatgeory');

if (rubrika && dropdowCatgeory) {
    window.addEventListener('click', function (e) {
        e.stopPropagation();
        if (e.target.dataset.name !== 'categorydropdown') {
            if (dropdowCatgeory.classList.contains('show')) {
                dropdowCatgeory.classList.remove('show');
                rubrika.classList.remove('category_a_active');
            }
        }
    })

    rubrika.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('category_a_active');
        dropdowCatgeory.classList.toggle('show');
    })
}

document.querySelector('.layout_top').addEventListener('click', function(){
    window.scrollTo({top: 0, left: 0, behavior: "smooth" });
})