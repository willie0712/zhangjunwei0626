/* =========================================================
   Willie Zhang — Photography & Life
   Gallery / Lightbox / Language / Theme
   ========================================================= */

const albums = [
  {
    id: "yilan",
    name: "宜蘭一日遊（二信校外教學）",
    nameEN: "Yilan Day Trip",
    count: 72
  },
  {
    id: "after",
    name: "休學後的照片",
    nameEN: "Photos After Leaving School",
    count: 55
  },
  {
    id: "tamsui",
    name: "北投淡水一日遊",
    nameEN: "Beitou & Tamsui Day Trip",
    count: 20
  }
];

const urls = {
  yilan: [
    "https://i.ibb.co/nNNdw4vN/IMG-8481.jpg",
    "https://i.ibb.co/VYh5my4y/IMG-8479.jpg",
    "https://i.ibb.co/ZpnRtxXf/IMG-8482.jpg",
    "https://i.ibb.co/Qj3rgVbk/IMG-8483.jpg",
    "https://i.ibb.co/dsMvnfgK/IMG-8484.jpg",
    "https://i.ibb.co/hRk0HzKj/IMG-8485.jpg",
    "https://i.ibb.co/JwC1XnS4/IMG-8486.jpg",
    "https://i.ibb.co/kgTVZTHh/IMG-8487.jpg",
    "https://i.ibb.co/4RF0jQ36/IMG-8488.jpg",
    "https://i.ibb.co/qMpgP6fs/IMG-8489.jpg",
    "https://i.ibb.co/qMvT8RKZ/IMG-8490.jpg",
    "https://i.ibb.co/sdxMrpr0/IMG-8491.jpg",
    "https://i.ibb.co/TDkHQ7Jy/IMG-8492.jpg",
    "https://i.ibb.co/qFs7jjZ6/IMG-8493.jpg",
    "https://i.ibb.co/21p2xk2r/IMG-8494.jpg",
    "https://i.ibb.co/1G31Sqpz/IMG-8495.jpg",
    "https://i.ibb.co/vxKZLvKM/IMG-8496.jpg",
    "https://i.ibb.co/YBLH7VXy/IMG-8497.jpg",
    "https://i.ibb.co/d0KKgc8h/IMG-8498.jpg",
    "https://i.ibb.co/jZQXjRH5/IMG-8499.jpg",
    "https://i.ibb.co/7dmHLGw2/IMG-8500.jpg",
    "https://i.ibb.co/LzThF0Qd/IMG-8501.jpg",
    "https://i.ibb.co/XfXNdGJK/IMG-8502.jpg",
    "https://i.ibb.co/dJtpW5Qq/IMG-8503.jpg",
    "https://i.ibb.co/Fk0SXxjD/IMG-8504.jpg",
    "https://i.ibb.co/hF2RnFxc/IMG-8505.jpg",
    "https://i.ibb.co/3mrw18H9/IMG-8506.jpg",
    "https://i.ibb.co/SDwgjP4N/IMG-8508.jpg",
    "https://i.ibb.co/QvZd3msw/IMG-8509.jpg",
    "https://i.ibb.co/rqgBWfF/IMG-8510.jpg",
    "https://i.ibb.co/YFjjghjY/IMG-8511.jpg",
    "https://i.ibb.co/WNSLGzmt/IMG-8512.jpg",
    "https://i.ibb.co/29KdP53/IMG-8519.jpg",
    "https://i.ibb.co/VcTpfvtC/IMG-8521.jpg",
    "https://i.ibb.co/5m4JQz2/IMG-8522.jpg",
    "https://i.ibb.co/BHsj3CRx/IMG-8523.jpg",
    "https://i.ibb.co/S4mckCP1/IMG-8524.jpg",
    "https://i.ibb.co/dwGjdXHB/IMG-8525.jpg",
    "https://i.ibb.co/1fg0ytDH/IMG-8527.jpg",
    "https://i.ibb.co/Pzj8rGBP/IMG-8528.jpg",
    "https://i.ibb.co/S7Xq03Pt/IMG-8529.jpg",
    "https://i.ibb.co/xqd6yxsc/IMG-8530.jpg",
    "https://i.ibb.co/6cMLSS8K/IMG-8541.jpg",
    "https://i.ibb.co/mC4SqxY9/IMG-8542.jpg",
    "https://i.ibb.co/mCdQ568y/IMG-8543.jpg",
    "https://i.ibb.co/d4LMXXJG/IMG-8545.jpg",
    "https://i.ibb.co/Lhh2k9ch/IMG-8546.jpg",
    "https://i.ibb.co/Pb2Gp2P/IMG-8450.jpg",
    "https://i.ibb.co/cKRkL4vW/IMG-8451.jpg",
    "https://i.ibb.co/20Dc0Smt/IMG-8452.jpg",
    "https://i.ibb.co/DHR1psSz/IMG-8453.jpg",
    "https://i.ibb.co/23tYnw1C/IMG-8454.jpg",
    "https://i.ibb.co/HTm3YFsx/IMG-8455.jpg",
    "https://i.ibb.co/kgy4DmcY/IMG-8458.jpg",
    "https://i.ibb.co/JjtrQSkT/IMG-8459.jpg",
    "https://i.ibb.co/fdY5rf3v/IMG-8460.jpg",
    "https://i.ibb.co/WWpYdJxp/IMG-8461.jpg",
    "https://i.ibb.co/bYL1Twc/IMG-8462.jpg",
    "https://i.ibb.co/7NW4xc8h/IMG-8463.jpg",
    "https://i.ibb.co/RkFF4PzK/IMG-8466.jpg",
    "https://i.ibb.co/Z1756m5F/IMG-8467.jpg",
    "https://i.ibb.co/99ZhCXD2/IMG-8468.jpg",
    "https://i.ibb.co/tw1FmMc4/IMG-8469.jpg",
    "https://i.ibb.co/qFrnFGkV/IMG-8470.jpg",
    "https://i.ibb.co/GvG19v4D/IMG-8471.jpg",
    "https://i.ibb.co/pB1354Mg/IMG-8472.jpg",
    "https://i.ibb.co/Wjy4NKN/IMG-8473.jpg",
    "https://i.ibb.co/5h2G2jwS/IMG-8474.jpg",
    "https://i.ibb.co/6c5Jb5mC/IMG-8475.jpg",
    "https://i.ibb.co/YTpyd6jP/IMG-8476.jpg",
    "https://i.ibb.co/spfc1vgm/IMG-8477.jpg",
    "https://i.ibb.co/84LwsPb7/IMG-8478.jpg"
  ],

  after: [
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
  ],

  tamsui: [
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
};


/* =========================================================
   Language
   ========================================================= */

const translations = {
  en: {
    about: "About",
    life: "Life",
    photography: "Photography",
    games: "Games",
    map: "Places",
    future: "Future",
    contact: "Contact",
    gallery: "Photography",
    memories: "Memories",
    back: "Back",
    photos: "Photos",
    places: "Places"
  },

  zh: {
    about: "關於我",
    life: "生活",
    photography: "攝影",
    games: "遊戲",
    map: "地圖",
    future: "未來",
    contact: "聯絡",
    gallery: "攝影",
    memories: "回憶",
    back: "返回",
    photos: "照片",
    places: "地點"
  }
};


/* =========================================================
   State
   ========================================================= */

let currentLanguage = localStorage.getItem("willie-language") || "en";
let currentAlbum = null;
let currentPhotoIndex = 0;


/* =========================================================
   Utility
   ========================================================= */

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return Array.from(document.querySelectorAll(selector));
}


