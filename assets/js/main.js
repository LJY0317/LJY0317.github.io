const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navToggleLabel = navToggle?.querySelector('[data-nav-toggle-label]');
const nav = document.querySelector('[data-nav]');

const koTranslations = {
  'a11y.skip': '본문으로 건너뛰기',
  'a11y.navOpen': '내비게이션 열기',
  'a11y.navClose': '내비게이션 닫기',
  'a11y.primaryNav': '주요 내비게이션',
  'a11y.breadcrumb': '현재 위치',
  'a11y.projectSnapshot': '프로젝트 요약',
  'a11y.projectNavigation': '프로젝트 이동',
  'a11y.language': '언어 선택',
  'a11y.korean': '한국어',
  'a11y.english': '영어',
  'a11y.videoUnsupported': '이 브라우저는 동영상 재생을 지원하지 않습니다.',

  'nav.work': '프로젝트',
  'nav.about': '소개',
  'nav.skills': '기술',
  'nav.contact': '연락하기',
  'common.portfolio': '포트폴리오',
  'common.product': '제품',
  'common.team': '팀',
  'common.myFocus': '담당 영역',
  'common.coreTools': '핵심 기술',
  'common.context': '배경',
  'common.responsibility': '담당 업무',
  'common.problem': '문제',
  'common.action': '수행',
  'common.result': '결과',
  'common.evidence': '근거',
  'common.scopeBoundary': '범위 구분',
  'common.teamBuilt': '팀이 만든 제품',
  'common.myWork': '제가 맡은 업무',
  'common.email': '이메일',

  'home.hero.eyebrow': '소프트웨어 엔지니어 · 서울',
  'home.hero.title': '로보틱스, 데이터, 웹과 모바일을 아우르는 소프트웨어를 만듭니다.',
  'home.hero.lede': '구성 요소를 연결하고 가정을 검증하며 오류를 추적해, 복잡한 시스템을 더 쉽게 확인하고 설명할 수 있도록 만듭니다.',
  'home.hero.workLink': '주요 프로젝트 보기',
  'home.hero.emailLink': '이메일 보내기',
  'home.stage.aria': '엔지니어링 업무 영역',
  'home.stage.robotics': '로보틱스',
  'home.stage.data': '데이터',
  'home.stage.web': '웹',
  'home.stage.mobile': '모바일',
  'home.stage.integration': '통합',
  'home.stage.reliable': '신뢰할 수 있는 소프트웨어',
  'home.stage.detail': '검증 · 디버깅 · 관찰',
  'home.work.eyebrow': '주요 프로젝트',
  'home.work.title': '담당 범위와 근거를 명확히 정리한 프로젝트입니다.',
  'home.work.intro': '각 사례에서 제 기여와 팀 전체 결과물을 구분해 설명합니다.',
  'home.card.greenhouse.meta': '로보틱스·시스템 통합 · 6인 팀 · 2026',
  'home.card.greenhouse.title': '자율주행 온실 로봇',
  'home.card.greenhouse.summary': 'ROS 2와 Gazebo 환경에서 매핑, 주행, 런타임 통합과 운영자 피드백을 다뤘습니다.',
  'home.card.greenhouse.focus': '로봇 시뮬레이션, 매핑 실험, 주행 흐름과 통합 디버깅.',
  'home.card.greenhouse.evidence': 'Gazebo·RViz 화면, 시스템 시연과 매핑 디버그 영상.',
  'home.card.greenhouse.link': '상세 사례 보기',
  'home.card.greenhouse.alt': 'Gazebo 온실 시뮬레이션과 RViz 매핑 화면',
  'home.card.greenhouse.caption': '팀 시뮬레이션 환경과 대응하는 매핑 화면.',
  'home.card.etf.meta': '풀스택·데이터 통합 · 2인 팀 · 2025',
  'home.card.etf.title': 'ETF 데이터 플랫폼',
  'home.card.etf.summary': '반복 가능한 데이터 수집과 검색, 필터, 순위, 기간별 차트를 제공하는 금융 데이터 플랫폼입니다.',
  'home.card.etf.focus': 'ETF 데이터 흐름, API 통합, 사용자 화면, 테스트와 리팩터링.',
  'home.card.etf.evidence': '저장소에 구현 내용이 기록돼 있으며, 공개 가능한 스크린샷은 없습니다.',
  'home.card.etf.link': '상세 사례 보기',
  'home.card.etf.aria': '데이터 소스가 Django 데이터 서비스로 들어가 검색, 순위, 차트로 이어지는 흐름',
  'home.card.etf.pipeline': '데이터 파이프라인',
  'home.card.etf.collect': '수집 · 검증 · 중복 제거',
  'home.card.etf.service': 'Django 데이터 계층',
  'home.card.etf.records': '구조화된 ETF 데이터',
  'home.card.etf.search': '검색',
  'home.card.etf.rankings': '순위',
  'home.card.etf.charts': '차트',
  'home.card.study.meta': '프론트엔드 통합 · 6인 팀 · 2026',
  'home.card.study.title': '스터디 매칭 플랫폼',
  'home.card.study.summary': 'React와 TypeScript 오류를 수정해 빌드를 복구하고 API·환경 설정의 잘못된 가정을 바로잡았습니다.',
  'home.card.study.focus': '빌드 오류 수정, 불필요한 코드 제거, 응답 구조 정정과 Vite 설정.',
  'home.card.study.evidence': '개인정보를 노출하지 않는 제품 화면과 수정된 통합 경로에 대한 엔지니어링 노트.',
  'home.card.study.link': '엔지니어링 노트 보기',
  'home.card.study.alt': '샘플 스터디 카드 6개가 보이는 Togethy 스터디 탐색 화면',
  'home.card.study.caption': '개인정보를 노출하지 않도록 잘라낸 팀 제품 화면.',
  'home.card.dayori.meta': '풀스택 시간표 가져오기 · 6인 팀 · 2026',
  'home.card.dayori.title': 'Dayori 학생 플래너',
  'home.card.dayori.summary': '두 가지 시간표 가져오기 방식과 저장 전 검토 단계를 갖춘 크로스플랫폼 학생 플래너입니다.',
  'home.card.dayori.focus': '공통 UI 토큰, 반응형 UX, 시간표 OCR·에브리타임 가져오기와 지원 API.',
  'home.card.dayori.evidence': '가져오기 화면, 시간표 결과, 제품 전체 화면과 선별한 상호작용 영상.',
  'home.card.dayori.link': '상세 사례 보기',
  'home.card.dayori.alt': '캘린더, 갤러리, 손글씨 노트 화면을 보여 주는 Dayori 프로젝트 표지',
  'home.card.dayori.caption': 'Dayori 팀 제품 개요이며, 제 기여는 상세 사례에서 설명합니다.',
  'home.about.eyebrow': '소개',
  'home.about.title': '시스템의 경계를 연결하는 일을 합니다.',
  'home.about.education': 'SSAFY에서 웹, 모바일, 로보틱스를 아우르는 프로젝트 중심 소프트웨어 교육을 이수했습니다.',
  'home.about.work': '팀 프로젝트에서 로봇 런타임, 백엔드 서비스, 프론트엔드, 데이터 파이프라인과 모바일 클라이언트를 연결해 왔습니다.',
  'home.skills.eyebrow': '기술',
  'home.skills.title': '프로젝트에서 직접 사용한 기술입니다.',
  'home.skills.languages': '언어',
  'home.skills.frontend': '프론트엔드·모바일',
  'home.skills.frontendList': 'React, Flutter, Vue.js, 반응형 UI 개발',
  'home.skills.backend': '백엔드·통합',
  'home.skills.backendList': 'Spring Boot, Django, Django REST Framework, REST·HTTP API, XML 파싱',
  'home.skills.robotics': '로보틱스·이미징',
  'home.education.eyebrow': '교육 과정',
  'home.education.title': '프로젝트 중심 소프트웨어 엔지니어링 교육.',
  'home.education.ssafyType': '소프트웨어 엔지니어링 과정',
  'home.education.ssafyName': '삼성 청년 SW 아카데미',
  'home.education.ssafyDetail': '알고리즘, 웹, 모바일, 로보틱스와 협업 개발을 실습 중심으로 학습했습니다.',
  'home.contact.eyebrow': '연락하기',
  'home.contact.title': '소프트웨어 엔지니어 직무를 찾고 있습니다.',
  'home.footer.note': '가볍게 구성한 정적 포트폴리오입니다.',

  'greenhouse.breadcrumb': '온실 로봇',
  'greenhouse.hero.kicker': '로보틱스·시스템 통합 · 팀 프로젝트',
  'greenhouse.hero.title': '자율주행 온실 로봇',
  'greenhouse.hero.deck': '로봇 주행, 운영자 제어, 백엔드 서비스와 온실 업무 흐름을 연결한 ROS 2·Gazebo 프로젝트입니다. 이 페이지에서는 제가 맡은 매핑, 주행, 시뮬레이션과 통합 업무를 설명합니다.',
  'greenhouse.hero.evidenceLink': '근거 보기',
  'greenhouse.hero.responsibilityLink': '제 기여 보기',
  'greenhouse.hero.alt': '로봇 환경과 RViz 매핑 화면을 함께 보여 주는 Gazebo 온실 시뮬레이션',
  'greenhouse.hero.fallback': '온실 개요 이미지를 불러올 수 없습니다.',
  'greenhouse.hero.caption': '팀 프로젝트의 온실 시뮬레이션과 매핑 화면.',
  'greenhouse.snapshot.product': '스마트팜 로봇 시뮬레이션·제어 시스템',
  'greenhouse.snapshot.team': 'SSAFY 6인 프로젝트',
  'greenhouse.snapshot.focus': '매핑, 주행, 시뮬레이션과 통합 디버깅',
  'greenhouse.context.body': '팀 제품은 ROS 2 로봇 워크스페이스, FastAPI 백엔드, React 운영자 화면, PostgreSQL과 MQTT를 결합했습니다. 순찰·이동 시나리오, 진단·수확 흐름, 의사결정 이력과 운영자 모니터링을 지원했습니다.',
  'greenhouse.context.scope': '대시보드, 진단 화면, 데이터 모델과 전체 시스템 시연은 팀 프로젝트의 맥락을 보여 줍니다. 제가 단독으로 설계한 기능이나 화면으로 소개하지 않습니다.',
  'greenhouse.context.workflowAria': '상위 수준 시스템 흐름',
  'greenhouse.context.sensors': '센서·시뮬레이션',
  'greenhouse.context.runtime': 'ROS 2 런타임',
  'greenhouse.context.mapping': '매핑·주행',
  'greenhouse.context.backend': '백엔드 통합',
  'greenhouse.context.feedback': '운영자 피드백',
  'greenhouse.responsibility.intro': '저는 로봇 시뮬레이션과 주행 경로를 담당했습니다. 매핑 실험을 준비하고 지도 관련 런타임 동작을 관리했으며, 주행 흐름을 연결하고 Gazebo·ROS 2 상태·운영자 화면 사이의 통합 문제를 진단했습니다.',
  'greenhouse.responsibility.problem': '시뮬레이션과 주행 구성 요소는 오류 없이 시작돼도 시간, 좌표 변환, 오도메트리, 위치 추정이나 지도 생명주기가 서로 어긋날 수 있습니다. 이런 문제는 운영자 화면만으로 진단하기 어렵습니다.',
  'greenhouse.responsibility.action1': '시뮬레이션과 지도 동작을 분리해 확인하기 위해 부하를 낮춘 월드와 매핑 실험을 수행했습니다.',
  'greenhouse.responsibility.action2': 'Gazebo, RViz, 좌표 변환, 오도메트리와 위치 추정 시작 과정을 하나의 연결된 런타임 경로로 점검했습니다.',
  'greenhouse.responsibility.action3': '각 구성 요소를 따로 시연하는 데 그치지 않고 주행 흐름과 운영자 상태를 연결했습니다.',
  'greenhouse.responsibility.result': '저장소에는 프론트엔드, 로봇 상태, 진단, 수확 완료와 관련 API를 아우르는 종단 간 시연이 기록돼 있습니다. 아래에서는 팀 전체 시연과 제가 수행한 매핑·디버깅 자료를 구분해 제시합니다.',
  'greenhouse.evidence.title': '런타임 테스트와 반복 개선',
  'greenhouse.evidence.mappingAlt': '이재엽이 수행한 매핑 실험 중 Gazebo 온실과 RViz SLAM 지도가 함께 보이는 화면',
  'greenhouse.evidence.mappingFallback': '매핑 실험 이미지를 불러올 수 없습니다.',
  'greenhouse.evidence.mappingCaption': '제가 진행한 매핑 실험 중 Gazebo와 RViz 화면.',
  'greenhouse.evidence.dashboardAlt': '온실 로봇 모니터링 정보를 보여 주는 팀 운영자 대시보드',
  'greenhouse.evidence.dashboardFallback': '운영자 대시보드 이미지를 불러올 수 없습니다.',
  'greenhouse.evidence.dashboardCaption': '로봇 런타임의 맥락을 보여 주는 팀 운영자 대시보드.',
  'greenhouse.evidence.mappingVideoTitle': '매핑 디버그 세션',
  'greenhouse.evidence.mappingVideoBody': '부하를 낮춘 월드와 매핑 실험을 4배속으로 녹화했습니다. 제 기여를 가장 직접적으로 보여 주는 자료입니다.',
  'greenhouse.evidence.systemVideoTitle': '전체 시스템 시연',
  'greenhouse.evidence.systemVideoBody': '매핑, 주행, 진단과 수확을 다루는 팀 프로젝트 시연입니다. 통합 제품을 보여 주는 자료이며, 모든 기능을 제가 단독 구현했다는 의미는 아닙니다.',
  'greenhouse.system.eyebrow': '시스템 전체',
  'greenhouse.system.title': '팀 프로젝트 맥락',
  'greenhouse.system.tabletAlt': '온실 로봇 시스템의 태블릿 크기 팀 제어 화면',
  'greenhouse.system.tabletFallback': '태블릿 대시보드 이미지를 불러올 수 없습니다.',
  'greenhouse.system.tabletCaption': '태블릿 크기의 팀 제어 화면.',
  'greenhouse.system.diagnosisAlt': '식물 진단 결과와 관련 제어 흐름을 보여 주는 팀 화면',
  'greenhouse.system.diagnosisFallback': '진단 이미지를 불러올 수 없습니다.',
  'greenhouse.system.diagnosisCaption': '식물 진단 결과와 관련 제어 흐름.',
  'greenhouse.system.modelAlt': '온실 로봇 프로젝트 데이터 모델의 개체 관계도',
  'greenhouse.system.modelFallback': '시스템 데이터 모델 이미지를 불러올 수 없습니다.',
  'greenhouse.system.modelCaption': '최종 데이터 모델이며, 제 개인 구현 근거가 아닌 아키텍처 맥락으로 제시합니다.',
  'greenhouse.nav.previous': '← 포트폴리오로',
  'greenhouse.nav.next': '다음: ETF 데이터 플랫폼 →',
  'greenhouse.footer.note': '팀 프로젝트 맥락과 제 기여를 구분해 표시했습니다.',

  'etf.breadcrumb': 'ETF 데이터 플랫폼',
  'etf.hero.kicker': '풀스택·데이터 통합 · 2인 팀',
  'etf.hero.title': 'ETF 데이터 플랫폼',
  'etf.hero.deck': 'MOUDA는 ETF 정보, 금융 상품, 외부 콘텐츠, 추천과 커뮤니티 기능을 한곳에 모은 서비스입니다. 이 사례에서는 제가 맡은 ETF 데이터 수집, 탐색, 차트, API 통합, 테스트와 리팩터링을 설명합니다.',
  'etf.hero.contributionLink': '제 기여 보기',
  'etf.hero.evidenceLink': '근거 확인하기',
  'etf.pipeline.aria': 'ETF 데이터 파이프라인',
  'etf.pipeline.code': 'PyKRX와 외부 API\n          ↓\n수집 · 검증 · 중복 제거\n          ↓\nDjango 데이터 모델과 API\n          ↓\n검색 · 필터 · 상세 · 차트',
  'etf.snapshot.product': 'ETF·금융 정보 플랫폼',
  'etf.snapshot.team': '2인 프로젝트',
  'etf.snapshot.focus': '데이터 파이프라인, ETF 화면, API, 테스트와 리팩터링',
  'etf.context.body': '팀 플랫폼은 ETF 정보와 예·적금 상품, 외부 영상·뉴스, 추천, 사용자 프로필과 커뮤니티 기능을 함께 제공했습니다.',
  'etf.context.scope': '저장소에는 제가 맡은 기능이 구분되어 있습니다. 이 페이지는 해당 범위만 다루며 제품 전체나 모든 화면을 제 작업으로 소개하지 않습니다.',
  'etf.responsibility.title': '시장 데이터를 사용 가능한 화면으로',
  'etf.responsibility.problem': 'ETF 탐색 기능은 일관된 데이터 수집과 업데이트에 달려 있습니다. 중복 데이터, 비효율적인 삽입, 불완전한 이력이나 어긋난 API 응답은 잘못된 필터, 차트와 상세 화면으로 이어질 수 있습니다.',
  'etf.responsibility.action1': 'PyKRX 기반 흐름으로 1,000개가 넘는 ETF 정보와 일별 시장 데이터를 수집했습니다.',
  'etf.responsibility.action2': 'Django 관리 명령, 일괄 삽입, 고유성 제약, 중복 검사와 증분 업데이트를 적용했습니다.',
  'etf.responsibility.action3': 'ETF 검색, 필터, 정렬, 페이지네이션, 상세 화면과 기간별 차트를 구현했습니다.',
  'etf.responsibility.action4': 'YouTube와 네이버 뉴스 API의 외부 콘텐츠를 연동했습니다.',
  'etf.responsibility.action5': '담당 기능을 테스트하고 버그를 수정했으며, 성능 개선과 리팩터링을 진행했습니다.',
  'etf.responsibility.result': '반복 실행 가능한 데이터 적재 흐름과 동일한 구조화 데이터를 사용하는 ETF 탐색 기능을 완성했습니다. 구현 내용은 저장소에 기록돼 있지만, 공개 가능한 검토 완료 스크린샷이나 영상은 없습니다.',
  'etf.workflow.aria': 'ETF 데이터 처리 흐름',
  'etf.workflow.collect': '원천 데이터 수집',
  'etf.workflow.validate': '필드 검증',
  'etf.workflow.duplicates': '중복 방지',
  'etf.workflow.apis': 'API 제공',
  'etf.workflow.visualise': '검색·시각화',
  'etf.evidence.title': '현재 공개 가능한 근거',
  'etf.evidence.body': '검토를 마친 ETF 이미지나 영상이 없어, 이 페이지는 데이터 흐름도와 저장소에 기록된 구현 내용만 사용합니다.',
  'etf.evidence.noVisuals': '가공한 증거 화면 없음',
  'etf.evidence.noVisualsBody': '생성한 대시보드, 재현 스크린샷, 스톡 이미지나 검증되지 않은 성능 차트를 사용하지 않았습니다. 향후 샘플 데이터 데모를 추가한다면 독립적으로 재구성한 화면임을 명확히 밝힐 예정입니다.',
  'etf.metric.scale': '수집 규모',
  'etf.metric.scaleBody': '프로젝트 README에 기록된 1,000개 이상의 ETF 데이터.',
  'etf.metric.update': '업데이트 전략',
  'etf.metric.updateBody': '일괄 삽입, 고유성 제약, 중복 방지와 증분 업데이트.',
  'etf.metric.views': '사용자 화면',
  'etf.metric.viewsBody': '검색, 분류·운용사 필터, 정렬, 페이지네이션, 상세 화면과 기간별 차트.',
  'etf.metric.limit': '현재 제한',
  'etf.metric.limitBody': '현재 공개 가능한 검토 완료 미디어는 없습니다.',
  'etf.nav.previous': '← 이전: 온실 로봇',
  'etf.nav.next': '다음: 스터디 플랫폼 →',
  'etf.footer.note': '검토를 마친 원본 자료만 공개합니다.',

  'study.breadcrumb': '스터디 플랫폼',
  'study.hero.kicker': '프론트엔드 통합 · 팀 프로젝트',
  'study.hero.title': '스터디 매칭 플랫폼',
  'study.hero.deck': 'Togethy는 스터디 관리와 협업을 지원하는 플랫폼입니다. 저는 프론트엔드 통합 경로의 React·TypeScript 문제를 집중적으로 수정했습니다.',
  'study.hero.noteLink': '엔지니어링 노트 보기',
  'study.hero.contextLink': '제품 맥락 보기',
  'study.hero.alt': '샘플 스터디 카드 6개가 보이는 Togethy 스터디 탐색 화면',
  'study.hero.fallback': '스터디 탐색 이미지를 불러올 수 없습니다.',
  'study.hero.caption': '개인정보가 드러나지 않도록 정리한 스터디 탐색 화면입니다. 팀 제품의 맥락을 보여 주며, 제 단독 설계나 구현으로 소개하지 않습니다.',
  'study.snapshot.product': '스터디 매칭·협업 플랫폼',
  'study.snapshot.team': 'SSAFY 6인 프로젝트',
  'study.snapshot.focus': '빌드 안정성과 API 설정',
  'study.context.body': '팀 프로젝트에는 스터디 추천·관리, 화상 회의, 회의 요약, 문서, 알림, OAuth와 백엔드 서비스가 포함됐습니다. 제품 전체 기능을 제 개인 작업으로 소개하지 않습니다.',
  'study.context.scope': '스터디 탐색 화면은 개인정보를 노출하지 않는 유일한 제품 이미지입니다. 참여자 얼굴과 개인 대화가 담긴 회의·채팅 화면은 제외했습니다.',
  'study.note.eyebrow': '엔지니어링 노트',
  'study.note.title': '프론트엔드 통합 경로 수정',
  'study.note.problem': '프론트엔드에는 빌드 오류와 배포 안정성을 떨어뜨리는 잘못된 가정이 있었습니다. 오래된 코드, 실제와 다른 응답 구조를 가정한 헬퍼, Vite 설정 대신 localhost를 사용하는 API 훅이 남아 있었습니다.',
  'study.note.action1': '프론트엔드 파일 3개에서 npm 빌드 오류를 수정했습니다.',
  'study.note.action2': '오래된 타입, 사용하지 않는 import와 상태, 불필요한 거부 처리 경로를 제거했습니다.',
  'study.note.action3': '잘못된 백엔드 응답 구조를 가정한 헬퍼를 제거했습니다.',
  'study.note.action4': 'API 훅 2개에서 localhost 대체값을 제거하고 Vite 환경 설정을 사용하도록 수정했습니다.',
  'study.note.result': '빌드가 정리되고 API 기준 주소 설정이 명확해졌습니다. 제 기여는 수정된 통합 로직과 빌드 결과로 설명하며, Togethy 전체 제품을 제 작업으로 소개하지 않습니다.',
  'study.workflow.aria': '수정된 프론트엔드 통합 흐름',
  'study.workflow.environment': 'Vite 환경',
  'study.workflow.base': '설정된 API 기준 주소',
  'study.workflow.hook': '쿼리·API 훅',
  'study.workflow.response': '타입이 적용된 응답',
  'study.workflow.view': 'React 화면',
  'study.code.aria': '개념적 설정 흐름',
  'study.code.content': 'VITE_API_BASE_URL\n        ↓\n공통 API 설정\n        ↓\n기능별 쿼리 훅\n        ↓\n타입이 적용된 프론트엔드 상태',
  'study.code.note': '이 다이어그램은 수정한 항목을 개념적으로 정리한 것으로, 비공개 팀 소스 코드를 재현하지 않습니다.',
  'study.demo.eyebrow': '데모 판단',
  'study.demo.title': '인터랙티브 데모가 아직 없는 이유',
  'study.demo.beforePath': '재구성한 스터디 매칭 데모를',
  'study.demo.afterPath': '경로에 추가할 수 있지만, 이 데모는 여기서 설명한 통합 수정이 아니라 재구성한 제품 흐름을 보여 주게 됩니다. 현재 우선순위는 다음과 같습니다.',
  'study.demo.item1': '현재 공개 가능한 근거와 함께 이 엔지니어링 노트를 제공합니다.',
  'study.demo.item2': '검토한 미디어로 로봇과 시간표 프로젝트를 설명합니다.',
  'study.demo.item3': '팀 기능 전체를 제 작업으로 오해하지 않도록 명확히 표시할 수 있을 때만 샘플 데이터 데모를 추가합니다.',
  'study.demo.disclosure': '향후 데모 안내',
  'study.demo.disclosureBody': '향후 Togethy 데모를 추가한다면, 샘플 데이터를 사용해 독립적으로 재구성했으며 원본 인증·AI·회의 기능이나 운영 백엔드와 연결되지 않았음을 명확히 밝힙니다.',
  'study.nav.previous': '← 이전: ETF 데이터 플랫폼',
  'study.nav.next': '다음: Dayori 학생 플래너 →',
  'study.footer.note': '팀 제품의 맥락과 제 기여를 구분해 표시했습니다.',

  'dayori.breadcrumb': 'Dayori',
  'dayori.hero.kicker': '풀스택 시간표 가져오기 · 팀 프로젝트',
  'dayori.hero.title': 'Dayori 학생 플래너',
  'dayori.hero.deck': '일정, 노트와 꾸미기 기능을 제공하는 크로스플랫폼 학생 플래너입니다. 이 사례에서는 제가 맡은 공통 UI와 이미지·에브리타임 링크 기반 시간표 가져오기를 설명합니다.',
  'dayori.hero.importLink': '가져오기 흐름 보기',
  'dayori.hero.responsibilityLink': '제 기여 보기',
  'dayori.hero.alt': '캘린더, 갤러리, 손글씨 노트 화면을 보여 주는 Dayori 프로젝트 표지',
  'dayori.hero.fallback': 'Dayori 표지 이미지를 불러올 수 없습니다.',
  'dayori.hero.caption': 'Dayori 팀 제품 개요.',
  'dayori.snapshot.product': '크로스플랫폼 학업 플래너',
  'dayori.snapshot.team': 'SSAFY 6인 프로젝트',
  'dayori.snapshot.focus': 'UI 토큰, 반응형 UX, 시간표 가져오기와 지원 API',
  'dayori.context.body': 'Dayori는 시간표·캘린더 관리와 플래너, 노트, 손글씨, 스티커, 갤러리 기능을 함께 제공했습니다. 전체 제품에는 백엔드 서비스, 저장소, 인증과 인프라도 포함됐습니다.',
  'dayori.context.scope': '표지와 제품 전체 화면은 팀 애플리케이션의 맥락을 보여 줍니다. 제 기여는 아래에 설명한 업무로 한정됩니다.',
  'dayori.responsibility.intro': '프로젝트 README에는 제 담당이 세 영역으로 기록돼 있습니다. 공통 UI 토큰과 반응형 UX, 시간표 OCR·에브리타임 가져오기, 그리고 이를 지원하는 백엔드 API입니다.',
  'dayori.responsibility.problem': '가져온 시간표에는 누락되거나 모호한 정보가 있을 수 있습니다. 따라서 구조화된 일정으로 저장하기 전에 사용자가 확인하는 단계가 필요합니다.',
  'dayori.responsibility.action1': '시간표 이미지와 에브리타임 공유 링크에서 일정을 가져오는 흐름을 구현했습니다.',
  'dayori.responsibility.action2': '가져온 결과를 바로 저장하지 않고 미리보기와 검토 화면을 거치도록 연결했습니다.',
  'dayori.responsibility.action3': '입력부터 구조화된 시간표까지 흐름을 확인할 수 있도록 Flutter와 관련 백엔드 엔드포인트를 함께 작업했습니다.',
  'dayori.responsibility.action4': '프론트엔드 전반의 공통 UI 토큰과 반응형 동작을 작업했습니다.',
  'dayori.responsibility.result': '선별한 자료는 두 가지 가져오기 흐름과 완성된 시간표를 보여 줍니다. 제품 전체 화면은 제 개인 작업으로 오해되지 않도록 별도 섹션에 배치했습니다.',
  'dayori.import.title': '가져오기·검토 흐름',
  'dayori.import.workflowAria': '시간표 가져오기 흐름',
  'dayori.import.choose': '이미지·링크 선택',
  'dayori.import.validate': '입력 검증',
  'dayori.import.preview': '결과 미리보기',
  'dayori.import.review': '시간표 검토',
  'dayori.import.save': '구조화 데이터 저장',
  'dayori.import.imageAlt': '이미지에서 시간표를 가져오는 Dayori 화면',
  'dayori.import.imageFallback': '이미지 가져오기 화면을 불러올 수 없습니다.',
  'dayori.import.imageCaption': '제가 작업한 이미지 기반 시간표 가져오기 흐름.',
  'dayori.import.everytimeAlt': '에브리타임 공유 링크에서 시간표를 가져오는 Dayori 화면',
  'dayori.import.everytimeFallback': '에브리타임 가져오기 화면을 불러올 수 없습니다.',
  'dayori.import.everytimeCaption': '제가 작업한 에브리타임 공유 링크 가져오기 흐름.',
  'dayori.import.settingsAlt': '시간표 시작 시간을 설정하는 Dayori 시간표 설정 화면',
  'dayori.import.settingsFallback': '시간표 설정 이미지를 불러올 수 없습니다.',
  'dayori.import.settingsCaption': '가져오기와 검토 과정에서 사용하는 시간표 설정.',
  'dayori.import.overviewAlt': 'Dayori 애플리케이션에 표시된 완성된 주간 시간표',
  'dayori.import.overviewFallback': '시간표 개요 이미지를 불러올 수 없습니다.',
  'dayori.import.overviewCaption': '구조화된 일정을 저장한 뒤 표시되는 시간표.',
  'dayori.context.eyebrow': '제품 맥락',
  'dayori.context.title': '제품 전체 맥락',
  'dayori.context.intro': '아래 화면과 영상은 팀 애플리케이션 전체를 보여 줍니다. 보이는 모든 기능을 제가 만들었다는 근거가 아니라 제품 맥락을 위한 자료입니다.',
  'dayori.context.homeAlt': '일정과 플래너 정보를 보여 주는 Dayori 홈 대시보드',
  'dayori.context.homeFallback': '홈 대시보드 이미지를 불러올 수 없습니다.',
  'dayori.context.homeCaption': '팀 제품의 홈 대시보드.',
  'dayori.context.plannerAlt': '팀 제품의 플래닝 화면을 보여 주는 Dayori 플래너',
  'dayori.context.plannerFallback': '플래너 이미지를 불러올 수 없습니다.',
  'dayori.context.plannerCaption': '팀 제품의 플래너 화면.',
  'dayori.context.galleryAlt': 'Dayori 캘린더와 갤러리 화면',
  'dayori.context.galleryFallback': '캘린더·갤러리 이미지를 불러올 수 없습니다.',
  'dayori.context.galleryCaption': '팀 제품의 캘린더·갤러리 화면.',
  'dayori.context.noteAlt': 'Dayori 손글씨 화학 노트 화면',
  'dayori.context.noteFallback': '노트 작성 이미지를 불러올 수 없습니다.',
  'dayori.context.noteCaption': '팀 제품의 손글씨 노트 화면.',
  'dayori.context.handwritingTitle': '손글씨 상호작용',
  'dayori.context.handwritingBody': '손글씨 작성과 형광펜 사용을 담은 1분 길이의 팀 제품 영상입니다.',
  'dayori.context.stickerTitle': '스티커 편집 상호작용',
  'dayori.context.stickerBody': '스티커 도구를 담은 1분 길이의 팀 제품 영상이며, 제품 맥락을 보여 주는 보조 자료입니다.',
  'dayori.nav.previous': '← 이전: 스터디 플랫폼',
  'dayori.nav.next': '포트폴리오로 →',
  'dayori.footer.note': '팀 제품의 맥락과 제 기여를 구분해 표시했습니다.'
};

