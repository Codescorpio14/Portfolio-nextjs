"use client";

import { useAnimate, stagger, useInView } from "motion/react";
import { useEffect } from "react";

const SkillCard = ({ title, score }) => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true });

  useEffect(() => {
    if (inView) {
      animate([["span", { opacity: [0, 1] }, { delay: stagger(0.2) }]]);
    }
  });

  return (
    <div className="grid grid-cols-2 items-center">
      <p className="uppercase md:text-xl lg:text-2xl font-bold text-violet-400 ">
        {title}
      </p>

      <div ref={scope} className="flex gap-1 lg:gap-2">
        {Array.from({ length: score }, (_, index) => (
          <span
            key={title + index}
            className="block size-3 lg:size-5 rounded-full bg-violet-400 "
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
