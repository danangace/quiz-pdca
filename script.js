// Soal dimuat dari questions/{version}.js (global: window.{VERSION}_QUESTIONS)
// type:'single' → radio A/B/C/D  |  type:'multi' → checkbox btoa("A,C")  |  type:'tf' → btoa("TRUE"/"FALSE")

// ── STATE ──────────────────────────────────────────
let questions = [],
  currentIndex = 0,
  answers = {},
  timerInterval = null,
  elapsedSeconds = 0,
  submitted = false,
  currentVersion = "";

function startQuiz(version) {
  const bank = {
    medium: window.MEDIUM_QUESTIONS,
    hard: window.HARD_QUESTIONS,
    expert: window.EXPERT_QUESTIONS,
  }[version];
  if (!bank) {
    alert("Soal untuk level '" + version + "' tidak ditemukan.");
    return;
  }
  questions = bank;
  currentVersion = version;
  answers = {};
  currentIndex = 0;
  submitted = false;
  elapsedSeconds = 0;
  document.getElementById("total-q-display").textContent =
    questions.length;
  const chip = document.getElementById("level-chip");
  chip.textContent =
    version === "medium"
      ? "Medium"
      : version === "hard"
        ? "Hard"
        : "Expert";
  chip.className = "level-chip " + version;
  document.getElementById("results-header").className =
    "results-header " + version;
  buildQuiz();
  showScreen("quiz");
  startTimer();
  renderNavDots();
  document.getElementById("nav-panel").style.display = "block";
  showQuestion(0);
}

function buildQuiz() {
  const body = document.getElementById("quiz-body");
  body.innerHTML = "";
  questions.forEach((qData, i) => {
    const block = document.createElement("div");
    block.className = "question-block";
    block.id = "q-block-" + i;
    const badge =
      qData.type === "multi"
        ? '<span class="q-type-badge multi">◆ Multi-Select — pilih semua yang benar</span>'
        : qData.type === "tf"
          ? '<span class="q-type-badge tf">◉ Benar / Salah</span>'
          : '<span class="q-type-badge single">● Pilihan Ganda</span>';
    const hint = qData.hint
      ? `<div class="question-hint">${qData.hint}</div>`
      : "";
    let opts = "";
    if (qData.type === "single") {
      opts = qData.opts
        .map((o, j) => {
          const l = ["A", "B", "C", "D"][j];
          return `<li class="option-item"><input type="radio" name="q${i}" id="q${i}o${j}" value="${l}" onchange="recordSingle(${i},'${l}')"><label class="option-label" for="q${i}o${j}"><span class="option-letter">${l}</span><span>${o}</span></label></li>`;
        })
        .join("");
    } else if (qData.type === "tf") {
      opts = qData.opts
        .map((o, j) => {
          const v = j === 0 ? "TRUE" : "FALSE";
          const d = j === 0 ? "✓" : "✗";
          return `<li class="option-item"><input type="radio" name="q${i}" id="q${i}o${j}" value="${v}" onchange="recordSingle(${i},'${v}')"><label class="option-label" for="q${i}o${j}"><span class="option-letter">${d}</span><span>${o}</span></label></li>`;
        })
        .join("");
    } else {
      opts = qData.opts
        .map((o, j) => {
          const l = ["A", "B", "C", "D", "E", "F", "G"][j];
          return `<li class="option-item"><input type="checkbox" name="q${i}" id="q${i}o${j}" value="${l}" onchange="recordMulti(${i})"><label class="option-label" for="q${i}o${j}"><span class="option-letter">${l}</span><span>${o}</span></label></li>`;
        })
        .join("");
    }
    block.innerHTML = `<div class="q-meta"><span class="q-num">Soal ${i + 1}</span><span class="q-category">${qData.cat}</span>${badge}</div><div class="question-text">${qData.q}</div>${hint}<ul class="options-list">${opts}</ul>`;
    body.appendChild(block);
  });
}

function recordSingle(idx, val) {
  answers[idx] = val;
  updateAnsweredCount();
  updateNavDot(idx);
}
function recordMulti(idx) {
  const checked = [
    ...document.querySelectorAll(`input[name="q${idx}"]:checked`),
  ]
    .map((el) => el.value)
    .sort();
  if (checked.length > 0) answers[idx] = checked.join(",");
  else delete answers[idx];
  updateAnsweredCount();
  updateNavDot(idx);
}

