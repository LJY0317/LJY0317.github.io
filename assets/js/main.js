const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  nav?.classList.toggle('is-open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('is-open');
  });
});

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const sharedKo = {
  'Skip to content': '본문으로 건너뛰기',
  'Open navigation': '내비게이션 열기',
  'Primary navigation': '주요 내비게이션',
  'Work': '프로젝트', 'About': '소개', 'Skills': '기술', 'Contact': '연락하기',
  'Portfolio': '포트폴리오', 'Breadcrumb': '현재 위치', 'Project snapshot': '프로젝트 요약',
  'Project navigation': '프로젝트 이동', 'Product': '제품', 'Team': '팀', 'My focus': '담당 영역', 'Core tools': '핵심 기술',
  'Context': '배경', 'Responsibility': '담당 업무', 'Problem': '문제', 'Action': '수행', 'Result': '결과', 'Evidence': '근거',
  'What the team built': '팀이 만든 제품', 'What I worked on': '내가 맡은 업무', 'Scope boundary': '범위 구분',
  'Software Engineer · Seoul': '소프트웨어 엔지니어 · 서울',
  'Selected work': '주요 프로젝트', 'Education': '교육', 'Languages': '언어', 'Frontend & mobile': '프론트엔드·모바일',
  'Backend & integration': '백엔드·통합', 'Robotics & imaging': '로보틱스·이미징',
  'Email me': '이메일 보내기', 'Email': '이메일',
  'View selected work': '주요 프로젝트 보기', 'View case study': '상세 사례 보기', 'View engineering note': '엔지니어링 노트 보기',
  'Built as a lightweight static portfolio.': '가볍고 빠른 정적 포트폴리오로 제작했습니다.',
  'Your browser does not support the video element.': '이 브라우저는 동영상 재생을 지원하지 않습니다.'
};

