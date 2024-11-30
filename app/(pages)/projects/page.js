"use client";
import PageTransition from "@/app/_components/animations/PageTransition";
import { projectsData } from "@/app/_data/projects";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <PageTransition>
      <div className="p-8">
        <h1 className="md:text-2xl  uppercase font-semibold mb-4">
          These are the some of my projects I have worked on throughout my
          career as a developer...
        </h1>
        <div className="grid grid-cols-3 border text-center bg-violet-300">
          <p className=" uppercase font-semibold p-2">Project Name </p>
          <p className=" uppercase font-semibold p-2">Platform/Framework </p>
          <p className=" uppercase font-semibold p-2">Year</p>
        </div>
        <div>
          {projectsData.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="grid grid-cols-3 p-4 border-b hover:bg-violet-200"
            >
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-center">{project.platform}</p>
              <p className="text-center">{project.year}</p>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
