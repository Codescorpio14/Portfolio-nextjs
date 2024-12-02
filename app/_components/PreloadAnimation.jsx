"use client";
import { useAnimate } from "motion/react";
import { useEffect } from "react";

const PreloadAnimation = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [
        scope.current,
        { y: ["0", "-100%"], display: "none" },
        { delay: 1, duration: 1 },
      ],
    ]);
  });

  return (
    <div
      ref={scope}
      className="absolute inset-0 h-lvh z-50 bg-sky-50 dark:bg-gray-950 flex items-center justify-center"
    >
      <div className="loader">Loading...</div>
    </div>
  );
};

export default PreloadAnimation;
