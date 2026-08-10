# Piyush Raj Singh — Data Analyst Portfolio

A recruiter-facing portfolio built with React, Vite, Tailwind CSS, Lucide icons, and Framer Motion.

## 1. Project structure

```
piyush-portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf              ← ADD YOUR RESUME PDF HERE (see below)
│   └── RESUME_PLACEHOLDER.txt  ← delete once resume.pdf is added
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx      ← CPCB internship
│   │   ├── Projects.jsx        ← SQL Retail + Customer Churn case studies
│   │   ├── Skills.jsx
│   │   ├── EducationCerts.jsx  ← Education + Certifications
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── DataThread.jsx      ← reusable hydrograph-line SVG motif
│   ├── data.js                 ← ALL YOUR CONTENT LIVES HERE
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html                  ← SEO / Open Graph tags
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 2. Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## 3. Where your personal information lives

Every piece of real content — name, tagline, summary, GitHub/LinkedIn URLs, the
CPCB internship, both project case studies, skills, certifications, and
education — is centralized in **`src/data.js`**. Edit that one file to update
anything on the site; you generally won't need to touch the components.

## 4. Add your resume PDF

Place your actual resume file at:

```
public/resume.pdf
```

The "Download Resume" button in the nav bar, hero, and mobile menu already
links to `/resume.pdf`. Once it's in place, delete
`public/RESUME_PLACEHOLDER.txt`.

## 5. Add project screenshots (optional)

The project case studies currently use KPI-stat panels instead of screenshots
(no dashboard images were available to source honestly). If you want to add
real screenshots later:

1. Drop images into `src/assets/` (e.g. `sql-retail-dashboard.png`).
2. Import them in `src/components/Projects.jsx` and render an `<img>` inside
   the "Visual / KPI side" panel of the relevant case study, above or below
   the stats.

## 6. GitHub links

Your project GitHub links were matched against your public repositories and
are already wired up correctly in `src/data.js`:

- SQL Retail Sales Analysis → `https://github.com/PiyushRaj007/SQL_retail_sales_project`
- Customer Churn Analysis → `https://github.com/PiyushRaj007/Customer-Churn-Analysis`

Your profile GitHub link (`https://github.com/PiyushRaj007`) is used in the
hero and contact sections. If you rename any repo, update the corresponding
`github` field in `src/data.js`.

## 7. LinkedIn / email

Also in `src/data.js`, under the `profile` object:

```js
export const profile = {
  email: 'spiyushraj00@gmail.com',
  github: 'https://github.com/PiyushRaj007',
  linkedin: 'https://www.linkedin.com/in/piyush-raj-918126289/',
  ...
}
```

## 8. Deploy to Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts (framework preset: Vite). For production deploy:

```bash
vercel --prod
```

**Option B — GitHub + Vercel dashboard**

1. Push this project to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repository.
3. Vercel auto-detects Vite — build command `vite build`, output directory `dist`.
4. Click Deploy.

No environment variables are required.

## 9. Pre-flight checklist (already verified)

- ✅ `npm install` + `npm run build` completes with no errors
- ✅ No broken imports
- ✅ No fabricated GitHub links — both project repos were verified against
  your public GitHub profile
- ✅ No fabricated statistics — every number on the site (5 years, 9 river
  stretches, 29 drains, 10,000+ records, 250+ cleaned entries, 26.54% churn,
  etc.) comes directly from your resume
- ✅ Responsive at 1440px / 1200px / 768px / 390px
- ✅ Semantic headings, alt-free icon-only buttons carry `aria-label`s,
  visible focus states, `prefers-reduced-motion` respected
- ✅ Sticky nav with scroll-spy active-section indicator

## 10. Still to add yourself

- `public/resume.pdf` — your real resume file
- (optional) real dashboard screenshots for the two case studies
