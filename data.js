/**
 * 순서 맞추기 학습지 데이터셋 (초등학교 3학년 교육과정 연계)
 * - 과학 (동물/식물의 한살이)
 * - 보건/도덕 (바른 생활 습관, 안전, 위생)
 * - 실과/미술/국어 (만들기 순서, 이야기 차례)
 */

const WORKBOOK_DATA = [
  // ==========================================
  // [2단계 맞추기] (시작 + 2개 빈칸 + 끝 = 총 4단계)
  // ==========================================
  {
    id: "seq_butterfly",
    subject: "과학 (동물의 한살이)",
    title: "배추흰나비의 한살이",
    description: "배추흰나비가 알에서 아름다운 어른벌레가 되기까지의 알맞은 순서를 맞추어 보세요.",
    grade: "초등 3학년 과학",
    blankCount: 2,
    startStep: {
      title: "나비 알",
      desc: "배춧잎 위에 좁쌀만 한 나비 알이 놓여 있어요.",
      svgKey: "butterfly_egg"
    },
    middleSteps: [
      {
        order: 1,
        title: "애벌레",
        desc: "알을 깨고 나와 초록 잎을 아삭아삭 갉아먹어요.",
        svgKey: "butterfly_caterpillar"
      },
      {
        order: 2,
        title: "번데기",
        desc: "나뭇가지에 단단히 몸을 고정하고 쉬어 가요.",
        svgKey: "butterfly_chrysalis"
      }
    ],
    endStep: {
      title: "배추흰나비",
      desc: "날개를 활짝 펴고 꽃밭을 훨훨 날아다녀요.",
      svgKey: "butterfly_adult"
    }
  },
  {
    id: "seq_recycle",
    subject: "도덕/실과 (환경과 재활용)",
    title: "투명 페트병 올바른 분리배출",
    description: "다 마신 음료수 페트병을 올바르게 분리수거하는 순서를 맞추어 보세요.",
    grade: "초등 3학년 실과/도덕",
    blankCount: 2,
    startStep: {
      title: "다 마신 페트병",
      desc: "맛있게 주스를 다 마신 투명 페트병이에요.",
      svgKey: "recycle_bottle"
    },
    middleSteps: [
      {
        order: 1,
        title: "물로 헹구기",
        desc: "병 속 내용물을 비우고 물로 깨끗이 헹궈요.",
        svgKey: "recycle_rinse"
      },
      {
        order: 2,
        title: "라벨 떼어내기",
        desc: "비닐 라벨을 점선 따라 깔끔하게 뜯어내요.",
        svgKey: "recycle_peel"
      }
    ],
    endStep: {
      title: "분리수거함 쏙!",
      desc: "뚜껑을 닫고 페트병 전용 수거함에 쏙 넣어요.",
      svgKey: "recycle_bin"
    }
  },
  {
    id: "seq_sandwich",
    subject: "실과/생활 (건강한 식생활)",
    title: "영양 만점 샌드위치 만들기",
    description: "맛있고 든든한 간식 샌드위치를 만드는 바른 순서를 맞추어 보세요.",
    grade: "초등 3학년 실과",
    blankCount: 2,
    startStep: {
      title: "식빵 준비",
      desc: "깨끗한 도마 위에 부드러운 식빵을 올려요.",
      svgKey: "sandwich_bread"
    },
    middleSteps: [
      {
        order: 1,
        title: "달콤한 잼 바르기",
        desc: "식빵 위에 딸기잼을 골고루 얇게 펴 발라요.",
        svgKey: "sandwich_spread"
      },
      {
        order: 2,
        title: "속재료 차곡차곡",
        desc: "치즈와 햄, 싱싱한 토마토와 양상추를 얹어요.",
        svgKey: "sandwich_toppings"
      }
    ],
    endStep: {
      title: "맛있는 샌드위치 완성",
      desc: "빵을 덮고 먹기 좋게 잘라 맛있게 냠냠 먹어요!",
      svgKey: "sandwich_done"
    }
  },

  // ==========================================
  // [3단계 맞추기] (시작 + 3개 빈칸 + 끝 = 총 5단계)
  // ==========================================
  {
    id: "seq_frog",
    subject: "과학 (동물의 한살이)",
    title: "개구리의 성장 과정",
    description: "물속에 낳은 개구리알이 씩씩한 참개구리로 자라는 순서를 맞추어 보세요.",
    grade: "초등 3학년 과학",
    blankCount: 3,
    startStep: {
      title: "투명한 개구리알",
      desc: "물속 풀잎 사이에 말랑말랑한 알이 뭉쳐 있어요.",
      svgKey: "frog_eggs"
    },
    middleSteps: [
      {
        order: 1,
        title: "꼬물꼬물 올챙이",
        desc: "알에서 깨어나 꼬리를 살랑거리며 헤엄쳐요.",
        svgKey: "frog_tadpole1"
      },
      {
        order: 2,
        title: "뒷다리가 쏙!",
        desc: "올챙이의 꼬리 옆으로 튼튼한 뒷다리가 쑥 나와요.",
        svgKey: "frog_tadpole2"
      },
      {
        order: 3,
        title: "앞다리도 쏙!",
        desc: "귀여운 앞다리가 나오고 꼬리는 점점 줄어들어요.",
        svgKey: "frog_froglet"
      }
    ],
    endStep: {
      title: "개굴개굴 어른 개구리",
      desc: "물가 연잎 위로 펄쩍 뛰어올라 노래를 불러요.",
      svgKey: "frog_adult"
    }
  },
  {
    id: "seq_teeth",
    subject: "보건/체육 (건강한 생활)",
    title: "치카치카 3분 양치질 순서",
    description: "충치 세균을 물리치는 올바른 이 닦기 순서를 맞추어 보세요.",
    grade: "초등 3학년 보건",
    blankCount: 3,
    startStep: {
      title: "치약 짜기",
      desc: "칫솔 위에 완두콩 크기만큼 치약을 알맞게 짜요.",
      svgKey: "teeth_paste"
    },
    middleSteps: [
      {
        order: 1,
        title: "치아 겉면 닦기",
        desc: "윗니와 아랫니 바깥쪽을 동글동글 원을 그리며 닦아요.",
        svgKey: "teeth_front"
      },
      {
        order: 2,
        title: "씹는 면과 안쪽 닦기",
        desc: "어금니의 씹는 면과 치아 안쪽을 쓸어올리듯 닦아요.",
        svgKey: "teeth_inside"
      },
      {
        order: 3,
        title: "혓바닥 쓸어내리기",
        desc: "세균이 남지 않도록 혓바닥도 쓱싹 쓸어내려요.",
        svgKey: "teeth_tongue"
      }
    ],
    endStep: {
      title: "물로 깨끗이 헹구기",
      desc: "컵에 물을 담아 입안을 세 번 이상 헹궈 뱉어요.",
      svgKey: "teeth_rinse"
    }
  },
  {
    id: "seq_crosswalk",
    subject: "안전/도덕 (교통안전)",
    title: "횡단보도 안전하게 건너기",
    description: "길을 건널 때 교통사고를 예방하는 안전 수칙 순서를 맞추어 보세요.",
    grade: "초등 3학년 안전",
    blankCount: 3,
    startStep: {
      title: "안전선에 멈춰 서기",
      desc: "횡단보도 앞 노란색 안전선 뒤에서 멈추어 서요.",
      svgKey: "traffic_stop"
    },
    middleSteps: [
      {
        order: 1,
        title: "초록불 신호 확인",
        desc: "보행자 신호등이 초록불로 바뀌었는지 확인해요.",
        svgKey: "traffic_green"
      },
      {
        order: 2,
        title: "좌우 살피며 차 확인",
        desc: "왼쪽과 오른쪽을 보며 차가 완전히 멈췄는지 살펴요.",
        svgKey: "traffic_look"
      },
      {
        order: 3,
        title: "왼손 번쩍 들기",
        desc: "운전자와 눈을 맞추며 차와 가까운 쪽 손을 번쩍 들어요.",
        svgKey: "traffic_hand"
      }
    ],
    endStep: {
      title: "안전하게 건너기",
      desc: "주위를 계속 살피며 차분하게 길을 건너요.",
      svgKey: "traffic_cross"
    }
  },
  {
    id: "seq_origami",
    subject: "미술/실과 (조형과 만들기)",
    title: "펄쩍 뛰는 종이 개구리 접기",
    description: "색종이를 접어 높이 뛰는 장난감 개구리를 만드는 순서를 맞추어 보세요.",
    grade: "초등 3학년 미술",
    blankCount: 3,
    startStep: {
      title: "색종이 준비",
      desc: "초록색 정사각형 색종이를 반듯하게 놓아요.",
      svgKey: "origami_paper"
    },
    middleSteps: [
      {
        order: 1,
        title: "삼각주머니 접기",
        desc: "세모와 네모 선을 따라 접어 삼각주머니를 만들어요.",
        svgKey: "origami_triangle"
      },
      {
        order: 2,
        title: "앞다리 뒷다리 접기",
        desc: "양쪽 날개를 비스듬히 접어 올려 개구리 다리를 만들어요.",
        svgKey: "origami_legs"
      },
      {
        order: 3,
        title: "계단접기 스프링",
        desc: "몸통을 반 접고 다시 뒤로 꺾어 뛰는 스프링을 만들어요.",
        svgKey: "origami_fold"
      }
    ],
    endStep: {
      title: "펄쩍! 개구리 완성",
      desc: "엉덩이를 톡 누르면 높이 폴짝 뛰는 개구리 완성!",
      svgKey: "origami_frog"
    }
  },

  // ==========================================
  // [4단계 맞추기] (시작 + 4개 빈칸 + 끝 = 총 6단계)
  // ==========================================
  {
    id: "seq_bean",
    subject: "과학 (식물의 한살이)",
    title: "강낭콩의 싹틈과 자람",
    description: "단단한 강낭콩 씨앗이 자라 탐스러운 열매를 맺기까지의 순서를 맞추어 보세요.",
    grade: "초등 3학년 과학",
    blankCount: 4,
    startStep: {
      title: "강낭콩 씨앗 심기",
      desc: "화분의 촉촉한 흙 속에 빨간 강낭콩을 심어요.",
      svgKey: "bean_seed"
    },
    middleSteps: [
      {
        order: 1,
        title: "뿌리와 싹틈",
        desc: "껍질이 벗겨지며 뿌리가 내리고 어린싹이 쏙 고개 들어요.",
        svgKey: "bean_sprout"
      },
      {
        order: 2,
        title: "떡잎과 본잎",
        desc: "두 장의 떡잎 사이로 초록색 진짜 잎(본잎)이 돋아나요.",
        svgKey: "bean_leaves"
      },
      {
        order: 3,
        title: "줄기 자람과 꽃봉오리",
        desc: "줄기가 쑥쑥 길어지고 작고 귀여운 꽃봉오리가 맺혀요.",
        svgKey: "bean_bud"
      },
      {
        order: 4,
        title: "나비 모양 꽃 핌",
        desc: "알록달록 예쁜 강낭콩 꽃이 활짝 피어나요.",
        svgKey: "bean_flower"
      }
    ],
    endStep: {
      title: "주렁주렁 콩깍지",
      desc: "꽃이 진 자리에 통통한 강낭콩 꼬투리가 맺혀요.",
      svgKey: "bean_pod"
    }
  },
  {
    id: "seq_hands",
    subject: "보건/위생 (질병 예방)",
    title: "뽀득뽀득 손 씻기 6단계",
    description: "손에 묻은 세균과 바이러스를 깨끗이 씻어내는 6단계를 알맞게 맞추어 보세요.",
    grade: "초등 3학년 보건",
    blankCount: 4,
    startStep: {
      title: "비누 거품 내기",
      desc: "손에 물을 묻히고 비누로 풍성한 거품을 내요.",
      svgKey: "hands_foam"
    },
    middleSteps: [
      {
        order: 1,
        title: "손등 문지르기",
        desc: "손바닥으로 다른 쪽 손등을 싹싹 문질러요.",
        svgKey: "hands_back"
      },
      {
        order: 2,
        title: "손가락 깍지 끼기",
        desc: "열 손가락 깍지를 끼고 사이사이를 꼼꼼히 비벼요.",
        svgKey: "hands_interlace"
      },
      {
        order: 3,
        title: "엄지손가락 돌려 닦기",
        desc: "엄지손가락을 한 손으로 감싸 쥐고 뱅글뱅글 돌려요.",
        svgKey: "hands_thumb"
      },
      {
        order: 4,
        title: "손톱 밑 긁어 씻기",
        desc: "손바닥에 손톱을 대고 문질러 손톱 밑 세균을 씻어요.",
        svgKey: "hands_nails"
      }
    ],
    endStep: {
      title: "물로 헹구고 말리기",
      desc: "흐르는 깨끗한 물에 비누를 헹구고 깨끗한 수건으로 닦아요.",
      svgKey: "hands_rinse"
    }
  },
  {
    id: "seq_honeybee",
    subject: "과학/생태 (곤충의 생활)",
    title: "부지런한 꿀벌의 꿀 모으기",
    description: "꿀벌이 꽃밭에서 달콤한 꿀을 만들어 벌집을 채우는 과정을 맞추어 보세요.",
    grade: "초등 3학년 과학",
    blankCount: 4,
    startStep: {
      title: "벌집에서 출발",
      desc: "아침 해가 뜨자 꿀벌이 붕붕 날갯짓하며 집을 나서요.",
      svgKey: "bee_fly"
    },
    middleSteps: [
      {
        order: 1,
        title: "꽃밭 찾기",
        desc: "향기로운 냄새를 따라 알록달록 꽃밭에 도착해요.",
        svgKey: "bee_flowers"
      },
      {
        order: 2,
        title: "꿀과 꽃가루 모으기",
        desc: "꽃 속 달콤한 꿀을 빨아들이고 다리에 꽃가루를 뭉쳐요.",
        svgKey: "bee_gather"
      },
      {
        order: 3,
        title: "8자 춤추기",
        desc: "벌집으로 돌아와 꽃밭 위치를 알리는 8자 춤을 춰요.",
        svgKey: "bee_dance"
      },
      {
        order: 4,
        title: "벌집 방에 꿀 채우기",
        desc: "육각형 벌집 방마다 모아온 달콤한 꿀을 듬뿍 채워요.",
        svgKey: "bee_comb"
      }
    ],
    endStep: {
      title: "달콤한 꿀 완성",
      desc: "정성 가득 모은 황금빛 천연 꿀이 완성되었어요!",
      svgKey: "bee_honey"
    }
  },

  // ==========================================
  // [5단계 맞추기] (시작 + 5개 빈칸 + 끝 = 총 7단계)
  // ==========================================
  {
    id: "seq_appletree",
    subject: "과학/계절 (식물의 사계절)",
    title: "사과나무의 사계절과 열매",
    description: "겨울눈에서 봄, 여름, 가을을 지나 탐스러운 사과가 열리기까지를 맞추어 보세요.",
    grade: "초등 3학년 과학",
    blankCount: 5,
    startStep: {
      title: "겨울눈",
      desc: "추운 겨울 가지 끝에 단단한 겨울눈이 맺혀 있어요.",
      svgKey: "apple_winter"
    },
    middleSteps: [
      {
        order: 1,
        title: "봄 새싹 돋음",
        desc: "따뜻한 봄바람에 연둣빛 새싹과 어린잎이 돋아나요.",
        svgKey: "apple_sprout"
      },
      {
        order: 2,
        title: "사과꽃 활짝",
        desc: "향기로운 하얗고 분홍빛 사과꽃이 만발해요.",
        svgKey: "apple_blossom"
      },
      {
        order: 3,
        title: "작은 풋사과",
        desc: "꽃이 진 자리에 방울토마토만 한 아기 풋사과가 맺혀요.",
        svgKey: "apple_baby"
      },
      {
        order: 4,
        title: "여름 햇살에 쑥쑥",
        desc: "뜨거운 여름 햇빛을 듬뿍 받아 초록 사과가 주먹만큼 커져요.",
        svgKey: "apple_green"
      },
      {
        order: 5,
        title: "빨갛게 익어감",
        desc: "선선한 가을바람 속에 사과가 탐스럽고 붉게 물들어가요.",
        svgKey: "apple_red"
      }
    ],
    endStep: {
      title: "맛있는 사과 수확",
      desc: "바구니 가득 달콤하고 향긋한 꿀사과를 수확해요!",
      svgKey: "apple_harvest"
    }
  },
  {
    id: "seq_library",
    subject: "국어/도덕 (학교생활과 독서)",
    title: "학교 도서관에서 책 빌려 읽기",
    description: "도서관에 들어가 읽고 싶은 책을 대출하고 반납하는 바른 과정을 맞추어 보세요.",
    grade: "초등 3학년 국어",
    blankCount: 5,
    startStep: {
      title: "도서관 입장",
      desc: "신발을 정리하고 조용조용 발걸음으로 도서관에 들어가요.",
      svgKey: "lib_enter"
    },
    middleSteps: [
      {
        order: 1,
        title: "검색대로 책 찾기",
        desc: "검색 컴퓨터에 읽고 싶은 책 이름을 쳐서 위치 번호를 알아내요.",
        svgKey: "lib_search"
      },
      {
        order: 2,
        title: "서가에서 책 꺼내기",
        desc: "번호표를 따라 책꽂이로 가 원하는 책을 조심스럽게 꺼내요.",
        svgKey: "lib_shelf"
      },
      {
        order: 3,
        title: "대출 창구에서 대출하기",
        desc: "사서 선생님께 학생증(대출증)과 책을 보여드리고 대출해요.",
        svgKey: "lib_checkout"
      },
      {
        order: 4,
        title: "자리에 앉아 바르게 독서",
        desc: "열람실 자리에 앉아 바른 자세로 책을 흥미진진하게 읽어요.",
        svgKey: "lib_read"
      },
      {
        order: 5,
        title: "반납 기한 지켜 반납함에 넣기",
        desc: "다 읽은 책은 약속된 날짜에 맞추어 반납함에 쏙 넣어요.",
        svgKey: "lib_return"
      }
    ],
    endStep: {
      title: "보람찬 발걸음",
      desc: "마음의 양식을 가득 채우고 기분 좋게 교실로 돌아가요.",
      svgKey: "lib_finish"
    }
  }
];

