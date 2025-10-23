// js/status-banner.js
(() => {
  const banner = document.getElementById("status-banner");
  const statusText = document.getElementById("status-text");

  const now = new Date();
  const currentMonth = now.getMonth(); // 0 = січень, 11 = грудень
  const currentHour = now.getHours(); // 0 - 23

  // Сезон: з червня (5) по вересень (8)
  const isSeason = currentMonth >= 5 && currentMonth <= 8;
  // Години роботи: з 09:00 до 20:00 (не включно)
  const isTime = currentHour >= 9 && currentHour < 20;

  if (isSeason && isTime) {
    banner.classList.add("is-open");
    statusText.textContent = "Wir haben geöffnet!";
  } else {
    banner.classList.add("is-closed");
    let reason = "";
    if (!isSeason) {
      reason =
        "Derzeit ist keine Saison (wir arbeiten von Juni bis September).";
    } else {
      reason = "Unsere Öffnungszeiten: 09:00 – 20:00 Uhr.";
    }
    statusText.textContent = `Wir haben geschlossen. ${reason}`;
  }
})();
