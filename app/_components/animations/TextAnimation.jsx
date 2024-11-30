"use client";
import { motion } from "motion/react";
import { useRef } from "react";

const TextAnimation = ({ children, textStyle }) => {
  const textRef = useRef(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.3 },
      }}
      ref={textRef}
      className={`${textStyle}`}
    >
      {children}
    </motion.div>
  );
};

export default TextAnimation;
