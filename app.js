/**
 * 쏙쏙 순서 맞추기 생각 워크북 - 메인 앱 로직
 * - 드래그 앤 드롭 및 클릭 방식 지원 (PC & 태블릿)
 * - 번호 직접 쓰기(입력) 및 가위로 오려 붙이기 동시 지원
 * - 차시별 3~5문제 자동 렌더링 및 맞춤 생성기
 * - 채점, 효과음(Web Audio API), 축하 효과
 */

// 원형 숫자 기호 (초등 학습지 표준)
const CIRCLED_NUMBERS = ["①", "②", "③", "④", "⑤", "⑥", "⑦"];

// 애플리케이션 상태
const state = {
  currentSessionId: "session_1",
  problems: [], // 렌더링된 문제 목록 및 상태
  isAnswerMode: false,
  selectedCardForPlacement: null // 태블릿/터치 환경 클릭 배치용
};

// ==========================================
// Web Audio API 효과음 생성기 (외부 파일 의존 없음)
// ==========================================
const SoundEffect = {
  ctx: null,
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },
  playSuccess() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + i * 0.1);
      gain.gain.setValueAtTime(0.2, now + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + i * 0.1);
      osc.stop(now + i * 0.1 + 0.35);
    });
  },
  playPlace() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  },
  playTryAgain() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [400, 320].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + i * 0.15);
      gain.gain.setValueAtTime(0.15, now + i * 0.15);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.15 + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + i * 0.15);
      osc.stop(now + i * 0.15 + 0.2);
    });
  }
};

// ==========================================
// 배열 무작위 셔플 함수 (Fisher-Yates)
// ==========================================
function shuffleArray(arr) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

// ==========================================
// 차시 로드 및 초기화
// ==========================================
function loadSession(sessionId) {
  state.currentSessionId = sessionId;
  state.isAnswerMode = false;
  state.selectedCardForPlacement = null;

  let sessionObj = SESSIONS.find(s => s.id === sessionId);
  let problemSet = [];

  if (sessionObj) {
    document.getElementById("sheetTitle").innerText = sessionObj.name;
    document.getElementById("sheetSubtitle").innerText = sessionObj.subtitle;
    document.getElementById("sheetBadge").innerText = sessionObj.badge;

    problemSet = sessionObj.problemIds.map(id => WORKBOOK_DATA.find(p => p.id === id)).filter(Boolean);
  } else {
    // 커스텀 세션의 경우 기본 세트 활용
    document.getElementById("sheetTitle").innerText = "선생님 맞춤형 순서 맞추기 워크북";
    document.getElementById("sheetSubtitle").innerText = "초등학교 3학년 맞춤형 순서 배열 생각 학습지입니다.";
    document.getElementById("sheetBadge").innerText = "초등 3학년 통합 워크북";
    problemSet = WORKBOOK_DATA.slice(0, 4);
  }

  // 각 문제별로 보기 카드를 섞고 고유 번호(1, 2, 3...)를 부여
  state.problems = problemSet.map((prob, pIndex) => {
    // 순서를 섞은 중간 카드들 생성
    const rawMiddle = prob.middleSteps.map(step => ({ ...step }));
    let shuffled = shuffleArray(rawMiddle);

    // 완전히 동일한 순서로 섞이는 경우 재셔플
    if (shuffled.length > 1 && shuffled.every((item, idx) => item.order === rawMiddle[idx].order)) {
      shuffled.reverse();
    }

    // 보기 카드에 번호 부여 (1번부터 차례대로 ①, ②, ③...)
    const choiceCards = shuffled.map((card, idx) => ({
      ...card,
      choiceNumber: idx + 1, // 아이가 입력하거나 오릴 번호
      circledNumber: CIRCLED_NUMBERS[idx] || `(${idx + 1})`,
      problemIndex: pIndex
    }));

    return {
      raw: prob,
      problemIndex: pIndex,
      choiceCards: choiceCards,
      // 빈칸 슬롯: 크기는 blankCount 만큼, 초기에는 null
      userSlots: new Array(prob.blankCount).fill(null),
      isCorrect: null
    };
  });

  renderWorkbook();
}

