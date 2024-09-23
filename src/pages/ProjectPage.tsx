import ProjectCard from "../components/cards/ProjectCard";
import { IProject } from "../interfaces/IProject";

const projects: IProject[] = [
  {
    title: "Easy Buy",
    description:
      "Easy Buy is an e-commerce site that supports buying and selling products. It features product search, chat, and a shopping cart functionality.",
    thumbnail: "/images/project/easybuy.png",
    stack: ["React", "ExpressJs", "MongoDB", "NodeJs", "Tailwind"],
    github: "https://github.com/shirloin/frontend-easy-buy/",
    demo: "https://easy-buy.shirloin.my.id/",
  },
  {
    title: "Job Fit CV",
    description:
      "Job Fit CV is a web application for student in Binus University to create a nice portofolio and find a suitable job for their enrichment career.",
    thumbnail: "/images/project/job-fit-cv.png",
    stack: ["NextJS", "Tailwind", "Prisma", "Postgresql"],
    github: "https://github.com/shirloin/job-fit-cv",
    demo: "https://job-fit-cv.shirloin.my.id/",
  },
  {
    title: "CodeXchange",
    description:
      "CodeXchange is a web application for developers, designed as a platform to share and debug code collaboratively. It provides an interactive space where developers can post their code snippets, problems, or projects they are working on, inviting others to review, debug, and suggest improvements",
    thumbnail: "/images/project/codexchange.png",
    stack: ["Laravel", "MySQL", "Tailwind"],
    github: "https://github.com/shirloin/codexchange",
    demo: "https://codexchange.shirloin.my.id/",
  },
  {
    title: "Aora",
    description:
      "Aora is a mobile application that allow users to share videos",
    thumbnail: "/images/project/aora.png",
    stack: ["React Native", "Nativewind", "Appwrite"],
    github: "https://github.com/shirloin/aora",
  },
];

export default function ProjectPage() {
  return (
    <>
      <div className="mx-auto my-28 flex flex-grow flex-col px-4">
        <h1 className="text-center text-2xl font-bold">Project Lists</h1>
        <div className="flex w-full flex-grow flex-col">
          {projects.map((p, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={p.title}
              description={p.description}
              thumbnail={p.thumbnail}
              github={p.github}
              demo={p.demo}
              stack={p.stack}
            />
          ))}
        </div>
      </div>
    </>
  );
}
