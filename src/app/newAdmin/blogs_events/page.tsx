"use client";
import { useState, useEffect } from "react";
import {
  getBlog,
  getEvent,
  getAllBlogs,
  getAllEvents,
  addBlog,
  addEvent,
  deleteBlog,
  deleteEvent,
  updateBlog,
  updateEvent,
} from ".././../_action";
import { IoTrashBinOutline } from "react-icons/io5";

export default function BlogsEvents() {
  const [blogsData, setBlogsData] = useState<any[]>([]);
  const [eventsData, setEventsData] = useState<any[]>([]);

  const [blog, setBlog] = useState<{
    id: number;
    title: string;
    link: string;
    date: string;
  }>({
    id: 0,
    title: "",
    link: "",
    date: "",
  });
  const [event, setEvent] = useState<{
    id: number;
    name: string;
    link1: string;
    link2: string;
    link3: string;
    linktitle1: string;
    linktitle2: string;
    linktitle3: string;
  }>({
    id: 0,
    name: "",
    link1: "",
    link2: "",
    link3: "",
    linktitle1: "",
    linktitle2: "",
    linktitle3: "",
  });

  const [newBlog, setNewBlog] = useState(false);
  const [newEvent, setNewEvent] = useState(false);

  const [selectedBlogId, setSelectedBlogId] = useState(0);
  const [selectedEventId, setSelectedEventId] = useState(0);

  useEffect(() => {
    getAllBlogs().then((res) => {
      setBlogsData(res);
      setSelectedBlogId(res[0].id);
    });
    getAllEvents().then((res) => {
      setEventsData(res);
      setSelectedEventId(res[0].id);
    });
  }, []);

  useEffect(() => {
    getBlog(selectedBlogId).then((res) => {
      if (res) {
        setBlog(res);
      }
    });
  });
  return (
    <>
      <div className="flex justify-center min-h-screen w-full md:pt-[20dvh] pt-[15dvh]">
        <div className="lg:max-w-[65vw] md:max-w-[75vw] sm:max-w-[85vw] max-w-[95vw] left-0">
          <div className="flex flex-col space-y-4">
            <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray">
              Blogs and Events Admin
            </h1>

            <div className="flex">
              <div className="flex flex-col space-y-4 border rounded-lg border-darkGray p-4">
                {blogsData ? (
                  <div className="flex flex-col gap-2">
                    {blogsData.map((blog, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-8"
                        >
                          <p
                            onClick={() => {
                              setSelectedBlogId(blog.id);
                            }}
                            className={`${
                              selectedBlogId === blog.id
                                ? "text-darkGray font-semibold"
                                : "text-lightGray"
                            } cursor-pointer`}
                          >
                            {blog.title}
                          </p>
                          <span
                            onClick={() => {
                              deleteBlog(blog.id);
                              getAllBlogs().then((res) => {
                                setBlogsData(res);
                              });
                            }}
                            className="cursor-pointer"
                          >
                            <IoTrashBinOutline size={15} />
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
                <input
                  type="text"
                  value={blog.title}
                  onChange={(e) => {
                    setBlog({ ...blog, title: e.target.value });
                  }}
                  placeholder="Title"
                  className="border border-lightGray focus:border-darkGray rounded-lg p-2"
                />
                <input
                  type="text"
                  value={blog.link}
                  onChange={(e) => {
                    setBlog({ ...blog, link: e.target.value });
                  }}
                  placeholder="Link"
                  className="border border-lightGray focus:border-darkGray rounded-lg p-2"
                />
                <input
                  type="text"
                  value={blog.date}
                  onChange={(e) => {
                    setBlog({ ...blog, date: e.target.value });
                  }}
                  placeholder="Date"
                  className="border border-lightGray focus:border-darkGray rounded-lg p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
