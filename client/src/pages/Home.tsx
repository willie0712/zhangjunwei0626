// V2.0 style reminder: editorial product page, warm paper canvas, ink typography, rain-red index marks, asymmetry over generic centered cards.
import { useEffect, useMemo, useState } from "react";
import {
  Aperture,
  ArrowDownRight,
  ArrowRight,
  Camera,
  ChevronRight,
  Clapperboard,
  Compass,
  Film,
  Gamepad2,
  Instagram,
  Layers3,
  MapPin,
  Menu,
  MoveUpRight,
  Play,
  Target,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { galleryPhotos, type Collection, type GalleryPhoto } from "@/lib/gallery";

const logoMark = "/manus-storage/willie-v2-mark_419c9c88.png";
const profileImage = "https://i.ibb.co/YFMfSfcy/willie.png";
const cameraImage = "https://i.ibb.co/QFS9vdgv/cam.jpg";
const gameImage = "https://i.ibb.co/vCRZ65MT/roblox.png";
const speedImage = "https://i.ibb.co/0jKcX8mm/speed-drifters.png";
const weplayImage = "https://i.ibb.co/4n7qr3Pp/weplay.webp";
const asphaltImage = "https://i.ibb.co/YFLbBk9Z/asphalt-9.jpg";
const minecraftImage = "https://i.ibb.co/23sTRJHQ/minecraft.jpg";
const pixelImage = "https://i.ibb.co/cSwtKf6p/pixel-gun-3d.png";
const editorialHero = "/manus-storage/willie-v2-paper-hero_05a8ecd2.jpg";
const rainGrid = "/manus-storage/willie-v2-rain-grid_4e170708.jpg";
const filmCropmarks = "/manus-storage/willie-v2-film-cropmarks_669711fc.jpg";
const editorialSun = "/manus-storage/willie-v2-editorial-sun_f8eccfc7.jpg";

type Language = "zh" | "en";
type CollectionFilter = "all" | Collection;

type Copy = {
  [key: string]: string;
};

const zh: Copy = {
  brand: "WILLIE / ZHANG",
  edition: "個人作品目錄",
  navAbout: "關於",
  navWork: "作品",
  navGaming: "遊戲",
  navGoals: "目標",
  navContact: "聯絡",
  menu: "選單",
  version: "V2.0",
  heroEyebrow: "FIELD NOTES · KEELUNG, TAIWAN",
  heroTitle: "把雨天留下，\n把下一張拍好。",
  heroIntro: "Willie Zhang 的個人作品目錄。從基隆出發，用攝影、剪輯與遊戲，把正在發生的生活整理成自己的節奏。",
  heroPrimary: "查看作品",
  heroSecondary: "認識 Willie",
  heroCaption: "一份持續更新的現場紀錄",
  profileLabel: "PROFILE DOSSIER",
  profileName: "Willie Zhang",
  profileRole: "攝影／剪輯／遊戲",
  profileLocation: "基隆，台灣",
  profileStatus: "正在準備下一個章節",
  profileNote: "18 歲 · 二信高中",
  metric01: "01",
  metric01Label: "視線",
  metric01Value: "把日常拍成作品",
  metric02: "02",
  metric02Label: "節奏",
  metric02Value: "在畫面與音樂之間",
  metric03: "03",
  metric03Label: "方向",
  metric03Value: "從基隆走向更遠",
  aboutIndex: "01 / ABOUT",
  aboutTitle: "不是履歷，\n是正在發生的現場。",
  aboutText: "我目前就讀基隆二信高中。比起把自己定義成一種單一身份，我更喜歡在不同興趣之間找出連結：用鏡頭觀察城市，用剪輯整理情緒，也在遊戲裡和朋友留下熱血的回憶。這裡是我的工作台，也是我持續長大的紀錄。",
  aboutDetail: "把生活整理成可以回看的片段",
  aboutLink: "讀我的背景",
  skillsIndex: "02 / PRACTICE",
  skillsTitle: "三種練習，\n同一種好奇心。",
  skillsIntro: "作品不是一次完成的，它是觀察、試錯與下一次再按下快門的累積。",
  photoSkill: "攝影",
  photoSkillDesc: "街景、人像與校園日常。喜歡在雨裡找光，也在安靜的地方等一個值得留下的瞬間。",
  editSkill: "影片剪輯",
  editSkillDesc: "目前使用 CapCut 練習節奏、轉場與音樂，讓畫面不只是被看見，也能被感受到。",
  gearSkill: "器材與現場",
  gearSkillDesc: "手機與相機是我最常用的工具；比起規格，我更在意走出去之後能不能看見新的角度。",
  workIndex: "03 / PHOTO ARCHIVE",
  workTitle: "把經過的地方，\n留成一個索引。",
  workIntro: "這些照片沒有被重新製作，只被重新編排。選一個資料夾，慢慢看 Willie 如何記錄北投、宜蘭，以及自己的生活。",
  archiveLabel: "ORIGINAL PHOTO ARCHIVE",
  collectionAll: "全部",
  collectionBeitou: "二信校外教學 · 淡水／北投",
  collectionYilan: "二信校外教學 · 宜蘭",
  collectionLife: "休學生活 · 隨手紀實",
  showing: "目前顯示",
  frames: "張",
  loadMore: "載入更多照片",
  closePreview: "關閉照片預覽",
  archiveNote: "點擊照片可開啟大圖；其餘照片在需要時才載入。",
  gamingIndex: "04 / GAME LOG",
  gamingTitle: "在另一個世界，\n也有我的進度。",
  gamingIntro: "從 2019 年開始，遊戲一直是和朋友保持聯絡、放鬆與冒險的方式。這份紀錄不是排行榜，而是那些一起玩過的時間。",
  mobileGames: "手機遊戲",
  pcGames: "電腦遊戲",
  gameRoblox: "Roblox",
  gameRobloxMeta: "沙盒 · 2019/12—現在",
  gameSpeed: "極速領域",
  gameSpeedMeta: "競速 · 2022/12—2026/04",
  gameWeplay: "WePlay",
  gameWeplayMeta: "派對 · 約 2 年",
  gameMinecraft: "Minecraft",
  gameMinecraftMeta: "創造 · 2022—現在",
  gameAsphalt: "Asphalt 9",
  gameAsphaltMeta: "競速 · 2025—現在",
  gamePixel: "Pixel Gun 3D",
  gamePixelMeta: "射擊 · 2025—現在",
  goalsIndex: "05 / NEXT",
  goalsTitle: "下一章，\n還在寫。",
  goalsIntro: "V2.0 不是終點，而是把方向說清楚之後，開始行動的版本。",
  goal01: "精進攝影與剪輯",
  goal01Desc: "嘗試接案或製作個人短片，讓練習慢慢成為作品。",
  goal02: "從二信高中畢業",
  goal02Desc: "挑戰 19 歲順利畢業，完成這段校園章節。",
  goal03: "對身邊的人更好",
  goal03Desc: "擴展人際關係，也把義氣留給真正重要的朋友。",
  contactIndex: "06 / CONTACT",
  contactTitle: "如果你也在\n記錄生活，來打個招呼。",
  contactText: "歡迎透過 Instagram 找我。也許下一次拍攝、剪輯或遊戲，就從一句訊息開始。",
  contactCta: "前往 Instagram",
  footerLine: "從基隆出發，持續更新。",
  musicOn: "聲音開啟",
  musicOff: "開啟聲音",
};

const en: Copy = {
  brand: "WILLIE / ZHANG",
  edition: "PERSONAL ARCHIVE",
  navAbout: "About",
  navWork: "Work",
  navGaming: "Games",
  navGoals: "Next",
  navContact: "Contact",
  menu: "Menu",
  version: "V2.0",
  heroEyebrow: "FIELD NOTES · KEELUNG, TAIWAN",
  heroTitle: "Keep the rain.\nMake the next frame count.",
  heroIntro: "Willie Zhang’s personal work archive. Starting in Keelung, he uses photography, editing, and games to give everyday life a rhythm of its own.",
  heroPrimary: "View the work",
  heroSecondary: "Meet Willie",
  heroCaption: "A living record, always in progress",
  profileLabel: "PROFILE DOSSIER",
  profileName: "Willie Zhang",
  profileRole: "Photography / Editing / Games",
  profileLocation: "Keelung, Taiwan",
  profileStatus: "Preparing the next chapter",
  profileNote: "18 · Er Xin High School",
  metric01: "01",
  metric01Label: "Sight",
  metric01Value: "Turn the everyday into work",
  metric02: "02",
  metric02Label: "Rhythm",
  metric02Value: "Between frame and sound",
  metric03: "03",
  metric03Label: "Direction",
  metric03Value: "From Keelung, further out",
  aboutIndex: "01 / ABOUT",
  aboutTitle: "Not a resume.\nA scene in progress.",
  aboutText: "I currently study at Er Xin High School in Keelung. Rather than fitting into one label, I like finding links between different interests: observing the city through a lens, shaping feeling through edits, and keeping the heat of late-night games with friends. This is my workbench and a record of growing up.",
  aboutDetail: "Organising life into frames worth revisiting",
  aboutLink: "Read the background",
  skillsIndex: "02 / PRACTICE",
  skillsTitle: "Three practices,\none curious mind.",
  skillsIntro: "A body of work is never made in one pass. It grows through looking, trying, and pressing the shutter again.",
  photoSkill: "Photography",
  photoSkillDesc: "Street scenes, portraits, and campus life. Looking for light in the rain, waiting for the quiet moment worth keeping.",
  editSkill: "Video editing",
  editSkillDesc: "Practising rhythm, transitions, and music in CapCut—so a frame is not only seen, but felt.",
  gearSkill: "Gear & fieldwork",
  gearSkillDesc: "A phone and a camera are the tools I reach for most. The real upgrade is seeing a new angle once I step outside.",
  workIndex: "03 / PHOTO ARCHIVE",
  workTitle: "Turn the places passed\ninto an index.",
  workIntro: "These photographs were not remade, only re-edited into a clearer archive. Choose a folder and follow the way Willie records Beitou, Yilan, and daily life.",
  archiveLabel: "ORIGINAL PHOTO ARCHIVE",
  collectionAll: "All",
  collectionBeitou: "School trip · Tamsui / Beitou",
  collectionYilan: "School trip · Yilan",
  collectionLife: "Everyday records",
  showing: "Showing",
  frames: "frames",
  loadMore: "Load more photographs",
  closePreview: "Close photograph preview",
  archiveNote: "Select a photograph for a larger view. The rest load only when needed.",
  gamingIndex: "04 / GAME LOG",
  gamingTitle: "There is progress\nin another world too.",
  gamingIntro: "Since 2019, games have been a way to stay connected, reset, and explore with friends. This is not a leaderboard—it is a record of shared time.",
  mobileGames: "Mobile games",
  pcGames: "PC games",
  gameRoblox: "Roblox",
  gameRobloxMeta: "Sandbox · 2019/12—now",
  gameSpeed: "Speed Drifters",
  gameSpeedMeta: "Racing · 2022/12—2026/04",
  gameWeplay: "WePlay",
  gameWeplayMeta: "Party · about 2 years",
  gameMinecraft: "Minecraft",
  gameMinecraftMeta: "Creation · 2022—now",
  gameAsphalt: "Asphalt 9",
  gameAsphaltMeta: "Racing · 2025—now",
  gamePixel: "Pixel Gun 3D",
  gamePixelMeta: "Shooter · 2025—now",
  goalsIndex: "05 / NEXT",
  goalsTitle: "The next chapter\nis still being written.",
  goalsIntro: "V2.0 is not a finish line. It is the version where direction gets clear enough to act on.",
  goal01: "Sharpen photography & editing",
  goal01Desc: "Take on small commissions or make personal short films, turning practice into work.",
  goal02: "Graduate from Er Xin",
  goal02Desc: "Take on the challenge of graduating at 19 and finish this campus chapter well.",
  goal03: "Show up better for people",
  goal03Desc: "Expand the circle, and keep the loyalty for the friends who matter.",
  contactIndex: "06 / CONTACT",
  contactTitle: "If you are recording life too,\nsay hello.",
  contactText: "Find me on Instagram. The next shoot, edit, or game might begin with one message.",
  contactCta: "Open Instagram",
  footerLine: "Starting in Keelung, always updating.",
  musicOn: "Sound on",
  musicOff: "Turn on sound",
};

const navItems = [
  { id: "about", zh: "navAbout", en: "navAbout" },
  { id: "work", zh: "navWork", en: "navWork" },
  { id: "gaming", zh: "navGaming", en: "navGaming" },
  { id: "goals", zh: "navGoals", en: "navGoals" },
  { id: "contact", zh: "navContact", en: "navContact" },
] as const;

const railLabels: Record<string, { zh: string; en: string }> = {
  hero: { zh: "開場", en: "Open" },
  about: { zh: "關於", en: "About" },
  work: { zh: "作品", en: "Work" },
  gaming: { zh: "遊戲", en: "Games" },
  goals: { zh: "下一章", en: "Next" },
  contact: { zh: "聯絡", en: "Contact" },
};

const collectionLabels: Record<CollectionFilter, { zh: string; en: string }> = {
  all: { zh: zh.collectionAll, en: en.collectionAll },
  beitou: { zh: zh.collectionBeitou, en: en.collectionBeitou },
  yilan: { zh: zh.collectionYilan, en: en.collectionYilan },
  life: { zh: zh.collectionLife, en: en.collectionLife },
};

const collectionDescriptions: Record<Collection, { zh: string; en: string }> = {
  beitou: { zh: "2025.01.07 · 19 張", en: "2025.01.07 · 19 frames" },
  yilan: { zh: "2025.05.09 · 63 張", en: "2025.05.09 · 63 frames" },
  life: { zh: "2025—2026 · 16 張", en: "2025—2026 · 16 frames" },
};

function SectionIndex({ children }: { children: string }) {
  return <p className="section-index"><span className="index-rule" />{children}</p>;
}

function Home() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "zh";
    return (window.localStorage.getItem("willie-v2-language") as Language) || "zh";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [collection, setCollection] = useState<CollectionFilter>("all");
  const [showAll, setShowAll] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [soundOn, setSoundOn] = useState(false);
  const copy = language === "zh" ? zh : en;

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
    window.localStorage.setItem("willie-v2-language", language);
  }, [language]);

  useEffect(() => {
    const sections = ["hero", ...navItems.map(({ id }) => id)].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -62%", threshold: [0.1, 0.35, 0.7] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const filteredPhotos = useMemo(
    () => collection === "all" ? galleryPhotos : galleryPhotos.filter((photo) => photo.collection === collection),
    [collection],
  );
  const visiblePhotos = showAll ? filteredPhotos : filteredPhotos.slice(0, 12);

  const toggleLanguage = () => setLanguage((current) => current === "zh" ? "en" : "zh");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <aside className="dossier-rail" aria-label="Section index">
        <button className="rail-symbol" type="button" onClick={() => scrollTo("hero")} aria-label="Back to the beginning"><img src={logoMark} alt="" /></button>
        <span className="rail-version">{copy.version}</span>
        <div className="rail-track">
          {["hero", ...navItems.map((item) => item.id)].map((id, index) => (
            <button key={id} className={activeSection === id || (id === "hero" && activeSection === "hero") ? "active" : ""} type="button" onClick={() => scrollTo(id)}>
              <span>{String(index).padStart(2, "0")}</span><small>{railLabels[id][language]}</small>
            </button>
          ))}
        </div>
        <span className="rail-footer">WZ / 2026</span>
      </aside>
      <header className={`site-header ${menuOpen ? "menu-is-open" : ""}`}>
        <div className="topbar">
          <button className="brand" type="button" onClick={() => scrollTo("hero")} aria-label="Willie Zhang home">
            <span className="brand-symbol"><img src={logoMark} alt="" /></span>
            <span className="brand-lockup"><strong>{copy.brand}</strong><small>{copy.edition}</small></span>
          </button>
          <div className="header-meta"><span className="live-dot" />{copy.version}<span className="meta-divider" />2026</div>
          <button className="menu-trigger" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={17} /> : <Menu size={17} />}<span>{copy.menu}</span>
          </button>
        </div>
        <div className="nav-wrap">
          <nav id="site-nav" className="site-nav" aria-label="Primary navigation">
            {navItems.map((item, index) => (
              <button key={item.id} className={activeSection === item.id ? "active" : ""} type="button" onClick={() => scrollTo(item.id)}>
                <span className="nav-number">0{index + 1}</span>{copy[item.zh]}
              </button>
            ))}
            <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label="Switch language">
              {language === "zh" ? "EN" : "中"}<ChevronRight size={13} />
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="hero-paper" aria-hidden="true" style={{ backgroundImage: `url(${editorialHero})` }} />
          <div className="hero-grid page-width">
            <div className="hero-copy reveal">
              <SectionIndex>{copy.heroEyebrow}</SectionIndex>
              <h1>{copy.heroTitle.split("\n").map((line, index) => <span key={line} className={index === 1 ? "accent-line" : ""}>{line}</span>)}</h1>
              <p className="hero-intro">{copy.heroIntro}</p>
              <div className="hero-actions">
                <button className="btn btn-primary" type="button" onClick={() => scrollTo("work")}>{copy.heroPrimary}<ArrowRight size={16} /></button>
                <button className="text-link" type="button" onClick={() => scrollTo("about")}>{copy.heroSecondary}<MoveUpRight size={15} /></button>
              </div>
            </div>
            <div className="hero-side reveal reveal-delay-2">
              <div className="hero-portrait-frame">
                <div className="portrait-topline"><span className="portrait-label-with-mark"><img src={logoMark} alt="" />{copy.profileLabel}</span><span>001 / REAL FILE</span></div>
                <div className="portrait-image-wrap">
                  <img src={profileImage} alt="Willie Zhang" width="900" height="1100" fetchPriority="high" decoding="async" />
                  <span className="portrait-cross cross-a" /><span className="portrait-cross cross-b" />
                </div>
                <div className="portrait-caption"><strong>{copy.profileName}</strong><span>{copy.profileRole}</span></div>
                <div className="portrait-footer"><span><MapPin size={13} />{copy.profileLocation}</span><span>{copy.profileNote}</span></div>
              </div>
              <div className="hero-caption"><span className="caption-line" />{copy.heroCaption}<ArrowDownRight size={15} /></div>
            </div>
          </div>
          <div className="hero-bottom page-width"><span>01—06</span><span className="hero-bottom-line" /><span>WZ / ARCHIVE</span></div>
        </section>

        <section id="about" className="about-section page-width section-block">
          <div className="section-lead reveal"><SectionIndex>{copy.aboutIndex}</SectionIndex><h2>{copy.aboutTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p>{copy.aboutText}</p><button className="text-link" type="button" onClick={() => scrollTo("contact")}>{copy.aboutLink}<ArrowRight size={15} /></button></div>
          <div className="about-detail reveal reveal-delay-1">
            <div className="about-detail-art"><img src={rainGrid} alt="" loading="lazy" decoding="async" /><span className="art-label">KEELUNG / 2026</span></div>
            <div className="about-detail-note"><Aperture size={22} strokeWidth={1.25} /><span>{copy.aboutDetail}</span></div>
          </div>
        </section>

        <section id="skills" className="practice-section section-block">
          <div className="page-width">
            <div className="section-heading-row reveal"><div><SectionIndex>{copy.skillsIndex}</SectionIndex><h2>{copy.skillsTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2></div><p className="section-intro">{copy.skillsIntro}</p></div>
            <div className="practice-list">
              <article className="practice-item reveal"><div className="practice-number">01</div><div className="practice-icon"><Camera size={24} strokeWidth={1.25} /></div><div className="practice-copy"><h3>{copy.photoSkill}</h3><p>{copy.photoSkillDesc}</p></div><span className="practice-tag">PHOTO</span></article>
              <article className="practice-item reveal reveal-delay-1"><div className="practice-number">02</div><div className="practice-icon"><Clapperboard size={24} strokeWidth={1.25} /></div><div className="practice-copy"><h3>{copy.editSkill}</h3><p>{copy.editSkillDesc}</p></div><span className="practice-tag">EDIT</span></article>
              <article className="practice-item reveal reveal-delay-2"><div className="practice-number">03</div><div className="practice-icon"><Layers3 size={24} strokeWidth={1.25} /></div><div className="practice-copy"><h3>{copy.gearSkill}</h3><p>{copy.gearSkillDesc}</p></div><span className="practice-tag">FIELD</span></article>
            </div>
          </div>
        </section>

        <section id="work" className="work-section section-block">
          <div className="page-width">
            <div className="section-heading-row work-heading reveal"><div><SectionIndex>{copy.workIndex}</SectionIndex><h2>{copy.workTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2></div><div className="work-heading-side"><p>{copy.workIntro}</p><div className="archive-stamp"><Film size={15} />{copy.archiveLabel}</div></div></div>
            <div className="archive-strip reveal" style={{ backgroundImage: `url(${filmCropmarks})` }}><span>INDEX / 098 ORIGINAL FRAMES</span><span>NO RETOUCHING</span><span>CLICK TO OPEN</span></div>
            <div className="collection-tabs" role="tablist" aria-label="Photo collections">
              {(["all", "beitou", "yilan", "life"] as CollectionFilter[]).map((item) => (
                <button key={item} type="button" role="tab" aria-selected={collection === item} className={collection === item ? "active" : ""} onClick={() => { setCollection(item); setShowAll(false); }}>
                  <span>{item === "all" ? "00" : item === "beitou" ? "01" : item === "yilan" ? "02" : "03"}</span>{collectionLabels[item][language]}
                </button>
              ))}
            </div>
            <div className="archive-meta"><span>{copy.showing} <strong>{visiblePhotos.length}</strong> / {filteredPhotos.length} {copy.frames}</span><span>{copy.archiveNote}</span></div>
            <div className="photo-grid">
              {visiblePhotos.map((photo, index) => (
                <button key={photo.id} type="button" className={`photo-card photo-card-${index % 5}`} onClick={() => setSelectedPhoto(photo)} aria-label={`${photo.alt} — ${copy.closePreview}`}>
                  <span className="photo-index">{String(index + 1).padStart(2, "0")}</span>
                  <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" width="1200" height="900" sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw" />
                  <span className="photo-caption"><span>{photo.collection.toUpperCase()} · {collectionDescriptions[photo.collection][language]}</span><strong>{photo.alt}</strong></span>
                </button>
              ))}
            </div>
            {filteredPhotos.length > visiblePhotos.length && <button className="load-more" type="button" onClick={() => setShowAll(true)}>{copy.loadMore}<ArrowDownRight size={15} /></button>}
          </div>
        </section>

        <section id="gaming" className="gaming-section section-block">
          <div className="page-width gaming-grid">
            <div className="gaming-copy reveal"><SectionIndex>{copy.gamingIndex}</SectionIndex><h2>{copy.gamingTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p>{copy.gamingIntro}</p><div className="gaming-visual"><img src={gameImage} alt="Roblox game scene" loading="lazy" decoding="async" width="1200" height="800" /><span>PLAY LOG / 2019—2026</span></div></div>
            <div className="game-lists reveal reveal-delay-1"><div className="game-list-heading"><Gamepad2 size={19} strokeWidth={1.35} />{copy.mobileGames}</div><div className="game-row"><span>01</span><strong>{copy.gameRoblox}</strong><small>{copy.gameRobloxMeta}</small><img src={gameImage} alt="" loading="lazy" decoding="async" /></div><div className="game-row"><span>02</span><strong>{copy.gameSpeed}</strong><small>{copy.gameSpeedMeta}</small><img src={speedImage} alt="" loading="lazy" decoding="async" /></div><div className="game-row"><span>03</span><strong>{copy.gameWeplay}</strong><small>{copy.gameWeplayMeta}</small><img src={weplayImage} alt="" loading="lazy" decoding="async" /></div><div className="game-list-heading second"><Aperture size={19} strokeWidth={1.35} />{copy.pcGames}</div><div className="game-row"><span>04</span><strong>{copy.gameMinecraft}</strong><small>{copy.gameMinecraftMeta}</small><img src={minecraftImage} alt="" loading="lazy" decoding="async" /></div><div className="game-row"><span>05</span><strong>{copy.gameAsphalt}</strong><small>{copy.gameAsphaltMeta}</small><img src={asphaltImage} alt="" loading="lazy" decoding="async" /></div><div className="game-row"><span>06</span><strong>{copy.gamePixel}</strong><small>{copy.gamePixelMeta}</small><img src={pixelImage} alt="" loading="lazy" decoding="async" /></div></div>
          </div>
        </section>

        <section id="goals" className="goals-section section-block">
          <div className="page-width goals-grid">
            <div className="goals-image reveal"><img src={editorialSun} alt="Abstract editorial sun accent" loading="lazy" decoding="async" /><span className="goals-image-mark"><img src={logoMark} alt="" /></span><span className="goals-image-label">NEXT / 2026</span></div>
            <div className="goals-copy reveal reveal-delay-1"><SectionIndex>{copy.goalsIndex}</SectionIndex><h2>{copy.goalsTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p className="goals-intro">{copy.goalsIntro}</p><div className="goal-list"><div className="goal-item"><span>01</span><div><h3>{copy.goal01}</h3><p>{copy.goal01Desc}</p></div><Target size={18} strokeWidth={1.25} /></div><div className="goal-item"><span>02</span><div><h3>{copy.goal02}</h3><p>{copy.goal02Desc}</p></div><Compass size={18} strokeWidth={1.25} /></div><div className="goal-item"><span>03</span><div><h3>{copy.goal03}</h3><p>{copy.goal03Desc}</p></div><ArrowDownRight size={18} strokeWidth={1.25} /></div></div></div>
          </div>
        </section>

        <section id="contact" className="contact-section section-block">
          <div className="page-width contact-grid"><div className="contact-mark reveal"><img src={logoMark} alt="" /><span>WZ / 2026</span></div><div className="contact-copy reveal reveal-delay-1"><SectionIndex>{copy.contactIndex}</SectionIndex><h2>{copy.contactTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p>{copy.contactText}</p><a className="btn btn-primary" href="https://www.instagram.com/hayashi_970626/" target="_blank" rel="noreferrer">{copy.contactCta}<Instagram size={16} /></a></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="page-width"><span className="footer-line"><img src={logoMark} alt="" />{copy.footerLine}</span><span>WILLIE / ZHANG · V2.0</span><button type="button" onClick={() => scrollTo("hero")} aria-label="Back to top"><ArrowRight size={15} /></button></div></footer>

      <button className={`sound-toggle ${soundOn ? "is-on" : ""}`} type="button" onClick={() => setSoundOn((current) => !current)} aria-pressed={soundOn}>{soundOn ? <Volume2 size={15} /> : <VolumeX size={15} />}<span>{soundOn ? copy.musicOn : copy.musicOff}</span></button>

      {selectedPhoto && <div className="photo-dialog-backdrop" role="presentation" onClick={() => setSelectedPhoto(null)}><div className="photo-dialog" role="dialog" aria-modal="true" aria-label={selectedPhoto.alt} onClick={(event) => event.stopPropagation()}><button type="button" className="dialog-close" onClick={() => setSelectedPhoto(null)} aria-label={copy.closePreview}><X size={18} /></button><img src={selectedPhoto.src} alt={selectedPhoto.alt} decoding="async" /><div><span>{selectedPhoto.collection.toUpperCase()} / ORIGINAL FRAME</span><strong>{selectedPhoto.alt}</strong></div></div></div>}
    </div>
  );
}

export default Home;
