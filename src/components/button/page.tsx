"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Button } from "@/types/page";

export default function Button({
  text,
  link,
  target,
  height,
  width,
  fontSize,
  inverted,
  size,
}: Button) {
  return (
    <Link href={link} target={target} className={`max-w-${width ? width : 12}`}>
      <motion.button
        className={`h-${height ? height : 6} w-${width ? width : 12} ${
          fontSize ? `text-${fontSize}` : "text-3xl"
        } border-2 rounded-lg ${
          size === "sm"
            ? "lg:px-4 lg:py-2 px-2 py-1 min-w-[10rem]"
            : size === "lg"
            ? "lg:px-8 lg:py-6 px-6 py-4 min-w-[10rem]"
            : "lg:px-6 lg:py-4 px-4 py-2 min-w-[10rem]"
        } ${
          inverted
            ? "bg-black text-white hover:text-black hover:bg-white"
            : " bg-white text-black hover:bg-black hover:text-white"
        } border-black`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.button>
    </Link>
  );
}
