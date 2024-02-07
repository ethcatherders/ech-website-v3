"use client";
import Image from "next/image";
import { useState } from "react";
import type { YoutubeLinks } from "@/types/page";
import { getAllYoutubeVideos } from "../_action";

export default function ECHYoutube() {
  const [data, setData] = useState<YoutubeLinks[]>([]);
  const [selectedLink, setSelectedLink] = useState("");
  useState(() => {
    async function getData() {
      const res = await getAllYoutubeVideos();
      setData(res);
      setSelectedLink(res[0].link);
    }
    getData();
  });
  return (
    <>
      <div className="flex justify-center min-h-screen w-full lg:pt-[25dvh] md:pt-[20dvh] pt-[15dvh]">
        <div className="w-[90vw] left-0">
          <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray">
            Eth Cat Herders Videos
          </h1>

          <div className="flex flex-col justify-center w-full items-center py-8">
            <Image
              src="/assets/cat_head.png"
              alt="cat-head"
              width={200}
              height={200}
              className="sm:h-32 sm:w-48 h-20 w-28"
            />
            <iframe
              width="1120"
              height="630"
              src={selectedLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="xl:w-[70rem] xl:h-[35rem] rounded-3xl lg:w-[60rem] lg:h-[40rem] md:w-[45rem] md:h-[35rem] sm:w-[35rem] sm:h-[25rem] w-[20rem] h-[15rem]"
            ></iframe>
          </div>

          <div className="py-8 grid gap-5 xl:grid-cols-5 lg:grid-cols-3 grid-cols-1 w-full justify-center items-center">
            {data.map((item, index) => {
              return (
                <div
                  className="h-32 w-64 border-2 border-black rounded-2xl box-black-bg items-center justify-center flex cursor-pointer"
                  key={index}
                  onClick={() => setSelectedLink(item.link)}
                >
                  <p className="p-5 font-extrabold text-xl">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
