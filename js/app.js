
$('body').scrollspy({ target: '#navbar-example' });

$(window).scroll(function() {
  if ($("header").offset().top > 60) {
      $("header").addClass("nav-scroll");
  } else {
      $("header").removeClass("nav-scroll");
  }
});

AOS.init({
  easing: 'ease-out-back',
  duration: 2000
});

// Mostrar links de proyectos
// $('.portafolio').hover(function(){
//     $(this).removeClass('invisible');
//     $(this).toggleClass('port-hov');
//     $(this).toggleClass('boton-link');
    // $('this'>'.im').toggleClass('port-hov');
  
  
//   }
// );