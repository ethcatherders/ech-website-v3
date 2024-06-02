import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Button from "../button/page";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1000], [0, -500]);
  return (
    <>
      <div className="flex md:flex-row flex-col min-h-screen justify-center items-center px-12 pt-12 md:bg-white bg-black/80 gap-x-8">
        <div className="flex flex-col md:gap-y-6 gap-y-4">
          <h3 className="text-4xl font-antonio md:text-black text-white">
            ETHEREUM CAT HERDERS
          </h3>
          <h1 className="xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl text-md max-w-2xl font-roboto font-extrabold md:text-black text-white">
            The OG community resource for Etherem.
          </h1>

          <p className="font-roboto xl:text-3xl lg:text-xl md:text-lg sm:text-md text-sm max-w-2xl md:text-darkGray text-white/60 font-light">
            We help people learn and get involved with the Ethereum ecosystem.
          </p>

          <div>
            <Button
              text="Join Us"
              link="https://docs.google.com/forms/d/1o2Oidzt6qZZ296KkqeNMi6xAALIv8zsBK1Va3Lzc9IQ/viewform?edit_requested=true"
              target="_blank"
              size="md"
              fontSize="lg"
            />
          </div>
        </div>
        <div>
          <motion.div
            initial={{ y: 0 }}
            style={{ y: y }}
            className="h-full md:flex hidden"
          >
            <Image
              id="parallax-image"
              src="/assets/ech_full_logo.png"
              alt="logo"
              height={500}
              width={500}
              className="z-30"
            />
          </motion.div>
        </div>
      </div>
      <div className="w-100wh flex flex-wrap justify-center md:gap-5 spacey-y-2 p-4 gap-2">
        <Button
          text="Dencun"
          link="/network_upgrades/dencun"
          size="md"
          fontSize="lg"
        />
        <Button
          text="Pectra"
          link="/network_upgrades/pectra"
          size="md"
          fontSize="lg"
        />
        <Button
          text="PEEPanEIP"
          link="/peepaneip"
          size="md"
          fontSize="lg"
        />
        <Button text="Testnets" link="/testnets" size="md" fontSize="lg" />
        <Button text="Podcast" link="/podcast" size="md" fontSize="lg" />
        <Button
          text="Meet the Herders"
          link="/meet-the-herders"
          size="md"
          fontSize="lg"
        />
      </div>
    </>
  );
}
