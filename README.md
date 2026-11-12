# Jaeyup Lee — Portfolio

Source for https://ljy0317.github.io/.

A static, image-led portfolio of personal software projects and SSAFY team work. The home page introduces the work briefly; individual project pages link to code and distinguish team context from personal contribution.

## Structure

- index.html — project index and introduction
- projects/ — individual project pages (including four SSAFY case studies)
- assets/media/ — privacy-reviewed stills and silent looping MP4 excerpts
- assets/images/projects/, assets/videos/projects/ — published SSAFY media
- assets/css/showcase.css, assets/js/showcase.js — product-showcase layout and video playback
- assets/css/base.css, assets/css/project.css, assets/js/main.js — shared styles, case layouts, navigation and Korean/English switching
- AGENTS.md — editorial, visual and media principles

## Publishing

GitHub Pages serves main at /. No framework or build step.

For a local preview, run: python3 -m http.server 8080

Ambient video pauses when offscreen and honors reduced motion. Public screenshots are derived from original captures; those originals are preserved privately on Google Drive.