// ==========================================
// 학습지 전체 화면 렌더링
// ==========================================
function renderWorkbook() {
  const container = document.getElementById("problemsList");
  if (!container) return;
  container.innerHTML = "";

  state.problems.forEach((probState, pIndex) => {
    const probCard = document.createElement("div");
    probCard.className = "problem-card";
    probCard.id = `problemCard_${pIndex}`;

    const raw = probState.raw;
    const blankCount = raw.blankCount;

    // 문제 상단 정보
    probCard.innerHTML = `
      <div class="problem-meta">
        <div class="problem-num-title">
          <div class="problem-number-badge">${pIndex + 1}</div>
          <div class="problem-title">${raw.title}</div>
        </div>
        <span class="blank-step-tag">💡 맞출 순서: ${blankCount}단계</span>
      </div>
      <div class="problem-desc">${raw.description}</div>

      <!-- 순서 진행 트랙 (시작 고정 -> 빈칸들 -> 끝 고정) -->
      <div class="sequence-track" id="sequenceTrack_${pIndex}">
        <!-- 1단계: 첫 번째 그림 (고정) -->
        <div class="step-card card-fixed-start">
          <div class="fixed-badge badge-start">🚩 1단계 (시작)</div>
          <div class="card-art-box">${getIllustrationSvg(raw.startStep.svgKey)}</div>
          <div class="card-title">${raw.startStep.title}</div>
          <div class="card-desc">${raw.startStep.desc}</div>
        </div>

        <div class="step-arrow">➔</div>

        <!-- 중간 빈칸 슬롯들 -->
        ${renderSlotsHtml(probState, pIndex)}

        <div class="step-arrow">➔</div>

        <!-- 마지막 단계: 끝 그림 (고정) -->
        <div class="step-card card-fixed-end">
          <div class="fixed-badge badge-end">🏁 마지막 (완성)</div>
          <div class="card-art-box">${getIllustrationSvg(raw.endStep.svgKey)}</div>
          <div class="card-title">${raw.endStep.title}</div>
          <div class="card-desc">${raw.endStep.desc}</div>
        </div>
      </div>

      <!-- 정답 해설 (교사용/정답 보기 모드) -->
      <div class="answer-overlay" id="answerOverlay_${pIndex}">
        <strong>[바른 순서 및 풀이]</strong><br>
        ${getAnswerExplanationText(probState)}
      </div>

      <!-- 채점 피드백 결과 배너 -->
      <div class="feedback-box" id="feedback_${pIndex}"></div>

      <!-- 섞여 있는 보기 카드 모음 (오리기/번호 선택 영역) -->
      <div class="choice-tray-section">
        <div class="choice-tray-header">
          <div class="tray-title">
            <span class="scissor-icon">✂️</span>
            <span>오려 붙이거나 번호를 적는 보기 카드 (순서가 뒤섞여 있어요!)</span>
          </div>
          <span class="tray-tip">💡 카드를 마우스로 끌거나(드래그), 터치/클릭하여 빈칸에 놓을 수 있어요.</span>
        </div>
        <div class="choice-cards-grid" id="choiceGrid_${pIndex}">
          ${renderChoiceCardsHtml(probState, pIndex)}
        </div>
      </div>
    `;

    container.appendChild(probCard);
  });

  // 이벤트 리스너 바인딩 (드래그 앤 드롭, 번호 입력 필드 등)
  bindInteractiveEvents();
}

