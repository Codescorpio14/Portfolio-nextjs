import Link from "next/link";
import Project from "../../_components/Project";
import { projectsData } from "@/app/_data/projects";
import TextAnimation from "@/app/_components/animations/TextAnimation";

const Projects = () => {
  const featuredProjects = projectsData.filter((project) => project.isFeatured);

  return (
    <section id="projects" className="py-8 px-4 text-center">
      <TextAnimation>
        <h1 className="text-3xl md:text-4xl uppercase font-semibold text-violet-400">
          Selection of my recent works.
        </h1>
      </TextAnimation>
      <div className="flex flex-wrap justify-center gap-10 mt-8">
        {featuredProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>

      <Link
        href="projects"
        className=" block mx-auto w-fit mt-12 font-semibold hover:text-violet-400 text-2xl transtion-colors duration-300"
      >
        See More...
      </Link>
    </section>
  );
};

export default Projects;
