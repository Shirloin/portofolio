import { IProject } from "../../interfaces/IProject";
export default function ProjectCard({ project }: { project: IProject }) {
  const animate = project.index % 2 == 0 ? "fade-right" : "fade-left";
  return (
    <>
      <div
        className={`my-28 flex w-full max-w-4xl flex-grow items-start gap-8 ${project.index % 2 == 1 ? "flex-row-reverse" : ""}`}
      >
        <img
          data-aos={animate}
          className="h-72 min-w-[500px] rounded-lg"
          src={project.image}
          alt=""
        />
        <div data-aos={animate} className="mx-auto flex flex-col items-center">
          <h1 className="text-center text-xl font-bold uppercase">
            {project.title}
          </h1>
          <p className="mt-2 text-center leading-tight tracking-tight">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-wrap leading-tight">
            {project.stack?.map((tech) => (
              <p key={tech} className="font-bold">
                {tech}
              </p>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-8 font-semibold">
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-1"
            >
              <p>Code</p>
              <i className="bi bi-github"></i>
            </a>
            <a
              href={project.demo}
              target="_blank"
              className="flex items-center gap-1"
            >
              <p>Live Demo</p>
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
