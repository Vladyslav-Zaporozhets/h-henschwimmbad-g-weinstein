(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-menu-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-menu-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-menu]"),
    // Додаємо посилання з мобільного меню
    menuLinks: document.querySelectorAll(".mob-nav-link"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // Додаємо обробники подій на кожне посилання в меню
  refs.menuLinks.forEach((link) => {
    link.addEventListener("click", toggleModal);
  });

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");

    // Додамо керування ARIA-атрибутом
    const isMenuOpen = refs.modal.classList.contains("is-open");
    refs.openModalBtn.setAttribute("aria-expanded", isMenuOpen);
  }
})();
