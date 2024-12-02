"use client";

import { useAnimate, stagger } from "motion/react";
import { useEffect } from "react";

const StaggerSlideIn = ({ children }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [
        "#project-link",
        { opacity: [0, 1], x: [-20, 0] },
        { delay: stagger(0.5) },
      ],
    ]);
  });
  return <div ref={scope}>{children}</div>;
};

export default StaggerSlideIn;
