import { useParams } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
import ProjectDetailCard from "../components/cards/ProjectDetailCard";
import { FaGithub } from "react-icons/fa";
import { projects } from "../constants/projects";

// Helper function to create URL-friendly slug from project title
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Find project by matching slug with project title
  const project = projects.find((p) => {
    if (!p.title) return false;
    return createSlug(p.title) === slug;
  });

  if (!project) {
    return (
      <div className="relative mx-auto my-20 flex w-full max-w-3xl flex-grow flex-col items-center justify-center gap-4 px-4 md:my-28">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          The project you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  // Helper function to render text with links (simple markdown-like support)
  const renderTextWithLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <a
          key={match.index}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 underline underline-offset-4 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
        >
          {match[1]}
        </a>,
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  // Helper function to render text with bold (simple markdown-like support)
  const renderTextWithFormatting = (text: string) => {
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = boldRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        const beforeText = text.substring(lastIndex, match.index);
        parts.push(renderTextWithLinks(beforeText));
      }
      parts.push(
        <strong key={match.index} className="font-semibold">
          {match[1]}
        </strong>,
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      const afterText = text.substring(lastIndex);
      parts.push(renderTextWithLinks(afterText));
    }

    return parts.length > 0 ? parts : renderTextWithLinks(text);
  };

  return (
    <div className="relative mx-auto my-20 flex w-full max-w-3xl flex-grow flex-col gap-4 px-4 md:my-28">
      {/* Header Section */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <h1 className="max-w-md text-3xl font-bold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2">
          {project.demo ? (
            <a
              id="cardHover"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-primary-bg bg-secondary-bg flex cursor-pointer items-center gap-x-2 rounded-md border border-transparent px-4 py-2 text-sm text-zinc-700 duration-200 hover:border-zinc-200 sm:text-base dark:text-white hover:dark:border-zinc-700"
            >
              <HiOutlineExternalLink id="cardHover" className="h-4 w-4" />
              <p id="cardHover">Live URL</p>
            </a>
          ) : (
            <span
              id="cardHover"
              className="dark:bg-primary-bg bg-secondary-bg flex cursor-not-allowed items-center gap-x-2 rounded-md border border-transparent px-4 py-2 text-sm text-zinc-700 duration-200 hover:border-zinc-200 sm:text-base dark:text-white hover:dark:border-zinc-700"
            >
              <HiOutlineExternalLink id="cardHover" className="h-4 w-4" />
              <p id="cardHover">Live URL</p>
            </span>
          )}
          {project.code && project.code.length > 0 && (
            <>
              {project.code.map((code, index) => (
                <a
                  id="cardHover"
                  key={index}
                  href={code.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:bg-primary-bg bg-secondary-bg flex cursor-pointer items-center gap-x-2 rounded-md border border-transparent px-4 py-2 text-sm text-zinc-700 duration-200 hover:border-zinc-200 sm:text-base dark:text-white hover:dark:border-zinc-700"
                >
                  <FaGithub id="cardHover" className="h-4 w-4" />
                  <p id="cardHover">{code.name}</p>
                </a>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Cover Image */}
      {project.thumbnail && (
        <div className="relative h-40 w-full pt-[52.5%]">
          <img
            src={project.thumbnail}
            alt={`Cover image for ${project.title}`}
            className="absolute inset-0 h-full w-full rounded-xl border border-zinc-100 object-cover dark:border-zinc-800"
            loading="lazy"
          />
        </div>
      )}

      {/* Overview Section */}
      {(project.overview || project.description) && (
        <section>
          <h2 className="mb-6 text-start text-3xl font-bold">Overview</h2>
          <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            {project.overview ? (
              project.overview.map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line">
                  {renderTextWithFormatting(paragraph)}
                </p>
              ))
            ) : (
              <p>{project.description}</p>
            )}
          </div>
        </section>
      )}

      {/* Technologies Section */}
      {project.stack && project.stack.length > 0 && (
        <section>
          <h2 className="mb-6 text-start text-3xl font-bold">Technologies</h2>
          <ul className="mx-auto flex max-w-3xl flex-wrap justify-start gap-4 text-base text-zinc-700 dark:text-zinc-300">
            {project.stack.map((tech, index) => (
              <li
                id="cardHover"
                key={index}
                className="cursor-none rounded-full border px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Video Section */}
      {project.video && (
        <section className="mb-16">
          <div className="aspect-video w-full overflow-hidden rounded-xl">
            <iframe
              className="h-full w-full"
              src={project.video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {/* Project Details Section */}
      {project.details && project.details.length > 0 && (
        <section className="space-y-10 md:space-y-20">
          {project.details.map((detail, index) => (
            <ProjectDetailCard key={index} detail={detail} />
          ))}
        </section>
      )}
    </div>
  );
}
