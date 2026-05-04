# sevin.dev 통합 아키텍처 설계

## 📋 현재 상황
- **포트폴리오**: Next.js (Vercel 서버리스)
- **도메인**: sevin.dev
- **목표**: `/blog` (Spring Boot) + `/portfolio` (Next.js) 통합 운영

---

## 🏗️ 아키텍처 옵션

### 옵션 1: Vercel Rewrites + EC2 (추천 ⭐)

#### 구조
```
sevin.dev (DNS → Vercel)
├── /portfolio/* → Vercel (Next.js) [현재]
├── /blog/* → EC2 (Spring Boot) [프록시]
└── / → Vercel (Next.js) [기본]
```

#### 장점
- ✅ Vercel의 서버리스 이점 유지 (포트폴리오)
- ✅ Spring Boot는 EC2에서 완전한 제어 가능
- ✅ 데이터베이스 연결, 파일 업로드 등 복잡한 기능 구현 가능
- ✅ 비용 효율적 (EC2는 사용량에 따라)
- ✅ 확장성: Spring Boot는 독립적으로 스케일링 가능

#### 단점
- ⚠️ EC2 관리 필요 (서버 모니터링, 백업, 보안)
- ⚠️ 초기 설정 복잡도

#### 스펙
- **Vercel**: 현재 설정 유지
- **EC2**: 
  - 인스턴스: t3.small 또는 t3.medium (초기)
  - OS: Ubuntu 22.04 LTS
  - Java: OpenJDK 17+
  - 웹서버: Nginx (리버스 프록시)
  - SSL: Let's Encrypt (Certbot)
  - 도메인: sevin.dev/blog → EC2

#### 비용 예상
- EC2 t3.small: ~$15-20/월
- 데이터 전송: ~$5-10/월
- 총 예상: ~$20-30/월

---

### 옵션 2: Vercel Rewrites + Vercel Serverless Functions

#### 구조
```
sevin.dev (DNS → Vercel)
├── /portfolio/* → Vercel (Next.js)
├── /blog/* → Vercel Serverless Functions → 외부 API
└── / → Vercel (Next.js)
```

#### 장점
- ✅ 모든 것이 Vercel에서 관리
- ✅ 서버 관리 불필요
- ✅ 자동 스케일링
- ✅ CDN 통합

#### 단점
- ❌ Spring Boot를 직접 배포 불가
- ❌ Vercel Functions는 제한적 (타임아웃, 메모리)
- ❌ 데이터베이스 연결 풀링 제한
- ❌ 파일 업로드/저장소 복잡

#### 결론
Spring Boot를 직접 운영하려면 **옵션 1 추천**

---

### 옵션 3: Cloudflare Workers + EC2

#### 구조
```
sevin.dev (DNS → Cloudflare)
├── /portfolio/* → Cloudflare Workers → Vercel
└── /blog/* → Cloudflare Workers → EC2
```

#### 장점
- ✅ Cloudflare의 글로벌 CDN
- ✅ DDoS 보호
- ✅ 캐싱 최적화

#### 단점
- ⚠️ 추가 복잡도
- ⚠️ Cloudflare 설정 필요

---

## 🎯 추천 아키텍처: 옵션 1 (Vercel + EC2)

### 상세 구조

```
┌─────────────────────────────────────────┐
│         sevin.dev (DNS)                 │
└─────────────────────────────────────────┘
                    │
        ┌───────────┴───────────┐
        │                       │
        ▼                       ▼
┌──────────────┐        ┌──────────────┐
│   Vercel     │        │     EC2      │
│  (Next.js)   │        │ (Spring Boot)│
│              │        │              │
│ /portfolio/* │        │   /blog/*    │
│ /            │        │              │
│ /ko, /en, /zh│        │   Nginx      │
└──────────────┘        │   (Proxy)    │
                        └──────────────┘
```

### Vercel 설정 (vercel.json)

```json
{
  "rewrites": [
    {
      "source": "/blog/:path*",
      "destination": "https://blog-api.sevin.dev/:path*"
    }
  ],
  "headers": [
    {
      "source": "/blog/:path*",
      "headers": [
        {
          "key": "X-Forwarded-Host",
          "value": "sevin.dev"
        },
        {
          "key": "X-Forwarded-Proto",
          "value": "https"
        }
      ]
    }
  ]
}
```

### EC2 Nginx 설정