const pageKo = {
  '/': {
    title: '이재엽 — 소프트웨어 엔지니어',
    description: '로보틱스, 백엔드 시스템, 데이터 통합, 웹과 모바일을 아우르는 소프트웨어 엔지니어 이재엽의 포트폴리오입니다.',
    strings: {
      'Building software across robotics, data, web, and mobile.': '로보틱스, 데이터, 웹과 모바일을 잇는 소프트웨어를 만듭니다.',
      'I focus on integration work: connecting components, validating assumptions, tracing failures, and making system behaviour easier to test and explain.': '구성 요소를 연결하고 가정을 검증하며 오류의 원인을 추적해, 시스템을 더 쉽게 시험하고 설명할 수 있도록 만드는 통합 작업에 집중합니다.',
      'Areas of engineering work': '엔지니어링 업무 영역', 'Robotics': '로보틱스', 'Data': '데이터', 'Web': '웹', 'Mobile': '모바일',
      'Integration': '통합', 'Reliable systems': '신뢰할 수 있는 시스템', 'Validation · Debugging · Observable failures': '검증 · 디버깅 · 관찰 가능한 오류',
      'Projects explained through responsibility, problem, action, and evidence.': '담당 범위, 문제, 수행 과정과 근거를 중심으로 설명한 프로젝트입니다.',
      'Each case study separates the team product from the work I personally handled.': '각 사례에서 팀 전체 결과물과 제가 직접 맡은 업무를 구분했습니다.',
      'Robotics & system integration · Six-person team · 2026': '로보틱스·시스템 통합 · 6인 팀 · 2026',
      'Autonomous Greenhouse Robot': '자율주행 온실 로봇',
      'ROS 2 and Gazebo simulation work focused on mapping, navigation behaviour, runtime integration, and operator feedback.': 'ROS 2와 Gazebo 시뮬레이션에서 매핑, 주행 동작, 런타임 통합과 운영자 피드백을 다뤘습니다.',
      'Robot simulation, mapping experiments, navigation flows, and integration debugging.': '로봇 시뮬레이션, 매핑 실험, 주행 흐름과 통합 디버깅.',
      'Gazebo/RViz captures, a system walkthrough, and a mapping debug recording.': 'Gazebo/RViz 화면, 시스템 시연과 매핑 디버그 녹화.',
      'Team simulation environment and mapping context.': '팀 시뮬레이션 환경과 매핑 맥락.',
      'Gazebo greenhouse simulation beside an RViz mapping view': 'Gazebo 온실 시뮬레이션과 RViz 매핑 화면',
      'Full-stack & data integration · Two-person team · 2025': '풀스택·데이터 통합 · 2인 팀 · 2025',
      'ETF Data Platform': 'ETF 데이터 플랫폼',
      'A financial-information project centred on repeatable data collection, search, filtering, ranking, and historical views.': '반복 가능한 데이터 수집과 검색, 필터, 순위, 과거 데이터 조회를 중심으로 한 금융 정보 프로젝트입니다.',
      'ETF data workflows, API integration, user-facing data views, testing, and refactoring.': 'ETF 데이터 흐름, API 통합, 사용자 데이터 화면, 테스트와 리팩터링.',
      'Repository-backed implementation notes. No public screenshots are currently available.': '저장소로 확인 가능한 구현 기록. 현재 공개 가능한 스크린샷은 없습니다.',
      'Data sources flowing into a Django data service and then into search, rankings, and charts': '데이터 소스가 Django 데이터 서비스로 들어가 검색, 순위, 차트로 이어지는 흐름',
      'Data pipeline': '데이터 파이프라인', 'Collect · validate · deduplicate': '수집 · 검증 · 중복 제거', 'Django data service': 'Django 데이터 서비스',
      'Searchable ETF records': '검색 가능한 ETF 데이터', 'Search': '검색', 'Rankings': '순위', 'Charts': '차트',
      'Frontend integration · Six-person team · 2026': '프론트엔드 통합 · 6인 팀 · 2026', 'Study Matching Platform': '스터디 매칭 플랫폼',
      'Targeted React and TypeScript work to restore build reliability and remove incorrect API and environment assumptions.': '빌드 신뢰성을 회복하고 잘못된 API·환경 설정 가정을 제거하기 위해 React와 TypeScript 코드를 집중적으로 수정했습니다.',
      'Build fixes, stale code removal, API-response assumptions, and Vite environment configuration.': '빌드 오류 수정, 사용하지 않는 코드 제거, API 응답 가정 정정과 Vite 환경 설정.',
      'A privacy-safe team product screen and an engineering explanation of the corrected integration path.': '개인정보를 가린 팀 제품 화면과 수정된 통합 경로에 대한 엔지니어링 설명.',
      'Togethy study discovery grid with six sample study cards': '샘플 스터디 카드 6개가 보이는 Togethy 스터디 탐색 화면',
      'Privacy-safe crop of the team product interface.': '개인정보를 노출하지 않도록 잘라낸 팀 제품 화면.',
      'Full-stack timetable import · Six-person team · 2026': '풀스택 시간표 가져오기 · 6인 팀 · 2026', 'Dayori Student Planner': 'Dayori 학생 플래너',
      'A cross-platform academic planner with two timetable-import paths and a review workflow for structured schedule data.': '두 가지 시간표 가져오기 방식과 구조화된 일정 검토 흐름을 갖춘 크로스플랫폼 학업 플래너입니다.',
      'Shared UI tokens and responsive UX, timetable OCR and Everytime import, and related backend APIs.': '공통 UI 토큰과 반응형 UX, 시간표 OCR·에브리타임 가져오기, 관련 백엔드 API.',
      'Import screens, timetable results, product-context screens, and selected interaction recordings.': '가져오기 화면, 시간표 결과, 제품 맥락 화면과 선별한 상호작용 녹화.',
      'Dayori project cover presenting calendar, gallery, and handwritten-note screens': '캘린더, 갤러리, 손글씨 노트 화면을 보여 주는 Dayori 프로젝트 표지',
      'Dayori team product overview; individual work is detailed in the case study.': 'Dayori 팀 제품 개요이며, 개인 담당 업무는 상세 사례에서 설명합니다.',
      'From communication studies to software systems.': '커뮤니케이션 전공에서 소프트웨어 시스템으로.',
      'I studied English Language and Culture at Hanyang University ERICA before completing intensive software engineering training at SSAFY.': '한양대학교 ERICA에서 영미언어·문화학을 전공한 뒤 SSAFY에서 집중 소프트웨어 엔지니어링 교육을 이수했습니다.',
      'Across team projects, I worked at the boundaries between robotics, backend services, frontend integration, data workflows, and mobile applications.': '팀 프로젝트에서 로보틱스, 백엔드 서비스, 프론트엔드 통합, 데이터 흐름과 모바일 애플리케이션의 경계를 연결하는 일을 맡았습니다.',
      'Technologies used in verified project contributions.': '확인 가능한 프로젝트 기여에서 사용한 기술입니다.',
      'React, Flutter, Vue.js, responsive UI implementation': 'React, Flutter, Vue.js, 반응형 UI 구현',
      'Spring Boot, Django, Django REST Framework, REST / HTTP APIs, XML parsing': 'Spring Boot, Django, Django REST Framework, REST / HTTP API, XML 파싱',
      'Technical training and an international communication foundation.': '기술 교육과 국제 커뮤니케이션 기반.',
      'Software engineering training': '소프트웨어 엔지니어링 교육', 'Samsung Software Academy For Youth': '삼성 청년 SW 아카데미',
      'Project-based training across algorithms, web, mobile, robotics, and team development.': '알고리즘, 웹, 모바일, 로보틱스와 팀 개발을 아우르는 프로젝트 중심 교육.',
      "Bachelor's degree": '학사', 'Hanyang University ERICA': '한양대학교 ERICA', 'English Language and Culture.': '영미언어·문화학.',
      'Open to software engineering opportunities.': '소프트웨어 엔지니어 기회를 찾고 있습니다.'
    }
  },
  '/projects/etf-platform/': {
    title: 'ETF 데이터 플랫폼 — 이재엽', description: 'MOUDA 플랫폼에서 이재엽이 맡은 ETF 데이터 흐름, 검색 화면과 API 통합 업무 사례입니다.',
    strings: {
      'ETF data platform': 'ETF 데이터 플랫폼', 'ETF Data Platform': 'ETF 데이터 플랫폼', 'Full-stack & data integration · Two-person team': '풀스택·데이터 통합 · 2인 팀',
      'MOUDA combined ETF information, financial-product views, external content, recommendations, and community features. This page focuses on my ETF data collection, browsing, chart, API integration, testing, and refactoring work.': 'MOUDA는 ETF 정보, 금융 상품 조회, 외부 콘텐츠, 추천과 커뮤니티 기능을 결합한 서비스입니다. 이 페이지는 제가 맡은 ETF 데이터 수집, 탐색, 차트, API 통합, 테스트와 리팩터링에 집중합니다.',
      'View contribution': '기여 내용 보기', 'View evidence limits': '근거 범위 보기', 'ETF data pipeline': 'ETF 데이터 파이프라인',
      'ETF and financial-information platform': 'ETF·금융 정보 플랫폼', 'Two-person project': '2인 프로젝트', 'Data pipeline, ETF views, APIs, testing, refactoring': '데이터 파이프라인, ETF 화면, API, 테스트, 리팩터링',
      'The team platform covered ETF information alongside deposits and savings products, external video and news content, recommendation features, user profiles, and community functions.': '팀 플랫폼은 ETF 정보뿐 아니라 예·적금 상품, 외부 영상과 뉴스, 추천, 사용자 프로필과 커뮤니티 기능을 제공했습니다.',
      'The repository assigns a defined subset of numbered features to me. This page describes that subset and does not claim ownership of the entire product or its complete interface design.': '저장소에는 번호로 구분된 일부 기능이 제 담당으로 기록되어 있습니다. 이 페이지는 그 범위만 설명하며 제품 전체나 모든 화면 디자인을 제 작업으로 주장하지 않습니다.',
      'From raw market data to usable views': '원시 시장 데이터를 활용 가능한 화면으로',
      'ETF browsing depends on consistent data collection and update behaviour. Duplicate records, expensive inserts, incomplete histories, or mismatched API responses quickly surface as incorrect filters, charts, and detail pages.': 'ETF 탐색 기능은 일관된 데이터 수집과 업데이트에 달려 있습니다. 중복 데이터, 비효율적인 삽입, 불완전한 이력이나 어긋난 API 응답은 곧바로 잘못된 필터, 차트와 상세 화면으로 이어집니다.',
      'Collected more than 1,000 ETF records and daily market data through PyKRX-backed workflows.': 'PyKRX 기반 흐름으로 1,000개가 넘는 ETF 정보와 일별 시장 데이터를 수집했습니다.',
      'Used Django management commands, bulk insertion, uniqueness constraints, duplicate prevention, and incremental updates.': 'Django 관리 명령, 일괄 삽입, 고유성 제약, 중복 방지와 증분 업데이트를 적용했습니다.',
      'Implemented ETF search, filters, sorting, pagination, detail information, and historical chart views.': 'ETF 검색, 필터, 정렬, 페이지네이션, 상세 정보와 기간별 차트 화면을 구현했습니다.',
      'Integrated external content flows including YouTube and Naver News APIs.': 'YouTube와 네이버 뉴스 API를 포함한 외부 콘텐츠 흐름을 통합했습니다.',
      'Performed bug testing, fixes, performance work, and code refactoring within the assigned feature set.': '담당 기능 범위에서 버그 테스트와 수정, 성능 개선, 코드 리팩터링을 수행했습니다.',
      'The project produced repeatable data-loading workflows and user-facing ETF exploration features built on the same structured records. The repository documents the implementation, but no curated public screenshots or videos were supplied for this portfolio update.': '프로젝트는 반복 실행 가능한 데이터 적재 흐름과 동일한 구조화 데이터를 기반으로 한 ETF 탐색 기능을 만들었습니다. 구현 내용은 저장소에서 확인할 수 있지만, 이번 포트폴리오에 공개할 검토 완료 스크린샷이나 영상은 제공되지 않았습니다.',
      'ETF data workflow': 'ETF 데이터 처리 흐름', 'Collect source data': '원천 데이터 수집', 'Validate fields': '필드 검증', 'Prevent duplicates': '중복 방지', 'Expose APIs': 'API 제공', 'Search and visualise': '검색·시각화',
      'Text-first by design': '텍스트 중심으로 구성한 이유', 'The curated media workspace contains no ETF images or videos. This page therefore uses a data-flow diagram and repository-backed descriptions only.': '선별된 미디어 자료에는 ETF 이미지나 영상이 없습니다. 따라서 이 페이지는 데이터 흐름도와 저장소로 확인 가능한 설명만 사용합니다.',
      'No invented visuals': '꾸며낸 시각 자료 없음', 'No generated dashboard, fake screenshot, stock photograph, or unverified performance chart is used. A sample-data demo can be added later only if it is clearly labelled as an independently prepared demonstration.': '생성형 대시보드, 가짜 스크린샷, 스톡 사진이나 검증되지 않은 성능 차트를 사용하지 않았습니다. 샘플 데이터 데모는 독립 제작 시연임을 명확히 표시하는 경우에만 추후 추가할 수 있습니다.',
      'Collection scale': '수집 규모', 'More than 1,000 ETF records, as documented in the project README.': '프로젝트 README에 기록된 1,000개 이상의 ETF 데이터.', 'Update strategy': '업데이트 전략',
      'Bulk insertion, uniqueness constraints, duplicate prevention, and incremental updates.': '일괄 삽입, 고유성 제약, 중복 방지와 증분 업데이트.', 'User views': '사용자 화면',
      'Search, category and provider filters, sorting, pagination, details, and period charts.': '검색, 분류·운용사 필터, 정렬, 페이지네이션, 상세 정보와 기간별 차트.', 'Current limitation': '현재 제한', 'No reviewed public media has been selected for this project.': '이 프로젝트에는 검토를 마친 공개 미디어가 아직 없습니다.',
      '← Previous: Greenhouse robot': '← 이전: 온실 로봇', 'Next: Study platform →': '다음: 스터디 플랫폼 →', 'No ETF media is published without reviewed source material.': '검토된 원본 자료 없이 ETF 미디어를 공개하지 않습니다.'
    }
  }
};

