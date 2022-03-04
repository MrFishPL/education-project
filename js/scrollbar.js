function scrollBar() {
  $(window).scroll(function (event) {
    // Kod pochodzi ze strony https://www.w3schools.com/howto/howto_js_scroll_indicator.asp

    // Grafik dizajnerzy:
    // - Inspirowałem się twoim pomysłem
    // - NIE, UKRADŁEŚ MÓJ POMYSŁ

    // Programiści
    // - Ukradłem twój kod
    // - To nie mój kod

    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height);

    $(".progress").css({
      "transform": "scaleX(" + scrolled + ")"
    });
  });
}
