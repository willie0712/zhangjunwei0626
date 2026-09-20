/* =========================================================
   Willie Zhang — Photography & Life
   Complete script.js
   原圖版：不使用縮圖
   ========================================================= */


/* =========================================================
   PHOTO DATA
   ========================================================= */

const photoAlbums = {

  yilan: {
    title: "宜蘭一日遊（二信校外教學）",
    titleEN: "Yilan Day Trip",
    photos: [
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
    ]
  },

  after: {
    title: "休學後的照片",
    titleEN: "Photos After Leaving School",
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

  tamsui: {
    title: "北投淡水一日遊",
    titleEN: "Beitou & Tamsui Day Trip",
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

};


/* =========================================================
   GLOBAL STATE
   ========================================================= */

let currentAlbum = null;
let currentPhoto = 0;


/* =========================================================
   WILLIE LOADING
   ========================================================= */

(function initFastLoader() {

  function hideLoader() {

    const loader =
      document.querySelector("#pageLoader");

    if (!loader) return;

    loader.classList.add("done");

    setTimeout(() => {
      loader.style.display = "none";
      loader.setAttribute("aria-hidden", "true");
    }, 550);

  }

  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      () => setTimeout(hideLoader, 300),
      { once: true }
    );

  } else {

    setTimeout(hideLoader, 300);

  }

  setTimeout(hideLoader, 1500);

})();


/* =========================================================
   GALLERY ELEMENTS
   ========================================================= */

let albumsGrid = null;
let photoView = null;
let photoGrid = null;
let photoViewTitle = null;
let photoCounter = null;
let backButton = null;

let lightbox = null;
let lightboxImg = null;
let lightboxCounter = null;


/* =========================================================
   INITIALIZE GALLERY
   ========================================================= */

function initializeGallery() {

  albumsGrid =
    document.querySelector("#albumsGrid");

  photoView =
    document.querySelector("#photoView");

  photoGrid =
    document.querySelector("#photoGrid");

  photoViewTitle =
    document.querySelector("#photoViewTitle");

  photoCounter =
    document.querySelector("#photoCounter");

  backButton =
    document.querySelector("#backButton");

  lightbox =
    document.querySelector("#lightbox");

  lightboxImg =
    document.querySelector("#lightboxImg");

  lightboxCounter =
    document.querySelector("#lightboxCounter");

  if (!albumsGrid) {
    console.warn("找不到 #albumsGrid");
    return;
  }

  renderAlbums();

}


/* =========================================================
   RENDER ALBUM CARDS
   ========================================================= */

function renderAlbums() {

  if (!albumsGrid) return;

  albumsGrid.innerHTML = "";

  const language =
    localStorage.getItem("willie-language") || "en";

  Object.entries(photoAlbums).forEach(
    ([albumId, album], index) => {

      const card =
        document.createElement("button");

      card.type = "button";
      card.className = "album-card";
      card.dataset.album = albumId;

      /*
       * 相簿卡片不建立任何縮圖 URL。
       * 封面直接使用第一張原圖。
       */

      const cover =
        document.createElement("div");

      cover.className = "album-cover";

      const image =
        document.createElement("img");

      image.src = album.photos[0];

      image.alt =
        language === "zh"
          ? album.title
          : album.titleEN;

      image.decoding = "async";

      cover.appendChild(image);

      const content =
        document.createElement("div");

      content.className =
        "album-card-content";

      const number =
        document.createElement("span");

      number.className =
        "album-number";

      number.textContent =
        String(index + 1).padStart(2, "0");

      const title =
        document.createElement("h3");

      title.textContent =
        language === "zh"
          ? album.title
          : album.titleEN;

      const count =
        document.createElement("span");

      count.className =
        "album-count";

      count.textContent =
        `${album.photos.length} ${
          language === "zh"
            ? "張照片"
            : "PHOTOS"
        }`;

      content.appendChild(number);
      content.appendChild(title);
      content.appendChild(count);

      card.appendChild(cover);
      card.appendChild(content);

      card.addEventListener(
        "click",
        () => openAlbum(albumId)
      );

      albumsGrid.appendChild(card);

    }
  );

}


