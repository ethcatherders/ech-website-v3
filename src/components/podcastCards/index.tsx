import { PodcastCards } from "@/types";
import Image from "next/image";
import Link from "next/link";
export default function PodcastCard({ card }: { card: PodcastCards }) {
  return (
    <>
      <Link href={card.link} target="_blank" passHref>
        <div className="h-24 box-black-bg flex rounded-2xl sm:space-x-4 space-x-2 items-center md:pl-8 pl-4 border-2 border-black">
          <Image
            src={card.icon}
            alt={card.title}
            height={100}
            width={100}
            className="w-8 h-8"
          />
          <p className="md:text-3xl sm:text-2xl text-xl font-roboto font-semibold">
            {card.title}
          </p>
        </div>
      </Link>
    </>
  );
}
