// 포트폴리오 데이터
// 이 파일에 실제 정보를 입력하세요

export const personalInfo = {
  name: "박세빈",
  nameEn: "Sevin Park",
  role: "Backend Developer",
  bio: "유학을 통해 다양한 문화와 환경에 빠르게 적응하는 능력을 키웠습니다. 이 경험을 바탕으로 새로운 환경이나 기술에 대한 두려움보다 호기심과 열정을 가지고 적극적으로 도전하는 태도를 갖추게 되었습니다.\n\n개발자로서 문서화를 매우 중요하게 생각합니다. 체계적인 개발 프로세스와 명확한 문서화를 통해 유지보수 가능한 시스템을 만들며, 코드 품질 검사 도구 등을 적극적으로 활용해 원칙에 어긋나지 않고 누가봐도 이해하기 쉬운 코드를 추구합니다.",
  bioEn:
    "Through studying abroad, I developed the ability to quickly adapt to diverse cultures and environments. Based on this experience, I approach new environments and technologies with curiosity and passion rather than fear, actively taking on challenges.\n\nAs a developer, I place great importance on documentation. I build maintainable systems through systematic development processes and clear documentation, and actively utilize code quality tools to pursue code that adheres to principles and is easily understandable to anyone.",
  github: "https://github.com/sevin98",
  linkedin: "https://linkedin.com/in/%EC%84%B8%EB%B9%88-%EB%B0%95-481206367",
  email: "psv980817@naver.com",
  profileImage: "/jerry.jpg",
};

export const proofStrip = {
  role: "Backend Developer",
  mainStack: "Spring Boot, Java, MySQL",
  experience: "1+ Year", // 2025.01부터 시작
};

export const about = {
  description:
    "체계적인 개발 프로세스와 명확한 문서화를 통해 유지보수 가능한 시스템을 만듭니다. Jira와 Confluence를 활용한 협업과 클린 코드 작성을 중요하게 생각하며, 지속적인 학습을 통해 성장하는 개발자입니다.",
  descriptionEn:
    "I build maintainable systems through systematic development processes and clear documentation. I value collaboration using Jira and Confluence, write clean code, and continuously grow as a developer through ongoing learning.",
  highlights: [
    "실시간 멀티플레이어 게임 서버 개발 (동시 접속 300명+ 지원)",
    "WebSocket 기반 실시간 동기화 시스템 구현",
    "Server-Authority 아키텍처로 치팅 방지 및 99.9% 서버 안정성 달성",
    "부하 테스트 기반 성능 최적화 (p95 Latency 50ms 달성)",
  ],
  highlightsEn: [
    "Real-time multiplayer game server development (supporting 300+ concurrent users)",
    "Implemented WebSocket-based real-time synchronization system",
    "Achieved 99.9% server stability with Server-Authority architecture to prevent cheating",
    "Performance optimization based on load testing (achieved p95 Latency of 50ms)",
  ],
};

export const experiences = [
  {
    title: "Backend Developer",
    company: "폴라리스오피스 서버개발팀",
    companyEn: "PolarisOffice Server Development Team",
    period: "Jan 2025 - Present",
    description: "B2C 서비스 운영 및 고도화 프로젝트 참여",
    descriptionEn:
      "Participated in B2C service operations and enhancement projects",
    workItems: [
      {
        title: "신규 기능 개발",
        titleEn: "Feature Development",
        items: [
          {
            name: "iOS 다이내믹 아일랜드 Push",
            nameEn: "iOS Dynamic Island Push",
            description: "iOS 업데이트 대응 실시간 알림 기능 구현",
            descriptionEn:
              "Implemented real-time notification feature for iOS Dynamic Island",
          },
          {
            name: "NOVA AI 대화 내역 조회",
            nameEn: "NOVA AI Conversation History",
            description:
              "AI 대화 내역 저장 및 조회 기능 개발, DynamoDB 성능 최적화",
            descriptionEn:
              "Developed conversation history storage and retrieval with DynamoDB performance optimization",
          },
        ],
      },
      {
        title: "개발 생산성 향상",
        titleEn: "Developer Experience",
        items: [
          {
            name: "API 문서 자동화",
            nameEn: "API Documentation Automation",
            description: "Springfox 기반 자동화 도입으로 협업 효율성 향상",
            descriptionEn:
              "Introduced Springfox-based automation to improve collaboration efficiency",
          },
          {
            name: "Git 전환 및 규칙 정립",
            nameEn: "SVN to Git Migration",
            description: "SVN→Git 전환, 운영 규칙 및 브랜치 전략 수립",
            descriptionEn:
              "Migrated from SVN to Git, established operations rules and branch strategy",
          },
        ],
      },
      {
        title: "인프라 개선",
        titleEn: "Infrastructure",
        items: [
          {
            name: "Sentry 모니터링 시스템 전환",
            nameEn: "Sentry Monitoring Migration",
            description:
              "레거시 Sentry(8.x) → Self-hosted(25.x) 전환, 장애 분석 효율 개선",
            descriptionEn:
              "Migrated from legacy Sentry 8.x to Self-hosted 25.x, improved incident analysis efficiency",
          },
          {
            name: "FCM Push 리팩토링",
            nameEn: "FCM Push Refactoring",
            description: "레거시 코드 리팩토링 및 라이브러리 업데이트",
            descriptionEn: "Refactored legacy codebase and updated libraries",
          },
        ],
      },
    ],
  },
  {
    title: "삼성 청년 SW 아카데미(SSAFY) 11기 수료",
    titleEn: "Completed 11th term of Samsung Youth SW Academy (SSAFY)",
    company: "삼성 청년 SW 아카데미",
    companyEn: "Samsung Software Academy For Youth",
    period: "Jan 2024 - Dec 2024",
    description:
      "삼성 청년 SW 아카데미(SSAFY) 11기 수료. 체계적인 소프트웨어 개발 교육 과정을 통해 백엔드 개발 역량을 습득했습니다.",
    descriptionEn:
      "Completed SSAFY 11th comprehensive software development education program.",
    award: {
      title: "프로젝트 우수상 (1위)",
      titleEn: "Project Excellence Award (1st Place)",
      organization: "삼성전자 주식회사",
      organizationEn: "Samsung Electronics",
      date: "Oct 2024",
    },
  },
];

