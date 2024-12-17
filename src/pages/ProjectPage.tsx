import ProjectCard from "../components/cards/ProjectCard";
import { IProject } from "../interfaces/IProject";

const projects: IProject[] = [
  {
    title: "MetaReads",
    description:
      "Metareads is an innovative web application for reading books online, built on advanced Web3 technology, ICP (Internet Computer Protocol), Internet Identity, and Artificial Intelligence.  With powerful AI integration, users can summarize paragraphs, making it easier to grasp key ideas and enhance their reading experience.",
    thumbnail: "/images/project/metareads.png",
    stack: [
      "ICP Web3",
      "React",
      "Typescript",
      "Rust",
      "3rd Place Winner, Hackathon 8.0",
    ],
    code: [
      {
        name: "Code",
        github: "https://github.com/Shirloin/MetaReads",
      },
    ],
  },
  {
    title: "Easy Buy",
    description:
      "Easy Buy is an e-commerce site that supports buying and selling products. It features product search, chat, and a shopping cart functionality.",
    thumbnail: "/images/project/easybuy.png",
    stack: [
      "React",
      "Mongoose",
      "MongoDB",
      "NodeJs",
      "Socket IO",
      "Tailwind",
      "Docker",
      "CI/CD",
      "Github Action",
    ],
    code: [
      {
        name: "Frontend Code",
        github: "https://github.com/shirloin/frontend-easy-buy/",
      },
      {
        name: "Backend Code",
        github: "https://github.com/shirloin/backend-easy-buy/",
      },
    ],
    demo: "https://easy-buy.shirloin.my.id/",
  },
  {
    title: "Job Fit CV",
    description:
      "Job Fit CV is a web application for student in Binus University to create a nice portofolio and find a suitable job for their enrichment career.",
    thumbnail: "/images/project/job-fit-cv.png",
    stack: [
      "NextJS",
      "Tailwind",
      "Prisma",
      "Postgresql",
      "Docker",
      "CI/CD",
      "Github Action",
    ],
    code: [
      {
        name: "Code",
        github: "https://github.com/shirloin/job-fit-cv/",
      },
    ],
    demo: "https://job-fit-cv.shirloin.my.id/",
  },
  {
    title: "CodeXchange",
    description:
      "CodeXchange is a web application for developers, designed as a platform to share and debug code collaboratively. It provides an interactive space where developers can post their code snippets, problems, or projects they are working on, inviting others to review, debug, and suggest improvements",
    thumbnail: "/images/project/codexchange.png",
    stack: ["Laravel", "MySQL", "Tailwind"],
    code: [
      {
        name: "Code",
        github: "https://github.com/shirloin/codexchange/",
      },
    ],
    demo: "https://codexchange.shirloin.my.id/",
  },
  {
    title: "Aora",
    description:
      "Aora is a mobile application that allow users to share videos",
    thumbnail: "/images/project/aora.png",
    stack: ["React Native", "Nativewind", "Appwrite"],
    code: [
      {
        name: "Code",
        github: "https://github.com/shirloin/aora/",
      },
    ],
  },
  {
    title: "CinemaX231",
    description:
      "Cinemax231 is a mobile app for booking cinema tickets, with features for users to order tickets and admins to manage movie listings.",
    thumbnail: "/images/project/cinemax231.png",
    stack: ["Android", "Kotlin", "Firebase"],
    code: [
      {
        name: "Code",
        github: "https://github.com/shirloin/cinemax231",
      },
    ],
    demo: "https://play.google.com/store/apps/details?id=edu.bluejack_231.cinemax231",
  },
  {
    title: "Farebook",
    description:
      "Farebook is a web clone of Facebook, designed to replicate its core features and functionalities for social networking, allowing users to connect, share, and interact with friends and communities online.",
    thumbnail: "/images/project/farebook.png",
    stack: [
      "ReactJs",
      "Typescript",
      "GO",
      "GraphQL API",
      "PostgreSQL",
      "Firebase",
    ],
    code: [
      {
        name: "Code",
        github: "https://github.com/shirloin/farebook",
      },
    ],
  },
  {
    title: "Monster Funter",
    description:
      "Monster Funter  is an RPG where players explore mazes and battle monsters. The main challenge is defeating the legendary Glavenus, a powerful creature threatening villagers. Players use their characters' skills to ensure the safety of the community.",
    thumbnail: "/images/project/monsterfunter.png",
    stack: ["Unity", "C#"],
    code: [
      {
        name: "Code",
        github: "https://github.com/shirloin/monster-funter",
      },
    ],
  },
];

export default function ProjectPage() {
  return (
    <>
      <div className="mx-auto my-20 flex flex-grow flex-col px-4 md:my-28">
        <h1 className="text-center text-xl font-bold md:text-3xl">
          Project Lists
        </h1>
        <div className="flex w-full flex-grow flex-col">
          {projects.map((p, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={p.title}
              description={p.description}
              thumbnail={p.thumbnail}
              code={p.code}
              demo={p.demo}
              stack={p.stack}
            />
          ))}
        </div>
      </div>
    </>
  );
}
