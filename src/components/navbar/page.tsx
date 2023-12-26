"use client";
import { nav } from "@/constants/page";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const path = usePathname();

  return (
    <>
      <div className="flex justify-between fixed w-full py-12 md:px-16 px-8 items-center bg-white z-50">
        <motion.a
          href="/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src="/assets/ech_horizontal_logo.svg"
            alt="ech_logo"
            height={100}
            width={100}
            className="md:scale-100 scale-75"
          />
        </motion.a>

        <div className="xl:flex hidden gap-x-16">
          {nav.map((item, index) => {
            return (
              <a href={item.link} key={index}>
                <div key={index}>
                  <p
                    key={index}
                    className={`text-3xl font-antonio text-lightGray hover:text-black duration-500 ${
                      path === item.link ? "text-black" : ""
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <IoMenuOutline size={50} />
      </div>
    </>
  );
}
