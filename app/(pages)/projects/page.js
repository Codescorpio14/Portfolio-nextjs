import StaggerSlideIn from "@/app/_components/animations/StaggerSlideIn";
import TextAnimation from "@/app/_components/animations/TextAnimation";
import { projectsData } from "@/app/_data/projects";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div className="py-8">
      <TextAnimation>
        <h1 className="md:text-2xl  uppercase font-semibold mb-4">
          These are the some of my projects I have worked on throughout my
          career as a developer...
        </h1>
      </TextAnimation>
      <div className="grid grid-cols-3 border text-center bg-violet-300 dark:text-neutral-900">
        <p className=" uppercase font-semibold p-2">Project Name </p>
        <p className=" uppercase font-semibold p-2">Framework </p>
        <p className=" uppercase font-semibold p-2">Year</p>
      </div>
      <StaggerSlideIn>
        {projectsData.map((project) => (
          <Link
            id="project-link"
            key={project.id}
            href={`/projects/${project.slug}`}
            className="grid grid-cols-3 p-4 border-b hover:bg-violet-200  transition-all duration-300 dark:hover:bg-violet-400 dark:border-gray-700"
          >
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-center">{project.platform}</p>
            <p className="text-center">{project.year}</p>
          </Link>
        ))}
      </StaggerSlideIn>
    </div>
  );
};

export default ProjectsPage;
