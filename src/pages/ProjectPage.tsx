import ProjectCard from "../components/cards/ProjectCard";

export default function ProjectPage() {
  return (
    <>
      <div className="mx-auto my-20 flex flex-grow flex-col">
        <h1 className="text-2xl font-bold">
          Each project is a unique piece of development
        </h1>
        <div className="mt-10 flex w-full flex-col space-y-28">
          <ProjectCard index={0} />
          <ProjectCard index={1} />
          <ProjectCard index={2} />
        </div>
      </div>
    </>
  );
}
