// src/data/projects.js
export const projects = [
  {
    id: 1,
    slug: "nys-boe-data-filter",
    title: "NYS Board of Elections Data Filter",
    description:
      "A configurable data-filtering engine built for NYS BOE files, automating segmentation by voting history, municipality, party, age ranges, and custom business rules.",
    image: "/projects/boe.png",
    tags: ["Python", "BigQuery", "Looker Studio", "Excel"],
    demoUrl: "https://boe-filter.netlify.app/",
  },
  {
    id: 2,
    slug: "pricing-grid",
    title: "Pricing Grid",
    description:
      "An interactive pricing management system that allows real-time updates and eliminates manual spreadsheets.",
    image: "/projects/pricing_grid.png",
    tags: ["Google Sheets", "App Sheet"],
  },
  {
    id: 3,
    slug: "automation-verification",
    title: "Automating a Process That Used to Take Days",
    description:
      "One example of how I identify time consuming manual processes and redesign them into maintainable automated workflows.",
    image: "/projects/post_office_n8n.png",
    tags: ["n8n", "Google Sheets", "Automation", "Web Scraping"]
  },
  {
    id: 4,
    slug: "nys-real-property-filter",
    title: "NYS Real Property Data Filter",
    description:
      "Automates real property data cleanup and segmentation with address, owner-type, and municipality-based rules.",
    image: "/projects/rp.png",
    tags: ["Python", "BigQuery", "Looker Studio", "Excel"],
    demoUrl: "https://rp-filter.netlify.app/",
  },
  {
    id: 5,
    slug: "covid-tracker",
    title: "Covid-19 Cases Tracker (DEPRECATED API)",
    description:
      "A web-based tracker that visualized daily COVID-19 case changes using interactive charts and automatic data ingestion.",
    image: "/projects/covid.png",
    tags: ["HTML", "CSS", "JavaScript", "Data Analysis"],
    demoUrl: "https://danielledavid.github.io/covidtracker/",
  },
];
