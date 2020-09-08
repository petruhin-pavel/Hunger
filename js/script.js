$(document).ready(function () {
  $('.burger-nav').click(function (event) {
    $('.burger-nav').toggleClass('burger-nav-active');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function () {
  $('.burger-nav').click(function (event) {
    $('.mobile-nav').toggleClass('mobile-nav-active');
  });
});

var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true
  },
});

/* effect: 'fade', */