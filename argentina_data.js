/**
 * Дані та нормативно-порогові шкали оцінки економічної безпеки Аргентини (2015–2024)
 * Дисципліна: Інформаційні технології у системі забезпечення економічної безпеки держави
 * Об'єкт дослідження: Аргентинська Республіка (ARG / Argentina)
 * Період: 2015–2024 роки
 */

const ARGENTINA_INDICATORS = {
  // 1. Урожайність зернових культур
  cereal_yield: {
    id: "cereal_yield",
    title: "Урожайність зернових культур",
    category: "Виробнича та продовольча безпека",
    unit: "ц/га (1 центнер = 100 кг)",
    sourceName: "World Bank (AG.YLD.CREL.KG)",
    sourceUrl: "https://data.worldbank.org/indicator/AG.YLD.CREL.KG?locations=AR",
    description: "Показник ефективності аграрного сектора та основи продовольчої самозабезпеченості та експортного потенціалу країни.",
    formula: "Вихідні дані Світового Банку у кг/га діляться на 100 для переводу в центнери з гектара (ц/га).",
    thresholds: [
      { min: 0, max: 15, inclusiveMin: false, inclusiveMax: false, label: "Абсолютна небезпека", level: "absolute", text: "(0; 15)" },
      { min: 15, max: 20, inclusiveMin: true, inclusiveMax: false, label: "Критичний", level: "critical", text: "[15; 20)" },
      { min: 20, max: 25, inclusiveMin: true, inclusiveMax: false, label: "Небезпечний", level: "danger", text: "[20; 25)" },
      { min: 25, max: 35, inclusiveMin: true, inclusiveMax: false, label: "Незадовільний", level: "unsatisfactory", text: "[25; 35)" },
      { min: 35, max: 45, inclusiveMin: true, inclusiveMax: false, label: "Задовільний", level: "satisfactory", text: "[35; 45)" },
      { min: 45, max: 55, inclusiveMin: true, inclusiveMax: true, label: "Оптимальний", level: "optimal", text: "[45; 55]" },
      { min: 55, max: 75, inclusiveMin: false, inclusiveMax: true, label: "Задовільний", level: "satisfactory", text: "(55; 75]" },
      { min: 75, max: 95, inclusiveMin: false, inclusiveMax: true, label: "Незадовільний", level: "unsatisfactory", text: "(75; 95]" },
      { min: 95, max: 100, inclusiveMin: false, inclusiveMax: true, label: "Небезпечний", level: "danger", text: "(95; 100]" },
      { min: 100, max: 150, inclusiveMin: false, inclusiveMax: true, label: "Критичний", level: "critical", text: "(100; 150]" },
      { min: 150, max: Infinity, inclusiveMin: false, inclusiveMax: false, label: "Абсолютна небезпека", level: "absolute", text: "(150; ∞)" }
    ],
    evaluate: function(val) {
      if (val === null || val === undefined) return { label: "Немає даних", level: "unknown" };
      if (val >= 45 && val <= 55) return { label: "Оптимальний", level: "optimal" };
      if ((val >= 35 && val < 45) || (val > 55 && val <= 75)) return { label: "Задовільний", level: "satisfactory" };
      if ((val >= 25 && val < 35) || (val > 75 && val <= 95)) return { label: "Незадовільний", level: "unsatisfactory" };
      if ((val >= 20 && val < 25) || (val > 95 && val <= 100)) return { label: "Небезпечний", level: "danger" };
      if ((val >= 15 && val < 20) || (val > 100 && val <= 150)) return { label: "Критичний", level: "critical" };
      return { label: "Абсолютна небезпека", level: "absolute" };
    },
    history: {
      "2015": 49.83,
      "2016": 51.05,
      "2017": 53.17,
      "2018": 46.63,
      "2019": 52.62,
      "2020": 51.40,
      "2021": 54.10,
      "2022": 48.22,
      "2023": 39.93,
      "2024": 48.54
    },
    average: 49.55,
    averageStatus: "Оптимальний",
    averageLevel: "optimal",
    trend: "stable-high",
    safeTrend: "Висока природна родючість ґрунтів Пампи, висока продуктивність зернового комплексу, стабільне перебування в оптимальній зоні 45–55 ц/га у 9 з 10 років.",
    dangerTrend: "Висока вразливість до кліматичних аномалій (посуха La Niña у 2022/2023 рр. знизила показник до 39,93 ц/га, що завдало удару по валютних надходженнях країни).",
    threats: "Кліматичні зміни, дефіцит імпортних добрив через валютний контроль, експортні мита (retenciones), що стримують інвестиції фермерів у технології.",
    conclusion: "Сектор є фундаментальною опорою продовольчої та експортної безпеки держави з оптимальним середнім рівнем 49,55 ц/га."
  },

  // 2. Очікувана тривалість життя при народженні
  life_expectancy: {
    id: "life_expectancy",
    title: "Очікувана тривалість життя при народженні",
    category: "Демографічна та соціальна безпека",
    unit: "років",
    sourceName: "World Bank (Жінки: SP.DYN.LE00.FE.IN, Чоловіки: SP.DYN.LE00.MA.IN)",
    sourceUrl: "https://data.worldbank.org/indicator/SP.DYN.LE00.IN?locations=AR",
    description: "Інтегральний показник здоров'я нації, ефективності системи охорони здоров'я та умов життя населення.",
    thresholds: [
      { min: 0, max: 66, inclusiveMin: false, inclusiveMax: false, label: "Абсолютна небезпека", level: "absolute", text: "(0; 66)" },
      { min: 66, max: 68, inclusiveMin: true, inclusiveMax: false, label: "Критичний", level: "critical", text: "[66; 68)" },
      { min: 68, max: 70, inclusiveMin: true, inclusiveMax: false, label: "Небезпечний", level: "danger", text: "[68; 70)" },
      { min: 70, max: 75, inclusiveMin: true, inclusiveMax: false, label: "Незадовільний", level: "unsatisfactory", text: "[70; 75)" },
      { min: 75, max: 78, inclusiveMin: true, inclusiveMax: false, label: "Задовільний", level: "satisfactory", text: "[75; 78)" },
      { min: 78, max: Infinity, inclusiveMin: true, inclusiveMax: false, label: "Оптимальний", level: "optimal", text: "[78; ∞)" }
    ],
    evaluate: function(val) {
      if (val === null || val === undefined) return { label: "Немає даних", level: "unknown" };
      if (val >= 78) return { label: "Оптимальний", level: "optimal" };
      if (val >= 75) return { label: "Задовільний", level: "satisfactory" };
      if (val >= 70) return { label: "Незадовільний", level: "unsatisfactory" };
      if (val >= 68) return { label: "Небезпечний", level: "danger" };
      if (val >= 66) return { label: "Критичний", level: "critical" };
      return { label: "Абсолютна небезпека", level: "absolute" };
    },
    subIndicators: {
      female: {
        name: "Жінки",
        wbCode: "SP.DYN.LE00.FE.IN",
        history: { "2015": 79.80, "2016": 79.13, "2017": 79.20, "2018": 79.51, "2019": 79.44, "2020": 78.78, "2021": 76.86, "2022": 78.32, "2023": 79.88, "2024": 80.02 },
        average: 79.10,
        averageStatus: "Оптимальний",
        averageLevel: "optimal"
      },
      male: {
        name: "Чоловіки",
        wbCode: "SP.DYN.LE00.MA.IN",
        history: { "2015": 73.37, "2016": 73.04, "2017": 73.79, "2018": 73.95, "2019": 74.16, "2020": 72.98, "2021": 71.11, "2022": 73.25, "2023": 74.81, "2024": 74.98 },
        average: 73.55,
        averageStatus: "Незадовільний",
        averageLevel: "unsatisfactory"
      }
    },
    average: 76.33,
    averageStatus: "Задовільний",
    averageLevel: "satisfactory",
    displayAverage: "Жінки: 79.10 | Чоловіки: 73.55",
    trend: "recovering",
    safeTrend: "Очікувана тривалість життя жінок стійко перевищує 79–80 років (оптимальний стан). Після пандемічного просідання 2020–2021 рр. спостерігається швидке повне відновлення.",
    dangerTrend: "Стійкий гендерний розрив тривалості життя понад 5,5 років (чоловіки перебувають у незадовільній зоні 73,55 років через вищу травматичність, серцево-судинні захворювання та стресові фактори).",
    threats: "Хронічне недофінансування комунальних лікарень через бюджетний дефіцит, інфляційне здорожчання медикаментів.",
    conclusion: "Загальний стан демографічного відновлення позитивний для жінок (оптимальний), але потребує таргетованих програм охорони чоловічого здоров'я."
  },

  // 3. Смертність немовлят
  infant_mortality: {
    id: "infant_mortality",
    title: "Смертність немовлят",
    category: "Охорона здоров'я та демографія",
    unit: "на 1 000 живонароджених",
    sourceName: "World Bank (Дівчатка: SP.DYN.IMRT.FE.IN, Хлопчики: SP.DYN.IMRT.MA.IN)",
    sourceUrl: "https://data.worldbank.org/indicator/SP.DYN.IMRT.IN?locations=AR",
    description: "Ключовий маркер соціально-економічного благополуччя, неонатальної медицини та доступу до перинатальної допомоги.",
    thresholds: [
      { min: 0, max: 4, inclusiveMin: true, inclusiveMax: true, label: "Оптимальний", level: "optimal", text: "[0; 4]" },
      { min: 4, max: 5, inclusiveMin: false, inclusiveMax: true, label: "Задовільний", level: "satisfactory", text: "(4; 5]" },
      { min: 5, max: 7, inclusiveMin: false, inclusiveMax: true, label: "Незадовільний", level: "unsatisfactory", text: "(5; 7]" },
      { min: 7, max: 9, inclusiveMin: false, inclusiveMax: true, label: "Небезпечний", level: "danger", text: "(7; 9]" },
      { min: 9, max: 11, inclusiveMin: false, inclusiveMax: true, label: "Критичний", level: "critical", text: "(9; 11]" },
      { min: 11, max: 1000, inclusiveMin: false, inclusiveMax: true, label: "Абсолютна небезпека", level: "absolute", text: "(11; 1000]" }
    ],
    evaluate: function(val) {
      if (val === null || val === undefined) return { label: "Немає даних", level: "unknown" };
      if (val >= 0 && val <= 4) return { label: "Оптимальний", level: "optimal" };
      if (val > 4 && val <= 5) return { label: "Задовільний", level: "satisfactory" };
      if (val > 5 && val <= 7) return { label: "Незадовільний", level: "unsatisfactory" };
      if (val > 7 && val <= 9) return { label: "Небезпечний", level: "danger" };
      if (val > 9 && val <= 11) return { label: "Критичний", level: "critical" };
      return { label: "Абсолютна небезпека", level: "absolute" };
    },
    subIndicators: {
      female: {
        name: "Дівчатка (жінки)",
        wbCode: "SP.DYN.IMRT.FE.IN",
        history: { "2015": 9.0, "2016": 8.6, "2017": 8.3, "2018": 7.9, "2019": 7.7, "2020": 7.6, "2021": 7.5, "2022": 7.4, "2023": 7.3, "2024": 7.1 },
        average: 7.84,
        averageStatus: "Небезпечний",
        averageLevel: "danger"
      },
      male: {
        name: "Хлопчики (чоловіки)",
        wbCode: "SP.DYN.IMRT.MA.IN",
        history: { "2015": 11.0, "2016": 10.7, "2017": 10.4, "2018": 10.3, "2019": 10.1, "2020": 9.8, "2021": 9.5, "2022": 9.3, "2023": 9.1, "2024": 8.9 },
        average: 9.91,
        averageStatus: "Критичний",
        averageLevel: "critical"
      }
    },
    average: 8.88,
    averageStatus: "Небезпечний",
    averageLevel: "danger",
    displayAverage: "Дівчатка: 7.84 | Хлопчики: 9.91",
    trend: "improving",
    safeTrend: "Безперервна монотонна позитивна динаміка зниження смертності: дівчатка з 9,0 до 7,1 на 1000 (-21%), хлопчики з 11,0 до 8,9 на 1000 (-19%), перехід хлопчиків із критичної зони до зони небезпечного стану у 2024 році.",
    dangerTrend: "Показники все ще суттєво відстають від європейського оптимуму ([0; 4] на 1000). Зберігається висока регіональна диференціація між столичним округом Буенос-Айреса та бідними північними провінціями (Чако, Формоса).",
    threats: "Зростання рівня бідності серед сімей з дітьми, загроза скорочення соціальних трансфертів та вакцинаційних програм.",
    conclusion: "Стійка позитивна тенденція до покращення неонатального виживання, але статус залишається у зоні підвищеного ризику (небезпечний / критичний)."
  },

  // 4. Коефіцієнт покриття імпорту експортом
  trade_coverage: {
    id: "trade_coverage",
    title: "Коефіцієнт покриття імпорту експортом",
    category: "Зовнішньоекономічна безпека",
    unit: "разів (коефіцієнт)",
    sourceName: "World Bank (Експорт: NE.EXP.GNFS.ZS, Імпорт: NE.IMP.GNFS.ZS)",
    sourceUrl: "https://data.worldbank.org/indicator/NE.EXP.GNFS.ZS?locations=AR",
    description: "Співвідношення експорту до імпорту товарів і послуг. Відображає стійкість торговельного балансу, здатність самостійно забезпечувати імпортні потреби без накопичення зовнішніх боргів.",
    formula: "Експорт товарів і послуг (% ВВП) / Імпорт товарів і послуг (% ВВП)",
    thresholds: [
      { min: 0, max: 0.85, inclusiveMin: false, inclusiveMax: false, label: "Абсолютна небезпека", level: "absolute", text: "(0; 0.85)" },
      { min: 0.85, max: 0.90, inclusiveMin: true, inclusiveMax: false, label: "Критичний", level: "critical", text: "[0.85; 0.9)" },
      { min: 0.90, max: 0.95, inclusiveMin: true, inclusiveMax: false, label: "Небезпечний", level: "danger", text: "[0.9; 0.95)" },
      { min: 0.95, max: 0.975, inclusiveMin: true, inclusiveMax: false, label: "Незадовільний", level: "unsatisfactory", text: "[0.95; 0.975)" },
      { min: 0.975, max: 1.0, inclusiveMin: true, inclusiveMax: false, label: "Задовільний", level: "satisfactory", text: "[0.975; 1)" },
      { min: 1.0, max: 1.2, inclusiveMin: true, inclusiveMax: true, label: "Оптимальний", level: "optimal", text: "[1; 1.2]" },
      { min: 1.2, max: 1.25, inclusiveMin: false, inclusiveMax: true, label: "Задовільний", level: "satisfactory", text: "(1.2; 1.25]" },
      { min: 1.25, max: 1.30, inclusiveMin: false, inclusiveMax: true, label: "Незадовільний", level: "unsatisfactory", text: "(1.25; 1.3]" },
      { min: 1.30, max: 1.50, inclusiveMin: false, inclusiveMax: true, label: "Небезпечний", level: "danger", text: "(1.3; 1.5]" },
      { min: 1.50, max: 1.70, inclusiveMin: false, inclusiveMax: true, label: "Критичний", level: "critical", text: "(1.5; 1.7]" },
      { min: 1.70, max: Infinity, inclusiveMin: false, inclusiveMax: false, label: "Абсолютна небезпека", level: "absolute", text: "(1.7; ∞)" }
    ],
    evaluate: function(val) {
      if (val === null || val === undefined) return { label: "Немає даних", level: "unknown" };
      if (val >= 1.0 && val <= 1.2) return { label: "Оптимальний", level: "optimal" };
      if ((val >= 0.975 && val < 1.0) || (val > 1.2 && val <= 1.25)) return { label: "Задовільний", level: "satisfactory" };
      if ((val >= 0.95 && val < 0.975) || (val > 1.25 && val <= 1.3)) return { label: "Незадовільний", level: "unsatisfactory" };
      if ((val >= 0.90 && val < 0.95) || (val > 1.3 && val <= 1.5)) return { label: "Небезпечний", level: "danger" };
      if ((val >= 0.85 && val < 0.90) || (val > 1.5 && val <= 1.7)) return { label: "Критичний", level: "critical" };
      return { label: "Абсолютна небезпека", level: "absolute" };
    },
    history: {
      "2015": 0.909,
      "2016": 0.923,
      "2017": 0.810,
      "2018": 0.884,
      "2019": 1.219,
      "2020": 1.221,
      "2021": 1.203,
      "2022": 1.064,
      "2023": 0.925,
      "2024": 1.203
    },
    exportHistory: { "2015": 10.71, "2016": 12.53, "2017": 11.32, "2018": 14.44, "2019": 17.92, "2020": 16.61, "2021": 18.07, "2022": 16.28, "2023": 12.82, "2024": 15.25 },
    importHistory: { "2015": 11.78, "2016": 13.57, "2017": 13.97, "2018": 16.33, "2019": 14.71, "2020": 13.60, "2021": 15.01, "2022": 15.30, "2023": 13.85, "2024": 12.68 },
    average: 1.036,
    averageStatus: "Оптимальний",
    averageLevel: "optimal",
    trend: "volatile-positive",
    safeTrend: "Середньозважений коефіцієнт за 10 років (1,036) знаходиться в оптимальній зоні [1,0; 1,2]. У 2024 році коефіцієнт досяг 1,203 (задовільний профіцит) завдяки відновленню агроекспорту та розширенню видобутку сланцевого газу й нафти басейну Vaca Muerta.",
    dangerTrend: "Надзвичайна амплітуда коливань: у 2017 р. показник падав до 0,810 (абсолютна небезпека), а у 2023 р. через катастрофічну посуху опустився до 0,925 (небезпечний стан). Вимушений профіцит часто досягався за рахунок жорстких валютних обмежень (cepo cambiario) та стиснення критичного імпорту.",
    threats: "Висока сировинна концентрація експорту (соя, кукурудза, борошно), волатильність світових цін на зернові, ризик торговельних конфліктів.",
    conclusion: "Торговельне сальдо перебуває у стані крихкої рівноваги. Потрібна диверсифікація експортного кошика у бік високотехнологічних товарів та енергоносіїв."
  },

  // 5. Витрати на дослідження та розробки (R&D)
  rd_expenditure: {
    id: "rd_expenditure",
    title: "Витрати на дослідження та розробки (R&D)",
    category: "Інноваційна та науково-технологічна безпека",
    unit: "% ВВП",
    sourceName: "World Bank (GB.XPD.RSDV.GD.ZS)",
    sourceUrl: "https://data.worldbank.org/indicator/GB.XPD.RSDV.GD.ZS?locations=AR",
    description: "Показник фінансування науки, прикладних розробок та здатності економіки до довгострокової технологічної модернізації.",
    thresholds: [
      { min: 0, max: 0.5, inclusiveMin: false, inclusiveMax: false, label: "Абсолютна небезпека", level: "absolute", text: "(0; 0.5)" },
      { min: 0.5, max: 1.0, inclusiveMin: true, inclusiveMax: false, label: "Критичний", level: "critical", text: "[0.5; 1)" },
      { min: 1.0, max: 1.5, inclusiveMin: true, inclusiveMax: false, label: "Небезпечний", level: "danger", text: "[1; 1.5)" },
      { min: 1.5, max: 2.0, inclusiveMin: true, inclusiveMax: false, label: "Незадовільний", level: "unsatisfactory", text: "[1.5; 2)" },
      { min: 2.0, max: 3.0, inclusiveMin: true, inclusiveMax: false, label: "Задовільний", level: "satisfactory", text: "[2; 3)" },
      { min: 3.0, max: Infinity, inclusiveMin: true, inclusiveMax: false, label: "Оптимальний", level: "optimal", text: "[3; ∞)" }
    ],
    evaluate: function(val) {
      if (val === null || val === undefined) return { label: "Немає даних", level: "unknown" };
      if (val >= 3.0) return { label: "Оптимальний", level: "optimal" };
      if (val >= 2.0) return { label: "Задовільний", level: "satisfactory" };
      if (val >= 1.5) return { label: "Незадовільний", level: "unsatisfactory" };
      if (val >= 1.0) return { label: "Небезпечний", level: "danger" };
      if (val >= 0.5) return { label: "Критичний", level: "critical" };
      return { label: "Абсолютна небезпека", level: "absolute" };
    },
    history: {
      "2015": 0.623,
      "2016": 0.558,
      "2017": 0.556,
      "2018": 0.488,
      "2019": 0.478,
      "2020": 0.541,
      "2021": 0.524,
      "2022": 0.550,
      "2023": 0.601,
      "2024": 0.540
    },
    average: 0.546,
    averageStatus: "Критичний",
    averageLevel: "critical",
    trend: "stagnant-critical",
    safeTrend: "Збереження наукових шкіл світового рівня в галузі ядерної енергетики (INVAP), агробіотехнологій та аерокосмічної індустрії (CONAE), наявність висококваліфікованих науковців.",
    dangerTrend: "Хронічна консервація показника на критичному рівні 0,48–0,62% ВВП (середнє 0,55%), що в 4–6 разів менше від нормативу інноваційного розвитку (2–3% ВВП). У 2018–2019 роках показник опускався в зону абсолютної небезпеки (<0,5%).",
    threats: "Масова міграція наукових кадрів за кордон («відтік мізків»), скорочення державного фінансування наукових центрів (CONICET) у рамках політики бюджетної економії, пасивність приватного бізнесу в інвестуванні в R&D.",
    conclusion: "Стан інноваційної безпеки знаходиться в критичній зоні, що консервує сировинну залежність економіки."
  },

  // 6. Співвідношення доходів найбагатших 10% і найбідніших 10%
  income_inequality: {
    id: "income_inequality",
    title: "Співвідношення доходів найбагатших 10 % і найбідніших 10 % населення",
    category: "Соціальна безпека та диференціація населення",
    unit: "разів (децильний коефіцієнт)",
    sourceName: "World Bank (SI.DST.10TH.10 / SI.DST.FRST.10)",
    sourceUrl: "https://data.worldbank.org/indicator/SI.DST.10TH.10?locations=AR",
    description: "Показник глибини майнового розшарування суспільства. Визначає соціальну напругу, справедливість розподілу національного доходу та ризики соціальних потрясінь.",
    formula: "Частка доходів найбагатших 10% населення (%) / Частка доходів найбідніших 10% населення (%)",
    thresholds: [
      { min: 1.0, max: 4.5, inclusiveMin: true, inclusiveMax: true, label: "Оптимальний", level: "optimal", text: "[1; 4.5]" },
      { min: 4.5, max: 5.0, inclusiveMin: false, inclusiveMax: true, label: "Задовільний", level: "satisfactory", text: "(4.5; 5]" },
      { min: 5.0, max: 5.5, inclusiveMin: false, inclusiveMax: true, label: "Незадовільний", level: "unsatisfactory", text: "(5; 5.5]" },
      { min: 5.5, max: 6.0, inclusiveMin: false, inclusiveMax: true, label: "Небезпечний", level: "danger", text: "(5.5; 6]" },
      { min: 6.0, max: 7.0, inclusiveMin: false, inclusiveMax: true, label: "Критичний", level: "critical", text: "(6; 7]" },
      { min: 7.0, max: Infinity, inclusiveMin: false, inclusiveMax: false, label: "Абсолютна небезпека", level: "absolute", text: "(7; ∞)" }
    ],
    evaluate: function(val) {
      if (val === null || val === undefined) return { label: "Немає даних", level: "unknown" };
      if (val >= 1.0 && val <= 4.5) return { label: "Оптимальний", level: "optimal" };
      if (val > 4.5 && val <= 5.0) return { label: "Задовільний", level: "satisfactory" };
      if (val > 5.0 && val <= 5.5) return { label: "Незадовільний", level: "unsatisfactory" };
      if (val > 5.5 && val <= 6.0) return { label: "Небезпечний", level: "danger" };
      if (val > 6.0 && val <= 7.0) return { label: "Критичний", level: "critical" };
      return { label: "Абсолютна небезпека", level: "absolute" };
    },
    history: {
      "2015": 17.43,
      "2016": 18.06,
      "2017": 16.67,
      "2018": 17.71,
      "2019": 19.56,
      "2020": 18.00,
      "2021": 17.33,
      "2022": 14.90,
      "2023": 16.32,
      "2024": 16.42
    },
    topShareHistory: { "2015": 30.5, "2016": 30.7, "2017": 30.0, "2018": 30.1, "2019": 31.3, "2020": 30.6, "2021": 31.2, "2022": 29.8, "2023": 31.0, "2024": 31.2 },
    bottomShareHistory: { "2015": 1.75, "2016": 1.70, "2017": 1.80, "2018": 1.70, "2019": 1.60, "2020": 1.70, "2021": 1.80, "2022": 2.00, "2023": 1.90, "2024": 1.90 },
    average: 17.24,
    averageStatus: "Абсолютна небезпека",
    averageLevel: "absolute",
    trend: "critical-danger",
    safeTrend: "Порівняно з деякими сусідами по регіону (Бразилія, Колумбія), Аргентина історично мала більш розвинений середній клас і розвинену систему безкоштовної вищої освіти.",
    dangerTrend: "Показник децильної диференціації стабільно знаходиться у зоні абсолютної небезпеки (поріг > 7 разів перевищено у 2,4 раза!). Доходи найбагатших 10% громадян у понад 17 разів перевищують доходи найбідніших 10%.",
    threats: "Тривалий інфляційний шок знецінив реальні доходи незахищених верств, підвищивши рівень бідності понад 50% у 2024 році. Загроза масових протестів та політичної нестабільності.",
    conclusion: "Найвищий ступінь системного ризику соціальної безпеки: екстремальне розшарування доходів вимагає комплексної адресної підтримки та захисту робочих місць."
  },

  // 7. Загальний борг центрального уряду
  government_debt: {
    id: "government_debt",
    title: "Загальний борг центрального уряду",
    category: "Боргова та фінансова безпека",
    unit: "% ВВП",
    sourceName: "World Bank (GC.DOD.TOTL.GD.ZS) / IMF WEO / Min. de Economía de la Nación",
    sourceUrl: "https://data.worldbank.org/indicator/GC.DOD.TOTL.GD.ZS?locations=AR",
    description: "Відношення державного боргу до обсягу виробленого валового внутрішнього продукту. Головний індикатор платоспроможності та суверенного дефолтного ризику країни.",
    thresholds: [
      { min: 0, max: 20, inclusiveMin: true, inclusiveMax: true, label: "Оптимальний", level: "optimal", text: "[0; 20]" },
      { min: 20, max: 30, inclusiveMin: false, inclusiveMax: true, label: "Задовільний", level: "satisfactory", text: "(20; 30]" },
      { min: 30, max: 40, inclusiveMin: false, inclusiveMax: true, label: "Незадовільний", level: "unsatisfactory", text: "(30; 40]" },
      { min: 40, max: 50, inclusiveMin: false, inclusiveMax: true, label: "Небезпечний", level: "danger", text: "(40; 50]" },
      { min: 50, max: 60, inclusiveMin: false, inclusiveMax: true, label: "Критичний", level: "critical", text: "(50; 60]" },
      { min: 60, max: Infinity, inclusiveMin: false, inclusiveMax: false, label: "Абсолютна небезпека", level: "absolute", text: "(60; ∞)" }
    ],
    evaluate: function(val) {
      if (val === null || val === undefined) return { label: "Немає даних", level: "unknown" };
      if (val >= 0 && val <= 20) return { label: "Оптимальний", level: "optimal" };
      if (val > 20 && val <= 30) return { label: "Задовільний", level: "satisfactory" };
      if (val > 30 && val <= 40) return { label: "Незадовільний", level: "unsatisfactory" };
      if (val > 40 && val <= 50) return { label: "Небезпечний", level: "danger" };
      if (val > 50 && val <= 60) return { label: "Критичний", level: "critical" };
      return { label: "Абсолютна небезпека", level: "absolute" };
    },
    history: {
      "2015": 53.60,
      "2016": 53.10,
      "2017": 57.00,
      "2018": 85.30,
      "2019": 89.80,
      "2020": 103.80,
      "2021": 81.00,
      "2022": 84.30,
      "2023": 154.60,
      "2024": 84.70
    },
    average: 84.72,
    averageStatus: "Абсолютна небезпека",
    averageLevel: "absolute",
    trend: "extreme-risk-stabilizing",
    safeTrend: "У 2024 році вперше за 16 років досягнуто стабільного профіциту державного бюджету (нульовий фіскальний дефіцит) завдяки скороченню неефективних держвидатків; стабілізація відношення боргу до ВВП після піку 2023 року.",
    dangerTrend: "Показник перебуває у стані абсолютної небезпеки (поріг 60% значно перевищено щороку з 2018 р., середнє значення — 84,72% ВВП). У 2023 р. через девальвацію показник злетів до 154,6% ВВП.",
    threats: "Висока частка боргу в іноземній валюті (долар США), надзвичайно висока залежність від умов реструктуризації перед МВФ ($44 млрд зобов'язань), закритий доступ до міжнародних ринків приватного капіталу.",
    conclusion: "Боргова безпека є епіцентром макроекономічної вразливості Аргентини, що вимагає продовження фіскальної дисципліни та накопичення чистих валютних резервів."
  }
};

