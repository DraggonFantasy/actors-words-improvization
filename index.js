let intervalMin = undefined;
let intervalMax = undefined;

let interval = undefined;
let audioEnabled = false;

function generateWord() {
    return words[Math.floor(Math.random()*words.length)];
}

function setActiveWordTo(word, play=true) {
    document.getElementById("activeWord").innerText = word;

    if(play) {
        const audio = new Audio('audio/' + word + '.wav');
        // noinspection JSIgnoredPromiseFromCall
        audio.play();
    }
}

function toggleAudio() {
    audioEnabled = !audioEnabled;
    if(audioEnabled) {
        document.getElementById("audioToggler").innerHTML = "&#x1F509;";
    } else {
        document.getElementById("audioToggler").innerHTML = "&#x1F507;";
    }
}

function updateActiveWord(play=true) {
    setActiveWordTo(generateWord(), play);
    updateInterval();
}

function updateValues() {
    intervalMin = parseInt(document.getElementById("intervalMin").value);
    intervalMax = parseInt(document.getElementById("intervalMax").value);
    if(intervalMax < intervalMin) {
        intervalMax += intervalMin;
        document.getElementById("intervalMax").value = intervalMax;
    }
}

function updateInterval() {
    const timeout = intervalMin + (Math.random() * (intervalMax - intervalMin));
    interval = setTimeout(() => updateActiveWord(audioEnabled), timeout * 1000);
}

function start() {
    if(interval !== undefined) {
        clearTimeout(interval);
        document.getElementById("start").innerText = "Розпочати";
        interval = undefined;
        return;
    }
    updateValues();
    updateActiveWord(false);
    setActiveWordTo("Можеш починати свою розповідь :)");
    document.getElementById("start").innerText = "Зупинити";
}

function toggleHelp() {
    const style = document.getElementById("details").style;
    style.display = style.display === "block" ? "none" : "block";
}

function toggleDark() {
    document.body.classList.toggle("darkMode");
    let children = document.body.getElementsByTagName("*");
    for(let i = 0; i < children.length; ++i) {
        let child = children[i];
        console.log(child);
        child.classList.toggle("darkMode");
    }
}

