"use client";
import { motion } from "motion/react";
import { useRef } from "react";

const ViewScale = ({ children, containerStyle }) => {
  const textRef = useRef(null);
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      }}
      ref={textRef}
      className={`${containerStyle}`}
    >
      {children}
    </motion.div>
  );
};

export default ViewScale;
