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
              Hello, I&apos;m Aminul Hasan Alvir, a passionate Full-Stack
              Developer dedicated to creating seamless digital solutions from
              Front to Back-end. My journey in technology has been fueled by my
              love for innovation and continuous learning, enabling me to
              deliver user-centric applications with modern technologies.
            </p>
          </TextAnimation>

          <TextAnimation>
            <p>
              I specialize in building dynamic, responsive web and mobile
              applications using React.js, Next.js, and React Native. My
              back-end expertise includes Node JS, Python, Django, and Django
              Rest Framework (DRF), which allow me to create robust APIs and
              scalable server-side solutions. Alongside this, I&apos;ve honed my
              skills in database such both SQL and NoSQL. Which allows me to be
              work in MERN stack and other full stack solutions.
            </p>
          </TextAnimation>

          <TextAnimation>
            <p>
              With a strong command of CSS UI libraries like SCSS, Tailwind CSS,
              Shadcn, Material UI and others, I craft clean and visually
              appealing interfaces that Enhance user experiences. Whether
              it&apos;s developing a sleek front-end, architecting a solid
              back-end, or integrating the two seamlessly, I thrive on tackling
              challenges and delivering quality results.
            </p>
          </TextAnimation>

          <TextAnimation>
            <p>
              Let&apos;s collaborate to build impactful, innovative digital
              experiences!
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
