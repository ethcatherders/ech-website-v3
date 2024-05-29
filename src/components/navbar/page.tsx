"use client";
import { nav } from "@/constants/page";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import { CgAlignLeft, CgArrowLeft, CgClose } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { motion, useAnimate, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Popover, PopoverContent } from "../ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { BsBack } from "react-icons/bs";

export default function Navbar() {
  const path = usePathname();
  const [prevScroll, setPrevScroll] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isDropped, setIsDropped] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activitiesRef, animateActivities] = useAnimate();
  const [navRef, animateNav] = useAnimate();
  const [navMenuRef, animateNavMenu] = useAnimate();
  const [activitiesOpen, setActivitiesOpen] = useState(false);

  useEffect(() => {
    if (navMenuRef.current) {
      if (isMenuOpen) {
        animateNavMenu(
          navMenuRef.current,
          { opacity: 1, y: 0 },
          { duration: 0.5 },
        );
      } else {
        animateNavMenu(
          navMenuRef.current,
          { opacity: 0, y: "100dvh" },
          { duration: 0.5 },
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
          { duration: 0.5 },
        );
      } else {
        animateActivities(
          activitiesRef.current,
          { opacity: 0, y: -10 },
          { duration: 0.5 },
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
                <Popover key={index}>
                  <PopoverTrigger>
                    <p
                      key={index}
                      className={`text-3xl font-antonio  hover:text-black duration-500  ${
                        path === item.link ? "text-black" : "text-lightGray"
                      }`}
                    >
                      {item.label.toUpperCase()}
                    </p>
                  </PopoverTrigger>

                  <PopoverContent
                    sideOffset={20}
                    className="dark gap-2 bg-darkGray"
                  >
                    {item.children?.map((child, chi) => {
                      return (
                        <Link key={chi} href={child.link || "/"}>
                          <p
                            key={chi}
                            className="text-2xl font-antonio duration-500"
                          >
                            {child.label.toUpperCase()}
                          </p>
                        </Link>
                      );
                    })}
                  </PopoverContent>
                </Popover>
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
            className="bg-black/90 min-h-screen w-full absolute z-[60] flex flex-col gap-6"
          >
            <div className="flex justify-end md:pt-12 pt-6 md:px-16 px-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMenuOpen(false)}
                className="hover:cursor-pointer text-white"
              >
                <span
                  onClick={() => {
                    setActivitiesOpen(false);
                  }}
                >
                  <CgClose size={50} />
                </span>
              </motion.div>
            </div>

            {activitiesOpen ? (
              <>
                <div className="flex flex-col sm:text-5xl text-3xl gap-4 xl:pl-32 lg:pl-26 md:pl-20 sm:pl-16 pl-10">
                  <span
                    onClick={() => {
                      setActivitiesOpen(!activitiesOpen);
                    }}
                  >
                    <CgArrowLeft
                      size={40}
                      className="text-white border-4 rounded-full cursor-pointer"
                    />
                  </span>
                  {nav[1]?.children?.map((item, index) => {
                    return (
                      <a href={item.link} key={index}>
                        <div key={index}>
                          <p key={index} className={`font-antonio text-white`}>
                            {item.label.toUpperCase()}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="flex flex-col text-5xl gap-8 xl:pl-32 lg:pl-26 md:pl-20 sm:pl-16 pl-10">
                {nav.map((item, index) => {
                  if (item === nav[1]) {
                    return (
                      <div key={index} className="flex">
                        <p
                          key={index}
                          className={`font-antonio text-white cursor-pointer`}
                          onClick={() => {
                            setActivitiesOpen(!activitiesOpen);
                          }}
                        >
                          {item.label.toUpperCase()}
                        </p>
                      </div>
                    );
                  } else {
                    return (
                      <a href={item.link} key={index}>
                        <div key={index}>
                          <p key={index} className={`font-antonio text-white`}>
                            {item.label.toUpperCase()}
                          </p>
                        </div>
                      </a>
                    );
                  }
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
