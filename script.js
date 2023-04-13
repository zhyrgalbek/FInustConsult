$(function () {
    $.mask.definitions['9'] = false;
    $.mask.definitions['5'] = "[0-9]";
    $('.consulting_tel').mask("+996(555)-55-55-55");
    $('#tel').mask("+996(555)-55-55-55");

    $('.single-item').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nav: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    })

})






let hamburger = document.querySelector('.hamburger');
let btn_close = document.querySelector('.btn-close');
btn_close.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
})
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
})
var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.884147, 74.589958],
        zoom: 13
    });

    DG.marker([42.884147, 74.589958]).addTo(map).bindPopup('Вы кликнули по мне!');
});
var map2;
DG.then(function () {
    map2 = DG.map('map2', {
        center: [42.884147, 74.589958],
        zoom: 13
    });

    DG.marker([42.884147, 74.589958]).addTo(map2).bindPopup('Вы кликнули по мне!');
});

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//     myInput.focus()
// })