// ==========================================
// 중간 빈칸 슬롯 HTML 생성
// ==========================================
function renderSlotsHtml(probState, pIndex) {
  let html = "";
  const blankCount = probState.raw.blankCount;

  for (let sIndex = 0; sIndex < blankCount; sIndex++) {
    const stepNumber = sIndex + 2; // 1은 시작 카드이므로 2단계부터 시작
    const placedCard = probState.userSlots[sIndex];

    const hasCardClass = placedCard ? "has-card" : "";
    const slotNumberVal = placedCard ? placedCard.choiceNumber : "";

    html += `
      <div class="step-card slot-blank ${hasCardClass}"
           data-problem="${pIndex}"
           data-slot="${sIndex}"
           id="slot_${pIndex}_${sIndex}"
           title="카드를 놓거나 아래 번호를 적어보세요">
        <div class="slot-header">
          <span class="slot-order-text">${stepNumber}단계</span>
          <div class="slot-number-writer">
            번호:
            <input type="text"
                   class="number-input-field"
                   maxlength="1"
                   value="${slotNumberVal}"
                   data-problem="${pIndex}"
                   data-slot="${sIndex}"
                   placeholder="?" />
            번
          </div>
        </div>

        ${
          placedCard
            ? `
            <div class="slotted-content" onclick="returnCardToTray(${pIndex}, ${sIndex})" title="클릭하면 카드가 보기함으로 돌아갑니다">
              <div class="slotted-number-tag">${placedCard.circledNumber}</div>
              <div class="card-art-box">${getIllustrationSvg(placedCard.svgKey)}</div>
              <div class="card-title">${placedCard.title}</div>
              <div class="card-desc">${placedCard.desc}</div>
              <span class="btn-print-hide" style="font-size:10px; color:#adb5bd; margin-top:4px;">(클릭 시 취소)</span>
            </div>
          `
            : `
            <div class="slot-placeholder">
              <span class="paste-icon">🧴</span>
              <span><strong>(${stepNumber}단계)</strong></span>
              <span>번호를 쓰거나<br>그림을 붙이는 곳</span>
            </div>
          `
        }
      </div>
    `;

    // 마지막 빈칸 뒤에는 화살표를 넣지 않음 (바깥 루프에서 고정 끝 카드와 연결)
    if (sIndex < blankCount - 1) {
      html += `<div class="step-arrow">➔</div>`;
    }
  }

  return html;
}

// ==========================================
// 보기 카드(오리기 카드) HTML 생성
// ==========================================
function renderChoiceCardsHtml(probState, pIndex) {
  return probState.choiceCards
    .map(card => {
      // 이미 빈칸에 놓였는지 확인
      const isPlaced = probState.userSlots.some(slot => slot && slot.choiceNumber === card.choiceNumber);
      const placedClass = isPlaced ? "is-placed" : "";

      return `
        <div class="draggable-card ${placedClass}"
             draggable="${!isPlaced}"
             data-problem="${pIndex}"
             data-choice-number="${card.choiceNumber}"
             id="choiceCard_${pIndex}_${card.choiceNumber}">
          <div class="card-number-badge">${card.circledNumber}</div>
          <span class="cut-scissor-guide">✂️</span>
          <div class="card-art-box">${getIllustrationSvg(card.svgKey)}</div>
          <div class="card-title">${card.title}</div>
          <div class="card-desc">${card.desc}</div>
        </div>
      `;
    })
    .join("");
}

// ==========================================
// 정답 해설 텍스트 생성
// ==========================================
function getAnswerExplanationText(probState) {
  const raw = probState.raw;
  // 올바른 순서는 middleSteps의 order 기준
  const sortedSteps = [...raw.middleSteps].sort((a, b) => a.order - b.order);

  const answerOrderNumbers = sortedSteps.map(step => {
    // 해당 step이 choiceCards에서 몇 번 카드로 지정되었는지 탐색
    const found = probState.choiceCards.find(c => c.order === step.order);
    return found ? `${found.circledNumber} ${found.title}` : step.title;
  });

  return `1단계: ${raw.startStep.title} ➔ ${answerOrderNumbers.join(" ➔ ")} ➔ 마지막: ${raw.endStep.title}`;
}

