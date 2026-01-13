# Portfolio Website

개인 포트폴리오 웹사이트 프로젝트

## 📋 프로젝트 개요

Next.js 기반의 개인 포트폴리오 웹사이트로, 백엔드 개발자로서의 경험, 프로젝트, 기술 스택을 소개합니다.

## 🛠 기술 스택

- **Framework**: Next.js 16.1.1
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Library**: React 19.2.3
- **Internationalization**: next-intl 4.7.0
- **Theme**: next-themes (다크모드 지원)
- **Markdown**: react-markdown, remark-gfm

## 🌐 다국어 지원

### 현재 지원 언어
- ✅ **한국어 (ko)** - 기본 언어
- ✅ **영어 (en)** - English

### 향후 계획
- ⏳ **시각 장애인 접근성 (blind)** - 스크린 리더 및 접근성 개선

## 📅 버전별 개발 기록

### v0.1.0 (2025-01-12)

#### 완료된 작업
- ✅ Next.js 프로젝트 초기 설정
- ✅ 기본 레이아웃 구조 구현 (Navbar, Footer)
- ✅ 다국어 지원 시스템 구축 (한국어, 영어)
- ✅ 다크모드 테마 적용
- ✅ 반응형 디자인 구현

#### 주요 섹션 구현
- ✅ Hero 섹션 (프로필, 소개, 철학)
- ✅ Proof Strip 섹션 (역할, 스택, 경력)
- ✅ Experience 섹션 (경력 및 교육)
- ✅ Skills 섹션 (기술 스택)
- ✅ Projects 섹션 (프로젝트 목록)
- ✅ Contact 섹션 (연락처)
- ✅ 프로젝트 상세 페이지

#### UI/UX 개선
- ✅ Pretendard 폰트 적용 (한글/영문 통일감 향상)
- ✅ 전체 폰트 사이즈 다운사이징 (깔끔한 디자인)
- ✅ 프로젝트 디테일 페이지 가독성 개선
  - 마크다운 콘텐츠 스타일링 최적화
  - 볼드 강조 완화
  - 섹션 간격 및 카드 패딩 최적화
- ✅ 둥근 스타일 적용 (border-radius 최적화)

#### 기능 개선
- ✅ 네비게이션 개선
  - 프로젝트 디테일 페이지에서도 네비게이션 동작
  - HashScrollHandler 컴포넌트 추가 (URL 해시 기반 스크롤)
- ✅ Footer에 GitHub/LinkedIn 소셜 아이콘 추가
- ✅ KPT 회고 라벨 단순화 (Keep, Problem, Try)

#### 프로젝트 데이터
- ✅ 굴 안의 너굴이 프로젝트 아키텍처 이미지 추가
  - 클라이언트-서버 상호작용 아키텍처
  - 게임 플로우 아키텍처

#### 커밋 기록
1. `feat: Pretendard 폰트 적용 및 전역 폰트 시스템 개선`
2. `style: 전체 섹션 및 UI 컴포넌트 폰트 사이즈 다운사이징`
3. `feat: 네비게이션 개선 및 해시 스크롤 핸들러 추가`
4. `feat: Footer에 GitHub/LinkedIn 소셜 아이콘 추가`
5. `feat: 프로젝트 디테일 페이지 가독성 개선`
6. `feat: 굴 안의 너굴이 프로젝트 아키텍처 이미지 업데이트`

---

## 🚀 향후 계획

### 단기 계획
- [ ] **시각 장애인 접근성 개선 (blind)**
  - 스크린 리더 최적화
  - ARIA 레이블 추가
  - 키보드 네비게이션 개선
  - 고대비 모드 지원

### 중기 계획
- [ ] **도메인 구매**
  - 개인 도메인 구매 (예: sevinpark.dev, sevin.dev 등)
  - 도메인 네임서버 설정
  
- [ ] **도메인 연결**
  - Vercel/호스팅 서비스에 도메인 연결
  - HTTPS 인증서 설정
  - 도메인 리다이렉션 설정

### 장기 계획
- [ ] **SEO 최적화**
  - 메타 태그 최적화
  - Open Graph 이미지 추가
  - 구조화된 데이터 (Schema.org) 추가
  - 사이트맵 생성

- [ ] **성능 최적화**
  - 이미지 최적화 (WebP, AVIF)
  - 코드 스플리팅 최적화
  - Lighthouse 점수 개선

- [ ] **추가 기능**
  - 블로그/글쓰기 섹션 구현
  - 프로젝트 필터링/검색 기능
  - 애니메이션 효과 개선
  - 다크모드 전환 애니메이션

- [ ] **모니터링 및 분석**
  - Google Analytics 추가
  - 에러 트래킹 (Sentry 등)
  - 성능 모니터링

---

## 📁 프로젝트 구조

```
portfolio/
├── app/                    # Next.js App Router
│   ├── [locale]/          # 다국어 라우팅
│   │   ├── page.tsx       # 메인 페이지
│   │   └── projects/      # 프로젝트 페이지
│   ├── globals.css        # 전역 스타일
│   └── layout.tsx         # 루트 레이아웃
├── components/            # React 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   ├── sections/         # 페이지 섹션
│   ├── ui/               # UI 컴포넌트
│   └── providers/        # Context Providers
├── data/                 # 데이터 파일
│   └── portfolio.ts      # 포트폴리오 데이터
├── lib/                  # 유틸리티 함수
├── messages/             # 다국어 메시지
│   ├── ko.json          # 한국어
│   └── en.json          # 영어
├── public/               # 정적 파일
└── i18n.ts              # 다국어 설정
```

---

## 🚀 개발 및 실행

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 빌드
```bash
npm run build
```

### 프로덕션 실행
```bash
npm start
```

---

## 📝 주의사항

- 프로젝트는 Next.js 16.1.1 및 React 19.2.3 기반으로 개발되었습니다.
- 다국어 지원을 위해 `next-intl`을 사용합니다.
- 환경 변수가 필요한 경우 `.env.local` 파일을 생성하세요.

---

## 📄 라이센스

이 프로젝트는 개인 포트폴리오 용도로 사용됩니다.

---

## 👤 작성자

**Sevin Park** - Backend Developer
- GitHub: [@sevin98](https://github.com/sevin98)
- LinkedIn: [세빈 박](https://linkedin.com/in/%EC%84%B8%EB%B9%88-%EB%B0%95-481206367)
