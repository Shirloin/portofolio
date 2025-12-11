import { IProjectDetail } from "../../interfaces/IProjectDetail";

interface ProjectDetailCardProps {
  detail: IProjectDetail;
}

export default function ProjectDetailCard({ detail }: ProjectDetailCardProps) {
  return (
    <div className="flex flex-col gap-2 md:gap-6">
      {detail.title && (
        <h3 className="text-start text-lg font-bold sm:text-2xl">
          {detail.title}
        </h3>
      )}
      {detail.description && (
        <p className="whitespace-pre-line text-start text-base leading-tight text-gray-700 sm:leading-relaxed dark:text-gray-300">
          {detail.description}
        </p>
      )}
      {detail.thumbnails &&
        detail.thumbnails.length > 0 &&
        detail.thumbnails.map((thumbnail) => (
          <img
            key={thumbnail}
            className="w-full rounded-md object-contain shadow-lg sm:rounded-xl"
            src={thumbnail}
            alt={detail.title || "Project detail"}
          />
        ))}
    </div>
  );
}
