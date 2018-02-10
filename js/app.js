
$('body').scrollspy({ target: '#navbar-example' });

$(window).scroll(function() {
  if ($("header").offset().top > 60) {
      $("header").addClass("nav-scroll");
  } else {
      $("header").removeClass("nav-scroll");
  }
});