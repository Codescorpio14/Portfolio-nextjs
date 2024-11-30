"use client";
import { useParams } from "next/navigation";
import { projectsData } from "@/app/_data/projects";
import PageTransition from "@/app/_components/animations/PageTransition";

const SingleProjectPage = () => {
  const { projectId } = useParams();
  const matchedProject = projectsData.find(
    (project) => project.slug == projectId
  );
  return (
    <PageTransition>
      <div>
        <h1>{matchedProject.title}</h1>
        <div>
          <div className="flex divide-x">
            <p>{matchedProject.platform}</p>
            <p>{matchedProject.year}</p>
            <p>{matchedProject.usedLang}</p>
          </div>
          <p>{matchedProject.detail}</p>
        </div>
      </div>
    </PageTransition>
  );
};

export default SingleProjectPage;