// Загальні характеристики країни для шапки аналітики
const ARGENTINA_COUNTRY_PROFILE = {
  name: "Аргентинська Республіка",
  nameNative: "República Argentina",
  iso2: "AR",
  iso3: "ARG",
  capital: "Буенос-Айрес",
  population: "46,05 млн осіб (2024)",
  gdpNominal: "$630+ млрд (2024)",
  currency: "Аргентинський песо (ARS)",
  region: "Південна Америка (Латинська Америка)",
  majorExports: "Соєвий шрот та олія, кукурудза, пшениця, нафта, газ, літій, автозапчастини",
  wbIncomeGroup: "Верхній середній дохід (Upper middle income)"
};

// Загальний профіль розподілу індикаторів безпеки за 2015–2024 рр.
const ARGENTINA_SUMMARY_PROFILE = {
  totalIndicators: 7,
  distribution: {
    optimal: { count: 2, percent: 28.6, label: "Оптимальний", color: "#10b981", items: ["Урожайність зернових (49,55 ц/га)", "Покриття імпорту експортом (1,036)"] },
    satisfactory: { count: 0, percent: 0, label: "Задовільний", color: "#22c55e", items: [] },
    unsatisfactory: { count: 1, percent: 14.3, label: "Незадовільний", color: "#f59e0b", items: ["Тривалість життя чоловіків (73,55 р.)"] },
    danger: { count: 1, percent: 14.3, label: "Небезпечний", color: "#f97316", items: ["Смертність немовлят-дівчаток (7,84 на 1000)"] },
    critical: { count: 2, percent: 28.6, label: "Критичний", color: "#ef4444", items: ["Витрати на R&D (0,55% ВВП)", "Смертність хлопчиків (9,91 на 1000)"] },
    absolute: { count: 2, percent: 28.6, label: "Абсолютна небезпека", color: "#e11d48", items: ["Держборг (% ВВП, 84,72%)", "Децильна нерівність доходів (17,24 разів)"] }
  }
};
