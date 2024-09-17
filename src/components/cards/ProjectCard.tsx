interface ProjectCardProps {
  index?: number;
  image?: string;
  title?: string;
  description?: string;
  stack?: string[];
  github?: string;
  demo?: string;
}

const Default: ProjectCardProps = {
  image:
    "https://images.unsplash.com/photo-1725817901136-70a686d60386?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  title: "Easy Buy",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolores! Nobis animi labore blanditiis ab ut soluta enim, hicdolore, sapiente rerum repellendus voluptatibus maiores! Corrupti praesentium rerum velit et?",
  stack: ["React", "SCSS"],
  github: "https://github.com/shirloin/easy-buy",
  demo: "https://easy-buy.shirloin.my.id",
};

export default function ProjectCard({
  index = 0,
  image = Default.image,
  title = Default.title,
  description = Default.description,
  stack = Default.stack,
  github = Default.github,
  demo = Default.demo,
}: ProjectCardProps) {
  const animate = index % 2 == 0 ? "fade-right" : "fade-left";
  return (
    <>
      <div
        className={`my-28 flex w-full flex-grow items-start gap-8 ${index % 2 == 1 ? "animate__animated animate__fadeInRight flex-row-reverse" : "animate__animated animate__fadeInLeft"}`}
      >
        <img
          data-aos={animate}
          className="h-72 min-w-[500px] rounded-lg"
          src={image}
          alt=""
        />
        <div data-aos={animate} className="mx-auto flex flex-col items-center">
          <h1 className="text-center text-xl font-bold uppercase">{title}</h1>
          <p className="mt-2 text-center leading-tight tracking-tight">
            {description}
          </p>
          <div className="mt-4 flex justify-center gap-4 text-wrap">
            {stack?.map((tech) => (
              <p key={tech} className="font-bold">
                {tech}
              </p>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-8 font-semibold">
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-1"
            >
              <p>Code</p>
              <i className="bi bi-github"></i>
            </a>
            <a href={demo} target="_blank" className="flex items-center gap-1">
              <p>Live Demo</p>
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
