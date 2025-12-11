import { useMemo } from "react";
import { Link } from "react-router-dom";
import { IProject } from "../../interfaces/IProject";

interface ProjectCardProps {
  index?: number;
  project: IProject;
}

const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export default function ProjectCard({ index, project }: ProjectCardProps) {
  const animate = useMemo(() => {
    return index! % 2 == 0 ? "fade-right" : "fade-left";
  }, [index]);

  return (
    <>
      <div
        className={`animate__animated animate__fadeInLeft my-10 flex w-full max-w-lg flex-col items-start gap-8 lg:my-20 lg:max-w-4xl ${index! % 2 == 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      >
        <img
          id="cardHover"
          data-aos={animate}
          className="aspect-video w-full max-w-lg cursor-pointer rounded-lg border bg-white object-fill shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          src={project.thumbnail}
          alt=""
          loading="lazy"
        />
        <div
          data-aos={animate}
          className="mx-auto flex h-full w-full flex-grow flex-col items-center"
        >
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
          <div className="mt-8 flex w-full max-w-xl flex-wrap items-center justify-center gap-4 space-x-8 font-semibold">
            {project.code?.map((c, index) => (
              <Link
                key={index}
                to={c.github || ""}
                target="_blank"
                className="flex cursor-pointer items-center gap-1"
              >
                <p id="cardHover">{c.name}</p>
                <i id="cardHover" className="bi bi-github"></i>
              </Link>
            ))}
            {project.demo && (
              <Link
                to={project.demo || ""}
                target="_blank"
                className="flex items-center gap-1"
              >
                <p id="cardHover">Live Demo</p>
                <i id="cardHover" className="fas fa-external-link-alt"></i>
              </Link>
            )}
            {project.details && (
              <Link
                to={`/project-detail/${createSlug(project.title || "")}`}
                className="flex items-center gap-1"
              >
                <p id="cardHover">View Detail</p>
                <i id="cardHover" className="fas fa-external-link-alt"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
