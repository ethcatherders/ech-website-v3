"use client";
import Image from "next/image";
import Hero from "@/components/hero/page";
import HelpUs from "@/components/others/helpUs";
import Feedback from "@/components/feedback";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="lg:max-w-[75vw] md:max-w-[85vw] sm:max-w-[90vw] max-w-[95vw] mx-auto flex flex-col gap-y-24">
        <div className="flex xl:flex-row flex-col justify-between gap-6 items-center pt-16">
          <Image
            src="/assets/cat_laptop.png"
            height={500}
            width={500}
            alt="cat_laptop"
            className="md:h-[20rem] md:w-[30rem] w-[21rem] h-[14rem]"
          />

          <div className="flex flex-col max-w-2xl  space-y-6">
            <h1 className="font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
              What is Eth Cat Herders?
            </h1>

            <p className="md:text-2xl sm:text-xl text-lg text-lightGray text-justify">
              Ethereum Cat Herders is a group of individuals, working together
              to support the Ethereum core developers with project management
              and other aspects of communication and coordination.
              <br />
              <br />
              Read our journey with Ethereum ecosystem - <br />
              <a
                href="https://medium.com/ethereum-cat-herders/review-2020-the-ethereum-cat-herders-70164265c8d9"
                target="_blank"
              >
                <span className="border-b border-dotted pb-1 border-lightGray">
                  Review 2020: The Ethereum Cat Herders
                </span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <Image src="/assets/paws.png" alt="paws" width={200} height={200} />
        </div>

        <Feedback />

        <div className="flex w-full justify-center items-center lg:flex-row flex-col gap-5">
          <div className="grid grid-cols-3 items-center">
            <div className="flex flex-col gap-2">
            <Image
              src="/assets/cat_peek.png"
              height={150}
              width={150}
              alt="cat_laptop"
              className="basis-1/2"
            />
            </div>
            <ul className="h-full w-full lg:text-2xl text-lg col-span-2 flex flex-col justify-center items-start">
              <li>
                <span className="font-bold lg:text-3xl text-xl">S</span>ynergy
              </li>
              <li>
                <span className="font-bold lg:text-3xl text-xl">U</span>nderpin Improvement Proposals
              </li>
              <li>
                <span className="font-bold lg:text-3xl text-xl">P</span>ublicize Network Upgrade
              </li>
              <li>
                <span className="font-bold lg:text-3xl text-xl">P</span> rocess Improvement
              </li>
              <li>
                <span className="font-bold lg:text-3xl text-xl">O</span>utreach
              </li>
              <li>
                <span className="font-bold lg:text-3xl text-xl">R</span>esource Curation
              </li>
              <li>
                <span className="font-bold lg:text-3xl text-xl">T</span>ranscript Availability
              </li>
            </ul>
          </div>

          <div>
            <iframe 
              src="https://discord.com/widget?id=916850601919393832&theme=dark" width="300" height="350"
              allowTransparency={true}
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </div>
        <HelpUs />
      </div>
    </>
  );
}
