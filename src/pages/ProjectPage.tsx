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
    images: [
      "/images/project/aora_1.jpg",
      "/images/project/aora_2.jpg",
      "/images/project/aora_3.jpg",
    ],
  },
];

export default function ProjectPage() {
  return (
    <>
      <div className="mx-auto my-28 flex flex-grow flex-col">
        <h1 className="text-2xl font-bold">
          Each project is a unique piece of development
        </h1>
        <div className="flex w-full flex-grow flex-col">
          {projects.map((p, index) => (
            <ProjectCard
              index={index}
              title={p.title}
              description={p.description}
              thumbnail={p.thumbnail}
              github={p.github}
              demo={p.demo}
              stack={p.stack}
              images={p.images}
            />
          ))}
        </div>
      </div>
    </>
  );
}
