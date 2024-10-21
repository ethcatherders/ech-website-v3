import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Heading from "@/components/ui/Heading";
import PageContainer from "@/components/ui/pageContainer";
import Image from "next/image";

export default function Events() {
  return (
    <PageContainer>
      <div className="w-screen gap-4">
        <h2 className="text-2xl font-bold text-black text-left">
          Ethereum Cat Herders in Action
        </h2>
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>Image 1</CarouselItem>
          <CarouselItem>Image 2</CarouselItem>
          <CarouselItem>Image 3</CarouselItem>
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
          <p className="text-lg">Contributing to Ethereum's Infinite Garden</p>
        </div>

        <div className="flex flex-col justify-start max-w-xl space-y-6">
          <p className="text-lg text-lightGray text-justify">
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
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center relative py-10">
        <Image src={"/assets/yarn.png"} alt="yarn" width={500} height={500} />
      </div>
      <div className="flex xl:flex-row flex-col justify-between gap-10 pb-16">
        <div>
          <h1 className="font-bold text-2xl">
            ETH Singapore
          </h1>
          <p className="text-lg">Contributing to Ethereum's Infinite Garden</p>
        </div>

        <div className="flex flex-col justify-start max-w-xl space-y-6">
          <p className="text-lg text-lightGray text-justify">
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
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