/* =========================================================
   OPEN ALBUM
   ========================================================= */

function openAlbum(albumId) {

  const album =
    photoAlbums[albumId];

  if (
    !album ||
    !photoView ||
    !photoGrid
  ) {
    return;
  }

  currentAlbum = albumId;
  currentPhoto = 0;

  photoGrid.innerHTML = "";

  const language =
    localStorage.getItem("willie-language") || "en";

  if (photoViewTitle) {

    photoViewTitle.textContent =
      language === "zh"
        ? album.title
        : album.titleEN;

  }

  if (photoCounter) {

    photoCounter.textContent =
      `${album.photos.length} ${
        language === "zh"
          ? "張照片"
          : "PHOTOS"
      }`;

  }

  /*
   * =======================================================
   * 原圖模式
   *
   * 這裡不使用：
   * - thumbnail
   * - thumb
   * - resize
   * - width=
   * - height=
   * - ImgBB 縮圖網址
   *
   * img.src 永遠就是原始 ImgBB URL。
   * =======================================================
   */

  album.photos.forEach(
    (url, index) => {

      const tile =
        document.createElement("div");

      tile.className =
        "photo-tile";

      const img =
        document.createElement("img");

      img.src = url;

      img.alt =
        `${album.titleEN} ${index + 1}`;

      img.decoding = "async";

      tile.appendChild(img);

      tile.addEventListener(
        "click",
        () => openLightbox(index)
      );

      photoGrid.appendChild(tile);

    }
  );

  const albumView =
    document.querySelector(".album-view");

  if (albumView) {
    albumView.hidden = true;
  }

  photoView.hidden = false;

  setTimeout(() => {

    photoView.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 30);

}


/* =========================================================
   CLOSE ALBUM
   ========================================================= */

function closeAlbum() {

  if (!photoView) return;

  photoView.hidden = true;

  const albumView =
    document.querySelector(".album-view");

  if (albumView) {
    albumView.hidden = false;
  }

  currentAlbum = null;
  currentPhoto = 0;

}


/* =========================================================
   OPEN LIGHTBOX
   ========================================================= */

function openLightbox(index) {

  if (!currentAlbum) return;

  const photos =
    photoAlbums[currentAlbum].photos;

  if (!photos[index]) return;

  currentPhoto = index;

  if (!lightbox) {

    window.open(
      photos[index],
      "_blank",
      "noopener,noreferrer"
    );

    return;

  }

  if (!lightboxImg) {

    lightboxImg =
      lightbox.querySelector("#lightboxImg") ||
      lightbox.querySelector("img");

  }

  if (!lightboxImg) return;

  /*
   * Lightbox 也直接使用原圖。
   */

  lightboxImg.src =
    photos[index];

  lightboxImg.alt =
    `${photoAlbums[currentAlbum].titleEN} ${index + 1}`;

  lightboxImg.decoding =
    "async";

  lightbox.classList.add("show");

  lightbox.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "lightbox-open"
  );

  updateLightboxCounter();

}


/* =========================================================
   CLOSE LIGHTBOX
   ========================================================= */

function closeLightbox() {

  if (!lightbox) return;

  lightbox.classList.remove("show");

  lightbox.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "lightbox-open"
  );

}


/* =========================================================
   NEXT PHOTO
   ========================================================= */

function nextPhoto() {

  if (!currentAlbum) return;

  const photos =
    photoAlbums[currentAlbum].photos;

  if (!photos.length) return;

  currentPhoto =
    (currentPhoto + 1) %
    photos.length;

  openLightbox(currentPhoto);

}


/* =========================================================
   PREVIOUS PHOTO
   ========================================================= */

function previousPhoto() {

  if (!currentAlbum) return;

  const photos =
    photoAlbums[currentAlbum].photos;

  if (!photos.length) return;

  currentPhoto =
    (
      currentPhoto -
      1 +
      photos.length
    ) %
    photos.length;

  openLightbox(currentPhoto);

}


/* =========================================================
   LIGHTBOX COUNTER
   ========================================================= */

