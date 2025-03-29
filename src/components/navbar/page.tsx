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
  const [communityOpen, setCommunityOpen] = useState(false);
  const [homesteadOpen, setHomesteadOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

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

  const closeAllMenus = () => {
    setActivitiesOpen(false);
    setCommunityOpen(false);
    setHomesteadOpen(false);
  };

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

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
            // Check if the item has children to show dropdown
            if (item.children && item.children.length > 0) {
              return (
                <Popover key={index}>
                  <PopoverTrigger>
                    <p
                      className={`text-3xl font-antonio hover:text-black duration-500 ${
                        path === item.link ? "text-black" : "text-lightGray"
                      }`}
                    >
                      {item.label.toUpperCase()}
                    </p>
                  </PopoverTrigger>

                  <PopoverContent
                    sideOffset={20}
                    className="dark gap-2 bg-darkGray p-4"
                  >
                    {item.children?.map((child, chi) => {
                      if (child.children && child.children.length > 0) {
                        return (
                          <div key={chi} className="relative group">
                            {/* Parent item */}
                            <div className="flex items-center justify-between cursor-pointer group">
                              <p className="text-2xl font-antonio duration-500">
                                {child.label.toUpperCase()}
                              </p>
                              <span className="ml-2 transform group-hover:rotate-90 transition-transform duration-200">
                                ›
                              </span>
                            </div>
                            
                            {/* Indented dropdown */}
                            <div className="hidden group-hover:block pl-4 mt-2 space-y-2 border-l-2 border-gray-600">
                              {child.children.map((subChild, subIdx) => (
                                <Link key={subIdx} href={subChild.link || "/"}>
                                  <p className="text-xl font-antonio duration-500 hover:text-gray-300 pl-2">
                                    {subChild.label.toUpperCase()}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      
                      // Regular menu item without children
                      return (
                        <Link key={chi} href={child.link || "/"}>
                          <p className="text-2xl font-antonio duration-500 hover:text-gray-300">
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
                  <div>
                    <p
                      className={`text-3xl font-antonio hover:text-black duration-500 ${
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
                onClick={() => {
                  setIsMenuOpen(false);
                  closeAllMenus();
                }}
                className="hover:cursor-pointer text-white"
              >
                <CgClose size={50} />
              </motion.div>
            </div>

            {activitiesOpen ? (
              <>
                <div className="flex flex-col sm:text-5xl text-3xl gap-4 xl:pl-32 lg:pl-26 md:pl-20 sm:pl-16 pl-10">
                  <span
                    onClick={() => {
                      setActivitiesOpen(false);
                    }}
                  >
                    <CgArrowLeft
                      size={40}
                      className="text-white border-4 rounded-full cursor-pointer"
                    />
                  </span>
                  {nav[0]?.children?.map((item, index) => {
                    if (item.children && item.children.length > 0) {
                      return (
                        <div key={index} className="flex flex-col gap-2">
                          <div 
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleExpand(item.label)}
                          >
                            <p className="font-antonio text-white">
                              {item.label.toUpperCase()}
                            </p>
                            <span className={`transform transition-transform duration-200 ${
                              expandedItems[item.label] ? 'rotate-90' : ''
                            }`}>
                              ›
                            </span>
                          </div>
                          {expandedItems[item.label] && (
                            <div className="pl-6 mt-2 space-y-2 border-l-2 border-white/20">
                              {item.children.map((subItem, subIdx) => (
                                <Link key={subIdx} href={subItem.link || "/"}>
                                  <p className="font-antonio text-white/80 text-3xl py-1">
                                    {subItem.label.toUpperCase()}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }
                    return (
                      <Link href={item.link || "/"} key={index}>
                        <p className="font-antonio text-white">{item.label.toUpperCase()}</p>
                      </Link>
                    );
                  })}
                </div>
              </>
            ) : communityOpen ? (
              <>
                <div className="flex flex-col sm:text-5xl text-3xl gap-4 xl:pl-32 lg:pl-26 md:pl-20 sm:pl-16 pl-10">
                  <span
                    onClick={() => {
                      setCommunityOpen(false);
                    }}
                  >
                    <CgArrowLeft
                      size={40}
                      className="text-white border-4 rounded-full cursor-pointer"
                    />
                  </span>
                  {nav[1]?.children?.map((item, index) => {
                    if (item.children && item.children.length > 0) {
                      return (
                        <div key={index} className="flex flex-col gap-2">
                          <div 
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleExpand(item.label)}
                          >
                            <p className="font-antonio text-white">
                              {item.label.toUpperCase()}
                            </p>
                            <span className={`transform transition-transform duration-200 ${
                              expandedItems[item.label] ? 'rotate-90' : ''
                            }`}>
                              ›
                            </span>
                          </div>
                          {expandedItems[item.label] && (
                            <div className="pl-6 mt-2 space-y-2 border-l-2 border-white/20">
                              {item.children.map((subItem, subIdx) => (
                                <Link key={subIdx} href={subItem.link || "/"}>
                                  <p className="font-antonio text-white/80 text-3xl py-1">
                                    {subItem.label.toUpperCase()}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }
                    return (
                      <Link href={item.link || "/"} key={index}>
                        <p className="font-antonio text-white">{item.label.toUpperCase()}</p>
                      </Link>
                    );
                  })}
                </div>
              </>
            ) : homesteadOpen ? (
              <>
                <div className="flex flex-col sm:text-5xl text-3xl gap-4 xl:pl-32 lg:pl-26 md:pl-20 sm:pl-16 pl-10">
                  <span
                    onClick={() => {
                      setHomesteadOpen(false);
                    }}
                  >
                    <CgArrowLeft
                      size={40}
                      className="text-white border-4 rounded-full cursor-pointer"
                    />
                  </span>
                  {nav[2]?.children?.map((item, index) => {
                    if (item.children && item.children.length > 0) {
                      return (
                        <div key={index} className="flex flex-col gap-2">
                          <div 
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleExpand(item.label)}
                          >
                            <p className="font-antonio text-white">
                              {item.label.toUpperCase()}
                            </p>
                            <span className={`transform transition-transform duration-200 ${
                              expandedItems[item.label] ? 'rotate-90' : ''
                            }`}>
                              ›
                            </span>
                          </div>
                          {expandedItems[item.label] && (
                            <div className="pl-6 mt-2 space-y-2 border-l-2 border-white/20">
                              {item.children.map((subItem, subIdx) => (
                                <Link key={subIdx} href={subItem.link || "/"}>
                                  <p className="font-antonio text-white/80 text-3xl py-1">
                                    {subItem.label.toUpperCase()}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }
                    return (
                      <Link href={item.link || "/"} key={index}>
                        <p className="font-antonio text-white">{item.label.toUpperCase()}</p>
                      </Link>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="flex flex-col text-5xl gap-8 xl:pl-32 lg:pl-26 md:pl-20 sm:pl-16 pl-10">
                {nav.map((item, index) => {
                  if (item.children && item.children.length > 0) {
                    return (
                      <div key={index} className="flex">
                        <p
                          className={`font-antonio text-white cursor-pointer`}
                          onClick={() => {
                            if (index === 0) setActivitiesOpen(true);
                            else if (index === 1) setCommunityOpen(true);
                            else if (index === 2) setHomesteadOpen(true);
                          }}
                        >
                          {item.label.toUpperCase()}
                        </p>
                      </div>
                    );
                  } else {
                    return (
                      <a href={item.link} key={index}>
                        <div>
                          <p className={`font-antonio text-white`}>
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