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
  'common.myFocus': "담당한 작업",
  'common.coreTools': '핵심 기술',
  'common.context': '배경',
  'common.responsibility': '담당 업무',
  'common.problem': '문제',
  'common.action': '수행',
  'common.result': '결과',
  'common.evidence': "실행 화면",
  'common.scopeBoundary': "담당 범위",
  "common.teamBuilt": "서비스 살펴보기",
  'common.myWork': '제가 맡은 업무',
  'common.email': '이메일',


  'greenhouse.breadcrumb': '온실 로봇',
  "greenhouse.hero.kicker": "스마트팜 로봇 · 팀 프로젝트",
  'greenhouse.hero.title': '자율주행 온실 로봇',
  "greenhouse.hero.deck": "온실에서 작물을 선택하면 로봇이 해당 위치로 이동해 진단·수확 등의 작업을 수행하는 시스템입니다. 저는 Gazebo의 매핑·주행과 경로·상태 오류를 수정했습니다.",
  'greenhouse.hero.evidenceLink': "시연 영상",
  'greenhouse.hero.responsibilityLink': "작업 내용",
  'greenhouse.hero.alt': '로봇 환경과 RViz 매핑 화면을 함께 보여 주는 Gazebo 온실 시뮬레이션',
  'greenhouse.hero.fallback': '온실 개요 이미지를 불러올 수 없습니다.',
  "greenhouse.hero.caption": "Gazebo 온실에서 로봇 주행과 지도를 확인하는 화면.",
  "greenhouse.snapshot.product": "온실 로봇 주행·작물 관리 시스템",
  'greenhouse.snapshot.team': 'SSAFY 6인 프로젝트',
  'greenhouse.snapshot.focus': '매핑, 주행, 시뮬레이션과 통합 디버깅',
  "greenhouse.context.body": "온실 순찰부터 작물 진단과 수확까지 진행하는 로봇 시스템을 팀에서 만들었습니다. 로봇은 ROS 2로 동작하고, 서버와 운영 화면에서 명령과 작업 상태를 확인할 수 있습니다.",
  'greenhouse.context.workflowAria': '상위 수준 시스템 흐름',
  'greenhouse.context.sensors': '센서·시뮬레이션',
  'greenhouse.context.runtime': 'ROS 2 런타임',
  'greenhouse.context.mapping': '매핑·주행',
  'greenhouse.context.backend': '백엔드 통합',
  'greenhouse.context.feedback': '운영자 피드백',
  'greenhouse.responsibility.intro': "Gazebo에서 매핑을 실험하고 주행 동작을 점검했습니다. ROS 2 상태와 RViz, 운영자 화면을 함께 확인하며 연동 오류를 찾았습니다.",
  'greenhouse.responsibility.problem': "노드가 실행되더라도 시간 동기화, TF, 오도메트리나 위치 추정이 어긋나면 로봇이 정상 주행하지 못합니다. Gazebo와 RViz를 함께 확인해야 했습니다.",
  'greenhouse.responsibility.action1': '시뮬레이션과 지도 동작을 분리해 확인하기 위해 부하를 낮춘 월드와 매핑 실험을 수행했습니다.',
  'greenhouse.responsibility.action2': 'Gazebo, RViz, 좌표 변환, 오도메트리와 위치 추정 시작 과정을 하나의 연결된 런타임 경로로 점검했습니다.',
  'greenhouse.responsibility.action3': '각 구성 요소를 따로 시연하는 데 그치지 않고 주행 흐름과 운영자 상태를 연결했습니다.',
  "greenhouse.responsibility.result": "로봇이 이동해 작물을 진단하고 수확하는 전체 흐름은 시연 영상에서 볼 수 있습니다. 매핑과 주행 디버깅 영상에는 제가 경로를 시험하고 오류를 추적한 과정이 담겨 있습니다.",
  'greenhouse.evidence.title': "매핑·주행 테스트",
  'greenhouse.evidence.mappingAlt': '이재엽이 수행한 매핑 실험 중 Gazebo 온실과 RViz SLAM 지도가 함께 보이는 화면',
  'greenhouse.evidence.mappingFallback': '매핑 실험 이미지를 불러올 수 없습니다.',
  "greenhouse.evidence.mappingCaption": "Gazebo와 RViz를 함께 열어 지도 생성을 확인하던 화면.",
  'greenhouse.evidence.dashboardAlt': '온실 로봇 모니터링 정보를 보여 주는 팀 운영자 대시보드',
  'greenhouse.evidence.dashboardFallback': '운영자 대시보드 이미지를 불러올 수 없습니다.',
  "greenhouse.evidence.dashboardCaption": "로봇의 상태와 작업을 확인하는 운영자 화면.",
  'greenhouse.evidence.mappingVideoTitle': '매핑 디버그 세션',
  'greenhouse.evidence.mappingVideoBody': "부하를 낮춘 월드에서 매핑을 실험했습니다. 영상은 4배속입니다.",
  'greenhouse.evidence.systemVideoTitle': '전체 시스템 시연',
  'greenhouse.evidence.systemVideoBody': "주행, 진단, 수확을 연결한 팀 프로젝트 시연입니다.",
  'greenhouse.system.eyebrow': '시스템 전체',
  "greenhouse.system.title": "로봇 운영 화면",
  'greenhouse.system.tabletAlt': '온실 로봇 시스템의 태블릿 크기 팀 제어 화면',
  'greenhouse.system.tabletFallback': '태블릿 대시보드 이미지를 불러올 수 없습니다.',
  "greenhouse.system.tabletCaption": "태블릿에서 로봇의 작업 상태를 확인하는 화면.",
  'greenhouse.system.diagnosisAlt': '식물 진단 결과와 관련 제어 흐름을 보여 주는 팀 화면',
  'greenhouse.system.diagnosisFallback': '진단 이미지를 불러올 수 없습니다.',
  "greenhouse.system.diagnosisCaption": "작물 진단 결과와 관련 정보를 확인하는 화면.",
  'greenhouse.system.modelAlt': '온실 로봇 프로젝트 데이터 모델의 개체 관계도',
  'greenhouse.system.modelFallback': '시스템 데이터 모델 이미지를 불러올 수 없습니다.',
  'greenhouse.system.modelCaption': "온실 로봇 프로젝트의 데이터 모델.",
  'greenhouse.nav.previous': '← 포트폴리오로',
  'greenhouse.nav.next': '다음: ETF 데이터 플랫폼 →',

  'etf.breadcrumb': "MOUDA",
  "etf.hero.kicker": "ETF·금융 정보 서비스 · 2인 팀",
  'etf.hero.title': "MOUDA",
  "etf.hero.deck": "ETF 종목을 검색하고 가격 흐름과 상세 정보, 관련 소식을 확인하는 금융 서비스입니다. 저는 ETF 데이터 수집·조회와 차트, Django API 연동을 맡았습니다.",
  'etf.hero.contributionLink': "구현 내용",
  'etf.hero.evidenceLink': "데이터 처리",
  'etf.pipeline.aria': 'ETF 데이터 파이프라인',
  'etf.pipeline.code': 'PyKRX와 외부 API\n          ↓\n수집 · 검증 · 중복 제거\n          ↓\nDjango 데이터 모델과 API\n          ↓\n검색 · 필터 · 상세 · 차트',
  "etf.snapshot.product": "ETF와 금융 상품 조회 서비스",
  'etf.snapshot.team': '2인 프로젝트',
  'etf.snapshot.focus': '데이터 파이프라인, ETF 화면, API, 테스트와 리팩터링',
  "etf.context.body": "ETF와 예·적금, 시세, 뉴스·영상을 한곳에서 살펴볼 수 있는 금융 정보 사이트입니다. 2인 팀으로 추천과 커뮤니티 기능도 함께 개발했습니다.",
  'etf.responsibility.title': "ETF 데이터 수집부터 차트까지",
  'etf.responsibility.problem': "ETF 데이터는 매일 갱신됩니다. 중복을 막고 이력을 유지해야 검색 결과와 차트도 정확하게 나옵니다.",
  'etf.responsibility.action1': 'PyKRX 기반 흐름으로 1,000개가 넘는 ETF 정보와 일별 시장 데이터를 수집했습니다.',
  'etf.responsibility.action2': 'Django 관리 명령, 일괄 삽입, 고유성 제약, 중복 검사와 증분 업데이트를 적용했습니다.',
  'etf.responsibility.action3': 'ETF 검색, 필터, 정렬, 페이지네이션, 상세 화면과 기간별 차트를 구현했습니다.',
  'etf.responsibility.action4': 'YouTube와 네이버 뉴스 API의 외부 콘텐츠를 연동했습니다.',
  'etf.responsibility.action5': '담당 기능을 테스트하고 버그를 수정했으며, 성능 개선과 리팩터링을 진행했습니다.',
  'etf.responsibility.result': "일괄 입력과 중복 방지, 증분 업데이트를 구현해 데이터를 반복해서 갱신할 수 있도록 했습니다.",
  'etf.workflow.aria': 'ETF 데이터 처리 흐름',
  'etf.workflow.collect': '원천 데이터 수집',
  'etf.workflow.validate': '필드 검증',
  'etf.workflow.duplicates': '중복 방지',
  'etf.workflow.apis': 'API 제공',
  'etf.workflow.visualise': '검색·시각화',
  'etf.evidence.title': "구현한 기능",
  'etf.evidence.body': "ETF 데이터를 수집하고 조회하는 과정은 아래 항목과 저장소 코드에서 확인할 수 있습니다.",
  'etf.metric.scale': "ETF 데이터",
  'etf.metric.scaleBody': "PyKRX로 1,000개 이상의 ETF 정보를 수집했습니다.",
  'etf.metric.update': "데이터 갱신",
  'etf.metric.updateBody': "일괄 삽입, 고유성 제약, 중복 검사, 증분 업데이트",
  'etf.metric.views': "화면",
  'etf.metric.viewsBody': "검색, 운용사·분류 필터, 정렬, 상세 화면, 기간별 차트",
  'etf.nav.previous': '← 이전: 온실 로봇',
  'etf.nav.next': '다음: 스터디 플랫폼 →',

  'study.breadcrumb': '스터디 플랫폼',
  "study.hero.kicker": "스터디 매칭·온라인 모임 · 팀 프로젝트",
  'study.hero.title': "Togethy",
  "study.hero.deck": "같이 공부할 사람을 찾고 온라인 스터디를 운영하는 서비스입니다. 저는 React 화면에서 빌드 오류와 API 응답 처리, 요청 주소 설정을 수정했습니다.",
  'study.hero.noteLink': "수정한 부분",
  'study.hero.contextLink': "팀 서비스",
  'study.hero.alt': '샘플 스터디 카드 6개가 보이는 Togethy 스터디 탐색 화면',
  'study.hero.fallback': '스터디 탐색 이미지를 불러올 수 없습니다.',
  "study.hero.caption": "스터디를 찾아보고 선택하는 Togethy 화면.",
  "study.snapshot.product": "스터디 찾기·모임 운영 서비스",
  'study.snapshot.team': 'SSAFY 6인 프로젝트',
  'study.snapshot.focus': '빌드 안정성과 API 설정',
  "study.context.body": "스터디를 찾는 과정과 운영하는 과정을 한 서비스로 묶었습니다. 팀에서 스터디 추천·관리, 화상 회의, 자료 공유, 알림과 회의 요약 기능을 개발했습니다.",
  'study.note.eyebrow': '엔지니어링 노트',
  'study.note.title': "빌드 오류와 API 연동 수정",
  'study.note.problem': "사용하지 않는 코드와 실제 API 응답에 맞지 않는 처리가 남아 있었습니다. 일부 요청은 Vite 설정 대신 localhost를 사용했습니다.",
  'study.note.action1': '프론트엔드 파일 3개에서 npm 빌드 오류를 수정했습니다.',
  'study.note.action2': '오래된 타입, 사용하지 않는 import와 상태, 불필요한 거부 처리 경로를 제거했습니다.',
  'study.note.action3': '잘못된 백엔드 응답 구조를 가정한 헬퍼를 제거했습니다.',
  'study.note.action4': 'API 훅 2개에서 localhost 대체값을 제거하고 Vite 환경 설정을 사용하도록 수정했습니다.',
  'study.note.result': "빌드 오류를 수정하고 API 요청 주소를 Vite 환경 설정 기준으로 맞췄습니다.",
  'study.workflow.aria': '수정된 프론트엔드 통합 흐름',
  'study.workflow.environment': 'Vite 환경',
  'study.workflow.base': '설정된 API 기준 주소',
  'study.workflow.hook': '쿼리·API 훅',
  'study.workflow.response': '타입이 적용된 응답',
  'study.workflow.view': 'React 화면',
  'study.code.aria': '개념적 설정 흐름',
  'study.code.content': 'VITE_API_BASE_URL\n        ↓\n공통 API 설정\n        ↓\n기능별 쿼리 훅\n        ↓\n타입이 적용된 프론트엔드 상태',
  "study.code.note": "프론트엔드가 API 주소를 찾고 응답을 화면에 표시하는 흐름을 정리했습니다.",
  'study.nav.previous': '← 이전: ETF 데이터 플랫폼',
  'study.nav.next': '다음: Dayori 학생 플래너 →',

  'dayori.breadcrumb': 'Dayori',
  "dayori.hero.kicker": "학생용 학업 플래너 · 팀 프로젝트",
  'dayori.hero.title': "Dayori",
  "dayori.hero.deck": "시간표와 일정, 필기를 한곳에 모아 관리하는 학생용 앱입니다. 저는 이미지 OCR·에브리타임 링크로 시간표를 가져오는 기능과 공통 UI, 관련 API를 개발했습니다.",
  'dayori.hero.importLink': "시간표 가져오기",
  'dayori.hero.responsibilityLink': "담당한 작업",
  'dayori.hero.alt': '캘린더, 갤러리, 손글씨 노트 화면을 보여 주는 Dayori 프로젝트 표지',
  'dayori.hero.fallback': 'Dayori 표지 이미지를 불러올 수 없습니다.',
  "dayori.hero.caption": "Dayori의 주요 기능을 모은 화면.",
  "dayori.snapshot.product": "학생용 시간표·일정·필기 앱",
  'dayori.snapshot.team': 'SSAFY 6인 프로젝트',
  'dayori.snapshot.focus': 'UI 토큰, 반응형 UX, 시간표 가져오기와 지원 API',
  "dayori.context.body": "시간표와 캘린더, 필기 노트, 스티커와 갤러리를 한 앱에 모았습니다. Flutter로 iOS와 Android에서 함께 사용할 수 있도록 만든 학업 플래너입니다.",
  'dayori.responsibility.intro': "공통 UI 스타일과 반응형 화면, 시간표 OCR·에브리타임 링크 가져오기, 관련 API를 개발했습니다.",
  'dayori.responsibility.problem': "이미지에서 읽어 온 수업 정보는 틀리거나 빠질 수 있습니다. 저장하기 전에 직접 확인하고 수정할 수 있도록 했습니다.",
  'dayori.responsibility.action1': '시간표 이미지와 에브리타임 공유 링크에서 일정을 가져오는 흐름을 구현했습니다.',
  'dayori.responsibility.action2': '가져온 결과를 바로 저장하지 않고 미리보기와 검토 화면을 거치도록 연결했습니다.',
  'dayori.responsibility.action3': '입력부터 구조화된 시간표까지 흐름을 확인할 수 있도록 Flutter와 관련 백엔드 엔드포인트를 함께 작업했습니다.',
  'dayori.responsibility.action4': '프론트엔드 전반의 공통 UI 토큰과 반응형 동작을 작업했습니다.',
  'dayori.responsibility.result': "이미지와 공유 링크로 시간표를 가져오고, 결과를 확인한 뒤 저장하는 기능을 구현했습니다.",
  'dayori.import.title': "시간표 가져오기",
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
  'dayori.context.eyebrow': "다른 화면",
  'dayori.context.title': "다른 화면",
  "dayori.context.intro": "플래너와 필기 노트, 캘린더와 갤러리 화면입니다.",
  'dayori.context.homeAlt': '일정과 플래너 정보를 보여 주는 Dayori 홈 대시보드',
  'dayori.context.homeFallback': '홈 대시보드 이미지를 불러올 수 없습니다.',
  "dayori.context.homeCaption": "오늘 일정과 플래너 정보를 확인하는 홈 화면.",
  'dayori.context.plannerAlt': '팀 제품의 플래닝 화면을 보여 주는 Dayori 플래너',
  'dayori.context.plannerFallback': '플래너 이미지를 불러올 수 없습니다.',
  "dayori.context.plannerCaption": "시간에 맞춰 공부 계획을 정리하는 플래너 화면.",
  'dayori.context.galleryAlt': 'Dayori 캘린더와 갤러리 화면',
  'dayori.context.galleryFallback': '캘린더·갤러리 이미지를 불러올 수 없습니다.',
  "dayori.context.galleryCaption": "달력과 사진을 함께 관리하는 화면.",
  'dayori.context.noteAlt': 'Dayori 손글씨 화학 노트 화면',
  'dayori.context.noteFallback': '노트 작성 이미지를 불러올 수 없습니다.',
  "dayori.context.noteCaption": "손글씨로 내용을 기록하는 노트 화면.",
  'dayori.context.handwritingTitle': '손글씨 상호작용',
  "dayori.context.handwritingBody": "손글씨를 작성하고 형광펜으로 표시하는 모습을 담은 시연 영상입니다.",
  'dayori.context.stickerTitle': '스티커 편집 상호작용',
  "dayori.context.stickerBody": "스티커를 옮기고 편집하는 모습을 담은 시연 영상입니다.",
  'dayori.nav.previous': '← 이전: 스터디 플랫폼',
  'dayori.nav.next': '포트폴리오로 →',
};