// 차시별 세트 구성 (한 차시당 3~5문제, 초등 3학년 맞춤 주제)
const SESSIONS = [
  {
    id: "session_1",
    name: "제 1차시: 신비로운 생물의 한살이 탐구",
    badge: "초등 3학년 과학",
    subtitle: "동물과 식물이 알과 씨앗에서 자라나는 신기한 생명의 순서를 탐구해 봅시다.",
    problemIds: ["seq_butterfly", "seq_frog", "seq_bean", "seq_appletree"]
    // 2단계, 3단계, 4단계, 5단계 순으로 난이도 상승!
  },
  {
    id: "session_2",
    name: "제 2차시: 스스로 척척! 바르고 건강한 생활",
    badge: "초등 3학년 보건/도덕",
    subtitle: "양치질, 손 씻기, 횡단보도 안전, 분리수거 등 생활 속 바른 순서를 익혀 봅시다.",
    problemIds: ["seq_recycle", "seq_teeth", "seq_hands", "seq_crosswalk"]
    // 2단계, 3단계, 4단계, 3단계
  },
  {
    id: "session_3",
    name: "제 3차시: 조물조물 만들기와 이야기의 흐름",
    badge: "초등 3학년 국어/실과/미술",
    subtitle: "요리하기, 종이접기, 꿀벌의 생태, 도서관 이용 등 일의 알맞은 차례를 알아봅시다.",
    problemIds: ["seq_sandwich", "seq_origami", "seq_honeybee", "seq_library"]
    // 2단계, 3단계, 4단계, 5단계
  }
];