pageKo['/projects/greenhouse-robot/'] = {
  title: '자율주행 온실 로봇 — 이재엽',
  description: 'ROS 2 온실 로봇 시뮬레이션에서 이재엽이 수행한 매핑, 주행과 시스템 통합 업무 사례입니다.',
  strings: {
    'Greenhouse robot': '온실 로봇', 'Robotics & system integration · Team project': '로보틱스·시스템 통합 · 팀 프로젝트',
    'Autonomous Greenhouse Robot': '자율주행 온실 로봇',
    'A ROS 2 and Gazebo simulation integrating robot navigation, operator controls, backend services, and greenhouse workflows. This page focuses on my mapping, navigation, and integration work.': '로봇 주행, 운영자 제어, 백엔드 서비스와 온실 업무 흐름을 통합한 ROS 2·Gazebo 시뮬레이션입니다. 이 페이지는 제가 맡은 매핑, 주행과 통합 업무에 집중합니다.',
    'View evidence': '근거 보기', 'My responsibility': '담당 업무',
    'Gazebo greenhouse simulation showing the robot environment beside an RViz mapping view': '로봇 환경과 RViz 매핑 화면을 함께 보여 주는 Gazebo 온실 시뮬레이션',
    'Greenhouse overview image is unavailable.': '온실 개요 이미지를 불러올 수 없습니다.', 'Greenhouse simulation and mapping context. Team project environment.': '온실 시뮬레이션과 매핑 맥락. 팀 프로젝트 환경입니다.',
    'Smart-farm robot simulation and control system': '스마트팜 로봇 시뮬레이션·제어 시스템', 'Mapping, navigation flows, simulation, integration debugging': '매핑, 주행 흐름, 시뮬레이션, 통합 디버깅',
    'The team product combined a ROS 2 robot workspace, a FastAPI backend, a React operator interface, PostgreSQL, and MQTT. The broader system included patrol and movement scenarios, diagnosis and harvest flows, stored decision history, and operator monitoring.': '팀 제품은 ROS 2 로봇 워크스페이스, FastAPI 백엔드, React 운영자 화면, PostgreSQL과 MQTT를 결합했습니다. 전체 시스템에는 순찰·이동 시나리오, 진단·수확 흐름, 의사결정 이력 저장과 운영자 모니터링이 포함됐습니다.',
    'The dashboard, diagnosis screens, database model, and full system walkthrough are shown as team-project context. They are not presented as interfaces or features designed solely by me.': '대시보드, 진단 화면, 데이터베이스 모델과 전체 시스템 시연은 팀 프로젝트 맥락으로 제시합니다. 제가 단독으로 설계한 화면이나 기능으로 소개하지 않습니다.',
    'High-level system flow': '상위 수준 시스템 흐름', 'Sensors & simulation': '센서·시뮬레이션', 'ROS 2 runtime': 'ROS 2 런타임', 'Mapping & navigation': '매핑·주행', 'Backend integration': '백엔드 통합', 'Operator feedback': '운영자 피드백',
    'My work centred on the robot simulation and navigation path: preparing mapping experiments, handling map-related runtime behaviour, connecting navigation flows, and diagnosing integration problems between Gazebo, ROS 2 state, and operator-facing behaviour.': '제 업무는 로봇 시뮬레이션과 주행 경로에 집중됐습니다. 매핑 실험을 준비하고 지도 관련 런타임 동작을 다루며, 주행 흐름을 연결하고 Gazebo·ROS 2 상태·운영자 화면 사이의 통합 문제를 진단했습니다.',
    'Simulation and navigation components can appear to start successfully while still disagreeing about time, transforms, odometry, localisation state, or map lifecycle. Those failures are difficult to explain from the interface alone.': '시뮬레이션과 주행 구성 요소는 정상적으로 시작된 것처럼 보여도 시간, 좌표 변환, 오도메트리, 위치 추정 상태나 지도 생명주기가 서로 어긋날 수 있습니다. 이런 오류는 화면만으로 원인을 설명하기 어렵습니다.',
    'Ran lower-load world and mapping experiments to isolate simulation and map behaviour.': '시뮬레이션과 지도 동작을 분리해 확인하기 위해 부하를 낮춘 월드와 매핑 실험을 수행했습니다.',
    'Checked Gazebo, RViz, transforms, odometry, and localisation startup as one connected runtime path.': 'Gazebo, RViz, 좌표 변환, 오도메트리와 위치 추정 시작 과정을 하나의 연결된 런타임 경로로 점검했습니다.',
    'Worked on navigation flows and operator-state integration rather than treating each component as an isolated demo.': '각 구성 요소를 독립 시연으로 다루지 않고 주행 흐름과 운영자 상태 통합을 함께 작업했습니다.',
    'The final project repository documents a verified end-to-end demonstration covering the frontend, robot state, diagnosis, harvest completion, and supporting APIs. The media below separates that team-level demonstration from my own mapping-debug evidence.': '최종 프로젝트 저장소에는 프론트엔드, 로봇 상태, 진단, 수확 완료와 관련 API를 아우르는 검증된 종단 간 시연이 기록돼 있습니다. 아래 자료에서는 팀 단위 시연과 제가 직접 수행한 매핑 디버그 근거를 구분합니다.',
    'Runtime and iteration': '런타임과 반복 개선', 'Mapping debug session': '매핑 디버그 세션', 'Full system demonstration': '전체 시스템 시연',
    'A four-times-speed recording of my low-load world and map experiment. This is the strongest direct media evidence for my contribution.': '부하를 낮춘 월드와 지도 실험을 4배속으로 녹화한 영상입니다. 제 기여를 가장 직접적으로 보여 주는 자료입니다.',
    'Team-project overview covering mapping, navigation, diagnosis, and harvesting. It demonstrates the integrated product, not my individual ownership of every visible feature.': '매핑, 주행, 진단과 수확을 다루는 팀 프로젝트 전체 시연입니다. 통합 제품을 보여 주는 자료이며, 화면에 보이는 모든 기능을 제가 단독 구현했다는 뜻은 아닙니다.',
    'Broader system': '전체 시스템', 'Team context': '팀 프로젝트 맥락',
    '← Back to portfolio': '← 포트폴리오로', 'Next: ETF data platform →': '다음: ETF 데이터 플랫폼 →'
  }
};