const koMetadata = {
  home: {
    title: '이재엽 — 소프트웨어 엔지니어',
    description: '로보틱스, 백엔드 통합, 데이터 시스템, 웹과 모바일 프로젝트를 소개하는 소프트웨어 엔지니어 이재엽의 포트폴리오입니다.'
  },
  greenhouse: {
    title: '자율주행 온실 로봇 — 이재엽',
    description: 'ROS 2 온실 로봇 프로젝트에서 이재엽이 수행한 매핑, 주행, 시뮬레이션과 시스템 통합 업무 사례입니다.'
  },
  etf: {
    title: 'ETF 데이터 플랫폼 — 이재엽',
    description: 'MOUDA에서 이재엽이 맡은 ETF 데이터 파이프라인, 검색 화면, API 통합, 테스트와 리팩터링 업무 사례입니다.'
  },
  study: {
    title: '스터디 매칭 플랫폼 — 이재엽',
    description: 'Togethy 스터디 플랫폼에서 이재엽이 수행한 React·TypeScript 프론트엔드 통합 수정 업무를 설명합니다.'
  },
  dayori: {
    title: 'Dayori 학생 플래너 — 이재엽',
    description: 'Dayori 학생 플래너에서 이재엽이 수행한 시간표 가져오기, 반응형 UI와 지원 백엔드 API 업무 사례입니다.'
  }
};

