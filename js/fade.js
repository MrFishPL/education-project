function fade() {
  // Animacja pojawiania się elementów
  // Stackoverflow <3
  $(window).scroll(function() {
      $('.row:not(:first-child)').each( function(i) {
          // Liczy, gdzie znajduje się góra danego objektu i dół okna przeglądarki
          let object_top = $(this).offset().top;
          let window_bottom = $(window).scrollTop() + $(window).height();

          // Następnie porównuje, czy element jest już na tyle widoczny, żeby go pokazać
          if(window_bottom > object_top + 100) $(this).animate({'opacity':'1'}, 300);
      });
  });
}
