
// 1. Словник українських перекладів назв країн та регіонів
const COUNTRIES_UA = {
  // Європа
  UKR: "Україна",
  POL: "Польща",
  DEU: "Німеччина",
  FRA: "Франція",
  ITA: "Італія",
  GBR: "Велика Британія",
  ESP: "Іспанія",
  NLD: "Нідерланди",
  SWE: "Швеція",
  NOR: "Норвегія",
  FIN: "Фінляндія",
  DNK: "Данія",
  CHE: "Швейцарія",
  AUT: "Австрія",
  BEL: "Бельгія",
  IRL: "Ірландія",
  PRT: "Португалія",
  GRC: "Греція",
  CZE: "Чехія",
  ROU: "Румунія",
  HUN: "Угорщина",
  SVK: "Словаччина",
  BGR: "Болгарія",
  HRV: "Хорватія",
  SVN: "Словенія",
  LTU: "Литва",
  LVA: "Латвія",
  EST: "Естонія",
  CYP: "Кіпр",
  LUX: "Люксембург",
  MLT: "Мальта",
  ISL: "Ісландія",
  ALB: "Албанія",
  BIH: "Боснія і Герцеговина",
  MKD: "Північна Македонія",
  MNE: "Чорногорія",
  SRB: "Сербія",
  MDA: "Молдова",
  GEO: "Грузія",
  ARM: "Вірменія",
  AZE: "Азербайджан",

  // Північна та Південна Америка
  USA: "США",
  CAN: "Канада",
  MEX: "Мексика",
  BRA: "Бразилія",
  ARG: "Аргентина",
  CHL: "Чилі",
  COL: "Колумбія",
  PER: "Перу",
  ECU: "Еквадор",
  URY: "Уругвай",
  PRY: "Парагвай",
  PAN: "Панама",
  CRI: "Коста-Рика",

  // Азія та Океанія
  JPN: "Японія",
  CHN: "Китай",
  IND: "Індія",
  KOR: "Південна Корея",
  TUR: "Туреччина",
  ISR: "Ізраїль",
  SAU: "Саудівська Аравія",
  ARE: "ОАЕ",
  SGP: "Сінгапур",
  AUS: "Австралія",
  NZL: "Нова Зеландія",
  IDN: "Індонезія",
  MYS: "Малайзія",
  THA: "Таїланд",
  VNM: "В'єтнам",
  PHL: "Філіппіни",
  TWN: "Тайвань",
  KAZ: "Казахстан",
  UZB: "Узбекистан",
  QAT: "Катар",
  KWT: "Кувейт",
  IRN: "Іран",
  IRQ: "Ірак",
  PAK: "Пакистан",
  BGD: "Бангладеш",

  // Африка
  ZAF: "ПАР",
  EGY: "Єгипет",
  MAR: "Марокко",
  NGA: "Нігерія",
  KEN: "Кенія",
  DZA: "Алжир",
  TUN: "Туніс",
  GHA: "Гана",
  ETH: "Ефіопія",

  // Регіональні та світові агрегати
  EUU: "Європейський Союз",
  WLD: "Світ",
  OED: "Країни ОЕСР",
  EMU: "Зона євро",
  ECA: "Європа та Центральна Азія",
  NAC: "Північна Америка (регіон)",
  EAS: "Східна Азія та Океанія",
  LCN: "Латинська Америка та Кариби",
  MEA: "Близький Схід та Пн. Африка",
  SAS: "Південна Азія (регіон)",
  SSF: "Субсахарська Африка"
};

const REGIONS_UA = {
  "Europe & Central Asia": "Європа та Ц. Азія",
  "North America": "Північна Америка",
  "East Asia & Pacific": "Східна Азія",
  "Latin America & Caribbean": "Латинська Америка",
  "Middle East & North Africa": "Близький Схід",
  "Middle East, North Africa, Afghanistan & Pakistan": "Близький Схід",
  "South Asia": "Південна Азія",
  "Sub-Saharan Africa": "Африка",
  "Aggregates": "Регіон / Об'єднання"
};

// Пріоритетні популярні країни
const POPULAR_COUNTRY_CODES = [
  "UKR", "POL", "DEU", "USA", "GBR", "FRA", "ITA", "JPN", "TUR", "CAN", "ESP", "CHN", "LTU", "LVA", "EST", "CZE", "EUU", "WLD"
];

