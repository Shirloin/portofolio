import { IGithub } from "../../interfaces/IGithub";

interface ProjectCardProps {
  index?: number;
  thumbnail?: string;
  images?: string[];
  title?: string;
  description?: string;
  stack?: string[];
  code?: IGithub[];
  demo?: string;
}

export default function ProjectCard({
  index,
  thumbnail,
  title,
  description,
  stack,
  code,
  demo,
}: ProjectCardProps) {
  const animate = index! % 2 == 0 ? "fade-right" : "fade-left";
  return (
    <>
      <div
        className={`animate__animated animate__fadeInLeft my-10 flex w-full max-w-lg flex-col items-start gap-8 lg:my-20 lg:max-w-4xl ${index! % 2 == 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      >
        <img
          id="cardHover"
          data-aos={animate}
          className="aspect-video w-full max-w-lg rounded-lg border bg-white object-fill shadow-md"
          src={thumbnail}
          alt=""
          loading="lazy"
        />
        <div
          data-aos={animate}
          className="mx-auto flex h-full w-full flex-grow flex-col items-center"
        >
          <h1 className="text-center text-xl font-bold uppercase">{title}</h1>
          <p className="mt-2 text-center leading-tight tracking-tight">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-wrap leading-tight">
            {stack?.map((tech) => (
              <p key={tech} className="font-bold">
                {tech}
              </p>
            ))}
          </div>
          <div className="mt-8 flex w-full max-w-xl flex-wrap items-center justify-center gap-4 space-x-8 font-semibold">
            {code?.map((c, index) => (
              <a
                key={index}
                href={c.github}
                target="_blank"
                className="flex cursor-pointer items-center gap-1"
              >
                <p id="cardHover">{c.name}</p>
                <i id="cardHover" className="bi bi-github"></i>
              </a>
            ))}
            {demo && (
              <a
                href={demo}
                target="_blank"
                className="flex items-center gap-1"
              >
                <p id="cardHover">Live Demo</p>
                <i id="cardHover" className="fas fa-external-link-alt"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
