"use client";
import Heading from "@/components/ui/Heading";
import Button from "@/components/button/page";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Content from "@/components/ui/content";
import PageContainer from "@/components/ui/pageContainer";
import { networkUpgrades } from "@/constants/networkUpgrades";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
export default function NetworkUpgradesPage() {
  return(
    <PageContainer>
        <Heading text="Network Upgrades" />
        <Content>
          Technical upgrades are made periodically to the Ethereum protocol.
          Upgrades typically comprise of Core Ethereum Improvement Proposals
          (EIPs) that have achieved consensus across the Ethereum clients &
          community.
        </Content>
        <Heading text="Ethereum Blockchain Upgrades" />

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
          <CarouselContent className="m-6 gap-6">
            {networkUpgrades.map((upgrade, index) => {
              return (
                <CarouselItem key={index} className="lg:basis-1/2">
                  <div className="box-black-bg rounded-2xl border-2 border-black p-4 flex flex-col gap-3 justify-between font-sans bg-white h-full">
                    <Image
                      src={upgrade.image}
                      alt="upgrade"
                      height={800}
                      width={800}
                      className="rounded-2xl h-[12rem]"
                    />

                    <span className="font-bold text-lg text-left">
                      {upgrade.upgrade}
                    </span>

                    <p className="text-lg flex gap-x-3 font-thin">
                      <span>
                        {upgrade.upgrade === "Shapella" ||
                        upgrade.upgrade === "Dencun"
                          ? "EPOCH:"
                          : "TTD:"}
                      </span>
                      {upgrade.number}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      {upgrade.links?.map((link, index) => {
                        return (
                          <a
                            href={link?.link}
                            key={index}
                            className="text-base font-thin hover:font-normal duration-300"
                          >
                            {link?.linkTitle}
                          </a>
                        );
                      })}
                    </div>

                    <div className="flex justify-between items-end">
                      <span className="text-base">{upgrade.date}</span>
                      <a href={upgrade.readMore} target="_blank">
                        <button className="border border-black rounded-xl text-base px-4 py-2 text-black hover:text-white hover:bg-black hover:scale-110 duration-300">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Content>
          The network upgrade progress tracker helps with keeping track of
          improvement proposals in different phases of network upgrade. Clients
          {"' "} development and integration can be followed on the latest
          version of the developer{"'"}s testnet. Read Shedding light on the
          Ethereum Network Upgrade Process for more information
        </Content>

        <a
          href={"https://github.com/ethereum/eth1.0-specs/projects/1"}
          target="_blank"
        >
          <button className="border border-black rounded-xl text-xl px-4 py-2 hover:text-black text-white hover:bg-white bg-black hover:scale-110 duration-300">
            Network Upgrade Process Tracker
          </button>
        </a>

        <h3 className="md:text-2xl text-xl font-sans ">
          How ECH supports network upgrades
        </h3>

        <ul className="font-light text-lg list-disc pb-12">
          <li>Organising proposal & upgrades specific community calls</li>
          <li>Documenting client Meetings</li>
          <li>
            Socialize proposals and build educational resources through the{" "}
            <a
              href="https://youtube.com/playlist?list=PL4cwHXAawZxqu0PKKyMzG_3BJV_xZTi1F"
              className="border-b border-dotted border-darkGray"
            >
              Peep an EIP video series
            </a>
          </li>
          <li>
            Outreaching Ethereum projects & infrastructure providers to weigh-in
            community sentiments for improvement proposals
          </li>
          <li>Process improvement and communication</li>
        </ul>
      </PageContainer>
  )
}
