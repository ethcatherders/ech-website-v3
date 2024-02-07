"use client";
import { useState, useEffect } from "react";
import {
  getAllYoutubeVideos,
  addYoutubeVideo,
  deleteYoutubeVideo,
  updateYoutubeVideo,
  getYoutubeVideo,
} from "../../_action";
import { IoTrashBinOutline } from "react-icons/io5";
export default function YoutubeAdmin() {
  const [youtubeData, setYoutubeData] = useState<any[]>([]);

  const [yt, setYt] = useState<{
    id: number;
    title: string;
    link: string;
  }>({
    id: 0,
    title: "",
    link: "",
  });

  const [newYTLink, setnewYTLink] = useState(false);

  const [selectedYtLinkId, setSelectedYtLinkId] = useState(0);

  useEffect(() => {
    getAllYoutubeVideos().then((res) => {
      setYoutubeData(res);
      if (res.length > 0) {
        setSelectedYtLinkId(res[0].id);
      }
    });
  }, []);

  useEffect(() => {
    getYoutubeVideo(selectedYtLinkId).then((res) => {
      if (res) {
        setYt(res);
      }
    });
  }, [selectedYtLinkId]);

  return (
    <>
      <div className="flex justify-center min-h-screen w-full md:pt-[20dvh] pt-[15dvh]">
        <div className="lg:max-w-[65vw] md:max-w-[75vw] sm:max-w-[85vw] max-w-[95vw] left-0">
          <div className="flex flex-col gap-y-8">
            <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray">
              ECH Youtube Admin
            </h1>

            <div className="border-b border-lightGray pb-2 flex flex-col gap-2">
              <span
                className={`${
                  newYTLink ? "text-darkGray font-semibold" : "text-lightGray"
                } cursor-pointer`}
                onClick={() => {
                  setnewYTLink(true);
                  setSelectedYtLinkId(0);
                  setYt({
                    id: 0,
                    title: "",
                    link: "",
                  });
                }}
              >
                + Add New YT Video
              </span>
              {youtubeData ? (
                <div className="flex flex-col gap-2">
                  {youtubeData.map((video, index) => {
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <p
                          onClick={() => {
                            setSelectedYtLinkId(video.id);
                          }}
                          className={`${
                            selectedYtLinkId === video.id
                              ? "text-darkGray font-semibold"
                              : "text-lightGray"
                          } cursor-pointer`}
                        >
                          {video.title}
                        </p>
                        <span
                          onClick={() => {
                            deleteYoutubeVideo(video.id);
                            getAllYoutubeVideos().then((res) => {
                              setYoutubeData(res);
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
                value={yt.title}
                onChange={(e) => {
                  setYt({ ...yt, title: e.target.value });
                }}
                placeholder="Title"
                className="border border-lightGray focus:border-darkGray rounded-lg p-2"
              />
              <input
                type="text"
                value={yt.link}
                onChange={(e) => {
                  setYt({ ...yt, link: e.target.value });
                }}
                placeholder="Link"
                className="border border-lightGray focus:border-darkGray rounded-lg p-2"
              />

              <button
                onClick={() => {
                  if (newYTLink) {
                    addYoutubeVideo(yt);
                  } else {
                    updateYoutubeVideo(selectedYtLinkId, yt);
                  }
                  getAllYoutubeVideos().then((res) => {
                    setYoutubeData(res);
                  });
                  setYt({
                    id: 0,
                    title: "",
                    link: "",
                  });
                }}
                className="bg-darkGray text-white rounded-lg p-2"
              >
                {newYTLink ? "Add" : "Update"}
                <span className="pl-2">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
