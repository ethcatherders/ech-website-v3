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
          <div className="flex flex-col w-full justify-center items-center space-y-6 py-6">
            <div className="box-black-bg rounded-xl h-[8rem] max-w-lg w-full flex md:p-6 p-3 flex-col font-bold justify-between text-darkGray border-2 border-black">
              <p className="text-md">An Overview of Women in Ethereum Protocol (WiEP)</p>
              <p className="text-sm font-normal">La Donna Higgins and Pooja Ranjan</p>
              <Link href="https://youtu.be/idMUzYquvB8?si=hHZx73gH_hJHW9WR" className="text-center text-sm font-normal" target="_blank" passHref>
                <div className="flex items-center gap-1">
                  <p>Watch video</p>
                  <CgExternal />
                </div>
              </Link>
            </div>
            <div className="box-black-bg rounded-xl h-[8rem] max-w-lg w-full flex md:p-6 p-3 flex-col font-bold justify-between text-darkGray border-2 border-black">
              <p className="text-md">Shaping Ethereum's Protocol Governance & Decision Making</p>
              <p className="text-sm font-normal">Pooja Ranjan</p>
              <Link href="https://youtu.be/U_UN8FRqi5c" className="text-center text-sm font-normal" target="_blank" passHref>
                <div className="flex items-center gap-1">
                  <p>Watch video</p>
                  <CgExternal />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start max-w-xl space-y-6">
          <p className="text-lg text-lightGray text-justify">
            The ETH Cat Herders headed to Devcon in Bangkok in November! Watch the videos of our recap and talks.
          </p>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/rksdvA4oHWU?si=kIxeIr9ArlHmUkkG" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen 
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-5 items-center justify-evenly">
        <div className="box-black-bg rounded-xl h-[8rem] max-w-lg w-full flex md:p-6 p-3 flex-col font-bold justify-between text-darkGray border-2 border-black">
          <p className="text-md">WiEP Introduction | W3 Hub</p>
          <p className="text-sm font-normal">La Donna Higgins and Pooja Ranjan</p>
          <Link href="https://youtu.be/C_zkU-f4tto" className="text-center text-sm font-normal" target="_blank" passHref>
            <div className="flex items-center gap-1">
              <p>Watch video</p>
              <CgExternal />
            </div>
          </Link>
        </div>
        <div className="box-black-bg rounded-xl h-[8rem] max-w-lg w-full flex md:p-6 p-3 flex-col font-bold justify-between text-darkGray border-2 border-black">
          <p className="text-md">Sandra Johnson's Journey</p>
          <p className="text-sm font-normal">Sandra Johnson</p>
          <Link href="https://youtu.be/wQ2RqrAFxG8?si=-vNfyhe8jNbJnVm4" className="text-center text-sm font-normal" target="_blank" passHref>
            <div className="flex items-center gap-1">
              <p>Watch video</p>
              <CgExternal />
            </div>
          </Link>
        </div>
        <div className="box-black-bg rounded-xl h-[8rem] max-w-lg w-full flex md:p-6 p-3 flex-col font-bold justify-between text-darkGray border-2 border-black">
          <p className="text-md">WEiP Study Group: Insights from Gyan & Lena</p>
          <p className="text-sm font-normal">Gyan & Lena</p>
          <Link href="https://youtu.be/5gWbu8lbFMA" className="text-center text-sm font-normal" target="_blank" passHref>
            <div className="flex items-center gap-1">
              <p>Watch video</p>
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
        </div>
      </div>
    </PageContainer>
  );
}
