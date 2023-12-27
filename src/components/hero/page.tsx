import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Button from "../button/page";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="flex md:flex-row flex-col min-h-screen justify-center items-center px-12 md:bg-white bg-black/80">
        <div className="flex flex-col md:gap-y-6 gap-y-4">
          <h3 className="text-4xl font-antonio md:text-black text-white">
            ETHEREUM CAT HERDERS
          </h3>
          <h1 className="xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl text-md max-w-2xl font-roboto font-extrabold md:text-black text-white">
            Decentralized project management to support the Ethereum Network.
          </h1>

          <p className="font-roboto xl:text-3xl lg:text-xl md:text-lg sm:text-md text-sm max-w-2xl md:text-darkGray text-white/60 font-light">
            Our aim is to bring the minimum amount of order that chaos needs to
            move Ethereum forward.
          </p>

          <div className="max-w-2xl flex flex-wrap justify-center">
            <Button
              text="Dencun Upgrade"
              link="/dencun"
              fontSize="1.2rem"
              size="md"
            />
            <Button
              text="Dencun Upgrade"
              link="/dencun"
              fontSize="1.2rem"
              size="md"
            />
            <Button
              text="Dencun Upgrade"
              link="/dencun"
              fontSize="1.2rem"
              size="md"
            />
            <Button
              text="Dencun Upgrade"
              link="/dencun"
              fontSize="1.2rem"
              size="md"
            />
            <Button
              text="Dencun Upgrade"
              link="/dencun"
              fontSize="1.2rem"
              size="md"
            />
          </div>
        </div>
        <div>
          <div className="h-full md:flex hidden">
            <Image
              src="/assets/ech_full_logo.png"
              alt="logo"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
