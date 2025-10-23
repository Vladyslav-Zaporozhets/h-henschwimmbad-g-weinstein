# Portfolio-Projekt: Promo-Website Höhenschwimmbad Gößweinstein

![<img width="1920" height="953" alt="Image" src="https://github.com/user-attachments/assets/cabd5025-d6c2-4d2e-abeb-5cc311beb886" />]()

Dies ist eine responsive Promotion-Website für das Höhenschwimmbad Gößweinstein, entwickelt als Portfolio-Projekt. Der Fokus lag auf der Erstellung einer sauberen, semantischen HTML-Struktur, modernem CSS-Layout (Flexbox, Grid) und der Implementierung dynamischer Funktionen mit **Vanilla JavaScript (ES6+)**.

**[Live-Demo (GitHub Pages)](https://vladyslav-zaporozhets.github.io/h-henschwimmbad-g-weinstein/)**

---

## 🚀 Hauptfunktionen & Technische Details

Dieses Projekt ist mehr als nur eine statische Seite. Es besteht aus mehreren JavaScript-Modulen, die die Benutzererfahrung (User Experience) verbessern. Alle Skripte sind in IIFE (Immediately Invoked Function Expressions) gekapselt, um den globalen Geltungsbereich (Global Scope) sauber zu halten.

### 1. Dynamisches Status-Banner
Ein Skript (`js/status-banner.js`), das den aktuellen Status des Schwimmbads ermittelt.
* **Funktion:** Es ruft den aktuellen Monat und die aktuelle Stunde über das `new Date()` Objekt ab.
* **Logik:** Es prüft, ob der Monat innerhalb der Saison (Juni-September) und die Stunde innerhalb der Öffnungszeiten (09:00 - 20:00) liegt.
* **Ergebnis:** Das Banner zeigt dynamisch "Wir haben geöffnet!" (Grün) oder "Wir haben geschlossen." (Rot) an und fügt die entsprechenden CSS-Klassen (`is-open` / `is-closed`) hinzu.

### 2. Interaktive Lightbox-Galerie
Ein umfassendes Skript (`js/lightbox.js`) für die Bildergalerie.
* **Funktion:** Erstellt ein Array aus allen Galeriebildern (`.gallery-item img`).
* **Navigation:** Ermöglicht das Durchblättern der Bilder mit "Weiter"- (`data-lightbox-next`) und "Zurück"-Buttons (`data-lightbox-prev`). Der aktuelle Index (`currentIndex`) wird verfolgt und zyklisch aktualisiert (springt am Ende zum Anfang zurück).
* **Tastatursteuerung:** Fügt `EventListener` für `keydown` hinzu:
    * `ArrowRight`: Zeigt das nächste Bild.
    * `ArrowLeft`: Zeigt das vorherige Bild.
    * `Escape`: Schließt die Lightbox.
* **Hintergrund-Klick:** Schließt die Lightbox beim Klick auf den Overlay-Hintergrund (aber nicht beim Klick auf die Buttons oder das Bild selbst).

### 3. Aktive Navigationshervorhebung beim Scrollen
Ein Skript (`js/active-nav.js`), das die Navigation dynamisch an die Scroll-Position anpasst.
* **Funktion:** Überwacht das `window.addEventListener("scroll")`.
* **Logik:** Iteriert durch alle Sektionen (`<section[id]>`) und prüft, welche Sektion sich aktuell im Viewport befindet. Dabei wird die Höhe des fixierten Headers (`.header.offsetHeight`) berücksichtigt.
* **Ergebnis:** Fügt die CSS-Klasse `.current` dynamisch zu dem Navigationslink hinzu, der zur aktuellen Sektion gehört, und entfernt sie von allen anderen.

### 4. Responsives Mobiles Menü
Das Skript (`js/menu.js`) steuert das "Hamburger"-Menü.
* **Funktion:** Schaltet (toggelt) die CSS-Klasse `is-open` auf dem Menü-Container (`[data-menu]`).
* **Barrierefreiheit (Accessibility):** Aktualisiert das `aria-expanded` Attribut auf dem Öffnen-Button (`[data-menu-open]`) für Screenreader.
* **Auto-Close:** Schließt das Menü automatisch, wenn auf einen Navigationslink im mobilen Menü geklickt wird (z.B. bei Sprung zu einem Anker).

### 5. Automatisches Copyright-Jahr
Ein kleines Hilfsskript (`js/current-year.js`), um den Footer aktuell zu halten.
* **Funktion:** Setzt den `textContent` des Elements `#current-year` auf das Ergebnis von `new Date().getFullYear()`.

---

## 🛠 Verwendete Technologien

* **HTML5:** Semantische Struktur (Header, Nav, Section, Main, Footer, Address).
* **CSS3:**
    * **Layout:** Responsive Design (Mobile-First-Ansatz), Flexbox und CSS Grid.
    * **Styling:** CSS Custom Properties (Variablen), Transitions und Box-Shadows.
* **Vanilla JavaScript (ES6+):**
    * DOM-Manipulation (`querySelector`, `querySelectorAll`, `classList`, `addEventListener`).
    * Modul-Pattern (gekapselt in IIFE).
    * Arbeit mit dem `Date`-Objekt.
* **Performance-Optimierung:**
    * **Bilder:** Verwendung des modernen `.webp`-Formats und `srcset` für Retina-Displays (beim Logo).
    * **Ladezeit:** `loading="lazy"` Attribut für alle Galerie- und Kartenbilder.

---

## 📂 Lokale Installation & Start

1.  Das Repository klonen:
    ```bash
    git clone [https://github.com/Vladyslav-Zaporozhets/h-henschwimmbad-g-weinstein.git](https://github.com/Vladyslav-Zaporozhets/h-henschwimmbad-g-weinstein.git)
    ```
2.  In das Verzeichnis wechseln:
    ```bash
    cd h-henschwimmbad-g-weinstein
    ```
3.  Die `index.html` Datei in einem beliebigen Browser öffnen.
    *(Für die beste Erfahrung wird ein lokaler Server empfohlen, z.B. die "Live Server" Extension für VS Code).*
