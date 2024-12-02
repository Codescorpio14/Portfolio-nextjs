import HoverTilt from "@/app/_components/animations/HoverTilt";
import HeroTyped from "../../_components/HeroTyped";
import Image from "next/image";
import Button from "@/app/_components/Button";
import ViewScale from "@/app/_components/animations/ViewScale";
import TextSlideIn from "@/app/_components/animations/TextSlideIn";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-between items-center px-8 py-8 lg:py-16 lg:flex-row"
    >
      <TextSlideIn>
        <div className="text-center py-12 lg:text-left">
          <p className="text-violet-400 font-semibold text-lg md:text-2xl lg:text-4xl">
            Hi, I am Alvir
          </p>
          <HeroTyped />
          <p className="md:text-lg lg:text-xl">
            Take your vision online with me.
          </p>

          <Button
            className="px-4 py-2 mt-8"
            href="mailto:alvirhasan.dev@gmail.com"
          >
            Contact Me
          </Button>
        </div>
      </TextSlideIn>

      <HoverTilt>
        <ViewScale>
          <Image
            src="/image/hero-img.png"
            className="w-full max-w-xl dark:shadow-xl shadow-neutral-200"
            height={564}
            width={1008}
            alt="hero-image"
            priority
          />
        </ViewScale>
      </HoverTilt>
    </section>
  );
};

export default Hero;
