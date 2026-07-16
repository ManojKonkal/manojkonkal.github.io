# Manoj Konkal | Portfolio Website

A personal portfolio website showcasing my background, skills, and projects as a
Software Engineering student focused on backend development, data analysis, and
machine learning.

**Live demo:** [manojkonkal.github.io](https://manojkonkal.github.io/)

## Features

- Responsive, single-page layout (Home, About, Skills, Projects, Contact)
- Light / dark mode toggle with saved preference (`localStorage`)
- Animated typing effect in the hero section
- Sliding image carousel for each project (3 images per project, auto-play,
  arrows, and dot navigation)
- Skill tags organized by category (Languages, ML, Data Analysis, BI, Database)
- Contact form with client-side confirmation state
- Social links to GitHub, LinkedIn, and Gmail
- Mobile-friendly navigation with a collapsible menu

## Tech Stack

- HTML5
- CSS3 (custom properties / variables for theming, no framework)
- Vanilla JavaScript (no dependencies)
- [Google Fonts](https://fonts.google.com/): Fraunces, Inter, JetBrains Mono

## Folder Structure

```
manojkonkal.github.io/
├── index.html
├── style.css
├── main.js
├── images/
│   ├── profile.jpeg
│   ├── project1-1.jpg
│   ├── project1-2.jpg
│   ├── project1-3.jpg
│   ├── project2-1.jpg
│   ├── project2-2.jpg
│   └── project2-3.jpg
├── resume/
│   └── Manoj_Konkal_Resume.pdf
└── README.md
```

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/ManojKonkal/manojkonkal.github.io.git
   cd manojkonkal.github.io
   ```
2. Add your images to `images/` and your resume PDF to `resume/` using the
   file names listed above.
3. Open `index.html` directly in a browser, or serve it locally:
   ```bash
   npx serve .
   ```

No build step or package installation is required — it's a static site.

## Deployment

This repo is a **user site** (`manojkonkal.github.io`), so GitHub Pages serves it
automatically from the `main` branch root — no extra configuration needed once
it's pushed:

1. Push commits to the `main` branch of `ManojKonkal/manojkonkal.github.io`.
2. Confirm it's enabled under **Settings → Pages** (source: `main` / `root`).
3. Changes go live at `https://manojkonkal.github.io/` within a minute or two.

## Projects Featured

| Project | Description | Tech |
|---|---|---|
| [PowerBI Company Performance Dashboard](https://github.com/ManojKonkal/PowerBI-Company-Performance-Dashboard.git) | Interactive dashboard analyzing the performance of top Indian tech companies. | Power BI, DAX, Power Query |
| [Movie Recommendation System](https://github.com/ManojKonkal/Movie-Recommendation-System-using-KNN-Algorithm.git) | Recommendation engine using the KNN algorithm with a Flask backend and a responsive frontend. | Python, Flask, scikit-learn |

## Contact

- GitHub: [github.com/ManojKonkal](https://github.com/ManojKonkal)
- LinkedIn: [linkedin.com/in/manojkonkal](https://www.linkedin.com/in/manojkonkal)
- Email: manojkonkal777@gmail.com

## License

This project is open source and available under the [MIT License](LICENSE).
