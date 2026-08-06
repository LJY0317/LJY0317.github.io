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
  'common.myWork': '내가 맡은 업무',
  'common.email': '이메일',

  'home.hero.eyebrow': '소프트웨어 엔지니어 · 서울',
  'home.hero.title': '로보틱스, 데이터, 웹과 모바일을 잇는 소프트웨어를 만듭니다.',
  'home.hero.lede': '구성 요소를 연결하고 가정을 검증하며 오류의 원인을 추적해, 시스템을 더 쉽게 시험하고 설명할 수 있도록 만드는 통합 작업에 집중합니다.',
  'home.hero.workLink': '주요 프로젝트 보기',
  'home.hero.emailLink': '이메일 보내기',
  'home.stage.aria': '엔지니어링 업무 영역',
  'home.stage.robotics': '로보틱스',
  'home.stage.data': '데이터',
  'home.stage.web': '웹',
  'home.stage.mobile': '모바일',
  'home.stage.integration': '통합',
  'home.stage.reliable': '신뢰할 수 있는 시스템',
  'home.stage.detail': '검증 · 디버깅 · 관찰 가능한 오류',
  'home.work.eyebrow': '주요 프로젝트',
  'home.work.title': '담당 범위, 문제, 수행 과정과 근거를 중심으로 설명한 프로젝트입니다.',
  'home.work.intro': '각 사례에서 팀 전체 결과물과 제가 직접 맡은 업무를 구분했습니다.',
  'home.card.greenhouse.meta': '로보틱스·시스템 통합 · 6인 팀 · 2026',
  'home.card.greenhouse.title': '자율주행 온실 로봇',
  'home.card.greenhouse.summary': 'ROS 2와 Gazebo 시뮬레이션에서 매핑, 주행 동작, 런타임 통합과 운영자 피드백을 다뤘습니다.',
  'home.card.greenhouse.focus': '로봇 시뮬레이션, 매핑 실험, 주행 흐름과 통합 디버깅.',
  'home.card.greenhouse.evidence': 'Gazebo/RViz 화면, 시스템 시연과 매핑 디버그 녹화.',
  'home.card.greenhouse.link': '상세 사례 보기',
  'home.card.greenhouse.alt': 'Gazebo 온실 시뮬레이션과 RViz 매핑 화면',
  'home.card.greenhouse.caption': '팀 시뮬레이션 환경과 매핑 맥락.',
  'home.card.etf.meta': '풀스택·데이터 통합 · 2인 팀 · 2025',
  'home.card.etf.title': 'ETF 데이터 플랫폼',
  'home.card.etf.summary': '반복 가능한 데이터 수집과 검색, 필터, 순위, 과거 데이터 조회를 중심으로 한 금융 정보 프로젝트입니다.',
  'home.card.etf.focus': 'ETF 데이터 흐름, API 통합, 사용자 데이터 화면, 테스트와 리팩터링.',
  'home.card.etf.evidence': '저장소로 확인 가능한 구현 기록. 현재 공개 가능한 스크린샷은 없습니다.',
  'home.card.etf.link': '상세 사례 보기',
  'home.card.etf.aria': '데이터 소스가 Django 데이터 서비스로 들어가 검색, 순위, 차트로 이어지는 흐름',
  'home.card.etf.pipeline': '데이터 파이프라인',
  'home.card.etf.collect': '수집 · 검증 · 중복 제거',
  'home.card.etf.service': 'Django 데이터 서비스',
  'home.card.etf.records': '검색 가능한 ETF 데이터',
  'home.card.etf.search': '검색',
  'home.card.etf.rankings': '순위',
  'home.card.etf.charts': '차트',
  'home.card.study.meta': '프론트엔드 통합 · 6인 팀 · 2026',
  'home.card.study.title': '스터디 매칭 플랫폼',
  'home.card.study.summary': '빌드 신뢰성을 회복하고 잘못된 API·환경 설정 가정을 제거하기 위해 React와 TypeScript 코드를 집중적으로 수정했습니다.',
  'home.card.study.focus': '빌드 오류 수정, 사용하지 않는 코드 제거, API 응답 가정 정정과 Vite 환경 설정.',
  'home.card.study.evidence': '개인정보를 가린 팀 제품 화면과 수정된 통합 경로에 대한 엔지니어링 설명.',
  'home.card.study.link': '엔지니어링 노트 보기',
  'home.card.study.alt': '샘플 스터디 카드 6개가 보이는 Togethy 스터디 탐색 화면',
  'home.card.study.caption': '개인정보를 노출하지 않도록 잘라낸 팀 제품 화면.',
  'home.card.dayori.meta': '풀스택 시간표 가져오기 · 6인 팀 · 2026',
  'home.card.dayori.title': 'Dayori 학생 플래너',
  'home.card.dayori.summary': '두 가지 시간표 가져오기 방식과 구조화된 일정 검토 흐름을 갖춘 크로스플랫폼 학업 플래너입니다.',
  'home.card.dayori.focus': '공통 UI 토큰과 반응형 UX, 시간표 OCR·에브리타임 가져오기, 관련 백엔드 API.',
  'home.card.dayori.evidence': '가져오기 화면, 시간표 결과, 제품 맥락 화면과 선별한 상호작용 녹화.',
  'home.card.dayori.link': '상세 사례 보기',
  'home.card.dayori.alt': '캘린더, 갤러리, 손글씨 노트 화면을 보여 주는 Dayori 프로젝트 표지',
  'home.card.dayori.caption': 'Dayori 팀 제품 개요이며, 개인 담당 업무는 상세 사례에서 설명합니다.',
  'home.about.eyebrow': '소개',
  'home.about.title': '커뮤니케이션 전공에서 소프트웨어 시스템으로.',
  'home.about.education': '한양대학교 ERICA에서 영미언어·문화학을 전공한 뒤 SSAFY에서 집중 소프트웨어 엔지니어링 교육을 이수했습니다.',
  'home.about.work': '팀 프로젝트에서 로보틱스, 백엔드 서비스, 프론트엔드 통합, 데이터 흐름과 모바일 애플리케이션의 경계를 연결하는 일을 맡았습니다.',
  'home.skills.eyebrow': '기술',
  'home.skills.title': '확인 가능한 프로젝트 기여에서 사용한 기술입니다.',
  'home.skills.languages': '언어',
  'home.skills.frontend': '프론트엔드·모바일',
  'home.skills.frontendList': 'React, Flutter, Vue.js, 반응형 UI 구현',
  'home.skills.backend': '백엔드·통합',
  'home.skills.backendList': 'Spring Boot, Django, Django REST Framework, REST / HTTP API, XML 파싱',
  'home.skills.robotics': '로보틱스·이미징',
  'home.education.eyebrow': '교육',
  'home.education.title': '기술 교육과 국제 커뮤니케이션 기반.',
  'home.education.ssafyType': '소프트웨어 엔지니어링 교육',
  'home.education.ssafyName': '삼성 청년 SW 아카데미',
  'home.education.ssafyDetail': '알고리즘, 웹, 모바일, 로보틱스와 팀 개발을 아우르는 프로젝트 중심 교육.',
  'home.education.degreeType': '학사',
  'home.education.degreeDetail': '영미언어·문화학.',
  'home.contact.eyebrow': '연락하기',
  'home.contact.title': '소프트웨어 엔지니어 기회를 찾고 있습니다.',
  'home.footer.note': '가볍고 빠른 정적 포트폴리오로 제작했습니다.',

  'greenhouse.breadcrumb': '온실 로봇',
  'greenhouse.hero.kicker': '로보틱스·시스템 통합 · 팀 프로젝트',
  'greenhouse.hero.title': '자율주행 온실 로봇',
  'greenhouse.hero.deck': '로봇 주행, 운영자 제어, 백엔드 서비스와 온실 업무 흐름을 통합한 ROS 2·Gazebo 시뮬레이션입니다. 이 페이지는 제가 맡은 매핑, 주행과 통합 업무에 집중합니다.',
  'greenhouse.hero.evidenceLink': '근거 보기',
  'greenhouse.hero.responsibilityLink': '담당 업무',
  'greenhouse.hero.alt': '로봇 환경과 RViz 매핑 화면을 함께 보여 주는 Gazebo 온실 시뮬레이션',
  'greenhouse.hero.fallback': '온실 개요 이미지를 불러올 수 없습니다.',
  'greenhouse.hero.caption': '온실 시뮬레이션과 매핑 맥락. 팀 프로젝트 환경입니다.',
  'greenhouse.snapshot.product': '스마트팜 로봇 시뮬레이션·제어 시스템',
  'greenhouse.snapshot.team': 'SSAFY 6인 프로젝트',
  'greenhouse.snapshot.focus': '매핑, 주행 흐름, 시뮬레이션, 통합 디버깅',
  'greenhouse.context.body': '팀 제품은 ROS 2 로봇 워크스페이스, FastAPI 백엔드, React 운영자 화면, PostgreSQL과 MQTT를 결합했습니다. 전체 시스템에는 순찰·이동 시나리오, 진단·수확 흐름, 의사결정 이력 저장과 운영자 모니터링이 포함됐습니다.',
  'greenhouse.context.scope': '대시보드, 진단 화면, 데이터베이스 모델과 전체 시스템 시연은 팀 프로젝트 맥락으로 제시합니다. 제가 단독으로 설계한 화면이나 기능으로 소개하지 않습니다.',
  'greenhouse.context.workflowAria': '상위 수준 시스템 흐름',
  'greenhouse.context.sensors': '센서·시뮬레이션',
  'greenhouse.context.runtime': 'ROS 2 런타임',
  'greenhouse.context.mapping': '매핑·주행',
  'greenhouse.context.backend': '백엔드 통합',
  'greenhouse.context.feedback': '운영자 피드백',
  'greenhouse.responsibility.intro': '제 업무는 로봇 시뮬레이션과 주행 경로에 집중됐습니다. 매핑 실험을 준비하고 지도 관련 런타임 동작을 다루며, 주행 흐름을 연결하고 Gazebo·ROS 2 상태·운영자 화면 사이의 통합 문제를 진단했습니다.',
  'greenhouse.responsibility.problem': '시뮬레이션과 주행 구성 요소는 정상적으로 시작된 것처럼 보여도 시간, 좌표 변환, 오도메트리, 위치 추정 상태나 지도 생명주기가 서로 어긋날 수 있습니다. 이런 오류는 화면만으로 원인을 설명하기 어렵습니다.',
  'greenhouse.responsibility.action1': '시뮬레이션과 지도 동작을 분리해 확인하기 위해 부하를 낮춘 월드와 매핑 실험을 수행했습니다.',
  'greenhouse.responsibility.action2': 'Gazebo, RViz, 좌표 변환, 오도메트리와 위치 추정 시작 과정을 하나의 연결된 런타임 경로로 점검했습니다.',
  'greenhouse.responsibility.action3': '각 구성 요소를 독립 시연으로 다루지 않고 주행 흐름과 운영자 상태 통합을 함께 작업했습니다.',
  'greenhouse.responsibility.result': '최종 프로젝트 저장소에는 프론트엔드, 로봇 상태, 진단, 수확 완료와 관련 API를 아우르는 검증된 종단 간 시연이 기록돼 있습니다. 아래 자료에서는 팀 단위 시연과 제가 직접 수행한 매핑 디버그 근거를 구분합니다.',
  'greenhouse.evidence.title': '런타임과 반복 개선',
  'greenhouse.evidence.mappingAlt': '이재엽이 수행한 매핑 실험 중 Gazebo 온실과 RViz SLAM 지도가 함께 보이는 화면',
  'greenhouse.evidence.mappingFallback': '매핑 실험 이미지를 불러올 수 없습니다.',
  'greenhouse.evidence.mappingCaption': '제가 수행한 시뮬레이션·매핑 작업의 Gazebo/RViz 매핑 시도.',
  'greenhouse.evidence.dashboardAlt': '온실 로봇 모니터링 정보를 보여 주는 팀 운영자 대시보드',
  'greenhouse.evidence.dashboardFallback': '운영자 대시보드 이미지를 불러올 수 없습니다.',
  'greenhouse.evidence.dashboardCaption': '로봇 런타임을 둘러싼 시스템 맥락을 보여 주기 위해 포함한 팀 운영자 대시보드.',
  'greenhouse.evidence.mappingVideoTitle': '매핑 디버그 세션',
  'greenhouse.evidence.mappingVideoBody': '부하를 낮춘 월드와 지도 실험을 4배속으로 녹화한 영상입니다. 제 기여를 가장 직접적으로 보여 주는 자료입니다.',
  'greenhouse.evidence.systemVideoTitle': '전체 시스템 시연',
  'greenhouse.evidence.systemVideoBody': '매핑, 주행, 진단과 수확을 다루는 팀 프로젝트 전체 시연입니다. 통합 제품을 보여 주는 자료이며, 화면에 보이는 모든 기능을 제가 단독 구현했다는 뜻은 아닙니다.',
  'greenhouse.system.eyebrow': '전체 시스템',
  'greenhouse.system.title': '팀 프로젝트 맥락',
  'greenhouse.system.tabletAlt': '온실 로봇 시스템의 태블릿 크기 팀 제어 화면',
  'greenhouse.system.tabletFallback': '태블릿 대시보드 이미지를 불러올 수 없습니다.',
  'greenhouse.system.tabletCaption': '태블릿 크기 팀 제어 화면. 팀 프로젝트 맥락입니다.',
  'greenhouse.system.diagnosisAlt': '식물 진단 결과와 관련 제어 흐름을 보여 주는 팀 화면',
  'greenhouse.system.diagnosisFallback': '진단 이미지를 불러올 수 없습니다.',
  'greenhouse.system.diagnosisCaption': '식물 진단 결과와 제어 흐름. 팀 프로젝트 맥락입니다.',
  'greenhouse.system.modelAlt': '온실 로봇 프로젝트 데이터 모델의 개체 관계도',
  'greenhouse.system.modelFallback': '시스템 데이터 모델 이미지를 불러올 수 없습니다.',
  'greenhouse.system.modelCaption': '최종 프로젝트 데이터 모델이며, 개인 구현 근거가 아닌 아키텍처 맥락으로 제시합니다.',
  'greenhouse.nav.previous': '← 포트폴리오로',
  'greenhouse.nav.next': '다음: ETF 데이터 플랫폼 →',
  'greenhouse.footer.note': '프로젝트 근거는 담당 범위와 맥락을 구분해 표시했습니다.',

  'etf.breadcrumb': 'ETF 데이터 플랫폼',
  'etf.hero.kicker': '풀스택·데이터 통합 · 2인 팀',
  'etf.hero.title': 'ETF 데이터 플랫폼',
  'etf.hero.deck': 'MOUDA는 ETF 정보, 금융 상품 조회, 외부 콘텐츠, 추천과 커뮤니티 기능을 결합한 서비스입니다. 이 페이지는 제가 맡은 ETF 데이터 수집, 탐색, 차트, API 통합, 테스트와 리팩터링에 집중합니다.',
  'etf.hero.contributionLink': '기여 내용 보기',
  'etf.hero.evidenceLink': '근거 범위 보기',
  'etf.pipeline.aria': 'ETF 데이터 파이프라인',
  'etf.pipeline.code': 'PyKRX와 외부 API\n          ↓\n수집 · 검증 · 중복 제거\n          ↓\nDjango 데이터 모델과 API\n          ↓\n검색 · 필터 · 상세 · 차트',
  'etf.snapshot.product': 'ETF·금융 정보 플랫폼',
  'etf.snapshot.team': '2인 프로젝트',
  'etf.snapshot.focus': '데이터 파이프라인, ETF 화면, API, 테스트, 리팩터링',
  'etf.context.body': '팀 플랫폼은 ETF 정보뿐 아니라 예·적금 상품, 외부 영상과 뉴스, 추천, 사용자 프로필과 커뮤니티 기능을 제공했습니다.',
  'etf.context.scope': '저장소에는 번호로 구분된 일부 기능이 제 담당으로 기록되어 있습니다. 이 페이지는 그 범위만 설명하며 제품 전체나 모든 화면 디자인을 제 작업으로 주장하지 않습니다.',
  'etf.responsibility.title': '원시 시장 데이터를 활용 가능한 화면으로',
  'etf.responsibility.problem': 'ETF 탐색 기능은 일관된 데이터 수집과 업데이트에 달려 있습니다. 중복 데이터, 비효율적인 삽입, 불완전한 이력이나 어긋난 API 응답은 곧바로 잘못된 필터, 차트와 상세 화면으로 이어집니다.',
  'etf.responsibility.action1': 'PyKRX 기반 흐름으로 1,000개가 넘는 ETF 정보와 일별 시장 데이터를 수집했습니다.',
  'etf.responsibility.action2': 'Django 관리 명령, 일괄 삽입, 고유성 제약, 중복 방지와 증분 업데이트를 적용했습니다.',
  'etf.responsibility.action3': 'ETF 검색, 필터, 정렬, 페이지네이션, 상세 정보와 기간별 차트 화면을 구현했습니다.',
  'etf.responsibility.action4': 'YouTube와 네이버 뉴스 API를 포함한 외부 콘텐츠 흐름을 통합했습니다.',
  'etf.responsibility.action5': '담당 기능 범위에서 버그 테스트와 수정, 성능 개선, 코드 리팩터링을 수행했습니다.',
  'etf.responsibility.result': '프로젝트는 반복 실행 가능한 데이터 적재 흐름과 동일한 구조화 데이터를 기반으로 한 ETF 탐색 기능을 만들었습니다. 구현 내용은 저장소에서 확인할 수 있지만, 이번 포트폴리오에 공개할 검토 완료 스크린샷이나 영상은 제공되지 않았습니다.',
  'etf.workflow.aria': 'ETF 데이터 처리 흐름',
  'etf.workflow.collect': '원천 데이터 수집',
  'etf.workflow.validate': '필드 검증',
  'etf.workflow.duplicates': '중복 방지',
  'etf.workflow.apis': 'API 제공',
  'etf.workflow.visualise': '검색·시각화',
  'etf.evidence.title': '텍스트 중심으로 구성한 이유',
  'etf.evidence.body': '선별된 미디어 자료에는 ETF 이미지나 영상이 없습니다. 따라서 이 페이지는 데이터 흐름도와 저장소로 확인 가능한 설명만 사용합니다.',
  'etf.evidence.noVisuals': '꾸며낸 시각 자료 없음',
  'etf.evidence.noVisualsBody': '생성형 대시보드, 가짜 스크린샷, 스톡 사진이나 검증되지 않은 성능 차트를 사용하지 않았습니다. 샘플 데이터 데모는 독립 제작 시연임을 명확히 표시하는 경우에만 추후 추가할 수 있습니다.',
  'etf.metric.scale': '수집 규모',
  'etf.metric.scaleBody': '프로젝트 README에 기록된 1,000개 이상의 ETF 데이터.',
  'etf.metric.update': '업데이트 전략',
  'etf.metric.updateBody': '일괄 삽입, 고유성 제약, 중복 방지와 증분 업데이트.',
  'etf.metric.views': '사용자 화면',
  'etf.metric.viewsBody': '검색, 분류·운용사 필터, 정렬, 페이지네이션, 상세 정보와 기간별 차트.',
  'etf.metric.limit': '현재 제한',
  'etf.metric.limitBody': '이 프로젝트에는 검토를 마친 공개 미디어가 아직 없습니다.',
  'etf.nav.previous': '← 이전: 온실 로봇',
  'etf.nav.next': '다음: 스터디 플랫폼 →',
  'etf.footer.note': '검토된 원본 자료 없이 ETF 미디어를 공개하지 않습니다.',

  'study.breadcrumb': '스터디 플랫폼',
  'study.hero.kicker': '프론트엔드 통합 · 팀 프로젝트',
  'study.hero.title': '스터디 매칭 플랫폼',
  'study.hero.deck': 'Togethy는 스터디 관리와 협업을 폭넓게 지원하는 플랫폼입니다. 제 기여는 그중 프론트엔드 통합 경로의 React·TypeScript 문제를 집중적으로 수정하는 일이었습니다.',
  'study.hero.noteLink': '엔지니어링 노트 읽기',
  'study.hero.contextLink': '제품 맥락 보기',
  'study.hero.alt': '샘플 스터디 카드 6개가 보이는 Togethy 스터디 탐색 화면',
  'study.hero.fallback': '스터디 탐색 이미지를 불러올 수 없습니다.',
  'study.hero.caption': '개인정보가 드러나지 않도록 잘라낸 스터디 탐색 화면입니다. 팀 프로젝트 맥락이며, 보이는 UI를 제 단독 설계나 구현으로 소개하지 않습니다.',
  'study.snapshot.product': '스터디 매칭·협업 플랫폼',
  'study.snapshot.team': 'SSAFY 6인 프로젝트',
  'study.snapshot.focus': '빌드 신뢰성과 프론트엔드 API 설정',
  'study.context.body': '팀 프로젝트는 스터디 추천·관리, 화상 회의, 회의 요약, 문서, 알림, OAuth와 백엔드 서비스를 포함했습니다. 이 페이지는 제품 전체 기능을 제 기여로 돌리지 않습니다.',
  'study.context.scope': '스터디 탐색 그리드 화면은 개인정보 노출 위험이 없어 선별한 유일한 제품 이미지입니다. 참여자 얼굴과 개인 대화가 드러나는 회의·채팅 화면은 의도적으로 제외했습니다.',
  'study.note.eyebrow': '엔지니어링 노트',
  'study.note.title': '프론트엔드 통합 경로 바로잡기',
  'study.note.problem': '프론트엔드에는 빌드 오류와 배포 동작의 신뢰성을 낮추는 통합 가정이 있었습니다. 일부 오래된 코드 경로는 더 이상 사용되지 않았고, 한 헬퍼는 실제와 다른 백엔드 응답 형태를 가정했으며, API 훅은 설정된 Vite 환경 대신 localhost 대체값을 사용하고 있었습니다.',
  'study.note.action1': '프론트엔드 파일 3개의 npm 빌드 오류를 수정했습니다.',
  'study.note.action2': '오래된 타입, 사용하지 않는 import와 상태, 사용되지 않는 거부 처리 경로를 제거했습니다.',
  'study.note.action3': '잘못된 백엔드 응답 가정에 기반한 헬퍼를 제거했습니다.',
  'study.note.action4': 'API 훅 2개에서 localhost 대체값을 제거하고 Vite 환경 설정을 사용하도록 바꿨습니다.',
  'study.note.result': '그 결과 빌드 경로가 정리되고 API 기준 주소 설정이 더 명확해졌습니다. 이 기여의 근거는 Togethy 전체 제품에 대한 소유권 주장이 아니라 수정된 통합 로직과 빌드 결과입니다.',
  'study.workflow.aria': '수정된 프론트엔드 통합 흐름',
  'study.workflow.environment': 'Vite 환경',
  'study.workflow.base': '설정된 API 기준 주소',
  'study.workflow.hook': '쿼리·API 훅',
  'study.workflow.response': '타입이 적용된 응답',
  'study.workflow.view': 'React 화면',
  'study.code.aria': '개념적 설정 흐름',
  'study.code.content': 'VITE_API_BASE_URL\n        ↓\n공통 API 설정\n        ↓\n기능별 쿼리 훅\n        ↓\n타입이 적용된 프론트엔드 상태',
  'study.code.note': '이 다이어그램은 검증된 수정 범주를 개념적으로 요약한 것이며, 비공개 팀 소스 코드를 그대로 옮긴 것이 아닙니다.',
  'study.demo.eyebrow': '데모 판단',
  'study.demo.title': '인터랙티브 데모를 나중에 만드는 이유',
  'study.demo.beforePath': '스터디 매칭 시뮬레이션 데모를',
  'study.demo.afterPath': '경로에 추가할 수 있지만, 이는 확인된 제 기여인 통합 수정이 아니라 재구성한 제품 흐름을 보여 주게 됩니다. 따라서 우선순위는 다음과 같습니다.',
  'study.demo.item1': '근거에 기반한 이 엔지니어링 노트를 공개합니다.',
  'study.demo.item2': '선별한 미디어로 로봇과 시간표 페이지를 완성합니다.',
  'study.demo.item3': '팀 기능 전체를 제 작업으로 오해하게 하지 않으면서 포트폴리오에 도움이 될 때만, 샘플 데이터를 사용한 Togethy 데모를 추가합니다.',
  'study.demo.disclosure': '향후 데모 고지',
  'study.demo.disclosureBody': 'Togethy 데모를 추가한다면, 원본 인증·AI·회의 기능이나 운영 백엔드와 연결되지 않은 독립 제작 샘플 데이터 포트폴리오 시연임을 밝혀야 합니다.',
  'study.nav.previous': '← 이전: ETF 데이터 플랫폼',
  'study.nav.next': '다음: Dayori 학생 플래너 →',
  'study.footer.note': '제품 전체 맥락과 개인 기여를 구분했습니다.',

  'dayori.breadcrumb': 'Dayori',
  'dayori.hero.kicker': '풀스택 시간표 가져오기 · 팀 프로젝트',
  'dayori.hero.title': 'Dayori 학생 플래너',
  'dayori.hero.deck': '일정, 노트와 꾸미기 기능을 결합한 크로스플랫폼 학업 플래너입니다. 이 사례는 제가 맡은 공통 UI 작업과 이미지·에브리타임 링크 기반 시간표 가져오기 경로에 집중합니다.',
  'dayori.hero.importLink': '가져오기 흐름 보기',
  'dayori.hero.responsibilityLink': '담당 업무',
  'dayori.hero.alt': '캘린더, 갤러리, 손글씨 노트 화면을 보여 주는 Dayori 프로젝트 표지',
  'dayori.hero.fallback': 'Dayori 표지 이미지를 불러올 수 없습니다.',
  'dayori.hero.caption': 'Dayori 프로젝트 개요. 팀 프로젝트 맥락입니다.',
  'dayori.snapshot.product': '크로스플랫폼 학업 플래너',
  'dayori.snapshot.team': 'SSAFY 6인 프로젝트',
  'dayori.snapshot.focus': 'UI 토큰, 반응형 UX, 시간표 가져오기, 관련 백엔드 API',
  'dayori.context.body': 'Dayori는 시간표·캘린더 관리에 플래너, 노트, 손글씨, 스티커와 갤러리 경험을 결합했습니다. 전체 제품에는 백엔드 서비스, 저장소, 인증과 인프라도 포함됐습니다.',
  'dayori.context.scope': '표지, 홈, 플래너, 갤러리, 노트, 스티커와 손글씨 자료는 팀 제품을 보여 줍니다. 제 개인 기여는 아래에 설명한 담당 업무로 한정됩니다.',
  'dayori.responsibility.intro': '프로젝트 README에는 제 담당이 세 영역으로 기록돼 있습니다. 공통 프론트엔드 UI 토큰과 반응형 UX, 시간표 OCR·에브리타임 시간표 가져오기, 그리고 이를 지원하는 백엔드 API입니다.',
  'dayori.responsibility.problem': '가져온 시간표 데이터는 즉시 신뢰할 수 없습니다. 이미지 인식과 외부 시간표 소스는 불완전하거나 모호한 필드를 만들 수 있어, 구조화된 일정으로 저장하기 전에 명확한 검토 단계가 필요합니다.',
  'dayori.responsibility.action1': '이미지 기반과 에브리타임 링크 기반 가져오기 경로를 구현했습니다.',
  'dayori.responsibility.action2': '보지 않은 데이터를 바로 저장하지 않고, 가져온 결과를 미리보기와 검토 화면으로 연결했습니다.',
  'dayori.responsibility.action3': '입력부터 구조화된 시간표까지 전체 경로를 검증할 수 있도록 Flutter와 관련 백엔드 엔드포인트를 함께 작업했습니다.',
  'dayori.responsibility.action4': '프론트엔드 전반에서 사용하는 공통 UI 토큰과 반응형 동작에 기여했습니다.',
  'dayori.responsibility.result': '선별한 근거는 두 입력 경로와 완성된 시간표를 보여 줍니다. 전체 애플리케이션을 제가 모두 구현한 것으로 오해하지 않도록 더 넓은 제품 화면은 뒤 섹션으로 분리했습니다.',
  'dayori.import.title': '가져오기·검토 흐름',
  'dayori.import.workflowAria': '시간표 가져오기 흐름',
  'dayori.import.choose': '이미지·링크 선택',
  'dayori.import.validate': '입력 검증',
  'dayori.import.preview': '결과 미리보기',
  'dayori.import.review': '시간표 검토',
  'dayori.import.save': '구조화 데이터 저장',
  'dayori.import.imageAlt': '이미지에서 시간표를 가져오는 Dayori 화면',
  'dayori.import.imageFallback': '이미지 가져오기 화면을 불러올 수 없습니다.',
  'dayori.import.imageCaption': '이미지 기반 시간표 가져오기 흐름. 제 기여와 직접 관련된 화면입니다.',
  'dayori.import.everytimeAlt': '에브리타임 공유 링크에서 시간표를 가져오는 Dayori 화면',
  'dayori.import.everytimeFallback': '에브리타임 가져오기 화면을 불러올 수 없습니다.',
  'dayori.import.everytimeCaption': '에브리타임 공유 링크 가져오기 흐름. 제 기여와 직접 관련된 화면입니다.',
  'dayori.import.settingsAlt': '시간표 시작 시간을 설정하는 Dayori 시간표 설정 화면',
  'dayori.import.settingsFallback': '시간표 설정 이미지를 불러올 수 없습니다.',
  'dayori.import.settingsCaption': '가져오기와 검토 과정에서 사용하는 시간표 설정 화면.',
  'dayori.import.overviewAlt': 'Dayori 애플리케이션에 표시된 완성된 주간 시간표',
  'dayori.import.overviewFallback': '시간표 개요 이미지를 불러올 수 없습니다.',
  'dayori.import.overviewCaption': '구조화된 일정 데이터를 저장한 뒤 표시되는 완성된 시간표.',
  'dayori.context.eyebrow': '제품 맥락',
  'dayori.context.title': '시간표 가져오기 업무 밖의 제품',
  'dayori.context.intro': '아래 화면과 영상은 팀 애플리케이션의 폭을 보여 줍니다. 보이는 모든 기능을 제가 만들었다는 근거가 아니라 팀 소유 제품의 맥락으로 봐야 합니다.',
  'dayori.context.homeAlt': '일정과 플래너 정보를 보여 주는 Dayori 홈 대시보드',
  'dayori.context.homeFallback': '홈 대시보드 이미지를 불러올 수 없습니다.',
  'dayori.context.homeCaption': '홈 대시보드. 팀 프로젝트 맥락입니다.',
  'dayori.context.plannerAlt': '팀 제품의 플래닝 화면을 보여 주는 Dayori 플래너',
  'dayori.context.plannerFallback': '플래너 이미지를 불러올 수 없습니다.',
  'dayori.context.plannerCaption': '플래너 기능. 팀 프로젝트 맥락입니다.',
  'dayori.context.galleryAlt': 'Dayori 캘린더와 갤러리 화면',
  'dayori.context.galleryFallback': '캘린더·갤러리 이미지를 불러올 수 없습니다.',
  'dayori.context.galleryCaption': '캘린더·갤러리 기능. 팀 프로젝트 맥락입니다.',
  'dayori.context.noteAlt': 'Dayori 손글씨 화학 노트 화면',
  'dayori.context.noteFallback': '노트 작성 이미지를 불러올 수 없습니다.',
  'dayori.context.noteCaption': '손글씨 노트 기능. 팀 프로젝트 맥락입니다.',
  'dayori.context.handwritingTitle': '손글씨 상호작용',
  'dayori.context.handwritingBody': '손글씨 작성과 형광펜 사용을 담은 1분 길이의 선별된 팀 제품 녹화입니다.',
  'dayori.context.stickerTitle': '스티커 편집 상호작용',
  'dayori.context.stickerBody': '스티커 도구를 담은 1분 길이의 선별된 팀 제품 녹화입니다. 보조 근거이므로 시간표 가져오기 섹션 뒤에 배치했습니다.',
  'dayori.nav.previous': '← 이전: 스터디 플랫폼',
  'dayori.nav.next': '포트폴리오로 →',
  'dayori.footer.note': '팀 전체 맥락과 개인 담당 업무를 구분해 표시했습니다.'
};

const koMetadata = {
  home: {
    title: '이재엽 — 소프트웨어 엔지니어',
    description: '로보틱스, 백엔드 시스템, 데이터 통합, 웹과 모바일을 아우르는 소프트웨어 엔지니어 이재엽의 포트폴리오입니다.'
  },
  greenhouse: {
    title: '자율주행 온실 로봇 — 이재엽',
    description: 'ROS 2 온실 로봇 시뮬레이션에서 이재엽이 수행한 매핑, 주행과 시스템 통합 업무 사례입니다.'
  },
  etf: {
    title: 'ETF 데이터 플랫폼 — 이재엽',
    description: 'MOUDA 플랫폼에서 이재엽이 맡은 ETF 데이터 흐름, 검색 화면과 API 통합 업무 사례입니다.'
  },
  study: {
    title: '스터디 매칭 플랫폼 — 이재엽',
    description: 'Togethy 스터디 플랫폼에서 이재엽이 수행한 프론트엔드 통합 수정 업무를 설명합니다.'
  },
  dayori: {
    title: 'Dayori 학생 플래너 — 이재엽',
    description: 'Dayori 학생 플래너에서 이재엽이 수행한 시간표 가져오기와 반응형 UI 업무 사례입니다.'
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