pageKo['/projects/study-platform/'] = {
  title: '스터디 매칭 플랫폼 — 이재엽', description: 'Togethy 스터디 플랫폼에서 이재엽이 수행한 프론트엔드 통합 수정 업무를 설명합니다.',
  strings: {
    'Study platform': '스터디 플랫폼', 'Frontend integration · Team project': '프론트엔드 통합 · 팀 프로젝트', 'Study Matching Platform': '스터디 매칭 플랫폼',
    'Togethy was a broad study-management and collaboration platform. My contribution was narrower: targeted React and TypeScript fixes on the frontend integration path.': 'Togethy는 스터디 관리와 협업을 폭넓게 지원하는 플랫폼입니다. 제 기여는 그중 프론트엔드 통합 경로의 React·TypeScript 문제를 집중적으로 수정하는 일이었습니다.',
    'Read engineering note': '엔지니어링 노트 읽기', 'View product context': '제품 맥락 보기',
    'Privacy-safe crop of the study discovery interface. Team-project context; the visible UI is not presented as my sole design or implementation.': '개인정보가 드러나지 않도록 잘라낸 스터디 탐색 화면입니다. 팀 프로젝트 맥락이며, 보이는 UI를 제 단독 설계나 구현으로 소개하지 않습니다.',
    'Study matching and collaboration platform': '스터디 매칭·협업 플랫폼', 'Build reliability and frontend API configuration': '빌드 신뢰성과 프론트엔드 API 설정',
    'The team project covered study recommendation, study management, video meetings, meeting summaries, documents, notifications, OAuth, and backend services. This page does not attribute those full-product features to me.': '팀 프로젝트는 스터디 추천·관리, 화상 회의, 회의 요약, 문서, 알림, OAuth와 백엔드 서비스를 포함했습니다. 이 페이지는 제품 전체 기능을 제 기여로 돌리지 않습니다.',
    'The discovery-grid screenshot is the only selected privacy-safe product image. Meeting and chat screenshots were intentionally excluded because they exposed participant faces and personal text.': '스터디 탐색 그리드 화면은 개인정보 노출 위험이 없어 선별한 유일한 제품 이미지입니다. 참여자 얼굴과 개인 대화가 드러나는 회의·채팅 화면은 의도적으로 제외했습니다.',
    'Engineering note': '엔지니어링 노트', 'Correcting the frontend integration path': '프론트엔드 통합 경로 바로잡기',
    'The frontend had build failures and integration assumptions that made deployment behaviour less reliable. Some stale code paths were no longer used, one helper assumed a backend response shape that was not valid, and API hooks contained localhost fallbacks instead of relying on the configured Vite environment.': '프론트엔드에는 빌드 오류와 배포 동작의 신뢰성을 낮추는 통합 가정이 있었습니다. 일부 오래된 코드 경로는 더 이상 사용되지 않았고, 한 헬퍼는 실제와 다른 백엔드 응답 형태를 가정했으며, API 훅은 설정된 Vite 환경 대신 localhost 대체값을 사용하고 있었습니다.',
    'Fixed npm build errors across three frontend files.': '프론트엔드 파일 3개의 npm 빌드 오류를 수정했습니다.', 'Removed stale types, unused imports and state, and an unused rejection path.': '오래된 타입, 사용하지 않는 import와 상태, 사용되지 않는 거부 처리 경로를 제거했습니다.',
    'Removed a helper built on an incorrect backend-response assumption.': '잘못된 백엔드 응답 가정에 기반한 헬퍼를 제거했습니다.', 'Removed localhost fallbacks from two API hooks and used Vite environment configuration instead.': 'API 훅 2개에서 localhost 대체값을 제거하고 Vite 환경 설정을 사용하도록 바꿨습니다.',
    'The result was a cleaner build path and a more explicit API base configuration. The evidence for this contribution is the corrected integration logic and build outcome, rather than a claim of ownership over the full Togethy product.': '그 결과 빌드 경로가 정리되고 API 기준 주소 설정이 더 명확해졌습니다. 이 기여의 근거는 Togethy 전체 제품에 대한 소유권 주장이 아니라 수정된 통합 로직과 빌드 결과입니다.',
    'Corrected frontend integration flow': '수정된 프론트엔드 통합 흐름', 'Vite environment': 'Vite 환경', 'Configured API base': '설정된 API 기준 주소', 'Query or API hook': '쿼리·API 훅', 'Typed response': '타입이 적용된 응답', 'React view': 'React 화면',
    'Demo decision': '데모 판단', 'Why the interactive demo comes later': '인터랙티브 데모를 나중에 만드는 이유',
    '← Previous: ETF data platform': '← 이전: ETF 데이터 플랫폼', 'Next: Dayori student planner →': '다음: Dayori 학생 플래너 →'
  }
};

