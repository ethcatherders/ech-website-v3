import { useState, useEffect } from "react";
import { getAllMeetings } from "@/app/_action";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MeetingCard from "./meetingCard";

export default function DevMeetingCarousel() {
  const [meetingsData, setMeetingsData] = useState<any[]>([]);
  useEffect(() => {
    getAllMeetings().then((data:any) => {
      setMeetingsData(data);
    });
  }, []);

  return (
    
    <>
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
        {meetingsData?.map((meeting: any, index: number) => {
          return (
            <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2">
              <MeetingCard {...meeting} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>    
    </>
  );
}
