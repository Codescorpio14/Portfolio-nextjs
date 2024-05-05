"use client";

import { ReactTyped } from "react-typed";

const HeroTyped = () => {
  return (
    <span className="hero-strong">
      <ReactTyped
        strings={["A Frontend Developer", "React Developer", "Web Designer"]}
        typeSpeed={40}
        backDelay={750}
        backSpeed={50}
        loop
      />
    </span>
  );
};

export default HeroTyped;
