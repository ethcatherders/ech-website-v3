"use client";
import { motion, useAnimate, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function Loader() {
  const [loaderRef, animateLoader] = useAnimate();
  useEffect(() => {
    const interval = setInterval(() => {
      if (loaderRef.current) {
        animateLoader(loaderRef.current, { y: "-100vh" }, { duration: 1 });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="flex absolute justify-center items-center min-h-screen w-full bg-black z-[999999]"
          initial={{ y: 0 }}
          ref={loaderRef}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/assets/ech_full_logo_inverted.png"
              alt="ech_logo"
              width={300}
              height={300}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