function updateLightboxCounter() {

  if (
    !currentAlbum ||
    !lightboxCounter
  ) {
    return;
  }

  const total =
    photoAlbums[currentAlbum]
      .photos.length;

  lightboxCounter.textContent =
    `${currentPhoto + 1} / ${total}`;

}


/* =========================================================
   KEYBOARD
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      !lightbox ||
      !lightbox.classList.contains("show")
    ) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowRight") {
      nextPhoto();
    }

    if (event.key === "ArrowLeft") {
      previousPhoto();
    }

  }
);


/* =========================================================
   LANGUAGE
   ========================================================= */

function setLanguage(language) {

  if (
    language !== "en" &&
    language !== "zh"
  ) {
    language = "en";
  }

  localStorage.setItem(
    "willie-language",
    language
  );

  document.documentElement.lang =
    language === "zh"
      ? "zh-TW"
      : "en";

  document
    .querySelectorAll(
      "[data-en][data-zh]"
    )
    .forEach(element => {

      element.textContent =
        language === "zh"
          ? element.dataset.zh
          : element.dataset.en;

    });

  const text = {

    about:
      language === "zh"
        ? "關於我"
        : "About",

    life:
      language === "zh"
        ? "生活"
        : "Life",

    photography:
      language === "zh"
        ? "攝影"
        : "Photography",

    games:
      language === "zh"
        ? "遊戲"
        : "Games",

    map:
      language === "zh"
        ? "地圖"
        : "Places",

    future:
      language === "zh"
        ? "未來"
        : "Future",

    contact:
      language === "zh"
        ? "聯絡"
        : "Contact",

    gallery:
      language === "zh"
        ? "攝影"
        : "Photography"

  };

  document
    .querySelectorAll(
      "[data-i18n]"
    )
    .forEach(element => {

      const key =
        element.dataset.i18n;

      if (text[key]) {
        element.textContent =
          text[key];
      }

    });

  const languageButton =
    document.querySelector("#langBtn");

  if (languageButton) {

    languageButton.textContent =
      language === "en"
        ? "中文"
        : "EN";

  }

  if (albumsGrid) {
    renderAlbums();
  }

  if (
    currentAlbum &&
    photoViewTitle
  ) {

    const album =
      photoAlbums[currentAlbum];

    if (album) {

      photoViewTitle.textContent =
        language === "zh"
          ? album.title
          : album.titleEN;

    }

  }

}


/* =========================================================
   THEME
   ========================================================= */