const pageId = document.body.dataset.page;
const descriptionMeta = document.querySelector('meta[name="description"]');
const ogTitleMeta = document.querySelector('meta[property="og:title"]');
const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
const defaultMetadata = {
  title: document.title,
  description: descriptionMeta?.content || '',
  ogTitle: ogTitleMeta?.content || document.title,
  ogDescription: ogDescriptionMeta?.content || descriptionMeta?.content || ''
};

const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const attributeBindings = [
  ['alt', 'i18nAlt'],
  ['aria-label', 'i18nAriaLabel'],
  ['title', 'i18nTitle']
];

let currentLanguage = 'en';

const translateKey = (key, language) => {
  if (language === 'ko') return koTranslations[key];
  return undefined;
};

const updateHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 8);
};

const updateNavToggleLabel = () => {
  if (!navToggleLabel || !navToggle) return;
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  const key = isOpen ? 'a11y.navClose' : 'a11y.navOpen';
  navToggleLabel.textContent = currentLanguage === 'ko' ? koTranslations[key] : (isOpen ? 'Close navigation' : 'Open navigation');
};

const setNavigationOpen = (isOpen) => {
  navToggle?.setAttribute('aria-expanded', String(isOpen));
  nav?.classList.toggle('is-open', isOpen);
  updateNavToggleLabel();
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

navToggle?.addEventListener('click', () => {
  setNavigationOpen(navToggle.getAttribute('aria-expanded') !== 'true');
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setNavigationOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navToggle?.getAttribute('aria-expanded') === 'true') {
    setNavigationOpen(false);
    navToggle.focus();
  }
});

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const languageControl = document.createElement('div');
languageControl.className = 'language-switcher';
languageControl.setAttribute('role', 'group');
languageControl.innerHTML = [
  '<button type="button" lang="ko" data-language="ko" aria-pressed="false">KR</button>',
  '<button type="button" lang="en" data-language="en" aria-pressed="true">EN</button>'
].join('');
nav?.prepend(languageControl);

