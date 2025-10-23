// js/lightbox.js
(() => {
  // Отримуємо елементи лайтбоксу
  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImage = lightbox.querySelector(".lightbox-image");
  const closeButton = document.querySelector("[data-lightbox-close]");

  // Отримуємо всі зображення галереї
  const galleryImages = document.querySelectorAll(".gallery-item img");

  // Функція відкриття лайтбоксу
  function openLightbox(event) {
    const imgSrc = event.currentTarget.src;
    lightboxImage.src = imgSrc;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden"; // Блокуємо скрол сторінки
  }

  // Функція закриття лайтбоксу
  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxImage.src = ""; // Очищуємо src, щоб зупинити завантаження
    document.body.style.overflow = "auto"; // Повертаємо скрол
  }

  // Додаємо обробники подій
  galleryImages.forEach((img) => {
    img.addEventListener("click", openLightbox);
  });

  closeButton.addEventListener("click", closeLightbox);

  // Закриття по кліку на оверлей (фон)
  lightbox.addEventListener("click", (event) => {
    if (event.currentTarget === event.target) {
      closeLightbox();
    }
  });
})();
