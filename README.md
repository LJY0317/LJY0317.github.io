# Jaeyup Lee — Portfolio

Source for https://ljy0317.github.io/.

A static portfolio for personal software and SSAFY team projects. The home page is a short, media-led index. Each project page has genuine screenshots or recordings, what was built, and the failures and fixes that can be supported by project history.

## Structure

- index.html — project index and background
- projects/ — eight project articles
- assets/media/ — silent, short recordings and posters for personal projects
- assets/images/projects/ and assets/videos/projects/ — screenshots and videos from team work
- assets/css/site.css — layout and responsive styles
- assets/js/site.js — Korean/English switching, reduced-motion-aware viewport video playback
- AGENTS.md — editing and attribution conventions

## Preview and publishing

No build step. Run python3 -m http.server 8080 in this directory to preview.

GitHub Pages serves main from /. Scroll into a video to play it silently on a loop; scroll away or use its pause control to stop it. Reduced-motion settings keep videos paused until the visitor presses play.

Keep private original captures outside this repository. Only publish selected, reviewed image and video excerpts.
