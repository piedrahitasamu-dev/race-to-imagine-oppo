const STORAGE_KEY = "tuRenoWrapped";

const CATEGORIES = [
  { id: "social", label: "Social", color: "var(--color-social)", avatar: "avatares/social.png" },
  { id: "deporte", label: "Deporte", color: "var(--color-deporte)", avatar: "avatares/deporte.png" },
  { id: "creatividad", label: "Creatividad", color: "var(--color-creatividad)", avatar: "avatares/creatividad.png" },
  { id: "innovacion", label: "Creación / Innovación", color: "var(--color-innovacion)", avatar: "avatares/innovacion.png" },
];

const onboardingScreen = document.getElementById("onboarding");
const mainScreen = document.getElementById("main-screen");
const wrappedScreen = document.getElementById("wrapped-screen");

const onboardingForm = document.getElementById("onboarding-form");
const momentForm = document.getElementById("moment-form");
const categorySelect = document.getElementById("category-select");
const photoInput = document.getElementById("moment-photo");
const photoPreviewGrid = document.getElementById("photo-preview-grid");
const momentsListEl = document.getElementById("moments-list");

const avatarShapeEl = document.getElementById("avatar-shape");
const avatarNameDisplayEl = document.getElementById("avatar-name-display");
const avatarDominantEl = document.getElementById("avatar-dominant");
const categoryBarsEl = document.getElementById("category-bars");
const aodClockEl = document.getElementById("aod-clock");
const phoneScreenEl = document.getElementById("phone-screen");

const closeCycleBtn = document.getElementById("close-cycle-btn");
const resetBtn = document.getElementById("reset-btn");
const backToMomentsBtn = document.getElementById("back-to-moments-btn");
const shareBtn = document.getElementById("share-btn");
const shareFeedbackEl = document.getElementById("share-feedback");

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return { avatarName: "", moments: [], sharedBonus: null };
  }
  return JSON.parse(raw);
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

function categoryById(id) {
  return CATEGORIES.find((c) => c.id === id);
}

function computeCategoryPoints(moments) {
  const points = {};
  CATEGORIES.forEach((c) => (points[c.id] = 0));
  moments.forEach((m) => {
    const value = m.isRenoStation ? 2 : 1;
    points[m.categoryId] = (points[m.categoryId] || 0) + value;
  });
  return points;
}

function computeTotalPoints(points) {
  return Object.values(points).reduce((sum, v) => sum + v, 0);
}

function pickHighlightPhotos(categoryIds, max) {
  const pool = categoryIds
    ? state.moments.filter((m) => categoryIds.includes(m.categoryId) && m.photoDataUrl)
    : state.moments.filter((m) => m.photoDataUrl);
  return pool
    .slice()
    .reverse()
    .slice(0, max)
    .map((m) => m.photoDataUrl);
}

function computeDominant(points) {
  const entries = Object.entries(points).filter(([, v]) => v > 0);
  if (entries.length === 0) return null;
  const max = Math.max(...entries.map(([, v]) => v));
  const top = entries.filter(([, v]) => v === max).map(([id]) => id);
  if (top.length > 1) return { tie: true, ids: top };
  return { tie: false, ids: top };
}

function populateCategorySelect() {
  categorySelect.innerHTML = "";
  CATEGORIES.forEach((c) => {
    const option = document.createElement("option");
    option.value = c.id;
    option.textContent = c.label;
    categorySelect.appendChild(option);
  });
}

