
$('body').scrollspy({ target: '#navbar-example' });

$(window).scroll(function() {
  if ($(".navbar").offset().top > 60) {
      $(".navbar").addClass("nav-scroll");
  } else {
      $(".navbar").removeClass("nav-scroll");
  }
});

AOS.init({
  easing: 'ease-out-back',
  duration: 2000
});

