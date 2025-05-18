"use client";
import { useState, useEffect } from "react";
import type {
  consideredEIP,
  UpdatesData,
  VideosData,
  ResourcesData,
} from "@/types";
import { usePathname } from "next/navigation";
import ConsideredProposalCard from "@/components/consideredProposalCard/page";
import { getUpgrade } from "@/app/_action";
import { ConsideredProposals } from "@prisma/client";
import PageContainer from "@/components/ui/pageContainer";
import { CgSpinner } from "react-icons/cg";
import TheMerge from "@/components/network_upgrades/theMerge";
import ShanghaiExtras from "@/components/network_upgrades/shanghai";
import Pectra from "@/components/network_upgrades/pectra";
import { UpgradeData } from "@/components/network_upgrades/types";
import { NftClaimCard } from "@/components/nft-claim";
import { getNetworkCarouselImages } from "@/lib/networkCarouselImages";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export default function NetworkUpgradePage() {
  const path = usePathname();
  const upgradeName = path.split("/")[2].toLowerCase();
  const [data, setData] = useState<UpgradeData>();
  useEffect(() => {
    async function fetchData() {
      const upgradeData = await getUpgrade(upgradeName);
      setData(upgradeData);
    }
    fetchData();
  }, [upgradeName]);

  const carouselImages = getNetworkCarouselImages(upgradeName);

  if (!data && upgradeName !== "the-merge") {
    return (
      <>
        <PageContainer>
          {/* <div className="max-w-[490px]">
            <NftClaimCard upgrade={'pectra'} />
          </div> */}
          <div className="flex w-full h-[50dvh] justify-center items-center">
            <span className="animate-spin">
              <CgSpinner size={50} className="text-darkGray" />
            </span>
          </div>
        </PageContainer>
      </>
    );
  }

  if (upgradeName === "the-merge") {
    return <TheMerge />;
  }

  if (upgradeName === "pectra") {
    return <Pectra data={data} />;
  }

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
                {
                  upgradeName !== 'pectra' ? (
                    <>
                      <p className="text-justify font-roboto font-light lg:text-lg md:text-md sm:text-sm text-xs">
                        {data?.desc1}
                      </p>
                      <br />
                      <p className="text-justify font-roboto font-light lg:text-lg md:text-md sm:text-sm text-xs">
                        {data?.desc2}
                      </p>
                    </>
                  ): (
                    <>
                      <p className="text-justify font-roboto font-light lg:text-lg md:text-md sm:text-sm text-xs">
                      The Pectra upgrade for Ethereum, expected in late 2024, focuses on improvements including EL-CL communication, staking design, and everyday transactions experience.
                      </p>
                      <br />
                      <p className="text-justify font-roboto font-light lg:text-lg md:text-md sm:text-sm text-xs">
                        The &quot;Pectra Upgrade&quot;, expected in early 2025 is planned to enhance Ethereum with advanced cryptographic tools, improved validator operations, increased scalability, and better economic incentives. Key updates include efficient BLS12-381 precompiles, on-chain validator deposits, optimized attestations, blob throughput increases, and calldata cost adjustments, positioning Ethereum for greater performance and usability.
                        <br />
                        Other highlights include <a href="https://eips.ethereum.org/EIPS/eip-7623" target="_blank" className="border-b border-darkGray border-dashed"> EIP-7623, </a> adjusting calldata costs for network balance, and <a href="https://eips.ethereum.org/EIPS/eip-7702" target="_blank" className="border-b border-darkGray border-dashed"> EIP-7702, </a> which introduces account codes for EOAs, enhancing contract interoperability. Together, these proposals make Ethereum more robust and future-ready.
                      </p>
                      <br />
                      <p className="text-justify font-roboto font-light lg:text-lg md:text-md sm:text-sm text-xs">
                      <a href="https://eips.ethereum.org/EIPS/eip-7600" target="_blank" className="border-b border-darkGray border-dashed">EIP-7600: Hardfork Meta - Pectra</a> is created to provide the update list of proposals for the Network Upgrade. You may read about them <a href="/upgrades/pectra#eips" className="border-b border-darkGray border-dashed">here</a>. 
                      </p>
                    </>
                  )
                }
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

          {upgradeName === "shanghai" && <ShanghaiExtras />}

          {carouselImages.length > 0 && (
            <Carousel>
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="w-full h-full flex justify-center items-center">
                    <img src={image} alt={upgradeName + '-carousel-' + index} width={800} height={600} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}

          {data?.updates.length !== 0 ||
          data?.videos.length !== 0 ||
          data?.resources.length !== 0 ? (
            <div className="flex justify-center text-center mx-5">
              <span className="md:text-3xl text-xl text-center font-roboto font-bold">
                In the section below you can find more resources providing
                information on the{" "}
                {upgradeName.charAt(0).toUpperCase() + upgradeName.slice(1)}{" "}
                Upgrade.
              </span>
            </div>
          ) : null}

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 pb-16 mx-10 pt-8">
            {data?.updates.length !== 0 ? (
              <div className="flex flex-col lg:border-r lg:border-b-0 border-b gap-y-4 lg:pb-0 pb-8 border-darkGray border-dashed pr-6">
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
                            {item.date} : {" "}
                          </span>
                          <span className="lg:text-xl md:text-lg text-md">
                            {item.title}{" "}
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
                  <div className="flex flex-col-reverse gap-y-4">
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
                </div>
              ) : null}

              {data?.resources?.length !== 0 ? (
                <div className="flex flex-col gap-y-4">
                  <h1 className="lg:text-2xl text-xl font-bold font-roboto">
                    Resources
                  </h1>
                  <div className="flex flex-col-reverse gap-y-4">
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
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col mx-10 text-center pt-32" id="eips">
            {data?.consideredProposals.filter((item) => item.status === 'INCLUDED').length !== 0 ? (
              <h1 className="xl:text-4xl md:text-3xl text-2xl font-bold text-darkGray">
                Included EIPs
              </h1>
            ) : null}
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  gap-x-10 gap-y-6 ">
              {data?.consideredProposals.filter((item) => item.status === 'INCLUDED').map(
                (item: ConsideredProposals, index: number) => {
                  return <ConsideredProposalCard data={item} key={index} />;
                },
              )}
            </div>
          </div>

          <div className="flex flex-col mx-10 text-center pt-32">
            {data?.consideredProposals.filter((item) => item.status === 'CONSIDERED').length !== 0 ? (
              <h1 className="xl:text-4xl md:text-3xl text-2xl font-bold text-darkGray">
                EIPs <span className="italic">Considered For Inclusion</span>
              </h1>
            ) : null}
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  gap-x-10 gap-y-6 ">
              {data?.consideredProposals.filter((item) => item.status === 'CONSIDERED').map(
                (item: ConsideredProposals, index: number) => {
                  return <ConsideredProposalCard data={item} key={index} />;
                },
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