// ==========================================
// 인터랙션 이벤트 바인딩 (드래그 앤 드롭 + 입력)
// ==========================================
function bindInteractiveEvents() {
  // 1. 번호 직접 입력 필드 이벤트
  document.querySelectorAll(".number-input-field").forEach(input => {
    input.addEventListener("input", e => {
      const pIndex = parseInt(e.target.dataset.problem);
      const sIndex = parseInt(e.target.dataset.slot);
      let val = e.target.value.trim();

      if (!val) {
        state.problems[pIndex].userSlots[sIndex] = null;
        renderSingleProblem(pIndex);
        return;
      }

      // 동그라미 번호(①, ②...) 및 일반 숫자(1, 2...) 모두 호환
      const circleMap = { "①": 1, "②": 2, "③": 3, "④": 4, "⑤": 5, "⑥": 6, "⑦": 7 };
      let num = circleMap[val] || parseInt(val);

      if (isNaN(num)) {
        e.target.value = "";
        return;
      }

      // 해당 번호의 카드 찾기
      const targetCard = state.problems[pIndex].choiceCards.find(c => c.choiceNumber === num);
      if (targetCard) {
        // 이미 다른 슬롯에 배치되어 있다면 해당 슬롯 비우기
        const existingIdx = state.problems[pIndex].userSlots.findIndex(c => c && c.choiceNumber === num);
        if (existingIdx !== -1 && existingIdx !== sIndex) {
          state.problems[pIndex].userSlots[existingIdx] = null;
        }

        state.problems[pIndex].userSlots[sIndex] = targetCard;
        SoundEffect.playPlace();
        renderSingleProblem(pIndex);
      }
    });
  });

  // 2. 드래그 앤 드롭 이벤트 (PC)
  document.querySelectorAll(".draggable-card").forEach(cardEl => {
    cardEl.addEventListener("dragstart", e => {
      const pIndex = e.target.dataset.problem;
      const choiceNum = e.target.dataset.choiceNumber;
      e.dataTransfer.setData("text/plain", JSON.stringify({ pIndex, choiceNum }));
      cardEl.style.opacity = "0.5";
    });

    cardEl.addEventListener("dragend", () => {
      cardEl.style.opacity = "";
    });

    // 태블릿/모바일 클릭-투-플레이스 지원
    cardEl.addEventListener("click", () => {
      const pIndex = parseInt(cardEl.dataset.problem);
      const choiceNum = parseInt(cardEl.dataset.choiceNumber);
      const cardObj = state.problems[pIndex].choiceCards.find(c => c.choiceNumber === choiceNum);

      // 이미 배치되어 있다면 무시
      if (cardEl.classList.contains("is-placed")) return;

      // 첫 번째 비어있는 슬롯을 찾아 자동 배치
      const emptySlotIdx = state.problems[pIndex].userSlots.findIndex(slot => slot === null);
      if (emptySlotIdx !== -1) {
        state.problems[pIndex].userSlots[emptySlotIdx] = cardObj;
        SoundEffect.playPlace();
        renderSingleProblem(pIndex);
      }
    });
  });

  // 드롭존(빈칸 슬롯) 이벤트
  document.querySelectorAll(".slot-blank").forEach(slotEl => {
    slotEl.addEventListener("dragover", e => {
      e.preventDefault();
      slotEl.classList.add("dragover");
    });

    slotEl.addEventListener("dragleave", () => {
      slotEl.classList.remove("dragover");
    });

    slotEl.addEventListener("drop", e => {
      e.preventDefault();
      slotEl.classList.remove("dragover");

      try {
        const data = JSON.parse(e.dataTransfer.getData("text/plain"));
        const pIndex = parseInt(data.pIndex);
        const choiceNum = parseInt(data.choiceNum);
        const sIndex = parseInt(slotEl.dataset.slot);

        // 동일 문제의 카드인지 확인
        if (pIndex !== parseInt(slotEl.dataset.problem)) return;

        const cardObj = state.problems[pIndex].choiceCards.find(c => c.choiceNumber === choiceNum);
        if (!cardObj) return;

        // 이미 다른 슬롯에 들어가 있었다면 이전 슬롯 비우기
        const existingIdx = state.problems[pIndex].userSlots.findIndex(c => c && c.choiceNumber === choiceNum);
        if (existingIdx !== -1 && existingIdx !== sIndex) {
          state.problems[pIndex].userSlots[existingIdx] = null;
        }

        state.problems[pIndex].userSlots[sIndex] = cardObj;
        SoundEffect.playPlace();
        renderSingleProblem(pIndex);
      } catch (err) {
        console.error("Drop parsing error", err);
      }
    });
  });
}

