/* =========================================================
   Willie Zhang — Photography & Life
   Complete script.js
   ========================================================= */

(() => {
  "use strict";

  /* =========================================================
     PHOTO DATA
     ========================================================= */

  const albums = [
    {
      id: "yilan",
      number: "01",
      title: "宜蘭一日遊（二信校外教學）",
      description: "72 PHOTOS",
      photos: [
        "https://i.ibb.co/dsbnxwmd/IMG-8503-compressed.jpg",
        "https://i.ibb.co/9kbLNm86/IMG-8502-compressed.jpg",
        "https://i.ibb.co/gb4zJpYb/IMG-8504-compressed.jpg",
        "https://i.ibb.co/nMN37B8S/IMG-8505-compressed.jpg",
        "https://i.ibb.co/7xPCG316/IMG-8506-compressed.jpg",
        "https://i.ibb.co/hJ2xmRSz/IMG-8508-compressed.jpg",
        "https://i.ibb.co/4nxhJhgr/IMG-8509-compressed.jpg",
        "https://i.ibb.co/ymSbzDps/IMG-8510-compressed.jpg",
        "https://i.ibb.co/BHyQWgnD/IMG-8511-compressed.jpg",
        "https://i.ibb.co/1f4LyHby/IMG-8512-compressed.jpg",
        "https://i.ibb.co/9910gWcN/IMG-8519-compressed.jpg",
        "https://i.ibb.co/gbXXnmqg/IMG-8521-compressed.jpg",
        "https://i.ibb.co/Wv2wN6TC/IMG-8522-compressed.jpg",
        "https://i.ibb.co/XZrbxfqX/IMG-8523-compressed.jpg",
        "https://i.ibb.co/nqw8B0vZ/IMG-8524-compressed.jpg",
        "https://i.ibb.co/0yrtWCGd/IMG-8525-compressed.jpg",
        "https://i.ibb.co/Kxj0rNh2/IMG-8527-compressed.jpg",
        "https://i.ibb.co/fRhqgjc/IMG-8528-compressed.jpg",
        "https://i.ibb.co/k6J84ms9/IMG-8529-compressed.jpg",
        "https://i.ibb.co/N6fV3hfb/IMG-8530-compressed.jpg",
        "https://i.ibb.co/TM0xrf94/IMG-8541-compressed.jpg",
        "https://i.ibb.co/9kb03PvX/IMG-8542-compressed.jpg",
        "https://i.ibb.co/cSQfdJCw/IMG-8543-compressed.jpg",
        "https://i.ibb.co/dw2z6CT2/IMG-8545-compressed.jpg",
        "https://i.ibb.co/m5RZjCxk/IMG-8546-compressed.jpg",
        "https://i.ibb.co/zThrSV0v/IMG-8450-compressed.jpg",
        "https://i.ibb.co/5WLmqhqp/IMG-8451-compressed.jpg",
        "https://i.ibb.co/QvcDZGfV/IMG-8452-compressed.jpg",
        "https://i.ibb.co/Z6gMD2pC/IMG-8453-compressed.jpg",
        "https://i.ibb.co/B2wn2qhD/IMG-8454-compressed.jpg",
        "https://i.ibb.co/H38VYx1/IMG-8455-compressed.jpg",
        "https://i.ibb.co/3yL72pQ3/IMG-8458-compressed.jpg",
        "https://i.ibb.co/hhFF5Q1/IMG-8459-compressed.jpg",
        "https://i.ibb.co/PZDNdv8F/IMG-8460-compressed.jpg",
        "https://i.ibb.co/qLgrpJZ1/IMG-8461-compressed.jpg",
        "https://i.ibb.co/1Gy62kjR/IMG-8462-compressed.jpg",
        "https://i.ibb.co/TxJ9tcbW/IMG-8463-compressed.jpg",
        "https://i.ibb.co/MDKpW25C/IMG-8466-compressed.jpg",
        "https://i.ibb.co/JwPcVyyZ/IMG-8467-compressed.jpg",
        "https://i.ibb.co/XrGLxDs0/IMG-8468-compressed.jpg",
        "https://i.ibb.co/GvmR0wt5/IMG-8469-compressed.jpg",
        "https://i.ibb.co/W4PVYTpc/IMG-8470-compressed.jpg",
        "https://i.ibb.co/BHwngF4D/IMG-8471-compressed.jpg",
        "https://i.ibb.co/KpTzWtkV/IMG-8472-compressed.jpg",
        "https://i.ibb.co/4RMt258f/IMG-8473-compressed.jpg",
        "https://i.ibb.co/20jWY8SF/IMG-8474-compressed.jpg",
        "https://i.ibb.co/xKKvjhw6/IMG-8475-compressed.jpg",
        "https://i.ibb.co/hFynK4b7/IMG-8476-compressed.jpg",
        "https://i.ibb.co/3yGzjfw7/IMG-8477-compressed.jpg",
        "https://i.ibb.co/fYvMFhr9/IMG-8478-compressed.jpg",
        "https://i.ibb.co/qfqTqWY/IMG-8479-compressed.jpg",
        "https://i.ibb.co/23V8nkyf/IMG-8481-compressed.jpg",
        "https://i.ibb.co/zhbrpLBN/IMG-8482-compressed.jpg",
        "https://i.ibb.co/pBWvQnfc/IMG-8483-compressed.jpg",
        "https://i.ibb.co/G48MhtYd/IMG-8484-compressed.jpg",
        "https://i.ibb.co/FbGCY5b8/IMG-8485-compressed.jpg",
        "https://i.ibb.co/gMMmNYcp/IMG-8486-compressed.jpg",
        "https://i.ibb.co/dJJNDsM6/IMG-8487-compressed.jpg",
        "https://i.ibb.co/Kz8pBD6J/IMG-8488-compressed.jpg",
        "https://i.ibb.co/V0GwqTJ9/IMG-8489-compressed.jpg",
        "https://i.ibb.co/0Vfz6Xr4/IMG-8490-compressed.jpg",
        "https://i.ibb.co/35b7YR9g/IMG-8491-compressed.jpg",
        "https://i.ibb.co/fY7Jx5fw/IMG-8492-compressed.jpg",
        "https://i.ibb.co/bjkwNjCL/IMG-8493-compressed.jpg",
        "https://i.ibb.co/Z6qWjfsx/IMG-8494-compressed.jpg",
        "https://i.ibb.co/YFK22z99/IMG-8495-compressed.jpg",
        "https://i.ibb.co/tMTtHMc7/IMG-8496-compressed.jpg",
        "https://i.ibb.co/tMpSPkMt/IMG-8497-compressed.jpg",
        "https://i.ibb.co/rG4BY2Hw/IMG-8498-compressed.jpg",
        "https://i.ibb.co/DP4ZHmg3/IMG-8499-compressed.jpg",
        "https://i.ibb.co/YFc982yP/IMG-8500-compressed.jpg",
        "https://i.ibb.co/4nkCP9RZ/IMG-8501-compressed.jpg"
      ]
    },

    {
      id: "after-school",
      number: "02",
      title: "休學後的照片",
      description: "55 PHOTOS",
      photos: [
        "https://i.ibb.co/SDFZ3thL/IMG-2203.jpg",
        "https://i.ibb.co/hJ52VS2y/IMG-2191.jpg",
        "https://i.ibb.co/9HZ7DbbG/IMG-2204.jpg",
        "https://i.ibb.co/KzqBcsZc/IMG-2234.jpg",
        "https://i.ibb.co/nMxp4C52/IMG-2237.jpg",
        "https://i.ibb.co/hQrGxGL/IMG-2266.jpg",
        "https://i.ibb.co/k2vgMJc7/IMG-2283.jpg",
        "https://i.ibb.co/xKdcrBch/IMG-2288.jpg",
        "https://i.ibb.co/bjdC8Qp6/IMG001.jpg",
        "https://i.ibb.co/nqYGBMgs/IMG-2291.jpg",
        "https://i.ibb.co/3mQP2X5W/IMG002.jpg",
        "https://i.ibb.co/m5yrHd22/IMG003.jpg",
        "https://i.ibb.co/0VhL8W7D/IMG004.jpg",
        "https://i.ibb.co/RRJrJ85/IMG005.jpg",
        "https://i.ibb.co/zTBZG5xX/IMG006.jpg",
        "https://i.ibb.co/pjpTtyj9/IMG007.jpg",
        "https://i.ibb.co/pj4RGXwT/IMG008.jpg",
        "https://i.ibb.co/ds5xQ2hV/IMG009.jpg",
        "https://i.ibb.co/zTY5M19g/IMG0010.jpg",
        "https://i.ibb.co/fYWhqK4m/IMG0011.jpg",
        "https://i.ibb.co/8g8Csrr4/IMG0012.jpg",
        "https://i.ibb.co/YvjQqSD/IMG0013.jpg",
        "https://i.ibb.co/k6hG0q9G/IMG0014.jpg",
        "https://i.ibb.co/bMZhtZZt/IMG0015.jpg",
        "https://i.ibb.co/jPwYjqzc/IMG0016.jpg",
        "https://i.ibb.co/5gKPVtrQ/IMG-1413.jpg",
        "https://i.ibb.co/fz9RNd2p/IMG-1414.jpg",
        "https://i.ibb.co/BVK5ygdK/IMG-1419.jpg",
        "https://i.ibb.co/BKtHz7p4/IMG-1422.jpg",
        "https://i.ibb.co/1tXY0JPk/IMG-1423.jpg",
        "https://i.ibb.co/qYSS5WLw/IMG-1424.jpg",
        "https://i.ibb.co/KcC5rzDM/IMG-1426.jpg",
        "https://i.ibb.co/jPPGys2D/IMG-1428.jpg",
        "https://i.ibb.co/whmksfKH/IMG-1429.jpg",
        "https://i.ibb.co/DX9dh30/IMG-1430.jpg",
        "https://i.ibb.co/RT0Btg6S/IMG-1431.jpg",
        "https://i.ibb.co/5g3sjv1Z/IMG-1432.jpg",
        "https://i.ibb.co/mVpnLQcL/IMG-1604.jpg",
        "https://i.ibb.co/rGPzwds1/IMG-1606.jpg",
        "https://i.ibb.co/V0b1Vh3W/IMG-1637.jpg",
        "https://i.ibb.co/kVgTxdpx/IMG-1638.jpg",
        "https://i.ibb.co/m53ht0zW/IMG-1641.jpg",
        "https://i.ibb.co/3YMFdPfN/IMG-1639.jpg",
        "https://i.ibb.co/p64m0qXw/IMG-1642.jpg",
        "https://i.ibb.co/HLhHNDZ5/IMG-1772.jpg",
        "https://i.ibb.co/dsghtDNy/IMG-1773.jpg",
        "https://i.ibb.co/1YL1fg9W/IMG-1798.jpg",
        "https://i.ibb.co/nqHwjgmC/IMG-2144.jpg",
        "https://i.ibb.co/Wv2brHdY/IMG-2145.jpg",
        "https://i.ibb.co/BK4th8Hk/IMG-2146.jpg",
        "https://i.ibb.co/TM4vq7tN/IMG-2147.jpg",
        "https://i.ibb.co/WhnTtd7/IMG-2148.jpg",
        "https://i.ibb.co/0jF0f37R/IMG-2153.jpg",
        "https://i.ibb.co/V083bKdN/IMG-2174.jpg",
        "https://i.ibb.co/HpHXS3qN/IMG-2190.jpg"
      ]
    },

    {
      id: "beitou-danshui",
      number: "03",
      title: "北投淡水一日遊",
      description: "20 PHOTOS",
      photos: [
        "https://i.ibb.co/Lhvvbrqb/IMG-7604.jpg",
        "https://i.ibb.co/x8HPp3m6/IMG-7606.jpg",
        "https://i.ibb.co/mF4h6F4J/IMG-7607.jpg",
        "https://i.ibb.co/PvqZYGrL/IMG-7622.jpg",
        "https://i.ibb.co/DPzKmTLQ/IMG-7627.jpg",
        "https://i.ibb.co/35f9gvZs/IMG-7628.jpg",
        "https://i.ibb.co/rPZ59SW/IMG-7643.jpg",
        "https://i.ibb.co/k2PNwv7c/IMG-7646.jpg",
        "https://i.ibb.co/N2QnMSfw/IMG-7649.jpg",
        "https://i.ibb.co/nNdcc1N9/IMG-7650.jpg",
        "https://i.ibb.co/PZBqtDMm/IMG-7651.jpg",
        "https://i.ibb.co/gbkHtxLG/IMG-7652.jpg",
        "https://i.ibb.co/zHRRJhx9/IMG-7653.jpg",
        "https://i.ibb.co/LDtdcrhL/IMG-7654.jpg",
        "https://i.ibb.co/dJMkn4fj/IMG-7655.jpg",
        "https://i.ibb.co/WW4x1B6F/IMG-7561.jpg",
        "https://i.ibb.co/N6F8c36V/IMG-7598.jpg",
        "https://i.ibb.co/zVHvk8yz/IMG-7599.jpg",
        "https://i.ibb.co/27PZNSMD/IMG-7600.jpg",
        "https://i.ibb.co/4RQ2PBTZ/IMG-7603.jpg"
      ]
    }
  ];

  /* =========================================================
     DOM
     ========================================================= */

  const $ = (selector, parent = document) => {
    return parent.querySelector(selector);
  };

  const $$ = (selector, parent = document) => {
    return [...parent.querySelectorAll(selector)];
  };

  const pageLoader = $("#pageLoader");
  const albumsGrid = $("#albumsGrid");
  const photoView = $("#photoView");
  const photoViewTitle = $("#photoViewTitle");
  const photoCounter = $("#photoCounter");
  const photoGrid = $("#photoGrid");
  const backButton = $("#backButton");

  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightboxImg");
  const lightboxTitle = $("#lightboxTitle");
  const lightboxCounter = $("#lightboxCounter");
  const closeButton = $("#close");
  const prevButton = $("#prev");
  const nextButton = $("#next");

  const themeButton = $("#themeBtn");
  const langButton = $("#langBtn");
  const menuButton = $("#menuBtn");
  const mobileMenu = $("#mobileMenu");
  const progress = $("#progress");
  const cursorGlow = $(".cursor-glow");

  /* =========================================================
     STATE
     ========================================================= */

  let currentAlbum = null;
  let currentPhotoIndex = 0;

  /* =========================================================
     PAGE LOADER
     
     IMPORTANT:
     Do NOT use window.load here.
     The page should stop showing "Willie" without waiting
     for all ImgBB images to finish loading.
     ========================================================= */

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      if (pageLoader) {
        pageLoader.classList.add("done");
      }
    }, 300);
  });

  /* =========================================================
     ALBUMS
     
     Album cards are intentionally TEXT ONLY.
     No thumbnails / cover images.
     ========================================================= */

  function renderAlbums() {
    if (!albumsGrid) return;

    albumsGrid.innerHTML = "";

    albums.forEach((album) => {
      const card = document.createElement("article");

      card.className = "album-card";
      card.dataset.albumId = album.id;
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Open ${album.title}`);

      card.innerHTML = `
        <span class="album-number">${album.number}</span>
        <h3>${album.title}</h3>
        <p>${album.description}</p>
      `;

      card.addEventListener("click", () => {
        openAlbum(album.id);
      });

      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openAlbum(album.id);
        }
      });

      albumsGrid.appendChild(card);
    });
  }

  /* =========================================================
     OPEN ALBUM
     ========================================================= */

  function openAlbum(albumId) {
    const album = albums.find((item) => item.id === albumId);

    if (!album) return;

    currentAlbum = album;
    currentPhotoIndex = 0;

    if (albumsGrid) {
      albumsGrid.hidden = true;
    }

    if (photoView) {
      photoView.hidden = false;
    }

    if (photoViewTitle) {
      photoViewTitle.textContent = album.title;
    }

    if (photoCounter) {
      photoCounter.textContent = `${album.photos.length} PHOTOS`;
    }

    renderPhotoGrid();

    const gallery = $("#gallery");

    if (gallery) {
      requestAnimationFrame(() => {
        gallery.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    }
  }

  /* =========================================================
     CLOSE ALBUM
     ========================================================= */

  function closeAlbum() {
    currentAlbum = null;
    currentPhotoIndex = 0;

    if (photoView) {
      photoView.hidden = true;
    }

    if (albumsGrid) {
      albumsGrid.hidden = false;
    }

    const gallery = $("#gallery");

    if (gallery) {
      requestAnimationFrame(() => {
        gallery.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    }
  }

  /* =========================================================
     PHOTO GRID
     
     Uses direct ImgBB URLs.
     No thumbnail URL.
     ========================================================= */

  function renderPhotoGrid() {
    if (!photoGrid || !currentAlbum) return;

    photoGrid.innerHTML = "";

    const fragment = document.createDocumentFragment();

    currentAlbum.photos.forEach((src, index) => {
      const tile = document.createElement("button");

      tile.type = "button";
      tile.className = "photo-tile";
      tile.dataset.index = index;
      tile.setAttribute(
        "aria-label",
        `${currentAlbum.title} — Photo ${index + 1}`
      );

      const img = document.createElement("img");

      img.src = src;
      img.alt = `${currentAlbum.title} ${index + 1}`;
      img.loading = "lazy";
      img.decoding = "async";

      tile.appendChild(img);

      tile.addEventListener("click", () => {
        openLightbox(index);
      });

      fragment.appendChild(tile);
    });

    photoGrid.appendChild(fragment);
  }

  /* =========================================================
     LIGHTBOX
     ========================================================= */

  function openLightbox(index) {
    if (!currentAlbum) return;

    if (
      index < 0 ||
      index >= currentAlbum.photos.length
    ) {
      return;
    }

    currentPhotoIndex = index;

    updateLightbox();

    if (lightbox) {
      lightbox.classList.add("show");
      lightbox.setAttribute("aria-hidden", "false");
    }

    document.body.classList.add("lightbox-open");

    if (closeButton) {
      closeButton.focus();
    }
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove("show");
      lightbox.setAttribute("aria-hidden", "true");
    }

    document.body.classList.remove("lightbox-open");
  }

  function updateLightbox() {
    if (!currentAlbum) return;

    const src = currentAlbum.photos[currentPhotoIndex];

    if (lightboxImg) {
      lightboxImg.src = src;
      lightboxImg.alt =
        `${currentAlbum.title} ${currentPhotoIndex + 1}`;

      lightboxImg.loading = "eager";
      lightboxImg.decoding = "async";
    }

    if (lightboxTitle) {
      lightboxTitle.textContent = currentAlbum.title;
    }

    if (lightboxCounter) {
      lightboxCounter.textContent =
        `${currentPhotoIndex + 1} / ${currentAlbum.photos.length}`;
    }
  }

  /* =========================================================
     LIGHTBOX NAVIGATION
     ========================================================= */

  function showNextPhoto() {
    if (!currentAlbum) return;

    currentPhotoIndex =
      (currentPhotoIndex + 1) %
      currentAlbum.photos.length;

    updateLightbox();
  }

  function showPreviousPhoto() {
    if (!currentAlbum) return;

    currentPhotoIndex =
      (currentPhotoIndex - 1 + currentAlbum.photos.length) %
      currentAlbum.photos.length;

    updateLightbox();
  }

  /* =========================================================
     BUTTON EVENTS
     ========================================================= */

  if (backButton) {
    backButton.addEventListener("click", closeAlbum);
  }

  if (closeButton) {
    closeButton.addEventListener("click", closeLightbox);
  }

  if (nextButton) {
    nextButton.addEventListener("click", showNextPhoto);
  }

  if (prevButton) {
    prevButton.addEventListener("click", showPreviousPhoto);
  }

  /* =========================================================
     CLICK OUTSIDE LIGHTBOX IMAGE
     ========================================================= */

  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  }

  /* =========================================================
     KEYBOARD
     ========================================================= */

  document.addEventListener("keydown", (event) => {
    if (
      !lightbox ||
      !lightbox.classList.contains("show")
    ) {
      return;
    }

    switch (event.key) {
      case "Escape":
        closeLightbox();
        break;

      case "ArrowRight":
        showNextPhoto();
        break;

      case "ArrowLeft":
        showPreviousPhoto();
        break;
    }
  });

  /* =========================================================
     TOUCH / SWIPE
     ========================================================= */

  let touchStartX = 0;
  let touchStartY = 0;

  if (lightbox) {
    lightbox.addEventListener(
      "touchstart",
      (event) => {
        const touch = event.changedTouches[0];

        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
      },
      { passive: true }
    );

    lightbox.addEventListener(
      "touchend",
      (event) => {
        const touch = event.changedTouches[0];

        const diffX = touch.clientX - touchStartX;
        const diffY = touch.clientY - touchStartY;

        if (Math.abs(diffX) < 50) return;

        if (Math.abs(diffX) <= Math.abs(diffY)) return;

        if (diffX < 0) {
          showNextPhoto();
        } else {
          showPreviousPhoto();
        }
      },
      { passive: true }
    );
  }

  /* =========================================================
     THEME
     ========================================================= */

  function applyTheme(theme) {
    const isDark = theme === "dark";

    document.body.classList.toggle("dark", isDark);

    if (themeButton) {
      themeButton.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
      );

      themeButton.textContent = isDark ? "☼" : "◐";
    }

    try {
      localStorage.setItem("willie-theme", theme);
    } catch (error) {
      // Ignore localStorage errors.
    }
  }

  function initializeTheme() {
    let savedTheme = null;

    try {
      savedTheme = localStorage.getItem("willie-theme");
    } catch (error) {
      savedTheme = null;
    }

    if (savedTheme === "dark" || savedTheme === "light") {
      applyTheme(savedTheme);
      return;
    }

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    applyTheme(prefersDark ? "dark" : "light");
  }

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const isDark =
        document.body.classList.contains("dark");

      applyTheme(isDark ? "light" : "dark");
    });
  }

  /* =========================================================
     LANGUAGE BUTTON
     
     Keeps the current site's simple language behavior.
     ========================================================= */

  let isEnglish = false;

  function updateLanguage() {
    const translations = {
      zh: {
        gallery: "相簿",
        about: "關於我",
        contact: "聯絡",
        back: "← 返回相簿"
      },
      en: {
        gallery: "Gallery",
        about: "About",
        contact: "Contact",
        back: "← Back to albums"
      }
    };

    const lang = isEnglish
      ? translations.en
      : translations.zh;

    const galleryLink = document.querySelector(
      'a[href="#gallery"]'
    );

    const aboutLink = document.querySelector(
      'a[href="#about"]'
    );

    const contactLink = document.querySelector(
      'a[href="#contact"]'
    );

    if (galleryLink) {
      galleryLink.textContent = lang.gallery;
    }

    if (aboutLink) {
      aboutLink.textContent = lang.about;
    }

    if (contactLink) {
      contactLink.textContent = lang.contact;
    }

    if (backButton) {
      backButton.textContent = lang.back;
    }

    if (langButton) {
      langButton.textContent = isEnglish ? "中" : "EN";
    }

    document.documentElement.lang =
      isEnglish ? "en" : "zh-TW";
  }

  if (langButton) {
    langButton.addEventListener("click", () => {
      isEnglish = !isEnglish;
      updateLanguage();
    });
  }

  /* =========================================================
     MOBILE MENU
     ========================================================= */

  function closeMobileMenu() {
    if (!mobileMenu) return;

    mobileMenu.classList.remove("open");

    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "false");
    }
  }

  function toggleMobileMenu() {
    if (!mobileMenu) return;

    const isOpen =
      mobileMenu.classList.toggle("open");

    if (menuButton) {
      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    }
  }

  if (menuButton) {
    menuButton.addEventListener(
      "click",
      toggleMobileMenu
    );
  }

  $$(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!mobileMenu || !menuButton) return;

    const target = event.target;

    if (
      mobileMenu.classList.contains("open") &&
      !mobileMenu.contains(target) &&
      !menuButton.contains(target)
    ) {
      closeMobileMenu();
    }
  });

  /* =========================================================
     SCROLL PROGRESS
     ========================================================= */

  function updateScrollProgress() {
    if (!progress) return;

    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop;

    const documentHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    if (documentHeight <= 0) {
      progress.style.width = "0%";
      return;
    }

    const percentage =
      (scrollTop / documentHeight) * 100;

    progress.style.width =
      `${Math.min(100, Math.max(0, percentage))}%`;
  }

  window.addEventListener(
    "scroll",
    updateScrollProgress,
    { passive: true }
  );

  window.addEventListener(
    "resize",
    updateScrollProgress,
    { passive: true }
  );

  /* =========================================================
     CURSOR GLOW
     ========================================================= */

  if (cursorGlow) {
    let cursorFrame = null;
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener(
      "mousemove",
      (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;

        if (cursorFrame) return;

        cursorFrame = requestAnimationFrame(() => {
          cursorGlow.style.left = `${mouseX}px`;
          cursorGlow.style.top = `${mouseY}px`;

          cursorFrame = null;
        });
      },
      { passive: true }
    );
  }

  /* =========================================================
     IMAGE ERROR HANDLING
     ========================================================= */

  document.addEventListener("error", (event) => {
    const target = event.target;

    if (
      target instanceof HTMLImageElement &&
      target.closest(".photo-tile")
    ) {
      target.style.opacity = "0.25";
    }
  }, true);

  /* =========================================================
     INITIALIZE
     ========================================================= */

  renderAlbums();
  initializeTheme();
  updateLanguage();
  updateScrollProgress();

})();
