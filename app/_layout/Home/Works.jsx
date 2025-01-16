import TextAnimation from "@/app/_components/animations/TextAnimation";
import TextSlideIn from "@/app/_components/animations/TextSlideIn";
import { workData } from "@/app/_data/work";

const Works = () => {
  return (
    <section className="bg-neutral-950 text-center text-sky-50 px-4 py-8 md:bg-[url('/image/skill-bg.jpg')] bg-center bg-cover bg-no-repeat bg-blend-soft-light lg:py-16 lg:px-8">
      <TextAnimation>
        <h1 className="text-3xl md:text-4xl  uppercase font-semibold">
          What can I do?
        </h1>
      </TextAnimation>
      <div className="flex flex-col flex-wrap justify-center items-center md:flex-row gap-8 py-16">
        {workData.map((work) => (
          <div key={work.title} className="max-w-[360px]">
            <i className={` text-violet-400 text-7xl pb-8 ${work.icon}`}></i>
            <TextSlideIn>
              <h3 className="text-2xl uppercase font-semibold mb-6 text-violet-400">
                {work.title}
              </h3>
            </TextSlideIn>
            <TextAnimation>
              <p>{work.details}</p>
            </TextAnimation>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
