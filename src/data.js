// ============================================================================
// SINGLE SOURCE OF TRUTH FOR ALL PERSONAL CONTENT
// Every value here is taken directly from the resume that was supplied.
// Edit this file to update names, links, numbers, or copy anywhere on the site.
// ============================================================================

export const profile = {
  name: 'Piyush Raj Singh',
  rollNo: '23/CE/089',
  phone: '+91 7982635927',
  email: 'spiyushraj00@gmail.com',
  github: 'https://github.com/PiyushRaj007',
  linkedin: 'https://www.linkedin.com/in/piyush-raj-918126289/',
  resumeUrl: '/resume.pdf', // place your PDF at public/resume.pdf
  tagline: 'Data Analytics | SQL | Python | Power BI',
  headline: 'Turning raw, inconsistent data into clear trends and decisions.',
  summary:
    "Civil Engineering student with a data analyst's toolkit — SQL, Python, and Power BI — proven on real-world environmental data at CPCB and independent business analytics projects. Seeking a Data Analyst role to apply this analytical rigor at scale.",
}

export const about = {
  paragraph:
    "I'm a Civil Engineering undergraduate at Delhi Technological University, building toward a career in data analytics. My CPCB internship gave me hands-on experience turning large, messy environmental datasets into spatial and temporal insight, and my independent projects in SQL and Python extend that same rigor to retail and business analytics — cleaning inconsistent data, finding the pattern underneath, and presenting it in a way decision-makers can act on.",
  highlights: [
    'Delhi Technological University (DTU)',
    'B.Tech, Civil Engineering',
    'SQL (MySQL)',
    'Python (Pandas, NumPy)',
    'Microsoft Power BI',
    'Real-world environmental data analysis (CPCB)',
    'Business analytics projects',
  ],
}

export const experience = {
  role: 'Data Analyst Intern',
  org: 'Central Pollution Control Board (CPCB)',
  focus: 'Assessment and Trend Analysis of River and Drain Water Quality Data',
  stats: [
    { number: '5', label: 'Years of data (2021–2025)' },
    { number: '9', label: 'River stretches' },
    { number: '29', label: 'Drains' },
  ],
  bullets: [
    'Analyzed 5 years (2021–2025) of large-scale environmental datasets across 9 river stretches and 29 drains, performing time-series, trend, and seasonal analysis on key water quality parameters.',
    'Integrated spatial data (latitude–longitude) with temporal analysis to identify drain–river interactions and assess localized pollution influence on river water quality.',
  ],
  parameters: ['BOD', 'COD', 'DO', 'pH', 'Chromium'],
  methods: ['Time-series analysis', 'Trend analysis', 'Seasonal analysis', 'Spatial + temporal analysis'],
}

export const projects = [
  {
    id: 'sql-retail-sales',
    title: 'SQL Retail Sales Analysis',
    problem:
      'A retail sales database needed to be built and interrogated to understand transaction trends, customer behavior, and product performance.',
    dataset: '10,000+ records — retail sales transactions',
    scaleStats: [
      { number: '10,000+', label: 'Records analyzed' },
      { number: '250+', label: 'Null/inconsistent entries cleaned' },
      { number: 'Top 5', label: 'Customers identified' },
    ],
    approach:
      'Built and optimized a retail sales database, then cleaned raw data by removing 250+ null or inconsistent entries to improve query reliability and data quality.',
    tools: ['SQL', 'MySQL'],
    findings: [
      'Identified the top 5 customers by transaction value',
      'Identified the most profitable months',
      'Identified the best-selling product categories',
    ],
    outcome:
      'Delivered insights intended to improve inventory planning and customer targeting efficiency by ~20%, showcasing practical decision-support through SQL analytics.',
    github: 'https://github.com/PiyushRaj007/SQL_retail_sales_project',
  },
  {
    id: 'customer-churn',
    title: 'Customer Churn Analysis',
    problem:
      'A telecom company faced a 26.54% customer churn rate, impacting recurring revenue and long-term retention.',
    dataset: '7,000+ customer records',
    scaleStats: [
      { number: '7,000+', label: 'Customer records' },
      { number: '26.54%', label: 'Churn rate' },
      { number: '30–40%', label: 'Potential churn reduction' },
    ],
    approach:
      'Performed Exploratory Data Analysis (EDA) on customer records using Python (Pandas, NumPy, Seaborn, Matplotlib) to identify the drivers behind churn.',
    tools: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
    findings: [
      'Month-to-month contracts saw 43% churn — the highest of all plans',
      'Electronic check payers saw 45% churn — the most unstable payment base',
      'Senior citizens saw 42% churn — a high-vulnerability segment',
      'Customers without online security or tech support showed significantly higher churn tendency',
    ],
    outcome:
      'Proposed data-backed retention strategies — contract migration, service bundling, and loyalty incentives — with potential to reduce churn by 30–40% and improve customer lifetime value (CLV).',
    github: 'https://github.com/PiyushRaj007/Customer-Churn-Analysis',
  },
]

export const skills = [
  {
    category: 'Programming & Query',
    items: ['SQL (MySQL)', 'Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'Data Analysis',
    items: [
      'Data Analysis',
      'Data Visualization',
      'Data Storytelling',
      'Data Cleaning',
      'Exploratory Data Analysis',
      'Statistical Trend Analysis',
    ],
  },
  {
    category: 'Tools',
    items: ['Microsoft Power BI', 'Microsoft Excel', 'VLOOKUP', 'Conditional Formatting', 'Pivot Tables'],
  },
]

export const certifications = [
  {
    title: 'Analyzing and Visualizing Data with Microsoft Power BI',
    org: 'PwC (Forage)',
    date: 'June 2024',
  },
  {
    title: 'Product Design Virtual Experience',
    org: 'Accenture North America (Forage)',
    date: 'July 2024',
  },
]

export const education = [
  {
    degree: 'B.Tech, Civil Engineering',
    institute: 'Delhi Technological University (DTU), New Delhi',
    years: '2023 – 2027',
    score: 'CGPA 7.00',
    primary: true,
  },
  {
    degree: 'CBSE (Class XII)',
    institute: 'Rainbow English Sr. Sec. School',
    years: '2020 – 2021',
    score: '78.8%',
    primary: false,
  },
  {
    degree: 'CBSE (Class X)',
    institute: 'Rainbow English Sr. Sec. School',
    years: '2018 – 2019',
    score: '85.2%',
    primary: false,
  },
]

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
