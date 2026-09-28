/**
 * 학습지용 친근하고 선명한 SVG 벡터 일러스트레이션 렌더러
 * - 외부 이미지 링크 없이 100% 독립 실행 가능
 * - 인쇄 시에도 번짐 없이 고해상도 벡터로 완벽 출력
 */

const ILLUSTRATIONS = {
  // ==========================================
  // [1] 배추흰나비의 한살이
  // ==========================================
  butterfly_egg: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <defs>
        <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8ce99a"/>
          <stop offset="100%" stop-color="#40c057"/>
        </linearGradient>
      </defs>
      <!-- 나뭇잎 -->
      <path d="M15,80 Q20,25 75,20 Q85,55 50,85 Z" fill="url(#leafGrad1)" stroke="#2b8a3e" stroke-width="2.5" />
      <path d="M18,78 Q45,55 75,22" stroke="#2f9e44" stroke-width="2" fill="none" />
      <path d="M35,62 Q45,68 55,68" stroke="#2f9e44" stroke-width="1.5" fill="none" />
      <path d="M48,48 Q60,52 68,50" stroke="#2f9e44" stroke-width="1.5" fill="none" />
      <!-- 나비 알들 -->
      <ellipse cx="45" cy="40" rx="4" ry="5.5" fill="#fff9db" stroke="#f59f00" stroke-width="1.2" transform="rotate(-15,45,40)"/>
      <ellipse cx="55" cy="45" rx="3.8" ry="5.2" fill="#fff9db" stroke="#f59f00" stroke-width="1.2" transform="rotate(10,55,45)"/>
      <ellipse cx="40" cy="50" rx="3.5" ry="5" fill="#fff9db" stroke="#f59f00" stroke-width="1.2" transform="rotate(-5,40,50)"/>
      <!-- 빛 반사 -->
      <circle cx="44" cy="38" r="1.2" fill="#ffffff" />
      <circle cx="54" cy="43" r="1.2" fill="#ffffff" />
    </svg>`,

  butterfly_caterpillar: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 갉아먹은 나뭇잎 -->
      <path d="M10,75 Q15,30 60,25 Q70,35 65,45 Q75,55 60,65 Q50,75 80,75 Q40,90 10,75 Z" fill="#b2f2bb" stroke="#37b24d" stroke-width="2" />
      <circle cx="68" cy="35" r="7" fill="#ffffff" />
      <circle cx="73" cy="55" r="9" fill="#ffffff" />
      <!-- 애벌레 몸통 마디마디 -->
      <circle cx="28" cy="58" r="9" fill="#69db7c" stroke="#2b8a3e" stroke-width="1.8"/>
      <circle cx="40" cy="55" r="9" fill="#69db7c" stroke="#2b8a3e" stroke-width="1.8"/>
      <circle cx="52" cy="52" r="9" fill="#69db7c" stroke="#2b8a3e" stroke-width="1.8"/>
      <circle cx="64" cy="50" r="9.5" fill="#8ce99a" stroke="#2b8a3e" stroke-width="1.8"/>
      <!-- 애벌레 머리와 눈 -->
      <circle cx="75" cy="48" r="8" fill="#51cf66" stroke="#2b8a3e" stroke-width="2"/>
      <circle cx="77" cy="46" r="2" fill="#212529" />
      <circle cx="78" cy="45" r="0.7" fill="#ffffff" />
      <path d="M74,52 Q77,55 80,52" stroke="#2b8a3e" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <!-- 발 -->
      <path d="M36,63 L36,68 M48,60 L48,65 M60,58 L60,63" stroke="#2f9e44" stroke-width="2" stroke-linecap="round"/>
    </svg>`,

  butterfly_chrysalis: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 나뭇가지 -->
      <path d="M15,20 Q50,28 90,32" stroke="#865439" stroke-width="6" stroke-linecap="round" fill="none"/>
      <!-- 고치 실 -->
      <line x1="52" y1="28" x2="52" y2="40" stroke="#ced4da" stroke-width="2" />
      <!-- 번데기 몸체 -->
      <path d="M52,38 C42,48 40,65 52,82 C64,65 62,48 52,38 Z" fill="#74c0fc" stroke="#1c7ed6" stroke-width="2"/>
      <!-- 번데기 마디와 날개 윤곽 -->
      <path d="M47,52 Q52,56 57,52 M46,62 Q52,66 58,62 M48,71 Q52,74 56,71" stroke="#1971c2" stroke-width="1.5" fill="none"/>
      <!-- 작은 잎사귀 장식 -->
      <path d="M30,23 Q35,12 45,18 Q38,25 30,23 Z" fill="#69db7c" stroke="#2b8a3e" stroke-width="1.5"/>
    </svg>`,

  butterfly_adult: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 꽃 한 송이 배경 -->
      <circle cx="50" cy="85" r="10" fill="#ffd43b" stroke="#f59f00" stroke-width="1.5"/>
      <!-- 나비 날개 (배추흰나비: 상아빛+검은 점) -->
      <!-- 왼쪽 윗날개 -->
      <path d="M48,45 C25,18 10,35 22,60 C32,65 46,55 48,45 Z" fill="#f8f9fa" stroke="#adb5bd" stroke-width="2"/>
      <!-- 오른쪽 윗날개 -->
      <path d="M52,45 C75,18 90,35 78,60 C68,65 54,55 52,45 Z" fill="#f8f9fa" stroke="#adb5bd" stroke-width="2"/>
      <!-- 왼쪽 아랫날개 -->
      <path d="M48,52 C30,55 25,72 40,78 C46,75 48,60 48,52 Z" fill="#e9ecef" stroke="#adb5bd" stroke-width="1.8"/>
      <!-- 오른쪽 아랫날개 -->
      <path d="M52,52 C70,55 75,72 60,78 C54,75 52,60 52,52 Z" fill="#e9ecef" stroke="#adb5bd" stroke-width="1.8"/>
      <!-- 날개 검은 반점 -->
      <circle cx="28" cy="42" r="3.2" fill="#495057" />
      <circle cx="72" cy="42" r="3.2" fill="#495057" />
      <!-- 나비 몸통과 머리 -->
      <ellipse cx="50" cy="55" rx="3" ry="12" fill="#343a40" />
      <circle cx="50" cy="40" r="3.5" fill="#343a40" />
      <!-- 더듬이 -->
      <path d="M48,38 Q42,28 38,30 M52,38 Q58,28 62,30" stroke="#343a40" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    </svg>`,

  // ==========================================
  // [2] 투명 페트병 분리배출
  // ==========================================
  recycle_bottle: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 음료 남은 페트병 -->
      <rect x="36" y="20" width="28" height="10" rx="3" fill="#339af0" stroke="#1c7ed6" stroke-width="2"/>
      <path d="M42,30 L40,40 L35,48 L35,80 Q35,85 50,85 Q65,85 65,80 L65,48 L60,40 L58,30 Z" fill="#e7f5ff" stroke="#4dabf7" stroke-width="2"/>
      <!-- 비닐 라벨 -->
      <rect x="35" y="52" width="30" height="18" fill="#ffec99" stroke="#fab005" stroke-width="1.5"/>
      <text x="50" y="64" font-size="7" font-weight="bold" fill="#e67700" text-anchor="middle">JUICE</text>
      <!-- 잔여 음료 -->
      <path d="M36,75 Q50,77 64,75 L64,80 Q50,84 36,80 Z" fill="#ff922b" />
    </svg>`,

  recycle_rinse: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 수도꼭지 -->
      <path d="M25,25 L48,25 L48,38 L42,38 L42,30 L25,30 Z" fill="#868e96" stroke="#495057" stroke-width="1.5"/>
      <ellipse cx="45" cy="38" rx="4" ry="2" fill="#adb5bd" />
      <!-- 떨어지는 물줄기 -->
      <path d="M43,40 Q47,55 45,70 M47,40 Q43,55 46,70" stroke="#339af0" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4,2"/>
      <circle cx="41" cy="50" r="2" fill="#74c0fc"/>
      <circle cx="51" cy="58" r="1.5" fill="#74c0fc"/>
      <!-- 물 받는 페트병 -->
      <path d="M38,60 L35,82 Q50,86 65,82 L62,60 Z" fill="#e7f5ff" stroke="#4dabf7" stroke-width="2"/>
      <!-- 깨끗한 물 차오름 -->
      <path d="M36,72 Q50,76 64,72 L64,82 Q50,85 36,82 Z" fill="#a5d8ff"/>
      <text x="50" y="94" font-size="7" font-weight="bold" fill="#1c7ed6" text-anchor="middle">물로 헹궈요!</text>
    </svg>`,

  recycle_peel: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 페트병 몸통 -->
      <rect x="40" y="24" width="20" height="58" rx="6" fill="#e7f5ff" stroke="#4dabf7" stroke-width="2"/>
      <!-- 뜯겨 나가는 라벨 -->
      <path d="M38,45 L62,45 L62,62 L38,62 Z" fill="#ffec99" stroke="#fab005" stroke-width="1.5"/>
      <path d="M62,45 C75,40 85,55 72,68 C66,66 62,64 62,62 Z" fill="#ffe066" stroke="#f59f00" stroke-width="1.8"/>
      <!-- 점선(뜯는 곳) -->
      <line x1="62" y1="44" x2="62" y2="63" stroke="#e03131" stroke-width="1.8" stroke-dasharray="2,2"/>
      <text x="75" y="58" font-size="6" font-weight="bold" fill="#d9480f">찌익~</text>
      <!-- 손가락 모양 표시 -->
      <circle cx="78" cy="62" r="5" fill="#ffd8a8" stroke="#fd7e14" stroke-width="1"/>
    </svg>`,

  recycle_bin: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 재활용 분리수거함 -->
      <rect x="25" y="38" width="50" height="50" rx="8" fill="#4dabf7" stroke="#1864ab" stroke-width="2.5"/>
      <rect x="20" y="32" width="60" height="9" rx="3" fill="#339af0" stroke="#1864ab" stroke-width="2"/>
      <!-- 재활용 마크 (세 화살표 순환) -->
      <path d="M50,48 L56,58 L44,58 Z" fill="#ffffff"/>
      <circle cx="50" cy="62" r="10" fill="none" stroke="#ffffff" stroke-width="3" stroke-dasharray="14,6"/>
      <!-- 들어가는 투명 페트병 -->
      <rect x="44" y="14" width="12" height="22" rx="3" fill="#e7f5ff" stroke="#1c7ed6" stroke-width="1.8" transform="rotate(15,50,25)"/>
      <text x="50" y="81" font-size="7.5" font-weight="bold" fill="#ffffff" text-anchor="middle">투명페트병</text>
    </svg>`,

  // ==========================================
  // [3] 영양 만점 샌드위치 만들기
  // ==========================================
  sandwich_bread: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 도마 -->
      <rect x="15" y="60" width="70" height="22" rx="4" fill="#d8b28a" stroke="#865439" stroke-width="2"/>
      <!-- 식빵 한 장 -->
      <path d="M30,35 C30,25 40,22 50,22 C60,22 70,25 70,35 C74,48 70,62 68,64 L32,64 C30,62 26,48 30,35 Z" fill="#fff9db" stroke="#e67700" stroke-width="2.5"/>
      <!-- 식빵 테두리 구움색 -->
      <path d="M34,37 C34,29 42,26 50,26 C58,26 66,29 66,37" fill="none" stroke="#fcc419" stroke-width="2"/>
    </svg>`,

  sandwich_spread: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 식빵 -->
      <path d="M30,35 C30,25 40,22 50,22 C60,22 70,25 70,35 C74,48 70,62 68,64 L32,64 C30,62 26,48 30,35 Z" fill="#fff9db" stroke="#e67700" stroke-width="2.5"/>
      <!-- 빨간 딸기잼 바르기 -->
      <path d="M36,36 Q50,30 62,38 Q65,52 58,58 Q42,60 38,54 Z" fill="#ff8787" stroke="#e03131" stroke-width="1.5"/>
      <!-- 버터 나이프 -->
      <path d="M22,75 L52,42 L58,46 L28,80 Z" fill="#dee2e6" stroke="#495057" stroke-width="1.8"/>
      <rect x="18" y="74" width="12" height="6" rx="2" fill="#ff922b" stroke="#d9480f" stroke-width="1.5" transform="rotate(40,24,77)"/>
    </svg>`,

  sandwich_toppings: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 빵 베이스 -->
      <ellipse cx="50" cy="70" rx="30" ry="12" fill="#ffe8cc" stroke="#d9480f" stroke-width="2"/>
      <!-- 햄 & 치즈 -->
      <path d="M28,64 L65,55 L72,66 Z" fill="#ffd43b" stroke="#f59f00" stroke-width="2"/> <!-- 치즈 뾰족 -->
      <ellipse cx="48" cy="62" rx="26" ry="9" fill="#ff8787" stroke="#c92a2a" stroke-width="2"/> <!-- 햄 -->
      <!-- 싱싱한 토마토 2조각 -->
      <ellipse cx="38" cy="52" rx="12" ry="7" fill="#ff6b6b" stroke="#c92a2a" stroke-width="2"/>
      <ellipse cx="58" cy="50" rx="12" ry="7" fill="#ff6b6b" stroke="#c92a2a" stroke-width="2"/>
      <!-- 초록 양상추 -->
      <path d="M25,58 Q35,42 50,48 Q65,40 75,52 Q50,62 25,58 Z" fill="#69db7c" stroke="#2b8a3e" stroke-width="2"/>
    </svg>`,

  sandwich_done: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 완성된 삼각형 샌드위치 2개 -->
      <path d="M20,70 L50,22 L75,70 Z" fill="#fff9db" stroke="#e67700" stroke-width="2.5"/>
      <path d="M25,68 L50,28 L70,68 Z" fill="#ffe8cc"/>
      <!-- 층층이 보이는 단면 (치즈, 햄, 양상추, 토마토) -->
      <path d="M27,65 L68,65" stroke="#40c057" stroke-width="3" stroke-linecap="round"/>
      <path d="M30,60 L65,60" stroke="#fa5252" stroke-width="3" stroke-linecap="round"/>
      <path d="M33,55 L62,55" stroke="#fcc419" stroke-width="3" stroke-linecap="round"/>
      <path d="M36,50 L59,50" stroke="#ff8787" stroke-width="3" stroke-linecap="round"/>
      <!-- 장식 픽(꼬치) -->
      <line x1="50" y1="12" x2="50" y2="28" stroke="#e03131" stroke-width="2.5"/>
      <circle cx="50" cy="12" r="3.5" fill="#e03131"/>
      <text x="50" y="90" font-size="7" font-weight="bold" fill="#d9480f" text-anchor="middle">얌얌! 완성</text>
    </svg>`,

  // ==========================================
  // [4] 개구리의 성장 과정
  // ==========================================
  frog_eggs: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 물속 배경과 수초 -->
      <rect x="0" y="0" width="100" height="100" fill="#e7f5ff" rx="10"/>
      <path d="M15,90 Q22,45 18,10 M28,95 Q35,60 32,30" stroke="#51cf66" stroke-width="3" fill="none"/>
      <!-- 투명 젤리 알 덩어리 -->
      <ellipse cx="60" cy="55" rx="26" ry="20" fill="#d0ebff" opacity="0.8" stroke="#74c0fc" stroke-width="2"/>
      <!-- 까만 알맹이들 -->
      <circle cx="50" cy="48" r="4" fill="#212529"/> <circle cx="48" cy="46" r="1.2" fill="#ffffff"/>
      <circle cx="65" cy="46" r="4.2" fill="#212529"/> <circle cx="63" cy="44" r="1.2" fill="#ffffff"/>
      <circle cx="58" cy="58" r="4.5" fill="#212529"/> <circle cx="56" cy="56" r="1.2" fill="#ffffff"/>
      <circle cx="72" cy="59" r="3.8" fill="#212529"/> <circle cx="70" cy="57" r="1.2" fill="#ffffff"/>
      <circle cx="46" cy="62" r="4" fill="#212529"/> <circle cx="44" cy="60" r="1.2" fill="#ffffff"/>
    </svg>`,

  frog_tadpole1: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <rect x="0" y="0" width="100" height="100" fill="#e7f5ff" rx="10"/>
      <!-- 물결선 -->
      <path d="M10,25 Q30,20 50,25 T90,25" stroke="#a5d8ff" stroke-width="2" fill="none"/>
      <!-- 올챙이 머리 & 꼬리 -->
      <ellipse cx="40" cy="52" rx="16" ry="13" fill="#495057" stroke="#212529" stroke-width="2"/>
      <path d="M52,52 Q72,42 88,58 Q72,62 50,56 Z" fill="#868e96" stroke="#495057" stroke-width="1.8"/>
      <!-- 눈 & 미소 -->
      <circle cx="34" cy="47" r="3" fill="#ffffff"/>
      <circle cx="33" cy="47" r="1.8" fill="#000000"/>
      <path d="M28,55 Q34,60 38,55" stroke="#ffffff" stroke-width="1.5" fill="none"/>
    </svg>`,

  frog_tadpole2: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <rect x="0" y="0" width="100" height="100" fill="#e7f5ff" rx="10"/>
      <!-- 꼬리 -->
      <path d="M50,52 Q72,40 88,54 Q70,62 48,56 Z" fill="#69db7c" stroke="#2b8a3e" stroke-width="1.8"/>
      <!-- 몸통 -->
      <ellipse cx="38" cy="52" rx="16" ry="13" fill="#51cf66" stroke="#2b8a3e" stroke-width="2"/>
      <!-- 뒷다리 쑥! -->
      <path d="M46,58 L52,70 L60,70 M46,46 L52,34 L60,34" stroke="#2b8a3e" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- 눈 -->
      <circle cx="32" cy="46" r="3.2" fill="#ffffff"/>
      <circle cx="31" cy="46" r="1.8" fill="#000000"/>
      <text x="66" y="82" font-size="6.5" font-weight="bold" fill="#2b8a3e">뒷다리 쑥!</text>
    </svg>`,

  frog_froglet: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <rect x="0" y="0" width="100" height="100" fill="#e7f5ff" rx="10"/>
      <!-- 줄어든 꼬리 -->
      <path d="M54,54 Q68,52 74,58 Q66,62 52,58 Z" fill="#69db7c" stroke="#2b8a3e" stroke-width="1.5"/>
      <!-- 몸통 -->
      <ellipse cx="40" cy="52" rx="16" ry="14" fill="#51cf66" stroke="#2b8a3e" stroke-width="2"/>
      <!-- 앞다리와 뒷다리 모두 나옴 -->
      <path d="M46,60 L56,72 L64,72" stroke="#2b8a3e" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M34,60 L32,72 L26,72" stroke="#2b8a3e" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- 볼록 눈 -->
      <circle cx="32" cy="42" r="5" fill="#40c057" stroke="#2b8a3e" stroke-width="1.5"/>
      <circle cx="32" cy="42" r="2.5" fill="#000000"/>
      <text x="50" y="90" font-size="6.5" font-weight="bold" fill="#2b8a3e" text-anchor="middle">앞다리 쏙!</text>
    </svg>`,

  frog_adult: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 연잎 -->
      <ellipse cx="50" cy="80" rx="42" ry="14" fill="#69db7c" stroke="#2b8a3e" stroke-width="2"/>
      <path d="M50,80 L88,72" stroke="#2f9e44" stroke-width="1.5"/>
      <!-- 어른 개구리 몸통 & 배 -->
      <ellipse cx="50" cy="54" rx="20" ry="18" fill="#51cf66" stroke="#2b8a3e" stroke-width="2.5"/>
      <ellipse cx="50" cy="58" rx="13" ry="11" fill="#d3f9d8"/>
      <!-- 눈 2개 -->
      <circle cx="40" cy="38" r="7" fill="#51cf66" stroke="#2b8a3e" stroke-width="2"/>
      <circle cx="40" cy="38" r="3.5" fill="#000000"/>
      <circle cx="39" cy="36" r="1.2" fill="#ffffff"/>
      <circle cx="60" cy="38" r="7" fill="#51cf66" stroke="#2b8a3e" stroke-width="2"/>
      <circle cx="60" cy="38" r="3.5" fill="#000000"/>
      <circle cx="59" cy="36" r="1.2" fill="#ffffff"/>
      <!-- 활짝 웃는 입 & 볼터치 -->
      <path d="M42,52 Q50,60 58,52" stroke="#237032" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="36" cy="54" r="3" fill="#ff8787" opacity="0.6"/>
      <circle cx="64" cy="54" r="3" fill="#ff8787" opacity="0.6"/>
    </svg>`,

  // ==========================================
  // [5] 치카치카 3분 양치질 순서
  // ==========================================
  teeth_paste: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 칫솔 손잡이와 솔 -->
      <path d="M20,68 L55,52 L62,56 L24,76 Z" fill="#4dabf7" stroke="#1c7ed6" stroke-width="2"/>
      <rect x="58" y="46" width="22" height="10" rx="2" fill="#ffffff" stroke="#adb5bd" stroke-width="1.8" transform="rotate(-25,68,51)"/>
      <!-- 칫솔 솔 결 -->
      <line x1="62" y1="46" x2="72" y2="42" stroke="#74c0fc" stroke-width="1.5"/>
      <!-- 치약 똑! (완두콩 크기) -->
      <ellipse cx="68" cy="40" rx="8" ry="5" fill="#38d9a9" stroke="#0ca678" stroke-width="1.8" transform="rotate(-15,68,40)"/>
      <path d="M74,38 Q80,34 76,42" fill="#38d9a9"/>
      <text x="50" y="88" font-size="7" font-weight="bold" fill="#1c7ed6" text-anchor="middle">치약 적당히</text>
    </svg>`,

  teeth_front: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 활짝 웃는 입술과 이빨 -->
      <path d="M20,45 Q50,78 80,45 Q50,30 20,45 Z" fill="#ff8787" stroke="#e03131" stroke-width="2"/>
      <!-- 이빨 겉면 -->
      <rect x="34" y="44" width="8" height="12" rx="2" fill="#ffffff" stroke="#ced4da" stroke-width="1"/>
      <rect x="42" y="43" width="8" height="13" rx="2" fill="#ffffff" stroke="#ced4da" stroke-width="1"/>
      <rect x="50" y="43" width="8" height="13" rx="2" fill="#ffffff" stroke="#ced4da" stroke-width="1"/>
      <rect x="58" y="44" width="8" height="12" rx="2" fill="#ffffff" stroke="#ced4da" stroke-width="1"/>
      <!-- 칫솔질 둥글게 원 표시 -->
      <circle cx="48" cy="50" r="14" fill="none" stroke="#228be6" stroke-width="2.5" stroke-dasharray="6,4"/>
      <text x="50" y="88" font-size="7" font-weight="bold" fill="#228be6" text-anchor="middle">동글동글 바깥쪽</text>
    </svg>`,

  teeth_inside: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 입 안쪽 어금니 뷰 -->
      <ellipse cx="50" cy="50" rx="35" ry="25" fill="#ffa8a8" stroke="#e03131" stroke-width="2"/>
      <!-- 어금니 행렬 -->
      <circle cx="28" cy="45" r="5" fill="#ffffff" stroke="#ced4da" stroke-width="1.5"/>
      <circle cx="34" cy="56" r="5" fill="#ffffff" stroke="#ced4da" stroke-width="1.5"/>
      <circle cx="72" cy="45" r="5" fill="#ffffff" stroke="#ced4da" stroke-width="1.5"/>
      <circle cx="66" cy="56" r="5" fill="#ffffff" stroke="#ced4da" stroke-width="1.5"/>
      <!-- 쓸어올리는 화살표 칫솔질 -->
      <path d="M42,66 L42,42 M42,42 L38,48 M42,42 L46,48" stroke="#1c7ed6" stroke-width="3" stroke-linecap="round"/>
      <path d="M58,66 L58,42 M58,42 L54,48 M58,42 L62,48" stroke="#1c7ed6" stroke-width="3" stroke-linecap="round"/>
      <text x="50" y="90" font-size="7" font-weight="bold" fill="#1c7ed6" text-anchor="middle">안쪽 쓸어올리기</text>
    </svg>`,

  teeth_tongue: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 혀 내민 입 -->
      <path d="M25,40 Q50,30 75,40 Q50,60 25,40 Z" fill="#fa5252" stroke="#c92a2a" stroke-width="2"/>
      <!-- 쑥 내민 혓바닥 -->
      <path d="M38,46 C38,68 62,68 62,46 Z" fill="#ff8787" stroke="#e03131" stroke-width="2"/>
      <line x1="50" y1="48" x2="50" y2="60" stroke="#fa5252" stroke-width="2"/>
      <!-- 위에서 아래로 쓸어내리는 칫솔 -->
      <rect x="42" y="32" width="16" height="8" rx="2" fill="#74c0fc" stroke="#1c7ed6" stroke-width="1.5"/>
      <path d="M50,22 L50,32" stroke="#1c7ed6" stroke-width="3"/>
      <path d="M50,62 L50,74 M46,70 L50,74 L54,70" stroke="#e03131" stroke-width="2.5" stroke-linecap="round"/>
      <text x="50" y="88" font-size="7" font-weight="bold" fill="#d6336c" text-anchor="middle">혓바닥 쓱싹</text>
    </svg>`,

  teeth_rinse: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 양치컵과 물 -->
      <path d="M30,35 L34,75 Q50,80 66,75 L70,35 Z" fill="#e7f5ff" stroke="#339af0" stroke-width="2.5"/>
      <path d="M33,48 Q50,52 67,48 L65,74 Q50,78 35,74 Z" fill="#74c0fc"/>
      <!-- 손잡이 -->
      <path d="M70,42 Q82,55 68,68" fill="none" stroke="#339af0" stroke-width="2.5" stroke-linecap="round"/>
      <!-- 반짝이는 별 효과 (깨끗함) -->
      <path d="M50,18 L52,24 L58,26 L52,28 L50,34 L48,28 L42,26 L48,24 Z" fill="#ffd43b"/>
      <circle cx="26" cy="28" r="3" fill="#69db7c"/>
      <text x="50" y="92" font-size="7" font-weight="bold" fill="#1864ab" text-anchor="middle">3번 이상 헹궈요!</text>
    </svg>`,

  // ==========================================
  // [6] 횡단보도 안전하게 건너기
  // ==========================================
  traffic_stop: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 인도와 노란 안전선 -->
      <rect x="0" y="60" width="100" height="40" fill="#adb5bd"/>
      <rect x="0" y="54" width="100" height="10" fill="#ffd43b" stroke="#f59f00" stroke-width="1.5"/>
      <!-- 발자국 멈춤 스티커 -->
      <ellipse cx="44" cy="74" rx="4" ry="7" fill="#495057"/>
      <ellipse cx="56" cy="74" rx="4" ry="7" fill="#495057"/>
      <!-- 빨간 멈춤 손바닥 마크 -->
      <circle cx="50" cy="30" r="16" fill="#ff6b6b" stroke="#c92a2a" stroke-width="2"/>
      <rect x="42" y="24" width="16" height="12" rx="2" fill="#ffffff"/>
      <text x="50" y="33" font-size="9" font-weight="bold" fill="#c92a2a" text-anchor="middle">STOP</text>
    </svg>`,

  traffic_green: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 보행자 신호등 함 -->
      <rect x="32" y="10" width="36" height="70" rx="8" fill="#343a40" stroke="#212529" stroke-width="2"/>
      <!-- 위쪽 빨간불(꺼짐) -->
      <circle cx="50" cy="30" r="12" fill="#495057"/>
      <!-- 아래쪽 초록불(켜짐!) -->
      <circle cx="50" cy="60" r="14" fill="#51cf66" stroke="#2b8a3e" stroke-width="2"/>
      <!-- 걷는 사람 모양 픽토그램 -->
      <circle cx="50" cy="53" r="2.5" fill="#ffffff"/>
      <path d="M50,56 L50,63 L45,70 M50,63 L55,70 M46,60 L54,58" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/>
      <text x="50" y="93" font-size="7" font-weight="bold" fill="#2b8a3e" text-anchor="middle">초록불 확인!</text>
    </svg>`,

  traffic_look: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 살피는 어린이 얼굴과 큰 눈 -->
      <circle cx="50" cy="50" r="24" fill="#ffe8cc" stroke="#fd7e14" stroke-width="2"/>
      <!-- 모자 -->
      <path d="M26,42 Q50,22 74,42 Z" fill="#ffd43b" stroke="#f59f00" stroke-width="2"/>
      <rect x="22" y="40" width="56" height="5" rx="2" fill="#f59f00"/>
      <!-- 좌우 살피는 화살표 양방향 -->
      <path d="M22,65 L10,65 M14,60 L10,65 L14,70" stroke="#e03131" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M78,65 L90,65 M86,60 L90,65 L86,70" stroke="#e03131" stroke-width="2.5" stroke-linecap="round"/>
      <!-- 눈 모양 -->
      <circle cx="42" cy="50" r="4" fill="#ffffff" stroke="#495057" stroke-width="1.5"/>
      <circle cx="40" cy="50" r="2" fill="#212529"/>
      <circle cx="58" cy="50" r="4" fill="#ffffff" stroke="#495057" stroke-width="1.5"/>
      <circle cx="60" cy="50" r="2" fill="#212529"/>
      <text x="50" y="88" font-size="6.5" font-weight="bold" fill="#d9480f" text-anchor="middle">왼쪽·오른쪽 살피기</text>
    </svg>`,

  traffic_hand: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 번쩍 든 손 -->
      <path d="M42,65 L42,32 Q42,28 46,28 Q50,28 50,32 L50,45" stroke="#fd7e14" stroke-width="4" stroke-linecap="round" fill="none"/>
      <rect x="36" y="55" width="28" height="25" rx="6" fill="#ffe8cc" stroke="#fd7e14" stroke-width="2"/>
      <!-- 다섯 손가락 쫙 편 모양 -->
      <path d="M40,55 L40,30 M47,55 L47,25 M54,55 L54,27 M61,55 L61,33" stroke="#fd7e14" stroke-width="4" stroke-linecap="round"/>
      <!-- 운전자에게 알림 광선 -->
      <path d="M25,22 L15,15 M75,22 L85,15 M50,15 L50,6" stroke="#fcc419" stroke-width="3" stroke-linecap="round"/>
      <text x="50" y="92" font-size="7" font-weight="bold" fill="#e8590c" text-anchor="middle">손 번쩍 들기!</text>
    </svg>`,

  traffic_cross: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 아스팔트와 흰색 횡단보도 줄무늬 -->
      <rect x="0" y="0" width="100" height="100" fill="#495057" rx="10"/>
      <rect x="15" y="15" width="70" height="12" fill="#ffffff" rx="2"/>
      <rect x="15" y="38" width="70" height="12" fill="#ffffff" rx="2"/>
      <rect x="15" y="61" width="70" height="12" fill="#ffffff" rx="2"/>
      <rect x="15" y="84" width="70" height="12" fill="#ffffff" rx="2"/>
      <!-- 씩씩하게 건너는 노란 가방 어린이 -->
      <circle cx="50" cy="40" r="10" fill="#ffe8cc"/>
      <path d="M42,48 L58,48 L55,70 L45,70 Z" fill="#339af0"/>
      <rect x="52" y="48" width="8" height="14" rx="3" fill="#ffd43b"/> <!-- 노란 책가방 -->
    </svg>`,

  // ==========================================
  // [7] 종이 개구리 접기
  // ==========================================
  origami_paper: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 색종이 -->
      <rect x="25" y="25" width="50" height="50" rx="2" fill="#69db7c" stroke="#2b8a3e" stroke-width="2.5"/>
      <!-- 대각선 접기 점선 가이드 -->
      <line x1="25" y1="25" x2="75" y2="75" stroke="#ffffff" stroke-width="2" stroke-dasharray="4,3"/>
      <line x1="25" y1="75" x2="75" y2="25" stroke="#ffffff" stroke-width="2" stroke-dasharray="4,3"/>
      <text x="50" y="88" font-size="7" font-weight="bold" fill="#2b8a3e" text-anchor="middle">초록 색종이</text>
    </svg>`,

  origami_triangle: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 삼각주머니 형태 -->
      <path d="M20,68 L50,22 L80,68 Z" fill="#51cf66" stroke="#2b8a3e" stroke-width="2.5"/>
      <path d="M35,68 L50,45 L65,68 Z" fill="#40c057"/>
      <!-- 접힌 입체감 선 -->
      <line x1="50" y1="22" x2="50" y2="68" stroke="#ffffff" stroke-width="1.8" stroke-dasharray="3,2"/>
      <text x="50" y="86" font-size="7" font-weight="bold" fill="#2b8a3e" text-anchor="middle">삼각주머니 접기</text>
    </svg>`,

  origami_legs: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 몸체 -->
      <path d="M30,65 L50,30 L70,65 Z" fill="#51cf66" stroke="#2b8a3e" stroke-width="2"/>
      <!-- 접어 올린 양쪽 다리 모양 -->
      <path d="M30,65 L15,45 L35,50 Z" fill="#69db7c" stroke="#2b8a3e" stroke-width="2"/>
      <path d="M70,65 L85,45 L65,50 Z" fill="#69db7c" stroke="#2b8a3e" stroke-width="2"/>
      <text x="50" y="86" font-size="7" font-weight="bold" fill="#2b8a3e" text-anchor="middle">다리 접어 올리기</text>
    </svg>`,

  origami_fold: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 계단접기 몸통 옆모습 스프링 -->
      <path d="M25,50 L45,35 L70,55 L55,62 L75,72" fill="none" stroke="#2b8a3e" stroke-width="3" stroke-linecap="round"/>
      <circle cx="38" cy="38" r="4" fill="#ffffff" stroke="#212529" stroke-width="1.5"/>
      <circle cx="38" cy="38" r="2" fill="#212529"/>
      <!-- 누르는 손가락 표시 -->
      <path d="M70,30 L70,50" stroke="#f03e3e" stroke-width="3" stroke-linecap="round"/>
      <path d="M66,45 L70,50 L74,45" stroke="#f03e3e" stroke-width="3" stroke-linecap="round"/>
      <text x="50" y="90" font-size="6.5" font-weight="bold" fill="#e03131" text-anchor="middle">톡 누르면 점프!</text>
    </svg>`,

  origami_frog: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 펄쩍 뛰어오른 종이 개구리 -->
      <path d="M30,55 L50,20 L70,55 L50,50 Z" fill="#51cf66" stroke="#2b8a3e" stroke-width="2.5"/>
      <!-- 앞다리, 뒷다리 펼침 -->
      <path d="M30,50 L12,32 L28,40 Z" fill="#69db7c" stroke="#2b8a3e" stroke-width="2"/>
      <path d="M70,50 L88,32 L72,40 Z" fill="#69db7c" stroke="#2b8a3e" stroke-width="2"/>
      <!-- 스티커 눈 -->
      <circle cx="43" cy="28" r="3.5" fill="#ffffff" stroke="#212529" stroke-width="1.5"/>
      <circle cx="43" cy="28" r="1.8" fill="#212529"/>
      <circle cx="57" cy="28" r="3.5" fill="#ffffff" stroke="#212529" stroke-width="1.5"/>
      <circle cx="57" cy="28" r="1.8" fill="#212529"/>
      <!-- 점프 궤적선 -->
      <path d="M30,80 Q50,65 70,80" stroke="#339af0" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <text x="50" y="92" font-size="7" font-weight="bold" fill="#2b8a3e" text-anchor="middle">폴짝! 완성</text>
    </svg>`,

  // ==========================================
  // [8] 강낭콩의 싹틈과 자람
  // ==========================================
  bean_seed: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 화분 흙 단면 -->
      <rect x="10" y="45" width="80" height="48" fill="#795548" rx="4"/>
      <path d="M10,45 Q50,42 90,45" stroke="#5d4037" stroke-width="3" fill="none"/>
      <!-- 흙 속 강낭콩 씨앗 (붉은 갈색 콩) -->
      <path d="M42,60 C38,55 45,50 55,52 C65,54 62,68 52,68 C46,68 44,65 42,60 Z" fill="#c92a2a" stroke="#862e2e" stroke-width="2"/>
      <!-- 배꼽 흰 점 -->
      <ellipse cx="49" cy="60" rx="1.5" ry="3" fill="#ffffff"/>
      <text x="50" y="85" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">강낭콩 씨앗</text>
    </svg>`,

  bean_sprout: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 흙 -->
      <rect x="10" y="55" width="80" height="38" fill="#795548" rx="4"/>
      <!-- 뿌리 아래로 -->
      <path d="M50,65 Q45,75 42,85 M50,72 Q56,80 58,88" stroke="#f1f3f5" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- 고개 든 어린싹 -->
      <path d="M50,65 Q50,48 45,40" stroke="#69db7c" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <!-- 반쯤 벗겨진 콩 껍질과 떡잎 -->
      <ellipse cx="44" cy="38" rx="6" ry="8" fill="#8ce99a" stroke="#2b8a3e" stroke-width="1.8" transform="rotate(-20,44,38)"/>
      <text x="50" y="24" font-size="7" font-weight="bold" fill="#2b8a3e" text-anchor="middle">뿌리와 싹틈</text>
    </svg>`,

  bean_leaves: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <rect x="10" y="70" width="80" height="25" fill="#795548" rx="4"/>
      <!-- 줄기 -->
      <line x1="50" y1="72" x2="50" y2="40" stroke="#40c057" stroke-width="4"/>
      <!-- 떡잎 2장 -->
      <ellipse cx="42" cy="55" rx="7" ry="5" fill="#8ce99a" stroke="#2b8a3e" stroke-width="1.5"/>
      <ellipse cx="58" cy="55" rx="7" ry="5" fill="#8ce99a" stroke="#2b8a3e" stroke-width="1.5"/>
      <!-- 본잎 (하트 모양 큰 잎) -->
      <path d="M50,40 C35,28 30,15 48,16 C50,22 50,35 50,40 Z" fill="#51cf66" stroke="#2b8a3e" stroke-width="2"/>
      <path d="M50,40 C65,28 70,15 52,16 C50,22 50,35 50,40 Z" fill="#51cf66" stroke="#2b8a3e" stroke-width="2"/>
      <text x="50" y="88" font-size="6.5" font-weight="bold" fill="#ffffff" text-anchor="middle">초록 본잎</text>
    </svg>`,

  bean_bud: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 지지대 막대기 -->
      <line x1="45" y1="10" x2="45" y2="90" stroke="#d8b28a" stroke-width="4"/>
      <!-- 덩굴 감긴 줄기 -->
      <path d="M45,85 Q55,70 45,55 Q35,40 45,25 Q50,15 45,10" stroke="#37b24d" stroke-width="3" fill="none"/>
      <!-- 풍성한 잎사귀 -->
      <ellipse cx="30" cy="48" rx="10" ry="7" fill="#51cf66" stroke="#2b8a3e" stroke-width="1.5" transform="rotate(-30,30,48)"/>
      <ellipse cx="60" cy="38" rx="10" ry="7" fill="#51cf66" stroke="#2b8a3e" stroke-width="1.5" transform="rotate(30,60,38)"/>
      <!-- 작고 귀여운 꽃봉오리들 -->
      <circle cx="48" cy="22" r="4" fill="#ffdeeb" stroke="#f06595" stroke-width="1.5"/>
      <circle cx="42" cy="18" r="3.5" fill="#ffdeeb" stroke="#f06595" stroke-width="1.5"/>
      <text x="50" y="94" font-size="6.5" font-weight="bold" fill="#2b8a3e" text-anchor="middle">꽃봉오리 맺힘</text>
    </svg>`,

  bean_flower: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 줄기와 잎 -->
      <path d="M50,85 L50,40" stroke="#37b24d" stroke-width="3.5"/>
      <ellipse cx="30" cy="60" rx="12" ry="8" fill="#51cf66" stroke="#2b8a3e" stroke-width="1.5" transform="rotate(-20,30,60)"/>
      <ellipse cx="70" cy="55" rx="12" ry="8" fill="#51cf66" stroke="#2b8a3e" stroke-width="1.5" transform="rotate(20,70,55)"/>
      <!-- 나비 모양 강낭콩 꽃 활짝! -->
      <!-- 윗꽃잎 (기판) -->
      <ellipse cx="50" cy="28" rx="14" ry="12" fill="#ffc9db" stroke="#e64980" stroke-width="2"/>
      <!-- 날개꽃잎 (익판) -->
      <ellipse cx="42" cy="38" rx="8" ry="7" fill="#ffdeeb" stroke="#e64980" stroke-width="1.8"/>
      <ellipse cx="58" cy="38" rx="8" ry="7" fill="#ffdeeb" stroke="#e64980" stroke-width="1.8"/>
      <!-- 꽃술 노란 점 -->
      <circle cx="50" cy="34" r="2.5" fill="#ffd43b"/>
      <text x="50" y="92" font-size="6.5" font-weight="bold" fill="#d6336c" text-anchor="middle">예쁜 꽃 활짝</text>
    </svg>`,

  bean_pod: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 가지 -->
      <line x1="20" y1="15" x2="80" y2="25" stroke="#865439" stroke-width="4"/>
      <!-- 잎사귀 -->
      <ellipse cx="38" cy="28" rx="12" ry="7" fill="#51cf66" stroke="#2b8a3e" stroke-width="1.5" transform="rotate(10,38,28)"/>
      <!-- 주렁주렁 매달린 통통한 강낭콩 꼬투리 -->
      <path d="M40,24 C45,45 65,65 55,85 C50,75 35,50 38,24 Z" fill="#69db7c" stroke="#2b8a3e" stroke-width="2.5"/>
      <path d="M55,25 C62,45 80,62 70,82 C65,72 50,50 53,25 Z" fill="#8ce99a" stroke="#2b8a3e" stroke-width="2.2"/>
      <!-- 콩 꼬투리 속 볼록한 알맹이 음영 -->
      <circle cx="47" cy="48" r="4" fill="#51cf66" opacity="0.6"/>
      <circle cx="51" cy="62" r="4.2" fill="#51cf66" opacity="0.6"/>
      <text x="50" y="95" font-size="7" font-weight="bold" fill="#2b8a3e" text-anchor="middle">주렁주렁 콩깍지</text>
    </svg>`,

  // ==========================================
  // [9] 올바른 손 씻기 6단계
  // ==========================================
  hands_foam: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 손바닥 마주대고 비비기 -->
      <ellipse cx="44" cy="55" rx="14" ry="18" fill="#ffe8cc" stroke="#fd7e14" stroke-width="2" transform="rotate(-15,44,55)"/>
      <ellipse cx="56" cy="55" rx="14" ry="18" fill="#ffe8cc" stroke="#fd7e14" stroke-width="2" transform="rotate(15,56,55)"/>
      <!-- 몽글몽글 풍성한 비누거품 -->
      <circle cx="50" cy="50" r="7" fill="#ffffff" stroke="#74c0fc" stroke-width="1.8"/>
      <circle cx="40" cy="42" r="5" fill="#ffffff" stroke="#74c0fc" stroke-width="1.5"/>
      <circle cx="60" cy="44" r="5.5" fill="#ffffff" stroke="#74c0fc" stroke-width="1.5"/>
      <circle cx="52" cy="62" r="6" fill="#ffffff" stroke="#74c0fc" stroke-width="1.5"/>
      <text x="50" y="88" font-size="7" font-weight="bold" fill="#1c7ed6" text-anchor="middle">비누 거품 내기</text>
    </svg>`,

  hands_back: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 손등 닦기: 아래 손바닥 위로 다른 손이 올라와 문지름 -->
      <rect x="32" y="38" width="36" height="30" rx="8" fill="#ffe8cc" stroke="#fd7e14" stroke-width="2"/>
      <!-- 위에서 문지르는 손가락 4개 -->
      <line x1="38" y1="28" x2="38" y2="48" stroke="#fd7e14" stroke-width="4" stroke-linecap="round"/>
      <line x1="46" y1="25" x2="46" y2="48" stroke="#fd7e14" stroke-width="4" stroke-linecap="round"/>
      <line x1="54" y1="25" x2="54" y2="48" stroke="#fd7e14" stroke-width="4" stroke-linecap="round"/>
      <line x1="62" y1="28" x2="62" y2="48" stroke="#fd7e14" stroke-width="4" stroke-linecap="round"/>
      <!-- 거품 방울 -->
      <circle cx="48" cy="48" r="4" fill="#ffffff" stroke="#74c0fc" stroke-width="1.5"/>
      <text x="50" y="88" font-size="7" font-weight="bold" fill="#d9480f" text-anchor="middle">손등 문지르기</text>
    </svg>`,

  hands_interlace: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 손가락 깍지 끼기 -->
      <ellipse cx="50" cy="62" rx="22" ry="14" fill="#ffe8cc" stroke="#fd7e14" stroke-width="2"/>
      <!-- 교차된 손가락들 -->
      <path d="M35,62 L32,32 M42,62 L40,28 M50,62 L48,26 M58,62 L56,28 M65,62 L64,32" stroke="#fd7e14" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M38,62 L36,36 M46,62 L44,30 M54,62 L52,28 M62,62 L60,34" stroke="#e8590c" stroke-width="3.5" stroke-linecap="round"/>
      <!-- 거품들 -->
      <circle cx="44" cy="45" r="3.5" fill="#ffffff" stroke="#74c0fc" stroke-width="1.2"/>
      <circle cx="56" cy="46" r="3.5" fill="#ffffff" stroke="#74c0fc" stroke-width="1.2"/>
      <text x="50" y="88" font-size="7" font-weight="bold" fill="#d9480f" text-anchor="middle">손가락 깍지 끼기</text>
    </svg>`,

  hands_thumb: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 엄지손가락을 다른 손으로 감싸 쥐기 -->
      <rect x="42" y="24" width="16" height="38" rx="8" fill="#ffd8a8" stroke="#fd7e14" stroke-width="2"/>
      <!-- 감싼 손바닥과 회전 화살표 -->
      <ellipse cx="50" cy="52" rx="20" ry="14" fill="#ffe8cc" stroke="#e8590c" stroke-width="2"/>
      <path d="M30,36 C25,24 75,24 70,36" fill="none" stroke="#228be6" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M66,32 L70,36 L74,32" fill="none" stroke="#228be6" stroke-width="2.5" stroke-linecap="round"/>
      <text x="50" y="88" font-size="6.5" font-weight="bold" fill="#1c7ed6" text-anchor="middle">엄지손가락 돌려 닦기</text>
    </svg>`,

  hands_nails: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 손바닥 위에 손톱을 세워 긁기 -->
      <rect x="25" y="52" width="50" height="22" rx="6" fill="#ffe8cc" stroke="#fd7e14" stroke-width="2"/>
      <!-- 위에서 모아 세운 손톱 끝 -->
      <path d="M42,25 L44,52 M47,22 L48,52 M53,22 L52,52 M58,25 L56,52" stroke="#fd7e14" stroke-width="3" stroke-linecap="round"/>
      <!-- 손톱 끝 반짝이와 거품 -->
      <circle cx="50" cy="52" r="4" fill="#ffffff" stroke="#74c0fc" stroke-width="1.5"/>
      <path d="M40,54 Q50,58 60,54" stroke="#fa5252" stroke-width="2" fill="none"/>
      <text x="50" y="88" font-size="7" font-weight="bold" fill="#d9480f" text-anchor="middle">손톱 밑 긁어 씻기</text>
    </svg>`,

  hands_rinse: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 수도꼭지와 흐르는 물 -->
      <rect x="38" y="10" width="24" height="12" rx="2" fill="#adb5bd" stroke="#495057" stroke-width="1.8"/>
      <path d="M46,22 L46,45 M54,22 L54,45" stroke="#74c0fc" stroke-width="3" stroke-linecap="round"/>
      <!-- 깨끗해진 두 손과 물방울 -->
      <circle cx="42" cy="62" r="12" fill="#ffe8cc" stroke="#fd7e14" stroke-width="2"/>
      <circle cx="58" cy="62" r="12" fill="#ffe8cc" stroke="#fd7e14" stroke-width="2"/>
      <!-- 반짝 별 -->
      <path d="M30,50 L32,54 L36,55 L32,57 L30,62 L28,57 L24,55 L28,54 Z" fill="#ffd43b"/>
      <path d="M70,50 L72,54 L76,55 L72,57 L70,62 L68,57 L64,55 L68,54 Z" fill="#ffd43b"/>
      <text x="50" y="90" font-size="7" font-weight="bold" fill="#1864ab" text-anchor="middle">뽀득뽀득 완성!</text>
    </svg>`,

  // ==========================================
  // [10] 부지런한 꿀벌의 꿀 만들기
  // ==========================================
  bee_fly: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 나무와 꿀벌 집 -->
      <path d="M10,20 Q40,10 70,25" stroke="#865439" stroke-width="5" fill="none"/>
      <!-- 벌집 둥지 -->
      <path d="M25,22 C20,35 22,50 35,52 C48,50 50,35 45,22 Z" fill="#ffd43b" stroke="#e67700" stroke-width="2"/>
      <circle cx="35" cy="40" r="4" fill="#5c3b1e"/>
      <!-- 날아가는 꿀벌 -->
      <ellipse cx="68" cy="52" rx="10" ry="7" fill="#ffd43b" stroke="#000000" stroke-width="1.5"/>
      <path d="M64,46 L64,58 M70,45 L70,59" stroke="#000000" stroke-width="2.5"/>
      <!-- 날개 -->
      <ellipse cx="64" cy="42" rx="4" ry="6" fill="#e7f5ff" stroke="#74c0fc" stroke-width="1.2" transform="rotate(-20,64,42)"/>
      <text x="50" y="88" font-size="7" font-weight="bold" fill="#e67700" text-anchor="middle">벌집에서 출발!</text>
    </svg>`,

  bee_flowers: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 알록달록 꽃밭 -->
      <circle cx="30" cy="55" r="8" fill="#ff8787" stroke="#e03131" stroke-width="1.5"/>
      <circle cx="30" cy="55" r="3" fill="#ffd43b"/>
      <circle cx="55" cy="65" r="9" fill="#da77f2" stroke="#ae3ec9" stroke-width="1.5"/>
      <circle cx="55" cy="65" r="3" fill="#ffd43b"/>
      <circle cx="75" cy="52" r="8" fill="#ffd43b" stroke="#f59f00" stroke-width="1.5"/>
      <circle cx="75" cy="52" r="3" fill="#ff6b6b"/>
      <!-- 잎사귀들 -->
      <path d="M30,63 L30,85 M55,74 L55,90 M75,60 L75,85" stroke="#40c057" stroke-width="2.5"/>
      <text x="50" y="25" font-size="7" font-weight="bold" fill="#d9480f" text-anchor="middle">향기로운 꽃밭 찾기</text>
    </svg>`,

  bee_gather: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 큰 꽃 -->
      <circle cx="50" cy="50" r="14" fill="#ffd43b" stroke="#f59f00" stroke-width="2"/>
      <ellipse cx="50" cy="24" rx="8" ry="12" fill="#ff8787" stroke="#c92a2a" stroke-width="1.5"/>
      <ellipse cx="50" cy="76" rx="8" ry="12" fill="#ff8787" stroke="#c92a2a" stroke-width="1.5"/>
      <ellipse cx="24" cy="50" rx="12" ry="8" fill="#ff8787" stroke="#c92a2a" stroke-width="1.5"/>
      <ellipse cx="76" cy="50" rx="12" ry="8" fill="#ff8787" stroke="#c92a2a" stroke-width="1.5"/>
      <!-- 꽃에 앉아 꿀 빠는 꿀벌 -->
      <ellipse cx="50" cy="48" rx="9" ry="6" fill="#ffd43b" stroke="#000000" stroke-width="1.5"/>
      <line x1="50" y1="54" x2="50" y2="60" stroke="#000000" stroke-width="2"/> <!-- 빨대 -->
      <!-- 다리에 묻은 노란 꽃가루 경단 -->
      <circle cx="44" cy="54" r="3" fill="#fab005" stroke="#e67700" stroke-width="1"/>
      <circle cx="56" cy="54" r="3" fill="#fab005" stroke="#e67700" stroke-width="1"/>
    </svg>`,

  bee_dance: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 8자 모양 댄스 궤적 -->
      <path d="M50,42 C35,28 35,56 50,42 C65,28 65,56 50,42 Z" fill="none" stroke="#fd7e14" stroke-width="2.5" stroke-dasharray="4,2"/>
      <path d="M54,42 L58,40 M54,42 L56,46" stroke="#fd7e14" stroke-width="2"/>
      <!-- 춤추는 꿀벌 -->
      <ellipse cx="50" cy="42" rx="9" ry="6" fill="#ffd43b" stroke="#000000" stroke-width="1.5"/>
      <!-- 음표 장식 -->
      <text x="24" y="32" font-size="10" fill="#fab005">♪</text>
      <text x="74" y="32" font-size="10" fill="#fab005">♬</text>
      <text x="50" y="85" font-size="7" font-weight="bold" fill="#d9480f" text-anchor="middle">신나는 8자 춤추기</text>
    </svg>`,

  bee_comb: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 육각형 벌집 방들 -->
      <path d="M35,30 L45,24 L55,30 L55,42 L45,48 L35,42 Z" fill="#ffe066" stroke="#f59f00" stroke-width="2"/>
      <path d="M55,30 L65,24 L75,30 L75,42 L65,48 L55,42 Z" fill="#ffd43b" stroke="#f59f00" stroke-width="2"/>
      <path d="M45,48 L55,42 L65,48 L65,60 L55,66 L45,60 Z" fill="#ffe066" stroke="#f59f00" stroke-width="2"/>
      <path d="M25,48 L35,42 L45,48 L45,60 L35,66 L25,60 Z" fill="#ffd43b" stroke="#f59f00" stroke-width="2"/>
      <!-- 벌집 속에 차오른 꿀 -->
      <circle cx="55" cy="54" r="5" fill="#f59f00"/>
      <circle cx="45" cy="36" r="4.5" fill="#f59f00"/>
      <text x="50" y="88" font-size="7" font-weight="bold" fill="#e67700" text-anchor="middle">벌집에 꿀 채우기</text>
    </svg>`,

  bee_honey: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 유리 꿀단지 -->
      <rect x="36" y="24" width="28" height="8" rx="2" fill="#ffd43b" stroke="#f59f00" stroke-width="1.5"/>
      <path d="M35,32 C25,42 25,75 50,75 C75,75 75,42 65,32 Z" fill="#fff3bf" stroke="#fab005" stroke-width="2.5"/>
      <!-- 황금빛 꿀 가득 -->
      <path d="M32,45 C28,55 30,72 50,72 C70,72 72,55 68,45 Z" fill="#ffd43b"/>
      <!-- 꿀봉 (허니 디퍼) -->
      <line x1="50" y1="12" x2="50" y2="46" stroke="#865439" stroke-width="3"/>
      <circle cx="50" cy="38" r="6" fill="#fab005" stroke="#e67700" stroke-width="1.5"/>
      <!-- 똑 떨어지는 꿀방울 -->
      <ellipse cx="50" cy="52" rx="2.5" ry="3.5" fill="#f59f00"/>
      <text x="50" y="92" font-size="7.5" font-weight="bold" fill="#d9480f" text-anchor="middle">달콤한 꿀 완성!</text>
    </svg>`,

  // ==========================================
  // [11] 사과나무의 사계절 성장
  // ==========================================
  apple_winter: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 겨울 눈 내리는 하늘 -->
      <rect x="0" y="0" width="100" height="100" fill="#f1f3f5" rx="10"/>
      <circle cx="20" cy="25" r="2" fill="#adb5bd"/>
      <circle cx="80" cy="30" r="2.5" fill="#adb5bd"/>
      <!-- 앙상한 겨울 나뭇가지 -->
      <path d="M15,80 Q45,65 85,45 M45,65 Q35,40 55,25" stroke="#865439" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- 굳게 닫힌 겨울눈 2개 -->
      <ellipse cx="55" cy="25" rx="3.5" ry="5.5" fill="#5c3b1e" stroke="#3e2723" stroke-width="1.5" transform="rotate(30,55,25)"/>
      <ellipse cx="85" cy="45" rx="3.5" ry="5.5" fill="#5c3b1e" stroke="#3e2723" stroke-width="1.5" transform="rotate(-20,85,45)"/>
      <text x="50" y="90" font-size="7" font-weight="bold" fill="#495057" text-anchor="middle">겨울눈</text>
    </svg>`,

  apple_sprout: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 봄 가지 -->
      <path d="M20,75 Q50,60 80,45" stroke="#865439" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- 돋아나는 연둣빛 새싹과 어린잎 -->
      <path d="M50,60 C42,48 44,35 55,38 C60,45 55,58 50,60 Z" fill="#8ce99a" stroke="#37b24d" stroke-width="2"/>
      <path d="M50,60 C58,48 68,48 68,56 C65,62 55,62 50,60 Z" fill="#b2f2bb" stroke="#37b24d" stroke-width="1.8"/>
      <!-- 햇살 -->
      <circle cx="80" cy="20" r="7" fill="#ffe066" opacity="0.8"/>
      <text x="50" y="90" font-size="7" font-weight="bold" fill="#2b8a3e" text-anchor="middle">봄 새싹 돋음</text>
    </svg>`,

  apple_blossom: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 가지 -->
      <path d="M15,70 Q50,55 85,60" stroke="#865439" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- 사과꽃 (5장 분홍빛 흰 꽃잎) -->
      <circle cx="50" cy="42" r="5" fill="#ffd43b" stroke="#f59f00" stroke-width="1.5"/>
      <circle cx="50" cy="28" r="7.5" fill="#fff0f6" stroke="#f783ac" stroke-width="1.5"/>
      <circle cx="63" cy="38" r="7.5" fill="#fff0f6" stroke="#f783ac" stroke-width="1.5"/>
      <circle cx="58" cy="54" r="7.5" fill="#fff0f6" stroke="#f783ac" stroke-width="1.5"/>
      <circle cx="42" cy="54" r="7.5" fill="#fff0f6" stroke="#f783ac" stroke-width="1.5"/>
      <circle cx="37" cy="38" r="7.5" fill="#fff0f6" stroke="#f783ac" stroke-width="1.5"/>
      <!-- 꽃술 -->
      <circle cx="50" cy="42" r="3" fill="#fab005"/>
      <text x="50" y="90" font-size="7" font-weight="bold" fill="#d6336c" text-anchor="middle">사과꽃 활짝</text>
    </svg>`,

  apple_baby: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 가지와 잎 -->
      <line x1="20" y1="35" x2="80" y2="40" stroke="#865439" stroke-width="4"/>
      <ellipse cx="65" cy="32" rx="10" ry="6" fill="#51cf66" stroke="#2b8a3e" stroke-width="1.5" transform="rotate(-15,65,32)"/>
      <!-- 꽃잎 떨어진 자리의 작은 아기 풋사과 -->
      <line x1="48" y1="38" x2="48" y2="48" stroke="#5c3b1e" stroke-width="2"/>
      <circle cx="48" cy="56" r="9" fill="#a9e34b" stroke="#5c940d" stroke-width="2"/>
      <!-- 꽃받침 마른 흔적 -->
      <path d="M46,64 L48,67 L50,64" stroke="#5c3b1e" stroke-width="1.5"/>
      <text x="50" y="90" font-size="7" font-weight="bold" fill="#5c940d" text-anchor="middle">작은 풋사과</text>
    </svg>`,

  apple_green: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 가지와 큰 잎 -->
      <line x1="20" y1="25" x2="80" y2="30" stroke="#865439" stroke-width="4"/>
      <ellipse cx="36" cy="22" rx="12" ry="7" fill="#40c057" stroke="#2b8a3e" stroke-width="1.8" transform="rotate(-20,36,22)"/>
      <ellipse cx="64" cy="22" rx="12" ry="7" fill="#40c057" stroke="#2b8a3e" stroke-width="1.8" transform="rotate(20,64,22)"/>
      <!-- 커다란 초록 사과 -->
      <line x1="50" y1="28" x2="50" y2="40" stroke="#5c3b1e" stroke-width="2.5"/>
      <ellipse cx="50" cy="56" rx="18" ry="17" fill="#94d82d" stroke="#5c940d" stroke-width="2.5"/>
      <!-- 빛 반사 -->
      <ellipse cx="44" cy="50" rx="3" ry="6" fill="#d8f5a2" transform="rotate(-25,44,50)"/>
      <text x="50" y="90" font-size="7" font-weight="bold" fill="#5c940d" text-anchor="middle">여름 햇살에 쑥쑥</text>
    </svg>`,

  apple_red: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 가지와 잎 -->
      <line x1="20" y1="25" x2="80" y2="30" stroke="#865439" stroke-width="4"/>
      <ellipse cx="64" cy="20" rx="12" ry="6" fill="#40c057" stroke="#2b8a3e" stroke-width="1.8" transform="rotate(25,64,20)"/>
      <!-- 빨갛게 익어가는 사과 (초록과 빨강 그라데이션 느낌) -->
      <line x1="50" y1="28" x2="50" y2="40" stroke="#5c3b1e" stroke-width="2.5"/>
      <ellipse cx="50" cy="56" rx="19" ry="18" fill="#ff6b6b" stroke="#c92a2a" stroke-width="2.5"/>
      <!-- 익어가는 붉은 볼 -->
      <circle cx="56" cy="56" r="14" fill="#fa5252" opacity="0.8"/>
      <ellipse cx="43" cy="50" rx="3.5" ry="7" fill="#ffffff" opacity="0.6" transform="rotate(-25,43,50)"/>
      <text x="50" y="90" font-size="7" font-weight="bold" fill="#c92a2a" text-anchor="middle">빨갛게 익어감</text>
    </svg>`,

  apple_harvest: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 사과 바구니 -->
      <ellipse cx="50" cy="72" rx="34" ry="16" fill="#d8b28a" stroke="#865439" stroke-width="2.5"/>
      <!-- 바구니 격자무늬 -->
      <line x1="30" y1="68" x2="70" y2="68" stroke="#865439" stroke-width="1.5"/>
      <line x1="38" y1="62" x2="42" y2="76" stroke="#865439" stroke-width="1.5"/>
      <line x1="50" y1="60" x2="50" y2="78" stroke="#865439" stroke-width="1.5"/>
      <line x1="62" y1="62" x2="58" y2="76" stroke="#865439" stroke-width="1.5"/>
      <!-- 소복이 담긴 꿀사과들 -->
      <circle cx="40" cy="52" r="11" fill="#ff6b6b" stroke="#c92a2a" stroke-width="2"/>
      <circle cx="60" cy="52" r="11" fill="#ff6b6b" stroke="#c92a2a" stroke-width="2"/>
      <circle cx="50" cy="40" r="12" fill="#fa5252" stroke="#c92a2a" stroke-width="2"/>
      <!-- 꼭지와 초록 잎사귀 -->
      <line x1="50" y1="28" x2="50" y2="32" stroke="#5c3b1e" stroke-width="2"/>
      <ellipse cx="56" cy="28" rx="4" ry="2.5" fill="#69db7c" transform="rotate(20,56,28)"/>
      <text x="50" y="95" font-size="7.5" font-weight="bold" fill="#e03131" text-anchor="middle">꿀사과 수확!</text>
    </svg>`,

  // ==========================================
  // [12] 학교 도서관에서 책 빌려 읽기
  // ==========================================
  lib_enter: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 도서관 문과 팻말 -->
      <rect x="20" y="24" width="60" height="65" rx="3" fill="#e7f5ff" stroke="#339af0" stroke-width="2"/>
      <line x1="50" y1="24" x2="50" y2="89" stroke="#339af0" stroke-width="2"/>
      <!-- 문 손잡이 -->
      <circle cx="45" cy="58" r="2.5" fill="#fab005"/>
      <circle cx="55" cy="58" r="2.5" fill="#fab005"/>
      <!-- 도서관 현판 -->
      <rect x="25" y="10" width="50" height="12" rx="3" fill="#ffec99" stroke="#fab005" stroke-width="1.8"/>
      <text x="50" y="19" font-size="6.5" font-weight="bold" fill="#d9480f" text-anchor="middle">꿈빛 도서관</text>
      <!-- 조용히 쉿! 마크 -->
      <circle cx="76" cy="40" r="7" fill="#ff8787"/>
      <text x="76" y="43" font-size="6" font-weight="bold" fill="#ffffff" text-anchor="middle">쉿</text>
    </svg>`,

  lib_search: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 검색 모니터와 본체 -->
      <rect x="24" y="22" width="52" height="38" rx="4" fill="#343a40" stroke="#212529" stroke-width="2"/>
      <rect x="28" y="26" width="44" height="30" rx="2" fill="#ffffff"/>
      <!-- 화면 속 검색창 & 돋보기 -->
      <rect x="32" y="34" width="30" height="8" rx="2" fill="#f1f3f5" stroke="#ced4da" stroke-width="1"/>
      <circle cx="66" cy="38" r="3" fill="none" stroke="#228be6" stroke-width="1.8"/>
      <line x1="68" y1="40" x2="71" y2="43" stroke="#228be6" stroke-width="1.8"/>
      <!-- 모니터 받침대와 키보드 -->
      <path d="M46,60 L54,60 L58,68 L42,68 Z" fill="#868e96"/>
      <rect x="28" y="70" width="44" height="6" rx="1.5" fill="#dee2e6" stroke="#adb5bd" stroke-width="1"/>
      <text x="50" y="88" font-size="6.5" font-weight="bold" fill="#1c7ed6" text-anchor="middle">도서 검색대로 찾기</text>
    </svg>`,

  lib_shelf: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 갈색 서가 책꽂이 -->
      <rect x="18" y="18" width="64" height="64" rx="2" fill="#d8b28a" stroke="#865439" stroke-width="2.5"/>
      <line x1="18" y1="50" x2="82" y2="50" stroke="#865439" stroke-width="2.5"/>
      <!-- 꽂혀있는 알록달록 책들 -->
      <rect x="24" y="24" width="8" height="26" fill="#ff8787"/>
      <rect x="32" y="20" width="10" height="30" fill="#4dabf7"/>
      <rect x="42" y="26" width="7" height="24" fill="#ffd43b"/>
      <!-- 꺼내는 책 (앞으로 살짝 기울어짐) -->
      <rect x="52" y="18" width="9" height="32" fill="#51cf66" stroke="#2b8a3e" stroke-width="1.5" transform="rotate(8,52,24)"/>
      <!-- 아래 선반 책들 -->
      <rect x="25" y="54" width="9" height="28" fill="#da77f2"/>
      <rect x="34" y="56" width="8" height="26" fill="#ff922b"/>
      <rect x="42" y="52" width="11" height="30" fill="#20c997"/>
      <text x="50" y="92" font-size="6.5" font-weight="bold" fill="#865439" text-anchor="middle">서가에서 책 꺼내기</text>
    </svg>`,

  lib_checkout: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 대출 데스크 카운터 -->
      <rect x="15" y="55" width="70" height="30" rx="3" fill="#dee2e6" stroke="#868e96" stroke-width="2"/>
      <!-- 학생 대출증 (바코드) -->
      <rect x="22" y="40" width="24" height="15" rx="2" fill="#ffffff" stroke="#339af0" stroke-width="1.5"/>
      <line x1="26" y1="46" x2="42" y2="46" stroke="#495057" stroke-width="1.5" stroke-dasharray="2,1"/>
      <!-- 빌리는 두꺼운 책 -->
      <rect x="50" y="32" width="28" height="23" rx="2" fill="#4dabf7" stroke="#1864ab" stroke-width="2"/>
      <!-- 바코드 스캐너 삑! -->
      <path d="M52,20 L62,28" stroke="#ff6b6b" stroke-width="2" stroke-linecap="round"/>
      <circle cx="64" cy="30" r="2" fill="#fa5252"/>
      <text x="50" y="78" font-size="6.5" font-weight="bold" fill="#1864ab" text-anchor="middle">대출 창구에서 대출</text>
    </svg>`,

  lib_read: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 독서 테이블 -->
      <rect x="15" y="58" width="70" height="22" rx="3" fill="#d8b28a" stroke="#865439" stroke-width="2"/>
      <!-- 펼쳐진 재미있는 책 -->
      <path d="M30,48 Q48,52 50,44 Q52,52 70,48 L72,62 Q52,65 50,58 Q48,65 28,62 Z" fill="#ffffff" stroke="#495057" stroke-width="1.8"/>
      <!-- 책 속 글줄 -->
      <line x1="33" y1="52" x2="46" y2="52" stroke="#adb5bd" stroke-width="1.2"/>
      <line x1="33" y1="56" x2="46" y2="56" stroke="#adb5bd" stroke-width="1.2"/>
      <line x1="54" y1="52" x2="67" y2="52" stroke="#adb5bd" stroke-width="1.2"/>
      <!-- 책 읽는 아이 머리와 반짝이는 호기심 -->
      <circle cx="50" cy="26" r="10" fill="#ffe8cc" stroke="#fd7e14" stroke-width="1.5"/>
      <path d="M42,22 Q50,14 58,22" fill="#495057"/>
      <text x="50" y="90" font-size="6.5" font-weight="bold" fill="#865439" text-anchor="middle">바르게 앉아 독서</text>
    </svg>`,

  lib_return: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 도서 반납함 함체 -->
      <rect x="25" y="32" width="50" height="52" rx="6" fill="#38d9a9" stroke="#0ca678" stroke-width="2.5"/>
      <!-- 반납 투입구 -->
      <rect x="32" y="42" width="36" height="8" rx="2" fill="#212529"/>
      <!-- 쏙 들어가는 책 -->
      <rect x="42" y="24" width="22" height="24" rx="2" fill="#ff922b" stroke="#d9480f" stroke-width="1.8" transform="rotate(-15,45,30)"/>
      <text x="50" y="66" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">도서 반납함</text>
      <text x="50" y="75" font-size="5.5" fill="#ffffff" text-anchor="middle">기한 지키기</text>
    </svg>`,

  lib_finish: `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <!-- 양손에 지혜를 안고 웃는 학생 -->
      <circle cx="50" cy="35" r="14" fill="#ffe8cc" stroke="#fd7e14" stroke-width="2"/>
      <!-- 웃는 눈 & 입 -->
      <circle cx="45" cy="33" r="2" fill="#212529"/>
      <circle cx="55" cy="33" r="2" fill="#212529"/>
      <path d="M45,40 Q50,45 55,40" stroke="#e03131" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="41" cy="38" r="2.5" fill="#ff8787" opacity="0.6"/>
      <circle cx="59" cy="38" r="2.5" fill="#ff8787" opacity="0.6"/>
      <!-- 옷과 안고 있는 책 -->
      <path d="M35,52 L65,52 L62,75 L38,75 Z" fill="#ffd43b" stroke="#f59f00" stroke-width="2"/>
      <rect x="42" y="55" width="16" height="18" rx="2" fill="#4dabf7" stroke="#1864ab" stroke-width="1.5"/>
      <!-- 머리 위 전구 (지혜와 생각 쏙쏙!) -->
      <circle cx="50" cy="12" r="5" fill="#ffd43b" stroke="#f59f00" stroke-width="1.5"/>
      <path d="M48,17 L52,17" stroke="#868e96" stroke-width="2"/>
      <text x="50" y="90" font-size="7" font-weight="bold" fill="#2b8a3e" text-anchor="middle">마음의 양식 쑥쑥!</text>
    </svg>`
};

/**
 * 키에 맞는 SVG 문자열을 반환하거나 대체 플레이스홀더를 제공하는 함수
 */
function getIllustrationSvg(key) {
  if (ILLUSTRATIONS[key]) {
    return ILLUSTRATIONS[key].trim();
  }
  // Fallback icon
  return `
    <svg viewBox="0 0 100 100" class="svg-card-art">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#f8f9fa" stroke="#ced4da" stroke-width="2"/>
      <circle cx="50" cy="50" r="20" fill="#ffd43b" stroke="#fab005" stroke-width="2"/>
      <text x="50" y="54" font-size="12" font-weight="bold" fill="#495057" text-anchor="middle">?</text>
    </svg>`;
}