// 단일 문제만 효율적으로 다시 렌더링
function renderSingleProblem(pIndex) {
  const probState = state.problems[pIndex];
  const cardNode = document.getElementById(`problemCard_${pIndex}`);
  if (!cardNode) return;

  const trackNode = document.getElementById(`sequenceTrack_${pIndex}`);
  if (trackNode) {
    const raw = probState.raw;
    trackNode.innerHTML = `
      <div class="step-card card-fixed-start">
        <div class="fixed-badge badge-start">🚩 1단계 (시작)</div>
        <div class="card-art-box">${getIllustrationSvg(raw.startStep.svgKey)}</div>
        <div class="card-title">${raw.startStep.title}</div>
        <div class="card-desc">${raw.startStep.desc}</div>
      </div>
      <div class="step-arrow">➔</div>
      ${renderSlotsHtml(probState, pIndex)}
      <div class="step-arrow">➔</div>
      <div class="step-card card-fixed-end">
        <div class="fixed-badge badge-end">🏁 마지막 (완성)</div>
        <div class="card-art-box">${getIllustrationSvg(raw.endStep.svgKey)}</div>
        <div class="card-title">${raw.endStep.title}</div>
        <div class="card-desc">${raw.endStep.desc}</div>
      </div>
    `;
  }

  const choiceGridNode = document.getElementById(`choiceGrid_${pIndex}`);
  if (choiceGridNode) {
    choiceGridNode.innerHTML = renderChoiceCardsHtml(probState, pIndex);
  }

  bindInteractiveEvents();
}

// 빈칸에 놓인 카드를 다시 보기함으로 돌려보내기
window.returnCardToTray = function (pIndex, sIndex) {
  state.problems[pIndex].userSlots[sIndex] = null;
  SoundEffect.playPlace();
  renderSingleProblem(pIndex);
};

// ==========================================
// 채점 기능 (Check Answers)
// ==========================================
window.checkAnswers = function () {
  let allCorrect = true;
  let hasIncomplete = false;

  state.problems.forEach((probState, pIndex) => {
    const fbBox = document.getElementById(`feedback_${pIndex}`);
    const blankCount = probState.raw.blankCount;
    const slots = probState.userSlots;

    // 빈칸이 아직 덜 채워졌는지 확인
    const isFilled = slots.every(s => s !== null);
    if (!isFilled) {
      hasIncomplete = true;
      allCorrect = false;
      if (fbBox) {
        fbBox.className = "feedback-box wrong";
        fbBox.innerHTML = `⚠️ 아직 빈칸이 모두 채워지지 않았어요. 카드를 놓거나 번호를 적어보세요!`;
      }
      return;
    }

    // 순서 검증 (각 카드의 실제 order가 1, 2, 3... 순서인지)
    let isCurrentCorrect = true;
    for (let i = 0; i < blankCount; i++) {
      if (slots[i].order !== i + 1) {
        isCurrentCorrect = false;
        break;
      }
    }

    if (fbBox) {
      if (isCurrentCorrect) {
        fbBox.className = "feedback-box correct";
        fbBox.innerHTML = `🎉 <strong>참 잘했어요!</strong> ${probState.raw.title}의 순서를 정확하게 맞혔습니다! 👏`;
      } else {
        fbBox.className = "feedback-box wrong";
        fbBox.innerHTML = `🤔 아쉬워요! 아직 순서가 어긋난 부분이 있어요. 앞뒤 관계를 다시 생각해보세요.`;
        allCorrect = false;
      }
    }
  });

  if (allCorrect) {
    SoundEffect.playSuccess();
    triggerConfetti();
    alert("🌟 대단해요! 모든 문제의 순서를 완벽하게 맞혔습니다! (참 잘했어요 도장 쾅쾅!)");
  } else if (!hasIncomplete) {
    SoundEffect.playTryAgain();
  }
};

// ==========================================
// 순서 다시 섞기 / 초기화 (Reset)
// ==========================================
window.resetAndShuffle = function () {
  if (confirm("순서를 다시 섞고 처음부터 풀어볼까요?")) {
    loadSession(state.currentSessionId);
  }
};

// ==========================================
// 정답 보기 토글 (교사용 모드)
// ==========================================
window.toggleAnswerMode = function () {
  state.isAnswerMode = !state.isAnswerMode;
  const container = document.getElementById("worksheetContainer");
  const btn = document.getElementById("btnToggleAnswers");

  if (state.isAnswerMode) {
    container.classList.add("show-answers");
    if (btn) btn.innerHTML = `👀 정답 숨기기`;
  } else {
    container.classList.remove("show-answers");
    if (btn) btn.innerHTML = `💡 정답 보기`;
  }
};

