import HeroTyped from "./HeroTyped";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div>
        <p className="hero-text">
          Hi, I am Alvir
          <br />
          <HeroTyped />
        </p>
        <p className="hero-sub">Take your vision online with me.</p>
        <button className="btn hero-btn">
          <a href="mailto:alvirhasan.dev@gmail.com"> Contact Me </a>
        </button>
      </div>
      <Image
        src="/image/hero-img.png"
        className="hero-image"
        height={564}
        width={1008}
        alt="hero-image"
        priority
      />
    </section>
  );
};

export default Hero;
