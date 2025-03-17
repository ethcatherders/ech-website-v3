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
              EthCatHerders Podcasts
            </h1>
            {/* <h3 className="xl:text-2xl text-lightGray">
              In depth interviews of the people building our ecosystem and
              beyond....
            </h3> */}
            <h3 className="text-lg xl:text-2xl text-lightGray">
              Your go-to source for staying updated on all things Ethereum. We
              bring you the latest insights from Ethereum Core Dev Meetings,
              deep dives into PEEPanEIP, exciting demos of ecosystem projects,
              and exclusive interviews with key players in the Ethereum space.
            </h3>
            <h3 className="text-lg xl:text-2xl text-lightGray">
              Whether you’re here to learn, stay informed, or explore the
              vibrant Ethereum community, we’ve got you covered with engaging
              content designed to educate and connect. Join us as we unravel the
              ever-evolving world of Ethereum! 🐾✨
            </h3>
          </div>

          {/* <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray py-12">
            Listen to the podcasts of ethereum-cat-herders
          </h1> */}

          <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray py-12">
            Stay updated with the latest podcasts right here!!
          </h1>
          <div className="flex flex-col-reverse lg:flex-row gap-5 justify-start">
            <iframe
              className="w-full h-[800px] lg:h-[650px] pb-8"
              src="https://anchor.fm/ethcatherders"
            ></iframe>
            <div className="grid grid-cols-2 gap-5 sm:min-w-[500px] sm:max-h-[400px] pb-8">
              {podcastCardData.map((item: PodcastCards, index) => {
                return <PodcastCard card={item} key={index} />;
              })}
            </div>
          </div>



        </div>
      </div>
    </>
  );
}