```nginx
server {
    listen 80;
    server_name blog-api.sevin.dev;
    
    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## 📅 로드맵

### Phase 1: 인프라 설정 (1주)

#### 1-1. EC2 인스턴스 생성
- [ ] AWS 계정 설정
- [ ] EC2 t3.small 인스턴스 생성
- [ ] 보안 그룹 설정 (HTTP 80, HTTPS 443, SSH 22)
- [ ] Elastic IP 할당

#### 1-2. 서버 초기 설정
- [ ] Ubuntu 22.04 LTS 설치
- [ ] Java 17+ 설치
- [ ] Nginx 설치 및 설정
- [ ] SSL 인증서 설정 (Let's Encrypt)
- [ ] 방화벽 설정 (UFW)

#### 1-3. Spring Boot 배포 준비
- [ ] Spring Boot 애플리케이션 빌드 설정
- [ ] systemd 서비스 설정
- [ ] 로그 관리 설정

---

### Phase 2: Spring Boot 블로그 개발 (2-3주)

#### 2-1. Spring Boot 프로젝트 구조
```
blog/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/sevin/blog/
│   │   │       ├── BlogApplication.java
│   │   │       ├── controller/
│   │   │       ├── service/
│   │   │       ├── repository/
│   │   │       └── entity/
│   │   └── resources/
│   │       ├── application.yml
│   │       └── static/ (프론트엔드 빌드 결과물)
│   └── test/
├── pom.xml (또는 build.gradle)
└── Dockerfile (선택사항)
```

#### 2-2. 필수 기능
- [ ] 블로그 포스트 CRUD API
- [ ] 카테고리/태그 관리
- [ ] 댓글 시스템
- [ ] 검색 기능
- [ ] 관리자 인증 (JWT 또는 Session)

#### 2-3. 데이터베이스
- [ ] PostgreSQL 또는 MySQL 선택
- [ ] RDS 사용 고려 (관리형 DB)
- [ ] 또는 EC2에 직접 설치

#### 2-4. 프론트엔드
- [ ] React/Vue 또는 Thymeleaf
- [ ] `/blog` 경로 기준으로 라우팅
- [ ] 포트폴리오와 일관된 디자인

---

### Phase 3: 통합 및 배포 (1주)

#### 3-1. Vercel 설정
- [ ] `vercel.json` 생성
- [ ] rewrites 설정
- [ ] 헤더 설정
- [ ] 테스트 배포

#### 3-2. EC2 배포
- [ ] Spring Boot JAR 빌드
- [ ] EC2에 배포
- [ ] Nginx 프록시 설정
- [ ] SSL 인증서 적용
- [ ] 도메인 연결 (blog-api.sevin.dev)

#### 3-3. DNS 설정
- [ ] 서브도메인 생성 (blog-api.sevin.dev)
- [ ] A 레코드 설정 (EC2 Elastic IP)
- [ ] CNAME 설정 (선택사항)

#### 3-4. 테스트
- [ ] `/blog` 경로 접근 테스트
- [ ] `/portfolio` 경로 정상 작동 확인
- [ ] 크로스 오리진 이슈 확인
- [ ] 성능 테스트

---

### Phase 4: 모니터링 및 최적화 (지속)

#### 4-1. 모니터링
- [ ] CloudWatch 또는 Prometheus 설정
- [ ] 로그 수집 (CloudWatch Logs)
- [ ] 알림 설정 (서버 다운, 에러 등)

#### 4-2. 백업
- [ ] 데이터베이스 자동 백업
- [ ] 파일 시스템 백업
- [ ] 백업 스케줄 설정

#### 4-3. 보안
- [ ] SSL/TLS 강화
- [ ] 방화벽 규칙 점검
- [ ] 정기 보안 업데이트
- [ ] DDoS 방어 설정

---

## 🔧 기술 스택

### 포트폴리오 (현재)
- **프레임워크**: Next.js 16
- **호스팅**: Vercel
- **언어**: TypeScript
- **스타일**: Tailwind CSS

### 블로그 (신규)
- **백엔드**: Spring Boot 3.x
- **언어**: Java 17+
- **데이터베이스**: PostgreSQL (또는 MySQL)
- **호스팅**: AWS EC2
- **웹서버**: Nginx
- **프론트엔드**: React (또는 Thymeleaf)

---

## 💰 비용 예상

### Vercel (포트폴리오)
- 현재: 무료 플랜 또는 Pro ($20/월)

### EC2 (블로그)
- **인스턴스**: t3.small (~$15/월)
- **Elastic IP**: 무료 (인스턴스 연결 시)
- **데이터 전송**: ~$5-10/월 (초기)
- **스토리지**: EBS 20GB (~$2/월)

### 데이터베이스 (선택)
- **옵션 1**: EC2에 직접 설치 (무료, 관리 필요)
- **옵션 2**: AWS RDS (t3.micro ~$15/월, 관리형)

### 총 예상 비용
- **최소**: ~$20-25/월 (EC2 + 직접 DB)
- **권장**: ~$35-40/월 (EC2 + RDS)

---

## 🚀 배포 전략

### 개발 환경
```
localhost:3000 → Next.js (포트폴리오)
localhost:8080 → Spring Boot (블로그)
```

### 프로덕션 환경
```
sevin.dev/portfolio → Vercel
sevin.dev/blog → EC2 (Nginx → Spring Boot)
```

---

## 📝 체크리스트

### 인프라
- [ ] EC2 인스턴스 생성
- [ ] 보안 그룹 설정
- [ ] Elastic IP 할당
- [ ] Nginx 설치 및 설정
- [ ] SSL 인증서 설정
- [ ] 도메인 DNS 설정

### 애플리케이션
- [ ] Spring Boot 프로젝트 생성
- [ ] 데이터베이스 설계
- [ ] API 개발
- [ ] 프론트엔드 개발
- [ ] 테스트 작성

### 통합
- [ ] Vercel rewrites 설정
- [ ] Nginx 프록시 설정
- [ ] CORS 설정
- [ ] 에러 핸들링
- [ ] 로깅 설정

### 모니터링
- [ ] CloudWatch 설정
- [ ] 알림 설정
- [ ] 백업 스케줄 설정

---

## 🔄 대안: Vercel만 사용 (Spring Boot 없이)

만약 Spring Boot가 필수가 아니라면:

### 옵션: Next.js로 블로그도 구현
- **장점**: 
  - 모든 것이 Vercel에서 관리
  - 서버 관리 불필요
  - 비용 절감
- **단점**:
  - Spring Boot의 기능 제한
  - 복잡한 백엔드 로직 구현 어려움

### 기술 스택
- Next.js App Router
- MDX 또는 Markdown 파일
- 파일 시스템 또는 Headless CMS (Contentful, Strapi)

---

## 📌 다음 단계

1. **아키텍처 결정**: Vercel + EC2 vs 다른 옵션
2. **EC2 인스턴스 생성** (옵션 1 선택 시)
3. **Spring Boot 프로젝트 초기 설정**
4. **Vercel rewrites 설정**

어떤 옵션으로 진행할지 결정해주시면, 더 상세한 설정 가이드를 제공하겠습니다!
