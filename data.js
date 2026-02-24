const HOTEL_DATA = [
    { 
        id: 1, 
        name: '[high1] 하이원 그랜드호텔 - 컨벤션타워', 
        engname : '[high1] Grand Hotel Convention Tower',
        star: '⭐⭐⭐⭐⭐', 
        distance : '📍 하이원리조트 그랜드호텔 ↔ 0.14 km',
        price: 430000 ,
        roomPrices:{
            "슈페리어 더블 - 객실 (1인 조식 포함)" : 430000,
            "슈페리어 트윈 - 객실 (1인 조식 포함)" : 430000,
            "슈페리어 트리플 - 객실 (1인 조식 포함)" : 450000,
            "슈페리어 더블온돌 - 객실 (1인 조식 포함)" : 470000,
        }, 
        //객실별 이미지
        roomImgs: {
            "슈페리어 더블 - 객실 (1인 조식 포함)" : "./asset/hotel1_type1.jpg",
            "슈페리어 트윈 - 객실 (1인 조식 포함)" : "./asset/hotel1_type2.jpg",
            "슈페리어 트리플 - 객실 (1인 조식 포함)" : "./asset/hotel1_type3.jpg",
            "슈페리어 더블온돌 - 객실 (1인 조식 포함)" : "./asset/hotel1_type4.jpg",
        },
        roomLinks :{
            "슈페리어 더블 - 객실 (1인 조식 포함)" : 'https://www.high1.com/www/tnrummanage/RumDetail.do?rumInnb=160&key=556&pageIndex=2',
            "슈페리어 트윈 - 객실 (1인 조식 포함)" : 'https://www.high1.com/www/tnrummanage/RumDetail.do?rumInnb=164&key=556&pageIndex=2',
            "슈페리어 트리플 - 객실 (1인 조식 포함)" : 'https://www.high1.com/www/tnrummanage/RumDetail.do?rumInnb=168&key=556&pageIndex=2',
            "슈페리어 더블온돌 - 객실 (1인 조식 포함)" : 'https://www.high1.com/www/tnrummanage/RumDetail.do?rumInnb=176&key=556&pageIndex=2',
        },
        img: './asset/hotel1.jpg',
        location: '강원특별자치도 정선군 사북읍 하이원길 265',
        tel : '+82-1588-7789',
        desc_detail : '최고급 호텔서비스 하이원 그랜드호텔(컨벤션타워) SUPERIOR ROOM은 최고의 호텔 서비스를 부담 없는 가격으로 즐기실 수 있도록 준비한 객실입니다. 모던하고 고급스러운 객실로 더블/트윈/트리플/온돌룸 등의 다양한 침실을 선택할 수 있습니다.<br><br>[비품/소모품류]<br>타올류 - 바스타올, 페이스타올, 핸드타올, 가운<br>비품류 - TV,미니냉장고,미니바(유료),금고,전화기,전기포트,휴대폰충전기,무료생수(2병),커피,티,헤어드라이어,비데<br>소모품류 - 욕실용품,머리빗,면봉,손톱줄,슬리퍼<br>인쇄물류 - 객실디렉토리,편지봉투,편지지,메모지,엽서,고객설문지 등<br>대여용품 - 노트북(유료),추가침구(유료),담요,아기침대,다리미/판,가습기,젖병소독기,유선인터넷 케이블<br><br>2019.12.1(일)부터 9층이상 슈페리어 더블룸에 전망요금제가(2만원) 운영됩니다.',
        desc: '품격과 기능을 중시한 컨벤션 전문호텔. 대규모 국제회의, 공연, 전시회, 이벤트 전문 공간<br><br>신개념 기능성 호텔로서의 역할을 다하기 위해 호텔 관련 모든 정보의 시스템 구축과 ONE STOP SERVICE 제공에 중점을 둔 호텔입니다. 컨벤션 및 성수기 가족고객 편의를 위해 다양한 유형의 객실을 두루 갖추었습니다. 최상의 만족, 최고의 고객감동을 선사하겠습니다.'
    },
    { 
        id: 2, 
        name: '[high1] 하이원리조트 - 마운틴콘도',
        engname: '[high1] MOUNTAIN CONDO', 
        star: '⭐⭐⭐⭐',
        distance : '📍 하이원리조트 그랜드호텔 ↔ 0.90 km', 
        price: 450000 ,
        roomPrices:{
            "마운틴 그랜드 디럭스 - 룸온리" : 450000,
        }, 
        roomImgs: {
            "마운틴 그랜드 디럭스 - 룸온리" : "./asset/hotel2_type1.jpg",
        },
        roomLinks :{
            "마운틴 그랜드 디럭스 - 룸온리" : 'https://www.high1.com/www/tnrummanage/RumDetail.do?rumInnb=340&key=556&pageIndex=2',
        },
        img: './asset/hotel2.jpg',
        location: '강원도 정선군 고한읍 하이원길 265-1 (강원도 정선군 고한읍 고한리 438)',
        tel : '1588-7789',
        desc_detail : '마운틴콘도의 일반적인 객실로 합리적인 가격과 함께 기대 이상의 특별함을 느낄 수 있는 공간입니다. 대리석과 원목마루로 꾸며져 있으며 안락하고 편안한 휴식을 제공합니다. 이국적 분위기와 함께 도시에서는 꿈꾸지 못했던 색다른 편안함과 즐거움을 누릴 수 있습니다.<br><br>[비품/소모품류]<br>가전류 - TV/전화기/냉장고/에어컨/인덕션레인지(전용냄비/프라이팬사용)/헤어드라이기(머리빗X)/전기밥솥, 커피포트<br>식기류 - 투숙정원기준 : 밥공기, 국그릇, 커피잔, 물컵, 숟가락, 젓가락 / 기본세팅 : 국자, 가위, 주걱, 식도, 과도, 도마, 믹싱볼, 접시류, 냄비받침, 주방세제, 행주, 쟁반, 뒤집개<br><br>유의사항<br> ※ 식기류 및 가전류 추가 투입 불가 / 조리용 집게 X<br> · 투숙정원 초과 시 1인당 5,000원의 추가 요금이 부과됩니다.<br> · 투숙정원 초과 시 주방기물은 (밥그릇, 국그릇, 수저세트) 추가되지 않습니다.<br> · 인원 초과 요금에는 침구, 수건 요금이 포함되어 있지 않습니다.<br>(추가 침구 : 1채당 15,000(1박) / 추가타올(1장당) : 1,000(소), 2,000(대))<br><br>※ 상기 내용은 호텔 사정에 따라 변경될 수 있습니다.',
        desc: '다양한 힐링이 있는 웰니스 리조트'
    },
    { 
        id: 3, 
        name: '[high1] 하이원리조트 - 힐콘도', 
        engname : '[high1] HILL CONDOMINIUM',
        star: '⭐⭐⭐⭐', 
        distance : '📍 하이원리조트 그랜드호텔 ↔ 1.73 km',
        price: 450000 ,
        roomPrices:{
            "힐 그랜드 디럭스 - 룸온리" : 450000,
            "힐 테라스 스위트 - 룸온리" : 500000,
        }, 
        //객실별 이미지
        roomImgs: {
            "힐 그랜드 디럭스 - 룸온리" : "./asset/hotel3_type1.jpg",
            "힐 테라스 스위트 - 룸온리" : "./asset/hotel3_type2.jpg",
        },
        roomLinks :{
            "힐 그랜드 디럭스 - 룸온리" : 'https://www.high1.com/www/tnrummanage/RumDetail.do?rumInnb=256&key=556&pageIndex=1',
            "힐 테라스 스위트 - 룸온리" : 'https://www.high1.com/www/tnrummanage/RumDetail.do?rumInnb=368&key=556&pageIndex=1',
        },
        img: './asset/hotel3.jpg',
        location: '강원도 정선군 고한읍 고한리 산 1-239',
        tel : '1588-7789',
        desc_detail : '[비품/소모품류]<br>가전류 - TV/전화기/냉장고/에어컨/인덕션레인지(전용냄비/프라이팬사용)/헤어드라이기(머리빗X)/전기밥솥, 커피포트<br>식기류 - 투숙정원기준 : 밥공기, 국그릇, 커피잔, 물컵, 숟가락, 젓가락 / 기본세팅 : 국자, 가위, 주걱, 식도, 과도, 도마, 믹싱볼, 접시류, 냄비받침, 주방세제, 행주, 쟁반, 뒤집개<br><br>유의사항<br> ※ 식기류 및 가전류 추가 투입 불가 / 조리용 집게 X<br> · 투숙정원 초과 시 1인당 5,000원의 추가 요금이 부과됩니다.<br> · 투숙정원 초과 시 주방기물은 (밥그릇, 국그릇, 수저세트) 추가되지 않습니다.<br> · 인원 초과 요금에는 침구, 수건 요금이 포함되어 있지 않습니다.<br>(추가 침구 : 1채당 15,000(1박) / 추가타올(1장당) : 1,000(소), 2,000(대))<br><br>※ 상기 내용은 호텔 사정에 따라 변경될 수 있습니다.',
        desc: '즐거운 삶과 더 나은 세상을 만드는 행복쉼터'
    },
];
const FAQ_DATA = [
    { q: "[계정/로그인/패스워드] Q. 아이디를 분실 했을 때 어떻게 해야하나요?", a: "A. 아래 내용을 고객센터로 전달하여, 확인을 요청해주십시오.<br><br>- 이메일 : <br>- 대표예약자명 :<br>- 예약번호" },
    { q: "[계정/로그인/패스워드] Q. 패스워드를 분실했을 때 어떻게 해야하나요?", a: "A. 예약 조회 하단의 [비밀번호 찾기] 기능을 이용하시면, 임시 비밀번호가 대표예약자의 이메일로 발송됩니다.<br>아이디에 기재한 이메일이 아닌 대표예약자 란에 기재한 이메일로 발송되오니 유의바랍니다." },
    { q: "[서류발급] Q. 인보이스를 발급 받을 수 있나요?", a: "A. 메뉴 중 '예약조회' 또는 '마이페이지' 에서 로그인 후 발급할 수 있습니다.<br>* 예약조회 / 마이페이지 > 로그인 > 예약내용 찾기 > 상세 > 인보이스 보기" },
    { q: "[서류발급] Q. 카드영수증(매출전표)를 발급 받을 수 있나요?", a: "A. 방법01. '예약내역'에서 확인하기<br>- 예약조회 > 로그인 > 예약내용 찾기 > 상세 > 결제내역<br><br>방법 02. 이메일에서 확인하기<br>- 예약/결제 후 발송되는 PG사의 '결제 확인 메일'에서 발급할 수 있습니다.<br>- 대표예약자의 이메일로 발송되며, 스팸메일함으로 필터링이 될 수 있으므로 확인이 필요합니다.<br><br>방법 03. PG사 홈페이지에서 조회하기<br>[KG 이니시스]" },
];

