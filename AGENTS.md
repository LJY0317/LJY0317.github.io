# Portfolio site: editorial product showcase

This repository publishes Lee Jaeyup's software engineering portfolio. The design must look deliberately art-directed, not like a default AI-generated SaaS landing page.

## Visual direction
- Favor an editorial, image-led project index with crisp typography, asymmetrical but disciplined grids, large functional media, and strong whitespace. Keep it restrained and modern.
- Real screenshots and real product recordings outrank abstract hero illustrations, fabricated device mockups, gradients, icon triplets, glassmorphism, meaningless geometric decorations and generic rounded-card grids.
- Do not invent product screenshots, customer quotes, impact metrics, testimonials, badges, enterprise-style claims, or unsupported outcomes.
- Set a small consistent type/spacing/palette system, then vary composition *by project content*, not by random decoration.
- Typography, media cropping, rhythm, contrast, alignment and mobile layout should receive more attention than adding sections.
- Home hero typography must be proportionate, not billboard-sized. Keep the name near 40–62px on desktop and favor a short left-aligned introduction, with real project media visible without a long scroll.
- No gratuitous scroll-reveal, bouncing arrows, visual gimmicks or generic agency copy.

## Editorial tone
- Write concise, concrete, factual copy. Delete all filler about "passion", "revolutionizing", "empowering", "seamless", "unlocking potential", "turning ideas into reality" and other template slogans.
- The home page should give visitors the name, role and select projects quickly. Long engineering detail belongs on the project page, not in the first screen.
- Every featured project must answer three questions: What is it? What did Lee actually work on? Where is the evidence?
- Never assign credit for an entire team app to the individual. Separate team-wide context from the individual's actual contribution. Label pre-alpha/unfinished work as such.
- Keep navigation short. Do not add tutorial-like explanations, badges, invented metadata sections or redundant calls to action just because a template has them.

## Korean and English copy (site-wide)

- Korean is a first-class draft, **not a word-for-word translation of English**. A Korean developer should be able to read every heading and caption aloud without awkwardness.
- Write about the software, not the portfolio page. Name the implemented feature and what was changed. Prefer 'React 빌드 오류와 API 응답 처리 수정' over '프론트엔드 통합 경로의 안정성 확보'.
- Use ordinary, neutral Korean. Short headings can end with nouns; short descriptions can end in -습니다 or -했습니다. Avoid repetitive honorifics and constant '저는' / '제가' sentence openings. Never imitate a press release, AI assistant, marketing pitch, or translated enterprise case study.
- Watch for AI/translation patterns: '~를 통해', '~에 대한', '~기반의', '~를 제공', '맥락을 보여줍니다', '제 기여', '검토를 마친 근거', '~할 수 있도록', '워크플로', '연결 경로', '범위 구분', '프로젝트의 가치', and stacked nouns joined by '·'. They are not forbidden technical terms; rewrite them when they add no meaning.
- Avoid explanatory meta-copy: do not say '이 페이지에서는 ~ 설명합니다', justify why a demo does not exist, list what the site intentionally did not fabricate, or repeat disclaimers in every caption/footer. Team attribution and honest feature maturity remain required; state them once where they matter.
- Avoid formulaic symmetry. Projects need not each have an identical number of bullets, parallel sentences, or a tidy slogan. Project cards should usually need no more than a title plus one concrete line.
- English must be edited as native, direct technical copy rather than as a literal rendering of Korean. Use plain verbs (built, fixed, connected, tested) and concrete nouns. Avoid ad slogans and portfolio-template claims such as 'interactive worlds', 'seamless workflows', 'built, tested, and documented', 'empower', 'robust solution', or 'passionate about'.
- **Edit in two passes:** (1) mark filler, translationese, redundant notes, abstract nouns and unverifiable claims; (2) cut and rewrite only affected spans. Read Korean and English aloud; compare the result against repository facts, media, proper names, numbers, scope and team credit. Naturalness is not a reason to change a technical claim.
- For future AI-generated drafts, apply the same diagnosis-before-rewriting check. External humanizer skills are useful pattern references, but do not install or blindly apply unreviewed third-party automation to public copy.

Examples:
- KO avoid: '완성도 높은 경험을 제공하기 위해 다양한 기술을 통합했습니다.'
- KO prefer: 'Flutter에서 시간표 OCR을 구현하고 저장 전에 수정할 수 있게 했습니다.'
- KO avoid: '제품 전체의 맥락을 보여 주는 보조 시각 자료입니다.'
- KO prefer: '팀에서 만든 Dayori 화면.'
- EN avoid: 'A seamless end-to-end experience for modern development workflows.'
- EN prefer: 'Connect ChatGPT to files and development tools on the Mac.'

References: Google developer documentation voice guide (https://developers.google.com/style/tone), Microsoft voice guide (https://learn.microsoft.com/en-us/style-guide/brand-voice-above-all-simple-human), community Korean editing patterns (https://github.com/amondnet/yoonmoon/tree/main/skills/humanize and https://github.com/choconyam/humanizer-ko), and feedback on editing instead of wholesale rewriting (https://www.reddit.com/r/WritingWithAI/comments/1uyyulu/chatgpt_rewrites_instead_of_edits_and_it_took_me/). They inform editorial decisions; they are not automatic detectors of authorship.

## Real media and interaction
- Preserve original captures outside the public site. Publish only cropped, privacy-reviewed, compressed derivatives.
- Keep short visual demonstrations silent and lightweight; use actual MP4 videos with poster frames and viewport-based autoplay, loop and playsinline. Do not autoplay audio. No large center play button on incidental loops.
- Honor reduced motion and user pause. Defer offscreen videos and provide a static poster.
- Prefer responsive images; preserve UI legibility, crop deliberately, and check video dimensions/size.
- Remove names, credentials, private file paths, chat content, IDs and confidential data before publishing.
- For team screenshots, explain which parts are team context when individual credit might be misread.

## Engineering quality
- This is a static GitHub Pages site with no required build service. Prefer semantic HTML, minimal CSS and JavaScript, working relative/absolute links and accessible contrast.
- Verify desktop/mobile layouts, keyboard navigation, reduced motion and broken media. Avoid performance regressions.
- Maintain concise source files; do not create scattered redundant project records or stale duplicate style systems.
- Before publication, review the rendered UI with at least one real viewport; remove content or redesign weak compositions instead of papering over them.

## Rationale / community reference
- Community feedback: https://www.reddit.com/r/Design/comments/1vurogb/ai_made_me_notice_bad_design_more/
- Generic-by-default discussion: https://www.reddit.com/r/UI_Design/comments/1w70kqb/question_about_websites_looking_like_ai_slop/
- Portfolio hiring feedback: https://www.reddit.com/r/webdev/comments/1sf7jrm/what_do_hiring_managers_look_for_in_portfolio/
- Autoplay and browser requirements: https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay
These are design inputs, not inflexible prohibitions: a border or rounded corner is not inherently bad; thoughtless repetition is.
