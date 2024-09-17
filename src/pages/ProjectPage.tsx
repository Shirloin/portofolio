import ProjectCard from "../components/cards/ProjectCard";

export default function ProjectPage() {
  return (
    <>
      <div className="mx-auto my-28 flex flex-grow flex-col">
        <h1 className="text-2xl font-bold">
          Each project is a unique piece of development
        </h1>
        <div className="flex w-full flex-grow flex-col">
          <ProjectCard index={0} />
          <ProjectCard index={1} />
          <ProjectCard index={2} />
        </div>
      </div>
    </>
  );
}
