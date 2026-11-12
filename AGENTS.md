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
