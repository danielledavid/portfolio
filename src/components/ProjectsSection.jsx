import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";




export const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Featured</span> Projects
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects I've built, from actual business solutions to
          side projects that solve real problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {projects.map(project => (
            <div
              key={project.id}
              className="
                group rounded-xl bg-white/5 backdrop-blur-md border border-white/10
                hover:bg-white/10 hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]
                hover:-translate-y-2 transition-all duration-300 overflow-hidden
                cursor-pointer
              "
              onClick={() => navigate(`/projects/${project.slug}`)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="border px-2 py-1 text-xs rounded-full bg-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.demoUrl && (
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      window.open(project.demoUrl, "_blank");
                    }}
                    className="mt-4 text-sm text-primary hover:underline cursor-pointer"
                  >
                    View Live Demo →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};