const HOTEL_DATA = [
    { 
        id: 1, 
        name: 'ex1', 
        star: '⭐⭐⭐⭐⭐', 
        price: 50000 ,
        roomPrices:{
            "type 1" : 50000,
            "type 2" : 100000,
            "type 3" : 150000,
        }, 
        img: 'https://images.unsplash.com/photo-1551887373-6edba6c4b6f0',
        address: '호텔 주소 1',
        desc: 'IMWA 2026 공식 메인 베뉴 호텔입니다. 컨벤션 센터와 연결되어 있어 학술대회 참가에 최적화되어 있습니다.'
    },
    { 
        id: 2, 
        name: 'ex2', 
        star: '⭐⭐⭐⭐⭐', 
        price: 50000 ,
        roomPrices:{
            "type 1" : 50000,
            "type 2" : 100000,
            "type 3" : 150000,
        }, 
        img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
        address: '호텔 주소 2',
        desc: '유럽풍의 고전적인 분위기를 자랑하며, 조용한 휴식과 고품격 서비스를 제공합니다.'
    },
    { 
        id: 3, 
        name: 'ex3', 
        star: '⭐⭐⭐⭐⭐', 
        price: 50000,
        roomPrices:{
            "type 1" : 50000,
            "type 2" : 100000,
            "type 3" : 150000,
        }, 
        img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        address: '호텔 주소 3',
        desc: '합리적인 가격의 아늑한 숙소입니다. 셔틀버스가 수시로 운행되어 행사장 이동이 편리합니다.'
    }
];
const FAQ_DATA = [
    { q: "예약 취소는 언제까지 가능한가요?", a: "행사 7일 전까지 100% 환불 가능합니다." },
    { q: "영수증 발급은 어떻게 하나요?", a: "로그인 후 예약 조회 페이지에서 다운로드 가능합니다." },
    { q: "단체 예약 문의", a: "고객센터 02-1234-5678로 연락 바랍니다." }
];

const SECTION_TITLE = {
    booking: { title: "숙박예약", sub: "Hotels" },
    login: { title: "예약조회", sub: "Check your reservation status" },
    cs: { title: "고객센터", sub: "How can we help you?" },
    faq: { title: "자주 묻는 질문", sub: "Frequently Asked Questions" }
};

const StorageService = {
    // 1. 예약 데이터 관련
    getReservations: () => {
        return JSON.parse(localStorage.getItem('reservations') || '[]');
    },
    saveReservation: (newReserve) => {
        const current = StorageService.getReservations();
        current.push(newReserve);
        localStorage.setItem('reservations', JSON.stringify(current));
        return { success: true };
    },
    deleteReservation: (id) => {
        let current = StorageService.getReservations();
        current = current.filter(item => item.id !== id);
        localStorage.setItem('reservations', JSON.stringify(current));
    },

    // 유저 회원가입
    signup: (userData) => {
        const users = StorageService.getUsers();
        // 중복 체크
        if (users.find(u => u.email === userData.email)) {
            return { success: false, message: "이미 가입된 이메일입니다." };
        }
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        return { success: true, message: "회원가입이 완료되었습니다!" };
    },

    // 로그인 확인
    login: (email, password) => {
        const users = StorageService.getUsers();
        const user = users.find(u => u.email === email && u.pw === password);
        if (user) {
            // 세션스토리지에 로그인 정보 임시 저장 (브라우저 닫기 전까지 유지)
            sessionStorage.setItem('loggedInUser', JSON.stringify(user));
            return { success: true, user: user };
        }
        return { success: false, message: "이메일 또는 비밀번호가 틀렸습니다." };
    }
};

