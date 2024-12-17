"use client";
import { useParams } from "next/navigation";
import { projectsData } from "@/app/_data/projects";
import Image from "next/image";
const SingleProjectPage = () => {
  const { projectId } = useParams();
  const matchedProject = projectsData.find(
    (project) => project.slug == projectId
  );
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold uppercase text-center lg:text-left">
        {matchedProject.title}
      </h1>

      <div>
        <div className="flex m-4 font-semibold border border-slate-300 divide-x divide-slate-300 rounded-xl max-w-fit uppercase">
          <p className="p-2">Platform: {matchedProject.platform}</p>
          <p className="p-2">Year: {matchedProject.year}</p>
        </div>

        <div className="grid my-8 p-4">
          <Image
            alt={matchedProject.title}
            src={matchedProject.imageSrc}
            width={400}
            height={300}
            className="rounded-xl"
          />
        </div>

        <div>
          <h4 className="font-semibold text-2xl">Frameworks:</h4>
          <div className="flex gap-4 m-4 flex-wrap">
            {matchedProject.usedLang.map((lang, index) => (
              <p className="bg-violet-400 rounded-md px-2" key={index}>
                {lang}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-2xl">Project Description:</h4>
          <div className="m-4">
            <p>{matchedProject.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;
