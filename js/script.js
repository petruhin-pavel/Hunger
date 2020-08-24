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