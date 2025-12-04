
const projects =[
    {
        id: 1,
        title: "NYS Board of Elections Data Filter",
        description: "A configurable data-filtering engine built for NYS BOE files, automating segmentation by voting history, municipality, party, age ranges, and custom business rules.",
        image: "/projects/boe.png",
        tags: ["Python", "BigQuery", "Looker Studio", "Excel"],
        demoUrl: "https://boe-filter.netlify.app/"
    },
            {
        id: 2,
        title: "Pricing Grid",
        description: "An interactive pricing management system that allows real-time updates and eliminates manual spreadsheets.",
        image: "/projects/pricing_grid.png",
        tags: ["Google Sheets", "App Sheet"],
        demoUrl: "#"
    },
        {
        id: 3,
        title: "NYS Real Property Data Filter",
        description: "Automates real property data cleanup and segmentation with address, owner-type, and municipality-based rules.",
        image: "/projects/rp.png",
        tags: ["Python", "BigQuery", "Looker Studio", "Excel"],
        demoUrl: "https://rp-filter.netlify.app/"
    },

{
        id: 4,
        title: "Covid-19 Cases Tracker (DEPRECATED API)",
        description: "A web-based tracker that visualized daily COVID-19 case changes using interactive charts and automatic data ingestion.",
        image: "/projects/covid.png",
        tags: ["HTML", "CSS", "JavaScript", "Data Analysis"],
        demoUrl: "https://danielledavid.github.io/covidtracker/"
    }
]


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
    <span className="text-primary">Featured</span> Projects
  </h2>

  <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      A selection of projects I've built, from actual business solutions to side projects that solve real problems.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
    {projects.map((project, key) => (
  <div
    key={key}
    className="
      group rounded-xl bg-white/5 backdrop-blur-md border border-white/10
      hover:bg-white/10 hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]
      hover:-translate-y-2 transition-all duration-300 overflow-hidden shadow-lg
      cursor-pointer
    "
    onClick={() => window.open(project.demoUrl, "_blank")}
  >
    <div className="h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>

      <p className="text-muted-foreground text-sm mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="border px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
))}

  </div>


</div>

    </section>
};