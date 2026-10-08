document.addEventListener("DOMContentLoaded", () => {
  /* =====================================================
       ELEMENTS
    ===================================================== */

  const header = document.getElementById("siteHeader");

  const menuButton = document.getElementById("menuButton");

  const mobileNav = document.getElementById("mobileNav");

  const form = document.getElementById("contactForm");

  const formResult = document.getElementById("formResult");

  /* =====================================================
       TRANSLATIONS
    ===================================================== */

  const translations = {
    ka: {
      navHome: "მთავარი",

      navAbout: "ჩვენ შესახებ",

      navServices: "სერვისები",

      navContact: "კონტაქტი",

      heroTitle: "თქვენი ახალი<br>მისამართი იწყება აქ",

      heroText:
        "უძრავი ქონების პროფესიონალები, რომლებიც თქვენს საჭიროებებს სწორ გადაწყვეტილებად აქცევენ.",

      heroButton: "დაგვიკავშირდით",

      heroMore: "გაიგეთ მეტი",

      aboutEyebrow: "ჩვენ შესახებ",

      aboutTitle: "უძრავი ქონება,<br><strong>სწორი ადამიანებისთვის.</strong>",

      aboutLead:
        "Neo House არის უძრავი ქონების სააგენტო, რომელიც ადამიანებს სწორი არჩევანის გაკეთებაში ეხმარება.",

      aboutText:
        "ჩვენთვის თითოეული კლიენტი განსხვავებულია. ამიტომ ვუსმენთ, ვაანალიზებთ და ვთავაზობთ გადაწყვეტილებას, რომელიც რეალურად შეესაბამება მის მიზნებს.",

      servicesEyebrow: "რას ვაკეთებთ",

      servicesTitle:
        "სერვისი, რომელიც<br><strong>შედეგზეა ორიენტირებული.</strong>",

      service1Title: "უძრავი ქონების კონსულტაცია",

      service1Text:
        "პროფესიონალური კონსულტაცია თქვენი მიზნებისა და ბიუჯეტის შესაბამისად.",

      service2Title: "ყიდვა და გაყიდვა",

      service2Text:
        "მხარდაჭერა უძრავი ქონების ყიდვა-გაყიდვის პროცესის ყველა ეტაპზე.",

      service3Title: "პერსონალური მიდგომა",

      service3Text:
        "ვაფასებთ თქვენს საჭიროებებს და ვეძებთ თქვენთვის სწორ შესაძლებლობას.",

      contactEyebrow: "დაგვიკავშირდით",

      contactTitle: "მოდით,<br><strong>ვისაუბროთ.</strong>",

      contactText:
        "გაქვთ კითხვა ან გსურთ კონსულტაცია? დაგვიკავშირდით და ჩვენი გუნდი დაგეხმარებათ.",

      address: "ალ. ყაზბეგის გამზირი, თბილისი",

      nameLabel: "სახელი",

      phoneLabel: "ტელეფონი",

      emailLabel: "ელფოსტა",

      messageLabel: "შეტყობინება",

      sendButton: "გაგზავნა →",

      mapText: "თბილისი, საქართველო",

      footerText: "უძრავი ქონების პროფესიონალები.",

      formDone: "მადლობა! ეს დემო ფორმაა — შეტყობინება რეალურად არ იგზავნება.",
    },

    en: {
      navHome: "Home",

      navAbout: "About Us",

      navServices: "Services",

      navContact: "Contact",

      heroTitle: "Your new<br>address starts here",

      heroText:
        "Real estate professionals who turn your needs into the right decision.",

      heroButton: "Contact Us",

      heroMore: "Learn More",

      aboutEyebrow: "About Us",

      aboutTitle: "Real estate,<br><strong>for the right people.</strong>",

      aboutLead:
        "Neo House is a real estate agency helping people make confident property decisions.",

      aboutText:
        "Every client is different. We listen, understand and provide solutions that genuinely match their goals.",

      servicesEyebrow: "What We Do",

      servicesTitle: "A service<br><strong>focused on results.</strong>",

      service1Title: "Real Estate Consulting",

      service1Text: "Professional advice based on your goals and budget.",

      service2Title: "Buying & Selling",

      service2Text:
        "Support throughout every stage of the property buying and selling process.",

      service3Title: "Personal Approach",

      service3Text:
        "We understand your needs and look for the right opportunity for you.",

      contactEyebrow: "Get In Touch",

      contactTitle: "Let's<br><strong>talk.</strong>",

      contactText:
        "Have a question or need advice? Contact us and our team will be happy to help.",

      address: "Al. Kazbegi Avenue, Tbilisi",

      nameLabel: "Name",

      phoneLabel: "Phone",

      emailLabel: "Email",

      messageLabel: "Message",

      sendButton: "Send →",

      mapText: "Tbilisi, Georgia",

      footerText: "Real estate professionals.",

      formDone:
        "Thank you! This is a demo form — the message is not actually sent.",
    },

    ru: {
      navHome: "Главная",

      navAbout: "О нас",

      navServices: "Услуги",

      navContact: "Контакты",

      heroTitle: "Ваш новый<br>адрес начинается здесь",

      heroText:
        "Профессионалы в сфере недвижимости, которые превращают ваши потребности в правильное решение.",

      heroButton: "Связаться",

      heroMore: "Подробнее",

      aboutEyebrow: "О нас",

      aboutTitle: "Недвижимость,<br><strong>для правильных людей.</strong>",

      aboutLead:
        "Neo House — агентство недвижимости, которое помогает принимать правильные решения.",

      aboutText:
        "Каждый клиент уникален. Мы слушаем, анализируем и предлагаем решения, соответствующие вашим целям.",

      servicesEyebrow: "Наши услуги",

      servicesTitle:
        "Сервис,<br><strong>ориентированный на результат.</strong>",

      service1Title: "Консультация по недвижимости",

      service1Text:
        "Профессиональная консультация с учетом ваших целей и бюджета.",

      service2Title: "Покупка и продажа",

      service2Text:
        "Поддержка на каждом этапе покупки или продажи недвижимости.",

      service3Title: "Персональный подход",

      service3Text:
        "Мы учитываем ваши потребности и ищем подходящую возможность.",

      contactEyebrow: "Свяжитесь с нами",

      contactTitle: "Давайте<br><strong>поговорим.</strong>",

      contactText:
        "Есть вопрос или нужна консультация? Свяжитесь с нами, и наша команда поможет вам.",

      address: "проспект Ал. Казбеги, Тбилиси",

      nameLabel: "Имя",

      phoneLabel: "Телефон",

      emailLabel: "Email",

      messageLabel: "Сообщение",

      sendButton: "Отправить →",

      mapText: "Тбилиси, Грузия",

      footerText: "Профессионалы в сфере недвижимости.",

      formDone:
        "Спасибо! Это демонстрационная форма — сообщение пока не отправляется.",
    },
  };

  /* =====================================================
       LANGUAGE
    ===================================================== */

  let currentLanguage = localStorage.getItem("neoHouseLang") || "ka";

  if (!translations[currentLanguage]) {
    currentLanguage = "ka";
  }

  function setLanguage(language) {
    currentLanguage = language;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;

      if (translations[language][key] !== undefined) {
        element.innerHTML = translations[language][key];
      }
    });

    document.querySelectorAll(".lang").forEach((button) => {
      button.classList.toggle("active", button.dataset.lang === language);
    });

    localStorage.setItem("neoHouseLang", language);
  }

  document.querySelectorAll(".lang").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });
  });

  setLanguage(currentLanguage);

  /* =====================================================
       HEADER SCROLL
    ===================================================== */

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 15);
  });

  /* =====================================================
       MOBILE MENU
    ===================================================== */

  menuButton.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  /* =====================================================
       SCROLL ANIMATION
    ===================================================== */

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });

  /* =====================================================
       CONTACT FORM
    ===================================================== */

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    formResult.textContent = translations[currentLanguage].formDone;

    form.reset();
  });

  /* =====================================================
       MAP
    ===================================================== */

  if (typeof L !== "undefined") {
    const latitude = 41.7239;

    const longitude = 44.7382;

    const map = L.map("map", {
      scrollWheelZoom: false,
    }).setView([latitude, longitude], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,

      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(
        `
                <strong>Neo House</strong>
                <br>
                Al. Kazbegi Avenue, Tbilisi
                `,
      );
  }
});
