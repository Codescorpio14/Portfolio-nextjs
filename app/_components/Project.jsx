import Image from "next/image";
import ViewScale from "./animations/ViewScale";
import Button from "./Button";

const Project = ({ imageSrc, title, detail, slug }) => {
  return (
    <ViewScale>
      <div className="max-w-sm h-72 overflow-hidden bg-inherit shadow-lg">
        <div className="py-1 px-3 flex bg-neutral-200 items-center dark:bg-slate-800">
          <div className="flex items-center mr-4 gap-2">
            <span className="block size-4 rounded-full bg-red-500"></span>
            <span className="block size-4 rounded-full bg-orange-500"></span>
            <span className="block size-4 rounded-full bg-green-500"></span>
          </div>
          <p className="uppercase text-gray-700 font-semibold ml-16 dark:text-neutral-200">
            {title}
          </p>
        </div>

        <div className="relative cursor-pointer h-full overflow-hidden group">
          {/* Background Image */}
          <Image
            className="w-full object-contain object-top group-hover:scale-110 transition-transform duration-500"
            width={400}
            height={300}
            src={imageSrc.main}
            alt={title}
          />

          {/* Hover Slide Contents */}
          <div className="absolute inset-0 bg-violet-400/90 py-8 px-4 flex flex-col justify-around items-center -translate-y-full  group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <p>{detail.slice(0, 120) + "..."}</p>

            <Button className="px-4 py-1" href={`projects/${slug}`}>
              See Details
            </Button>
          </div>
        </div>
      </div>
    </ViewScale>
  );
};

export default Project;
