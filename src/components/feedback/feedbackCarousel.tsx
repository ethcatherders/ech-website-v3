import { useState, useEffect } from "react";
import { getAllFeedbacks } from "@/app/_action";
import Autoplay from "embla-carousel-autoplay";
import FeedbackCard from "./feedbackCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FeedbackCarousel() {
  const [feedbacksData, setFeedbacksData] = useState<any[]>([]);
  useEffect(() => {
    getAllFeedbacks().then((data) => {
      setFeedbacksData(data);
    });
  }, []);

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
        {feedbacksData?.map((feedback: any, index: number) => {
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
