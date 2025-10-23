// js/lightbox.js
(() => {
  // --- Отримуємо елементи ---
  const lightbox = document.querySelector("[data-lightbox]");
  if (!lightbox) return; // Якщо лайтбоксу немає, нічого не робимо

  // Змінюємо document.querySelector на lightbox.querySelector
  const lightboxImage = lightbox.querySelector(".lightbox-image");
  const closeButton = lightbox.querySelector("[data-lightbox-close]"); // <-- ЗМІНЕНО
  const prevButton = lightbox.querySelector("[data-lightbox-prev]"); // <-- ЗМІНЕНО
  const nextButton = lightbox.querySelector("[data-lightbox-next]"); // <-- ЗМІНЕНО
  const galleryImages = document.querySelectorAll(".gallery-item img");

  // --- Створюємо масив з усіма посиланнями на зображення ---
  const gallerySrcs = Array.from(galleryImages).map((img) => img.src);
  let currentIndex = 0;

  // --- Функція відкриття лайтбоксу ---
  function openLightbox(event) {
    const imgSrc = event.currentTarget.src;
    // Знаходимо індекс зображення, на яке клікнули
    currentIndex = gallerySrcs.indexOf(imgSrc);
    updateImage(); // Встановлюємо зображення
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
    // Додаємо слухачів клавіатури
    document.addEventListener("keydown", handleKeydown);
  }

  // --- Функція закриття лайтбоксу ---
  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxImage.src = ""; // Очищуємо src
    document.body.style.overflow = "auto";
    // Прибираємо слухачів клавіатури
    document.removeEventListener("keydown", handleKeydown);
  }

  // --- Функція оновлення зображення ---
  function updateImage() {
    lightboxImage.src = gallerySrcs[currentIndex];
  }

  // --- Функції навігації ---
  function showNextImage() {
    currentIndex++;
    // Якщо дійшли до кінця, починаємо спочатку
    if (currentIndex >= gallerySrcs.length) {
      currentIndex = 0;
    }
    updateImage();
  }

  function showPrevImage() {
    currentIndex--;
    // Якщо дійшли до початку, переходимо в кінець
    if (currentIndex < 0) {
      currentIndex = gallerySrcs.length - 1;
    }
    updateImage();
  }

  // --- Обробка клавіатури (бонус!) ---
  function handleKeydown(event) {
    if (event.key === "ArrowRight") {
      showNextImage();
    } else if (event.key === "ArrowLeft") {
      showPrevImage();
    } else if (event.key === "Escape") {
      closeLightbox();
    }
  }

  // --- Додаємо обробники подій ---
  galleryImages.forEach((img) => {
    img.addEventListener("click", openLightbox);
  });

  closeButton.addEventListener("click", closeLightbox);
  nextButton.addEventListener("click", showNextImage);
  prevButton.addEventListener("click", showPrevImage);

  // Закриття по кліку на оверлей (фон)
  lightbox.addEventListener("click", (event) => {
    // Закриваємо, тільки якщо клік був саме на фон,
    // а не на кнопки чи зображення
    if (event.currentTarget === event.target) {
      closeLightbox();
    }
  });
})();
