"use client";
import { useState, useEffect } from "react";
import { getCurrentUser } from "@/lib/session";
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
} from "@/app/_action";
import { IoTrashBinOutline } from "react-icons/io5";

export default function BlogsEvents() {
  const [blogsData, setBlogsData] = useState<any[]>([]);
  const [eventsData, setEventsData] = useState<any[]>([]);

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchUser() {
      const user = await getCurrentUser();
      setUser(user);
    }
    fetchUser();
  }, []);

  const [blog, setBlog] = useState<any>({
    id: 0,
    title: "",
    link: "",
    date: "",
  });
  const [event, setEvent] = useState<any>({
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
      if (res.length > 0) {
        setSelectedBlogId(res[0].id);
      }
    });
    getAllEvents().then((res) => {
      setEventsData(res);
      if (res.length > 0) {
        setSelectedEventId(res[0].id);
      }
    });
  }, []);

  useEffect(() => {
    getBlog(selectedBlogId).then((res) => {
      if (res) {
        setBlog(res);
      }
    });
    getEvent(selectedEventId).then((res) => {
      if (res) {
        setEvent(res);
      }
    });
  }, [selectedBlogId, selectedEventId]);

  return (
    <>
      <div className="flex justify-center min-h-screen w-full md:pt-[20dvh] pt-[15dvh]">
        <div className="lg:max-w-[65vw] md:max-w-[75vw] sm:max-w-[85vw] max-w-[95vw] left-0">
          <div className="flex flex-col gap-y-8">
            <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray">
              Blogs and Events Admin
            </h1>

            <div className="flex flex-col justify-between w-full gap-5 pb-[5rem]">
              <h3 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-left font-roboto font-semibold text-darkGray">
                Blogs
              </h3>
              <div className="grid grid-cols-2 space-y-4 border rounded-lg border-darkGray p-4">
                <div className="border-r border-lightGray pr-2">
                  <span
                    className={`${
                      newBlog ? "text-darkGray font-semibold" : "text-lightGray"
                    } cursor-pointer`}
                    onClick={() => {
                      setNewBlog(true);
                      setSelectedBlogId(0);
                      setBlog({
                        id: 0,
                        title: "",
                        link: "",
                        date: "",
                      });
                    }}
                  >
                    + Add New Blog
                  </span>
                  {blogsData ? (
                    <div className="flex flex-col gap-2">
                      {blogsData.map((blog, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center space-x-4"
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
                </div>

                <div className="flex flex-col gap-2 pl-4">
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
                  <button
                    onClick={() => {
                      if (newBlog) {
                        addBlog(blog);
                      } else {
                        updateBlog(selectedBlogId, blog);
                      }
                      getAllBlogs().then((res) => {
                        setBlogsData(res);
                      });
                      setBlog({
                        id: 0,
                        title: "",
                        link: "",
                        date: "",
                      });
                    }}
                    className="bg-darkGray text-white rounded-lg p-2"
                  >
                    {newBlog ? "Add" : "Update"}
                    <span className="pl-2">Blog</span>
                  </button>
                </div>
              </div>

              <h3 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-left font-roboto font-semibold text-darkGray">
                Events
              </h3>
              <div className="grid grid-cols-2 gap-5 border rounded-lg border-darkGray p-4">
                <div className="border-r border-lightGray pr-2">
                  <span
                    className={`${
                      newEvent
                        ? "text-darkGray font-semibold"
                        : "text-lightGray"
                    } cursor-pointer`}
                    onClick={() => {
                      setNewEvent(true);
                      setSelectedEventId(0);
                      setEvent({
                        id: 0,
                        name: "",
                        link1: "",
                        link2: "",
                        link3: "",
                        linktitle1: "",
                        linktitle2: "",
                        linktitle3: "",
                      });
                    }}
                  >
                    + Add New Event
                  </span>
                  {eventsData ? (
                    <div className="flex flex-col gap-2">
                      {eventsData.map((event, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center space-x-8"
                          >
                            <p
                              onClick={() => {
                                setSelectedEventId(event.id);
                              }}
                              className={`${
                                selectedEventId === event.id
                                  ? "text-darkGray font-semibold"
                                  : "text-lightGray"
                              } cursor-pointer`}
                            >
                              {event.name}
                            </p>
                            <span
                              onClick={() => {
                                deleteEvent(event.id);
                                getAllEvents().then((res) => {
                                  setEventsData(res);
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
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    value={event.name}
                    onChange={(e) => {
                      setEvent({ ...event, name: e.target.value });
                    }}
                    placeholder="Name"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2"
                  />
                  <input
                    type="text"
                    value={event.link1}
                    onChange={(e) => {
                      setEvent({ ...event, link1: e.target.value });
                    }}
                    placeholder="Link 1"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2"
                  />
                  <input
                    type="text"
                    value={event.linktitle1}
                    onChange={(e) => {
                      setEvent({ ...event, linktitle1: e.target.value });
                    }}
                    placeholder="Link Title 1"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2"
                  />
                  <input
                    type="text"
                    value={event.link2}
                    onChange={(e) => {
                      setEvent({ ...event, link2: e.target.value });
                    }}
                    placeholder="Link 2"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2"
                  />
                  <input
                    type="text"
                    value={event.linktitle2}
                    onChange={(e) => {
                      setEvent({ ...event, linktitle2: e.target.value });
                    }}
                    placeholder="Link Title 2"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2"
                  />
                  <input
                    type="text"
                    value={event.link3}
                    onChange={(e) => {
                      setEvent({ ...event, link3: e.target.value });
                    }}
                    placeholder="Link 3"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2"
                  />
                  <input
                    type="text"
                    value={event.linktitle3}
                    onChange={(e) => {
                      setEvent({ ...event, linktitle3: e.target.value });
                    }}
                    placeholder="Link Title 3"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2"
                  />

                  <button
                    onClick={() => {
                      if (newEvent) {
                        addEvent(event);
                      } else {
                        updateEvent(selectedEventId, event);
                      }
                      getAllEvents().then((res) => {
                        setEventsData(res);
                      });
                      setEvent({
                        id: 0,
                        name: "",
                        link1: "",
                        link2: "",
                        link3: "",
                        linktitle1: "",
                        linktitle2: "",
                        linktitle3: "",
                      });
                    }}
                    className="bg-darkGray text-white rounded-lg p-2"
                  >
                    {newEvent ? "Add" : "Update"}
                    <span className="pl-2">Event</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
