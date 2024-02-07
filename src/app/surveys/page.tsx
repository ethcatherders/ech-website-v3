"use client";
import { useEffect, useState } from "react";
import { getAllSurveys } from "../_action";

import Image from "next/image";
export default function Surveys() {
  const [data, setData] = useState<
    {
      id: number;
      title: string;
      link: string;
      completed: boolean;
    }[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getAllSurveys();
      setData(res);
    }
    fetchData();
  });

  const completed = data.filter((data) => data.completed);
  const open = data.filter((data) => !data.completed);
  return (
    <>
      <div className="flex justify-center min-h-screen w-full lg:pt-[25dvh] md:pt-[20dvh] pt-[15dvh]">
        <div className="w-[90vw] left-0">
          <div className="flex flex-col space-y-4">
            <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray">
              Surveys
            </h1>

            <div className="pt-8 flex flex-col gap-y-5">
              <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                <div className="flex flex-col justify-start h-full gap-y-8">
                  <div className="flex flex-col gap-y-4">
                    {open.length > 0 && (
                      <h2 className="xl:text-4xl md:text-3xl text-2xl font-semibold">
                        Open
                      </h2>
                    )}
                    <div className="flex flex-col gap-5">
                      {open.map((data) => {
                        return (
                          <>
                            <a
                              href={data.link}
                              target="_blank"
                              className="md:text-2xl text-xl border-b-2 border-dotted border-darkGray"
                            >
                              {data.title}
                            </a>
                          </>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-4">
                    {completed.length > 0 && (
                      <h2 className="xl:text-4xl md:text-3xl text-2xl font-semibold">
                        Completed
                      </h2>
                    )}
                    <div className="flex flex-col gap-5">
                      {completed.map((data) => {
                        return (
                          <>
                            <a
                              href={data.link}
                              target="_blank"
                              className="md:text-2xl text-xl border-b-2 border-dotted border-darkGray"
                            >
                              {data.title}
                            </a>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/assets/cat5.png"
                    alt="cat"
                    width={600}
                    height={600}
                    className="md:h-[20rem] md:w-[25rem] h-[10rem] w-[15rem] md:pt-0 mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
