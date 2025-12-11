import { IExperience } from "../../interfaces/IExperience";

interface ExperienceCardProps {
  experience: IExperience;
}
export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <>
      <div className="animate__animated animate__zoomIn relative flex max-w-xl items-start gap-x-4 before:absolute before:bottom-0 before:left-9 before:top-[5rem] before:h-[calc(100%-70px)] before:w-[1px] before:bg-zinc-200 lg:gap-x-6 dark:before:bg-zinc-800">
        <div className="dark:bg-primary-bg relative grid min-h-[80px] min-w-[80px] place-items-center overflow-clip rounded-md border border-zinc-200 bg-gray-100 p-2 dark:border-zinc-800">
          {experience.icon && experience.icon}
          {experience.image && (
            <img
              src={experience.image}
              alt={experience.company}
              className="rounded-md object-cover duration-300"
              decoding="async"
              width="50"
              height="50"
              loading="lazy"
            />
          )}
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold">{experience.company}</h3>
          <p>{experience.position}</p>
          <time className="mt-2 text-sm uppercase tracking-widest text-zinc-500">
            {experience.startDate} - {experience.endDate}
          </time>
          <p
            className="my-4 whitespace-pre-line tracking-tight text-zinc-600 dark:text-zinc-400"
            dangerouslySetInnerHTML={{ __html: experience.description || "" }}
          />
        </div>
      </div>
    </>
  );
}