/*
 * ImgBB thumbnail helper.
 *
 * Important:
 * We do NOT change the original image URL.
 * The original URL is kept in data-full.
 *
 * If ImgBB does not provide a thumbnail variant for a
 * particular URL, the browser simply falls back to the
 * original URL.
 */
function getThumbnailUrl(url) {
  if (!url) return "";

  /*
   * ImgBB's normal direct image URLs are already optimized
   * by the CDN in many cases.
   *
   * We keep the original URL as the actual image source
   * because changing the filename/path ourselves could
   * break some existing ImgBB images.
   */
  return url;
}


/* =========================================================
   Gallery
   ========================================================= */

function renderAlbums() {
  const container =
    document.querySelector("#albumGrid") ||
    document.querySelector(".album-grid") ||
    document.querySelector("#albums");

  if (!container) return;

  container.innerHTML = "";

  albums.forEach((album) => {
    const card = document.createElement("button");

    card.className = "album-card";
    card.type = "button";
    card.dataset.album = album.id;

    const firstImage = urls[album.id]?.[0] || "";

    card.innerHTML = `
      <div class="album-image">
        <img
          src="${getThumbnailUrl(firstImage)}"
          alt="${album.nameEN}"
          loading="lazy"
          decoding="async"
        >
      </div>

      <div class="album-info">
        <h3 data-zh="${album.name}" data-en="${album.nameEN}">
          ${currentLanguage === "zh" ? album.name : album.nameEN}
        </h3>

        <span>
          ${album.count} ${translations[currentLanguage].photos}
        </span>
      </div>
    `;

    card.addEventListener("click", () => {
      openAlbum(album.id);
    });

    container.appendChild(card);
  });
}


