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
      // Translation was made by Karol Ostrówka
      $(".h-text h2").text("Students of the 1st programing class of Upper-Secondary Schools of Communications in Krakow, decided to make websites about famous Polish people. About people who have gone down in history. We want to show you our work.");
      $(".tr").html('<i class="icon-quote-left"></i>&nbsp;Each day is <span class="blue">a little bit of history</span>, and no one can narrate everything.&nbsp;<i class="icon-quote-right"></i>');

      // About section
      $(".about-text h2 span").text("About the project");
      // Translation was made by Karol Ostrówka
      $(".about-text p").text("Projects shown on the website were made by students of the 1st programing class of the Upper-Secondary Schools of Communications in Krakow. The projects were made under the National Reading Development Programme 2.0. The students' task was to create websites about famous Polish people in the history. Technical and visual aspect is supervised by Mrs Dominika Stęchły - Maniak, the teacher of Creating Static Websites and the substantive side of the project is under the care of Mrs Agnieszka Kozłowska, the Polish and class teacher. Mrs Magalena Czechowska - Buratowska and Mr Piotr Piekarski, English teachers, supervised the website's tranlations.");

      // Footer
      $("footer p:nth-child(1)").text("This website was made under the National Reading Development Programme 2.0");
      $("footer p:nth-child(2)").html("2022 &copy; All rights reserved");
      $("footer p:nth-child(3)").html("The school's website: <a href='https://tl.krakow.pl/'>https://tl.krakow.pl/</a>");

      //Rowtext
      $(".row:nth-child(3) .row-text p").text("Website about Adam Mickiewicz, it includes his whole biography as well as information about his works and a few related pictures. At the end you can also find a list of interesting facts.");
      $(".row:nth-child(3) .row-text h2").text("Adam Mickiewicz - life and work");
      $(".row-text a").text("See the website");

      $(".row:nth-child(2) .row-text p").text("Honorable, brave, gallant and undefeated on battleground. He was perfect knight in middleages. He loyally served Poland and if he had to, he was able to sacrifice his life for it. We can say a lot of things about his achievements and I’m sure that won’t be exaggeration if I say that they wouldn’t fit in one thousand-paged book. I think that our page isn’t big enough too, but we hope, that the content of this page will be interesting. You have to judge it by yourself…");
      $(".row:nth-child(2) .row-text h2").text("Zawisza the Black - „God, Honor, Fatherland”");

      $(".row:nth-child(4) .row-text p").text("A brave soldier, active in the underground during World War II. Unjustly judged by the communist authorities and sentenced to death. He was the first to describe the inside of the Auschwitz-Birkenau concentration camp. He is one of the most interesting figures of World War II. If you want to learn more about Rotamaster Witold Pilecki - we invite you!");
      $(".row:nth-child(4) .row-text h2").text("Rotmistrz Pilecki - a soldier like no other");

      $(".row:nth-child(5) .row-text p").text("Website devoted to Stefan Wyszyński - the primate of the millennium. It has descriptions of the most important elements of his life. Getting to know his biography you can see how great his influence on the world was. At the end you can read interesting facts and less known about him.");
      $(".row:nth-child(5) .row-text h2").text("The Primate who changed Poland");

      $(".row:nth-child(1) .row-text p").text("Marie Curie is considered to be one of the most influential women, whose achievements flipped aout world upsite down. Her discoveries made it possible, among other things, to cure skin cancer and to perform X-rays.If you would like to find out more about her, please visit our website 🙂");
      $(".row:nth-child(1) .row-text h2").text("Maria Skłodowska-Curie. Pole of all time");
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

      //Rowtext
      $(".row:nth-child(3) .row-text h2").text("Adam Mickiewicz - życie i twórczość");
      $(".row-text a").text("Zobacz stronę");
      $(".row:nth-child(3) .row-text p").text("Strona internetowa o Adamie Mickiewiczu. Znajduje się tutaj jego cały życiorys. Można poznać jego twórczość oraz zobaczyć kilka związanych z nim obrazków. Na końcu znajdują się także ciekawostki.");

      $(".row:nth-child(2) .row-text p").text("Odważny, waleczny, a na polu bitwy nie miał sobie równych. Był ideałem rycerza jak na tamte czasy. Wiernie służył ojczyźnie, a kiedy było trzeba był gotowy poświęcić się w jej imieniu. Można by wiele mówić o jego czynach i bez wątpienia te historie nie zmieściłyby się w jednej, nawet tysiąc stronicowej księdze, a tym bardziej na tej niewielkiej stronie, którą stworzyliśmy. Jednak mamy nadzieję, że przedstawia ona jego historię w bardzo ciekawy i przystępny sposób, ale to już musicie ocenić sami...");
      $(".row:nth-child(2) .row-text h2").text("Zawisza Czarny - „Bóg, Honor, Ojczyzna”");

      $(".row:nth-child(4) .row-text p").text("Odważny żołnierz, prowadzący działalność konspiracyjno w trakcie II wojny światowej. Osądzony nie słusznie przez władze komunistyczne i skazany na śmierć. Jako pierwszy opisał obraz obozu koncentracyjnego Auschwitz-Birkenau od środka. Jest jedną z najciekawszych postaci II wojny światowej. Jesli chcesz dowiedzieć się więcej o Rotmistrzu Witoldzie Pileckim - Zapraszamy!");
      $(".row:nth-child(4) .row-text h2").text("Rotmistrz Pilecki - żołnierz jakich mało");

      $(".row:nth-child(5) .row-text p").text("Strona poświęcona Stefanowi Wyszyńskiemu - prymasowi tysiąclecia. Posiada opisy najważniejszych elementów jego życia. Poznając jego życiorys można zobaczyć jak wielki miał wpływ na świat. Na końcu przeczytać można ciekawostki i mniej znane o nim fakty.");
      $(".row:nth-child(5) .row-text h2").text("Prymas, który odmienił Polskę");

      $(".row:nth-child(1) .row-text p").text("Maria Curie nie bez powodu jest uznawana za jedną z najbardziej wpływowych kobiet, której dokonania miały niebagatelny wpływ na losy świata. Jej odkrycia pozwoliły między innymi, leczyć nowotwory skóry oraz wykonywać prześwietlenia. Jeżeli chciałbyś dowiedzieć się o niej czegoś więcej to  zapraszamy do zapoznania się z naszą stroną 🙂");
      $(".row:nth-child(1) .row-text h2").text("Maria Skłodowska-Curie. Polka wszechczasów");
    }
  });
}
