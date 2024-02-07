import { PodcastCards } from "@/types/page";
import Image from "next/image";
export default function PodcastCard({ card }: { card: PodcastCards }) {
  return (
    <>
      <a href={card.link} target="_blank">
        <div className="h-24 box-black-bg flex rounded-2xl sm:space-x-4 space-x-2 items-center md:pl-8 pl-4 border-2 border-black">
          <Image
            src={card.icon}
            alt={card.title}
            height={100}
            width={100}
            className="w-8 h-8"
          />
          <p className="md:text-3xl text-xl font-roboto font-semibold">
            {card.title}
          </p>
        </div>
      </a>
    </>
  );
}