function openAlbum(albumId) {
  currentAlbum = albumId;
  currentPhotoIndex = 0;

  const album = albums.find((item) => item.id === albumId);
  const images = urls[albumId] || [];

  const albumView =
    document.querySelector("#albumView") ||
    document.querySelector(".album-view");

  const albumGrid =
    document.querySelector("#albumPhotoGrid") ||
    document.querySelector(".photo-grid") ||
    document.querySelector("#photoGrid");

  if (!albumGrid) return;

  if (albumView) {
    albumView.classList.add("active");
  }

  albumGrid.innerHTML = "";

  images.forEach((url, index) => {
    const item = document.createElement("button");

    item.className = "photo-card";
    item.type = "button";

    item.innerHTML = `
      <img
        src="${getThumbnailUrl(url)}"
        data-full="${url}"
        alt="${album?.nameEN || "Photo"} ${index + 1}"
        loading="lazy"
        decoding="async"
        fetchpriority="${index < 4 ? "high" : "auto"}"
      >
    `;

    item.addEventListener("click", () => {
      openLightbox(index);
    });

    albumGrid.appendChild(item);
  });

  updateAlbumTitle(album);

  /*
   * Scroll to the album area without showing a loading message.
   */
  if (albumView) {
    albumView.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


function updateAlbumTitle(album) {
  if (!album) return;

  const title =
    document.querySelector("#albumTitle") ||
    document.querySelector(".album-title");

  if (!title) return;

  title.textContent =
    currentLanguage === "zh"
      ? album.name
      : album.nameEN;
}


/* =========================================================
   Lightbox
   ========================================================= */

function openLightbox(index) {
  if (!currentAlbum) return;

  const images = urls[currentAlbum] || [];

  if (!images[index]) return;

  currentPhotoIndex = index;

  const lightbox =
    document.querySelector("#lightbox") ||
    document.querySelector(".lightbox");

  const lightboxImage =
    document.querySelector("#lightboxImage") ||
    document.querySelector(".lightbox img");

  const counter =
    document.querySelector("#lightboxCounter") ||
    document.querySelector(".lightbox-counter");

  if (!lightbox || !lightboxImage) return;

  /*
   * IMPORTANT:
   * Only here do we load the full-resolution image.
   */
  lightboxImage.src = images[index];
  lightboxImage.removeAttribute("srcset");
  lightboxImage.loading = "eager";
  lightboxImage.decoding = "async";

  lightbox.classList.add("active");
  document.body.classList.add("lightbox-open");

  if (counter) {
    counter.textContent = `${index + 1} / ${images.length}`;
  }
}


function closeLightbox() {
  const lightbox =
    document.querySelector("#lightbox") ||
    document.querySelector(".lightbox");

  if (!lightbox) return;

  lightbox.classList.remove("active");
  document.body.classList.remove("lightbox-open");
}


function nextPhoto() {
  if (!currentAlbum) return;

  const images = urls[currentAlbum] || [];

  if (!images.length) return;

  currentPhotoIndex =
    (currentPhotoIndex + 1) % images.length;

  openLightbox(currentPhotoIndex);
}


function previousPhoto() {
  if (!currentAlbum) return;

  const images = urls[currentAlbum] || [];

  if (!images.length) return;

  currentPhotoIndex =
    (currentPhotoIndex - 1 + images.length) %
    images.length;

  openLightbox(currentPhotoIndex);
}


/* =========================================================
   Lightbox controls
   ========================================================= */

function bindLightbox() {
  const close =
    document.querySelector("#lightboxClose") ||
    document.querySelector(".lightbox-close");

  const next =
    document.querySelector("#lightboxNext") ||
    document.querySelector(".lightbox-next");

  const previous =
    document.querySelector("#lightboxPrev") ||
    document.querySelector(".lightbox-prev");

  if (close) {
    close.addEventListener("click", closeLightbox);
  }

  if (next) {
    next.addEventListener("click", nextPhoto);
  }

  if (previous) {
    previous.addEventListener("click", previousPhoto);
  }

  const lightbox =
    document.querySelector("#lightbox") ||
    document.querySelector(".lightbox");

  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    const isOpen =
      lightbox &&
      lightbox.classList.contains("active");

    if (!isOpen) return;

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowRight") {
      nextPhoto();
    }

    if (event.key === "ArrowLeft") {
      previousPhoto();
    }
  });
}


/* =========================================================
   Language
   ========================================================= */

function setLanguage(language) {
  if (!translations[language]) {
    language = "en";
  }

  currentLanguage = language;

  localStorage.setItem(
    "willie-language",
    language
  );

  document.documentElement.lang =
    language === "zh"
      ? "zh-TW"
      : "en";

  /*
   * Elements using:
   * data-en="..."
   * data-zh="..."
   */
  $$("[data-en][data-zh]").forEach((element) => {
    element.textContent =
      language === "zh"
        ? element.dataset.zh
        : element.dataset.en;
  });

  /*
   * Special navigation elements.
   */
  $$("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (
      translations[language] &&
      translations[language][key]
    ) {
      element.textContent =
        translations[language][key];
    }
  });

  /*
   * Language button.
   */
  const languageButton =
    document.querySelector("#languageToggle") ||
    document.querySelector(".language-toggle");

  if (languageButton) {
    languageButton.textContent =
      language === "en"
        ? "中文"
        : "EN";
  }

  updateAlbumTitle(
    albums.find(
      (album) => album.id === currentAlbum
    )
  );
}


