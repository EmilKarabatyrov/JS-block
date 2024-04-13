let clientWidth = document.body.clientWidth;
if (clientWidth < 768) {
   new Swiper('.cards-slider', {
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      slidesPerView: 1.4,
      spaceBetween: 17,
   })
}
let hiddenElem = document.querySelectorAll('.swiper-slide--hidden');
let buttonOpen = document.querySelector('.cards-slider__button--open');
let buttonClose = document.querySelector('.cards-slider__button--close');
let sliderWrapper = document.querySelector('.cards-slider__wrapper.swiper-wrapper');
for (let i = 0; i < hiddenElem.length; i++) {
   buttonOpen.addEventListener('click', function () {
      hiddenElem[i].classList.remove('swiper-slide--hidden')
      hiddenElem[i].classList.add('swiper-slide--show')
      buttonOpen.style.display = 'none'
      buttonClose.style.display = 'inline-block'
   });
   buttonClose.addEventListener('click', function () {
      hiddenElem[i].classList.add('swiper-slide--hidden')
      hiddenElem[i].classList.remove('swiper-slide--show')
      buttonOpen.style.display = 'inline-block'
      buttonClose.style.display = 'none'
   });
}
