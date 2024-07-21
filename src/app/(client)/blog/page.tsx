"use client";
import { useEffect, useState } from "react";
import { BlogsData, EventsData } from "@/types";
import { getAllBlogs, getAllEvents } from "@/app/_action";
interface Props {
  blogs: BlogsData[];
  events: EventsData[];
}
export default function Blog() {
  const [data, setData] = useState<Props>();

  useEffect(() => {
    async function getData() {
      const blogData = await getAllBlogs().then((res) => res);
      const eventData = await getAllEvents().then((res) => res);

      setData({
        blogs: blogData as BlogsData[],
        events: eventData as EventsData[],
      });
    }
    getData();
  }, []);
  return (
    <>
      <div className="flex items-center min-h-screen lg:pt-0 md:pt-[20dvh] pt-[10dvh]">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 pb-16 w-[80vw] mx-auto  pt-8">
          {data?.blogs.length !== 0 ? (
            <div className="flex flex-col lg:border-r lg:border-b-0 border-b gap-y-4 lg:pb-0 pb-8 lg:pr-8 pr-0 border-darkGray border-dashed">
              <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold font-roboto">
                Blogs
              </h1>
              <div className="flex flex-col justify-end gap-y-2 ">
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
                <div className="flex flex-col justify-end gap-y-2">
                  {data?.events.map((event, index) => {
                    return (
                      <div key={index} className="flex gap-x-4">
                        {event.linktitle2 || event.linktitle3 ? (
                          <>
                            <span className="flex border-t pt-2 w-full items-center">
                              <h1 className="lg:text-xl md:text-lg text-md font-robot font-darkGray">
                                {event.name}
                              </h1>

                              <div>
                                {"("}
                                {event.linktitle1 ? (
                                  <a
                                    href={event.link1}
                                    target="_blank"
                                    className="underline lg:text-lg md:text-md text-sm font-robot font-darkGray"
                                  >
                                    {event.linktitle1}
                                    {event.linktitle2 || event.linktitle3
                                      ? ","
                                      : ""}
                                  </a>
                                ) : null}

                                {event.linktitle2 ? (
                                  <a
                                    href={event.link2}
                                    target="_blank"
                                    className="underline lg:text-lg md:text-md text-sm font-robot font-darkGray"
                                  >
                                    {event.linktitle2}
                                    {event.linktitle3 ? "," : ""}
                                  </a>
                                ) : null}
                                {event.linktitle3 ? (
                                  <a
                                    href={event.link3}
                                    target="_blank"
                                    className="underline lg:text-lg md:text-md text-sm font-robot font-darkGray"
                                  >
                                    {event.linktitle3}
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
                              {event.name}
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
