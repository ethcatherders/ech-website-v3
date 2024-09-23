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
          <h1 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md max-w-4xl font-roboto font-extrabold md:text-darkGray text-white">
            Herding Knowledge, Building Community, Homesteading Ethereum!
          </h1>

          <p className="font-roboto xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm max-w-2xl md:text-darkGray text-white/60 font-light">
            A public good enhancing the Ethereum ecosystem through education, community building, and coordination to ensure smooth network upgrades and foster a cohesive, informed Ethereum community.
          </p>

          <div>
            <Button
              text="Join Us"
              link="/join"
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
          text="Pectra"
          link="/upgrades/pectra"
          size="md"
          fontSize="lg"
        />
        <Button
          text="Testnets" 
          link="/testnets" 
          size="md" 
          fontSize="lg" 
        />
        <Button
          text="PEEPanEIP"
          link="/peepaneip"
          size="md"
          fontSize="lg"
        />
        <Button 
          text="Podcast" 
          link="/podcast" 
          size="md" 
          fontSize="lg" 
        />
        <Button
          text="Meet The Herders"
          link="/mth"
          size="md"
          fontSize="lg"
        />
      </div>
    </>
  );
}
