import ExperienceCard from "../components/cards/ExperienceCard";
import { experiences } from "../constants/experience";

export default function ExperiencePage() {
  return (
    <>
      <div className="mx-auto my-20 flex flex-grow flex-col justify-start overflow-hidden px-10 md:my-28">
        <h1 className="mb-4 text-center text-xl font-bold md:mb-10 md:text-3xl">
          Experiences
        </h1>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
          {experiences.map((experience, i) => (
            <ExperienceCard experience={experience} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}