const words = `свинцевість
аудиторія
лампас
таємниця
Корея
корабель
міологія
Вінниця
клоп
мураха
небосхил
нейрон
рослина
розбраковщик
пластир
канделябр
атлетика
ліжко
крага
дюкер
марихуана
светр
осика
баку
жайворонок
зубець
мішечок
банник
Кадіс
скафандр
азбест
метеоролог
каніфоль
гольф
плов
отаман
картка
єпископ
колиска
афінянин
аппарель
аллах
байкал
миш'як
гроза
лебідка
архангел
комора
агротехнік
перешелестіння
отрута
молюск
травлення
асфальтоукладач
автопоїзд
заворожування
диплом
удав
біополе
необачність
аукціонер
повсть
крем
клавіатура
конячка
кольчуга
басейн
бумеранг
ломота
тато
марганець
галерея
деталь
гашиш
комор
капелюх
жезл
ксиліт
переучування
садиба
невід
вдівець
зубр
аджика
бензин
княжна
вінегрет
хміль
вірус
ноосфера
кінодокументалістика
кінодрама
буйвол
драма
комедія
драндулет
сметана
чапля
квиток
арбалет
карапуз
подушка
членошкідниця
священик
кінотеатр
волокно
мітка
мокасин
манометр
квартет
косметика
шукачниця
маячок
гадюка
закваска
колісниця
Копенгаген
качалка
скеля
ожина
копито
кавалькада
вечеря
Білорусь
ясна
ромб
галера
нелюд
рядок
водолаз
рододендрон
кінозірка
роз'яснення
деревина
кіготь
героїн
дівчина
оскар
пелікан
австралопітек
мотоцикл
м'ясорубка
кенгуру
долоня
віл
галета
авіатехнік
борець
інкубатор
автопідйомник
кофта
триплекс
пелюшка
ядро
канарка
апостроф
овечка
клініка
диба
оазис
коровай
степняк
Куба
карниз
обмерзання
салат
обожнювання
жертва
кінчик
щупальце
шприц
полюс
печатка
павук
індикатор
кому
неплатник
гвинтик
азбоцемент
Ліверпуль
поліграф
автоінспектор
повернення
лісівник
фен
жолудь
туркмен
кадильниця
прут
гора
літпрацівник
ілюзія
грім
понеділок
кролик
бронежилет
биток
індивід
коромисло
молекула
висипання
трюм
айсберг
злак
багаття
тюбик
мигдаль
конвой
ординаторська
фарфор
договір
навіс
суниця
свято
шеллак
тент
ватажок
ховрах
бабуся
ескадрон
бугор
форсмажор
сидіння
двері
таганок
клаптик
табір
декан
коптилка
йогурт
світлофор
амфібія
поріг
аура
виноградник
авто
милиця
зміна
авіаспорт
Волга
метелик
загс
мітла
кольє
часточка
локшина
табурет
клізму
ягня
сіль
амперметр
діамант
перегородка
запальничка
аерація
суріпиця
квитокерка
водопровід
вуздечка
зіниця
пасмо
омар
дрозофіла
Крим
кадило
проварювання
пакет
річка
палац
арифмограф
асфальт
левиця
пам'ятник
орхідея
інтер'єр
боєприпас
хлопавка
пелюстка
фольклористика
зруб
адвокат
склянка
пекти
стайня
парубень
палітурка
підперезування
прасольство
хом'як
несвідомість
кефір
аверс
бита
птахівництво
присування
індіанець
басурманін
яловичина
гідробудівництво
груша
барон
верблюд
вісь
впайка
чорне
мама
квас
замок
моль
шина
анчоус
індичка
міномет
космонавт
бальзам
клавіраусцуг
шкарпетка
звездочет
лорд
медальєр
брат
смердіння
відеокамера
око
котелок
Кіт
пудинг
фізіомістка
желе
в'язанка
кристал
планка
тополя
лупа
тампон
свердління
принтер
градусник
котлета
розклейниця
дудка
гиря
гостинність
фальцувальник
лікарня
повільність
кубізм
печінка
зірка
картограф
планшайба
картопля
шпалера
мобільник
Угорщина
лисичка
купець
утроба
волога
город
карат
накінечник
електроскоп
паспорт
вулик
Голандія
модернізація
коробка
єдиноріг
казино
ягода
магія
австралієць
арбалетник
коктейль
амулет
зодіак
пліт
прилад
база
завербування
медуза
спокусниця
пастораль
браунінг
обдуманість
тальк
прапор
ніздря
юрта
лавка
гребінець
горловина
недопуск
артеміда
викорінення
кумис
верстат
альманах
Гімалаї
перука
гонг
схід
витонченість
театрознавець
боцман
ємність
лакей
денатуралізація
вантажівка
струмок
кірха
западина
капіталіст
ребро
Європа
молодогвардієць
фіалка
дисплей
кабінка
сани
м'яз
ланка
факторіал
повідець
фляга
виріб
птах
каліка
панцир
бирка
пенал
плавник
крона
скибочка
обкладинка
куліса
програвання
відблиск
кімоно
палата
богомол
академія
візок
кондиція
намоточниця
аптечка
лотос
варти
фортепіано
прифугівка
закис
Дністер
заварка
волосся
градоначальник
жінка
сестра
Владикавказ
безтурботність
папір
хіндустанка
бюлетень
джміль
суп
титанік
вичець
ялин
лід
кран
кемпінг
ванта
галявина
свердло
Бухарест
церква
оксамит
динамік
вівсянка
кардинал
Гаага
дах
вал
гра
об'єктив
мухомор
підбор
старець
кортик
простатит
капсуль
алея
кілочок
кульок
мешканець
Божа корівка
пластик
берест
мойва
сом
вода
дядько
міхур
корчма
кукурудза
нашийник
модрина
курортниця
трос
квитанція
миш’як
патефон
Люксембург
кіл
кролівник
олівець
ручка
чорнило
початківець
глядач
Євпаторія
гієна
багами
джгут
ганок
живіт
магнат
ілюстрація
баска
веселка
лисий
лезо
паркан
Воронеж
астероїд
підполковник
Купідон
бере
прокалювання
гардіна
корсар
дідусь
заледеніння
конус
шлунок
авантюрист
сейф
благодійник
поплавок
мовлення
закрут
упаковка
пеньок
утримання
лінолеум
протилежне
олії
тара
банкнота
перстень
штанга
гонщиця
інтернет
піднос
плед
гній
колготки
медоносність
багажник
майно
блок
тілець
крилатка
бант
душ
зморшка
рана
гардероб
каріатида
бунгало
концентрат
підручник
пула
лавочник
туфель
вуаль
павільйон
лиска
калій
Палестина
ворс
лінемет
кіоск
афіни
борозенець
казарма
листок
книга
автовідповідач
зброя
бюргер
батько
трилогія
заслінка
черевик
блоха
настоянка
камера
баранець
санки
засувка
афганець
стратосфера
лексикографія
компас
кобура
шкіра
дракон
табакерка
балахон
арешт
літер
лимон
акція
форель
кузен
магнітофон
плацента
єврей
баба
Наполеон
колона
вовсюг
фургон
негритянка
вестибюль
каскадер
захворюваність
Індія
кітель
поверх
берданка
корівник
гілка
еківок
диякон
кінозал
талія
землянин
ніготь
каракуль
гідність
верстак
малина
економність
янгол
енцикліка
бінокль
вія
патрон
вата
свинобієць
бджола
фігура
продуктивність
електротерапія
корсет
росинант
відшліфування
автохром
камфора
урна
алмазник
виток
школа
університет
замша
біопсія
зловмисник
плашкоут
бульйон
славословний
мезга
фіранка
морж
астронавт
гаманець
брязкальце
актив
авоська
Канзас
блешня
апартамент
краб
кропива
мучитель
синдром
сокира
решето
деспот
термофіл
богиня
перехожа
знущання
бордюр
метан
авіабензин
коса
офіцер
скатертина
Волгоград
спідниця
лосось
стріла
собака
текстоліт
нарцис
барвник
лелека
багатослівність
недопалок
пензлик
В'єтнам
сукно
ікебана
горила
горобець
рів
фарш
рік
антрополог
кремінь
велосипедист
автосалон
веретено
ветеринар
катер
каретник
шибениця
ступа
буханець
мед
бутерброд
липа
шейх
імунологія
інжир
бандероль
єнот
бубонець
бронетехніка
елеватор
крематорій
сонце
комікс
мікроб
намисто
фінік
мародер
охоронець
ножівка
військо
накопичувач
абаз
какао
кухар
барометр
бур'ян
замащування
ваза
овен
пташеня
комплексність
землероб
дослідник
пиво
трава
коштовність
каюр
смикальник
джунглі
сир
заповідник
рівнина
долоні
боїнг
портсигар
чобіт
вибоїна
весло
доїння
грунт
квітчастість
наркотик
петелька
видавництво
реальгар
аеродром
перешарування
Марокко
фаланга
тумба
плато
ковзанка
колобок
перенасиченість
обривність
фрукт
каталог
голос
конкурент
Дніпро
м'ята
ресора
амфітеатр
бойок
бюст
лапоть
муляр
серце
сало
консоляція
вена
хлопець
парабелум
голуб
крісло
гербарій
аферист
ксерокс
копія
антибіотик
лист
чашка
пантера
сито
жид
лісник
святокупство
ансамбль
звивини
випічка
запізнення
сосна
педаль
подарунок
болт
барк
мотор
прямокутник
станція
хвіст
біолог
бордель
поразка
болото
житло
кадет
артилерист
тканина
гробниця
ялина
куртка
вагонетка
фара
нари
утемнення
актриса
форпост
марево
юпітер
Мадагаскар
слідчий
контрабас
гіпс
капрал
варта
заставна
кузня
кульбаба
манеж
остовпіння
халіф
емальєр
столоначальник
трикутник
дно
каса
ланцюжок
гарем
Тайга
жало
агент
пісок
африка
калашникова
застава
бочар
скарб
походжання
Ліван
голослівність
вітамін
камаз
коректор
стрічка
атестат
здоров'я
дощ
мильниця
відображення
агроном
хвиля
діаметр
ділянку
буфет
холення
лінкор
льодяник
лижник
інформаційність
корінець
атлантида
молотилка
насмоктування
декольте
кат
калюжа
дача
перли
календар
імператор
луза
карате
облямівка
ковбаса
головоломка
ноутбук
тітка
карета
авіалайнер
козеріг
глечик
вепс
фальсифікація
інсулін
ароматизатор
оцет
сковорідка
засмага
кафе
бинт
ад'ютант
відро
тростина
автоцементовоз
автовежа
борщ
проорання
сфінкс
миска
куля
тарган
плацдарм
підлещування
академік
жижа
поборник
ліана
анаконда
бюро
гвинтівка
лакування
евкаліпт
землекористування
снігопад
чарівник
конюх
скибка
плуг
кабінет
вітрило
генерал-директор
вм'ятина
в’єтнамець
меморіал
косинка
фотометр
білок
естамп
буда
Будапешт
холдинг
посмішка
перемолот
зуб
буклет
балка
монтування
люк
цибулина
оса
корінь
жилетка
диня
депутат
кухонька
комод
шуба
проклеювання
автоколона
електрополірування`.split('\n')