// ==========================================
// 인쇄 기능 (Print)
// ==========================================
window.printWorksheet = function () {
  window.print();
};

// ==========================================
// 맞춤형 학습지 생성 모달 및 생성 로직
// ==========================================
window.openCustomGenerator = function () {
  document.getElementById("customModal").classList.add("active");
};

window.closeCustomGenerator = function () {
  document.getElementById("customModal").classList.remove("active");
};

window.generateCustomWorksheet = function () {
  const countSelect = document.querySelector('input[name="problemCount"]:checked');
  const problemCount = countSelect ? parseInt(countSelect.value) : 4;

  // 전체 데이터셋에서 무작위로 N개 선택 (다양한 단계가 골고루 포함되도록)
  const shuffledAll = shuffleArray(WORKBOOK_DATA);
  const selected = shuffledAll.slice(0, problemCount);

  // 커스텀 세션 구성
  document.getElementById("sessionSelector").value = "custom";
  document.getElementById("sheetTitle").innerText = `선생님 맞춤형 순서 워크북 (${problemCount}문제)`;
  document.getElementById("sheetSubtitle").innerText = "다양한 난이도(2~5단계)가 포함된 맞춤형 학습지입니다.";
  document.getElementById("sheetBadge").innerText = `초등 3학년 (${problemCount}문제 세트)`;

  state.currentSessionId = "custom";
  state.problems = selected.map((prob, pIndex) => {
    const rawMiddle = prob.middleSteps.map(step => ({ ...step }));
    let shuffled = shuffleArray(rawMiddle);
    if (shuffled.length > 1 && shuffled.every((item, idx) => item.order === rawMiddle[idx].order)) {
      shuffled.reverse();
    }
    const choiceCards = shuffled.map((card, idx) => ({
      ...card,
      choiceNumber: idx + 1,
      circledNumber: CIRCLED_NUMBERS[idx] || `(${idx + 1})`,
      problemIndex: pIndex
    }));
    return {
      raw: prob,
      problemIndex: pIndex,
      choiceCards: choiceCards,
      userSlots: new Array(prob.blankCount).fill(null),
      isCorrect: null
    };
  });

  renderWorkbook();
  closeCustomGenerator();
};

// ==========================================
// 축하 색종이 파티클 애니메이션 (Canvas Confetti)
// ==========================================
function triggerConfetti() {
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9999";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#ff6b6b", "#f06595", "#cc5de8", "#845ef7", "#5c7cfa", "#339af0", "#22b8cf", "#20c997", "#51cf66", "#94d82d", "#fcc419", "#ff922b"];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.7) * 18,
      color: colors[Math.floor(Math.random() * colors.length)],
      radius: Math.random() * 6 + 3,
      alpha: 1,
      rot: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10
    });
  }

  let startTime = Date.now();
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const elapsed = Date.now() - startTime;
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // 중력
      p.rot += p.vRot;
      p.alpha = Math.max(0, 1 - elapsed / 2500);

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.radius, -p.radius, p.radius * 2, p.radius * 2);
      ctx.restore();
    });

    if (elapsed < 2500) {
      requestAnimationFrame(loop);
    } else {
      canvas.remove();
    }
  }
  loop();
}

// ==========================================
// 문서 준비 시 초기화
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // 차시 변경 드롭다운 이벤트
  const sessionSelector = document.getElementById("sessionSelector");
  if (sessionSelector) {
    sessionSelector.addEventListener("change", e => {
      const val = e.target.value;
      if (val === "custom") {
        openCustomGenerator();
      } else {
        loadSession(val);
      }
    });
  }

  // 라디오 버튼 active 클래스 토글
  document.querySelectorAll('input[name="problemCount"]').forEach(radio => {
    radio.addEventListener("change", e => {
      document.querySelectorAll(".btn-toggle-option").forEach(label => label.classList.remove("active"));
      if (e.target.closest(".btn-toggle-option")) {
        e.target.closest(".btn-toggle-option").classList.add("active");
      }
    });
  });

  // 초기 1차시 로드
  loadSession("session_1");
});