Object.assign(koTranslations, {
  "showcase.hero.kicker": "소프트웨어 개발자",
  "showcase.hero.statement": "Mac에서 직접 쓰는 앱과 개발 도구를 만들고 있습니다. SSAFY에서는 팀원들과 로봇·모바일·웹 서비스를 개발했습니다.",
  "showcase.hero.browse": "프로젝트 보기 ↘",
  "showcase.work.kicker": "01 / 개인 작업",
  "showcase.work.title": "개인 프로젝트",
  "showcase.plura.short": "Mac 한 대에서 ChatGPT 데스크톱 앱을 여러 프로필로 실행합니다. 기본 앱은 그대로 유지합니다.",
  "showcase.tela.short": "ChatGPT에서 Mac의 개발 폴더와 도구를 사용할 수 있도록 연결합니다. 현재 프리알파 단계입니다.",
  "showcase.photo.short": "Mac의 중복 사진을 찾아 정리합니다. 사진 원본과 해시값은 AI용 결과에 전달하지 않습니다.",
  "showcase.pawpaw.short": "고양이를 움직여 방을 탐험하고 물건과 상호작용하는 Unity 게임 프로토타입입니다.",
  "showcase.team.kicker": "02 / SSAFY",
  "showcase.team.title": "팀 프로젝트",
  "showcase.agribot.short": "온실에서 작물을 선택하면 로봇이 이동해 상태를 확인하고 작업하는 시스템입니다.",
  "showcase.dayori.short": "시간표와 일정, 필기를 모아 관리하는 앱. 이미지나 에브리타임 링크로 시간표를 불러옵니다.",
  "showcase.togethy.short": "함께 공부할 스터디를 찾고 화상 모임과 자료를 관리하는 서비스입니다.",
  "showcase.mouda.short": "ETF를 검색해 가격과 차트를 보고 관련 뉴스·영상을 확인하는 금융 서비스입니다.",
  "showcase.more.kicker": "03 / 그 밖의 프로젝트",
  "showcase.more.title": "다른 프로젝트",
  "showcase.more.mobile": "iPhone에서 Mac의 ChatGPT 프로필에 연결",
  "showcase.more.clipbox": "미디어 다운로드와 기록을 관리하는 앱",
  "showcase.more.docs": "Markdown 문서 검사 도구",
  "showcase.more.lag": "macOS 성능 진단 도구",
  "showcase.about.kicker": "소개",
  "showcase.about.text": "개인적으로 macOS 앱과 개발 도구를 만들고 있습니다. SSAFY에서는 로봇, 웹, 모바일 프로젝트를 진행했습니다.",
  "showcase.about.email": "이메일 ↗",
  "showcase.footer.top": "위로 ↑",
  "showcase.detail.back": "← 프로젝트 목록",
  "showcase.detail.all": "← 다른 프로젝트",
  "detail.plura-desktop.subtitle": "Mac 한 대에서 ChatGPT 프로필을 따로 실행합니다.",
  "detail.plura-desktop.desc": "프로젝트나 계정별로 다른 ChatGPT 작업 환경을 쓰고 싶을 때, 기존 앱을 그대로 두고 프로필별 실행 앱을 만드는 macOS 도구입니다.",
  "detail.plura-desktop.bullet1": "ChatGPT 프로필별 앱 생성·실행",
  "detail.plura-desktop.bullet2": "기본 앱과 프로필은 그대로 유지",
  "detail.plura-desktop.bullet3": "Homebrew 설치와 CLI 상태 확인",
  "detail.plura-desktop.note": "기본 ChatGPT 앱을 수정하지 않고, 프로필별 실행과 관리를 추가한 도구입니다.",
  "detail.chatgpt-tela.subtitle": "ChatGPT에서 Mac의 파일과 개발 도구를 사용합니다.",
  "detail.chatgpt-tela.desc": "ChatGPT가 Mac의 개발 프로젝트와 도구를 사용할 수 있도록 연결합니다. Chat과 Work/Codex에서 로컬 작업공간의 도구를 호출하는 기능을 개발하고 있습니다.",
  "detail.chatgpt-tela.bullet1": "Chat에서 허용된 로컬 폴더와 도구에 접근",
  "detail.chatgpt-tela.bullet2": "Work/Codex에서 로컬 도구 호출",
  "detail.chatgpt-tela.bullet3": "메뉴 막대에서 연결 상태 확인",
  "detail.chatgpt-tela.note": "프리알파 버전입니다. 현재 지원하는 기능은 GitHub README에 정리했습니다.",
  "detail.photoarchivekit.subtitle": "사진 원본을 AI에 보여주지 않고 중복을 찾는 Mac 사진 정리 프로그램.",
  "detail.photoarchivekit.desc": "사진·동영상의 중복은 Mac 안에서 검사하고, AI용 결과에서는 파일 내용과 촬영 정보, 해시값을 제외합니다. 사용자는 GUI에서 사진을 확인하고 삭제 여부를 결정할 수 있습니다.",
  "detail.photoarchivekit.bullet1": "여러 폴더에서 중복 파일 찾기",
  "detail.photoarchivekit.bullet2": "SwiftUI 화면에서 사진 비교",
  "detail.photoarchivekit.bullet3": "휴지통·격리 이동과 복구",
  "detail.photoarchivekit.note": "스캔 단계에서는 파일을 삭제하지 않으며, 실제 정리는 사용자가 확인한 뒤 진행합니다.",
  "detail.pawpaw-town.subtitle": "고양이가 집 안을 돌아다니는 Unity 게임.",
  "detail.pawpaw-town.desc": "고양이를 조작해 작업실과 주방, 다락방을 탐험하는 아이소메트릭 게임입니다. 이동하고 점프하며 방 안의 물건과 상호작용하는 기능을 Unity로 구현했습니다.",
  "detail.pawpaw-town.bullet1": "아이소메트릭 방식의 방과 가구",
  "detail.pawpaw-town.bullet2": "고양이 이동·점프·오브젝트 상호작용",
  "detail.pawpaw-town.bullet3": "방마다 다른 미션",
  "showcase.featured.label": "대표 작업 / UNITY",
  "showcase.featured.link": "프로젝트 보기 ↗",
  "showcase.plura.tag": "01 / macOS",
  "showcase.tela.tag": "02 / 개발 도구 · 프리알파",
  "showcase.photo.tag": "03 / Swift · macOS",
  "showcase.pawpaw.tag": "04 / Unity · 게임",
  "showcase.agribot.tag": "로봇 / ROS 2",
  "showcase.dayori.tag": "모바일 / Flutter",
  "showcase.togethy.tag": "웹 / Spring·React",
  "showcase.mouda.tag": "금융 / Django·Vue",
  "showcase.detail.repo": "코드 보기 ↗",
  "showcase.detail.code": "GitHub ↗",
  "showcase.detail.visualsTitle": "화면과 영상",
  "detail.plura-desktop.kind": "개인 프로젝트 / macOS",
  "detail.chatgpt-tela.kind": "개인 프로젝트 / 개발 도구 · 프리알파",
  "detail.photoarchivekit.kind": "개인 프로젝트 / Swift · macOS",
  "detail.pawpaw-town.kind": "개인 프로젝트 / Unity 게임",
  "detail.plura-desktop.media1": "서로 다른 프로필로 실행한 ChatGPT 데스크톱 창.",
  "detail.chatgpt-tela.media1": "Tela 메뉴 막대의 연결 상태 화면.",
  "detail.chatgpt-tela.media2": "ChatGPT에서 모델을 선택하는 과정.",
  "detail.photoarchivekit.media1": "PhotoArchiveKit의 폴더 설정 화면.",
  "detail.pawpaw-town.media1": "Pawpaw Town 작업실 화면.",
  "detail.pawpaw-town.media2": "작업실에서 고양이를 움직이는 모습.",
  "detail.pawpaw-town.media3": "주방을 돌아다니는 고양이.",
  "detail.pawpaw-town.media4": "다락방에서 점프하는 고양이.",
  "detail.plura-desktop.story.kicker": "왜 만들었나",
  "detail.plura-desktop.story.title": "ChatGPT 프로필을 나눠 쓰는 방법",
  "detail.plura-desktop.story.p1": "프로젝트나 계정마다 다른 ChatGPT 작업 환경을 쓰려면 한 앱에서 로그인을 바꾸는 일이 번거로울 수 있습니다. Plura는 기존 ChatGPT 앱을 바꾸지 않고 프로필별 실행 앱을 만들어 한 대의 Mac에서 나란히 사용하게 합니다.",
  "detail.plura-desktop.story.p2": "명령어로 프로필을 만들고 관리한 뒤 각각 독립된 창으로 실행합니다. 프로필별 데이터와 설정을 분리하므로 개인적인 작업과 다른 작업을 오갈 때도 각 환경을 유지할 수 있습니다.",
  "detail.chatgpt-tela.story.kicker": "개발 배경",
  "detail.chatgpt-tela.story.title": "ChatGPT와 로컬 프로젝트 사이의 불편",
  "detail.chatgpt-tela.story.p1": "ChatGPT로 개발하다 보면 Mac의 프로젝트 파일이나 명령 실행 결과를 대화에 일일이 옮겨야 할 때가 있습니다. Tela는 Mac에서 연결 서비스를 실행해 ChatGPT가 허용된 프로젝트 폴더와 개발 도구를 사용할 수 있도록 만든 프로그램입니다.",
  "detail.chatgpt-tela.story.p2": "메뉴 막대에서 연결 상태를 확인할 수 있고, Chat과 Work/Codex에서 각각 필요한 로컬 도구를 호출할 수 있습니다. 현재는 프리알파 단계여서 실제로 구현하고 검증한 기능을 중심으로 공개하고 있습니다.",
  "detail.photoarchivekit.story.kicker": "문제의식",
  "detail.photoarchivekit.story.title": "AI에 사진을 보여주지 않아도 정리할 수 있을까?",
  "detail.photoarchivekit.story.p1": "AI 에이전트에게 중복 사진 정리를 맡기는 건 편리하지만, 그 과정에서 사진 원본이나 촬영 정보, 해시값까지 보여줄 필요가 있을까 의문이 들었습니다. 개인정보를 중요하게 생각하는 사람도 쓸 수 있는 정리 도구를 만들고 싶었습니다.",
  "detail.photoarchivekit.story.p2": "사진과 동영상을 직접 검사하고 정확히 같은 파일을 찾는 작업은 Mac 안에서 처리합니다. 사용자는 GUI에서 썸네일과 파일 정보를 볼 수 있지만, AI 에이전트에 전달하는 별도 결과에는 원본·미리보기·파일명·경로·촬영 시각·해시값 등을 넣지 않도록 구분했습니다.",
  "detail.photoarchivekit.story.p3": "스캔할 때는 파일을 삭제하지 않습니다. 사용자가 중복 결과를 검토한 뒤 휴지통이나 격리 폴더로 옮기고, 격리한 파일은 복구할 수 있게 했습니다. Live Photo의 사진과 동영상도 한 자산으로 다룹니다.",
  "detail.pawpaw-town.story.kicker": "게임 소개",
  "detail.pawpaw-town.story.title": "고양이가 돌아다니는 집을 만들었습니다",
  "detail.pawpaw-town.story.p1": "고양이를 직접 움직여 집 안을 탐험하는 아이소메트릭 게임입니다. Unity로 이동과 점프를 구현하고, 방 안의 가구나 소품에 다가가 상호작용하는 모습을 시험했습니다.",
  "detail.pawpaw-town.story.p2": "작업실과 주방, 다락방마다 배치된 물건과 이동할 수 있는 경로가 다릅니다. Steam 판매까지 고려했던 아이디어였지만, 현재 공개한 영상은 개발 중인 프로토타입의 실제 플레이 장면입니다.",
  "greenhouse.context.journey": "운영자가 화면에서 작물이나 작업을 선택하면 로봇이 온실 통로를 따라 이동하고, 운영 화면에서 진행 상태를 확인할 수 있습니다. 실제 온실이 없어도 Gazebo 가상 환경에서 주행 경로와 작업 흐름을 반복 시험했습니다.",
  "greenhouse.responsibility.experiment": "작물에 조금 더 가까이 가게 하려고 최종 이동 목표를 바꾼 적도 있습니다. 하지만 실제 Gazebo 주행에서는 다른 통로로 돌아가거나 충돌 경고가 생겨 변경을 되돌렸습니다. 이후 오래된 위치 정보를 사용하는 문제와 출발 경유점 선택 로직을 추가로 수정했습니다.",
  "dayori.context.journey": "학생은 수업을 하나씩 입력하는 대신 시간표 이미지를 올리거나 에브리타임 공유 링크를 붙여 넣을 수 있습니다. 가져온 과목과 시간을 확인·수정한 뒤 주간 시간표로 저장하도록 만들었습니다.",
  "dayori.context.decision": "개발 방식에도 의견 차이가 있었습니다. 저는 iOS·Android 각각의 네이티브 앱이 성능과 사용감에 유리하다고 봤지만, 전체 8주 중 주제 검토와 변경을 거치고 실제 개발에 남은 시간은 4주 이하였습니다. 팀은 두 플랫폼에 공통으로 쓸 수 있는 Flutter를 선택했고, 저는 공통 UI와 시간표 가져오기 기능을 맡았습니다.",
  "study.context.journey": "사용자는 관심 있는 스터디를 찾아 모임을 관리하고 온라인으로 만날 수 있습니다. 스터디 탐색부터 화상 회의, 자료 공유와 회의 요약까지 이어지는 사용 흐름을 팀에서 구현했습니다.",
  "etf.context.journey": "관심 있는 ETF를 검색하면 현재가와 기간별 차트, 종목 정보를 확인하고 관련 뉴스·영상도 살펴볼 수 있습니다. 저는 이 화면에 필요한 데이터를 수집하고 Django API로 전달하는 작업을 주로 맡았습니다.",
  "etf.hero.screenshotAlt": "ETF 가격 차트와 종목 세부 정보가 보이는 MOUDA 실제 화면",
  "etf.hero.screenshotFallback": "ETF 상세 화면을 불러올 수 없습니다.",
  "etf.hero.screenshotCaption": "ETF 가격 흐름과 종목 정보를 확인하는 MOUDA 화면."
});

