"use client";
import { getCollection, getDocById } from "@/firebase/tools";
import { useState, useEffect } from "react";
import type { consdideredProposal, InfoForUpgrade } from "@/types/page";
import { usePathname } from "next/navigation";
import ConsdideredProposal from "@/components/consideredProposalCard/page";

interface UpgradeData {
  considered: consdideredProposal[];
  info: InfoForUpgrade;
}

export default function Practra() {
  const path = usePathname();
  const upgradeName = path.split("/")[2];
  const [data, setData] = useState<UpgradeData>();

  useEffect(() => {
    async function getData() {
      const doc = await getCollection(upgradeName, "considered");
      const doc2 = await getDocById(upgradeName, "info", upgradeName);
      if (doc) {
        setData({
          considered: doc as consdideredProposal[],
          info: doc2 as InfoForUpgrade,
        });
      } else {
        console.log("No data found");
      }
    }
    getData();
  }, []);

  return (
    <>
      {data?.considered && data?.info && (
        <>
          <div className="flex flex-col gap-y-8 justify-center items-center min-h-screen">
            <div className="flex lg:flex-row flex-col items-center  max-w-[80vw] gap-x-12 pt-[25dvh] gap-y-4">
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
                    {data?.info?.description1}
                  </p>
                  <br />
                  <p className="text-justify font-roboto font-light lg:text-lg md:text-md sm:text-sm text-xs">
                    {data?.info?.description2}
                  </p>
                </section>
              </div>

              <div className=" md:scale-100 scale-50">
                <iframe
                  width="560"
                  height="315"
                  src={data?.info?.embedLink}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>

            <div className="flex flex-col mx-10 text-center pt-32">
              <h1 className="xl:text-4xl md:text-3xl text-2xl font-bold text-darkGray">
                EIPs <span className="italic">Considered For Inclusion</span>
              </h1>
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  gap-x-10 gap-y-6 ">
                {data?.considered.map((item, index) => {
                  return <ConsdideredProposal data={item} key={index} />;
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
