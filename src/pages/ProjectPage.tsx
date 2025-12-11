import { useState, useMemo } from "react";
import ProjectCard from "../components/cards/ProjectCard";
import { projects } from "../constants/projects";

export default function ProjectPage() {
  // Extract all unique tech stacks from all projects
  const allTechStacks = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.stack?.forEach((tech) => {
        techSet.add(tech);
      });
    });
    return Array.from(techSet).sort();
  }, []);

  // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(
    new Set(),
  );

  // Toggle filter selection
  const toggleFilter = (tech: string) => {
    setSelectedFilters((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tech)) {
        newSet.delete(tech);
      } else {
        newSet.add(tech);
      }
      return newSet;
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedFilters(new Set());
  };

  // Filter projects based on selected tech stacks
  const filteredProjects = useMemo(() => {
    if (selectedFilters.size === 0) {
      return projects;
    }

    return projects.filter((project) => {
      if (!project.stack || project.stack.length === 0) {
        return false;
      }
      // Check if project has at least one of the selected tech stacks
      return project.stack.some((tech) => selectedFilters.has(tech));
    });
  }, [selectedFilters]);

  return (
    <>
      <div className="mx-auto my-20 flex flex-grow flex-col px-4 md:my-28">
        <h1 className="text-center text-xl font-bold md:text-3xl">
          Project Lists
        </h1>

        {/* Filter Section */}
        <div className="mx-auto my-8 flex max-w-5xl flex-col gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {allTechStacks.map((tech) => {
              const isSelected = selectedFilters.has(tech);
              return (
                <button
                  key={tech}
                  onClick={() => toggleFilter(tech)}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isSelected
                      ? "border-primary bg-primary text-white dark:border-primary dark:bg-primary dark:text-white"
                      : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-500"
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>
          <div className="flex items-center">
            {selectedFilters.size > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
              >
                Clear all ({selectedFilters.size})
              </button>
            )}
          </div>
        </div>

        {/* Projects List */}
        <div className="flex w-full flex-grow flex-col items-center">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p, index) => (
              <ProjectCard key={index} index={index} project={p} />
            ))
          ) : (
            <div className="my-20 text-center">
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                No projects found with the selected tech stacks.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-primary underline-offset-4 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