pageKo['/projects/timetable-planner/'] = {
  title: 'Dayori 학생 플래너 — 이재엽', description: 'Dayori 학생 플래너에서 이재엽이 수행한 시간표 가져오기와 반응형 UI 업무 사례입니다.',
  strings: {
    'Full-stack timetable import · Team project': '풀스택 시간표 가져오기 · 팀 프로젝트', 'Dayori Student Planner': 'Dayori 학생 플래너',
    'A cross-platform academic planner combining schedules, notes, and customisation. This case study focuses on my shared UI work and the timetable import paths from images and Everytime links.': '일정, 노트와 꾸미기 기능을 결합한 크로스플랫폼 학업 플래너입니다. 이 사례는 제가 맡은 공통 UI 작업과 이미지·에브리타임 링크 기반 시간표 가져오기 경로에 집중합니다.',
    'View import flow': '가져오기 흐름 보기', 'My responsibility': '담당 업무', 'Cross-platform academic planner': '크로스플랫폼 학업 플래너',
    'UI tokens, responsive UX, timetable imports, related backend APIs': 'UI 토큰, 반응형 UX, 시간표 가져오기, 관련 백엔드 API',
    'Dayori combined timetable and calendar management with planner, note, handwriting, sticker, and gallery experiences. The full product also included backend services, storage, authentication, and infrastructure.': 'Dayori는 시간표·캘린더 관리에 플래너, 노트, 손글씨, 스티커와 갤러리 경험을 결합했습니다. 전체 제품에는 백엔드 서비스, 저장소, 인증과 인프라도 포함됐습니다.',
    'The cover, home, planner, gallery, note, sticker, and handwriting media show the team product. My individual contribution is limited to the responsibilities described below.': '표지, 홈, 플래너, 갤러리, 노트, 스티커와 손글씨 자료는 팀 제품을 보여 줍니다. 제 개인 기여는 아래에 설명한 담당 업무로 한정됩니다.',
    'The project README assigns me three areas: shared frontend UI tokens and responsive UX, timetable OCR and Everytime timetable import, and the backend APIs supporting timetable import.': '프로젝트 README에는 제 담당이 세 영역으로 기록돼 있습니다. 공통 프론트엔드 UI 토큰과 반응형 UX, 시간표 OCR·에브리타임 시간표 가져오기, 그리고 이를 지원하는 백엔드 API입니다.',
    'Imported timetable data is not immediately trustworthy. Image recognition and external timetable sources can produce incomplete or ambiguous fields, so the product needs a clear review step before saving structured schedule data.': '가져온 시간표 데이터는 즉시 신뢰할 수 없습니다. 이미지 인식과 외부 시간표 소스는 불완전하거나 모호한 필드를 만들 수 있어, 구조화된 일정으로 저장하기 전에 명확한 검토 단계가 필요합니다.',
    'Implemented the image-based and Everytime-link import paths.': '이미지 기반과 에브리타임 링크 기반 가져오기 경로를 구현했습니다.', 'Connected imported results to preview and review screens rather than saving unseen data immediately.': '보지 않은 데이터를 바로 저장하지 않고, 가져온 결과를 미리보기와 검토 화면으로 연결했습니다.',
    'Worked across Flutter and related backend endpoints so the import path could be validated from input to structured timetable.': '입력부터 구조화된 시간표까지 전체 경로를 검증할 수 있도록 Flutter와 관련 백엔드 엔드포인트를 함께 작업했습니다.', 'Contributed shared UI tokens and responsive behaviour used across the frontend.': '프론트엔드 전반에서 사용하는 공통 UI 토큰과 반응형 동작에 기여했습니다.',
    'The selected evidence shows both input paths and the resulting timetable. Broader product screens are separated into a later section so they do not imply ownership of the full application.': '선별한 근거는 두 입력 경로와 완성된 시간표를 보여 줍니다. 전체 애플리케이션을 제가 모두 구현한 것으로 오해하지 않도록 더 넓은 제품 화면은 뒤 섹션으로 분리했습니다.',
    'Import and review flow': '가져오기·검토 흐름', 'Timetable import workflow': '시간표 가져오기 흐름', 'Choose image or link': '이미지·링크 선택', 'Validate input': '입력 검증', 'Preview result': '결과 미리보기', 'Review timetable': '시간표 검토', 'Save structured data': '구조화 데이터 저장',
    'Product context': '제품 맥락', 'Beyond my import work': '시간표 가져오기 업무 밖의 제품',
    'The following screens and videos demonstrate the breadth of the team application. They should be read as team-owned product context, not as evidence that I built every visible feature.': '아래 화면과 영상은 팀 애플리케이션의 폭을 보여 줍니다. 보이는 모든 기능을 제가 만들었다는 근거가 아니라 팀 소유 제품의 맥락으로 봐야 합니다.',
    'Handwriting interaction': '손글씨 상호작용', 'Sticker editing interaction': '스티커 편집 상호작용',
    '← Previous: Study platform': '← 이전: 스터디 플랫폼', 'Back to portfolio →': '포트폴리오로 →'
  }
};

