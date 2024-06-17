"use client";
import Image from "next/image";
import Hero from "@/components/hero/page";
import HelpUs from "@/components/others/helpUs";
import Feedback from "@/components/feedback";
import Button from "@/components/button/page";
import LogoCarousel from "@/components/carousel/logoCarousel";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="lg:max-w-[75vw] md:max-w-[85vw] sm:max-w-[90vw] max-w-[95vw] mx-auto flex flex-col gap-y-24">
        <div className="flex xl:flex-row flex-col justify-between gap-6 items-center pt-16 px-6">
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
              Ethereum Cat Herder is a non profit organization. 
              Its goal is to make it easy for anyone to get involved with and improve Ethereum. 
              We make {" "}
              <a
                href="https://www.youtube.com/playlist?list=PL4cwHXAawZxqu0PKKyMzG_3BJV_xZTi1F"
                target="_blank"
              >
                <span className="border-b border-dotted pb-1 border-lightGray">
                  in-depth videos and podcasts
                </span>
              </a>
              {" "}explaining the EIPs. We have a {" "}
              <a
                href="https://medium.com/ethereum-cat-herders/learn2earn-is-back-with-dencun-nft-3712d2b086fd"
                target="_blank"
              >
                <span className="border-b border-dotted pb-1 border-lightGray">
                  fun app
                </span>
              </a>
              {" "}about the Ethereum improvement process and the Ethereum community. 
              We help authors edit, publish and solicit feedback on EIPs.  
              And we write about how Ethereum and the Ethereum community evolves over time. 
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <Image src="/assets/paws.png" alt="paws" width={200} height={200} />
        </div>

        <div className="flex xl:flex-row flex-col justify-between gap-6 items-center px-6">
          <div className="flex flex-col max-w-2xl  space-y-6">
            <h1 className="font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
              Get Involved
            </h1>

            <p className="md:text-2xl sm:text-xl text-lg text-lightGray text-justify">
              Whether you&apos;re a developer, researcher, writer, or enthusiast, there are numerous ways to contribute. 
              By participating in creating educational content, project management, documentation, community outreach, or EIP editing, you&apos;ll help shape the future of Ethereum. 
              Your skills and enthusiasm are what we need to drive Ethereum forward. 
              Get involved today and make a difference!
            </p>

            <div className="flex sm:flex-row gap-10 items-center">
              <Button
                text="Join ECH"
                link="https://docs.google.com/forms/d/1o2Oidzt6qZZ296KkqeNMi6xAALIv8zsBK1Va3Lzc9IQ/viewform?edit_requested=true"
                inverted={true}
                fontSize={"xl"}
                size="sm"
              />
              <a
                href="https://medium.com/ethereum-cat-herders/learn2earn-is-back-with-dencun-nft-3712d2b086fd"
                target="_blank"
                className="border-b border-dotted pb-1 border-lightGray"
              >
                Join our Discord
              </a>
            </div>
          </div>

          <div>
            <iframe 
              src="https://discord.com/widget?id=916850601919393832&theme=dark" width="400" height="350"
              allowTransparency={true}
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col w-full justify-center gap-10 pt-10 pb-20">
          <h1 className="font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center">
            Our Supporters
          </h1>
          <LogoCarousel />
        </div>

        {/* <HelpUs /> */}
      </div>
    </>
  );
}
