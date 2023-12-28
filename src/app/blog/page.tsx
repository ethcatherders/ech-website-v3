"use client";
import { useEffect, useState } from "react";
import { BlogsData, EventsData } from "@/types/page";
import { getCollection } from "@/firebase/tools";
interface Props {
  blogs: BlogsData[];
  events: EventsData[];
}
export default function Blog() {
  const [data, setData] = useState<Props>();

  useEffect(() => {
    async function getData() {
      const doc1 = await getCollection("blogs", "blogsPage", "blogs");
      const doc2 = await getCollection("blogs", "blogsPage", "events");

      setData({
        blogs: doc1 as BlogsData[],
        events: doc2 as EventsData[],
      });
    }
    getData();
  }, []);
  return (
    <>
      {/* <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-2 ">
          <div className="flex flex-col-reverse justify-end gapy-y-2 border-r border-dashed border-darkGray pr-6">
            {data?.blogs.map((blog, index) => {
              return (
                <div key={index} className="flex gap-x-4">
                  <a href={blog.link} target="_blank">
                    <h1 className="text-2xl">{blog.title}</h1>
                  </a>
                  <h3>{blog.date}</h3>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col-reverse justify-end gap-y-2">
            {data?.events.map((event, index) => {
              return (
                <div key={index} className="flex gap-x-4">
                  {event.linkTitle2 || event.linkTitle3 ? (
                    <>
                      <span className="flex">
                        <h1 className="text-2xl">{event.title}</h1>
                        {"("}
                        {event.linkTitle1 ? (
                          <a href={event.link1} target="_blank">
                            {event.linkTitle1}
                            {event.linkTitle2 || event.linkTitle3 ? "," : ""}
                          </a>
                        ) : null}

                        {event.linkTitle2 ? (
                          <a href={event.link2} target="_blank">
                            {event.linkTitle2}
                            {event.linkTitle3 ? "," : ""}
                          </a>
                        ) : null}
                        {event.linkTitle3 ? (
                          <a href={event.link3} target="_blank">
                            {event.linkTitle3}
                          </a>
                        ) : null}
                        {")"}
                      </span>
                    </>
                  ) : (
                    <a href={event.link1} target="_blank">
                      <h1 className="text-2xl">{event.title}</h1>
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div> */}

      <div className="flex items-center min-h-screen lg:pt-0 md:pt-[20dvh] pt-[10dvh]">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 pb-16 mx-10 pt-8">
          {data?.blogs.length !== 0 ? (
            <div className="flex flex-col lg:border-r lg:border-b-0 border-b gap-y-4 lg:pb-0 pb-8 lg:pr-8 pr-0 border-darkGray border-dashed">
              <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold font-roboto">
                Blogs
              </h1>
              <div className="flex flex-col-reverse justify-end gap-y-2 ">
                {data?.blogs.map((blog, index) => {
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-2 gap-x-4 border-t pt-3"
                    >
                      <a href={blog.link} target="_blank">
                        <h1 className="lg:text-xl md:text-lg text-md font-robot font-darkGray">
                          {blog.title}
                        </h1>
                      </a>
                      <h3 className="lg:text-lg md:text-md text-sm font-robot text-right font-light font-darkGray">
                        {blog.date}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}

          <div>
            {data?.events?.length !== 0 ? (
              <div className="flex flex-col gap-y-4">
                <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold font-roboto">
                  Events & Conferences
                </h1>
                <div className="flex flex-col-reverse justify-end gap-y-2">
                  {data?.events.map((event, index) => {
                    return (
                      <div key={index} className="flex gap-x-4">
                        {event.linkTitle2 || event.linkTitle3 ? (
                          <>
                            <span className="flex border-t pt-2 w-full items-center">
                              <h1 className="lg:text-xl md:text-lg text-md font-robot font-darkGray">
                                {event.title}
                              </h1>

                              <div>
                                {"("}
                                {event.linkTitle1 ? (
                                  <a
                                    href={event.link1}
                                    target="_blank"
                                    className="underline lg:text-lg md:text-md text-sm font-robot font-darkGray"
                                  >
                                    {event.linkTitle1}
                                    {event.linkTitle2 || event.linkTitle3
                                      ? ","
                                      : ""}
                                  </a>
                                ) : null}

                                {event.linkTitle2 ? (
                                  <a
                                    href={event.link2}
                                    target="_blank"
                                    className="underline lg:text-lg md:text-md text-sm font-robot font-darkGray"
                                  >
                                    {event.linkTitle2}
                                    {event.linkTitle3 ? "," : ""}
                                  </a>
                                ) : null}
                                {event.linkTitle3 ? (
                                  <a
                                    href={event.link3}
                                    target="_blank"
                                    className="underline lg:text-lg md:text-md text-sm font-robot font-darkGray"
                                  >
                                    {event.linkTitle3}
                                  </a>
                                ) : null}
                                {")"}
                              </div>
                            </span>
                          </>
                        ) : (
                          <a
                            href={event.link1}
                            target="_blank"
                            className="w-full "
                          >
                            <h1 className="border-t pt-2 lg:text-xl md:text-lg text-md font-robot font-darkGray">
                              {event.title}
                            </h1>
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
