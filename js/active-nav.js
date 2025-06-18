document.addEventListener("DOMContentLoaded", () => {
  // Отримуємо всі навігаційні посилання
  const navLinks = document.querySelectorAll(".header-nav-link");

  // Отримуємо всі секції, до яких ведуть посилання (використовуємо їх ID)
  const sections = document.querySelectorAll("section[id]");

  // Функція для видалення класу 'current' з усіх посилань
  function removeActiveClass() {
    navLinks.forEach((link) => {
      link.classList.remove("current");
    });
  }

  // Функція для додавання класу 'current' до відповідного посилання
  function addActiveClass(id) {
    removeActiveClass(); // Спочатку видаляємо з усіх
    const activeLink = document.querySelector(
      `.header-nav-link[href="#${id}"]`
    );
    if (activeLink) {
      activeLink.classList.add("current");
    }
  }

  // Слухаємо подію прокрутки
  window.addEventListener("scroll", () => {
    let currentSectionId = "";

    // Визначаємо, яка секція зараз у вікні перегляду
    sections.forEach((section) => {
      const sectionTop =
        section.offsetTop - document.querySelector(".header").offsetHeight; // Враховуємо висоту фіксованої шапки
      const sectionHeight = section.clientHeight;

      // Перевіряємо, чи верхня частина секції увійшла у вікно перегляду
      // або чи середина секції знаходиться у вікні перегляду.
      // Можна налаштувати логіку визначення "активної" секції.
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSectionId = section.id;
      }
    });

    // Якщо знайдено активну секцію, додаємо клас 'current'
    if (currentSectionId) {
      addActiveClass(currentSectionId);
    } else {
      // Якщо жодна секція не активна (наприклад, між секціями або на самому верху до першої секції),
      // можна залишити перше посилання активним або зробити всі неактивними.
      // Для твого випадку, можна залишити "Über uns" активним за замовчуванням,
      // або якщо скрол на самому верху сторінки, коли жодна секція ще не в'їхала.
      // Наразі, якщо currentSectionId пустий, нічого не відбудеться, або можна
      // явно деактивувати всі: removeActiveClass();
    }
  });

  // Додатково: Обробка натискання на посилання
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Видаляємо клас current зі всіх посилань і додаємо до клікнутого
      removeActiveClass();
      event.target.classList.add("current");

      // Оскільки це якірні посилання, браузер сам проскролить.
      // Після скролу, подія 'scroll' спрацює і оновить active class
      // на основі позиції скролу.
    });
  });

  // Викликаємо функцію один раз при завантаженні сторінки,
  // щоб встановити початковий активний пункт (наприклад, якщо сторінка завантажилася не зверху)
  window.dispatchEvent(new Event("scroll"));
});