const applyTextTranslations = (language) => {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    if (!originalText.has(element)) originalText.set(element, element.textContent);
    const key = element.dataset.i18n;
    const translated = translateKey(key, language);
    element.textContent = language === 'ko' && translated !== undefined ? translated : originalText.get(element);
  });
};

const applyAttributeTranslations = (language) => {
  attributeBindings.forEach(([attribute, datasetKey]) => {
    document.querySelectorAll(`[data-${datasetKey.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}]`).forEach((element) => {
      if (!originalAttributes.has(element)) originalAttributes.set(element, {});
      const saved = originalAttributes.get(element);
      if (!(attribute in saved)) saved[attribute] = element.getAttribute(attribute);
      const key = element.dataset[datasetKey];
      const translated = translateKey(key, language);
      element.setAttribute(attribute, language === 'ko' && translated !== undefined ? translated : saved[attribute]);
    });
  });
};

const applyMetadata = (language) => {
  const translated = koMetadata[pageId];
  const metadata = language === 'ko' && translated ? translated : defaultMetadata;
  document.title = metadata.title;
  if (descriptionMeta) descriptionMeta.content = metadata.description;
  if (ogTitleMeta) ogTitleMeta.content = language === 'ko' && translated ? translated.title : defaultMetadata.ogTitle;
  if (ogDescriptionMeta) ogDescriptionMeta.content = language === 'ko' && translated ? translated.description : defaultMetadata.ogDescription;
};

