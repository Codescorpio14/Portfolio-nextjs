"use client";

import { ReactTyped } from "react-typed";

const HeroTyped = () => {
  return (
    <div className="font-bold text-xl md:text-3xl lg:text-4xl lg:my-2">
      <ReactTyped
        strings={["A Frontend Developer", "React Developer", "Web Designer"]}
        typeSpeed={40}
        backDelay={750}
        backSpeed={50}
        loop
      />
    </div>
  );
};

export default HeroTyped;
