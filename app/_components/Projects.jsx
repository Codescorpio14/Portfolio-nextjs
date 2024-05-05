import Project from "./Project";
import { projectsData } from "@/public/data/projects";

const Projects = () => {
  const projectElm = projectsData.map((project) => (
    <Project key={project.id} {...project} />
  ));

  return (
    <section id="projects" className="projects">
      <h1 className="title">Selection of my recent works.</h1>
      <div className="projects-list">{projectElm}</div>
    </section>
  );
};

export default Projects;