// Базовий початковий набір країн (для миттєвого відображення без очікування запиту)
const DEFAULT_FALLBACK_COUNTRIES = [
  { id: "UKR", nameEn: "Ukraine", nameUa: "Україна", region: "Europe & Central Asia", isAggregate: false },
  { id: "POL", nameEn: "Poland", nameUa: "Польща", region: "Europe & Central Asia", isAggregate: false },
  { id: "DEU", nameEn: "Germany", nameUa: "Німеччина", region: "Europe & Central Asia", isAggregate: false },
  { id: "FRA", nameEn: "France", nameUa: "Франція", region: "Europe & Central Asia", isAggregate: false },
  { id: "ITA", nameEn: "Italy", nameUa: "Італія", region: "Europe & Central Asia", isAggregate: false },
  { id: "USA", nameEn: "United States", nameUa: "США", region: "North America", isAggregate: false },
  { id: "GBR", nameEn: "United Kingdom", nameUa: "Велика Британія", region: "Europe & Central Asia", isAggregate: false },
  { id: "JPN", nameEn: "Japan", nameUa: "Японія", region: "East Asia & Pacific", isAggregate: false },
  { id: "TUR", nameEn: "Turkiye", nameUa: "Туреччина", region: "Europe & Central Asia", isAggregate: false },
  { id: "CAN", nameEn: "Canada", nameUa: "Канада", region: "North America", isAggregate: false },
  { id: "ESP", nameEn: "Spain", nameUa: "Іспанія", region: "Europe & Central Asia", isAggregate: false },
  { id: "CHN", nameEn: "China", nameUa: "Китай", region: "East Asia & Pacific", isAggregate: false },
  { id: "LTU", nameEn: "Lithuania", nameUa: "Литва", region: "Europe & Central Asia", isAggregate: false },
  { id: "LVA", nameEn: "Latvia", nameUa: "Латвія", region: "Europe & Central Asia", isAggregate: false },
  { id: "EST", nameEn: "Estonia", nameUa: "Естонія", region: "Europe & Central Asia", isAggregate: false },
  { id: "CZE", nameEn: "Czechia", nameUa: "Чехія", region: "Europe & Central Asia", isAggregate: false },
  { id: "EUU", nameEn: "European Union", nameUa: "Європейський Союз", region: "Aggregates", isAggregate: true },
  { id: "WLD", nameEn: "World", nameUa: "Світ", region: "Aggregates", isAggregate: true }
];

// 2. Стан компонента
let allCountriesList = [...DEFAULT_FALLBACK_COUNTRIES];
let currentSelectedCode = "UKR";
let currentFilterTab = "all";
let focusedOptionIndex = -1;

/**
 * Отримати назву країни для виводу в заголовках та таблиці
 */
function getCountryDisplayName(code) {
  const c = allCountriesList.find(item => item.id === code);
  if (!c) return code;
  return c.nameUa;
}

/**
 * Завантаження повного каталогу країн через World Bank Open Data API
 */
async function loadWorldBankCountries() {
  try {
    const res = await fetch("https://api.worldbank.org/v2/country?per_page=300&format=json");
    if (!res.ok) throw new Error("HTTP error " + res.status);
    const data = await res.json();

    if (data && data[1] && Array.isArray(data[1])) {
      const parsed = data[1].map(item => {
        const isAggregate = item.region && item.region.value === "Aggregates";
        const nameEn = item.name.trim();
        const nameUa = COUNTRIES_UA[item.id] || nameEn;
        const regionRaw = item.region ? item.region.value.trim() : "";
        const regionUa = REGIONS_UA[regionRaw] || regionRaw;

        return {
          id: item.id,
          nameEn: nameEn,
          nameUa: nameUa,
          region: regionUa,
          isAggregate: isAggregate,
          isPopular: POPULAR_COUNTRY_CODES.includes(item.id)
        };
      });

      // Сортування: український алфавіт
      parsed.sort((a, b) => a.nameUa.localeCompare(b.nameUa, "uk"));

      allCountriesList = parsed;

      // Оновлюємо лічильник та рендеримо оновлений список
      const countEl = document.getElementById("totalCountriesCount");
      if (countEl) countEl.innerText = allCountriesList.filter(c => !c.isAggregate).length;

      renderCountryOptions();
      updateTriggerDisplay();
    }
  } catch (err) {
    console.warn("Не вдалося завантажити розширений список країн зі Світового банку, використовується базовий перелік:", err);
  }
}

