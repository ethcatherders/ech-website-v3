import { useState, useEffect } from "react";
import { getAllFeedbacks } from "@/app/_action";
import Autoplay from "embla-carousel-autoplay";
import FeedbackCard, { FeedbackCardProps } from "./feedbackCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const feedbacks: FeedbackCardProps[] = [
  {
    name: "Tim Beiko",
    social: "https://twitter.com/TimBeiko",
    image: "https://pbs.twimg.com/profile_images/1082093593840349184/P2B7Qiyn_400x400.jpg",
    feedback: "Wanted to share I think @EthCatHerders are awesome: they help make ACD and other things accessible to more folks with transcripts, blog posts, and video series.",
    approved: true
  },
  {
    name: "Udi Wertheimer",
    social: "https://twitter.com/udiWertheimer",
    image: "/assets/profiles/udi.png",
    feedback: "You guys are doing a great job with the Ethereum Cat Herders so keep doing it. It's really cool.",
    approved: true
  },
  {
    name: "Auryn Macmillan",
    social: "https://twitter.com/auryn_macmillan",
    image: "/assets/profiles/auryn.png",
    feedback: "clrfunds - \"Really appreciate all of your effort to wrangle the community.\"",
    approved: true
  },
  {
    name: "Scott Moore",
    social: "https://twitter.com/notscottmoore",
    image: "/assets/profiles/scott.png",
    feedback: "Gitcoin - \"Very glad you're all still out doing this!\"",
    approved: true
  },
  {
    name: "Griff Green",
    social: "https://twitter.com/thegrifft",
    image: "/assets/profiles/griff.png",
    feedback: "Givethio - \"Love you Cat Herders! MEEEEOOW\"",
    approved: true
  },
  {
    name: "Sam Richard",
    social: "https://twitter.com/samonchain",
    image: "/assets/profiles/sam.png",
    feedback: "ethereum.org - \"Keep up the great work!\"",
    approved: true
  }
];

export default function FeedbackCarousel() {
  // const [feedbacksData, setFeedbacksData] = useState<any[]>([]);
  // useEffect(() => {
  //   getAllFeedbacks().then((data) => {
  //     setFeedbacksData(data);
  //   });
  // }, []);

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="m-6">
        {feedbacks.map((feedback: FeedbackCardProps, index: number) => {
          if (feedback.approved) {
            return (
              <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2">
                <FeedbackCard {...feedback} />
              </CarouselItem>
            );
          }
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
