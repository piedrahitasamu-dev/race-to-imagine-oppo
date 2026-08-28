const STORAGE_KEY = "tuRenoWrapped";

const CATEGORIES = [
  { id: "social", label: "Social", color: "var(--color-social)" },
  { id: "deporte", label: "Deporte", color: "var(--color-deporte)" },
  { id: "creatividad", label: "Creatividad", color: "var(--color-creatividad)" },
  { id: "innovacion", label: "Creación / Innovación", color: "var(--color-innovacion)" },
];

const onboardingScreen = document.getElementById("onboarding");
const mainScreen = document.getElementById("main-screen");
const wrappedScreen = document.getElementById("wrapped-screen");

const onboardingForm = document.getElementById("onboarding-form");
const momentForm = document.getElementById("moment-form");
const categorySelect = document.getElementById("category-select");
const photoInput = document.getElementById("moment-photo");
const photoPreview = document.getElementById("photo-preview");
const momentsListEl = document.getElementById("moments-list");

const avatarShapeEl = document.getElementById("avatar-shape");
const avatarNameDisplayEl = document.getElementById("avatar-name-display");
const avatarDominantEl = document.getElementById("avatar-dominant");
const categoryBarsEl = document.getElementById("category-bars");
const aodClockEl = document.getElementById("aod-clock");

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

function renderAvatar() {
  const points = computeCategoryPoints(state.moments);
  const dominant = computeDominant(points);
  const maxPoints = Math.max(1, ...Object.values(points));

  avatarNameDisplayEl.textContent = state.avatarName;

  if (!dominant) {
    avatarShapeEl.style.background = "var(--color-neutral)";
    avatarDominantEl.textContent = "Avatar neutro — todavía sin definir";
  } else if (dominant.tie) {
    avatarShapeEl.style.background = "var(--color-neutral)";
    avatarDominantEl.textContent = "Avatar en construcción — vas parejo entre varias categorías";
  } else {
    const cat = categoryById(dominant.ids[0]);
    avatarShapeEl.style.background = cat.color;
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

function handleMomentFormSubmit(event) {
  event.preventDefault();

  const categoryId = categorySelect.value;
  const note = document.getElementById("moment-note").value.trim();
  const isRenoStation = document.getElementById("reno-station").checked;
  const file = photoInput.files[0];

  const addMoment = (photoDataUrl) => {
    state.moments.push({
      id: Date.now(),
      categoryId,
      note,
      photoDataUrl: photoDataUrl || null,
      isRenoStation,
      timestamp: new Date().toISOString(),
    });
    saveState(state);
    momentForm.reset();
    photoPreview.classList.add("hidden");
    renderMain();
  };

  if (file) {
    const reader = new FileReader();
    reader.onload = () => addMoment(reader.result);
    reader.readAsDataURL(file);
  } else {
    addMoment(null);
  }
}

function handlePhotoInputChange() {
  const file = photoInput.files[0];
  if (!file) {
    photoPreview.classList.add("hidden");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    photoPreview.src = reader.result;
    photoPreview.classList.remove("hidden");
  };
  reader.readAsDataURL(file);
}

function pickEvidenceQuote(dominantId) {
  const withNotes = state.moments.filter((m) => m.categoryId === dominantId && m.note);
  if (withNotes.length === 0) return "Tus fotos hablaron más que tus palabras esta vez.";
  const sample = withNotes[withNotes.length - 1];
  return `"${sample.note}"`;
}

function handleCloseCycle() {
  const points = computeCategoryPoints(state.moments);
  const dominant = computeDominant(points);
  const total = state.moments.length;

  document.getElementById("wrapped-name").textContent = state.avatarName;
  document.getElementById("wrapped-total").textContent = total;

  const breakdownEl = document.getElementById("wrapped-breakdown");
  breakdownEl.innerHTML = "";
  CATEGORIES.forEach((c) => {
    const li = document.createElement("li");
    li.textContent = `${c.label}: ${points[c.id]} pts`;
    breakdownEl.appendChild(li);
  });

  const wrappedAvatarShape = document.getElementById("wrapped-avatar-shape");
  const wrappedDominantEl = document.getElementById("wrapped-dominant");
  const evidenceEl = document.getElementById("wrapped-evidence");

  if (!dominant) {
    wrappedAvatarShape.style.background = "var(--color-neutral)";
    wrappedDominantEl.textContent = "Todavía no hay suficientes momentos para definir tu avatar.";
    evidenceEl.textContent = "";
  } else if (dominant.tie) {
    wrappedAvatarShape.style.background = "var(--color-neutral)";
    wrappedDominantEl.textContent = "Tu Wrapped: un poco de cada cosa — no hay un solo lado tuyo.";
    evidenceEl.textContent = pickEvidenceQuote(dominant.ids[0]);
  } else {
    const cat = categoryById(dominant.ids[0]);
    wrappedAvatarShape.style.background = cat.color;
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