const SECTION_TITLE = {
    booking: { title: "숙박예약", sub: "Hotels" },
    login: { title: "예약조회", sub: "Check your reservation status" },
    cs: { title: "고객센터", sub: "How can we help you?" },
    faq: { title: "자주 묻는 질문", sub: "Frequently Asked Questions" }
};

const StorageService = {
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

    signup: (userData) => {
        const users = StorageService.getUsers();
        if (users.find(u => u.email === userData.email)) {
            return { success: false, message: "이미 가입된 이메일입니다." };
        }
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        return { success: true, message: "회원가입이 완료되었습니다!" };
    },

    login: (email, password) => {
        const users = StorageService.getUsers();
        const user = users.find(u => u.email === email && u.pw === password);
        if (user) {
            sessionStorage.setItem('loggedInUser', JSON.stringify(user));
            return { success: true, user: user };
        }
        return { success: false, message: "이메일 또는 비밀번호가 틀렸습니다." };
    },

    getUsers: () => {
        return JSON.parse(localStorage.getItem('users') || '[]');
    }
};

const TERMS_DATA = {
    privacy: `[개인정보 수집 및 이용 동의]
1. 수집 항목: 성명, 이메일, 연락처, 생년월일
2. 수집 목적: 서비스 이용자 식별 및 예약 서비스 제공
3. 보유 기간: 서비스 제공 완료 후 5년 (관련 법령 준수)`,

    identification: `[고유식별정보 수집 이용 동의]
본 서비스는 예약 확인 및 본인 인증을 위해 고유식별정보를 처리할 수 있습니다.
- 수집 항목: 주민등록번호(필요 시), 외국인등록번호 등
- 이용 목적: 법령에 따른 본인 확인 및 서비스 제한 방지`,

    consignment: `[개인정보 위탁 동의]
당사는 원활한 서비스 제공을 위해 아래와 같이 개인정보 처리를 위탁하고 있습니다.
- 수탁자: (주)호텔예약결제시스템
- 위탁 업무: 결제 처리 및 문자/알림 발송 서비스`,

    thirdparty: `[개인정보 제3자 제공 동의]
당사는 이용자의 예약을 확정하기 위해 아래와 같이 정보를 제공합니다.
- 제공받는 자: 해당 예약 호텔(숙박시설)
- 제공 항목: 예약자 성명, 연락처, 예약 정보
- 이용 목적: 숙박 예약 확정 및 투숙객 관리`
};

// 만약 모듈 방식을 안 쓴다면 window에 할당해서 어디서든 쓰게 만듭니다.
window.TERMS_DATA = TERMS_DATA;


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