/**
 * Рендеринг елементів списку за активним фільтром та пошуковим рядком
 */
function renderCountryOptions() {
  const container = document.getElementById("countryOptionsList");
  const emptyState = document.getElementById("countryEmptyState");
  const searchInput = document.getElementById("countrySearchInput");
  const clearBtn = document.getElementById("countrySearchClear");

  if (!container) return;

  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

  // Показ/приховування кнопки очищення (хрестик)
  if (clearBtn) {
    clearBtn.style.display = query ? "flex" : "none";
  }

  // Фільтрація
  let filtered = allCountriesList.filter(item => {
    // Вкладки
    if (currentFilterTab === "popular" && !item.isPopular) return false;
    if (currentFilterTab === "aggregates" && !item.isAggregate) return false;
    if (currentFilterTab === "all" && item.isAggregate && !query) return false;

    // Пошук
    if (!query) return true;
    const matchId = item.id.toLowerCase().includes(query);
    const matchUa = item.nameUa.toLowerCase().includes(query);
    const matchEn = item.nameEn.toLowerCase().includes(query);
    return matchId || matchUa || matchEn;
  });

  container.innerHTML = "";
  focusedOptionIndex = -1;

  if (filtered.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  const frag = document.createDocumentFragment();

  filtered.forEach((item, idx) => {
    const isSelected = item.id === currentSelectedCode;
    const opt = document.createElement("div");
    opt.className = `country-option ${isSelected ? "selected" : ""}`;
    opt.setAttribute("role", "option");
    opt.setAttribute("aria-selected", isSelected ? "true" : "false");
    opt.setAttribute("data-code", item.id);
    opt.setAttribute("tabindex", "-1");

    opt.innerHTML = `
      <div class="country-option-main">
        <span class="country-code-pill">${item.id}</span>
        <div class="country-text-group">
          <span class="country-name-ua">${highlightMatch(item.nameUa, query)}</span>
          ${item.nameUa !== item.nameEn ? `<span class="country-name-en">${highlightMatch(item.nameEn, query)}</span>` : ""}
        </div>
      </div>
      <div class="country-meta-group">
        ${item.region ? `<span class="country-region-badge">${item.region}</span>` : ""}
        <svg class="country-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
    `;

    opt.addEventListener("click", () => {
      selectCountry(item.id);
    });

    frag.appendChild(opt);
  });

  container.appendChild(frag);
}

/**
 * Підсвітка збігів у тексті пошуку
 */
function highlightMatch(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query);
  if (idx === -1) return text;
  const before = text.substring(0, idx);
  const match = text.substring(idx, idx + query.length);
  const after = text.substring(idx + query.length);
  return `${before}<strong style="color: var(--color-primary-light); text-decoration: underline;">${match}</strong>${after}`;
}

/**
 * Вибір конкретної країни
 */
function selectCountry(code, triggerAutoLoad = true) {
  currentSelectedCode = code;
  const hiddenInput = document.getElementById("countrySelect");
  if (hiddenInput) {
    hiddenInput.value = code;
  }

  updateTriggerDisplay();
  closeCountryDropdown();

  // Автоматичне оновлення даних при виборі країни
  if (triggerAutoLoad && typeof loadSecurityData === "function") {
    loadSecurityData();
  }
}

/**
 * Оновлення тексту та бейджа в кнопці відкриття селектора
 */
function updateTriggerDisplay() {
  const triggerCode = document.getElementById("triggerCode");
  const triggerLabel = document.getElementById("triggerLabel");
  const country = allCountriesList.find(c => c.id === currentSelectedCode);

  if (country) {
    if (triggerCode) triggerCode.innerText = country.id;
    if (triggerLabel) triggerLabel.innerText = country.nameUa;
  } else {
    if (triggerCode) triggerCode.innerText = currentSelectedCode;
    if (triggerLabel) triggerLabel.innerText = currentSelectedCode;
  }
}

