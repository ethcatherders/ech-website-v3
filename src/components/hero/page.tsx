import { motion, useScroll } from "framer-motion";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen z-10">
        <motion.div
          className="z-0 flex"
          initial={{ opacity: 0, scale: 1.5, x: "30dw" }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image
            src="/assets/ech_full_logo.png"
            alt="ech_logo"
            width={280}
            height={280}
          />
        </motion.div>
        <h1 className="md:text-7xl text-3xl font-antonio text-center">
          Ethereum Cat Herders V3
        </h1>
      </div>
    </>
  );
}
