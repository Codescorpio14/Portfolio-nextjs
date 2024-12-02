"use client";
import { motion } from "motion/react";
import Link from "next/link";

const Button = ({ children, className, href }) => {
  return (
    <Link href={href}>
      <motion.div
        className={`bg-yellow-300 uppercase text-neutral-900 font-semibold shadow-lg shadow-slate-600/30  hover:bg-yellow-400 dark:bg-yellow-400 dark:hover:bg-yellow-500 transition-all inline-block ${className} `}
        initial={{ borderRadius: "10px" }}
        whileHover={{ borderRadius: "20px" }}
        transition={{ duration: 0.2, ease: "circInOut" }}
        layout
      >
        {children}
      </motion.div>
    </Link>
  );
};

export default Button;