const updateLanguageControl = (language) => {
  languageControl.setAttribute('aria-label', language === 'ko' ? koTranslations['a11y.language'] : 'Language selection');
  languageControl.querySelectorAll('[data-language]').forEach((button) => {
    const buttonLanguage = button.dataset.language;
    button.setAttribute('aria-pressed', String(buttonLanguage === language));
    if (buttonLanguage === 'ko') {
      button.setAttribute('aria-label', language === 'ko' ? koTranslations['a11y.korean'] : 'Korean');
    } else {
      button.setAttribute('aria-label', language === 'ko' ? koTranslations['a11y.english'] : 'English');
    }
  });
};

const storeLanguage = (language) => {
  try {
    localStorage.setItem('portfolio-language', language);
  } catch (error) {
    // The interface still works when storage is unavailable.
  }
};

const applyLanguage = (language, { persist = true } = {}) => {
  currentLanguage = language === 'ko' ? 'ko' : 'en';
  document.documentElement.lang = currentLanguage;
  document.documentElement.dataset.language = currentLanguage;
  applyTextTranslations(currentLanguage);
  applyAttributeTranslations(currentLanguage);
  applyMetadata(currentLanguage);
  updateLanguageControl(currentLanguage);
  updateNavToggleLabel();
  if (persist) storeLanguage(currentLanguage);
};

languageControl.addEventListener('click', (event) => {
  const button = event.target.closest('[data-language]');
  if (button) applyLanguage(button.dataset.language);
});

let preferredLanguage = 'en';
try {
  preferredLanguage = localStorage.getItem('portfolio-language') || 'en';
} catch (error) {
  preferredLanguage = 'en';
}
applyLanguage(preferredLanguage, { persist: false });

document.querySelectorAll('[data-media]').forEach((media) => {
  const frame = media.closest('.media-frame');
  const markMissing = () => frame?.classList.add('is-missing');

  if (media instanceof HTMLImageElement) {
    if (media.complete && media.naturalWidth === 0) markMissing();
    media.addEventListener('error', markMissing, { once: true });
  }

  if (media instanceof HTMLVideoElement) {
    media.addEventListener('error', markMissing, { once: true });
  }
});
