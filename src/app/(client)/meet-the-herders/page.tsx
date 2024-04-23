"use client";
import Heading from "@/components/ui/Heading";
import PageContainer from "@/components/ui/pageContainer";
import Content from "@/components/ui/content";
import { useEffect, useState } from "react";
import { getMTHItems } from "@/app/_action";
import { MTHItem } from "@/types/page";

export default function MeetTheHerders() {
  const [data, setData] = useState<MTHItem[]>([]);
  useEffect(() => {
    async function fetchData() {
      await getMTHItems().then((res) => {
        setData(res);
      });
    }

    fetchData();
  }, []);
  return (
    <>
      <PageContainer>
        <Heading text="Meet the Herders" />
        <Content>
          Meet the Herders{"'"} is a series of interviews with past and present
          Ethereum Cat Herders(ECH) members. ECH helps coordinate upgrades and
          process imporvements to Ethereum by aligning multiple devs from
          protocol clients to application teams such as wallets; assisting
          indiciduals/teams to write EIP/ERC and informing the community as the
          landscape changes.
        </Content>
        <Heading text="Medium" />
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="box-black-bg border-2 border-black rounded-2xl p-4 w-2/5">
            <h3 className="text-2xl font-semibold">Medium Blogs</h3>
            <ul className="flex flex-col font-light hover:font-normal duration-300 gap-3 text-xl text-lightGray">
              {data.map((item, index) => {
                if (item.type === "ARTICLE")
                  return (
                    <li key={index}>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.title}
                      </a>
                    </li>
                  );
              })}
            </ul>
          </div>
          <div className="box-black-bg border-2 border-black rounded-2xl p-4 w-2/5">
            <h3 className="text-2xl font-semibold">Videos</h3>
            <ul className="flex flex-col font-light hover:font-normal duration-300 gap-3 text-xl text-lightGray">
              {data.map((item, index) => {
                if (item.type === "VIDEO")
                  return (
                    <li key={index}>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.title}
                      </a>
                    </li>
                  );
              })}
            </ul>
          </div>
          <div className="box-black-bg border-2 border-black rounded-2xl p-4 w-2/5">
            <h3 className="text-2xl font-semibold">Podcasts</h3>
            <ul className="flex flex-col font-light hover:font-normal duration-300 gap-3 text-xl text-lightGray">
              {data.map((item, index) => {
                if (item.type === "PODCAST")
                  return (
                    <li key={index}>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.title}
                      </a>
                    </li>
                  );
              })}
            </ul>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
