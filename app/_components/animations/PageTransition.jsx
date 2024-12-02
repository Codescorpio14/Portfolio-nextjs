"use client";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
const PageTransition = ({ children }) => {
  const route = usePathname();

  return (
    <motion.div
      key={route}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
