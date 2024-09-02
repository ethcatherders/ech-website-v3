import { podcastCardData } from "@/constants/page";
import { PodcastCards } from "@/types";
import PodcastCard from "@/components/podcastCards";
export default function Podcast() {
  return (
    <>
      <div className="flex justify-center min-h-screen w-full lg:pt-[25dvh] md:pt-[20dvh] pt-[15dvh]">
        <div className="w-[90vw] left-0">
          <div className="flex flex-col space-y-4">
            <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray">
              Eth Cat Herders Podcasts
            </h1>
            <h3 className="xl:text-2xl text-lightGray">
              In depth interviews of the people building our ecosystem and
              beyond....
            </h3>
          </div>

          <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray py-12">
            Listen to the podcasts of ethereum-cat-herders
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 md:gap-10 gap-5">
            {podcastCardData.map((item: PodcastCards, index) => {
              return <PodcastCard card={item} key={index} />;
            })}
          </div>

          <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray py-12">
            Stay updated with the latest podcasts right here!!
          </h1>

          <iframe
            className="w-full h-[800px] pb-8"
            src="https://anchor.fm/ethereum-cat-herders"
          ></iframe>
        </div>
      </div>
    </>
  );
}
