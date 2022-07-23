
// let burger_img = document.querySelector('.burger_img');
// let Header_bars = document.querySelector('.burger');

// burger_img.addEventListener('click', function() {
//    burger.classList.toggle ('hidden');
// });


let burger = document.querySelector('.burger');
let burger_img = document.querySelector('.burger_img');
let burger_close = document.querySelector('.burger_close');

function toggleMenu() {
   burger.classList.toggle('hidden');
}

burger_img.addEventListener('click', toggleMenu);
burger_close.addEventListener('click', toggleMenu);

