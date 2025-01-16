"use client";
import { useParams } from "next/navigation";
import { projectsData } from "@/app/_data/projects";
import Image from "next/image";
import Link from "next/link";

const SingleProjectPage = () => {
  const { projectId } = useParams();
  const matchedProject = projectsData.find(
    (project) => project.slug == projectId
  );
  return (
    <div className="py-8">
      <div className="flex gap-8 items-center">
        <h1 className="text-4xl lg:text-5xl font-bold uppercase text-center lg:text-left">
          {matchedProject.title}
        </h1>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={matchedProject.link}
          className="bg-yellow-300 uppercase text-neutral-900 font-semibold shadow-md shadow-slate-600/30  hover:bg-yellow-400 dark:bg-yellow-400 dark:hover:bg-yellow-500 transition-all inline-block px-2 py-1 rounded-lg text-xs"
        >
          See Live
        </Link>
      </div>

      <div>
        <div className="flex m-4 font-semibold border border-slate-300 divide-x divide-slate-300 rounded-xl max-w-fit uppercase">
          <p className="p-2">Platform: {matchedProject.platform}</p>
          <p className="p-2">Year: {matchedProject.year}</p>
        </div>

        <div className="grid my-8 p-4 gap-8 md:grid-cols-6 lg:grid-rows-2">
          <Image
            alt={matchedProject.title}
            src={matchedProject.imageSrc.main}
            width={400}
            height={300}
            className="rounded-xl w-full shadow-md aspect-video md:col-span-6 lg:col-span-4 lg:row-span-2"
          />

          <Image
            alt="extra image 1"
            src={matchedProject.imageSrc.sideUp}
            width={400}
            height={300}
            className="rounded-xl w-full shadow-md aspect-video md:col-span-3 lg:col-span-2 lg:row-span-1"
          />

          <Image
            alt="extra image 2"
            src={matchedProject.imageSrc.sideDown}
            width={400}
            height={300}
            className="rounded-xl w-full shadow-md aspect-video md:col-span-3 lg:col-span-2 lg:row-span-1"
          />
        </div>

        <div>
          <h4 className="font-semibold text-2xl uppercase">
            Technologies Used:
          </h4>
          <div className="flex gap-4 my-4 mx-2 flex-wrap">
            {matchedProject.usedLang.map((lang, index) => (
              <p className="bg-violet-400 rounded-md px-2 text-xl" key={index}>
                {lang}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-2xl uppercase">Project Details:</h4>
          <div className="m-2 space-y-2">
            {matchedProject.description.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;