function setTheme(theme) {

  if (theme !== "dark" && theme !== "light") {
    theme = "light";
  }

  /*
   * CSS 使用 body.dark，
   * 所以這裡同步套用 class。
   */

  document.body.classList.toggle(
    "dark",
    theme === "dark"
  );

  document.documentElement
    .setAttribute(
      "data-theme",
      theme
    );

  localStorage.setItem(
    "willie-theme",
    theme
  );

}


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /* =====================================================
       GALLERY
       ===================================================== */

    initializeGallery();


    /* =====================================================
       LIGHTBOX BUTTONS
       ===================================================== */

    const closeButton =
      document.querySelector("#close") ||
      document.querySelector(".lightbox-close");

    const nextButton =
      document.querySelector("#next") ||
      document.querySelector(".lightbox-next");

    const previousButton =
      document.querySelector("#prev") ||
      document.querySelector(".lightbox-prev");

    if (closeButton) {

      closeButton.addEventListener(
        "click",
        closeLightbox
      );

    }

    if (nextButton) {

      nextButton.addEventListener(
        "click",
        nextPhoto
      );

    }

    if (previousButton) {

      previousButton.addEventListener(
        "click",
        previousPhoto
      );

    }

    if (lightbox) {

      lightbox.addEventListener(
        "click",
        event => {

          if (
            event.target === lightbox
          ) {

            closeLightbox();

          }

        }
      );

    }


    /* =====================================================
       BACK BUTTON
       ===================================================== */

    if (backButton) {

      backButton.addEventListener(
        "click",
        closeAlbum
      );

    }


    /* =====================================================
       LANGUAGE BUTTON
       ===================================================== */

    const languageButton =
      document.querySelector("#langBtn");

    if (languageButton) {

      languageButton.addEventListener(
        "click",
        () => {

          const current =
            localStorage.getItem(
              "willie-language"
            ) || "en";

          setLanguage(
            current === "en"
              ? "zh"
              : "en"
          );

        }
      );

    }


    /* =====================================================
       THEME BUTTON
       ===================================================== */

    const themeButton =
      document.querySelector("#themeBtn");

    const savedTheme =
      localStorage.getItem(
        "willie-theme"
      );

    if (savedTheme) {

      setTheme(
        savedTheme
      );

    } else {

      const dark =
        window.matchMedia &&
        window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

      setTheme(
        dark
          ? "dark"
          : "light"
      );

    }

    if (themeButton) {

      themeButton.addEventListener(
        "click",
        () => {

          const current =
            document.body.classList.contains(
              "dark"
            )
              ? "dark"
              : "light";

          setTheme(
            current === "dark"
              ? "light"
              : "dark"
          );

        }
      );

    }


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuButton =
      document.querySelector("#menuBtn");

    const mobileMenu =
      document.querySelector("#mobileMenu");

    if (
      menuButton &&
      mobileMenu
    ) {

      menuButton.addEventListener(
        "click",
        () => {

          menuButton.classList.toggle(
            "active"
          );

          mobileMenu.classList.toggle(
            "open"
          );

        }
      );

      mobileMenu
        .querySelectorAll("a")
        .forEach(link => {

          link.addEventListener(
            "click",
            () => {

              menuButton.classList.remove(
                "active"
              );

              mobileMenu.classList.remove(
                "open"
              );

            }
          );

        });

    }


    /* =====================================================
       SCROLL PROGRESS
       ===================================================== */

    const progress =
      document.querySelector("#progress");

    if (progress) {

      function updateProgress() {

        const top =
          window.scrollY || 0;

        const height =
          document.documentElement.scrollHeight -
          window.innerHeight;

        const percentage =
          height > 0
            ? (top / height) * 100
            : 0;

        progress.style.width =
          `${percentage}%`;

      }

      window.addEventListener(
        "scroll",
        updateProgress,
        {
          passive: true
        }
      );

      updateProgress();

    }


    /* =====================================================
       CURSOR GLOW
       ===================================================== */

    const glow =
      document.querySelector(
        ".cursor-glow"
      );

    if (glow) {

      if (
        window.matchMedia &&
        window.matchMedia(
          "(pointer: coarse)"
        ).matches
      ) {

        glow.style.display =
          "none";

      } else {

        window.addEventListener(
          "pointermove",
          event => {

            glow.style.transform =
              `translate3d(
                ${event.clientX}px,
                ${event.clientY}px,
                0
              )`;

          },
          {
            passive: true
          }
        );

      }

    }


    /* =====================================================
       INITIAL LANGUAGE
       ===================================================== */

    setLanguage(
      localStorage.getItem(
        "willie-language"
      ) || "en"
    );

  }
);


/* =========================================================
   IMAGE ERROR FALLBACK
   ========================================================= */

document.addEventListener(
  "error",
  event => {

    const image =
      event.target;

    if (
      image &&
      image.tagName === "IMG"
    ) {

      const tile =
        image.closest(".photo-tile");

      if (tile) {

        tile.classList.add(
          "photo-error"
        );

      } else {

        image.style.visibility =
          "hidden";

      }

    }

  },
  true
);


/* =========================================================
   EXPORT
   ========================================================= */

window.photoAlbums =
  photoAlbums;

window.openAlbum =
  openAlbum;

window.closeAlbum =
  closeAlbum;

window.openLightbox =
  openLightbox;

window.closeLightbox =
  closeLightbox;

window.nextPhoto =
  nextPhoto;

window.previousPhoto =
  previousPhoto;

window.setLanguage =
  setLanguage;

window.setTheme =
  setTheme;


/* =========================================================
   END
   ========================================================= */
