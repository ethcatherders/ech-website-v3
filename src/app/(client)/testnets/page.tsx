"use client";
import { useState } from "react";
import { activeTestnets, deprecatedTestnets } from "@/constants/page";
import type { ActiveTestnet } from "@/types";
import PageContainer from "@/components/ui/pageContainer";
import Heading from "@/components/ui/Heading";
import Content from "@/components/ui/content";
import Image from "next/image";

export default function Testnets() {
  const [selectedTestnet, setSelectedTestnet] = useState<ActiveTestnet>(
    activeTestnets[0],
  );

  return (
    <>
      <PageContainer>
        <Heading text="Testnets" />
        <Content>
          The Ethereum test network, often referred to as a testnet, serves as a
          meticulously crafted infrastructure designed to closely mirror the
          mainnet environment, facilitating thorough testing of contracts and
          protocols before their deployment on the live Ethereum network.
        </Content>

        <div className="pt-8">
          <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray">
            Active Testnets
          </h1>

          <ul className="flex w-full justify-center items-center space-x-4 pt-8">
            {activeTestnets.map((testnet, index) => {
              return (
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
              );
            })}
          </ul>

          <div className="my-8 box-black-bg rounded-xl grid md:grid-cols-3 grid-cols-1 border-2 border-black">
            <div className="md:col-span-2 md:border-r-2 md:border-b-0 border-b-2 border-dotted space-y-4 border-black flex flex-col justify-start items-center p-4">
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
                      <li key={index}>{bullet}</li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
            <div className="flex flex-col p-4 space-y-4">
              <h3 className="font-semibold text-darkGray text-xl">Resources</h3>
              <ul className="flex flex-col gap-2">
                {selectedTestnet.resources.map((resource, index) => {
                  return (
                    <li key={index}>
                        <a
                          href={resource.link}
                          target="_blank"
                          className="text-lightGray hover:text-darkGray"
                        >
                          {resource.title}
                        </a>
                      </li>
                  );
                })}
              </ul>
              <h3 className="font-semibold text-darkGray text-xl">Faucets</h3>
              <ul className="flex flex-col gap-2">
                {selectedTestnet.faucets.map((resource, index) => {
                  return (
                    <li key={index}>
                        <a
                          href={resource.link}
                          target="_blank"
                          className="text-lightGray hover:text-darkGray"
                        >
                          {resource.title}
                        </a>
                      </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray">
            Deprecated Testnets
          </h1>
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-10 py-8 mx-5">
            {deprecatedTestnets.map((testnet, index) => {
              return (
                <div
                    key={index}
                    className="box-black-bg rounded-xl border-2 border-black p-4 flex flex-col gap-4"
                  >
                    <div className="flex flex-col gap-5">
                      <Image
                        src={testnet.image}
                        alt={testnet.name}
                        height={800}
                        width={800}
                        className="rounded-2xl w-full md:h-[16rem] h-[10rem]"
                      />
                      <div className="flex flex-col gap-3 justify-center items-center w-full">
                        <h1 className="text-xl font-sans font-semibold">
                          {testnet.name.toUpperCase()}
                        </h1>
                        <table >
                          <tr>
                            <th className="text-left pr-12">
                              Flavour
                            </th>
                            <td className="text-right font-thin">{testnet.flavour}</td>
                          </tr>

                          <tr>
                            <th className="text-left pr-12">
                              Genesis
                            </th>
                            <td className="text-right font-thin">{testnet.genesis}</td>
                          </tr>

                          <tr>
                            <th className="text-left pr-12">
                              LTS
                            </th>
                            <td className="text-right font-thin">{testnet.lts}</td>
                          </tr>

                          <tr>
                            <th className="text-left pr-12">
                              EOS
                            </th>
                            <td className="text-right font-thin">{testnet.eos}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <span className="text-justify font-thin">{testnet.description}</span>
                    <ul className="flex flex-col gap-2"></ul>
                  </div>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </>
  );
}