function showScreen(screen) {
  [onboardingScreen, mainScreen, wrappedScreen].forEach((s) => s.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function renderAodClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  aodClockEl.textContent = `${hh}:${mm}`;
}

function findLatestPhotoForCategories(categoryIds) {
  const matches = state.moments.filter((m) => categoryIds.includes(m.categoryId) && m.photoDataUrl);
  if (matches.length === 0) return null;
  return matches[matches.length - 1].photoDataUrl;
}

function paintAvatarShape(el, color, avatarImage) {
  el.style.backgroundColor = color;
  el.style.backgroundImage = avatarImage ? `url(${avatarImage})` : "none";
}

function paintBackgroundPhoto(el, photoDataUrl) {
  if (photoDataUrl) {
    el.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${photoDataUrl})`;
  } else {
    el.style.backgroundImage = "";
  }
}

function renderAvatar() {
  const points = computeCategoryPoints(state.moments);
  const dominant = computeDominant(points);
  const maxPoints = Math.max(1, ...Object.values(points));

  avatarNameDisplayEl.textContent = state.avatarName;

  if (!dominant) {
    paintAvatarShape(avatarShapeEl, "var(--color-neutral)");
    paintBackgroundPhoto(phoneScreenEl, null);
    avatarDominantEl.textContent = "Avatar neutro — todavía sin definir";
  } else if (dominant.tie) {
    paintAvatarShape(avatarShapeEl, "var(--color-neutral)");
    paintBackgroundPhoto(phoneScreenEl, findLatestPhotoForCategories(dominant.ids));
    avatarDominantEl.textContent = "Avatar en construcción — vas parejo entre varias categorías";
  } else {
    const cat = categoryById(dominant.ids[0]);
    paintAvatarShape(avatarShapeEl, cat.color, cat.avatar);
    paintBackgroundPhoto(phoneScreenEl, findLatestPhotoForCategories(dominant.ids));
    avatarDominantEl.textContent = `Tu avatar se está pareciendo más a: ${cat.label}`;
  }

  categoryBarsEl.innerHTML = "";
  CATEGORIES.forEach((c) => {
    const row = document.createElement("div");
    row.className = "category-bar-row";

    const label = document.createElement("span");
    label.textContent = c.label;
    label.style.width = "90px";

    const track = document.createElement("div");
    track.className = "category-bar-track";

    const fill = document.createElement("div");
    fill.className = "category-bar-fill";
    fill.style.width = `${(points[c.id] / maxPoints) * 100}%`;
    fill.style.background = c.color;

    track.appendChild(fill);
    row.appendChild(label);
    row.appendChild(track);
    categoryBarsEl.appendChild(row);
  });
}

function renderMomentsList() {
  momentsListEl.innerHTML = "";
  state.moments
    .slice()
    .reverse()
    .forEach((m) => {
      const cat = categoryById(m.categoryId);
      const li = document.createElement("li");
      li.className = "moment-card";

      if (m.photoDataUrl) {
        const img = document.createElement("img");
        img.src = m.photoDataUrl;
        img.alt = m.note || cat.label;
        li.appendChild(img);
      }

      const info = document.createElement("div");
      info.className = "moment-card-info";

      const tag = document.createElement("span");
      tag.className = "moment-tag";
      tag.textContent = `${cat.label}${m.isRenoStation ? " · Estación Reno x2" : ""}`;
      tag.style.background = cat.color;

      const note = document.createElement("p");
      note.textContent = m.note || "(sin descripción)";
      note.style.margin = "0";

      info.appendChild(tag);
      info.appendChild(note);
      li.appendChild(info);
      momentsListEl.appendChild(li);
    });
}

function renderMain() {
  renderAodClock();
  renderAvatar();
  renderMomentsList();
}

function handleOnboardingSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById("avatar-name");
  state.avatarName = nameInput.value.trim();
  saveState(state);
  showScreen(mainScreen);
  renderMain();
}

function readFileAsDataUrl(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

async function handleMomentFormSubmit(event) {
  event.preventDefault();

  const categoryId = categorySelect.value;
  const note = document.getElementById("moment-note").value.trim();
  const isRenoStation = document.getElementById("reno-station").checked;
  const files = Array.from(photoInput.files);

  const addMoment = (photoDataUrl) => {
    state.moments.push({
      id: Date.now() + Math.random(),
      categoryId,
      note,
      photoDataUrl: photoDataUrl || null,
      isRenoStation,
      timestamp: new Date().toISOString(),
    });
  };

  if (files.length > 0) {
    for (const file of files) {
      const dataUrl = await readFileAsDataUrl(file);
      addMoment(dataUrl);
    }
  } else {
    addMoment(null);
  }

  saveState(state);
  momentForm.reset();
  photoPreviewGrid.innerHTML = "";
  renderMain();
}

function handlePhotoInputChange() {
  photoPreviewGrid.innerHTML = "";
  Array.from(photoInput.files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = document.createElement("img");
      img.src = reader.result;
      img.alt = "Vista previa";
      photoPreviewGrid.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
}

function pickEvidenceQuote(dominantId) {
  const withNotes = state.moments.filter((m) => m.categoryId === dominantId && m.note);
  if (withNotes.length === 0) return "Tus fotos hablaron más que tus palabras esta vez.";
  const sample = withNotes[withNotes.length - 1];
  return `"${sample.note}"`;
}

function renderWrappedGallery(categoryIds) {
  const galleryEl = document.getElementById("wrapped-gallery");
  const galleryLabelEl = document.getElementById("wrapped-gallery-label");
  galleryEl.innerHTML = "";

  let photos = pickHighlightPhotos(categoryIds, 4);
  if (photos.length === 0) {
    photos = pickHighlightPhotos(null, 4);
  }

  if (photos.length === 0) {
    galleryLabelEl.textContent = "";
    return;
  }

  galleryLabelEl.textContent = "Tus momentos más importantes";
  photos.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Momento destacado";
    galleryEl.appendChild(img);
  });
}

function handleCloseCycle() {
  const points = computeCategoryPoints(state.moments);
  const dominant = computeDominant(points);
  const total = state.moments.length;

  document.getElementById("wrapped-name").textContent = state.avatarName;
  document.getElementById("wrapped-total").textContent = total;
  document.getElementById("wrapped-points").textContent = computeTotalPoints(points);
  renderWrappedGallery(dominant && !dominant.tie ? [dominant.ids[0]] : dominant ? dominant.ids : null);

  const breakdownEl = document.getElementById("wrapped-breakdown");
  breakdownEl.innerHTML = "";
  CATEGORIES.forEach((c) => {
    const li = document.createElement("li");
    li.textContent = `${c.label}: ${points[c.id]} pts`;
    breakdownEl.appendChild(li);
  });

  const wrappedAvatarShape = document.getElementById("wrapped-avatar-shape");
  const wrappedCardEl = document.getElementById("wrapped-card");
  const wrappedDominantEl = document.getElementById("wrapped-dominant");
  const evidenceEl = document.getElementById("wrapped-evidence");

  if (!dominant) {
    paintAvatarShape(wrappedAvatarShape, "var(--color-neutral)");
    paintBackgroundPhoto(wrappedCardEl, null);
    wrappedDominantEl.textContent = "Todavía no hay suficientes momentos para definir tu avatar.";
    evidenceEl.textContent = "";
  } else if (dominant.tie) {
    paintAvatarShape(wrappedAvatarShape, "var(--color-neutral)");
    paintBackgroundPhoto(wrappedCardEl, findLatestPhotoForCategories(dominant.ids));
    wrappedDominantEl.textContent = "Tu Wrapped: un poco de cada cosa — no hay un solo lado tuyo.";
    evidenceEl.textContent = pickEvidenceQuote(dominant.ids[0]);
  } else {
    const cat = categoryById(dominant.ids[0]);
    paintAvatarShape(wrappedAvatarShape, cat.color, cat.avatar);
    paintBackgroundPhoto(wrappedCardEl, findLatestPhotoForCategories(dominant.ids));
    wrappedDominantEl.textContent = `Este período, tu momento fue: ${cat.label}`;
    evidenceEl.textContent = pickEvidenceQuote(cat.id);
  }

  shareBtn.disabled = false;
  shareFeedbackEl.classList.add("hidden");

  showScreen(wrappedScreen);
}

function handleShare() {
  const bonus = Math.floor(Math.random() * 10) + 1;
  state.sharedBonus = bonus;
  saveState(state);
  shareFeedbackEl.textContent = `¡Compartiste tu Wrapped! +${bonus} puntos extra hacia premios.`;
  shareFeedbackEl.classList.remove("hidden");
  shareBtn.disabled = true;
}

function handleReset() {
  localStorage.removeItem(STORAGE_KEY);
  state = loadState();
  onboardingForm.reset();
  showScreen(onboardingScreen);
}

populateCategorySelect();
onboardingForm.addEventListener("submit", handleOnboardingSubmit);
momentForm.addEventListener("submit", handleMomentFormSubmit);
photoInput.addEventListener("change", handlePhotoInputChange);
closeCycleBtn.addEventListener("click", handleCloseCycle);
resetBtn.addEventListener("click", handleReset);
backToMomentsBtn.addEventListener("click", () => showScreen(mainScreen));
shareBtn.addEventListener("click", handleShare);

if (state.avatarName) {
  showScreen(mainScreen);
  renderMain();
} else {
  showScreen(onboardingScreen);
}
