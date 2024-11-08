import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Heading from "@/components/ui/Heading";
import PageContainer from "@/components/ui/pageContainer";
import Image from "next/image";
import Event1Image from "../../../../public/assets/events/ech-event-1.png";
import Event2Image from "../../../../public/assets/events/ech-event-2.png";
import Link from "next/link";
import { CgExternal } from "react-icons/cg";

export default function Events() {
  return (
    <PageContainer>
      <Heading text="Ethereum Cat Herders in Action" />
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Image src={Event1Image} alt="Event 1" width={1000} height={1000} />
          </CarouselItem>
          <CarouselItem>
            <Image src={Event2Image} alt="Event 2" width={1000} height={1000} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="w-full flex justify-center relative py-10">
        <Image src={"/assets/yarn.png"} alt="yarn" width={500} height={500} />
      </div>
      <div className="flex xl:flex-row flex-col justify-between gap-10">
        <div>
          <h1 className="font-bold text-2xl">
            DEVCON Bangkok 2024
          </h1>
          <p className="text-lg">Endgame for Ethereum’s Infinite Garden</p>
        </div>

        <div className="flex flex-col justify-start max-w-xl space-y-6">
          <p className="text-lg text-lightGray text-justify">
            The ETH Cat Herders are heading to Devcon in Bangkok next month! We can’t wait to connect with the Ethereum community, share our resources, and learn from the amazing builders, researchers, and innovators attending.
          </p>
          <p className="text-lg text-lightGray text-justify">
            Visit us at our booth for some exclusive merch! For more information, check out our location here:{" "}
            <a
              href="https://lu.ma/2q0wpfe4"
              target="_blank"
            >
              <span className="border-b border-dotted pb-1 border-lightGray">
                lu.ma
              </span>
            </a>.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="box-black-bg rounded-xl h-[10rem] max-w-lg w-full flex md:p-6 p-3 flex-col font-bold justify-between text-darkGray border-2 border-black">
          <p className="text-center text-md">Hangout with Ethereum Cat Herders!</p>
          <p className="text-center text-sm font-normal">November 12th, 8:30 AM - Nov 13, 8:00 PM</p>
          <Link href="https://lu.ma/2q0wpfe4" className="text-center text-sm font-normal" target="_blank" passHref>
            <div className="flex items-center justify-center gap-1">
              <p>Details</p>
              <CgExternal />
            </div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-5 items-center justify-evenly">
        <div className="box-black-bg rounded-xl h-[10rem] flex md:p-6 p-3 flex-col font-bold justify-between text-darkGray border-2 border-black">
          <p className="text-center text-md">EIPs Simplified: History and Process Explained</p>
          <p className="text-center text-sm font-normal">November 12th, 12:30pm</p>
          <Link href="https://x.com/EFDevcon/status/1831644714958778694" className="text-center text-sm font-normal" target="_blank" passHref>
            <div className="flex items-center justify-center gap-1">
              <p>Details</p>
              <CgExternal />
            </div>
          </Link>
        </div>
        <div className="box-black-bg rounded-xl h-[10rem] flex md:p-6 p-3 flex-col font-bold justify-between text-darkGray border-2 border-black">
          <p className="text-center text-md">WiEP Brunch & Networking</p>
          <p className="text-center text-sm font-normal">November 14th</p>
          <Link href="https://lu.ma/b2bdsuke?tk=a4jeK5" className="text-center text-sm font-normal" target="_blank" passHref>
            <div className="flex items-center justify-center gap-1">
              <p>Details</p>
              <CgExternal />
            </div>
          </Link>
        </div>
        <div className="box-black-bg rounded-xl h-[10rem] flex md:p-6 p-3 flex-col font-bold justify-between text-darkGray border-2 border-black">
          <p className="text-center text-md">Shaping Ethereum Protocol Governance and Decision Making</p>
          <p className="text-center text-sm font-normal">November 14th, 2:00 - 2:15pm</p>
          <Link href="https://lu.ma/13y7x8sn" className="text-center text-sm font-normal" passHref>
            <div className="flex items-center justify-center gap-1">
              <p>Details</p>
              <CgExternal />
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center relative py-10">
        <Image src={"/assets/yarn.png"} alt="yarn" width={500} height={500} />
      </div>
      <div className="flex xl:flex-row flex-col justify-between gap-10 pb-16">
        <div>
          <h1 className="font-bold text-2xl">
            ETH Singapore 2024
          </h1>
          <p className="text-lg">Contributing to Ethereum’s Infinite Garden</p>
        </div>

        <div className="flex flex-col justify-start max-w-xl space-y-6">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/v9G684uz6Rk?si=PDwjhCzqtqCPnUJO" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen 
          />
          {/* <p className="text-lg text-lightGray text-justify">
            The ETH Cat Herders are heading to Devcon in Bangkok next month! We can’t wait to connect with the Ethereum community, share our resources, and learn from the amazing builders, researchers, and innovators attending.
          </p>
          <p className="text-lg text-lightGray text-justify">
            Visit us at our booth for some exclusive merch! For more information, check out our location here:{" "}
            <a
              href="https://lu.ma"
              target="_blank"
            >
              <span className="border-b border-dotted pb-1 border-lightGray">
                lu.ma
              </span>
            </a>.
          </p> */}
        </div>
      </div>
    </PageContainer>
  );
}
