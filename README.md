# 🏨 호텔 예약 관리 시스템 (Hotel Reservation System)

VDI 환경에서 Node.js와 SQLite를 활용하여 구축한 **웹 기반 호텔 예약 및 조회 서비스**입니다.

## 🚀 주요 기능
- **메인 페이지**: 호텔 검색 및 서비스 소개 (`main2.html`)
- **객실 예약**: 이메일과 비밀번호를 설정하여 객실 예약 (`detail.html`)
- **예약 조회**: 설정한 이메일과 비밀번호로 본인의 예약 내역 확인 (`main2.html` -> `result.html`)
- **데이터 저장**: SQLite를 활용한 가벼운 파일 기반 데이터베이스 관리

## 🛠 기술 스택
- **Backend**: Node.js, Express
- **Database**: SQLite3
- **Frontend**: HTML5, CSS3, JavaScript (Fetch API)
- **Deployment**: Render (또는 GitHub Pages)
- VDI 환경 최적화: 재부팅 시 초기화되는 환경을 고려하여, 별도의 서버 설치가 필요 없는 SQLite를 채택하였습니다.
- 보안 조회: 단순 이름 조회가 아닌, 이메일과 비밀번호를 매칭하는 로직을 구현하여 개인정보 접근을 제어했습니다.
