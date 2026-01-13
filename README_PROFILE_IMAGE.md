# 프로필 이미지 추가 방법

Next.js에서는 `public` 폴더에 이미지를 넣으면 바로 사용할 수 있습니다.

## 방법

1. 프로필 이미지 파일을 준비합니다 (예: `profile.jpg`, `profile.png`)
2. `public` 폴더에 이미지 파일을 복사/이동합니다
3. `data/portfolio.ts` 파일에서 경로를 지정합니다:

```typescript
profileImage: "/profile.jpg",  // public 폴더의 루트 경로
```

## 이미지 파일 위치

```
portfolio/
├── public/
│   ├── profile.jpg  ← 여기에 이미지 파일을 넣으세요
│   └── ...
└── data/
    └── portfolio.ts
```

## 권장 사항

- 파일명: `profile.jpg` 또는 `profile.png`
- 크기: 최소 400x400px (정사각형 권장)
- 형식: JPG, PNG, WebP 지원
- 최적화: 온라인 이미지 최적화 도구 사용 권장 (예: TinyPNG, Squoosh)
