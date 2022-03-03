var btn = document.querySelector('.language_btn');
let language = false;

btn.addEventListener('click', () => {
    if (language == true) {
        // PL -----------------------------------------------------------
        language = false;

        // authors.html
        $(".short_text").text(" Jesteśmy uczniami ZSŁ na profilu programistycznym, a o to nasz projekt na temat najsłynniejszego polskiego pianisty - Fryderyka Chopina");
        $(".chxi24r").text("Twórcy");

        // index.hmtl
        $('.language_btn').text("ENG");
        $('.main_text').text("Życie i Twórczość Chopina");
        $('.afterClick1 a').text("Postać");
        $('.afterClick2 a').text("Biografia");
        $('.afterClick3 a').text("Dom Chopina");
        $('.afterClick4 a').text("Twórczość");
        $('.afterClick5 a').text("Utwory");
        $('.afterClick6 a').text("Dziedzictwo");
        $('.spis_box ol li:nth-child(1) a').text("I. Postać");
        $('.spis_box ol li:nth-child(2) a').text("II. Biografia");
        $('.spis_box ol li:nth-child(3) a').text("III. Dom Chopina");
        $('.spis_box ol li:nth-child(4) a').text("IV. Twórczość");
        $('.spis_box ol li:nth-child(5) a').text("V. Utwory");
        $('.spis_box ol li:nth-child(6) a').text("V. Dziedzictwo");
        $('.srodkowy_tekst p:nth-child(1)').text("Fryderyk Chopin,");
        $('.srodkowy_tekst p:nth-child(2)').text("czyli artysta, który odmienił świat.");
        $('.postac_main_text').text("Postać");
        $('.biografia_main_text').text("Biografia");
        $('.pochodzenie_main_text').text("Dom Chopina");
        $('.tworczosc_main_text').text("Twórczość");
        $('.utwory_main_text').text("Utwory");
        $('.dziedzictwo_main_text').text("Dziedzictwo");
        $('footer a').text("Twórcy strony");
        $('.text1').text('Fryderyk Franciszek Chopin - urodził się 22 lutego 1810 w Żelazowej Woli, zmarł 17 października 1849 w Paryżu) – polski kompozytor i pianista. Od października 1831 roku mieszkał we Francji w Paryżu. Jest uważany za jednego z najwybitniejszych kompozytorów romantycznych, nazywany "poetą fortepianu", a także za jednego z najważniejszych polskich kompozytorów w historii. U źródeł jego twórczości leżała wrażliwość artystyczna oraz umiejętność czerpania wzorców polskiej muzyki ludowej.');
        $('.text2').text('"Rodem warszawianin, sercem Polak, a talentem obywatel świata..."');
        $('.text3').text('Według legendy Chopin urodził się w czasie, gdy w pobliżu jego ojciec Mikołaj grał na skrzypcach w jednej z dworskich oficyn Kaspra Skarbka. A dokładniej według zapisu w metryce parafialnej sporządzonej przez ks. Józefa Morawskiego w kościele św. Rocha w Brochowie, 22 lutego 1910 r. w Żelazowej Woli koło Sochaczewa. Rodzicami Fryderyka Chopina byli Fryderyk, Mikołaj Chopin oraz Justyna z Krzyżanowskich. Ojciec był rodowitym Francuzem, który w 1788 roku przybył do Polski "w interesach", poznał ten kraj, jego dzieje, nauczył się dobrze mówić po polsku. A jego matka była obdarzona dużymi zdolnościami muzycznymi oraz najlepszymi cechami Polki, była filarem i dobrym duchem ich domu. Na chrzcie Chopinowi nadano imiona Fryderyk Franciszek (na cześć ojca chrzestnego i zapewne dziadka – François). Jesienią 1810 Mikołaj i Justyna wraz z dziećmi przenieśli się do Warszawy. W październiku zamieszkali w nieistniejącej obecnie kamienicy należącej do Jana Böhma przy Krakowskim Przedmieściu (obecnie w tym miejscu znajduje się kamienica Józefa Grodzickiego pod nr 7). Na przełomie czwartego i piątego roku życia Chopin rozpoczął naukę gry na fortepianie, początkowo u swej matki. W 1816 zaczął brać lekcje u Wojciecha Żywnego. Bardzo szybko się uczył. 27 listopada 1831 Mikołaj pisał do Fryderyka:');
        $('.text4').text('Według legendy Chopin urodził się w czasie, gdy w pobliżu jego ojciec Mikołaj grał na skrzypcach w jednej z dworskich oficyn Kaspra Skarbka. A dokładniej według zapisu w metryce parafialnej sporządzonej przez ks. Józefa Morawskiego w kościele św. Rocha w Brochowie, 22 lutego 1910 r. w Żelazowej Woli koło Sochaczewa. Rodzicami Fryderyka Chopina byli Fryderyk, Mikołaj Chopin oraz Justyna z Krzyżanowskich. Ojciec był rodowitym Francuzem, który w 1788 roku przybył do Polski "w interesach", poznał ten kraj, jego dzieje, nauczył się dobrze mówić po polsku. A jego matka była obdarzona dużymi zdolnościami muzycznymi oraz najlepszymi cechami Polki, była filarem i dobrym duchem ich domu. Na chrzcie Chopinowi nadano imiona Fryderyk Franciszek (na cześć ojca chrzestnego i zapewne dziadka – François). Jesienią 1810 Mikołaj i Justyna wraz z dziećmi przenieśli się do Warszawy. W październiku zamieszkali w nieistniejącej obecnie kamienicy należącej do Jana Böhma przy Krakowskim Przedmieściu (obecnie w tym miejscu znajduje się kamienica Józefa Grodzickiego pod nr 7). Na przełomie czwartego i piątego roku życia Chopin rozpoczął naukę gry na fortepianie, początkowo u swej matki. W 1816 zaczął brać lekcje u Wojciecha Żywnego. Bardzo szybko się uczył. 27 listopada 1831 Mikołaj pisał do Fryderyka:');
        $('.text5').text('Technika gry zabrała Ci bardzo niewiele czasu Twoje palce mniej się natrudziły niż umysł inni trawili całe dni, przebierając palcami po klawiaturze, Ty rzadko spędzałeś przy niej godzinę.');
        $('.text6').text('Podczas lekcji koncentrował się głównie na zaznajamianiu ucznia z dziełami muzyki barokowej i klasycznej oraz objaśnianiu budowy utworów fortepianowych Johanna  Sebastiana Bacha, Josepha Haydna, Wolfganga Amadeusza Mozarta oraz (w mniejszym stopniu) Johanna Nepomuka Hummla. Pozostałością po tej niekonwencjonalnej edukacji było zamiłowanie Fryderyka do dawnych kompozytorów. Następnym nauczycielem Fryderyka był, pochodzący – tak samo jak Żywny – z Czech, Wacław Wilhelm Würfel.');
        $('.text7').text('Przed ukończeniem 7 roku życia był już autorem kilku drobnych kompozycji (były to polonezy – owa forma muzyczna była w polskiej muzyce fortepianowej tą, która wraz z wychowaniem muzycznym Żywnego oraz modną w owym czasie operą w stylu włoskim składała się na atmosferę muzyczną, w jakiej dorastał Fryderyk), które pomagali zapisywać mu Żywny oraz ojciec.');
        $('.text8').text('24 lutego 1818 roku w pałacu Radziwiłłów (obecnie Pałac Prezydencki) odbył się pierwszy koncert publiczny Chopina, zorganizowany na rzecz Towarzystwa Dobroczynności przygotowany przez ordynatową Zamoyską. Julian Ursyn Niemcewicz fakt wykorzystania talentu 8-letniego dziecka dla potrzeb filantropii skomentował w komedii, gdzie wyśmiał pogoń za sensacją i gorliwość filantropek, które na fikcyjnym zebraniu licytują się w odejmowaniu lat „Szopenkowi”, a w końcu sztuki zapada uchwała, że cudowne dziecko na scenę wniesie niańka.');
        $('.text9').text('Gdy u 16-letniego Chopina lekarze rozpoznali pierwsze objawy choroby płuc, dla ratowania zdrowia wyjechał z matką i siostrami (Ludwiką, Izabelą i Emilią) do Dusznik. ... Tam bowiem, gdy kilkoro dzieci przez śmierć ojca, do wód na kurację przybyłego, sierotami stało się, pan Fryderyk Chopin... dał dwa koncerty na dochód tychże... Sobie przysporzył chwały, a sierotom? - 74 talary. Dużo.');
        $('.text10').text('W lipcu 1829, niezwłocznie po ukończeniu studiów, Fryderyk Chopin wraz z przyjaciółmi wyjechał na wycieczkę do Wiednia. Dzięki Würflowi wszedł w środowisko muzyków. W Theater am Kärntnertor wystąpił dwukrotnie; grał Wariacje B-dur za pierwszym, a oprócz Wariacji także Rondo à la Krakowiak za drugim razem. Odniosły one fenomenalny sukces wśród publiczności. Nawet krytyka mimo zastrzeżeń dotyczących jego gry (zbyt mała siła dźwięku) uznała kompozycje za nowatorskie. Dobre przyjęcie kompozycji na koncertach ułatwiło kontakt z wydawcami: w kwietniu 1830, po raz pierwszy za granicą, wydano drukiem w Austrii, w oficynie Tobiasa Haslingera grane tu już Wariacje op. 2.');
        $('.text11').text('5 listopada 1830 Chopin na zawsze opuścił Polskę: wyjechał z Kalisza i przez Wrocław udał się do Drezna. W Wiedniu usłyszał śpiewaną niegdyś przez Konstancję cavatinę Rossiniego i rozpłakał się. Pojechał do Monachium i w końcu udał się do Paryża. W czasie drogi Chopin napisał dziennik (zwany „Dziennikiem stuttgarckim”), przedstawiający stan jego ducha podczas pobytu w Stuttgarcie, gdzie ogarnęła go rozpacz z powodu upadku powstania listopadowego. Wedle tradycji, powstały wtedy pierwsze szkice do Etiudy „Rewolucyjnej” Utwory tego okresu wypełnione są dramatyzmem, który z wolna zaczyna dominować w twórczości kompozytora.');
        $('.text12').text('Po opuszczeniu Nohant nie skomponował już żadnego znaczącego utworu, jedynie kilka miniatur. Po wybuchu rewolucji w Paryżu w 1848 r. Chopin wyjechał do Anglii i Szkocji na bardzo wyczerpującą jego siły podróż. 16 listopada 1848 w sali Guildhall w Londynie odbył się jego ostatni publiczny koncert. Organizatorką i sponsorką pobytu była jego uczennica, Szkotka Jane Stirling, zwana „wdową po Chopinie”.');
        $('.text13').text('Chopin zmarł w otoczeniu kilkorga bliskich mu osób około 2 w nocy 17 października 1849 w Paryżu, a na świadectwie zgonu jako przyczynę lekarz wpisał gruźlicę.');
        $('.text14').text('"Dom Chopinów był czysto polski. Nie można było sprawić Fryderykowi większej przykrości, jak kwestionując jego tytuł Polaka, z powodu francuzkiego nazwisko".');
        $('.text15').text('Lokalizacja domu Fryderyka Chopina:');
        $('.text16').text('Gatunki:');
        $('.text17').text('Polonezy');
        $('.text18').text('Wczesne polonezy, nawiązujące do popularnych wówczas w Warszawie utworów Ogińskiego, wydane zostały dopiero po śmierci kompozytora (9 utworów dziecięcych i młodzieńczych „op. posth.” = wydane pośmiertnie). W latach dojrzałych Chopin opublikował siedem polonezów, które są już zupełnie inne: bardzo dramatyczne i rozbudowane.');
        $('.text19').text('Mazurki');
        $('.text20').text('Chopin skomponował 57 mazurków, w nieznany wcześniej sposób nawiązując w nich do muzyki ludowej z Mazowsza.');
        $('.text21').text('Nokturny');
        $('.text22').text('Chopin napisał 21 nokturnów. Są to liryczne, melodyjne miniatury. Najwcześniejsze są jeszcze dość sentymentalne, późniejsze są wyrazowo coraz bardziej urozmaicone. Na ich melodię szczególnie wpłynęło bel canto, gdyż Chopin był wielbicielem włoskiej opery, zwłaszcza Belliniego. Kantylenę oplata w nich kunsztowna ornamentacja.');
        $('.text23').text('Scherza');
        $('.text24').text('Chopin napisał w późniejszych latach 4 Scherza. Wbrew tytułowi, są one raczej poważne, a nawet dramatyczne. Najpoważniejsze jest Scherzo h-moll op. 20, napisane podobno w okresie powstania listopadowego, z cytatem kolędy Lulajże, Jezuniu w części środkowej.');
        $('.text25').text('Ballady');
        $('.text26').text('Mówi się, że 4 ballady Chopina: g-moll op. 23, F-dur op. 38, As-dur op. 47 (jedyna z „optymistycznym” zakończeniem) i f-moll op. 52 powstały pod wrażeniem lektury ballad Adama Mickiewicza, lecz nie znaleziono na to dowodów. Ewentualne pokrewieństwo z poezją.');
        $('.text27').text('Etiudy');
        $('.text28').text('Ukończone zostały dwa cykle etiud: op. 10 i op. 25. Zgodnie z nazwą (fr. étude = studium, ćwiczenie) są one utworami pedagogicznymi i mają służyć doskonaleniu techniki pianistycznej. Ale po raz pierwszy w historii tego gatunku nie są to „nudne ćwiczenia”, którymi zamęczano pokolenia początkujących pianistów. Każda etiuda Chopinowska to arcydzieło. Jedną z najbardziej znanych jest, zamykająca opus 10, etiuda c-moll, zwana „rewolucyjną”.');
        $('.text29').text('Preludia');
        $('.text30').text('24 Preludia op. 28 powstały jako symboliczny hołd złożony Janowi Sebastianowi Bachowi, którego muzykę Chopin cenił. Są wyraźnym nawiązaniem do Das Wohltemperierte Klavier, napisanym również we wszystkich 24 tonacjach dur i moll. Zgodnie z zasadą gatunku są krótkie (najdłuższe As-dur nr 17 ma 90 taktów, a najkrótsze E-dur nr 9 ma tylko 12). Harmoniczny porządek cyklu pozwala wykonywać go w całości, lecz sam Chopin grywał tylko po kilka miniatur.');
        $('.text31').text('Sonaty');
        $('.text32').text('Chopin napisał 3 sonaty na fortepian: Sonatę c-moll op. 4, Sonatę b-moll op. 35 i Sonatę h-moll op. 58 oraz Sonatę g-moll op. 65 na fortepian i wiolonczelę. Spośród 3 sonat fortepianowych najpopularniejsza jest Sonata b-moll, której trzecia część, Marsz żałobny, grywany jest dzisiaj podczas pogrzebów, w rozmaitych transkrypcjach.');
        $('.text33').text('Koncerty');
        $('.text34').text('Powstały dwa koncerty na fortepian i orkiestrę: f-moll op. 21 z 1829 r. i e-moll op. 11 z 1830 r. – oba z pierwszego okresu twórczości, pisane jeszcze w Polsce, osadzone w formie klasycznej.');
        $('.text35').text('Inne');
        $('.text36').text('Chopin skomponował 19 pieśni na głos z fortepianem, Trio fortepianowe oraz Sonatę wiolonczelową.');
        $('.text37').text('Przykładowe utwory stworzone przez Fryderyka Chopina:');
        $('.text38').text('Dom Chopina');
        $('.text39').text('Spis Treści');
        $('.text40').text('Miedzynarodowy Konkurs Pianistyczny im. Fryderyka Chopina');
        $('.text41').text('Konkurs Chopinowski jest najważniejszym wydarzeniem muzycznym w Polsce i jednym z najważniejszych wydarzeń muzycznych na świecie. Obok olbrzymiej roli jaką pełni w popularyzacji muzyki Chopina, odkrywa największe talenty pianistyczne, zapewniając młodym muzykom najskuteczniejszy start w międzynarodowej karierze. Jest źródłem wielokulturowej polaryzacji, którą świat obserwuje w różnorodnych interpretacjach muzyki genialnego kompozytora. Pierwszy Konkurs Chopinowski odbył się w 1927 roku w Warszawie...');
        $('.text42').text('Pomnik Fryderyka Chopina w Warszawie – secesyjny pomnik Fryderyka Chopina w parku Łazienkowskim w Warszawie, przedstawiający odlaną w brązie postać kompozytora siedzącą pod stylizowaną wierzbą. Data budowy 1909–1926;  Rekonstrukcja po wojnie 1946–1958; Stworzony przez  Wacława Szymanowskiego i Oskara Sosnowskiego.');
    } else {
        // ENG -----------------------------------------------------------
        language = true;

        // authors.html
        $(".short_text").text(" We are students of the ZSŁ on the programming profile, and this is our project about the most famous Polish pianist - Fryderyk Chopin");
        $(".chxi24r").text("Authors");

        // index.hmtl
        $('.language_btn').text("PL");
        $('.main_text').text("Chopin's life and composition");
        $('.afterClick1 a').text("Charakter");
        $('.afterClick2 a').text("Biography");
        $('.afterClick3 a').text("Chopin's home");
        $('.afterClick4 a').text("Composition");
        $('.afterClick5 a').text("Songs");
        $('.afterClick6 a').text("Heritage");
        $('.spis_box ol li:nth-child(1) a').text("I. Charakter");
        $('.spis_box ol li:nth-child(2) a').text("II. Biography");
        $('.spis_box ol li:nth-child(3) a').text("III. Chopin's home");
        $('.spis_box ol li:nth-child(4) a').text("IV. Composition");
        $('.spis_box ol li:nth-child(5) a').text("V. Songs");
        $('.spis_box ol li:nth-child(6) a').text("VI. Heritage");
        $('.srodkowy_tekst p:nth-child(1)').text("Frédéric Chopin,");
        $('.srodkowy_tekst p:nth-child(2)').text("the artist who changed the world.");
        $('.postac_main_text').text("Charakter");
        $('.biografia_main_text').text("Biography");
        $('.pochodzenie_main_text').text("Chopin's home");
        $('.tworczosc_main_text').text("Composition");
        $('.utwory_main_text').text("Songs");
        $('.dziedzictwo_main_text').text("Heritage");
        $('footer a').text("Website authors");
        $('.text1').text('Fryderyk Franciszek Chopin - born on February 22nd, 1810 in Żelazowa Wola, died on October 17th, 1849 in Paris) - Polish composer and pianist. From October 1831 he lived in Paris in France. He is considered one of the greatest Romantic composers, called the "poet of the piano", and also one of the most important Polish composers in history. The sources of his work are artistic and inspired by Polish music.');
        $('.text2').text("'I am a native of Warsaw, a Pole with my heart, a talent, a citizen of the world ...'");
        $('.text3').text("According to legend, Chopin was born when his father Mikołaj was playing the violin in one of Kasper Skarbek's court outhouses. More precisely, according to the entry in the parish record prepared by Fr. Józef Morawski in the church of St. Roch in Brochów, on February 22nd, 1910 in Żelazowa Wola near Sochaczew. Fryderyk Chopin's parents were Fryderyk, Mikołaj Chopin and Justyna née Krzyżanowski. His father was a native French who came to Poland 'on business' in 1788, got to know this country, its history, learned to speak Polish well. And his mother was gifted with great musical abilities and the best qualities of a Polish woman, she was a pillar and good spirit of their home. At his baptism, Chopin was given the names Fryderyk Franciszek (in honor of his godfather and probably his grandfather - François). In the fall of 1810, Mikołaj and Justyna with their children moved to Warsaw. In October, they lived in the now defunct tenement house belonging to Jan Böhm at Krakowskie Przedmieście (now Józef Grodzicki's tenement house at number 7 is located there). At the turn of the fourth and fifth years of life, Chopin began learning to play the piano, initially with his mother. In 1816 he began taking lessons from Wojciech Żywny. He learned very quickly. On November 27th, 1831, Mikołaj wrote to Fryderyk:");
        $('.text4').text("According to legend, Chopin was born when his father Mikołaj was playing the violin in one of Kasper Skarbek's court outhouses. More precisely, according to the entry in the parish record prepared by Fr. Józef Morawski in the church of St. Roch in Brochów, on February 22nd, 1910 in Żelazowa Wola near Sochaczew. Fryderyk Chopin's parents were Fryderyk, Mikołaj Chopin and Justyna née Krzyżanowski. His father was a native French who came to Poland 'on business' in 1788, got to know this country, its history, learned to speak Polish well. And his mother was gifted with great musical abilities and the best qualities of a Polish woman, she was a pillar and good spirit of their home. At his baptism, Chopin was given the names Fryderyk Franciszek (in honor of his godfather and probably his grandfather - François). In the fall of 1810, Mikołaj and Justyna with their children moved to Warsaw. In October, they lived in the now defunct tenement house belonging to Jan Böhm at Krakowskie Przedmieście (now Józef Grodzicki's tenement house at number 7 is located there). At the turn of the fourth and fifth years of life, Chopin began learning to play the piano, initially with his mother. In 1816 he began taking lessons from Wojciech Żywny. He learned very quickly. On November 27th, 1831, Mikołaj wrote to Fryderyk:");
        $('.text5').text("The technique of the game took you very little time. Your fingers strained less than the mind, others spent days fiddling with the keyboard, you rarely spent an hour with it.");
        $('.text6').text("During the lessons, he focused mainly on familiarizing the student with works of baroque and classical music and explaining the structure of piano works by Johann Sebastian Bach, Joseph Haydn, Wolfgang Amadeus Mozart and (to a lesser extent) Johann Nepomuk Hummel. The remnant of this unconventional education was Fryderyk's love for former composers. Fryderyk's next teacher was Wacław Wilhelm Würfel, who came  from Czech Republic.");
        $('.text7').text("Before he was 7, he was already the author of a few small compositions (these were polonaises - in Polish piano music this musical form was the one which, along with musical upbringing and the Italian style opera fashionable at that time, made up the musical atmosphere in which he grew up), who were helped by Żywny and his father to save him.");
        $('.text8').text("On February 24th, 1818, Chopin's first public concert was held in the Radziwiłł Palace (now the Presidential Palace), for the benefit of the Charity Society, prepared by the ordinate Zamoyska. Julian Ursyn Niemcewicz commented on the fact of using the talent of an 8-year-old child for philanthropy in the comedy, where he laughed at the pursuit of sensationalism and the zeal of philanthropists, who at a fictional meeting compete in subtracting the years of 'Szopenek', at the end of a play for striving that a wonderful child on stage will bring the nanny.");
        $('.text9').text("When the doctors diagnosed the first symptoms of a lung disease in 16-year-old Chopin, he went with his mother and sisters (Ludwika, Izabela and Emilia) to Duszniki to save his health. ... There, when several children, through the death of their father, to the waters for the treatment of the newcomer, became orphans, Mr. Fryderyk Chopin ... gave two concerts for the income of these ... He glorified himself, and the orphans? - 74 thalers. A lot.");
        $('.text10').text("In July 1829, immediately after graduating, Fryderyk Chopin and his friends went on a trip to Vienna. Thanks to Würfl, he entered the musician community. He has performed twice at the Theater am Kärntnertor; he played the Variations in B flat major for the first time, and besides the Variations, also the Rondo à la Krakowiak for the second time. They were phenomenal success with the audience. Even the critics, despite reservations about his performance (too little sound power), considered the compositions innovative. The good reception of the composition at concerts facilitated contact with the publishers: in April 1830, for the first time abroad, the Variations Op. 2.");
        $('.text11').text("On November 5th, 1830, Chopin left Poland forever: he left Kalisz and traveled via Wrocław to Dresden. In Vienna, he heard Rossini's cavatina sung by Konstancja and burst into tears. He went to Munich and finally went to Paris. Along the way, Chopin wrote a diary (known as the 'Stuttgart Diary'), showing his state of mind during his stay in Stuttgart, where he was overcome with despair over the fall of the November Uprising. According to tradition, it was then that the first sketches for the 'Revolutionary' Etude were created. Pieces of this period are filled with drama, which slowly begins to dominate the composer's oeuvre.");
        $('.text12').text("After leaving, Nohant did not compose any significant piece anymore, only a few miniatures. After the revolution in Paris broke out in 1848, Chopin left for England and Scotland on a journey that exhausted his strength. On November 16th, 1848, his last public concert took place at the Guildhall in London. The organizer and sponsor of the stay was his student, a Scot, Jane Stirling, known as 'Chopin's widow'.");
        $('.text13').text("Chopin died in the vicinity of several people close to him around 2 a.m. on October 17th, 1849 in Paris, and the doctor wrote tuberculosis as the cause on his death certificate.");
        $('.text14').text("'The Chopin House was purely Polish. Fryderyk could not be more upset than by questioning his title of Pole, because of his French surname.'");
        $('.text15').text("Location of Fryderyk Chopin's house:");
        $('.text16').text("Species");
        $('.text17').text("Polonaises");
        $('.text18').text("The early polonaises, referring to Ogiński's works popular in Warsaw at that time, were published only after the composer's death (9 children's and youthful works 'op. Posth.' = Published posthumously). In his mature years, Chopin published seven polonaises, which are now completely different: very dramatic and extensive.");
        $('.text19').text("Mazurkas");
        $('.text20').text("Chopin composed 57 mazurkas, referring in a previously unknown way to folk music from Mazovia.");
        $('.text21').text("Nocturnes");
        $('.text22').text("Chopin wrote 21 nocturnes. These are lyrical, melodic miniatures. The earliest ones are still quite sentimental, the later ones are expressively more and more varied. Their melody was particularly influenced by bel canto, as Chopin was a fan of Italian opera, especially Bellini. There is an elaborate ornamentation around the cantilena.");
        $('.text23').text("Scherzas");
        $('.text24').text("Chopin wrote the Four Scherzos in later years. Contrary to the title, they are rather serious and even dramatic. The most serious is the Scherzo in B minor, Op. 20, supposedly written during the November Uprising, with a quote from the carol Lulajże, Jezuniu in the middle.");
        $('.text25').text("Ballads");
        $('.text26').text("It is said that Chopin's 4 ballades: in G minor, Op. 23, in F major, Op. 38, A flat major op. 47 (the only one with an 'optimistic' ending) and in F minor, Op. 52 were written under the impression of reading Adam Mickiewicz's ballads, but no evidence of this was found. Possible relationship with poetry.");
        $('.text27').text("Etudes");
        $('.text28').text("Two series of etudes have been completed: Op. 10 and op. 25. According to their name (French étude = study, exercise), they are pedagogical works and are intended to improve the piano technique. But for the first time in the history of the genre, these are not the 'boring exercises' that have tormented generations of beginning pianists. Each Chopin etude is a masterpiece. One of the best known is the Etude in C minor, which ends opus 10, known as the 'revolutionary' etude.");
        $('.text29').text("Preludes");
        $('.text30').text("24 Preludes, Op. 28 were created as a symbolic tribute to Jan Sebastian Bach, whose music Chopin valued. They are a clear reference to the Das Wohltemperierte Klavier, also written in all 24 major and minor keys. According to the genre rule, they are short (the longest in A flat major No. 17 has 90 bars, and the shortest in E major No. 9 is only 12). The harmonious order of the cycle makes it possible to perform it in its entirety, but Chopin himself played only a few miniatures.");
        $('.text31').text("Sonatas");
        $('.text32').text("Chopin wrote 3 sonatas for piano: Sonata in C minor, Op. 4, Sonata in B flat minor, Op. 35 and the Sonata in B minor, Op. 58 and the Sonata in G minor, Op. 65 for piano and cello. Of the 3 piano sonatas, the most popular is the Sonata in B flat minor, the third movement of which, the Funeral March, is played today at funerals, in various transcriptions.");
        $('.text33').text("Concerts");
        $('.text34').text("There were two concerts for piano and orchestra: in F minor, Op. 21 from 1829 and in E minor, Op. 11 from 1830 - both from the first period of his creativity, written still in Poland, set in a classical form.");
        $('.text35').text("Other");
        $('.text36').text("Chopin composed 19 songs for voice and piano, a piano trio and a cello sonata.");
        $('.text37').text('Examples of tracks created by Fryderyk Chopin:');
        $('.text38').text("Chopin's house");
        $('.text39').text("Table of Contents");
        $('.text40').text("The International Piano Frederic Chopin Competition");
        $('.text41').text("The Chopin Competition is the most important music event in Poland and one of the most important music events in the world. Apart from the enormous role he plays in popularizing Chopin's music, he discovers the greatest pianistic talents, providing young musicians with the most effective start in an international career. It is a source of multicultural polarization that the world observes in various interpretations of the music of the genius composer. The first Chopin Competition was held in 1927 in Warsaw...");
        $('.text42').text("Monument to Fryderyk Chopin in Warsaw - the Art Nouveau monument to Fryderyk Chopin in Łazienkowski Park in Warsaw, presenting the composer cast in bronze sitting under a stylized willow tree. Date of construction 1909–1926; Reconstruction after the war 1946–1958; Created by Wacław Szymanowski and Oskar Sosnowski.");
    }
});