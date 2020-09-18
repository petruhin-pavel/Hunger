$(document).ready(function () {
  // Бургер
  $('.burger-nav').click(function (event) {
    $('.burger-nav').toggleClass('burger-nav-active');
    $('body').toggleClass('lock');
  });

  $('.burger-nav').click(function (event) {
    $('.mobile-nav').toggleClass('mobile-nav-active');
  });

  $('.mobile-nav-link').click(function (event) {
    $('body').removeClass('lock');
    $('.burger-nav').removeClass('burger-nav-active');
    $('.mobile-nav').removeClass('mobile-nav-active');
  });

  // Плавный скролл по якорям
  $("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  // Табы
  $("ul.tabs__caption").on("click", "li:not(.active)", function () {
    $(this)
      .addClass("price-active")
      .siblings()
      .removeClass("price-active")
      .closest("div.tabs")
      .find("div.price-wrap")
      .removeClass("price-active")
      .eq($(this).index())
      .addClass("price-active");
  });
});
// Слайдер
var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true
  },
});