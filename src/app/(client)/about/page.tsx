"use client";
import { members, contributors } from "@/constants/page";
import MemberCard from "@/components/memberCard/page";
import HelpUs from "@/components/others/helpUs";
import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="flex justify-center pt-[15dvh] md:pt-[20dvh] lg:pt-[25dvh] ">
        <div className="w-full lg:max-w-[65vw] md:max-w-[75vw] sm:max-w-[85vw] max-w-[95vw]">
          <div className="flex flex-col gap-y-8">
            <h1 className="text-left  lg:text-7xl md:text-5xl sm:text-5xl text-4xl  font-bold text-darkGray ">
              About
            </h1>
            <p className="lg:text-2xl md:text-xl sm:text-lg text-md text-justify font-light font-roboto">
              The Ethereum Cat Herders (ECH) are a group of individuals working
              together to support the Ethereum community through tasks that are
              best described as decentralized project management, team
              coordination, and information dissemination projects. Since coming
              on the scene in{" "}
              <a
                href="https://medium.com/ethereum-cat-herders/decentralizing-ethereum-project-management-ffff4c09d0ea"
                className="underline underline-offset-2"
              >
                January 2019
              </a>
              , we help coordinate EIPs for network upgrades, pre and post
              communication needed for successful deployment of network
              upgrades, community consensus gathering, community funding, and
              many other tasks.
            </p>
          </div>

          <div className="lg:py-20 md:py-16 sm:py-12 py-8">
            <div className="flex flex-col gap-8">
              <h1 className="text-left  lg:text-7xl md:text-5xl sm:text-5xl text-4xl  font-bold text-darkGray ">
                Members
              </h1>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {members.map((member, index) => {
                  return <MemberCard member={member} key={index} />;
                })}
              </div>
            </div>
          </div>

          <div className="lg:py-20 md:py-16 sm:py-12 py-8">
            <div className="flex flex-col gap-8">
              <h1 className="text-left  lg:text-7xl md:text-5xl sm:text-5xl text-4xl  font-bold text-darkGray ">
                Contributors
              </h1>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {contributors.map((contributor, index) => {
                  return <MemberCard member={contributor} key={index} />;
                })}
              </div>
            </div>
          </div>

          <div className="lg:pb-20 md:pb-16 sm:pb-12 pb-8 flex justify-center items-center">
            <Image src="/assets/paws.png" alt="paws" width={200} height={200} />
          </div>

          <HelpUs />
        </div>
      </div>
    </>
  );
}
