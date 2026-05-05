// 포트폴리오 데이터
// 이 파일에 실제 정보를 입력하세요

export const personalInfo = {
  name: "박세빈",
  role: "백엔드, 서버 개발자",
  bio: "유학을 통해 다양한 문화와 환경에 빠르게 적응하는 능력을 키웠습니다. 이 경험을 바탕으로 새로운 환경이나 기술에 대한 두려움보다 호기심과 열정을 가지고 적극적으로 도전하는 태도를 갖추게 되었습니다.",
  philosophy: [
    {
      title: "도전을 두려워하지 않습니다.",
      description: "중국에서의 유학 경험을 통해 언어, 문화, 교육 시스템이 완전히 다른 환경 속에서도 도전을 두려워하기보다는 그 속에서 성장함을 깨달았습니다. 이러한 경험을 바탕으로 개발자로서도 새로운 기술 스택이나 프로젝트 환경에 대한 두려움보다 호기심과 열정을 가지고 적극적으로 도전하며, 그러한 태도를 유지하고 있습니다.",
    },
    {
      title: "문서화를 중요시합니다.",
      description: "문서화가 잘되어있다면 팀원 간 지식 공유가 원활해지고, 새로운 팀원의 온보딩 시간을 단축할 수 있습니다. 담당자가 바뀔 때에도 빠르게 맥락을 파악할 수 있으며, 향후 기능 추가나 버그 수정 시에도 문서를 통해 효율적으로 작업할 수 있습니다.",
    },
    {
      title: "AI 도구의 구조를 탐구합니다.",
      description: "Claude Code의 Skills와 MCP의 client·host·server 구조를 직접 뜯어보며, AI 에이전트를 개발 워크플로우에 통합하는 방법을 탐구하고 있습니다. 단순히 AI 도구를 사용하는 데 그치지 않고, 그 위에서 동작하는 자동화 흐름을 직접 설계하는 것에 관심이 있습니다. 새로운 기술 패러다임이 등장했을 때 가장 먼저 손을 대보는 개발자가 되고 싶습니다.",
    },
  ],
  github: "https://github.com/sevineleven",
  linkedin: "https://linkedin.com/in/%EC%84%B8%EB%B9%88-%EB%B0%95-481206367",
  email: "psv980817@naver.com",
  profileImage: "/profile/sevin.jpg",
};

export const proofStrip = {
  role: "백엔드, 서버 개발자",
  mainStack: "Spring Boot, Java, MySQL",
  experience: "1+ Years", // 2025.01부터 시작
};

export const about = {
  description:
    "체계적인 개발 프로세스와 명확한 문서화를 통해 유지보수 가능한 시스템을 만듭니다. Jira와 Confluence를 활용한 협업과 클린 코드 작성을 중요하게 생각하며, 지속적인 학습을 통해 성장하는 개발자입니다.",
  highlights: [
    "실시간 멀티플레이어 게임 서버 개발 (동시 접속 300명+ 지원)",
    "WebSocket 기반 실시간 동기화 시스템 구현",
    "Server-Authority 아키텍처로 치팅 방지 및 99.9% 서버 안정성 달성",
    "부하 테스트 기반 성능 최적화 (p95 Latency 50ms 달성)",
  ],
};

