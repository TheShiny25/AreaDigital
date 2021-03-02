init(
  [
    "https://home.ripley.com.pe/minisitios/home/campanas/bc_repositorio/js/slick.min.js",
  ],
  function ($, window, document, undefined) {
    /**/

    $(document).ready(function () {
      let $carrusel = $(".list-favoritos");
      $carrusel.slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplaySpeed: 5000,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplaySpeed: 5000,
            },
          }
        ],
      });

      let $carrusel2 = $(".list-descubre");
      $carrusel2.slick({
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplaySpeed: 5000,
            },
          },
          {
            breakpoint: 768,
            settings: {
              dots: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplaySpeed: 5000,
            },
          }
        ],
      });


    });

    /**/
  }
);


$(document).ready(function() {

  $('#menu-bar').on("click", function() {
      $('ul.nav').slideToggle();
  });
  $('.nav a').click(function(e) {
    e.preventDefault();
    var top = $($(this).attr('href')).offset().top;
    $('body, html').animate({
        scrollTop: top - 0
    });
});
});