const koMetadata = {
  'pawpaw-town': { title: 'Pawpaw Town — 이재엽', description: '고양이와 인터랙티브 오브젝트가 등장하는 Unity 프로토타입.' },
  'photoarchivekit': { title: 'PhotoArchiveKit — 이재엽', description: '개인 사진을 AI에 보여주지 않고 Mac에서 중복 파일을 검토·정리하는 앱.' },
  'chatgpt-tela': { title: 'ChatGPT Tela — 이재엽', description: 'Chat과 Work/Codex 연결을 위한 개발 도구. 프리알파.' },
  'plura-desktop': { title: 'Plura Desktop — 이재엽', description: '여러 ChatGPT 데스크톱 프로필을 독립적으로 관리하는 macOS 도구.' },
  home: {
    title: '이재엽 — 소프트웨어 엔지니어',
    description: 'Mac에서 직접 사용하는 앱과 개발 도구, SSAFY 로봇·모바일·웹 팀 프로젝트를 실제 화면과 함께 소개합니다.'
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

let preferredLanguage = /^ko\b/i.test(navigator.language) ? 'ko' : 'en';
try {
  preferredLanguage = localStorage.getItem('portfolio-language') || preferredLanguage;
} catch (error) {
  // Keep the browser language when local storage is unavailable.
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