export const experiences = [
  {
    title: "Backend Developer",
    company: "폴라리스오피스 서버개발팀",
    period: "Jan 2025 - Present",
    description:
      "크로스 플랫폼 오피스 솔루션 및 클라우드 기반 문서 협업 서비스 개발",
    workItems: [
      // Row 1: col-span-2 전체 너비 (B2C 메시징/알림 플랫폼 통합)
      {
        title: "B2C 메시징/알림 플랫폼",
        layout: "row",
        items: [
          {
            name: "Timezone 기반 캠페인 Push 스케줄링",
            description:
              "GeoIP 기반 Timezone 관리 체계를 구축하고, Timezone 단위 Redis 큐로 작업을 분산 적재/소비하는 구조를 구현했습니다. 사용자 이동에도 발송 시각 정합성을 유지하고, 특정 시간대 집중 발송을 완화했습니다.",
          },
          {
            name: "피크 트래픽 분산을 위한 Queue/Worker 운영",
            description:
              "Scheduler가 각 Timezone Queue에 Push 작업을 분산 적재하고, Worker는 발송 허용 시간(allow-window) 조건을 만족하는 큐만 Pull하여 소비하는 구조를 구현했습니다. 특정 시간대에 캠페인 트래픽이 집중되는 문제를 완화하고, 발송 허용 시간 이외에는 큐가 쌓이기만 하다가 조건 충족 시 순차 소비되도록 제어하여 서버 부하를 평탄화했습니다.",
          },
          {
            name: "대규모 Push 발송 성능 개선(비동기/병렬화)",
            description:
              "레거시 동기 처리 병목을 분석하고 비동기/Batch 병렬 처리로 발송 파이프라인을 재구성했습니다. Retry Queue 및 Idempotency를 적용해 실패/중복 케이스를 제어하고, 수 천만건의 대량 캠페인 발송 시간을 24시간 → 3~5분 수준으로 단축했습니다.",
          },
          {
            name: "iOS Dynamic Island 실시간 알림 지원",
            description:
              "iOS 업데이트 스펙 변화에 대응해 실시간 알림 동작을 재정의하고, 서버 발송/페이로드 구성을 정리하여 사용자 노출 품질을 안정화했습니다.",
          },
          {
            name: "FCM Push 레거시 리팩토링",
            description:
              "발송 로직의 책임을 정리하고 라이브러리 업데이트를 수행해 유지보수성과 운영 안정성을 개선했습니다.",
          },
        ],
      },
      // Row 2: grid 2칸 (실시간 협업 + 데이터 모델링)
      {
        title: "실시간 협업/동기화",
        items: [
          {
            name: "공동편집 동기화 설계 및 충돌 해결",
            description:
              "실시간 공동편집에서 발생하는 command 역전/인덱스 충돌을 분석하고, 논리적 Identifier 기반 병합 구조로 정합성을 강화했습니다. 지연 환경을 고려해 Optimistic UI + Server Reconciliation 흐름을 적용하고, 이벤트 전파를 비동기 큐 기반으로 안정화했습니다.",
          },
        ],
      },
      {
        title: "데이터 모델링/성능 최적화",
        items: [
          {
            name: "NOVA AI 대화 내역 저장/조회 구조 개선(DynamoDB)",
            description:
              "Item Size 초과 및 조회 지연 이슈를 해결하기 위해 대화 데이터를 Chunk 단위로 분리하고, PK/SK 기반 접근 패턴에 맞춰 테이블 구조를 재설계했습니다. Hot Partition을 완화하는 분산 키 전략을 적용해 저장/조회 안정성을 확보했습니다.",
          },
        ],
      },
      {
        title: "개발 생산성/운영 체계",
        items: [
          {
            name: "API 문서 자동화 및 MCP 서버 연동",
            description:
              "Springfox로 API 명세를 JSON으로 자동 생성하고, 이를 직접 제공하는 MCP 서버를 구축했습니다. 프론트엔드 개발자가 Cursor·Claude 등 AI 툴에서 MCP 서버를 연결하면 별도 문서 없이 최신 API 스펙을 바로 참조할 수 있어 구현 속도를 높였습니다.",
          },
          {
            name: "SVN → Git 전환 및 운영 규칙/브랜치 전략 정립",
            description:
              "SVN에서 Git으로 마이그레이션하고 브랜치 전략 및 운영 규칙을 정립하여 배포/협업 프로세스를 표준화했습니다.",
          },
          {
            name: "Sentry SaaS → Self-hosted 전환",
            description:
              "외부 SaaS 의존에서 벗어나 Self-hosted Sentry(25.x)로 직접 운영 환경을 구축했습니다. 데이터 보존 정책과 알림 규칙을 팀 상황에 맞게 커스터마이징하여 장애 재현·분석 효율을 개선했습니다.",
          },
        ],
      },
      {
        title: "AI 탐구 / Tech Enablement",
        items: [
          {
            name: "사내 바이브코딩 멘토링",
            description:
              "비개발 직군을 대상으로 AI 코딩 도구(Claude Code, Cursor 등)를 활용한 바이브코딩 멘토링을 진행했습니다. 개발 경험 없이도 프로토타입을 직접 만들 수 있는 워크플로우를 전파하고, 현업 업무에 AI 도구를 접목하는 방법을 함께 탐구했습니다.",
          },
          {
            name: "AI 도구 POC 및 사내 세미나",
            description:
              "Claude Code Skills·MCP 등 새로운 AI 개발 도구를 선제적으로 검증하고, 팀 내 도입 가능성을 POC로 확인했습니다. 기술 검증 결과와 활용 사례를 세미나 형태로 공유하며 팀 전반의 AI 활용 역량 향상에 기여했습니다.",
          },
        ],
      },
    ],
  },
  {
    title: "삼성 청년 SW 아카데미(SSAFY) 11기 수료",
    company: "삼성 청년 SW 아카데미",
    period: "Jan 2024 - Dec 2024",
    description:
      "삼성 청년 SW 아카데미(SSAFY) 11기 수료. 체계적인 소프트웨어 개발 교육 과정을 통해 개발 역량을 습득했습니다.",
    award: [
      {
        title: "프로젝트 우수상 (1위)",
        organization: "삼성전자 주식회사",
        date: "Oct 2024",
      },
      {
        title: "삼성 SW 알고리즘 역량 테스트 A+ 취득 (Java)",
        organization: "삼성전자 주식회사",
        date: "May 2024",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Melodiket",
    description:
      "스마트 컨트랙트 기반 밴드 공연 티케팅 서비스. 불투명한 수익 분배 문제와 암표 피해를 해결하기 위해 블록체인 기술을 활용한 투명한 티케팅 시스템을 제공합니다. 공연장 관리자, 뮤지션, 관객 모두를 위한 통합 플랫폼입니다.",
    projectOrigin: "삼성 청년 SW 아카데미 11기 특화 프로젝트",
    tags: [
      "Spring Boot",
      "Java",
      "MySQL",
      "Redis",
      "Solidity",
      "Node.js",
      "Next.js",
      "TypeScript",
    ],
    image: "/projects/melodiket/melodiket_thumbnail.png",
    images: [
      {
        url: "/projects/melodiket/melodiket_regist_concert.jpg",
        title: "공연 등록",
      },
      {
        url: "/projects/melodiket/melodiket_accept_concert.gif",
        title: "공연 승인",
      },
      {
        url: "/projects/melodiket/melodiket_myConcert.gif",
        title: "내 공연",
      },
      {
        url: "/projects/melodiket/melodiket_concert_catalog.gif",
        title: "공연 목록",
      },
      {
        url: "/projects/melodiket/melodiket_wishlist.gif",
        title: "찜 리스트",
      },
      {
        url: "/projects/melodiket/melodiket_Reservation_concert_seat.gif",
        title: "공연 예매",
      },
      {
        url: "/projects/melodiket/melodiket_regist_mobileticket.gif",
        title: "모바일 티켓",
      },
      {
        url: "/projects/melodiket/melodiket_scan_mobileTicket.gif",
        title: "티켓 스캔",
      },
      {
        url: "/projects/melodiket/melodiket_blockChain_transaction.gif",
        title: "트랜잭션",
      },
      {
        url: "/projects/melodiket/melodiket_make_photocard.gif",
        title: "포토카드 제작",
      },
      {
        url: "/projects/melodiket/melodiket_share_photocard.gif",
        title: "포토카드 공유",
      },
      {
        url: "/projects/melodiket/melodiket_check_photocard_on_kakaotalk.gif",
        title: "포토카드 카카오톡 공유",
      },
    ],
    githubUrl: "https://github.com/sevineleven/melodiket",
    liveUrl: null,
    period: "2024.08 - 2024.10",
    teamSize: 6,
    teamComposition: "3FE 3BE",
    myRole: "Backend Developer",
    overview:
      "스마트 컨트랙트 기반 밴드 공연 티케팅 서비스로, 불투명하고 불공정한 수익 분배 문제와 암표 피해를 해결하기 위해 블록체인 기술을 도입한 프로젝트입니다.\n\n이 프로젝트는 **3-tier 아키텍처 설계**를 통해 프레젠테이션, 비즈니스, 데이터 레이어를 명확히 분리하고, **스마트 컨트랙트를 활용한 자동화된 수익 분배 시스템**을 구축했습니다. 공연 관리자는 공연 등록 시 공연장, 뮤지션, 보너스 각각의 금액을 설정하고, 관객은 예매 시 최애 밴드를 선택하여 응원할 수 있으며, 공연 후 자동으로 투명하게 수익이 분배됩니다.\n\n**블록체인의 투명성**을 통해 모든 거래 내역이 블록체인에 기록되어 누구나 확인할 수 있도록 하여, 수익 분배의 공정성을 보장합니다. 또한 관객이 관람한 공연을 기념할 수 있도록 **NFT 기반 개인화된 포토카드**를 제작할 수 있으며, 최애 밴드의 싸인을 포토카드에 포함시켜 고유한 추억을 만들어갈 수 있습니다.\n\n백엔드 개발자로서 **Spring Security를 활용한 인증/인가 시스템**, **전역 예외 처리 및 에러 핸들링**, **Redisson 기반 분산 락을 통한 동시성 제어 구현**, **공연 계약의 복잡한 비즈니스 로직(뮤지션 승인, 계약 상태 관리, 정산 처리)** 등을 구현하여 엔터프라이즈급 백엔드 시스템의 핵심 기능들을 경험할 수 있었던 프로젝트입니다.",
    technologyReasons: [
      {
        technology: "Spring Boot 3",
        reason:
          "엔터프라이즈급 애플리케이션 개발을 위한 검증된 프레임워크로, RESTful API 개발과 의존성 주입을 통한 느슨한 결합 설계가 가능합니다. 특히 Spring Security를 통한 보안 강화와 JPA를 통한 데이터 영속성 관리가 효율적입니다.",
      },
      {
        technology: "Spring Security",
        reason:
          "JWT 기반 인증 및 역할 기반 접근 제어(RBAC)를 구현하여 사용자 인증과 권한 관리를 안전하게 처리합니다. 필터 체인을 통해 요청 레벨에서의 보안 검증을 수행하고, 다양한 엔드포인트에 대한 세밀한 접근 제어가 가능합니다.",
      },
      {
        technology: "Redis & Redisson",
        reason:
          "Redisson을 활용하여 분산 락 기반 동시성 제어를 구현했습니다. 동시에 여러 사용자가 같은 좌석을 예매하려고 할 때 발생하는 동시성 문제를 해결하기 위해 Redis 기반 분산 락을 적용하여 좌석 예매의 원자성을 보장하고, 데이터 일관성을 유지합니다. Redisson의 분산 락 기능을 통해 분산 환경에서도 안전하고 신뢰성 있는 좌석 예매 시스템을 구축했습니다. 또한 Redis를 캐시로 활용하여 공연 목록, 좌석 정보 등 자주 조회되는 데이터를 캐싱하여 DB 부하를 줄이고 응답 속도를 향상시켰으며, Write-Through 전략과 TTL 기반 캐시 무효화를 통해 캐시와 DB 간의 동기화 문제를 해결했습니다.",
      },
      {
        technology: "Solidity & Web3j",
        reason:
          "Solidity로 스마트 컨트랙트를 작성하여 블록체인 상에서 자동화된 수익 분배 로직을 구현했습니다. Web3j를 통해 Java 백엔드와 이더리움 블록체인 네트워크를 연동하여 스마트 컨트랙트 배포 및 호출 기능을 구현했습니다.",
      },
      {
        technology: "Node.js & IPFS",
        reason:
          "Node.js를 활용하여 IPFS 노드 서버를 구축하고, NFT 포토카드의 메타데이터와 이미지를 분산 저장소에 저장했습니다. IPFS의 해시 기반 콘텐츠 주소 지정을 통해 영구적인 데이터 저장 및 접근이 가능합니다.",
      },
    ],
    architectureImages: [
      {
        url: "/projects/melodiket/melodiket_distribution-user-flow.png",
        title: "시스템 아키텍처",
        description:
          "3-tier 아키텍처 기반의 전체 시스템 구조: 프론트엔드(Next.js), 백엔드(Spring Boot), 블록체인(Solidity), 분산 저장소(IPFS)의 통합 구조",
      },
      {
        url: "/projects/melodiket/melodiket_nft-photocard_distribution.png",
        title: "NFT 포토카드 분배",
        description:
          "공연 계약 및 예매 프로세스의 전체 시퀀스: 공연 등록부터 뮤지션 승인, 티케팅, 입장 처리까지의 전체 흐름",
      },
      {
        url: "/projects/melodiket/featureOfMelodiket.png",
        title: "주요 기능",
        description:
          "데이터베이스 엔티티 관계도: 사용자, 공연, 계약, 티켓 등 핵심 엔티티 간의 관계 구조",
      },
    ],
    retrospection: {
      whatWorkedWell:
        "**3-tier 아키텍처**로 각 레이어의 책임을 명확히 분리하여 유지보수성과 확장성을 크게 향상시킬 수 있었습니다. **전역 예외 처리 핸들러**와 **Spring Security**를 활용한 보안 시스템으로 안정적인 API를 설계했습니다.\n\n공연 계약의 복잡한 비즈니스 로직을 **상태 패턴과 전략 패턴**으로 깔끔하게 구현했고, **스마트 컨트랙트**와 백엔드 연동을 통해 블록체인 기술을 실제 서비스에 적용해볼 수 있었습니다.",
      areasForImprovement:
        "프로젝트 초기 단계에서 블록체인 트랜잭션 처리에 대한 충분한 조사가 부족했습니다.\n\n블록체인 네트워크의 지연 시간, 가스 비용, 트랜잭션 처리 시간 등 실제 운영 환경의 제약사항을 깊이 고려하지 못했고, 스마트 컨트랙트와 백엔드 간의 데이터 동기화 문제나 트랜잭션 실패 시 롤백 처리에 대한 대응 방안을 체계적으로 설계하지 못했습니다.",
      lessonsLearned:
        "블록체인 도입 전에 실제 운영 환경에서의 성능 벤치마크를 진행하고, 다양한 블록체인 네트워크(이더리움, 폴리곤 등)의 특성을 비교 분석하여 프로젝트에 최적화된 네트워크를 선택하는 프로세스를 도입하겠습니다.\n\n스마트 컨트랙트를 배포하기 전에 테스트넷에서 충분한 부하 테스트를 진행하고, 가스 최적화 기법을 적용하여 운영 비용을 사전에 예측하는 분석을 수행하겠습니다.\n\n블록체인 특성상 발생할 수 있는 불확실성을 고려하여, 비블록체인 대안 솔루션도 함께 검토하고 하이브리드 아키텍처를 설계하는 방법을 시도해보고 싶습니다.",
    },
    roleDetails: [
      "**3-tier 아키텍처 설계** 및 핵심 비즈니스 로직 구현: 공연 목록 조회 시 **쿼리 튜닝 및 인덱스 최적화**를 통한 성능 향상, 실행 계획 분석을 통한 **N+1 문제 해결** 및 **fetch join 최적화**, **커서 기반 페이징**으로 대량 데이터 조회 성능 개선",
      "**Spring Security** 기반 **JWT 인증/인가** 시스템 구현",
      "**전역 예외 처리 핸들러** 및 에러 핸들링 구현",
      "**Redisson 기반 분산 락**을 통한 분산환경 동시성 제어 구현: 좌석 예매 시 동시성 문제 해결을 위해 분산 락 적용, **MySQL REPEATABLE READ**와 분산 락을 조합하여 데이터 일관성 보장",
      "공연 계약 주요 **비즈니스 로직 구현** (뮤지션 승인/거절, 계약 상태 관리, 정산 처리)",
      "**상태 패턴 및 전략 패턴**을 활용한 계약 상태 전이 로직 개발",
      "**스마트 컨트랙트**와 백엔드 연동 (**Web3j** 활용)",
      "RESTful API 설계 및 구현",
    ],
    technicalHighlights: [
      {
        title: "3-tier 아키텍처 및 DB 최적화",
        description:
          "프레젠테이션, 비즈니스, 데이터 레이어를 명확히 분리하여 유지보수성과 확장성을 향상시켰습니다. 공연 목록 조회 시 **쿼리 튜닝 및 인덱스 최적화**를 통해 성능을 향상시켰고, 실행 계획 분석을 통해 **N+1 문제**를 해결하고 **fetch join**을 최적화했습니다. 또한 **커서 기반 페이징**을 적용하여 대량 데이터 조회 성능을 개선했습니다.",
      },
      {
        title: "스마트 컨트랙트 연동",
        description:
          "**Web3j**를 통해 Java 백엔드와 이더리움 블록체인을 연동하여 **자동화된 수익 분배 시스템**을 구현했습니다.",
      },
      {
        title: "전역 예외 처리",
        description:
          "일관된 에러 응답 형식을 제공하는 **전역 예외 처리 핸들러**를 구현하여 개발 및 디버깅 효율성을 향상시켰습니다.",
      },
    ],
    challenges: [
      {
        problem: "복잡한 공연 계약 상태 관리",
        solution:
          "상태 패턴(State Pattern)을 적용하여 공연 계약의 다양한 상태(대기, 승인, 확정, 취소 등)를 명확히 모델링했습니다. 각 상태별로 허용되는 작업과 상태 전이 규칙을 정의하여 비즈니스 로직의 복잡성을 관리하고 코드의 가독성을 향상시켰습니다.",
      },
      {
        problem: "블록체인 트랜잭션 처리 및 동기화",
        solution:
          "Web3j를 활용하여 스마트 컨트랙트와 백엔드를 연동하고, 트랜잭션 상태를 추적하는 메커니즘을 구현했습니다. 블록체인 트랜잭션이 비동기적으로 처리되는 특성을 고려하여 트랜잭션 해시를 저장하고 주기적으로 상태를 확인하는 방식으로 데이터 일관성을 유지했습니다. 트랜잭션 실패 시 보상트랜잭션(Compensating Transaction) 패턴을 적용하여 DB 상태를 롤백하고, 이벤트 기반 아키텍처를 통해 블록체인과 DB 간의 동기화 문제를 해결했습니다.",
      },
      {
        problem: "전역 예외 처리 및 에러 응답 표준화",
        solution:
          "Spring의 @ControllerAdvice를 활용한 전역 예외 처리 핸들러를 구현하여 모든 예외를 일관된 형식으로 처리했습니다. 커스텀 예외 클래스를 정의하고 적절한 HTTP 상태 코드와 에러 메시지를 매핑하여 클라이언트가 쉽게 이해하고 처리할 수 있는 에러 응답을 제공했습니다.",
      },
      {
        problem: "인증/인가 시스템 보안 강화",
        solution:
          "Spring Security와 JWT를 결합하여 토큰 기반 인증 시스템을 구현했습니다. 역할 기반 접근 제어(RBAC)를 적용하여 사용자 역할(관객, 뮤지션, 공연장 관리자)에 따라 접근 가능한 API를 세밀하게 제어했습니다. 또한 토큰 만료 시간과 리프레시 토큰 메커니즘을 구현하여 보안성을 강화했습니다.",
      },
      {
        problem: "하이브리드 데이터베이스 구조 관리",
        solution:
          "구조화된 데이터(사용자, 공연 정보, 계약)는 MySQL에, 비구조화된 데이터(로그, 메타데이터)는 MongoDB에 저장하는 하이브리드 구조를 채택했습니다. 각 데이터베이스의 특성에 맞는 데이터 저장 및 조회 전략을 수립하고, 트랜잭션 경계를 명확히 하여 데이터 일관성을 보장했습니다.",
      },
    ],
    results: [
      {
        metric: "우수 프로젝트 수상",
        description:
          "SSAFY 11기 2학기 특화 프로젝트에서 삼성전자 우수상을 수상했습니다.",
      },
      {
        metric: "블록체인 기반 투명한 수익 분배",
        description:
          "스마트 컨트랙트를 활용한 자동 수익 분배 시스템 구현. 이더리움 네트워크에 직접 구현하여 거래 내역 투명성 및 공정성을 보장합니다.",
      },
      {
        metric: "NFT 개인화된 포토카드",
        description:
          "관객이 관람한 공연을 기념할 수 있도록 NFT 포토카드를 제작할 수 있으며, 최애 밴드의 싸인을 포함시켜 개인화된 추억을 만들어갈 수 있습니다. IPFS 분산 저장소를 활용하여 영구적으로 저장됩니다.",
      },
    ],
    performanceOptimization: [
      {
        title: "쿼리 최적화 및 N+1 문제 해결",
        description:
          "공연 목록 조회 시 실행 계획 분석을 통해 N+1 문제를 해결하고 fetch join을 최적화했습니다. 불필요한 쿼리 수를 대폭 감소시켜 응답 시간을 개선했고, 적절한 인덱스를 추가하여 조회 성능을 향상시켰습니다.",
      },
      {
        title: "Redis 캐싱 전략",
        description:
          "Redis를 캐시로 활용하여 공연 목록, 좌석 정보 등 자주 조회되는 데이터를 캐싱하여 DB 부하를 줄이고 응답 속도를 향상시켰습니다. Write-Through 전략과 TTL 기반 캐시 무효화를 통해 캐시와 DB 간의 동기화 문제를 해결했습니다.",
      },
    ],
    databaseOptimization: [
      {
        title: "커서 기반 페이징",
        description:
          "대량 데이터 조회 시 offset 기반 페이징의 성능 문제를 해결하기 위해 커서 기반 페이징을 적용했습니다. 마지막 조회된 ID를 기준으로 다음 페이지를 조회하는 방식으로 인덱스를 효율적으로 활용하여 성능을 개선했습니다.",
      },
      {
        title: "분산 락을 통한 동시성 제어",
        description:
          "Redisson 기반 분산 락을 활용하여 좌석 예매 시 동시성 문제를 해결했습니다. MySQL 트랜잭션 격리수준(REPEATABLE READ)과 분산 락을 조합하여 데이터 일관성을 보장하고, 동시에 여러 사용자가 같은 좌석을 예매하려고 할 때 발생하는 경쟁 조건을 방지했습니다.",
      },
    ],
    apiDesign:
      "RESTful API 설계 원칙을 준수하여 일관된 API 구조를 설계했습니다. Springfox를 활용한 API 문서 자동화를 도입하여 협업 효율성을 향상시켰고, 전역 예외 처리 핸들러를 통해 일관된 에러 응답 형식을 제공했습니다. 리소스 중심의 URL 구조와 적절한 HTTP 상태 코드를 사용하여 직관적인 API를 제공했습니다.",
    securityImplementation: [
      {
        title: "Spring Security 기반 JWT 인증/인가",
        description:
          "Spring Security와 JWT를 결합하여 토큰 기반 인증 시스템을 구현했습니다. 역할 기반 접근 제어(RBAC)를 적용하여 사용자 역할(관객, 뮤지션, 공연장 관리자)에 따라 접근 가능한 API를 세밀하게 제어했습니다. 토큰 만료 시간과 리프레시 토큰 메커니즘을 구현하여 보안성을 강화했습니다.",
      },
      {
        title: "전역 예외 처리 및 에러 핸들링",
        description:
          "Spring의 @ControllerAdvice를 활용한 전역 예외 처리 핸들러를 구현하여 모든 예외를 일관된 형식으로 처리했습니다. 커스텀 예외 클래스를 정의하고 적절한 HTTP 상태 코드와 에러 메시지를 매핑하여 클라이언트가 쉽게 이해하고 처리할 수 있는 에러 응답을 제공했습니다.",
      },
    ],
    testingStrategy:
      "단위 테스트와 통합 테스트를 작성하여 핵심 비즈니스 로직의 정확성을 검증했습니다. 특히 공연 계약 상태 전이 로직과 분산 락 동작에 대한 테스트를 중점적으로 작성하여 신뢰성을 확보했습니다. 또한 API 엔드포인트에 대한 통합 테스트를 통해 전체 플로우를 검증했습니다.",
  },
  {
    id: 2,
    title: "굴 안의 너굴이",
    description:
      "실시간 온라인 멀티플레이 숨바꼭질 게임. 플레이어는 찾는 팀과 숨는 팀으로 나뉘어 제한된 공간에서 술래잡기를 즐길 수 있으며, 다양한 아이템을 활용하여 다이나믹한 숨바꼭질을 즐길 수 있습니다.",
    projectOrigin: "삼성 청년 SW 아카데미 11기 공통 프로젝트",
    tags: ["Java", "Spring Boot", "WebSocket", "MySQL", "React", "Phaser.js"],
    image: "/thumbnails/racoon-thumbnail.jpg",
    screenshotType: "web" as const,
    images: [
      {
        url: "/projects/racoon-in-the-hole/racoon-in-the-hole-mainScreen.png",
        title: "메인",
      },
      {
        url: "/projects/racoon-in-the-hole/racoon-in-the-hole_createRoom.gif",
        title: "방 생성",
      },
      {
        url: "/projects/racoon-in-the-hole/racoon-in-the-hole_enter_selectRoom.gif",
        title: "선택 방 입장",
      },
      {
        url: "/projects/racoon-in-the-hole/racoon-in-the-hole_enter_randomRoom.gif",
        title: "랜덤 방 입장",
      },
      {
        url: "/projects/racoon-in-the-hole/racoon-in-the-hole_item_direction_mushroom.gif",
        title: "아이템(방향버섯 : 숨은 플레이어의 방향을 알려준다.)",
      },
      {
        url: "/projects/racoon-in-the-hole/racoon-in-the-hole_item_banana.gif",
        title: "아이템(바나나 : 5초간 이동속도가 감소함.)",
      },
      {
        url: "/projects/racoon-in-the-hole/racoon-in-the-hole_item_beehive.gif",
        title: "아이템(벌통 : 벌통을 발견한 술래는 3초간 움직일 수 없다.)",
      },
      {
        url: "/projects/racoon-in-the-hole/racoon-in-the-hole_item_posion_mushroom.gif",
        title: "아이템(독버섯 : 방향키를 반대로 바꾼다.)",
      },
    ],
    githubUrl: "https://github.com/sevineleven/RACOON-IN-THE-HOLE",
    liveUrl: null,
    period: "2024.07 - 2024.08",
    teamSize: 5,
    teamComposition: "3FE 2BE",
    myRole: "Backend Developer",
    overview:
      "학교 컴퓨터실 수업 중 쉬는 시간에 친구들과 함께 즐기던 플래시 게임의 추억을 현대적으로 재현한 실시간 멀티플레이어 게임입니다.\n\n이 프로젝트는 단순한 게임 구현을 넘어서, **300명 이상의 동시 접속자를 안정적으로 처리**하는 서버 아키텍처 설계와 **실시간 동기화를 위한 WebSocket 기반 통신 시스템**을 구축하는 데 초점을 맞췄습니다. 특히 **Server-Authority 모델**을 도입하여 치팅 방지와 게임 상태 일관성을 보장하고, 이벤트 기반 브로드캐스팅을 통해 네트워크 효율성을 극대화했습니다.\n\n백엔드 개발자로서 실시간 멀티플레이어 환경에서의 동시성 제어, 토큰 기반 인증 시스템, 상태 머신을 활용한 게임 라이프사이클 관리 등 서버 사이드 핵심 기술들을 실제로 구현하고 최적화할 수 있었던 소중한 경험이었습니다.",
    technologyReasons: [
      {
        technology: "Spring Boot",
        reason:
          "엔터프라이즈급 웹 애플리케이션 개발을 위한 검증된 프레임워크로, REST API와 WebSocket/STOMP 지원이 뛰어나며 풍부한 생태계와 안정성을 제공합니다. 특히 Spring Security를 통한 인증/인가 시스템 구현과 스레드 풀 관리 등 동시성 제어에 필요한 기능들을 효율적으로 활용할 수 있습니다.",
      },
      {
        technology: "WebSocket + STOMP",
        reason:
          "실시간 양방향 통신이 필수적인 멀티플레이어 게임에서, WebSocket은 낮은 지연시간과 지속적인 연결을 제공합니다. STOMP 프로토콜을 활용하여 토픽 기반 발행-구독 패턴을 구현하고, Room/Game/Player/Team 단위로 세분화된 메시지 브로드캐스팅을 가능하게 했습니다. 토큰 기반 인증을 STOMP 헤더에 적용하여 보안성을 확보했습니다.",
      },
      {
        technology: "MySQL",
        reason:
          "관계형 데이터베이스로 사용자 정보, 방 정보, 전적 데이터 등 구조화된 데이터를 안정적으로 저장하고 관리합니다. 트랜잭션 지원을 통해 데이터 일관성을 보장하며, 인덱싱을 활용한 빠른 조회 성능을 제공합니다.",
      },
      {
        technology: "Java (ConcurrentQueue, Thread Pool)",
        reason:
          "Java의 동시성 컬렉션과 Executor 프레임워크를 활용하여 멀티스레드 환경에서 안전하고 효율적인 비동기 요청 처리를 구현했습니다. ConcurrentQueue를 통해 스레드 안전한 작업 큐를 구축하고, Thread Pool을 통해 CPU 자원을 최적화하여 높은 동시성을 달성했습니다.",
      },
      {
        technology: "Phaser.js",
        reason:
          "브라우저 기반 게임 개발에 특화된 JavaScript 프레임워크로, 렌더링, 물리 엔진, 입력 처리 등의 복잡한 게임 로직을 간소화합니다. 친근한 도트 그래픽 스타일을 제공하며, WebSocket과 연동하여 서버의 게임 상태를 실시간으로 시각화할 수 있습니다.",
      },
    ],
    architectureImages: [
      {
        url: "/architecture/racoon-architecture-1.png",
        title: "클라이언트-서버 상호작용 아키텍처",
        description:
          "방 참가부터 게임 시작까지의 클라이언트-서버 통신 플로우: HTTP를 통한 초기 인증 및 토큰 발급, STOMP over WebSocket을 통한 실시간 게임 상태 동기화",
      },
      {
        url: "/architecture/racoon-architecture-2.png",
        title: "게임 플로우 아키텍처",
        description:
          "게임의 전체 플로우: 방 생성 및 입장, 레디 상태 관리, 게임 시작 및 진행(숨기/찾기), 승패 판정까지의 게임 라이프사이클",
      },
    ],
    retrospection: {
      whatWorkedWell:
        "**Server-Authority 모델**을 통한 중앙 집중식 게임 로직 관리로 여러 클라이언트가 동시에 요청해도 일관된 게임 상태를 유지할 수 있었습니다. **이벤트 기반 브로드캐스팅**과 선택적 메시지 전송을 통해 네트워크 부하를 최소화하고 **p95 Latency 50ms**를 달성했습니다.\n\n**랜덤성 알고리즘, 상태 머신, 토큰 기반 인증, 비동기 처리** 등 다양한 기술을 한 프로젝트 안에서 실제로 구현해볼 수 있어서 값진 학습 경험이었습니다.",
      areasForImprovement:
        "기술적 구현과 성능 최적화에 집중하는 과정에서 게임 플레이 메커니즘의 독창성이나 사용자 경험의 차별화에 대한 고민이 부족했습니다.\n\n게임의 핵심 재미 요소와 차별화 포인트를 초기에 명확히 정의하지 못했고, 프로젝트 초반부터 사용자 테스트와 피드백을 수집하는 프로세스가 부재했습니다.",
      lessonsLearned:
        "게임 기획 단계에서 '왜 이 게임이 재미있을까?'라는 질문을 던지고, 경쟁사 분석과 게임플레이 루프 설계에 더 많은 시간을 투자하겠습니다.\n\n기술 스택 선택 전에 게임의 핵심 재미 요소를 먼저 정의하고, 그에 맞는 최적의 기술을 선택하는 '게임플레이 중심 개발 방법론'을 적용해보고 싶습니다.\n\n프로토타입 단계에서부터 지인들과 함께 플레이테스트를 진행하고, '재미'를 정량적으로 측정할 수 있는 지표를 도입하여 지속적으로 개선하는 사이클을 만들겠습니다.",
    },
    roleDetails: [
      "**Server-authority 모델** 도입으로 한 게임을 같이 즐기는 클라이언트들의 요청을 서버에서 통제하여 일관된 환경 유지",
      "게임 진행 **라이프 사이클 구현** (게임 시작, 진행, 종료 관리)",
      "**WebSocket**을 활용한 실시간 멀티플레이어 동기화",
      "**아이템 효과 시스템** 구현: 아이템 효과 로직, 적용 메커니즘, 지속 시간 관리, **우선순위 알고리즘** 개발",
      "인증/인가 시스템 구현",
      "전적 집계 및 통계 시스템 개발: **쿼리 튜닝 및 인덱스 최적화**를 통한 대량 데이터 조회 성능 향상, **커서 기반 페이징**으로 offset 기반 페이징의 성능 문제 해결, **배치 작업 최적화**를 통한 통계 집계 처리",
      "**맵 축소 전략** 및 게임 밸런스 로직 개발",
      "**Selenium**을 활용한 자동 QA 테스트 구현 (Web 기반 게임의 기능 및 성능 검증)",
    ],
    technicalHighlights: [
      {
        title: "동시성 처리 최적화",
        description:
          "**Java의 ConcurrentQueue**를 활용하여 비동기 요청 처리 시스템을 구축하여 **300명 이상의 동시 접속자**를 안정적으로 지원했습니다. **MySQL의 MVCC**와 트랜잭션 격리수준을 활용하여 동시 게임 상태 업데이트 시 데이터 일관성을 보장하고, 분산환경에서의 동시성 제어를 위해 **낙관적 락과 비관적 락**을 적절히 조합하여 구현했습니다.",
      },
      {
        title: "Server-Authority 아키텍처",
        description:
          "모든 게임 로직을 서버에서 처리하는 아키텍처로 **치팅 방지**와 **게임 상태 일관성**을 보장했습니다.",
      },
      {
        title: "WebSocket 실시간 통신",
        description:
          "WebSocket을 통한 **양방향 실시간 통신**으로 플레이어 액션과 게임 상태를 즉시 동기화했습니다.",
      },
    ],
    challenges: [
      {
        problem: "높은 동시 접속자 처리",
        solution:
          "300명 이상의 동시 접속자를 처리하기 위해 서버 아키텍처를 설계했습니다. 게임 로직과 네트워크 I/O를 분리하여 병목 현상을 해소하고, 비동기 처리와 스레드 풀 최적화를 통해 CPU 자원을 효율적으로 활용했습니다. 또한 동시성 제어 메커니즘을 구현하여 다수의 사용자 요청을 안정적으로 처리할 수 있도록 했습니다.",
      },
      {
        problem: "게임 상태 일관성 유지 및 치팅 방지",
        solution:
          "여러 클라이언트가 동시에 요청해도 일관된 게임 상태를 유지하기 위해 중앙 집중식 게임 로직 관리 방식을 도입했습니다. 모든 게임 로직을 서버에서 처리하고, 클라이언트는 입력만 전송하도록 설계하여 클라이언트 조작을 방지하고 모든 플레이어에게 동일한 게임 상태를 보장했습니다.",
      },
      {
        problem: "실시간 동기화 지연 및 네트워크 부하 최소화",
        solution:
          "게임 상태 변경 시 필요한 플레이어에게만 선택적 브로드캐스트하도록 최적화했습니다. 프레임 기반 업데이트 대신 이벤트 기반 업데이트를 채택하여 네트워크 트래픽을 대폭 감소시키고 지연 시간을 단축했습니다.",
      },
      {
        problem: "아이템 효과 우선순위 및 충돌 처리",
        solution:
          "여러 아이템 효과가 동시에 적용될 때의 우선순위 알고리즘을 설계했습니다. 아이템 효과 스택 관리, 지속 시간 추적, 효과 적용 순서를 정의하여 일관된 게임 밸런스를 유지했습니다. 동시 발동 시 우선순위에 따라 효과를 적용하고, 중복 효과는 효율적으로 병합하도록 구현했습니다.",
      },
      {
        problem: "Web 기반 게임의 QA 효율화",
        solution:
          "Web 기반 게임의 특성을 활용하여 Selenium을 통한 자동화 테스트를 구현했습니다. 게임 플로우, 로그인/로그아웃, 게임 생성/참여 등 주요 기능에 대한 E2E 테스트를 자동화하여 수동 테스트 시간을 대폭 단축하고 배포 전 품질을 보장했습니다.",
      },
    ],
    results: [
      {
        metric: "50ms",
        description:
          "Locust 부하 테스트: 동시 접속자 1000명 시나리오에서 게임 상태 동기화 API p95 Latency 50ms 달성",
      },
      {
        metric: "300명+",
        description: "실제 동시 접속자 300명 이상 유치",
      },
      {
        metric: "99.9%",
        description:
          "서버 안정성 99.9% 달성, 치팅 방지를 위한 Server-Authority 아키텍처 구현",
      },
    ],
    performanceOptimization: [
      {
        title: "비동기 요청 처리 최적화",
        description:
          "Java의 ConcurrentQueue와 Thread Pool을 활용하여 비동기 요청 처리 시스템을 구축했습니다. 게임 로직과 네트워크 I/O를 분리하여 병목 현상을 해소하고, 스레드 풀을 통해 CPU 자원을 최적화하여 300명 이상의 동시 접속자를 안정적으로 처리할 수 있었습니다.",
      },
      {
        title: "이벤트 기반 브로드캐스팅",
        description:
          "프레임 기반 업데이트 대신 이벤트 기반 업데이트를 채택하여 네트워크 트래픽을 대폭 감소시켰습니다. 게임 상태 변경 시 필요한 플레이어에게만 선택적 브로드캐스트하도록 최적화하여 p95 Latency 50ms를 달성했습니다.",
      },
    ],
    databaseOptimization: [
      {
        title: "쿼리 튜닝 및 인덱스 최적화",
        description:
          "전적 집계 및 통계 시스템 개발 시 실행 계획 분석을 통해 쿼리 성능을 최적화했습니다. 적절한 인덱스를 추가하여 대량 데이터 조회 성능을 향상시켰고, 커서 기반 페이징을 적용하여 offset 기반 페이징의 성능 문제를 해결했습니다.",
      },
      {
        title: "동시성 제어 및 트랜잭션 관리",
        description:
          "MySQL의 MVCC(Multi-Version Concurrency Control)와 트랜잭션 격리수준(READ COMMITTED)을 활용하여 동시 게임 상태 업데이트 시 데이터 일관성을 보장했습니다. 낙관적 락과 비관적 락을 적절히 조합하여 분산환경에서의 동시성 제어를 구현했습니다.",
      },
    ],
    apiDesign:
      "RESTful API 설계 원칙을 준수하여 일관된 API 구조를 설계했습니다. 리소스 중심의 URL 구조와 적절한 HTTP 메서드(GET, POST, PUT, DELETE)를 사용하여 직관적인 API를 제공했습니다. 또한 에러 응답 형식을 표준화하여 클라이언트가 쉽게 에러를 처리할 수 있도록 했습니다.",
    securityImplementation: [
      {
        title: "토큰 기반 인증 시스템",
        description:
          "JWT(JSON Web Token)를 활용한 토큰 기반 인증 시스템을 구현했습니다. 토큰의 만료 시간과 리프레시 토큰 메커니즘을 추가하여 보안성을 강화했고, STOMP 헤더에 토큰을 포함하여 WebSocket 연결 시에도 인증을 수행하도록 했습니다.",
      },
      {
        title: "Server-Authority 아키텍처",
        description:
          "모든 게임 로직을 서버에서 처리하는 Server-Authority 모델을 도입하여 클라이언트 조작을 방지했습니다. 클라이언트는 단순히 입력만 전송하고, 서버에서 모든 게임 상태를 계산하여 모든 플레이어에게 동일한 게임 상태를 보장했습니다.",
      },
    ],
    testingStrategy:
      "Selenium을 활용한 자동화 QA 테스트를 구현하여 Web 기반 게임의 기능 및 성능을 검증했습니다. 게임 플로우, 로그인/로그아웃, 게임 생성/참여 등 주요 기능에 대한 E2E 테스트를 자동화하여 수동 테스트 시간을 대폭 단축하고 배포 전 품질을 보장했습니다. 또한 Locust를 활용한 부하 테스트를 통해 동시 접속자 처리 능력을 검증했습니다.",
  },
  {
    id: 3,
    title: "DreamsComeTrue",
    description:
      "사용자의 꿈 데이터를 생성형 AI를 통해 숏폼 영상으로 시각화하는 서비스. 꿈을 재미있게 기록하고, 기억하고 싶을 때 기억할 수 있으며, 꿈을 재현할 수 있는 창의적인 플랫폼입니다.",
    projectOrigin: "삼성 청년 SW 아카데미 11기 자율 프로젝트",
    tags: [
      "Spring Boot",
      "Java",
      "Docker",
      "RabbitMQ",
      "ChatGPT",
      "LUMA AI",
      "Midjourney",
      "MySQL",
      "Redis",
    ],
    image: "/thumbnails/DreamsComeTrue_Thumbnail.png",
    images: [],
    githubUrl: "https://github.com/sevineleven/DreamsComeTrue",
    liveUrl: null,
    period: "2024.10 - 2024.11",
    teamSize: null,
    teamComposition: "3FE 3BE",
    myRole: "Backend Developer",
    overview:
      "사용자의 꿈을 생성형 AI를 활용하여 숏폼 영상으로 변환하는 창의적인 서비스입니다. 단순한 꿈 기록을 넘어서, 사용자가 꿈을 재미있게 경험하고, 기억하고 싶을 때 언제든지 되돌아볼 수 있으며, 꿈의 분위기와 감성을 시각적으로 재현할 수 있는 독특한 경험을 제공합니다.\n\n이 프로젝트에서는 **생성형 AI 파이프라인 구축**을 핵심 목표로 삼았습니다. ChatGPT를 활용한 꿈 데이터 분석 및 씬 분리, Midjourney를 통한 이미지 생성, LUMA AI를 활용한 영상 생성 등 다양한 생성형 AI 서비스를 통합하여 완성도 높은 숏폼 영상을 자동으로 제작합니다. **RabbitMQ를 통한 메시지 큐 기반 비동기 처리 아키텍처**를 구축하여 생성형 AI 서비스의 긴 처리 시간과 불안정한 응답을 효율적으로 관리하고, 여러 AI 서비스 간의 복잡한 호출 체인을 안정적으로 처리합니다.\n\n백엔드 개발자로서 **Spring Boot 기반 마이크로서비스 아키텍처 설계**, **Docker를 활용한 컨테이너화 및 오케스트레이션**, **생성형 AI 서비스와 Spring 서버 간의 안정적인 연동 시스템 구축**, **JWT 기반 인증 및 소셜 로그인(Google, Kakao) 시스템 구현** 등을 담당했습니다. 특히 RabbitMQ를 통한 이벤트 기반 아키텍처로 생성형 AI의 비동기적 특성을 효율적으로 처리하고, 실패한 작업에 대한 재시도 메커니즘과 상태 추적 시스템을 구현하여 신뢰성 있는 서비스를 구축했습니다.",
    technologyReasons: [
      {
        technology: "Spring Boot",
        reason:
          "엔터프라이즈급 애플리케이션 개발을 위한 검증된 프레임워크로, RESTful API 개발과 마이크로서비스 아키텍처 구현에 적합합니다. Spring Security를 통한 인증/인가 시스템과 Spring Data JPA를 통한 데이터 영속성 관리를 효율적으로 수행할 수 있습니다.",
      },
      {
        technology: "RabbitMQ",
        reason:
          "생성형 AI 서비스들의 긴 처리 시간과 복잡한 호출 체인을 관리하기 위해 메시지 큐 기반 비동기 처리 아키텍처를 구축했습니다. RabbitMQ를 통해 여러 AI 서비스(ChatGPT, Midjourney, LUMA AI) 간의 작업을 큐에 담아 순차적으로 처리하고, 실패한 작업에 대한 재시도 메커니즘과 데드레터 큐를 활용한 에러 처리를 구현했습니다. 이를 통해 생성형 AI의 불안정한 응답 시간과 오류를 효과적으로 관리하고, 시스템의 안정성과 신뢰성을 높였습니다.",
      },
      {
        technology: "Docker",
        reason:
          "마이크로서비스 아키텍처의 각 컴포넌트를 컨테이너화하여 개발 환경과 운영 환경의 일관성을 보장하고, 독립적인 스케일링과 배포가 가능하도록 했습니다. Docker Compose를 활용하여 로컬 개발 환경을 구성하고, 각 서비스(Spring Boot 서버, RabbitMQ, MySQL, Redis)를 컨테이너로 실행하여 의존성 관리와 배포 프로세스를 단순화했습니다.",
      },
      {
        technology: "생성형 AI 파이프라인 (ChatGPT, Midjourney, LUMA AI)",
        reason:
          "ChatGPT API를 활용하여 사용자가 입력한 꿈 데이터를 분석하고 씬으로 분리하며, 적절한 배경음악을 선택하는 역할을 수행합니다. Midjourney를 통해 꿈의 분위기와 내용을 시각화한 이미지를 생성하고, LUMA AI를 통해 최종적으로 숏폼 영상을 생성합니다. 각 AI 서비스의 API를 안정적으로 호출하고, 응답을 처리하며, 실패 시 재시도 로직을 구현하여 완성도 높은 결과물을 생성합니다.",
      },
    ],
    architectureImages: [
      {
        url: "/architecture/project3_systemArchitecture.png",
        title: "시스템 아키텍처",
        description:
          "PWA 프론트엔드와 백엔드 마이크로서비스 아키텍처: 프론트엔드(PWA), 백엔드 코어 서비스, RabbitMQ 메시지 브로커, 생성형 AI 서비스(ChatGPT, Midjourney, LUMA AI)의 통합 구조",
      },
      {
        url: "/architecture/project3_callChain.png",
        title: "비동기 처리 아키텍처 (CALL-CHAIN)",
        description:
          "RabbitMQ 기반 메시지 큐를 활용한 비동기 처리 플로우: Node.js 이벤트 루프, 외부 서비스, 프로세스 함수, 체커 함수를 통한 작업 처리 및 피드백 메커니즘",
      },
      {
        url: "/architecture/project3_tech_stack.png",
        title: "기술 스택 (VARIOUS STACK)",
        description:
          "프로젝트에 사용된 다양한 기술 스택: EFFECTIVE (Node.js, Spring Boot, Redis), PRODUCTIVE (Next.js, JavaScript, Express), STABLE (Nginx, TypeScript, Java) 그룹으로 분류된 기술들",
      },
    ],
    retrospection: {
      whatWorkedWell:
        "**RabbitMQ**를 활용한 **메시지 큐 기반 아키텍처**로 생성형 AI의 긴 처리 시간과 불안정한 응답을 효과적으로 관리할 수 있었습니다. **실패한 작업에 대한 재시도 메커니즘**을 구현하여 시스템 안정성을 크게 향상시켰습니다.\n\n**Docker 컨테이너화**로 개발과 운영 환경의 일관성을 유지했고, **Spring Boot 마이크로서비스 아키텍처**로 각 컴포넌트의 책임을 명확히 분리하여 유지보수성을 높였습니다.",
      areasForImprovement:
        "생성형 AI 서비스의 비용 관리와 최적화에 대한 전략이 부족했습니다. API 호출 비용이 높은 서비스들을 사용하면서 불필요한 재시도나 중복 호출을 최소화하는 전략을 세밀하게 설계하지 못했습니다.\n\n영상 생성 시간이 오래 걸리는 문제에 대한 실시간 피드백이나 진행 상황 표시 기능이 없어 사용자 경험이 좋지 않았습니다.",
      lessonsLearned:
        "생성형 AI 서비스 도입 전에 다양한 모델과 서비스 제공업체의 가격 구조를 비교 분석하고, 품질 대비 비용 효율이 가장 높은 조합을 찾는 리서치를 먼저 수행하겠습니다.\n\n사용자가 영상을 생성하는 동안 대기 시간을 활용할 수 있도록, 꿈 해석이나 감정 분석 같은 추가 기능을 제공하거나, 다른 사용자들이 생성한 영상을 탐색할 수 있는 기능을 구현하여 대기 시간을 경험의 일부로 전환하는 방법을 시도해보고 싶습니다.\n\n생성형 AI의 응답 품질을 체계적으로 개선하기 위해, 프롬프트 버전 관리 시스템을 도입하고 각 프롬프트별 결과물의 품질을 평가하는 체계를 만들어 지속적으로 최적화하는 프로세스를 구축하겠습니다.",
    },
    roleDetails: [
      "Spring Boot 기반 백엔드 서버 기본 설정 및 구조 설계",
      "**Docker**를 활용한 컨테이너화 및 **Docker Compose**를 통한 개발 환경 구성",
      "**RabbitMQ 기반 메시지 큐 시스템** 구축 및 비동기 작업 처리 구현: AI 작업을 큐에 담아 비동기 처리하여 응답 시간 단축, **병렬 처리**를 통한 여러 AI 작업 동시 실행, 대량 배치 최적화를 통한 작업 처리량 향상",
      "**생성형 AI 파이프라인** 연동: **ChatGPT, Midjourney, LUMA AI** API 통합",
      "생성형 AI 서비스와 Spring 서버 간의 **안정적인 통신 레이어** 구현",
      "**JWT 기반 토큰 인증** 시스템 구현",
      "소셜 로그인 시스템 구현 (**Google OAuth, Kakao OAuth**)",
      "AI 작업 상태 추적 및 **재시도 메커니즘** 구현",
      "**데드레터 큐**를 활용한 실패 작업 처리 및 모니터링",
      "RESTful API 설계 및 구현",
    ],
    technicalHighlights: [
      {
        title: "생성형 AI 파이프라인 연동",
        description:
          "**ChatGPT, Midjourney, LUMA AI** 등 여러 생성형 AI 서비스를 통합하여 사용자의 꿈 데이터를 자동으로 숏폼 영상으로 변환하는 파이프라인을 구축했습니다. 각 AI 서비스의 API를 안정적으로 호출하고, 응답을 처리하며, **실패 시 재시도 로직**을 구현했습니다.",
      },
      {
        title: "RabbitMQ 기반 비동기 처리",
        description:
          "생성형 AI 서비스의 긴 처리 시간과 복잡한 호출 체인을 관리하기 위해 **RabbitMQ**를 활용한 **메시지 큐 기반 아키텍처**를 구축했습니다. 여러 AI 서비스 간의 작업을 큐에 담아 순차적으로 처리하고, **실패한 작업에 대한 재시도 메커니즘**을 구현하여 시스템의 안정성을 높였습니다.",
      },
      {
        title: "Docker 컨테이너화",
        description:
          "마이크로서비스 아키텍처의 각 컴포넌트를 **Docker로 컨테이너화**하여 개발 환경과 운영 환경의 일관성을 보장했습니다. **Docker Compose**를 활용하여 로컬 개발 환경을 구성하고, 각 서비스를 독립적으로 관리하고 스케일링할 수 있도록 했습니다.",
      },
    ],
    challenges: [
      {
        problem: "생성형 AI 서비스의 긴 처리 시간과 불안정한 응답",
        solution:
          "RabbitMQ를 활용한 메시지 큐 기반 비동기 처리 아키텍처를 구축하여 AI 서비스 호출을 큐에 담아 순차적으로 처리했습니다. 각 작업의 상태를 추적하고, 타임아웃과 재시도 로직을 구현하여 불안정한 응답을 효과적으로 관리했습니다. 또한 데드레터 큐를 활용하여 반복적으로 실패하는 작업을 별도로 관리하고 모니터링할 수 있도록 했습니다.",
      },
      {
        problem: "여러 생성형 AI 서비스 간의 복잡한 호출 체인 관리",
        solution:
          "각 AI 서비스(ChatGPT → Midjourney → LUMA AI) 간의 작업 흐름을 RabbitMQ의 큐와 익스체인지를 통해 체계적으로 관리했습니다. 각 단계별로 별도의 큐를 구성하고, 이전 단계의 결과를 다음 단계의 입력으로 전달하는 이벤트 기반 아키텍처를 설계했습니다. 작업의 실패 시 이전 단계로 롤백하거나 재시도할 수 있는 메커니즘을 구현했습니다.",
      },
      {
        problem: "JWT 토큰 기반 인증 및 소셜 로그인 구현",
        solution:
          "Spring Security를 활용하여 JWT 기반 인증 시스템을 구현하고, Google OAuth와 Kakao OAuth를 통한 소셜 로그인을 지원했습니다. 토큰의 생성, 검증, 갱신 로직을 구현하고, 리프레시 토큰 메커니즘을 추가하여 사용자 경험을 개선했습니다. 각 소셜 로그인 제공자별로 통합된 인터페이스를 설계하여 확장성을 고려했습니다.",
      },
      {
        problem: "마이크로서비스 환경에서의 서비스 간 통신 및 상태 관리",
        solution:
          "RabbitMQ를 활용한 이벤트 기반 아키텍처로 각 마이크로서비스 간의 느슨한 결합을 구현했습니다. 작업의 상태를 중앙화된 데이터베이스에 저장하고, 각 서비스는 필요한 상태 정보를 조회하여 처리할 수 있도록 설계했습니다. 또한 Redis를 활용하여 작업 상태와 진행 상황을 캐싱하여 빠른 조회가 가능하도록 했습니다.",
      },
    ],
    results: [
      {
        metric: "생성형 AI 파이프라인 구축",
        description:
          "ChatGPT, Midjourney, LUMA AI를 통합하여 사용자의 꿈 데이터를 자동으로 숏폼 영상으로 변환하는 완전 자동화된 파이프라인을 구축했습니다.",
      },
      {
        metric: "안정적인 비동기 처리",
        description:
          "RabbitMQ를 활용한 메시지 큐 기반 아키텍처로 생성형 AI의 긴 처리 시간과 불안정한 응답을 효율적으로 관리하며, 실패한 작업에 대한 재시도 메커니즘을 통해 높은 작업 성공률을 달성했습니다.",
      },
      {
        metric: "컨테이너화된 마이크로서비스",
        description:
          "Docker를 활용하여 각 서비스를 컨테이너화하고, Docker Compose를 통해 개발 환경을 구성하여 개발부터 배포까지 일관된 환경을 제공했습니다.",
      },
    ],
    performanceOptimization: [
      {
        title: "메시지 큐 기반 비동기 처리",
        description:
          "RabbitMQ를 활용한 메시지 큐 기반 아키텍처로 생성형 AI 서비스의 긴 처리 시간을 효율적으로 관리했습니다. 여러 AI 서비스 간의 작업을 큐에 담아 순차적으로 처리하고, 병렬 처리를 통해 여러 AI 작업을 동시에 실행하여 전체 처리 시간을 단축했습니다.",
      },
      {
        title: "재시도 메커니즘 및 데드레터 큐",
        description:
          "생성형 AI 서비스의 불안정한 응답을 처리하기 위해 재시도 메커니즘을 구현했습니다. 실패한 작업은 데드레터 큐로 이동하여 별도로 관리하고 모니터링할 수 있도록 했으며, 이를 통해 시스템의 안정성과 신뢰성을 높였습니다.",
      },
    ],
    databaseOptimization: [
      {
        title: "작업 상태 추적 및 캐싱",
        description:
          "Redis를 활용하여 AI 작업 상태와 진행 상황을 캐싱하여 빠른 조회가 가능하도록 했습니다. 작업의 상태를 중앙화된 데이터베이스에 저장하고, 각 서비스는 필요한 상태 정보를 조회하여 처리할 수 있도록 설계했습니다.",
      },
    ],
    apiDesign:
      "RESTful API 설계 원칙을 준수하여 일관된 API 구조를 설계했습니다. 마이크로서비스 아키텍처를 고려하여 각 서비스별로 명확한 API 경계를 정의했고, JWT 기반 인증을 통해 보안을 강화했습니다. 또한 비동기 작업의 상태를 조회할 수 있는 엔드포인트를 제공하여 사용자 경험을 개선했습니다.",
    securityImplementation: [
      {
        title: "JWT 토큰 기반 인증 및 소셜 로그인",
        description:
          "Spring Security를 활용하여 JWT 기반 인증 시스템을 구현하고, Google OAuth와 Kakao OAuth를 통한 소셜 로그인을 지원했습니다. 토큰의 생성, 검증, 갱신 로직을 구현하고, 리프레시 토큰 메커니즘을 추가하여 사용자 경험을 개선했습니다.",
      },
    ],
    testingStrategy:
      "마이크로서비스 아키텍처의 특성을 고려하여 각 서비스별 단위 테스트와 통합 테스트를 작성했습니다. RabbitMQ를 활용한 비동기 작업 처리 로직에 대한 테스트를 중점적으로 작성하여 메시지 큐 기반 아키텍처의 신뢰성을 확보했습니다. 또한 생성형 AI 서비스 연동에 대한 모킹 테스트를 구현하여 외부 의존성 없이 테스트할 수 있도록 했습니다.",
  },
];

export const awards = [
  {
    title: "프로젝트 우수상 (1위)",
    organization: "삼성전자 주식회사",
    period: "Oct 2024",
    date: "2024.10.11",
    description: "SSAFY 과정 중 진행한 프로젝트에서 우수상을 수상",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "Node.js", "Express", "Next.js"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "Redis", "DynamoDB"],
  },
  {
    category: "Tools & DevOps",
    items: ["Docker", "Git", "Linux", "Jenkins"],
  },
  {
    category: "Cloud Platforms",
    items: ["AWS", "Azure"],
  },
];

export const writings = [
  {
    title: "Article Title 1",
    platform: "Dev.to",
    description: "Article description goes here.",
    url: "https://dev.to/article1",
    date: "2024-01-01",
  },
  {
    title: "Article Title 2",
    platform: "Medium",
    description: "Article description goes here.",
    url: "https://medium.com/article2",
    date: "2024-02-01",
  },
];