const commonProjectKo = {
  'Six-person SSAFY project': 'SSAFY 6인 프로젝트', 'Team project': '팀 프로젝트',
  '← Back to portfolio': '← 포트폴리오로', 'Back to portfolio →': '포트폴리오로 →',
  'Project evidence is labelled by ownership and context.': '프로젝트 근거는 담당 범위와 맥락을 구분해 표시했습니다.',
  'Product context and individual contribution are separated.': '제품 전체 맥락과 개인 기여를 구분했습니다.',
  'Team context and individual responsibility are labelled separately.': '팀 전체 맥락과 개인 담당 업무를 구분해 표시했습니다.'
};

const languageControl = document.createElement('div');
languageControl.className = 'language-switcher';
languageControl.setAttribute('role', 'group');
languageControl.setAttribute('aria-label', 'Language');
languageControl.innerHTML = '<button type="button" data-language="ko" aria-pressed="false">KR</button><button type="button" data-language="en" aria-pressed="true">EN</button>';
nav?.prepend(languageControl);

const originalText = new WeakMap();
const originalAttrs = new WeakMap();
const translatableAttributes = ['alt', 'aria-label', 'title'];

function translatePage(language) {
  const config = pageKo[window.location.pathname] || { strings: {} };
  const dictionary = { ...sharedKo, ...commonProjectKo, ...config.strings };
  document.documentElement.lang = language;
  document.title = language === 'ko' ? config.title || document.title : document.documentElement.dataset.enTitle || document.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    if (!description.dataset.enContent) description.dataset.enContent = description.content;
    description.content = language === 'ko' ? config.description || description.dataset.enContent : description.dataset.enContent;
  }
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogTitle) ogTitle.content = document.title;
  if (ogDescription && description) ogDescription.content = description.content;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest('script, style, code')) continue;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const trimmed = source.trim();
    if (!trimmed) continue;
    const translated = dictionary[trimmed];
    node.nodeValue = language === 'ko' && translated ? source.replace(trimmed, translated) : source;
  }

  document.querySelectorAll('[alt], [aria-label], [title]').forEach((element) => {
    if (!originalAttrs.has(element)) originalAttrs.set(element, {});
    const saved = originalAttrs.get(element);
    translatableAttributes.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      if (!(attribute in saved)) saved[attribute] = element.getAttribute(attribute);
      const source = saved[attribute];
      element.setAttribute(attribute, language === 'ko' && dictionary[source] ? dictionary[source] : source);
    });
  });

  languageControl.setAttribute('aria-label', language === 'ko' ? '언어 선택' : 'Language');
  languageControl.querySelectorAll('[data-language]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
  localStorage.setItem('portfolio-language', language);
}

document.documentElement.dataset.enTitle = document.title;
languageControl.addEventListener('click', (event) => {
  const button = event.target.closest('[data-language]');
  if (button) translatePage(button.dataset.language);
});

let preferredLanguage = 'en';
try { preferredLanguage = localStorage.getItem('portfolio-language') || 'en'; } catch (error) { preferredLanguage = 'en'; }
translatePage(preferredLanguage === 'ko' ? 'ko' : 'en');

document.querySelectorAll('[data-media]').forEach((media) => {
  const frame = media.closest('.media-frame');
  const markMissing = () => frame?.classList.add('is-missing');
  if (media instanceof HTMLImageElement) {
    if (media.complete && media.naturalWidth === 0) markMissing();
    media.addEventListener('error', markMissing, { once: true });
  }
  if (media instanceof HTMLVideoElement) media.addEventListener('error', markMissing, { once: true });
});