function showQuestion(index) {
  document
    .querySelectorAll(".question-block")
    .forEach((b) => b.classList.remove("active"));
  const block = document.getElementById("q-block-" + index);
  if (block) {
    block.classList.add("active");
    block.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  currentIndex = index;
  document.getElementById("current-q-display").textContent = index + 1;
  updateProgressBar();
  renderNavDots();
}

function prevQ() {
  if (currentIndex > 0) showQuestion(currentIndex - 1);
}
function nextQ() {
  if (currentIndex < questions.length - 1) showQuestion(currentIndex + 1);
}
function updateProgressBar() {
  document.getElementById("progress-bar").style.width =
    ((currentIndex + 1) / questions.length) * 100 + "%";
}
function updateAnsweredCount() {
  document.getElementById("answered-display").textContent =
    Object.keys(answers).length;
}
function updateNavDot(index) {
  const dots = document.querySelectorAll(".nav-dot");
  if (dots[index]) dots[index].classList.add("answered");
}
function renderNavDots() {
  const wrap = document.getElementById("nav-dots");
  wrap.innerHTML = "";
  questions.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className =
      "nav-dot" +
      (answers[i] ? " answered" : "") +
      (i === currentIndex ? " current" : "");
    dot.textContent = i + 1;
    dot.onclick = () => showQuestion(i);
    wrap.appendChild(dot);
  });
}
function toggleNavPanel() {
  document.getElementById("nav-panel").classList.toggle("open");
}
function startTimer() {
  clearInterval(timerInterval);
  elapsedSeconds = 0;
  timerInterval = setInterval(() => {
    elapsedSeconds++;
    updateTimerDisplay();
  }, 1000);
}
function updateTimerDisplay() {
  const m = Math.floor(elapsedSeconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (elapsedSeconds % 60).toString().padStart(2, "0");
  const el = document.getElementById("timer-display");
  el.textContent = `${m}:${s}`;
  el.className =
    elapsedSeconds > 2400
      ? "danger"
      : elapsedSeconds > 1800
        ? "warning"
        : "";
}

function submitQuiz() {
  const unanswered = questions.length - Object.keys(answers).length;
  if (unanswered > 0) {
    const go = confirm(
      `Masih ada ${unanswered} soal belum dijawab. Tetap submit?`,
    );
    if (!go) return;
  }
  clearInterval(timerInterval);
  submitted = true;
  questions.forEach((qData, i) => {
    const correctRaw = atob(qData.a);
    const userAnswer = answers[i] || "";
    document
      .querySelectorAll(`#q-block-${i} input`)
      .forEach((inp) => (inp.disabled = true));
    if (qData.type === "single" || qData.type === "tf") {
      const keys =
        qData.type === "tf" ? ["TRUE", "FALSE"] : ["A", "B", "C", "D"];
      document
        .querySelectorAll(`#q-block-${i} .option-label`)
        .forEach((label, j) => {
          const l = keys[j];
          label.classList.add("disabled");
          if (l === correctRaw) label.classList.add("correct");
          else if (userAnswer === l) label.classList.add("wrong");
        });
    } else {
      const cSet = new Set(correctRaw.split(","));
      const uSet = new Set((userAnswer || "").split(",").filter(Boolean));
      document
        .querySelectorAll(`#q-block-${i} .option-label`)
        .forEach((label, j) => {
          const l = ["A", "B", "C", "D", "E", "F", "G"][j];
          label.classList.add("disabled");
          if (cSet.has(l)) label.classList.add("correct");
          else if (uSet.has(l)) label.classList.add("wrong");
        });
    }
  });
  showResults();
}

function showResults() {
  let correct = 0,
    partial = 0;
  questions.forEach((qData, i) => {
    const c = atob(qData.a);
    const u = answers[i] || "";
    if (qData.type === "multi") {
      const cs = c.split(",").sort().join(",");
      const us = u.split(",").filter(Boolean).sort().join(",");
      if (us === cs) correct++;
      else if (u && c.split(",").some((x) => u.includes(x))) partial++;
    } else {
      if (u === c) correct++;
    }
  });
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  const wrong = Object.keys(answers).length - correct - partial;
  document.getElementById("score-big").innerHTML = `${pct}<span>%</span>`;
  document.getElementById("score-grade").textContent =
    pct >= 90
      ? "Luar Biasa! 🏆"
      : pct >= 80
        ? "Sangat Baik 🎯"
        : pct >= 70
          ? "Baik 👍"
          : pct >= 60
            ? "Cukup — Perlu Latihan Lagi"
            : "Perlu Belajar Lebih Giat 📚";
  document.getElementById("stat-correct").textContent = correct;
  document.getElementById("stat-wrong").textContent =
    wrong + (partial > 0 ? ` (+${partial} parsial)` : "");
  const mins = Math.floor(elapsedSeconds / 60);
  const secs = elapsedSeconds % 60;
  document.getElementById("stat-time").textContent =
    `${mins}:${secs.toString().padStart(2, "0")}`;
  const reviewList = document.getElementById("review-list");
  reviewList.innerHTML = "";
  questions.forEach((qData, i) => {
    const c = atob(qData.a);
    const u = answers[i] || "";
    const om = {
      A: qData.opts[0],
      B: qData.opts[1],
      C: qData.opts[2],
      D: qData.opts[3],
      E: qData.opts[4],
      F: qData.opts[5],
      G: qData.opts[6],
    };
    if (qData.type === "tf") {
      om["TRUE"] = qData.opts[0];
      om["FALSE"] = qData.opts[1];
    }
    let cls = "unanswered",
      st = "Tidak Dijawab";
    if (!answers[i]) {
      cls = "unanswered";
      st = "Tidak Dijawab";
    } else if (qData.type === "multi") {
      const cs = c.split(",").sort().join(",");
      const us = u.split(",").filter(Boolean).sort().join(",");
      if (us === cs) {
        cls = "correct";
        st = "Benar ✓";
      } else if (c.split(",").some((x) => u.includes(x))) {
        cls = "partial";
        st = "Parsial ◑";
      } else {
        cls = "wrong";
        st = "Salah ✗";
      }
    } else {
      cls = u === c ? "correct" : "wrong";
      st = u === c ? "Benar ✓" : "Salah ✗";
    }
    const ud =
      qData.type === "multi"
        ? u
            .split(",")
            .filter(Boolean)
            .map((l) => `${l}. ${om[l] || l}`)
            .join(", ") || "—"
        : u
          ? `${u}. ${om[u] || u}`
          : "—";
    const cd =
      qData.type === "multi"
        ? c
            .split(",")
            .map((l) => `${l}. ${om[l] || l}`)
            .join(", ")
        : `${c}. ${om[c] || c}`;
    const qt =
      qData.q
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .substring(0, 130) + (qData.q.length > 130 ? "…" : "");
    const item = document.createElement("div");
    item.className = `review-item ${cls}`;
    item.innerHTML = `<div class="review-item-header"><span class="review-q-num">Soal ${i + 1} · ${qData.cat}</span><span class="review-status">${st}</span></div><div class="review-q-text">${qt}</div><div class="review-answers"><span class="review-answer-tag tag-user ${cls === "correct" ? "correct" : cls === "wrong" ? "wrong" : cls === "partial" ? "partial" : ""}">Jawaban kamu: ${ud}</span>${cls !== "correct" ? `<span class="review-answer-tag tag-correct-ans">Benar: ${cd}</span>` : ""}</div>`;
    reviewList.appendChild(item);
  });
  showScreen("results");
}

function restartQuiz() {
  startQuiz(currentVersion);
}
function goHome() {
  clearInterval(timerInterval);
  document.getElementById("nav-panel").style.display = "none";
  document.getElementById("nav-panel").classList.remove("open");
  showScreen("intro");
}
function confirmGoHome() {
  if (submitted) {
    goHome();
    return;
  }
  const ok = confirm(
    "Kembali ke Home? Progres kuis kamu akan hilang.",
  );
  if (ok) goHome();
}
function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}
