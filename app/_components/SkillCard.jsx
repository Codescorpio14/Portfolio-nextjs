"use client";

import { motion } from "motion/react";

const SkillCard = ({ title, score }) => {
  return (
    <div className="grid grid-cols-2 items-center">
      <p className="uppercase md:text-xl lg:text-2xl font-bold text-violet-400 ">
        {title}
      </p>

      <motion.div
        whileInView={{
          transition: {
            duration: 2,
            staggerChildren: 0.5,
          },
        }}
        // viewport={{ once: true }}
        className="flex gap-1 lg:gap-2"
      >
        {Array.from({ length: score }, (_, index) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            key={index}
            className="block size-3 lg:size-5 rounded-full bg-violet-400"
          ></motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillCard;