/**
 * Перемикання вкладок фільтрації (Всі / Популярні / Регіони)
 */
function filterCountryTab(tab, event) {
  if (event && typeof event.stopPropagation === "function") {
    event.stopPropagation();
  }
  currentFilterTab = tab;
  const tabs = document.querySelectorAll(".dropdown-filter-tabs .filter-tab");
  tabs.forEach(t => {
    if (t.getAttribute("data-filter") === tab) {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });

  renderCountryOptions();
  const searchInput = document.getElementById("countrySearchInput");
  if (searchInput) searchInput.focus();
}

/**
 * Відкриття / закриття випадаючого списку
 */
function toggleCountryDropdown() {
  const dropdown = document.getElementById("countryDropdown");
  const trigger = document.getElementById("countryTrigger");
  if (!dropdown || !trigger) return;

  const isOpen = dropdown.classList.contains("open");
  if (isOpen) {
    closeCountryDropdown();
  } else {
    openCountryDropdown();
  }
}

function openCountryDropdown() {
  const dropdown = document.getElementById("countryDropdown");
  const trigger = document.getElementById("countryTrigger");
  const searchInput = document.getElementById("countrySearchInput");

  if (!dropdown || !trigger) return;

  if (typeof closePeriodDropdown === "function") {
    closePeriodDropdown();
  }

  dropdown.classList.add("open");
  trigger.classList.add("active");
  trigger.setAttribute("aria-expanded", "true");

  renderCountryOptions();

  // Автофокус у поле пошуку
  setTimeout(() => {
    if (searchInput) {
      searchInput.focus();
      searchInput.select();
    }
  }, 50);
}

function closeCountryDropdown() {
  const dropdown = document.getElementById("countryDropdown");
  const trigger = document.getElementById("countryTrigger");

  if (!dropdown || !trigger) return;

  dropdown.classList.remove("open");
  trigger.classList.remove("active");
  trigger.setAttribute("aria-expanded", "false");
}

/**
 * Ініціалізація компонента пошукового дропдауну
 */
function initCountrySelect() {
  const trigger = document.getElementById("countryTrigger");
  const searchInput = document.getElementById("countrySearchInput");
  const clearBtn = document.getElementById("countrySearchClear");
  const dropdown = document.getElementById("countryDropdown");
  const optionsList = document.getElementById("countryOptionsList");

  if (trigger) {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleCountryDropdown();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderCountryOptions();
    });

    searchInput.addEventListener("keydown", (e) => {
      const options = optionsList ? optionsList.querySelectorAll(".country-option") : [];
      if (!options.length) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        focusedOptionIndex = Math.min(focusedOptionIndex + 1, options.length - 1);
        highlightFocusedOption(options);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        focusedOptionIndex = Math.max(focusedOptionIndex - 1, 0);
        highlightFocusedOption(options);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (focusedOptionIndex >= 0 && focusedOptionIndex < options.length) {
          const code = options[focusedOptionIndex].getAttribute("data-code");
          if (code) selectCountry(code);
        } else if (options.length > 0) {
          const code = options[0].getAttribute("data-code");
          if (code) selectCountry(code);
        }
      } else if (e.key === "Escape") {
        closeCountryDropdown();
        if (trigger) trigger.focus();
      }
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      renderCountryOptions();
      searchInput.focus();
    });
  }

  // Закриття при кліку поза межами компонента
  document.addEventListener("click", (e) => {
    const wrapper = document.getElementById("countrySearchableSelect");
    if (wrapper && !wrapper.contains(e.target)) {
      closeCountryDropdown();
    }
  });

  // Закриття клавішею Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCountryDropdown();
    }
  });

  // Початковий рендеринг та завантаження каталогу
  updateTriggerDisplay();
  const countEl = document.getElementById("totalCountriesCount");
  if (countEl) countEl.innerText = allCountriesList.filter(c => !c.isAggregate).length;

  loadWorldBankCountries();
}

function highlightFocusedOption(options) {
  options.forEach((opt, i) => {
    if (i === focusedOptionIndex) {
      opt.classList.add("focused");
      opt.scrollIntoView({ block: "nearest" });
    } else {
      opt.classList.remove("focused");
    }
  });
}
