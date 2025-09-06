# Optimal Learning Website (GitHub Pages)

This is a static archive of the Optimal Learning site focused on the knowledge gradient. It has been updated to modern HTML5 while preserving the original look and feel, and improved for basic accessibility (semantic structure, alt text, skip links, keyboard focus states).

## What’s here

- `index.html` — Main landing page: overview, sections, software, applications, and readings
- `tutorialsciences.htm` — Tutorial series for laboratory sciences
- `_downloads.html` — Simple downloads/links page
- `Resources/` — Assets including `styles.css` and background image
- `images/` — Site images
- `Papers/`, `Course/`, `software/`, `TutorialLaboratorySciences/` — PDFs, docs, and referenced materials

## GitHub Pages setup

1. Push this folder as the root of your GitHub repository (or into a `docs/` folder).
2. In the GitHub repo settings, enable Pages:
	- Source: main branch (root) or `docs/` if used
	- Custom domain (optional)
3. Pages will serve `index.html` by default at `https://<user>.github.io/<repo>/`.

No build step is required; it’s plain HTML/CSS.

## Local preview on macOS

You can open `index.html` directly in a browser or serve locally to mimic a host:

```bash
# From the site root
python3 -m http.server 8000
# Then open http://localhost:8000/
```

## Accessibility improvements

- Semantic HTML5 structure (header/nav/main/footer)
- Skip link for keyboard users
- Alt text for images and improved link text
- Visible focus outlines
- Removed legacy tracking scripts that added no content

If you add new pages, keep these patterns and include `Resources/styles.css`.

## Maintenance notes

- External links were left intact; some may be outdated. Update or replace as needed.
- PDFs and Office files are served as-is.
- Background styling is handled via CSS; if you change assets, update paths in `Resources/styles.css`.

## License and attribution

All papers and course materials remain the property of their respective authors/publishers. This repository is an archival, non-commercial presentation of the original content with structural and accessibility updates.
