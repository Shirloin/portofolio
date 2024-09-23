interface ProjectCardProps {
  index?: number;
  thumbnail?: string;
  images?: string[];
  title?: string;
  description?: string;
  stack?: string[];
  github?: string;
  demo?: string;
}

export default function ProjectCard({
  index,
  thumbnail,
  images,
  title,
  description,
  stack,
  github,
  demo,
}: ProjectCardProps) {
  const animate = index! % 2 == 0 ? "fade-right" : "fade-left";
  console.log(images);
  return (
    <>
      <div
        className={`my-20 flex w-full max-w-4xl items-start gap-8 ${index! % 2 == 1 ? "flex-row-reverse" : ""}`}
      >
        <img
          data-aos={animate}
          className="aspect-video w-full max-w-lg rounded-lg object-fill"
          src={thumbnail}
          alt=""
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
          <div className="mt-4 flex w-full max-w-xl items-center justify-center gap-8 font-semibold">
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-1"
            >
              <p>Code</p>
              <i className="bi bi-github"></i>
            </a>
            {demo && (
              <a
                href={demo}
                target="_blank"
                className="flex items-center gap-1"
              >
                <p>Live Demo</p>
                <i className="fas fa-external-link-alt"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
