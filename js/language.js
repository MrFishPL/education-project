function language() {
  let pl = true;
  $('.language').click(function () {
    if (pl) {
      pl = false;

      // Menu
      $(this).text("PL");
      $(".menu ul li:nth-child(1) a").text("home");
      $(".menu ul li:nth-child(2) a").text("students' projects");
      $(".menu ul li:nth-child(3) a").text("about");

      // Header
      $(".h-text h2").text("Students of the 1st class of the Upper-Secondary Schools of Communications in Krakow decided to make websites about Poles who, for good, wrtoe themself in the history. You're welcome to see all of them.");
      $(".tr").html('<i class="icon-quote-left"></i>&nbsp;Each day is <span class="blue">a little bit of history</span>, and no one can narrate everything.&nbsp;<i class="icon-quote-right"></i>');

      // About section
      $(".about-text h2 span").text("About the project");
      $(".about-text p").text("Projects shown on the website were made by students of the 1st class of the Upper-Secondary Schools of Communications in Krakow. The projects were made under the National Reading Development Programme 2.0. The students' task was to create websites about Poles who, for good, wrote themself in the history. Technical and visual aspect is supervised by Mrs Dominika Stęchły - Maniak, the teacher of Creating Static Websites and the substantive side of the project is under the care of Mrs Agnieszka Kozłowska, the Polish and class teacher. Mrs Magalena Czechowska - Buratowska and Mr Piotr Piekarski, English teachers, supervise the websites' tranlations.");

      // Footer
      $("footer p:nth-child(1)").text("This website was made under the National Reading Development Programme 2.0");
      $("footer p:nth-child(2)").html("2022 &copy; All rights reserved");
      $("footer p:nth-child(3)").html("The school's website: <a href='https://tl.krakow.pl/'>https://tl.krakow.pl/</a>");
    }

    else {
      pl = true;

      // Menu
      $(this).text("EN");
      $(".menu ul li:nth-child(1) a").text("start");
      $(".menu ul li:nth-child(2) a").text("prace uczniów");
      $(".menu ul li:nth-child(3) a").text("o projekcie");

      // Header
      $(".h-text h2").text("Uczniowie klasy 1P Zespołu Szkół Łączności w Krakowie podjęli się wykonania stron internetowych na temat Polaków, którzy na stałe zapisali się w historii. Zapraszamy do zapoznania się z nimi.");
      $(".tr").html('<i class="icon-quote-left"></i>&nbsp;Każdy dzień jest <span class="blue">kawałkiem historii</span>, nikt nie jest w stanie opowiedzieć jej do końca.&nbsp;<i class="icon-quote-right"></i>');

      // About section
      $(".about-text h2 span").html("O projekcie");
      $(".about-text p").text("Przedstawione na stronie witryny zostały wykonane przez uczniów klasy 1P Zespołu Szkół Łączności w Krakowie w ramach Narodowego Programu Rozwoju Czytelnictwa 2.0. Zadanie polegało na opracowaniu strony internetowej, która odbiorcy przybliży postać wybranego wielkiego Polaka. Aspektem technicznym i wizualnym opiekuje się Pani Dominika Stęchły - Maniak, nauczyciel Tworzenia Statycznych Stron Internetowych, a stroną merytoryczną - Pani Agnieszka Kozłowska, polonistka i wychowawca klasy. Tłumaczenia stron nadzorują Pani Magdalena Czechowska - Buratowska oraz Pan Piotr Piekarski, nauczyciele języka angielskiego.");

      // Footer
      $("footer p:nth-child(1)").text("Strona została wykonana w ramach Narodowego Programu Rozwoju Czytelnictwa 2.0");
      $("footer p:nth-child(2)").html("2022 &copy; Wszelkie prawa zastrzeżone.");
      $("footer p:nth-child(3)").html("Strona internetowa szkoły: <a href='https://tl.krakow.pl/'>https://tl.krakow.pl/</a>");
    }
  });
}
