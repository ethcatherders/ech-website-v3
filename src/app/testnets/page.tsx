"use client";
import { useState } from "react";
import { activeTestnets } from "@/constants/page";
import type { ActiveTestnet } from "@/types/page";
export default function Testnets() {
  const [selectedTestnet, setSelectedTestnet] = useState<ActiveTestnet>(
    activeTestnets[0]
  );

  return (
    <>
      <div className="flex justify-center min-h-screen w-full lg:pt-[25dvh] md:pt-[20dvh] pt-[15dvh]">
        <div className="lg:max-w-[65vw] md:max-w-[75vw] sm:max-w-[85vw] max-w-[95vw] left-0">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col gap-5">
              <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray">
                Testnets
              </h1>
              <p className="lg:text-2xl md:text-xl sm:text-lg text-md text-justify font-light font-roboto">
                The Ethereum test network, often referred to as a testnet,
                serves as a meticulously crafted infrastructure designed to
                closely mirror the mainnet environment, facilitating thorough
                testing of contracts and protocols before their deployment on
                the live Ethereum network.
              </p>
            </div>

            <div className="pt-8">
              <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray">
                Active Testnets
              </h1>

              <ul className="flex w-full justify-center items-center space-x-4 pt-8">
                {activeTestnets.map((testnet, index) => {
                  return (
                    <>
                      <li
                        key={index}
                        className={`text-lg ${
                          selectedTestnet === testnet
                            ? "text-darkGray"
                            : "text-lightGray"
                        } cursor-pointer`}
                        onClick={() => {
                          setSelectedTestnet(testnet);
                        }}
                      >
                        {testnet.name}
                      </li>
                    </>
                  );
                })}
              </ul>

              <div className="my-8 box-black-bg rounded-xl grid md:grid-cols-3 grid-cols-1 border-2 border-black">
                <div className="md:col-span-2 md:border-r-2 border-b-2 border-dotted space-y-4 border-black flex flex-col justify-start items-center p-4">
                  <div className="flex flex-col space-y-1 text-center">
                    <h1 className="text-2xl font-semibold">
                      {selectedTestnet.name}
                    </h1>
                    {selectedTestnet.warning ? (
                      <span className="font-bold italic">
                        **{selectedTestnet.warning}
                        **
                      </span>
                    ) : null}
                  </div>

                  <span>{selectedTestnet.description}</span>

                  {selectedTestnet.bullets ? (
                    <ul className="flex flex-col gap-y-2 list-disc justify-start w-full pl-4">
                      {selectedTestnet.bullets.map((bullet, index) => {
                        return (
                          <>
                            <li key={index}>{bullet}</li>
                          </>
                        );
                      })}
                    </ul>
                  ) : null}
                </div>
                <div className="flex flex-col p-4 space-y-4">
                  <h3 className="font-semibold text-darkGray text-xl">
                    Resources
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {selectedTestnet.resources.map((resource, index) => {
                      return (
                        <>
                          <li key={index}>
                            <a
                              href={resource.link}
                              target="_blank"
                              className="text-lightGray hover:text-darkGray"
                            >
                              {resource.title}
                            </a>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                  <h3 className="font-semibold text-darkGray text-xl">
                    Faucets
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {selectedTestnet.faucets.map((resource, index) => {
                      return (
                        <>
                          <li key={index}>
                            <a
                              href={resource.link}
                              target="_blank"
                              className="text-lightGray hover:text-darkGray"
                            >
                              {resource.title}
                            </a>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
