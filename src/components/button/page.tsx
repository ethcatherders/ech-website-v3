"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Button } from "@/types/page";

export default function Button({
  text,
  link,
  height,
  width,
  fontSize,
}: Button) {
  return (
    <Link href={link}>
      <motion.button
        className={`h-${height ? height : 6} w-${width ? width : 12} ${
          fontSize ? `text-${fontSize}` : "text-3xl"
        } border-2 rounded-2xl px-4 py-2 border-black md:scale-100 scale-75`}
        whileHover={{ scale: 1.1, backgroundColor: "black", color: "white" }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.button>
    </Link>
  );
}
