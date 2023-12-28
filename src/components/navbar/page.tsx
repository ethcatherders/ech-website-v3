"use client";
import { nav } from "@/constants/page";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { motion, useAnimate, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const path = usePathname();
  const [prevScroll, setPrevScroll] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isDropped, setIsDropped] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activitiesRef, animateActivities] = useAnimate();
  const [navRef, animateNav] = useAnimate();
  const [navMenuRef, animateNavMenu] = useAnimate();

  useEffect(() => {
    if (navMenuRef.current) {
      if (isMenuOpen) {
        animateNavMenu(
          navMenuRef.current,
          { opacity: 1, y: 0 },
          { duration: 0.5 }
        );
      } else {
        animateNavMenu(
          navMenuRef.current,
          { opacity: 0, y: "100dvh" },
          { duration: 0.5 }
        );
      }
    }
  });

  useEffect(() => {
    if (activitiesRef.current) {
      if (isDropped) {
        animateActivities(
          activitiesRef.current,
          { opacity: 1, y: 0 },
          { duration: 0.5 }
        );
      } else {
        animateActivities(
          activitiesRef.current,
          { opacity: 0, y: -10 },
          { duration: 0.5 }
        );
      }
    }
  }, [isDropped]);

  useEffect(() => {
    const handleScroll = () => {
      setPrevScroll((prevScroll) => (prevScroll = scrollY));
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  // useEffect(() => {
  //   if (navRef.current) {
  //     if (scrollY === 0) {
  //       animateNav(navRef.current, { opacity: 1, y: 0 }, { duration: 0.2 });
  //     } else if (scrollY <= prevScroll) {
  //       animateNav(navRef.current, { opacity: 1, y: 0 }, { duration: 0.2 });
  //     } else {
  //       animateNav(navRef.current, { opacity: 0, y: -10 }, { duration: 0.2 });
  //     }
  //   }
  // });

  return (
    <>
      <motion.div
        ref={navRef}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={
          scrollY === 0
            ? "flex justify-between fixed w-full md:py-12 py-6 md:px-16 px-8 items-center z-20 bg-white"
            : scrollY <= prevScroll
            ? "flex justify-between fixed w-full py-4 shadow-xl shadow-lightGray/30 md:px-16 px-8 items-center bg-white z-50"
            : "hidden"
        }
      >
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

        <div className="xl:flex hidden gap-x-16 items-center">
          {nav.map((item, index) => {
            if (item === nav[1]) {
              return (
                <div key={index} className="group relative">
                  <div
                    onMouseEnter={() => setIsDropped(true)}
                    onMouseLeave={() => setIsDropped(false)}
                  >
                    <p
                      key={index}
                      className={`text-3xl font-antonio  hover:text-black duration-500  ${
                        path === item.link ? "text-black" : "text-lightGray"
                      }`}
                    >
                      {item.label.toUpperCase()}
                    </p>

                    <div className="flex justify-center">
                      <AnimatePresence>
                        {isDropped && (
                          <motion.div
                            className={`bg-darkGray flex-col text-lightGray absolute w-max px-8 py-4 rounded-xl gap-y-2 ${
                              isDropped ? "flex" : "hidden"
                            }`}
                            initial={{ opacity: 0, y: -10 }}
                            exit={{ visibility: "hidden", y: -10 }}
                            ref={activitiesRef}
                          >
                            {item.children?.map((child, chi) => {
                              return (
                                <Link key={chi} href={child.link || "/"}>
                                  <p
                                    key={chi}
                                    className="text-2xl font-antonio duration-500"
                                  >
                                    {child.label}
                                  </p>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <a href={item.link} key={index}>
                  <div key={index}>
                    <p
                      key={index}
                      className={`text-3xl font-antonio  hover:text-black duration-500   ${
                        path === item.link ? "text-black" : "text-lightGray"
                      }`}
                    >
                      {item.label.toUpperCase()}
                    </p>
                  </div>
                </a>
              );
            }
          })}
        </div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.9,
          }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hover:cursor-pointer"
        >
          <IoMenuOutline size={50} />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100vh" }}
            ref={navMenuRef}
            className="bg-black/90 min-h-screen w-full absolute z-[60] flex flex-col"
          >
            <div className="flex justify-end px-32 pt-16">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMenuOpen(false)}
                className="hover:cursor-pointer text-white"
              >
                <CgClose size={50} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
