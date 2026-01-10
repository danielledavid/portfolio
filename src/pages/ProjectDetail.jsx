import { useParams, useNavigate } from "react-router-dom";

export default function ProjectDetail({ projects, projectContent }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.slug === slug);
  const Content = projectContent?.[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-white pt-20">
      <div className="flex justify-center px-6">
        <article className="w-full max-w-4xl py-6 text-left">

          {/* TOP BACK BUTTON */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-sm text-primary hover:underline inline-flex items-center gap-2 cursor-pointer"
          >
            ← Back to projects
          </button>

          {/* HERO IMAGE */}
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* META */}
          <div className="flex items-center gap-4 text-sm text-white/60 mb-6">
            <span>Project</span>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto hover:text-white underline"
              >
                Live Demo →
              </a>
            )}
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {project.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            {project.description}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-white/10">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CONTENT */}
          <div className="prose prose-invert prose-lg max-w-none text-left">
            {Content ? <Content /> : <p>Project details coming soon.</p>}
          </div>

          {/* BOTTOM BACK BUTTON */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <button
              onClick={() => navigate(-1)}
              className="text-sm text-primary hover:underline inline-flex items-center gap-2 cursor-pointer"
            >
              ← Back to projects
            </button>
          </div>

        </article>
      </div>
    </div>
  );
}
