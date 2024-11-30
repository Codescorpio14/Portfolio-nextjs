import HoverTilt from "@/app/_components/animations/HoverTilt";
import TextAnimation from "@/app/_components/animations/TextAnimation";
import TextSlideIn from "@/app/_components/animations/TextSlideIn";
import ViewScale from "@/app/_components/animations/ViewScale";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-neutral-900 text-sky-50 p-8 text-center">
      <TextSlideIn>
        <h1 className="text-3xl md:text-4xl uppercase font-semibold lg:text-left">
          About me
        </h1>
      </TextSlideIn>
      <div className="py-8px-2 lg:flex gap-8 justify-between ">
        <div className="py-8 px-4 lg:text-left space-y-4 text-sm md:text-base">
          <TextAnimation>
            <p>
              Hello, I&apos;m Aminul Hasan Alvir, a passionate front-end
              developer hailing from Dhaka, Bangladesh. Despite graduating with
              honors in LLB, my heart lies in the world of technology. I have
              honed my skills in front-end development, specializing in crafting
              fully responsive and interactive web pages.
            </p>
          </TextAnimation>
          <TextAnimation>
            <p>
              My arsenal includes proficiency in HTML, CSS, and vanilla
              JavaScript. I am adept at utilizing CSS frameworks such as
              Tailwind, and Sass to enhance the aesthetic and functionality of
              my projects. Additionally, I have embraced the power of React.js
              and its libraries to bring dynamic and seamless user experiences
              to life.
            </p>
          </TextAnimation>
          <TextAnimation>
            <p>
              With a firm foundation in front-end technologies, I aspire to
              transition into a full-stack developer role in the future. I am
              enthusiastic about staying at the forefront of technology and
              contributing my skills to create innovative and user-centric
              digital experiences. Let&apos;s build something amazing together!
            </p>
          </TextAnimation>
        </div>
        <HoverTilt className="flex w-full justify-center items-center py-8">
          <ViewScale>
            <Image
              className="w-72 border-2 border-violet-400"
              height={447}
              width={559}
              src="/image/my-photo.png"
              alt="Photo of alvir"
            />
          </ViewScale>
        </HoverTilt>
      </div>
      <hr />
    </section>
  );
};

export default About;
