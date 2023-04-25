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
                breakpoint: 768,
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
let consulting_form = document.getElementById('consulting_form');
let flexCheckDefault = document.getElementById('flexCheckDefault');

consulting_form.addEventListener('submit', function (e) {
    if (!flexCheckDefault.checked) {
        consulting_form.classList.add('was-validated');
        e.preventDefault();
    }
})


let rubrika = document.querySelector('#category_a')
let dropdowCatgeory = document.querySelector('.dropdowCatgeory');


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