export const projects = [
  {
    id: 1,
    title: "굴 안의 너굴이",
    titleEn: "RACOON-IN-THE-HOLE",
    description:
      "실시간 온라인 멀티플레이 숨바꼭질 게임. 플레이어는 찾는 팀과 숨는 팀으로 나뉘어 제한된 공간에서 술래잡기를 즐길 수 있으며, 다양한 아이템을 활용하여 다이나믹한 숨바꼭질을 즐길 수 있습니다.",
    descriptionEn:
      "Real-time online multiplayer hide-and-seek game. Players are divided into seekers and hiders, enjoying tag in a limited space, and can use various items for dynamic hide-and-seek gameplay.",
    projectOrigin: "삼성 청년 SW 아카데미 11기 공통 프로젝트",
    projectOriginEn: "Samsung Software Academy For Youth 11th Common Project",
    tags: ["Java", "Spring Boot", "WebSocket", "MySQL", "React", "Phaser.js"],
    image: "/racoon-thumbnail.jpg",
    images: [
      {
        url: "https://github.com/user-attachments/assets/c9d98ea2-2098-412c-b869-09fdc564d990",
        title: "메인",
        titleEn: "Main",
      },
      {
        url: "https://github.com/user-attachments/assets/2b30bd12-8946-421e-ae98-d85061257c65",
        title: "로그인 화면",
        titleEn: "Login Screen",
      },
      {
        url: "https://github.com/user-attachments/assets/b7e67ac8-387b-4987-9cf7-7cf08ebe66fb",
        title: "방 생성",
        titleEn: "Room Creation",
      },
      {
        url: "https://github.com/user-attachments/assets/94556c9e-9bed-4e5b-a7be-d6721e5a78fa",
        title: "선택 방 입장",
        titleEn: "Enter Selected Room",
      },
      {
        url: "https://github.com/user-attachments/assets/53fa5266-fa4a-4964-a652-31b5d82bb00f",
        title: "랜덤 방 입장",
        titleEn: "Enter Random Room",
      },
      {
        url: "https://github.com/user-attachments/assets/2d44393f-ae61-4c09-97bf-9efc5e7cf5e3",
        title: "아이템(방향버섯 : 숨은 플레이어의 방향을 알려준다.)",
        titleEn: "Item(Direction Mushroom)",
      },
      {
        url: "https://github.com/user-attachments/assets/9bc255fb-c8e2-44f8-b97a-b87c9862febe",
        title: "아이템(바나나 : 5초간 이동속도가 감소함.)",
        titleEn: "Item(Banana)",
      },
      {
        url: "https://github.com/user-attachments/assets/88beb265-a25d-4fda-851f-f964a4590fc9",
        title: "아이템(벌통 : 벌통을 발견한 술래는 3초간 움직일 수 없다.)",
        titleEn: "Item(Beehive)",
      },
      {
        url: "https://github.com/user-attachments/assets/e1708d02-a464-449e-aceb-c1eabee6c625",
        title: "아이템(독버섯 : 방향키를 반대로 바꾼다.)",
        titleEn: "Item(Poison Mushroom)",
      },
    ],
    githubUrl: "https://github.com/sevin98/RACOON-IN-THE-HOLE",
    liveUrl: null,
    period: "2024.07 - 2024.08",
    teamSize: 5,
    myRole: "Backend Developer",
    overview:
      "학교 컴퓨터실 수업 중 쉬는 시간에 친구들과 함께 즐기던 플래시 게임의 추억을 현대적으로 재현한 실시간 멀티플레이어 게임입니다.\n\n이 프로젝트는 단순한 게임 구현을 넘어서, **300명 이상의 동시 접속자를 안정적으로 처리**하는 서버 아키텍처 설계와 **실시간 동기화를 위한 WebSocket 기반 통신 시스템**을 구축하는 데 초점을 맞췄습니다. 특히 **Server-Authority 모델**을 도입하여 치팅 방지와 게임 상태 일관성을 보장하고, 이벤트 기반 브로드캐스팅을 통해 네트워크 효율성을 극대화했습니다.\n\n백엔드 개발자로서 실시간 멀티플레이어 환경에서의 동시성 제어, 토큰 기반 인증 시스템, 상태 머신을 활용한 게임 라이프사이클 관리 등 서버 사이드 핵심 기술들을 실제로 구현하고 최적화할 수 있었던 소중한 경험이었습니다.",
    overviewEn:
      "A real-time multiplayer game that recreates the nostalgic memories of playing flash games with friends during breaks in school computer labs.\n\nBeyond simple game implementation, this project focused on building a **server architecture capable of stably handling 300+ concurrent users** and a **WebSocket-based communication system for real-time synchronization**. By introducing a **Server-Authority model**, we ensured cheat prevention and game state consistency, while maximizing network efficiency through event-based broadcasting.\n\nAs a backend developer, this was a valuable experience implementing and optimizing core server-side technologies such as concurrency control in real-time multiplayer environments, token-based authentication systems, and game lifecycle management using state machines.",
    technologyReasons: [
      {
        technology: "Spring Boot",
        reason:
          "엔터프라이즈급 웹 애플리케이션 개발을 위한 검증된 프레임워크로, REST API와 WebSocket/STOMP 지원이 뛰어나며 풍부한 생태계와 안정성을 제공합니다. 특히 Spring Security를 통한 인증/인가 시스템 구현과 스레드 풀 관리 등 동시성 제어에 필요한 기능들을 효율적으로 활용할 수 있습니다.",
        reasonEn:
          "A proven framework for enterprise-grade web applications, offering excellent REST API and WebSocket/STOMP support along with a rich ecosystem and stability. Particularly effective for implementing authentication/authorization systems through Spring Security and efficiently managing thread pools for concurrency control.",
      },
      {
        technology: "WebSocket + STOMP",
        reason:
          "실시간 양방향 통신이 필수적인 멀티플레이어 게임에서, WebSocket은 낮은 지연시간과 지속적인 연결을 제공합니다. STOMP 프로토콜을 활용하여 토픽 기반 발행-구독 패턴을 구현하고, Room/Game/Player/Team 단위로 세분화된 메시지 브로드캐스팅을 가능하게 했습니다. 토큰 기반 인증을 STOMP 헤더에 적용하여 보안성을 확보했습니다.",
        reasonEn:
          "In multiplayer games where real-time bidirectional communication is essential, WebSocket provides low latency and persistent connections. By utilizing the STOMP protocol, we implemented a topic-based pub-sub pattern, enabling granular message broadcasting at Room/Game/Player/Team levels. We secured the system by applying token-based authentication to STOMP headers.",
      },
      {
        technology: "MySQL",
        reason:
          "관계형 데이터베이스로 사용자 정보, 방 정보, 전적 데이터 등 구조화된 데이터를 안정적으로 저장하고 관리합니다. 트랜잭션 지원을 통해 데이터 일관성을 보장하며, 인덱싱을 활용한 빠른 조회 성능을 제공합니다.",
        reasonEn:
          "Relational database for reliably storing and managing structured data such as user information, room data, and match history. Ensures data consistency through transaction support and provides fast query performance through indexing.",
      },
      {
        technology: "Java (ConcurrentQueue, Thread Pool)",
        reason:
          "Java의 동시성 컬렉션과 Executor 프레임워크를 활용하여 멀티스레드 환경에서 안전하고 효율적인 비동기 요청 처리를 구현했습니다. ConcurrentQueue를 통해 스레드 안전한 작업 큐를 구축하고, Thread Pool을 통해 CPU 자원을 최적화하여 높은 동시성을 달성했습니다.",
        reasonEn:
          "Utilized Java's concurrent collections and Executor framework to implement safe and efficient asynchronous request processing in a multithreaded environment. Built a thread-safe task queue using ConcurrentQueue and optimized CPU resources through Thread Pool to achieve high concurrency.",
      },
      {
        technology: "Phaser.js",
        reason:
          "브라우저 기반 게임 개발에 특화된 JavaScript 프레임워크로, 렌더링, 물리 엔진, 입력 처리 등의 복잡한 게임 로직을 간소화합니다. 친근한 도트 그래픽 스타일을 제공하며, WebSocket과 연동하여 서버의 게임 상태를 실시간으로 시각화할 수 있습니다.",
        reasonEn:
          "A JavaScript framework specialized for browser-based game development, simplifying complex game logic such as rendering, physics engine, and input handling. Provides friendly pixel art graphics and can be integrated with WebSocket to visualize server game states in real-time.",
      },
    ],
    architectureImages: [
      {
        url: "https://private-user-images.githubusercontent.com/117634128/534489508-53fb617f-f0b1-4b78-938c-fbc163765170.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjgyMDc1MzgsIm5iZiI6MTc2ODIwNzIzOCwicGF0aCI6Ii8xMTc2MzQxMjgvNTM0NDg5NTA4LTUzZmI2MTdmLWYwYjEtNGI3OC05MzhjLWZiYzE2Mzc2NTE3MC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMTEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDExMlQwODQwMzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kZTgwNThlNDcyMjVmMTM4YWQ1MWI4ZTI0ZmYxMTkzMmYyZGU0OWI4NWMzMTU1ODEyMWZjYTk1OTUwNzMxOTRkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.MC0cTirtphrBf4kcgsn6YVADrdpeepz4hs3RvQ7gtjw",
        title: "클라이언트-서버 상호작용 아키텍처",
        titleEn: "Client-Server Interaction Architecture",
        description:
          "방 참가부터 게임 시작까지의 클라이언트-서버 통신 플로우: HTTP를 통한 초기 인증 및 토큰 발급, STOMP over WebSocket을 통한 실시간 게임 상태 동기화",
        descriptionEn:
          "Client-server communication flow from room entry to game start: Initial authentication and token issuance via HTTP, real-time game state synchronization via STOMP over WebSocket",
      },
      {
        url: "https://private-user-images.githubusercontent.com/117634128/534489539-853de40a-d771-462d-a483-92e1c9f1e536.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjgyMDc1MzgsIm5iZiI6MTc2ODIwNzIzOCwicGF0aCI6Ii8xMTc2MzQxMjgvNTM0NDg5NTM5LTg1M2RlNDBhLWQ3NzEtNDYyZC1hNDgzLTkyZTFjOWYxZTUzNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMTEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDExMlQwODQwMzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mZjA4ODg5NTZiOGQ1YjJmNjEzYjIwMWFlZGVkMWIwN2VkYjE0MmFlMTEwNDM0Y2I4MTgyMmUzYmRkYjZkNTBiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ADo4Rk2evf4WklfVXixLrK1YNDKrGYpLkGKzVfc3ZUA",
        title: "게임 플로우 아키텍처",
        titleEn: "Game Flow Architecture",
        description:
          "게임의 전체 플로우: 방 생성 및 입장, 레디 상태 관리, 게임 시작 및 진행(숨기/찾기), 승패 판정까지의 게임 라이프사이클",
        descriptionEn:
          "Complete game flow: Room creation and entry, ready state management, game start and progression (hide/seek), game lifecycle through win/loss determination",
      },
    ],
    retrospection: {
      whatWorkedWell:
        "동시성 제어와 클라이언트의 일관된 환경 제공 등 서버적인 측면에서는 성공적인 경험과 도전을 할 수 있었습니다. Server-Authority 모델을 통해 모든 게임 로직을 서버에서 중앙 집중식으로 관리함으로써, 여러 클라이언트가 동시에 요청을 보내도 일관된 게임 상태를 유지할 수 있었습니다. 또한 이벤트 기반 브로드캐스팅과 선택적 메시지 전송을 통해 네트워크 부하를 최소화하고 p95 Latency 50ms를 달성할 수 있었습니다.\n\n한 프로젝트 안에서 랜덤성 알고리즘(팀 배정, 아이템 효과 우선순위), 상태 머신(게임 라이프사이클), 토큰 기반 인증, 비동기 처리 등 다양한 기술과 개념을 실제로 구현해볼 수 있어서 값진 학습 경험이었습니다.",
      whatWorkedWellEn:
        "In terms of server-side aspects such as concurrency control and providing a consistent client environment, we had successful experiences and challenges. Through the Server-Authority model, by managing all game logic centrally on the server, we could maintain consistent game states even when multiple clients sent requests simultaneously. Additionally, through event-based broadcasting and selective message delivery, we minimized network load and achieved p95 latency of 50ms.\n\nIt was a valuable learning experience to be able to implement various technologies and concepts within a single project, including randomness algorithms (team assignment, item effect priority), state machines (game lifecycle), token-based authentication, and asynchronous processing.",
      areasForImprovement:
        "개발 컨텐츠 자체의 희소성과 차별성에 대해서는 좀 더 깊이 생각해보지 못했습니다.\n\n기술적 구현과 성능 최적화에 집중하는 과정에서, 게임 플레이 메커니즘의 독창성이나 사용자 경험의 차별화에 대한 고민이 부족했던 것 같습니다.\n\n향후 프로젝트에서는 기술적 완성도와 함께 사용자에게 제공하는 가치와 경험의 차별화에도 더 많은 시간을 할애해야 할 것 같습니다.",
      areasForImprovementEn:
        "We didn't think deeply enough about the scarcity and differentiation of the development content itself.\n\nIn the process of focusing on technical implementation and performance optimization, we lacked consideration for the originality of game play mechanisms or differentiation of user experience.\n\nIn future projects, we should allocate more time to differentiating the value and experience provided to users, along with technical completeness.",
      lessonsLearned:
        "실시간 멀티플레이어 시스템에서는 서버가 단일 진실 소스(Single Source of Truth)가 되어야 한다는 것을 몸소 경험했습니다.\n\n또한, 네트워크 효율성을 위해 불필요한 데이터 전송을 최소화하고, 필요한 정보만 선별적으로 브로드캐스트하는 것이 중요하다는 것을 깨달았습니다.\n\n프로젝트 초기부터 아키텍처를 명확히 설계하고, 플로우차트를 통해 클라이언트-서버 간 상호작용을 문서화한 것이 개발 과정에서 큰 도움이 되었습니다.",
      lessonsLearnedEn:
        "We personally experienced that in real-time multiplayer systems, the server must be the single source of truth.\n\nWe also learned that it's important to minimize unnecessary data transmission for network efficiency and selectively broadcast only necessary information.\n\nClearly designing the architecture from the beginning and documenting client-server interactions through flowcharts greatly helped during the development process.",
    },
    roleDetails: [
      "Server-authority 모델 도입으로 한 게임을 같이 즐기는 클라이언트들의 요청을 서버에서 통제하여 일관된 환경 유지",
      "게임 진행 라이프 사이클 구현 (게임 시작, 진행, 종료 관리)",
      "WebSocket을 활용한 실시간 멀티플레이어 동기화",
      "아이템 효과 시스템 구현: 아이템 효과 로직, 적용 메커니즘, 지속 시간 관리, 우선순위 알고리즘 개발",
      "인증/인가 시스템 구현",
      "전적 집계 및 통계 시스템 개발",
      "맵 축소 전략 및 게임 밸런스 로직 개발",
      "Selenium을 활용한 자동 QA 테스트 구현 (Web 기반 게임의 기능 및 성능 검증)",
    ],
    technicalHighlights: [
      {
        title: "동시성 처리 최적화",
        titleEn: "Concurrency Optimization",
        description:
          "Java의 ConcurrentQueue를 활용하여 비동기 요청 처리 시스템을 구축하여 300명 이상의 동시 접속자를 안정적으로 지원했습니다.",
        descriptionEn:
          "Built an asynchronous request processing system using Java's ConcurrentQueue, stably supporting 300+ concurrent users.",
      },
      {
        title: "Server-Authority 아키텍처",
        titleEn: "Server-Authority Architecture",
        description:
          "모든 게임 로직을 서버에서 처리하는 아키텍처로 치팅 방지와 게임 상태 일관성을 보장했습니다.",
        descriptionEn:
          "Implemented Server-Authority architecture processing all game logic on the server to prevent cheating and ensure game state consistency.",
      },
      {
        title: "WebSocket 실시간 통신",
        titleEn: "WebSocket Real-time Communication",
        description:
          "WebSocket을 통한 양방향 실시간 통신으로 플레이어 액션과 게임 상태를 즉시 동기화했습니다.",
        descriptionEn:
          "Implemented bidirectional real-time communication using WebSocket to instantly synchronize player actions and game state.",
      },
    ],
    challenges: [
      {
        problem: "높은 동시 접속자 처리",
        problemEn: "Handling High Concurrent Users",
        solution:
          "ConcurrentQueue를 활용한 비동기 요청 처리 시스템을 구축하고, 스레드 풀을 통해 CPU 자원을 최적화했습니다. 게임 로직과 네트워크 I/O를 분리하여 병목 현상을 해소하고 성능을 향상시켰습니다.",
        solutionEn:
          "Built an asynchronous request processing system using ConcurrentQueue and optimized CPU resources with thread pools. Separated game logic from network I/O to eliminate bottlenecks and improve performance.",
      },
      {
        problem: "게임 상태 일관성 유지",
        problemEn: "Maintaining Game State Consistency",
        solution:
          "Server-authority 모델을 도입하여 모든 게임 로직을 서버에서 처리하고, 클라이언트는 단순히 입력만 전송하도록 설계했습니다. 이를 통해 클라이언트 조작을 방지하고 모든 플레이어에게 동일한 게임 상태를 보장했습니다.",
        solutionEn:
          "Introduced a Server-authority model where all game logic is processed on the server, and clients only send inputs. This prevented client manipulation and ensured the same game state for all players.",
      },
      {
        problem: "실시간 동기화 지연 및 네트워크 부하 최소화",
        problemEn: "Minimizing Real-time Sync Latency and Network Load",
        solution:
          "게임 상태 변경 시 필요한 플레이어에게만 선택적 브로드캐스트하도록 최적화했습니다. 프레임 기반 업데이트 대신 이벤트 기반 업데이트를 채택하여 네트워크 트래픽을 대폭 감소시키고 지연 시간을 단축했습니다.",
        solutionEn:
          "Optimized to selectively broadcast only to necessary players on game state changes. Adopted event-based updates instead of frame-based updates, significantly reducing network traffic and latency.",
      },
      {
        problem: "아이템 효과 우선순위 및 충돌 처리",
        problemEn: "Item Effect Priority and Conflict Resolution",
        solution:
          "여러 아이템 효과가 동시에 적용될 때의 우선순위 알고리즘을 설계했습니다. 아이템 효과 스택 관리, 지속 시간 추적, 효과 적용 순서를 정의하여 일관된 게임 밸런스를 유지했습니다. 동시 발동 시 우선순위에 따라 효과를 적용하고, 중복 효과는 효율적으로 병합하도록 구현했습니다.",
        solutionEn:
          "Designed a priority algorithm for when multiple item effects are applied simultaneously. Defined item effect stack management, duration tracking, and application order to maintain consistent game balance. Implemented effect application based on priority when triggered simultaneously, and efficiently merged duplicate effects.",
      },
      {
        problem: "Web 기반 게임의 QA 효율화",
        problemEn: "QA Efficiency for Web-based Game",
        solution:
          "Web 기반 게임의 특성을 활용하여 Selenium을 통한 자동화 테스트를 구현했습니다. 게임 플로우, 로그인/로그아웃, 게임 생성/참여 등 주요 기능에 대한 E2E 테스트를 자동화하여 수동 테스트 시간을 대폭 단축하고 배포 전 품질을 보장했습니다.",
        solutionEn:
          "Leveraged web-based game characteristics to implement automated testing using Selenium. Automated E2E tests for key features such as game flow, login/logout, and game creation/participation, significantly reducing manual testing time and ensuring quality before deployment.",
      },
    ],
    results: [
      {
        metric: "50ms",
        description:
          "Locust 부하 테스트: 동시 접속자 1000명 시나리오에서 게임 상태 동기화 API p95 Latency 50ms 달성",
        descriptionEn:
          "Locust load test: Achieved p95 latency of 50ms for game state synchronization APIs with 1000 concurrent users scenario",
      },
      {
        metric: "300명+",
        description: "실제 동시 접속자 300명 이상 유치",
        descriptionEn: "Attracted 300+ actual concurrent users",
      },
      {
        metric: "99.9%",
        description:
          "서버 안정성 99.9% 달성, 치팅 방지를 위한 Server-Authority 아키텍처 구현",
        descriptionEn:
          "Achieved 99.9% server uptime, implemented Server-Authority architecture to prevent cheating",
      },
    ],
  },
  {
    id: 2,
    title: "Melodiket",
    titleEn: "Melodiket",
    description:
      "스마트 컨트랙트 기반 밴드 공연 티케팅 서비스. 불투명한 수익 분배 문제와 암표 피해를 해결하기 위해 블록체인 기술을 활용한 투명한 티케팅 시스템을 제공합니다. 공연장 관리자, 뮤지션, 관객 모두를 위한 통합 플랫폼입니다.",
    descriptionEn:
      "Smart contract-based band concert ticketing service. Provides a transparent ticketing system using blockchain technology to solve opaque profit distribution issues and ticket scalping problems. An integrated platform for venue managers, musicians, and audiences.",
    projectOrigin: "삼성 청년 SW 아카데미 11기 특화 프로젝트",
    projectOriginEn:
      "Samsung Software Academy For Youth 11th Specialization Project",
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
    image:
      "https://raw.githubusercontent.com/allkong/Melodiket/master/assets/melodiket.png",
    images: [
      {
        url: "https://github.com/allkong/Melodiket/raw/master/assets/demonstration/screenshots/%EA%B3%B5%EC%97%B0%20%EB%93%B1%EB%A1%9D.jpg",
        title: "공연 등록",
        titleEn: "Concert Registration",
      },
      {
        url: "https://github.com/allkong/Melodiket/raw/master/assets/demonstration/recordings/gif/%EA%B3%B5%EC%97%B0%20%EC%8A%B9%EC%9D%B81.gif",
        title: "공연 승인",
        titleEn: "Concert Approval",
      },
      {
        url: "https://github.com/allkong/Melodiket/raw/master/assets/demonstration/recordings/gif/%EB%82%B4%20%EA%B3%B5%EC%97%B0.gif",
        title: "내 공연",
        titleEn: "My Concerts",
      },
      {
        url: "https://github.com/allkong/Melodiket/raw/master/assets/demonstration/recordings/gif/%EA%B3%B5%EC%97%B0%20%EB%AA%A9%EB%A1%9D.gif",
        title: "공연 목록",
        titleEn: "Concert List",
      },
      {
        url: "https://github.com/allkong/Melodiket/raw/master/assets/demonstration/recordings/gif/%EC%B0%9C%20%EB%A6%AC%EC%8A%A4%ED%8A%B8.gif",
        title: "찜 리스트",
        titleEn: "Wishlist",
      },
      {
        url: "https://github.com/allkong/Melodiket/raw/master/assets/demonstration/recordings/gif/%EA%B3%B5%EC%97%B0%20%EC%98%88%EB%A7%A4-%EC%A2%8C%EC%84%9D2.gif",
        title: "공연 예매",
        titleEn: "Concert Booking",
      },
      {
        url: "https://github.com/allkong/Melodiket/raw/master/assets/demonstration/recordings/gif/%EC%98%88%EB%A7%A4%20%EB%82%B4%EC%97%AD-%EB%AA%A8%EB%B0%94%EC%9D%BC%20%ED%8B%B0%EC%BC%93.gif",
        title: "모바일 티켓",
        titleEn: "Mobile Ticket",
      },
      {
        url: "https://github.com/allkong/Melodiket/raw/master/assets/demonstration/recordings/gif/%EB%AA%A8%EB%B0%94%EC%9D%BC%20%ED%8B%B0%EC%BC%93%20%EC%8A%A4%EC%BA%94.gif",
        title: "티켓 스캔",
        titleEn: "Ticket Scanning",
      },
      {
        url: "https://github.com/allkong/Melodiket/raw/master/assets/demonstration/recordings/gif/%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98.gif",
        title: "트랜잭션",
        titleEn: "Transaction",
      },
      {
        url: "https://github.com/allkong/Melodiket/raw/master/assets/demonstration/recordings/gif/%ED%8F%AC%ED%86%A0%EC%B9%B4%EB%93%9C%20%EC%A0%9C%EC%9E%91-%EC%99%84%EB%A3%8C.gif",
        title: "포토카드 제작",
        titleEn: "Photocard Creation",
      },
      {
        url: "https://github.com/allkong/Melodiket/raw/master/assets/demonstration/recordings/gif/%ED%8F%AC%ED%86%A0%EC%B9%B4%EB%93%9C%20%EA%B3%B5%EC%9C%A0.gif",
        title: "포토카드 공유",
        titleEn: "Photocard Sharing",
      },
      {
        url: "https://github.com/allkong/Melodiket/raw/master/assets/demonstration/recordings/gif/%ED%8F%AC%ED%86%A0%EC%B9%B4%EB%93%9C-%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1%20%EA%B3%B5%EC%9C%A0.gif",
        title: "포토카드 카카오톡 공유",
        titleEn: "Photocard KakaoTalk Sharing",
      },
    ],
    githubUrl: "https://github.com/sevin98/melodiket",
    liveUrl: null,
    period: "2024.08 - 2024.10",
    teamSize: 6,
    myRole: "Backend Developer",
    overview:
      "스마트 컨트랙트 기반 밴드 공연 티케팅 서비스로, 불투명하고 불공정한 수익 분배 문제와 암표 피해를 해결하기 위해 블록체인 기술을 도입한 프로젝트입니다.\n\n이 프로젝트는 **3-tier 아키텍처 설계**를 통해 프레젠테이션, 비즈니스, 데이터 레이어를 명확히 분리하고, **스마트 컨트랙트를 활용한 자동화된 수익 분배 시스템**을 구축했습니다. 공연 관리자는 공연 등록 시 공연장, 뮤지션, 보너스 각각의 금액을 설정하고, 관객은 예매 시 최애 밴드를 선택하여 응원할 수 있으며, 공연 후 자동으로 투명하게 수익이 분배됩니다.\n\n**블록체인의 투명성**을 통해 모든 거래 내역이 블록체인에 기록되어 누구나 확인할 수 있도록 하여, 수익 분배의 공정성을 보장합니다. 또한 관객이 관람한 공연을 기념할 수 있도록 **NFT 기반 개인화된 포토카드**를 제작할 수 있으며, 최애 밴드의 싸인을 포토카드에 포함시켜 고유한 추억을 만들어갈 수 있습니다.\n\n백엔드 개발자로서 **Spring Security를 활용한 인증/인가 시스템**, **전역 예외 처리 및 에러 핸들링**, **Redisson 기반 분산 락을 통한 동시성 제어 구현**, **공연 계약의 복잡한 비즈니스 로직(뮤지션 승인, 계약 상태 관리, 정산 처리)** 등을 구현하여 엔터프라이즈급 백엔드 시스템의 핵심 기능들을 경험할 수 있었던 프로젝트입니다.",
    overviewEn:
      "A smart contract-based band concert ticketing service that introduces blockchain technology to solve opaque and unfair profit distribution issues and ticket scalping problems.\n\nThis project clearly separated presentation, business, and data layers through **3-tier architecture design** and built an **automated profit distribution system using smart contracts**. Venue managers can set separate amounts for the venue, musicians, and bonuses when registering concerts, audiences can select their favorite band when booking to show support, and profits are automatically and transparently distributed after the concert.\n\nThrough **blockchain transparency**, all transaction records are recorded on the blockchain and can be verified by anyone, ensuring fairness in profit distribution. Additionally, audiences can create **NFT-based personalized photocards** to commemorate concerts they attended, and can include their favorite band's signature on the photocard to create unique memories.\n\nAs a backend developer, this project provided valuable experience implementing core enterprise-level backend features such as **authentication/authorization systems using Spring Security**, **global exception handling and error management**, **Redisson-based distributed lock implementation for concurrency control**, and **complex business logic for concert contracts (musician approval, contract state management, settlement processing)**.",
    technologyReasons: [
      {
        technology: "Spring Boot 3",
        reason:
          "엔터프라이즈급 애플리케이션 개발을 위한 검증된 프레임워크로, RESTful API 개발과 의존성 주입을 통한 느슨한 결합 설계가 가능합니다. 특히 Spring Security를 통한 보안 강화와 JPA를 통한 데이터 영속성 관리가 효율적입니다.",
        reasonEn:
          "A proven framework for enterprise-level application development, enabling RESTful API development and loosely coupled design through dependency injection. Particularly effective for security enhancement through Spring Security and efficient data persistence management through JPA.",
      },
      {
        technology: "Spring Security",
        reason:
          "JWT 기반 인증 및 역할 기반 접근 제어(RBAC)를 구현하여 사용자 인증과 권한 관리를 안전하게 처리합니다. 필터 체인을 통해 요청 레벨에서의 보안 검증을 수행하고, 다양한 엔드포인트에 대한 세밀한 접근 제어가 가능합니다.",
        reasonEn:
          "Implements JWT-based authentication and Role-Based Access Control (RBAC) to securely handle user authentication and authorization. Performs security validation at the request level through filter chains and enables fine-grained access control for various endpoints.",
      },
      {
        technology: "Redis & Redisson",
        reason:
          "Redisson을 활용하여 분산 락 기반 동시성 제어를 구현했습니다. 동시에 여러 사용자가 같은 좌석을 예매하려고 할 때 발생하는 동시성 문제를 해결하기 위해 Redis 기반 분산 락을 적용하여 좌석 예매의 원자성을 보장하고, 데이터 일관성을 유지합니다. Redisson의 분산 락 기능을 통해 분산 환경에서도 안전하고 신뢰성 있는 좌석 예매 시스템을 구축했습니다.",
        reasonEn:
          "Implemented concurrency control using Redisson-based distributed locks. To solve concurrency issues when multiple users try to book the same seat simultaneously, applied Redis-based distributed locks to ensure atomicity of seat reservations and maintain data consistency. Built a safe and reliable seat booking system even in distributed environments through Redisson's distributed lock features.",
      },
      {
        technology: "Solidity & Web3j",
        reason:
          "Solidity로 스마트 컨트랙트를 작성하여 블록체인 상에서 자동화된 수익 분배 로직을 구현했습니다. Web3j를 통해 Java 백엔드와 이더리움 블록체인 네트워크를 연동하여 스마트 컨트랙트 배포 및 호출 기능을 구현했습니다.",
        reasonEn:
          "Wrote smart contracts in Solidity to implement automated profit distribution logic on the blockchain. Integrated Java backend with Ethereum blockchain network through Web3j to implement smart contract deployment and invocation features.",
      },
      {
        technology: "Node.js & IPFS",
        reason:
          "Node.js를 활용하여 IPFS 노드 서버를 구축하고, NFT 포토카드의 메타데이터와 이미지를 분산 저장소에 저장했습니다. IPFS의 해시 기반 콘텐츠 주소 지정을 통해 영구적인 데이터 저장 및 접근이 가능합니다.",
        reasonEn:
          "Built an IPFS node server using Node.js to store NFT photocard metadata and images in a distributed storage. Enables permanent data storage and access through IPFS's hash-based content addressing.",
      },
    ],
    architectureImages: [
      {
        url: "https://raw.githubusercontent.com/allkong/Melodiket/master/assets/architecture.jpg",
        title: "시스템 아키텍처",
        titleEn: "System Architecture",
        description:
          "3-tier 아키텍처 기반의 전체 시스템 구조: 프론트엔드(Next.js), 백엔드(Spring Boot), 블록체인(Solidity), 분산 저장소(IPFS)의 통합 구조",
        descriptionEn:
          "Complete system structure based on 3-tier architecture: Integrated structure of frontend (Next.js), backend (Spring Boot), blockchain (Solidity), and distributed storage (IPFS)",
      },
      {
        url: "https://raw.githubusercontent.com/allkong/Melodiket/master/assets/sequence-diagram.png",
        title: "시퀀스 다이어그램",
        titleEn: "Sequence Diagram",
        description:
          "공연 계약 및 예매 프로세스의 전체 시퀀스: 공연 등록부터 뮤지션 승인, 티케팅, 입장 처리까지의 전체 흐름",
        descriptionEn:
          "Complete sequence of concert contract and booking process: Full flow from concert registration through musician approval, ticketing, to entry processing",
      },
      {
        url: "https://raw.githubusercontent.com/allkong/Melodiket/master/assets/erd.png",
        title: "ERD",
        titleEn: "Entity Relationship Diagram",
        description:
          "데이터베이스 엔티티 관계도: 사용자, 공연, 계약, 티켓 등 핵심 엔티티 간의 관계 구조",
        descriptionEn:
          "Database entity relationship diagram: Relationship structure between core entities such as users, concerts, contracts, and tickets",
      },
    ],
    retrospection: {
      whatWorkedWell:
        "3-tier 아키텍처를 명확히 구분하여 각 레이어의 책임을 분리함으로써 유지보수성과 확장성을 크게 향상시킬 수 있었습니다. 전역 예외 처리 핸들러를 구현하여 일관된 에러 응답 형식을 제공하고, 개발 및 디버깅 효율성을 높였습니다. 또한 Spring Security를 활용한 인증/인가 시스템을 구축하여 보안성 있는 API를 설계할 수 있었습니다.\n\n공연 계약의 복잡한 비즈니스 로직(뮤지션 승인 대기, 승인 완료, 계약 확정 등 다양한 상태 전이)을 상태 패턴과 전략 패턴을 활용하여 깔끔하게 구현할 수 있었고, 스마트 컨트랙트와 백엔드의 연동을 통해 블록체인 기술을 실제 서비스에 적용해볼 수 있는 경험이었습니다.",
      whatWorkedWellEn:
        "By clearly distinguishing 3-tier architecture and separating responsibilities of each layer, we significantly improved maintainability and scalability. Implementing a global exception handler provided consistent error response formats and increased development and debugging efficiency. Additionally, building an authentication/authorization system using Spring Security enabled us to design secure APIs.\n\nWe could cleanly implement complex business logic for concert contracts (various state transitions such as waiting for musician approval, approval completion, contract confirmation) using state and strategy patterns, and gained experience applying blockchain technology to actual services through integration of smart contracts and backend.",
      areasForImprovement:
        "프로젝트 초기 단계에서 블록체인 트랜잭션 처리에 대한 충분한 고민이 부족했습니다.\n\n블록체인 네트워크의 지연 시간과 가스 비용 등 실제 운영 환경에서의 제약사항을 더 깊이 고려하지 못했습니다.\n\n또한 스마트 컨트랙트와 백엔드 간의 데이터 동기화 문제나 트랜잭션 실패 시 롤백 처리 등에 대한 대응 방안을 더 체계적으로 설계했어야 했을 것 같습니다.",
      areasForImprovementEn:
        "We lacked sufficient consideration for blockchain transaction processing in the early stages of the project.\n\nWe didn't deeply consider real-world operational constraints such as blockchain network latency and gas costs.\n\nAdditionally, we should have more systematically designed solutions for data synchronization issues between smart contracts and backend, or rollback handling when transactions fail.",
      lessonsLearned:
        "엔터프라이즈급 애플리케이션에서는 아키텍처 설계와 예외 처리 전략이 매우 중요하다는 것을 배웠습니다.\n\n전역 예외 처리 핸들러를 통해 일관된 에러 응답을 제공하고, 적절한 HTTP 상태 코드와 에러 메시지를 설계함으로써 클라이언트 개발자와의 협업 효율성을 높일 수 있었습니다.\n\n또한 복잡한 비즈니스 로직은 디자인 패턴을 적절히 활용하여 가독성과 유지보수성을 높일 수 있다는 것을 경험했습니다.\n\n블록체인 기술을 실제 서비스에 도입할 때는 네트워크 특성과 비용 구조를 충분히 고려해야 한다는 점도 중요한 교훈이었습니다.",
      lessonsLearnedEn:
        "We learned that architecture design and exception handling strategies are very important in enterprise-level applications.\n\nBy providing consistent error responses through a global exception handler and designing appropriate HTTP status codes and error messages, we could improve collaboration efficiency with frontend developers.\n\nWe also experienced that complex business logic can be improved in readability and maintainability by appropriately utilizing design patterns.\n\nAnother important lesson was that when introducing blockchain technology to actual services, we must sufficiently consider network characteristics and cost structures.",
    },
    roleDetails: [
      "3-tier 아키텍처 설계 및 핵심 비즈니스 로직 구현",
      "Spring Security 기반 JWT 인증/인가 시스템 구현",
      "전역 예외 처리 핸들러 및 에러 핸들링 구현",
      "Redisson 기반 분산 락을 통한 동시성 제어 구현",
      "공연 계약 주요 비즈니스 로직 구현 (뮤지션 승인/거절, 계약 상태 관리, 정산 처리)",
      "상태 패턴 및 전략 패턴을 활용한 계약 상태 전이 로직 개발",
      "스마트 컨트랙트와 백엔드 연동 (Web3j 활용)",
      "RESTful API 설계 및 구현",
    ],
    technicalHighlights: [
      {
        title: "3-tier 아키텍처",
        titleEn: "3-tier Architecture",
        description:
          "프레젠테이션, 비즈니스, 데이터 레이어를 명확히 분리하여 유지보수성과 확장성을 향상시켰습니다.",
        descriptionEn:
          "Clearly separated presentation, business, and data layers to improve maintainability and scalability.",
      },
      {
        title: "스마트 컨트랙트 연동",
        titleEn: "Smart Contract Integration",
        description:
          "Web3j를 통해 Java 백엔드와 이더리움 블록체인을 연동하여 자동화된 수익 분배 시스템을 구현했습니다.",
        descriptionEn:
          "Integrated Java backend with Ethereum blockchain through Web3j to implement an automated profit distribution system.",
      },
      {
        title: "전역 예외 처리",
        titleEn: "Global Exception Handling",
        description:
          "일관된 에러 응답 형식을 제공하는 전역 예외 처리 핸들러를 구현하여 개발 및 디버깅 효율성을 향상시켰습니다.",
        descriptionEn:
          "Implemented a global exception handler providing consistent error response formats to improve development and debugging efficiency.",
      },
    ],
    challenges: [
      {
        problem: "복잡한 공연 계약 상태 관리",
        problemEn: "Complex Concert Contract State Management",
        solution:
          "상태 패턴(State Pattern)을 적용하여 공연 계약의 다양한 상태(대기, 승인, 확정, 취소 등)를 명확히 모델링했습니다. 각 상태별로 허용되는 작업과 상태 전이 규칙을 정의하여 비즈니스 로직의 복잡성을 관리하고 코드의 가독성을 향상시켰습니다.",
        solutionEn:
          "Applied State Pattern to clearly model various states of concert contracts (pending, approved, confirmed, cancelled, etc.). Defined allowed operations and state transition rules for each state to manage business logic complexity and improve code readability.",
      },
      {
        problem: "블록체인 트랜잭션 처리 및 동기화",
        problemEn: "Blockchain Transaction Processing and Synchronization",
        solution:
          "Web3j를 활용하여 스마트 컨트랙트와 백엔드를 연동하고, 트랜잭션 상태를 추적하는 메커니즘을 구현했습니다. 블록체인 트랜잭션이 비동기적으로 처리되는 특성을 고려하여 트랜잭션 해시를 저장하고 주기적으로 상태를 확인하는 방식으로 데이터 일관성을 유지했습니다.",
        solutionEn:
          "Integrated smart contracts with backend using Web3j and implemented a mechanism to track transaction status. Considering that blockchain transactions are processed asynchronously, maintained data consistency by storing transaction hashes and periodically checking status.",
      },
      {
        problem: "전역 예외 처리 및 에러 응답 표준화",
        problemEn:
          "Global Exception Handling and Error Response Standardization",
        solution:
          "Spring의 @ControllerAdvice를 활용한 전역 예외 처리 핸들러를 구현하여 모든 예외를 일관된 형식으로 처리했습니다. 커스텀 예외 클래스를 정의하고 적절한 HTTP 상태 코드와 에러 메시지를 매핑하여 클라이언트가 쉽게 이해하고 처리할 수 있는 에러 응답을 제공했습니다.",
        solutionEn:
          "Implemented a global exception handler using Spring's @ControllerAdvice to handle all exceptions in a consistent format. Defined custom exception classes and mapped appropriate HTTP status codes and error messages to provide error responses that clients can easily understand and handle.",
      },
      {
        problem: "인증/인가 시스템 보안 강화",
        problemEn:
          "Security Enhancement for Authentication/Authorization System",
        solution:
          "Spring Security와 JWT를 결합하여 토큰 기반 인증 시스템을 구현했습니다. 역할 기반 접근 제어(RBAC)를 적용하여 사용자 역할(관객, 뮤지션, 공연장 관리자)에 따라 접근 가능한 API를 세밀하게 제어했습니다. 또한 토큰 만료 시간과 리프레시 토큰 메커니즘을 구현하여 보안성을 강화했습니다.",
        solutionEn:
          "Implemented a token-based authentication system by combining Spring Security and JWT. Applied Role-Based Access Control (RBAC) to finely control APIs accessible based on user roles (audience, musician, venue manager). Also enhanced security by implementing token expiration times and refresh token mechanisms.",
      },
      {
        problem: "하이브리드 데이터베이스 구조 관리",
        problemEn: "Managing Hybrid Database Structure",
        solution:
          "구조화된 데이터(사용자, 공연 정보, 계약)는 MySQL에, 비구조화된 데이터(로그, 메타데이터)는 MongoDB에 저장하는 하이브리드 구조를 채택했습니다. 각 데이터베이스의 특성에 맞는 데이터 저장 및 조회 전략을 수립하고, 트랜잭션 경계를 명확히 하여 데이터 일관성을 보장했습니다.",
        solutionEn:
          "Adopted a hybrid structure where structured data (users, concert information, contracts) is stored in MySQL and unstructured data (logs, metadata) is stored in MongoDB. Established data storage and retrieval strategies suitable for each database's characteristics and ensured data consistency by clearly defining transaction boundaries.",
      },
    ],
    results: [
      {
        metric: "우수 프로젝트 수상",
        description:
          "SSAFY 11기 2학기 특화 프로젝트에서 삼성전자 우수상을 수상했습니다.",
        descriptionEn:
          "Awarded Samsung Electronics Excellence Award in SSAFY 11th Specialization Project.",
      },
      {
        metric: "블록체인 기반 투명한 수익 분배",
        description:
          "스마트 컨트랙트를 활용한 자동 수익 분배 시스템 구현. 이더리움 네트워크에 직접 구현하여 거래 내역 투명성 및 공정성을 보장합니다.",
        descriptionEn:
          "Implemented automated profit distribution system using smart contracts. Directly deployed on Ethereum network to ensure transaction transparency and fairness.",
      },
      {
        metric: "NFT 개인화된 포토카드",
        description:
          "관객이 관람한 공연을 기념할 수 있도록 NFT 포토카드를 제작할 수 있으며, 최애 밴드의 싸인을 포함시켜 개인화된 추억을 만들어갈 수 있습니다. IPFS 분산 저장소를 활용하여 영구적으로 저장됩니다.",
        descriptionEn:
          "Allows audiences to create NFT photocards to commemorate concerts they attended, and can include their favorite band's signature to create personalized memories. Stored permanently using IPFS distributed storage.",
      },
    ],
  },
];

export const awards = [
  {
    title: "프로젝트 우수상 (1위)",
    titleEn: "Project Excellence Award (1st Place)",
    organization: "삼성전자 주식회사",
    organizationEn: "Samsung Electronics",
    period: "Oct 2024",
    date: "2024.10.11",
    description: "SSAFY 과정 중 진행한 프로젝트에서 우수상을 수상",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "Node.js", "Express", "Next.js"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "Redis", "MongoDB"],
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
