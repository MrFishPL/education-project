function menu() {
  $(window).scroll((event) => {
    // Sprawdza czy trochę zescrollowano, a jeżeli tak to nadaje białe tło dla menu
    if ($(window).scrollTop()==0 && $(".menu").hasClass("scrolled") && !$(".responsive-menu").hasClass("made")) $(".menu").removeClass("scrolled");
    else if ($(window).scrollTop()!=0 && !$(".menu").hasClass("scrolled")) $(".menu").addClass("scrolled");

    if ($(window).scrollTop()==0 && $(".scroll-progress").hasClass("progress-scrolled")) $(".scroll-progress").removeClass("progress-scrolled");
    else if ($(window).scrollTop()!=0 && !$(".scroll-progress").hasClass("progress-scrolled")) $(".scroll-progress").addClass("progress-scrolled");
  });

  $('.burger').click(function () {
    // Otwiera responsywne menu

    if (!$(".responsive-menu").hasClass("made")) $(".responsive-menu").addClass("made");
    else $(".responsive-menu").removeClass("made");

    if (!$(".menu").hasClass("scrolled")) $(".menu").addClass("scrolled");
    else if ($(window).scrollTop()==0 && $(".menu").hasClass("scrolled")) $(".menu").removeClass("scrolled");
  });
}