const COUNTRY_DATA = [
    { code: "KR", name: "대한민국" }, { code: "US", name: "미국" }, { code: "CN", name: "중국" },
    { code: "JP", name: "일본" }, { code: "TW", name: "대만" }, { code: "ZZ", name: "기타국" },
    { code: "AD", name: "안도라" }, { code: "AE", name: "아랍에미리트" }, { code: "AF", name: "아프가니스탄" },
    { code: "AG", name: "앤티가 바부다" }, { code: "AI", name: "앵귈라" }, { code: "AL", name: "알바니아" },
    { code: "AM", name: "아르메니아" }, { code: "AO", name: "앙골라" }, { code: "AQ", name: "남극 대륙" },
    { code: "AR", name: "아르헨티나" }, { code: "AS", name: "아메리칸 사모아" }, { code: "AT", name: "오스트리아" },
    { code: "AU", name: "오스트레일리아" }, { code: "AW", name: "아루바" }, { code: "AX", name: "올란드 제도" },
    { code: "AZ", name: "아제르바이잔" }, { code: "BA", name: "보스니아 헤르체고비나" }, { code: "BB", name: "바베이도스" },
    { code: "BD", name: "방글라데시" }, { code: "BE", name: "벨기에" }, { code: "BF", name: "부르키나파소" },
    { code: "BG", name: "불가리아" }, { code: "BH", name: "바레인" }, { code: "BI", name: "부룬디" },
    { code: "BJ", name: "베냉" }, { code: "BL", name: "생바르텔레미" }, { code: "BM", name: "버뮤다" },
    { code: "BN", name: "브루나이" }, { code: "BO", name: "볼리비아" }, { code: "BQ", name: "네덜란드령 카리브" },
    { code: "BR", name: "브라질" }, { code: "BS", name: "바하마" }, { code: "BT", name: "부탄" },
    { code: "BV", name: "부베섬" }, { code: "BW", name: "보츠와나" }, { code: "BY", name: "벨라루스" },
    { code: "BZ", name: "벨리즈" }, { code: "CA", name: "캐나다" }, { code: "CC", name: "코코스 제도" },
    { code: "CD", name: "콩고-킨샤사" }, { code: "CF", name: "중앙 아프리카 공화국" }, { code: "CG", name: "콩고-브라자빌" },
    { code: "CH", name: "스위스" }, { code: "CI", name: "코트디부아르" }, { code: "CK", name: "쿡 제도" },
    { code: "CL", name: "칠레" }, { code: "CM", name: "카메룬" }, { code: "CO", name: "콜롬비아" },
    { code: "CR", name: "코스타리카" }, { code: "CU", name: "쿠바" }, { code: "CV", name: "카보베르데" },
    { code: "CW", name: "퀴라소" }, { code: "CX", name: "크리스마스섬" }, { code: "CY", name: "키프로스" },
    { code: "CZ", name: "체코" }, { code: "DE", name: "독일" }, { code: "DJ", name: "지부티" },
    { code: "DK", name: "덴마크" }, { code: "DM", name: "도미니카" }, { code: "DO", name: "도미니카 공화국" },
    { code: "DZ", name: "알제리" }, { code: "EC", name: "에콰도르" }, { code: "EE", name: "에스토니아" },
    { code: "EG", name: "이집트" }, { code: "EH", name: "서사하라" }, { code: "ER", name: "에리트리아" },
    { code: "ES", name: "스페인" }, { code: "ET", name: "에티오피아" }, { code: "FI", name: "핀란드" },
    { code: "FJ", name: "피지" }, { code: "FK", name: "포클랜드 제도" }, { code: "FM", name: "미크로네시아" },
    { code: "FO", name: "페로 제도" }, { code: "FR", name: "프랑스" }, { code: "GA", name: "가봉" },
    { code: "GB", name: "영국" }, { code: "GD", name: "그레나다" }, { code: "GE", name: "조지아" },
    { code: "GF", name: "프랑스령 기아나" }, { code: "GG", name: "건지" }, { code: "GH", name: "가나" },
    { code: "GI", name: "지브롤터" }, { code: "GL", name: "그린란드" }, { code: "GM", name: "감비아" },
    { code: "GN", name: "기니" }, { code: "GP", name: "과들루프" }, { code: "GQ", name: "적도 기니" },
    { code: "GR", name: "그리스" }, { code: "GS", name: "사우스조지아 사우스샌드위치 제도" }, { code: "GT", name: "과테말라" },
    { code: "GU", name: "괌" }, { code: "GW", name: "기니비사우" }, { code: "GY", name: "가이아나" },
    { code: "HK", name: "홍콩(중국 특별행정구)" }, { code: "HM", name: "허드 맥도널드 제도" }, { code: "HN", name: "온두라스" },
    { code: "HR", name: "크로아티아" }, { code: "HT", name: "아이티" }, { code: "HU", name: "헝가리" },
    { code: "ID", name: "인도네시아" }, { code: "IE", name: "아일랜드" }, { code: "IL", name: "이스라엘" },
    { code: "IM", name: "맨 섬" }, { code: "IN", name: "인도" }, { code: "IO", name: "영국령 인도양 식민지" },
    { code: "IQ", name: "이라크" }, { code: "IR", name: "이란" }, { code: "IS", name: "아이슬란드" },
    { code: "IT", name: "이탈리아" }, { code: "JE", name: "저지" }, { code: "JM", name: "자메이카" },
    { code: "JO", name: "요르단" }, { code: "KE", name: "케냐" }, { code: "KG", name: "키르기스스탄" },
    { code: "KH", name: "캄보디아" }, { code: "KI", name: "키리바시" }, { code: "KM", name: "코모로" },
    { code: "KN", name: "세인트키츠 네비스" }, { code: "KP", name: "북한" }, { code: "KW", name: "쿠웨이트" },
    { code: "KY", name: "케이맨 제도" }, { code: "KZ", name: "카자흐스탄" }, { code: "LA", name: "라오스" },
    { code: "LB", name: "레바논" }, { code: "LC", name: "세인트루시아" }, { code: "LI", name: "리히텐슈타인" },
    { code: "LK", name: "스리랑카" }, { code: "LR", name: "라이베리아" }, { code: "LS", name: "레소토" },
    { code: "LT", name: "리투아니아" }, { code: "LU", name: "룩셈부르크" }, { code: "LV", name: "라트비아" },
    { code: "LY", name: "리비아" }, { code: "MA", name: "모로코" }, { code: "MC", name: "모나코" },
    { code: "MD", name: "몰도바" }, { code: "ME", name: "몬테네그로" }, { code: "MF", name: "생마르탱" },
    { code: "MG", name: "마다가스카르" }, { code: "MH", name: "마셜 제도" }, { code: "MK", name: "마케도니아" },
    { code: "ML", name: "말리" }, { code: "MM", name: "미얀마" }, { code: "MN", name: "몽골" },
    { code: "MO", name: "마카오(중국 특별행정구)" }, { code: "MP", name: "북마리아나제도" }, { code: "MQ", name: "마르티니크" },
    { code: "MR", name: "모리타니" }, { code: "MS", name: "몬트세라트" }, { code: "MT", name: "몰타" },
    { code: "MU", name: "모리셔스" }, { code: "MV", name: "몰디브" }, { code: "MW", name: "말라위" },
    { code: "MX", name: "멕시코" }, { code: "MY", name: "말레이시아" }, { code: "MZ", name: "모잠비크" },
    { code: "NA", name: "나미비아" }, { code: "NC", name: "뉴칼레도니아" }, { code: "NE", name: "니제르" },
    { code: "NF", name: "노퍽섬" }, { code: "NG", name: "나이지리아" }, { code: "NI", name: "니카라과" },
    { code: "NL", name: "네덜란드" }, { code: "NO", name: "노르웨이" }, { code: "NP", name: "네팔" },
    { code: "NR", name: "나우루" }, { code: "NU", name: "니우에" }, { code: "NZ", name: "뉴질랜드" },
    { code: "OM", name: "오만" }, { code: "PA", name: "파나마" }, { code: "PE", name: "페루" },
    { code: "PF", name: "프랑스령 폴리네시아" }, { code: "PG", name: "파푸아뉴기니" }, { code: "PH", name: "필리핀" },
    { code: "PK", name: "파키스탄" }, { code: "PL", name: "폴란드" }, { code: "PM", name: "생피에르 미클롱" },
    { code: "PN", name: "핏케언 섬" }, { code: "PR", name: "푸에르토리코" }, { code: "PS", name: "팔레스타인 지구" },
    { code: "PT", name: "포르투갈" }, { code: "PW", name: "팔라우" }, { code: "PY", name: "파라과이" },
    { code: "QA", name: "카타르" }, { code: "RE", name: "리유니온" }, { code: "RO", name: "루마니아" },
    { code: "RS", name: "세르비아" }, { code: "RU", name: "러시아" }, { code: "RW", name: "르완다" },
    { code: "SA", name: "사우디아라비아" }, { code: "SB", name: "솔로몬 제도" }, { code: "SC", name: "세이셸" },
    { code: "SD", name: "수단" }, { code: "SE", name: "스웨덴" }, { code: "SG", name: "싱가포르" },
    { code: "SH", name: "세인트헬레나" }, { code: "SI", name: "슬로베니아" }, { code: "SJ", name: "스발바르제도-얀마웬섬" },
    { code: "SK", name: "슬로바키아" }, { code: "SL", name: "시에라리온" }, { code: "SM", name: "산마리노" },
    { code: "SN", name: "세네갈" }, { code: "SO", name: "소말리아" }, { code: "SR", name: "수리남" },
    { code: "SS", name: "남수단" }, { code: "ST", name: "상투메 프린시페" }, { code: "SV", name: "엘살바도르" },
    { code: "SX", name: "신트마르턴" }, { code: "SY", name: "시리아" }, { code: "SZ", name: "스와질란드" },
    { code: "TC", name: "터크스 케이커스 제도" }, { code: "TD", name: "차드" }, { code: "TF", name: "프랑스 남부 지방" },
    { code: "TG", name: "토고" }, { code: "TH", name: "태국" }, { code: "TJ", name: "타지키스탄" },
    { code: "TK", name: "토켈라우" }, { code: "TL", name: "동티모르" }, { code: "TM", name: "투르크메니스탄" },
    { code: "TN", name: "튀니지" }, { code: "TO", name: "통가" }, { code: "TR", name: "터키" },
    { code: "TT", name: "트리니다드 토바고" }, { code: "TV", name: "투발루" }, { code: "TZ", name: "탄자니아" },
    { code: "UA", name: "우크라이나" }, { code: "UG", name: "우간다" }, { code: "UM", name: "미국령 해외 제도" },
    { code: "UY", name: "우루과이" }, { code: "UZ", name: "우즈베키스탄" }, { code: "VA", name: "바티칸 시국" },
    { code: "VC", name: "세인트빈센트그레나딘" }, { code: "VE", name: "베네수엘라" }, { code: "VG", name: "영국령 버진아일랜드" },
    { code: "VI", name: "미국령 버진아일랜드" }, { code: "VN", name: "베트남" }, { code: "VU", name: "바누아투" },
    { code: "WF", name: "왈리스-푸투나 제도" }, { code: "WS", name: "사모아" }, { code: "YE", name: "예멘" },
    { code: "YT", name: "마요트" }, { code: "ZA", name: "남아프리카" }, { code: "ZM", name: "잠비아" },
    { code: "ZW", name: "짐바브웨" }
];
