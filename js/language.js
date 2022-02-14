function language() {
  let pl = true;
  $('.language').click(function () {
    if (pl == true) {
      pl = false;
      $(this).text("PL");
      $(".menu ul li:nth-child(1) a").text("home");
      $(".menu ul li:nth-child(2) a").text("students' projects");
      $(".menu ul li:nth-child(3) a").text("about");
      $(".h-text h2").text("Tutaj pojawi się przetłumaczony tekst tego nagłówka, który, jedyne co, trzeba uzupełnić. A dalej piszę zapychacz lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.");
    }

    else {
      pl = true;
      $(this).text("EN");
      $(".menu ul li:nth-child(1) a").text("start");
      $(".menu ul li:nth-child(2) a").text("prace uczniów");
      $(".menu ul li:nth-child(3) a").text("o projekcie");
      $(".h-text h2").text("Uczniowie klasy 1P Zespołu Szkół Łączności w Krakowie podjęli się wykonania stron internetowych na temat Polaków, którzy na stałe zapisali się w historii. Zapraszamy do zapoznania się z nimi.");
    }
  });
}
