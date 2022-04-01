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

      $(".row:nth-child(2) .row-text p").text("Honorable, brave, gallant and undefeated on battleground. He was a perfect knight in middleages. He loyally served Poland and if he had to, he was able to sacrifice his life for it. We can say a lot of things about his achievements and I’m sure that won’t be an exaggeration if I say that they wouldn’t fit in one thousand-paged book. I think that our page isn’t big enough too, but we hope, that the content of this page will be interesting. You have to judge it by yourself…");
      $(".row:nth-child(2) .row-text h2").text("Zawisza the Black - „God, Honor, Fatherland”");

      $(".row:nth-child(4) .row-text p").text("A brave soldier, active in the underground during World War II. Unjustly judged by the communist authorities and sentenced to death. He was the first to describe the inside of the Auschwitz-Birkenau concentration camp. He is one of the most interesting figures of World War II. If you want to learn more about Rotamaster Witold Pilecki - we invite you!");
      $(".row:nth-child(4) .row-text h2").text("Rotmistrz Pilecki - a soldier like no other");

      $(".row:nth-child(5) .row-text p").text("Website devoted to Stefan Wyszyński - the primate of the millennium. It has descriptions of the most important elements of his life. Getting to know his biography you can see how great his influence on the world was. At the end you can read interesting facts and less known about him.");
      $(".row:nth-child(5) .row-text h2").text("The Primate who changed Poland");

      $(".row:nth-child(1) .row-text p").text("Marie Curie is considered to be one of the most influential women, whose achievements flipped aout world upsite down. Her discoveries made it possible, among other things, to cure skin cancer and to perform X-rays.If you would like to find out more about her, please visit our website :)");
      $(".row:nth-child(1) .row-text h2").text("Maria Skłodowska-Curie. Pole of all time");

      $(".row:nth-child(7) .row-text p").text("The website is dedicated to the first and only Polish Pope, a very important historical figure for Poland – Karol Wojtyle. His contribution to the history of our country was invaluable. It can be said with all boldness that without this man we would not enjoy life in a free Poland. For more interesting information we invite you to visit our website!");
      $(".row:nth-child(7) .row-text h2").text("A few words about the Polish Pope.");

      $(".row:nth-child(9) .row-text p").text("A model of courage and patriotism. Józef Piłsudki, although he encountered many obstacles on his way, the ups and downs, he never gave up and achieved his goal. We can talk about him for a long time, but if you would like to know what his life and everyday struggle looked like – go and see our website!");
      $(".row:nth-child(9) .row-text h2").text("Józef Piłsudski - fighting to the death");

      $(".row:nth-child(10) .row-text p").text("The man who completely changed the way people think about the Sun and the Earth. On our website, you will find information about him, his works, achievements and learn interesting facts about him.");
      $(".row:nth-child(10) .row-text h2").text("Nicolaus Copernicus and his discoveries.");

      $(".row:nth-child(11) .row-text p").text('As students and enthusiasts of computer games we decided to create a website about Polish e-sports legend Jaroslaw "pashaBiceps" Jarząbkowski. On the site you can learn about the rise of one of the best Counter-Strike player, his career , his biography and much more. You are invited to visit the site by: Karol Kolodziejczyk, Wiktor Siwecki and Filip Jaskulski.');
      $(".row:nth-child(11) .row-text h2").text("Jarosław \"Pasha\" Jarząbkowski - Poland's greatest e-sportsman");

      $(".row:nth-child(12) .row-text p").text('Meet the greatest Polish piano virtuoso - Fryderyk Chopin, who is referred to as "a native of Warsaw, a Pole at heart, a talent, a citizen of the world ...". The site includes his biography, short history, songs and what he left us.');
      $(".row:nth-child(12) .row-text h2").text("Chopin's life and composition.");

      $(".row:nth-child(13) .row-text p").text('Irena Sendlerowa - Polish social activist and humanitarian and head of the children’s section of “Żegota”, the Polish Council to Aid Jews, during World War II. It\'s a woman with a golden soul that will remain in our hearts forever. If you want to find out more, read our website!');
      $(".row:nth-child(13) .row-text h2").text("Irena Sendlerowa - a woman with a big heart");

      $(".row:nth-child(15) .row-text p").text('Jerzy Górski - Polish triathlete, world champion in double Ironman on September 3, 1990. In the past he was a drug addict, and later became a valued sportsman and charity activist.');
      $(".row:nth-child(15) .row-text h2").text("Jerzy Górski - determination and a dream");

      $(".row:nth-child(14) .row-text p").text('This page is not a full biography of the great champion, because if we wanted to make a full biography, we would have to write a book entitled "My Racing".  So we focused on the most important events in his wonderful career.  His exploits had not only sporting significance, but also contributed to regaining freedom of Poland, which became known all over the world.');
      $(".row:nth-child(14) .row-text h2").text("Sobiesław Zasada - about the Pole who moved the whole world");

      $(".row:nth-child(8) .row-text p").text('Maczek is a full-blooded and tragic figure - an exceptionally gifted commander who was not always able to enjoy the effects of a job well done. The author of great victories which he did not manage to prevent the tragedy of his homeland. An emigrant who - not accepting the political realities of post-war Poland - chose the fate of an exile. Finally, a man of honor who has endured the social degradation without complaint, which was the necessity to maintain a family in Scotland by manual labor.');
      $(".row:nth-child(8) .row-text h2").text("General Stanisław Maczek, legend during his life");

      $(".row:nth-child(6) .row-text p").text("Military engineer, meritorious general, fighting for independence. Leader of the Kościuszko Insurrection and participant of The Revolutionary War of USA. Many places in the whole world have been named to his honor. We're inviting you to learn about his life on this site!");
      $(".row:nth-child(6) .row-text h2").text("Tadeusz Kościuszko - A hero of Poland and the USA");
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

      $(".row:nth-child(1) .row-text p").text("Maria Curie nie bez powodu jest uznawana za jedną z najbardziej wpływowych kobiet, której dokonania miały niebagatelny wpływ na losy świata. Jej odkrycia pozwoliły między innymi, leczyć nowotwory skóry oraz wykonywać prześwietlenia. Jeżeli chciałbyś dowiedzieć się o niej czegoś więcej to  zapraszamy do zapoznania się z naszą stroną :)");
      $(".row:nth-child(1) .row-text h2").text("Maria Skłodowska-Curie. Polka wszechczasów");

      $(".row:nth-child(7) .row-text p").text("Strona poświęcona pierwszemu i jedynemu polskiemu papieżowi, bardzo ważnej, zwłaszcza dla Polski, postaci historycznej - Karolowi Wojtyle. Wkład tej postaci w dzieje naszej Ojczyzny był nieoceniony. Można z całą śmiałością stwierdzić, że gdyby nie ten człowiek, to nie cieszylibyśmy się życiem w wolnej Polsce. Po więcej ciekawych informacji zapraszamy na naszą stronę!");
      $(".row:nth-child(7) .row-text h2").text("Kilka słów o papieżu Polaku.");

      $(".row:nth-child(9) .row-text p").text("Wzór odwagi oraz patriotyzmu. Józef Piłsudki chociaż na swojej drodze napotkał wiele przeciwności losu, wzloty oraz upadki nigdy się nie poddawał i osiągał swój cel. Opowiadać można o nim długo, lecz jeśli chciałby dowiedzieć jak wyglądał jego żywot i codzienna walka - zapraszamy do zapoznania się z naszą stroną!");
      $(".row:nth-child(9) .row-text h2").text("Józef piłsudski - walczący do upadłego");


      $(".row:nth-child(10) .row-text p").text("Człowiek, który zmienił całkowicie postrzeganie ludzi na temat Słońca i Ziemi. Na naszej stronie znajdziecie informacje o nim, o jego dziełach, dokonaniach oraz poznacie interesujące fakty na jego temat.");
      $(".row:nth-child(10) .row-text h2").text("Mikołaj Kopernik i jego odkrycia.");

      $(".row:nth-child(11) .row-text p").text("Jako uczniowie oraz pasjonaci gier komputerowych postanowiliśmy stworzyć stronę na temat polskiej legendy e-sportu, Jarosława \"pashyBicepsa\" Jarząbkowskiego. Na stronie można dowiedzieć się o powstaniu kariery jednego z najlepszych graczy Counter-Strike'a jego życiorysie oraz wiele więcej. Do obejrzenia witryny zapraszają: Karol Kołodziejczyk, Wiktor Siwecki i Filip Jaskulski.");
      $(".row:nth-child(11) .row-text h2").text('Jarosław "Pasha" Jarząbkowski - Największy polski e-sportowiec');

      $(".row:nth-child(12) .row-text p").text('Poznaj największego polskiego wirtuoza fortepianu - Fryderyka Chopina, o którym mówi się "Rodem warszawianin, sercem Polak, a talentem obywatel świata...". Strona zawiera jego biografię, krótką historię, utwory i to co nam zostawił.');
      $(".row:nth-child(12) .row-text h2").text("Życie i twórczość Chopina.");

      $(".row:nth-child(13) .row-text p").text('Irena Sendlerowa - polska działaczka społeczna i charytatywna, a w czasie II wojny światowej kierowniczka referatu dziecięcego Rady Pomocy Żydom przy Delegaturze Rządu na Kraj („Żegoty”). Jest to kobieta o złotej duszy, która pozostanie w naszych sercach na długo. Jeśli chcesz poznać ją bliżej, to zapraszamy!');
      $(".row:nth-child(13) .row-text h2").text("Irena Sendlerowa - kobieta o wielkim sercu");

      $(".row:nth-child(15) .row-text p").text('Jerzy Górski  – polski triathlonista, mistrz świata w podwójnym Ironmanie z 3 września 1990.W przeszłości był narkomanem, a później stał się cenionym sportowcem i działaczem charytatywnym.');
      $(".row:nth-child(15) .row-text h2").text("Jerzy Górski - determinacja i marzenie");

      $(".row:nth-child(14) .row-text p").text('Strona ta nie jest pełną biografią wielkiego mistrza, ponieważ jakbyśmy chcieli zrobić pełną biografię wyszłaby nam Jego książka pod tytułem ,,Moje Rajdy”. Skupiliśmy się więc na najważniejszych wydarzeniach w jego wspaniałej karierze.  Wyczyny mistrza miały nie tylko wydźwięk sportowy, ale przyczyniły się do odzyskania wolności Polski, która stała się znana na całym świecie.');
      $(".row:nth-child(14) .row-text h2").text("Sobiesław Zasada - O Polaku, który poruszył cały świat");


      $(".row:nth-child(8) .row-text p").text('Maczek to postać pełnokrwista i tragiczna – wybitnie uzdolniony dowódca, któremu nie zawsze dane było cieszyć się efektami dobrze wykonanej pracy. Autor wielkich zwycięstw, którymi nie zdołał zapobiec tragedii ojczyzny. Emigrant, który – nie akceptując politycznych realiów powojennej Polski – wybrał los wygnańca. Wreszcie człowiek honoru, który bez skargi zniósł społeczną degradację, jaką była konieczność utrzymywania w Szkocji rodziny fizyczną pracą.');
      $(".row:nth-child(8) .row-text h2").text("Generał Stanisław Maczek, legenda za życia");

      $(".row:nth-child(6) .row-text p").text("Inżynier wojskowy, zasłużony generał, walczący o niepodległość. Przywódca Insurekcji Kościuszkowskiej i uczestnik wojny o niepodległość Stanów Zjednoczonych. Na jego cześć nazwano wiele miejsc na całym świecie. Zapraszamy do zapoznania się z jego życiem na tej stronie!");
      $(".row:nth-child(6) .row-text h2").text("Tadeusz Kościuszko - Bohater Polski i USA");
    }
  });
}
