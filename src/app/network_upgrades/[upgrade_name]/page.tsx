"use client";
import { useState, useEffect } from "react";
import type {
  consdideredProposal,
  InfoForUpgrade,
  UpdatesData,
  VideosData,
  ResourcesData,
} from "@/types/page";
import { usePathname } from "next/navigation";
import ConsdideredProposal from "@/components/consideredProposalCard/page";
import { getUpgrade } from "../../_action";
import { ConsideredProposals } from "@prisma/client";

interface UpgradeData {
  considered: consdideredProposal[];
  info: InfoForUpgrade;
  updates: UpdatesData[];
  videos: VideosData[];
  resources: ResourcesData[];
}

export default function Practra() {
  const path = usePathname();
  const upgradeName = path.split("/")[2];
  const [data, setData] = useState<any>();
  useEffect(() => {
    async function fetchData() {
      const upgradeData = await getUpgrade(upgradeName);
      setData(upgradeData);
    }
    fetchData();
  }, [upgradeName]);
  console.log(data);
  return (
    <>
      <>
        <div className="flex flex-col gap-y-8 justify-center items-center min-h-screen">
          <div className="flex lg:flex-row flex-col items-center  max-w-[80vw] gap-x-12 lg:pt-[25dvh] md:pt-[20dvh] pt-[15dvh] gap-y-4">
            <div className="flex flex-col gap-y-6 xl:max-w-xl md:max-w-2xl">
              <section className="flex flex-col gap-y-4 ">
                <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl font-roboto font-bold text-darkGray">
                  {upgradeName.charAt(0).toUpperCase() + upgradeName.slice(1)}{" "}
                  Upgrade
                </h1>
                <h3 className="text-darkGray font-roboto font-medium xl:text-2xl md:text-xl text-lg">
                  What is the{" "}
                  {upgradeName.charAt(0).toUpperCase() + upgradeName.slice(1)}{" "}
                  Upgrade?
                </h3>
              </section>
              <section>
                <p className="text-justify font-roboto font-light lg:text-lg md:text-md sm:text-sm text-xs">
                  {data?.desc1}
                </p>
                <br />
                <p className="text-justify font-roboto font-light lg:text-lg md:text-md sm:text-sm text-xs">
                  {data?.desc2}
                </p>
              </section>
            </div>

            <div className=" md:scale-100 scale-50">
              <iframe
                width="560"
                height="315"
                src={data?.embedLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col mx-10 text-center pt-32">
            {data?.consideredProposals.length !== 0 ? (
              <h1 className="xl:text-4xl md:text-3xl text-2xl font-bold text-darkGray">
                EIPs <span className="italic">Considered For Inclusion</span>
              </h1>
            ) : null}
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  gap-x-10 gap-y-6 ">
              {data?.consideredProposals.map(
                (item: ConsideredProposals, index: number) => {
                  return <ConsdideredProposal data={item} key={index} />;
                }
              )}
            </div>
          </div>

          {data?.updates.length !== 0 ||
          data?.videos.length !== 0 ||
          data?.resources.length !== 0 ? (
            <div className="flex justify-center text-center mx-5">
              <span className="md:text-3xl text-xl text-center font-roboto font-bold">
                In the section below you can find more resources providing
                information on the Dencun Upgrade.
              </span>
            </div>
          ) : null}

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 pb-16 mx-10 pt-8">
            {data?.updates.length !== 0 ? (
              <div className="flex flex-col lg:border-r lg:border-b-0 border-b gap-y-4 lg:pb-0 pb-8 border-darkGray border-dashed">
                <h1 className="lg:text-2xl text-xl font-bold font-roboto">
                  Updates
                </h1>
                <div className="flex flex-col-reverse justify-end gap-y-2 ">
                  {data?.updates.map((item: UpdatesData, index: number) => {
                    return (
                      <div
                        key={index}
                        className="flex space-x-2 text-wrap pl-8"
                      >
                        <p>
                          <span className="lg:text-xl md:text-lg text-md font-bold text-darkGray">
                            {item.date} :
                          </span>
                          <span className="lg:text-xl md:text-lg text-md">
                            {item.title}
                          </span>
                          <a href={item.link}>
                            <span className="underline underline-offset-2 lg:text-lg md:text-md text-sm">
                              {"("}
                              {item.linkTitle}
                              {")"}
                            </span>
                          </a>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}

            <div className="flex flex-col gap-y-8 px-8">
              {data?.videos?.length !== 0 ? (
                <div className="flex flex-col gap-y-4">
                  <h1 className="lg:text-2xl text-xl font-bold font-roboto">
                    Videos
                  </h1>
                  {data?.videos.map((item: VideosData, index: number) => {
                    return (
                      <span
                        key={index}
                        className="lg:text-xl md:text-lg text-md font-roboto font-thin"
                      >
                        <a href={item.link} target="_blank">
                          {item.title}
                        </a>
                      </span>
                    );
                  })}
                </div>
              ) : null}

              {data?.resources?.length !== 0 ? (
                <div className="flex flex-col gap-y-4">
                  <h1 className="lg:text-2xl text-xl font-bold font-roboto">
                    Resources
                  </h1>
                  {data?.resources.map((item: ResourcesData, index: number) => {
                    return (
                      <span
                        key={index}
                        className="lg:text-xl md:text-lg text-md font-roboto font-thin"
                      >
                        <a href={item.link} target="_blank">
                          {item.title}
                        </a>
                      </span>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
