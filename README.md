# sevin.dev — portfolio

**[https://sevin.dev](https://sevin.dev)**

백엔드 개발자 박세빈의 개인 포트폴리오 사이트입니다.

## 기술 스택

| 항목 | 내용 |
|---|---|
| Framework | Next.js 16.1.1 (App Router) |
| Language | TypeScript 5 |
| Styling | CSS Custom Properties + Tailwind CSS 4 |
| Font | JetBrains Mono (코드 영역), Pretendard (본문) |
| Deployment | Vercel |

## 구조

```
portfolio/
├── app/
│   ├── page.tsx              # 메인 페이지 (whoami · career · projects · skills)
│   ├── projects/[id]/        # 프로젝트 상세 페이지
│   ├── globals.css           # 디자인 토큰 및 공통 스타일
│   └── layout.tsx
├── components/
│   └── TableOfContents.tsx   # 스크롤 연동 사이드바 목차
└── data/
    └── portfolio.ts          # 포트폴리오 데이터
```

## 디자인

터미널 UI 콘셉트의 다크 전용 테마.

```css
--bg:      #0f0f12
--surface: #17171b
--green:   #3dd68c   /* 강조, 활성 상태 */
--blue:    #5aacf0   /* 보조 강조 */
--purple:  #b388ff   /* 태그 */
--mono:    JetBrains Mono
```

## 주요 기능

- **스크롤 연동 TOC** — IntersectionObserver 기반 사이드바 목차, 1000px 이하 자동 숨김
- **프로젝트 상세 페이지** — `generateStaticParams`로 정적 생성, 핵심 키워드 볼드 처리
- **단일 언어** — 한국어 전용 (다국어 제거)

## 로컬 실행

```bash
npm install
npm run dev   # localhost:3000
```

## 작성자

**박세빈** — Backend Developer

- GitHub: [@sevineleven](https://github.com/sevineleven)
- LinkedIn: [linkedin.com/in/sevin-park](https://linkedin.com/in/%EC%84%B8%EB%B9%88-%EB%B0%95-481206367)
- Email: psv980817@naver.com
