"use client";

import { useAnimate, stagger } from "motion/react";
import { useEffect } from "react";

const NavBarLinks = ({ children, className }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [scope.current, { opacity: [0, 1] }, { delay: 1 }],
      ["li", { opacity: [0, 1], y: [-20, 0] }, { delay: stagger(0.3) }],
    ]);
  });

  return (
    <nav ref={scope} className={className}>
      {children}
    </nav>
  );
};

export default NavBarLinks;
