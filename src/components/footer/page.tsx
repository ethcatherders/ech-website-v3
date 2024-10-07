"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { nav } from "@/constants/page";
import { socials } from "@/constants/page";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-darkGray text-white pb-4">
      <div className="py-32 bottom-0 flex lg:flex-row flex-col justify-evenly gap-y-16 px-4 sm:px-8">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl font-antonio font-bold">
            ETHEREUM CAT HERDERS
          </h1>
          <h3 className="text-2xl font-roboto">
            Herding Knowledge, Building Community, Homesteading Ethereum!
          </h3>
          <Image src="/assets/paws.png" alt="paws" width={200} height={200} />
        </div>

        <div className="flex gap-x-28 lg:flex-row flex-col gap-y-16">
          <div className="flex flex-col gap-y-5">
            <h3 className="font-robot text-xl font-bold">Links</h3>
            <div className="flex flex-col gap-y-3">
              {nav.map((item, index) => (
                <Link
                  key={index}
                  href={
                    item.label === "Activities"
                      ? "/upgrades"
                      : item.link || "/"
                  }
                  className="text-lg font-roboto hover:underline underline-offset-1 duration-200 font-light"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={"/assets"}
                className="text-lg font-roboto hover:underline underline-offset-1 duration-200 font-light"
              >
                ECH Branding Assets
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <section>
              <h3 className="font-robot text-xl font-semibold">Follow Us</h3>
              <div className="flex text-white gap-x-4 py-4">
                {socials.map((item, index) => (
                  <Link href={item.link} key={index} target="_blank">
                    <motion.div
                      className="border border-lightGray/50 p-3 rounded-full"
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h3 className="font-robot text-xl font-semibold">Email Us</h3>
              <Link
                href="mailto:support@ethereumcatherders.com"
                target="_blank"
              >
                <h3 className="sm:text-lg py-4 text-lightGray hover:underline underline-offset-2 hover:text-white">
                  support@ethereumcatherders.com
                </h3>
              </Link>
            </section>

            <section className="flex justify-end max-w-xl">
              <h3 className="text-lg text-lightGray py-8">v3.0.0</h3>
            </section>
          </div>
        </div>
      </div>
      <p className="text-center text-lightGray text-sm">© 2024 ECH Institute, Inc.</p>
    </div>
  );
}
