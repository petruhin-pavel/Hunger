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

(function ($) {
  $(function () {
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
})(jQuery);

// Плавный скролл по якорям
$(document).ready(function () {
  $("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });
});