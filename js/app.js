
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

  //  Array con las imagenes y enlaces que se iran mostrando en la web  
  var imagenes=new Array(
    ['assets/images/mar3.jpg'],
    ['assets/images/marina.jpeg']
  );

  // funcion para cabiar la iamgen
  function rotarImagenes()
  {
    // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
    var index=Math.floor((Math.random()*imagenes.length));

    // cambiamos la imagen
    document.getElementById("imagen").src=imagenes[index][0];
    // document.getElementById("link").href=imagenes[index][1];
  }

  onload=function()
  {
    // Cargamos una imagen aleatoria
    rotarImagenes();

    // Indicamos que cada 5 segundos cambie la imagen
    setInterval(rotarImagenes,600);
  }

// Mostrar links de proyectos
// $('.portafolio').hover(function(){
//     $(this).removeClass('invisible');
//     $(this).toggleClass('port-hov');
//     $(this).toggleClass('boton-link');
    // $('this'>'.im').toggleClass('port-hov');
  
  
//   }
// );