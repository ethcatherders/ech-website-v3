"use client";
import { useState, useEffect } from "react";
import { getCollection, getDocById } from "@/firebase/tools";
import { getDoc, doc, db } from "@/firebase/config";
import type {
  consdideredProposal,
  InfoForUpgrade,
  UpdatesData,
  VideosData,
  ResourcesData,
  BlogsData,
  EventsData,
  YoutubeLinks,
} from "@/types/page";
import Considered from "@/components/adminComponents/considered/page";
import Info from "@/components/adminComponents/info/page";
import Resources from "@/components/adminComponents/resources/page";
import Videos from "@/components/adminComponents/videos/page";
import Updates from "@/components/adminComponents/updates/page";
import Blogs from "@/components/adminComponents/blogs/page";
import Events from "@/components/adminComponents/events/page";
import YoutubeAdmin from "@/components/adminComponents/youtubeAdmin/page";
export default function Admin() {
  const [selectedPage, setSelectedPage] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [infoData, setInfoData] = useState<InfoForUpgrade>();
  const [blogData, setBlogsData] = useState<BlogsData[]>();
  const [eventsData, setEventsData] = useState<EventsData[]>();
  const [blogDoc, setBlogDoc] = useState<BlogsData>();
  const [youtubeLinks, setYoutubeLinks] = useState<YoutubeLinks[]>();
  const [ytLinkDoc, setYtLinkDoc] = useState<YoutubeLinks>();
  const [eventsDoc, setEventsDoc] = useState<EventsData>();
  const [updatesData, setUpdatesData] = useState<UpdatesData[]>();
  const [videosData, setVideosData] = useState<VideosData[]>();
  const [resourcesData, setResourcesData] = useState<ResourcesData[]>();
  const [upgradeNames, setUpgradeNames] = useState<string[]>([]);
  const [selectedUpgrade, setSelectedUpgrade] = useState<string>("");
  const [selectedUpdate, setSelectedUpdate] = useState<UpdatesData>();
  const [selectedVideo, setSelectedVideo] = useState<VideosData>();
  const [selectedResource, setSelectedResource] = useState<ResourcesData>();
  const [selectedConsidered, setSelectedConsidered] =
    useState<consdideredProposal>();
  const [selectedSection, setSelectedSection] = useState<string>("");

  useEffect(() => {
    async function getData() {
      const doc9 = await getCollection("Youtube", "YoutubeLinks", "Links");
      setYoutubeLinks(doc9 as YoutubeLinks[]);
      if (selectedUpgrade) {
        const doc = await getCollection(
          "network_upgrades",
          selectedUpgrade,
          "considered"
        );
        const doc3 = await getDocById(
          "network_upgrades",
          selectedUpgrade,
          "info",
          selectedUpgrade
        );
        const doc4 = await getCollection(
          "network_upgrades",
          selectedUpgrade,
          "updates"
        );
        const doc5 = await getCollection(
          "network_upgrades",
          selectedUpgrade,
          "videos"
        );
        const doc6 = await getCollection(
          "network_upgrades",
          selectedUpgrade,
          "resources"
        );

        if (doc3) {
          setInfoData(doc3 as InfoForUpgrade);
        } else {
          console.log("No data found");
        }
        if (doc) {
          setData(doc);
        } else {
          console.log("No data found");
        }
        if (doc4) {
          setUpdatesData(doc4 as UpdatesData[]);
        } else {
          console.log("No data found");
        }
        if (doc5) {
          setVideosData(doc5 as VideosData[]);
        } else {
          console.log("No data found");
        }
        if (doc6) {
          setResourcesData(doc6 as ResourcesData[]);
        } else {
          console.log("No data found");
        }
      }

      if (selectedSection === "Blogs") {
        const doc7 = await getCollection("blogs", "blogsPage", "blogs");
        setBlogsData(doc7 as BlogsData[]);
      }
      if (selectedSection === "Events") {
        const doc8 = await getCollection("blogs", "blogsPage", "events");
        setEventsData(doc8 as EventsData[]);
      }
      const doc2 = await getDoc(doc(db, "network_upgrades", "upgrades"));
      if (doc2) {
        setUpgradeNames(doc2?.data()?.upgrades);
      } else {
        console.log("No data found");
      }
    }
    getData();
  }, [selectedUpgrade, selectedSection]);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen pt-[10dvh] px-16">
        <div className="px-6 border-r flex flex-col border-darkGray">
          <span
            onClick={() => {
              setSelectedPage("NetworkUpgrades");
              setSelectedUpgrade("");
              setSelectedSection("");
              setSelectedConsidered(undefined);
              setSelectedUpdate(undefined);
              setSelectedVideo(undefined);
              setSelectedResource(undefined);
              setBlogDoc(undefined);
              setEventsDoc(undefined);
              setYtLinkDoc(undefined);
            }}
            className={` ${
              selectedPage === "NetworkUpgrades"
                ? "text-darkGray"
                : "text-lightGray"
            } text-2xl hover:cursor-pointer`}
          >
            Network Upgrades
          </span>
          <span
            onClick={() => {
              setSelectedPage("Blog");
              setSelectedUpgrade("");
              setSelectedSection("");
              setSelectedConsidered(undefined);
              setSelectedUpdate(undefined);
              setSelectedVideo(undefined);
              setSelectedResource(undefined);
              setBlogDoc(undefined);
              setEventsDoc(undefined);
              setYtLinkDoc(undefined);
            }}
            className={` ${
              selectedPage === "Blog" ? "text-darkGray" : "text-lightGray"
            } text-2xl hover:cursor-pointer`}
          >
            Blog
          </span>

          <span
            onClick={() => {
              setSelectedPage("Youtube");
              setSelectedUpgrade("");
              setSelectedSection("");
              setSelectedConsidered(undefined);
              setSelectedUpdate(undefined);
              setSelectedVideo(undefined);
              setSelectedResource(undefined);
              setBlogDoc(undefined);
              setEventsDoc(undefined);
              setYtLinkDoc(undefined);
            }}
            className={` ${
              selectedPage === "Youtube" ? "text-darkGray" : "text-lightGray"
            } text-2xl hover:cursor-pointer`}
          >
            Youtube
          </span>
        </div>

        <div className="border-r border-darkGray px-6 ">
          {selectedPage === "Youtube" && (
            <>
              <div className="flex flex-col gap-y-2">
                <div className="flex flex-col gap-y-4">
                  {youtubeLinks?.map((item, index) => {
                    return (
                      <span
                        key={index}
                        className={`${
                          selectedUpdate?.title === item.title
                            ? "text-darkGray"
                            : "text-lightGray"
                        } text-xl  text-wrap hover:cursor-pointer`}
                        onClick={() => {
                          setYtLinkDoc(item);
                        }}
                      >
                        {item.title}
                      </span>
                    );
                  })}
                </div>
                <span>
                  <input
                    type="text"
                    placeholder="New Link Title"
                    onChange={(e) =>
                      setYtLinkDoc({
                        ...ytLinkDoc,
                        title: e.target.value,
                        link: "",
                      })
                    }
                    className="border border-darkGray p-4"
                  />
                </span>
              </div>
            </>
          )}
        </div>

        <div className="px-6">
          {ytLinkDoc && <YoutubeAdmin documentData={ytLinkDoc} />}
        </div>

        <div className="border-r border-darkGray px-6 ">
          {selectedPage === "Blog" && (
            <>
              <div className="flex flex-col gap-y-2">
                <span
                  onClick={() => {
                    setSelectedSection("Blogs");
                    setSelectedConsidered(undefined);
                    setSelectedUpdate(undefined);
                    setSelectedVideo(undefined);
                    setSelectedResource(undefined);
                    setBlogDoc(undefined);
                    setEventsDoc(undefined);
                  }}
                  className={` ${
                    selectedSection === "Blogs"
                      ? "text-darkGray"
                      : "text-lightGray"
                  } text-3xl hover:cursor-pointer`}
                >
                  Blogs
                </span>
                <span
                  onClick={() => {
                    setSelectedSection("Events");
                    setSelectedConsidered(undefined);
                    setSelectedUpdate(undefined);
                    setSelectedVideo(undefined);
                    setSelectedResource(undefined);
                    setBlogDoc(undefined);
                    setEventsDoc(undefined);
                  }}
                  className={` ${
                    selectedSection === "Events"
                      ? "text-darkGray"
                      : "text-lightGray"
                  } text-3xl hover:cursor-pointer`}
                >
                  Events
                </span>
              </div>
            </>
          )}
        </div>

        {selectedSection === "Blogs" && (
          <div className="flex flex-col gap-y-8 px-6">
            <div className="flex flex-col gap-y-4">
              {blogData?.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={`${
                      selectedUpdate?.title === item.title
                        ? "text-darkGray"
                        : "text-lightGray"
                    } text-xl  text-wrap hover:cursor-pointer`}
                    onClick={() => {
                      setBlogDoc(item);
                    }}
                  >
                    {item.title}
                  </span>
                );
              })}
            </div>
            <span>
              <input
                type="text"
                placeholder="New Blog Title"
                onChange={(e) =>
                  setBlogDoc({
                    ...blogDoc,
                    title: e.target.value,
                    link: "",
                    date: "",
                  })
                }
                className="border border-darkGray p-4"
              />
            </span>
          </div>
        )}

        {selectedSection === "Events" && (
          <div className="flex flex-col gap-y-8 px-6">
            <div className="flex flex-col gap-y-4">
              {eventsData?.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={`${
                      selectedUpdate?.title === item.title
                        ? "text-darkGray"
                        : "text-lightGray"
                    } text-xl  text-wrap hover:cursor-pointer`}
                    onClick={() => {
                      setEventsDoc(item);
                    }}
                  >
                    {item.title}
                  </span>
                );
              })}
            </div>
            <span>
              <input
                type="text"
                placeholder="New Event Title"
                onChange={(e) =>
                  setEventsDoc({
                    ...eventsDoc,
                    title: e.target.value,
                    linkTitle1: "",
                    link1: "",
                    linkTitle2: "",
                    link2: "",
                    linkTitle3: "",
                    link3: "",
                  })
                }
                className="border border-darkGray p-4"
              />
            </span>
          </div>
        )}

        {blogDoc && <Blogs documentData={blogDoc} />}
        {eventsDoc && <Events documentData={eventsDoc} />}

        <div className="border-r border-darkGray px-6">
          {selectedPage === "NetworkUpgrades" && (
            <>
              <div className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-4">
                  {upgradeNames.map((item, index) => {
                    return (
                      <span
                        key={index}
                        onClick={() => {
                          setSelectedUpgrade(item);
                          setSelectedSection("");
                          setSelectedConsidered(undefined);
                          setSelectedUpdate(undefined);
                          setSelectedVideo(undefined);
                          setSelectedResource(undefined);
                        }}
                        className={` ${
                          selectedUpgrade === item
                            ? "text-darkGray"
                            : "text-lightGray"
                        } text-3xl hover:cursor-pointer`}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </span>
                    );
                  })}
                </div>

                <span>
                  <input
                    type="text"
                    placeholder="Add New Upgrade"
                    onChange={(e) => {
                      setSelectedUpgrade(e.target.value);
                      setSelectedSection("");
                      setSelectedConsidered(undefined);
                      setSelectedUpdate(undefined);
                      setSelectedVideo(undefined);
                      setSelectedResource(undefined);
                    }}
                    className="border border-darkGray p-4"
                  />
                </span>
              </div>
            </>
          )}
        </div>

        <div className="px-6 border-r border-darkGray flex flex-col gap-y-4">
          {selectedUpgrade && (
            <>
              <span
                onClick={() => {
                  setSelectedSection("info");
                  setSelectedConsidered(undefined);
                  setSelectedUpdate(undefined);
                  setSelectedVideo(undefined);
                  setSelectedResource(undefined);
                }}
                className={` ${
                  selectedSection === "info"
                    ? "text-darkGray"
                    : "text-lightGray"
                } text-2xl hover:cursor-pointer`}
              >
                Info
              </span>

              <span
                onClick={() => {
                  setSelectedSection("considered");
                  setSelectedConsidered(undefined);
                  setSelectedUpdate(undefined);
                  setSelectedVideo(undefined);
                  setSelectedResource(undefined);
                }}
                className={` ${
                  selectedSection === "considered"
                    ? "text-darkGray"
                    : "text-lightGray"
                } text-2xl hover:cursor-pointer`}
              >
                Considered
              </span>

              <span
                onClick={() => {
                  setSelectedSection("updates");
                  setSelectedConsidered(undefined);
                  setSelectedUpdate(undefined);
                  setSelectedVideo(undefined);
                  setSelectedResource(undefined);
                }}
                className={` ${
                  selectedSection === "updates"
                    ? "text-darkGray"
                    : "text-lightGray"
                } text-2xl hover:cursor-pointer`}
              >
                Updates
              </span>

              <span
                onClick={() => {
                  setSelectedSection("videos");
                  setSelectedConsidered(undefined);
                  setSelectedUpdate(undefined);
                  setSelectedVideo(undefined);
                  setSelectedResource(undefined);
                }}
                className={` ${
                  selectedSection === "videos"
                    ? "text-darkGray"
                    : "text-lightGray"
                } text-2xl hover:cursor-pointer`}
              >
                Videos
              </span>

              <span
                onClick={() => {
                  setSelectedSection("resources");
                  setSelectedConsidered(undefined);
                  setSelectedUpdate(undefined);
                  setSelectedVideo(undefined);
                  setSelectedResource(undefined);
                }}
                className={` ${
                  selectedSection === "resources"
                    ? "text-darkGray"
                    : "text-lightGray"
                } text-2xl hover:cursor-pointer`}
              >
                Resources
              </span>
            </>
          )}
        </div>

        <div className=" border-r border-darkGray">
          {selectedSection === "updates" && (
            <div className="flex flex-col gap-y-8 px-6">
              <div className="flex flex-col gap-y-4">
                {updatesData?.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={`${
                        selectedUpdate?.title === item.title
                          ? "text-darkGray"
                          : "text-lightGray"
                      } text-xl  text-wrap hover:cursor-pointer`}
                      onClick={() => {
                        setSelectedUpdate(item);
                      }}
                    >
                      {item.title}
                    </span>
                  );
                })}
              </div>
              <span>
                <input
                  type="text"
                  placeholder="New Update Title"
                  onChange={(e) =>
                    setSelectedUpdate({
                      ...selectedUpdate,
                      title: e.target.value,
                      date: "",
                      linkTitle: "",
                      link: "",
                    })
                  }
                  className="border border-darkGray p-4"
                />
              </span>
            </div>
          )}
        </div>

        <div className=" border-r border-darkGray">
          {selectedSection === "videos" && (
            <div className="flex flex-col gap-y-8 px-6">
              <div className="flex flex-col gap-y-4">
                {videosData?.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={`${
                        selectedResource?.title === item.title
                          ? "text-darkGray"
                          : "text-lightGray"
                      } text-xl  text-wrap hover:cursor-pointer`}
                      onClick={() => {
                        setSelectedResource(item);
                      }}
                    >
                      {item.title}
                    </span>
                  );
                })}
              </div>
              <span>
                <input
                  type="text"
                  placeholder="New Video Title"
                  onChange={(e) =>
                    setSelectedVideo({
                      ...selectedVideo,
                      title: e.target.value,
                      link: "",
                    })
                  }
                  className="border border-darkGray p-4"
                />
              </span>
            </div>
          )}
        </div>

        <div className="border-r border-darkGray">
          {selectedSection === "resources" && (
            <div className="flex flex-col gap-y-8 px-6 ">
              <div className="flex flex-col gap-y-4">
                {resourcesData?.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={`${
                        selectedResource?.title === item.title
                          ? "text-darkGray"
                          : "text-lightGray"
                      } text-xl  text-wrap hover:cursor-pointer`}
                      onClick={() => {
                        setSelectedResource(item);
                      }}
                    >
                      {item.title}
                    </span>
                  );
                })}
              </div>
              <span>
                <input
                  type="text"
                  placeholder="New Resource Title"
                  onChange={(e) =>
                    setSelectedResource({
                      ...selectedResource,
                      title: e.target.value,
                      link: "",
                    })
                  }
                  className="border border-darkGray p-4"
                />
              </span>
            </div>
          )}
        </div>

        <div className="px-6">
          {selectedSection === "info" && (
            <>
              <Info
                upgradeName={selectedUpgrade}
                documentData={infoData as InfoForUpgrade}
                allUpgrades={upgradeNames}
              />
            </>
          )}
        </div>

        <div className="px-6">
          {selectedUpdate && (
            <>
              <Updates
                upgradeName={selectedUpgrade}
                documentData={selectedUpdate as UpdatesData}
                allUpgrades={upgradeNames}
              />
            </>
          )}
        </div>

        <div className="px-6">
          {selectedVideo && (
            <>
              <Videos
                upgradeName={selectedUpgrade}
                documentData={selectedVideo as VideosData}
                allUpgrades={upgradeNames}
              />
            </>
          )}
        </div>

        <div className="px-6">
          {selectedResource && (
            <>
              <Resources
                upgradeName={selectedUpgrade}
                documentData={selectedResource as ResourcesData}
                allUpgrades={upgradeNames}
              />
            </>
          )}
        </div>

        <div className="border-r border-darkGray">
          {selectedSection === "considered" && (
            <div className="flex flex-col gap-y-8 pr-6">
              <div className="flex flex-col gap-y-4">
                {data.map((item: consdideredProposal, index) => {
                  console.log(item);
                  return (
                    <span
                      key={index}
                      className={`${
                        selectedConsidered?.title === item.title
                          ? "text-darkGray"
                          : "text-lightGray"
                      } text-xl  text-wrap hover:cursor-pointer`}
                      onClick={() => {
                        setSelectedConsidered(item);
                      }}
                    >
                      {item.title}
                    </span>
                  );
                })}
              </div>
              <span>
                <input
                  type="text"
                  placeholder="New Considered Title"
                  onChange={(e) =>
                    setSelectedConsidered({
                      ...selectedConsidered,
                      title: e.target.value,
                      videoLink: "",
                      proposalLink: "",
                      discussionLink: "",
                      description: "",
                    })
                  }
                  className="border border-darkGray p-4"
                />
              </span>
            </div>
          )}
        </div>

        <div className="px-6">
          {selectedConsidered && (
            <Considered
              upgradeName={selectedUpgrade}
              documentData={selectedConsidered}
              allUpgrades={upgradeNames}
            />
          )}
        </div>
      </div>
    </>
  );
}