/* =========================================================
   Theme
   ========================================================= */

function setTheme(theme) {
  document.documentElement.dataset.theme =
    theme;

  localStorage.setItem(
    "willie-theme",
    theme
  );
}


function initTheme() {
  const savedTheme =
    localStorage.getItem("willie-theme");

  if (savedTheme) {
    setTheme(savedTheme);
    return;
  }

  const prefersDark =
    window.matchMedia &&
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

  setTheme(
    prefersDark
      ? "dark"
      : "light"
  );
}


function bindThemeToggle() {
  const button =
    document.querySelector("#themeToggle") ||
    document.querySelector(".theme-toggle");

  if (!button) return;

  button.addEventListener("click", () => {
    const current =
      document.documentElement.dataset.theme;

    setTheme(
      current === "dark"
        ? "light"
        : "dark"
    );
  });
}


/* =========================================================
   Language toggle
   ========================================================= */

function bindLanguageToggle() {
  const button =
    document.querySelector("#languageToggle") ||
    document.querySelector(".language-toggle");

  if (!button) return;

  button.addEventListener("click", () => {
    setLanguage(
      currentLanguage === "en"
        ? "zh"
        : "en"
    );
  });
}


/* =========================================================
   Mobile menu
   ========================================================= */

function bindMobileMenu() {
  const button =
    document.querySelector("#menuToggle") ||
    document.querySelector(".menu-toggle");

  const menu =
    document.querySelector("#mobileMenu") ||
    document.querySelector(".mobile-menu");

  if (!button || !menu) return;

  button.addEventListener("click", () => {
    menu.classList.toggle("active");
    button.classList.toggle("active");
  });

  $$(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      button.classList.remove("active");
    });
  });
}


/* =========================================================
   Scroll progress
   ========================================================= */

function initScrollProgress() {
  const progress =
    document.querySelector("#scrollProgress") ||
    document.querySelector(".scroll-progress");

  if (!progress) return;

  const update = () => {
    const scrollTop =
      window.scrollY || 0;

    const height =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const percentage =
      height > 0
        ? (scrollTop / height) * 100
        : 0;

    progress.style.width =
      `${percentage}%`;
  };

  window.addEventListener(
    "scroll",
    update,
    { passive: true }
  );

  update();
}


/* =========================================================
   Cursor glow
   ========================================================= */

function initCursorGlow() {
  const glow =
    document.querySelector("#cursorGlow") ||
    document.querySelector(".cursor-glow");

  if (!glow) return;

  /*
   * Disable custom cursor effects on touch devices.
   */
  if (
    window.matchMedia &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    glow.style.display = "none";
    return;
  }

  window.addEventListener(
    "pointermove",
    (event) => {
      glow.style.transform =
        `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    },
    { passive: true }
  );
}


/* =========================================================
   Page loader
   ========================================================= */

function initPageLoader() {
  const loader =
    document.querySelector("#pageLoader") ||
    document.querySelector(".page-loader");

  if (!loader) return;

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");

      setTimeout(() => {
        loader.remove();
      }, 700);
    }, 250);
  });
}


/* =========================================================
   Gallery back button
   ========================================================= */

function bindAlbumBack() {
  const back =
    document.querySelector("#albumBack") ||
    document.querySelector(".album-back");

  if (!back) return;

  back.addEventListener("click", () => {
    const albumView =
      document.querySelector("#albumView") ||
      document.querySelector(".album-view");

    if (albumView) {
      albumView.classList.remove("active");
    }

    currentAlbum = null;
  });
}


/* =========================================================
   Image error handling
   ========================================================= */

function bindImageErrorFallback() {
  document.addEventListener(
    "error",
    (event) => {
      const image = event.target;

      if (
        image &&
        image.tagName === "IMG" &&
        image.dataset.full &&
        image.src !== image.dataset.full
      ) {
        image.src = image.dataset.full;
      }
    },
    true
  );
}


/* =========================================================
   Initialize
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();

  renderAlbums();

  setLanguage(currentLanguage);

  bindLanguageToggle();
  bindThemeToggle();
  bindMobileMenu();
  bindLightbox();
  bindAlbumBack();

  initScrollProgress();
  initCursorGlow();
  initPageLoader();

  bindImageErrorFallback();
});