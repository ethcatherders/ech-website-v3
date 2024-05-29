"use client";
import {
  createUpgrade,
  getAllUpgrades,
  getUpgrade,
  updateUpgrade,
  deleteUpgrade,
  addResourceToUpgrade,
  updateResourceFromUpgrade,
  deleteResourceFromUpgrade,
  deleteConsideredProposalFromUpgrade,
  updateConsideredProposalFromUpgrade,
  addConsideredProposalToUpgrade,
  addUpdatetoUpgrade,
  deleteUpdateFromUpgrade,
  updateUpdateFromUpgrade,
  addVideoToUpgrade,
  deleteVideoFromUpgrade,
  updateVideoFromUpgrade,
} from "@/app/_action";
import { IoTrashBinOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function NetworkUpgrades() {
  const [upgrades, setUpgrades] = useState<any[]>([]);
  const [upgradeData, setUpgradeData] = useState<any>();

  const [selectedUpgrade, setSelectedUpgrade] = useState("");
  const [selectedResource, setSelectedResource] = useState("");
  const [selectedProposal, setSelectedProposal] = useState("");
  const [selectedUpdate, setSelectedUpdate] = useState("");
  const [selectedYtLink, setSelectedYtLink] = useState("");

  const [newResource, setNewResource] = useState(true);
  const [newUpgradeName, setNewUpgradeName] = useState("");
  const [newProposal, setNewProposal] = useState(true);
  const [newYtLink, setNewYtLink] = useState(true);
  const [newUpdate, setNewUpdate] = useState(true);

  const [proposal, setProposal] = useState<{
    id: number;
    name: string;
    description: string;
    discussionLink: string;
    proposalLink: string;
    videoLink: string;
    eipName: string;
  }>({
    id: 0,
    name: "",
    description: "",
    discussionLink: "",
    proposalLink: "",
    videoLink: "",
    eipName: ""
  });
  const [info, setInfo] = useState<{
    desc1: string;
    desc2: string;
    embedLink: string;
  }>({ desc1: "", desc2: "", embedLink: "" });
  const [resource, setResource] = useState<{
    resourceId: number;
    link: string;
    title: string;
  }>({
    resourceId: 0,
    link: "",
    title: "",
  });
  const [update, setUpdate] = useState<{
    id: number;
    link: string;
    title: string;
    linkTitle: string;
    date: string;
  }>({ id: 0, link: "", title: "", linkTitle: "", date: "" });
  const [ytLink, setYtLink] = useState<{
    id: number;
    link: string;
    title: string;
  }>({
    id: 0,
    link: "",
    title: "",
  });

  useEffect(() => {
    getAllUpgrades().then((res: any) => {
      setUpgrades(res);
    });
  }, []);

  useEffect(() => {
    getUpgrade(selectedUpgrade).then((res: any) => {
      setUpgradeData(res);
      setInfo({
        desc1: res?.desc1,
        desc2: res?.desc2,
        embedLink: res?.embedLink,
      });
    });
  }, [selectedUpgrade]);

  return (
    <>
      <div className="flex justify-center min-h-screen w-full md:pt-[20dvh] pt-[15dvh]">
        <div className="lg:max-w-[65vw] md:max-w-[75vw] sm:max-w-[85vw] max-w-[95vw] left-0">
          <div className="flex flex-col space-y-4">
            <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray">
              Network Upgrades Admin
            </h1>
            <div className="flex flex-col gap-5 py-8">
              <div className="flex flex-col space-y-4 border p-4 rounded-lg border-lightGray">
                {upgrades.length > 0 ? (
                  <div className="flex flex-col gap-2">
                    {upgrades.map((upgrade, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-8"
                        >
                          <p
                            onClick={() => {
                              setSelectedUpgrade(upgrade.name.toLowerCase());
                            }}
                            className={`${
                              selectedUpgrade === upgrade.name.toLowerCase()
                                ? "text-darkGray font-semibold"
                                : "text-lightGray"
                            } cursor-pointer`}
                          >
                            {upgrade.name.toUpperCase()}
                          </p>
                          <span
                            onClick={() => {
                              deleteUpgrade(upgrade.name.toLowerCase());
                              getAllUpgrades().then((res) => {
                                setUpgrades(res);
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
                <div className="flex">
                  <input
                    type="text"
                    value={newUpgradeName}
                    onChange={(e) => {
                      setNewUpgradeName(e.target.value);
                    }}
                    placeholder="Upgrade Name"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2"
                  />
                  <button
                    onClick={() => {
                      createUpgrade(newUpgradeName.toLowerCase());
                      setNewUpgradeName("");
                      getAllUpgrades().then((res) => {
                        setUpgrades(res);
                      });
                    }}
                    className="bg-darkGray text-white rounded-lg p-2 ml-2"
                  >
                    Create Upgrade
                  </button>
                </div>
              </div>

              {upgradeData && (
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-4 border p-4 gap-5 rounded-lg border-lightGray ">
                  <div className="flex flex-col space-y-4 border rounded-lg border-darkGray p-4">
                    <textarea
                      value={info.desc1}
                      onChange={(e) => {
                        setInfo({ ...info, desc1: e.target.value });
                      }}
                      rows={5}
                      placeholder="Description 1"
                      className="border border-lightGray focus:border-darkGray rounded-lg p-2 "
                    />
                    <textarea
                      value={info.desc2}
                      onChange={(e) => {
                        setInfo({ ...info, desc2: e.target.value });
                      }}
                      rows={5}
                      placeholder="Description 2"
                      className="border border-lightGray focus:border-darkGray rounded-lg p-2"
                    />
                    <input
                      type="text"
                      value={info.embedLink}
                      onChange={(e) => {
                        setInfo({ ...info, embedLink: e.target.value });
                      }}
                      placeholder="Embed Link"
                      className="border border-lightGray focus:border-darkGray rounded-lg p-2"
                    />
                    <button
                      onClick={() => {
                        updateUpgrade(selectedUpgrade, info);
                        setInfo({ desc1: "", desc2: "", embedLink: "" });
                      }}
                      className="bg-darkGray text-white rounded-lg p-2"
                    >
                      Update Info
                    </button>
                  </div>

                  <div className="flex flex-col space-y-4 p-4 border rounded-lg border-darkGray">
                    {upgradeData.consideredProposals.length > 0 && (
                      <>
                        <div className="flex flex-col gap-y-2">
                          {upgradeData.consideredProposals.map(
                            (proposal: any, index: any) => {
                              return (
                                <div
                                  key={index}
                                  className="flex space-x-6 items-center"
                                >
                                  <p
                                    className={`${
                                      selectedProposal === proposal.title
                                        ? "text-darkGray font-semibold"
                                        : "text-lightGray"
                                    } cursor-pointer`}
                                    onClick={() => {
                                      setSelectedProposal(proposal.title);
                                      setProposal({
                                        id: proposal.id,
                                        name: proposal.name,
                                        description: proposal.description,
                                        discussionLink: proposal.discussionLink,
                                        proposalLink: proposal.proposalLink,
                                        videoLink: proposal.videoLink,
                                        eipName: proposal.eipName
                                      });
                                      setNewProposal(false);
                                    }}
                                  >
                                    {proposal.name}
                                  </p>
                                  <span
                                    onClick={() => {
                                      deleteConsideredProposalFromUpgrade(
                                        proposal.id
                                      );
                                      getUpgrade(selectedUpgrade).then(
                                        (res) => {
                                          setUpgradeData(res);
                                        }
                                      );
                                      setProposal({
                                        id: 0,
                                        name: "",
                                        description: "",
                                        discussionLink: "",
                                        proposalLink: "",
                                        videoLink: "",
                                        eipName: ""
                                      });
                                    }}
                                    className="cursor-pointer"
                                  >
                                    <IoTrashBinOutline size={15} />
                                  </span>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </>
                    )}

                    <span
                      className={`${
                        newProposal
                          ? "text-darkGray font-semibold"
                          : "text-lightGray"
                      } cursor-pointer`}
                      onClick={() => {
                        setNewProposal(true);
                        setSelectedProposal("");
                        setProposal({
                          id: 0,
                          name: "",
                          description: "",
                          discussionLink: "",
                          proposalLink: "",
                          videoLink: "",
                          eipName: ""
                        });
                      }}
                    >
                      + Add New Proposal
                    </span>

                    <div className="flex flex-col gap-y-2">
                      <input
                        type="text"
                        value={proposal.name}
                        onChange={(e) => {
                          setProposal({ ...proposal, name: e.target.value });
                        }}
                        placeholder="EIP Number"
                        className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-64"
                      />
                      <input
                        type="text"
                        value={proposal.eipName}
                        onChange={(e) => {
                          setProposal({ ...proposal, eipName: e.target.value });
                        }}
                        placeholder="EIP Name"
                        className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-64"
                      />
                      <textarea
                        value={proposal.description}
                        onChange={(e) => {
                          setProposal({
                            ...proposal,
                            description: e.target.value,
                          });
                        }}
                        placeholder="Description"
                        className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-64"
                      />
                      <input
                        type="text"
                        value={proposal.discussionLink}
                        onChange={(e) => {
                          setProposal({
                            ...proposal,
                            discussionLink: e.target.value,
                          });
                        }}
                        placeholder="Discussion Lnk"
                        className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-64"
                      />
                      <input
                        type="text"
                        value={proposal.proposalLink}
                        onChange={(e) => {
                          setProposal({
                            ...proposal,
                            proposalLink: e.target.value,
                          });
                        }}
                        placeholder="Proposal Lnk"
                        className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-64"
                      />
                      <input
                        type="text"
                        value={proposal.videoLink}
                        onChange={(e) => {
                          setProposal({
                            ...proposal,
                            videoLink: e.target.value,
                          });
                        }}
                        placeholder="Video Lnk"
                        className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-64"
                      />
                      <button
                        onClick={() => {
                          if (newProposal) {
                            addConsideredProposalToUpgrade(upgradeData.id, {
                              name: proposal.name,
                              description: proposal.description,
                              discussionLink: proposal.discussionLink,
                              proposalLink: proposal.proposalLink,
                              videoLink: proposal.videoLink,
                              eipName: proposal.eipName
                            });
                          } else {
                            updateConsideredProposalFromUpgrade(proposal.id, {
                              name: proposal.name,
                              description: proposal.description,
                              discussionLink: proposal.discussionLink,
                              proposalLink: proposal.proposalLink,
                              videoLink: proposal.videoLink,
                              eipName: proposal.eipName
                            });
                          }
                          getUpgrade(selectedUpgrade).then((res) => {
                            setUpgradeData(res);
                          });
                          setProposal({
                            id: 0,
                            name: "",
                            description: "",
                            discussionLink: "",
                            proposalLink: "",
                            videoLink: "",
                            eipName: ""
                          });
                        }}
                        className="bg-darkGray text-white rounded-lg p-2"
                      >
                        {newProposal ? "Add" : "Update"}
                        <span className="pl-2">Proposal</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4 p-4 border border-darkGray rounded-lg">
                    {upgradeData.resources.length > 0 && (
                      <>
                        <div className="flex flex-col gap-y-2">
                          {upgradeData.resources.map(
                            (resource: any, index: any) => {
                              return (
                                <div
                                  key={index}
                                  className="flex space-x-6 items-center"
                                >
                                  <p
                                    className={`${
                                      selectedResource === resource.title
                                        ? "text-darkGray font-semibold"
                                        : "text-lightGray"
                                    } cursor-pointer`}
                                    onClick={() => {
                                      setSelectedResource(resource.title);
                                      setResource({
                                        resourceId: resource.id,
                                        link: resource.link,
                                        title: resource.title,
                                      });
                                      setNewResource(false);
                                    }}
                                  >
                                    {resource.title}
                                  </p>
                                  <span
                                    onClick={() => {
                                      deleteResourceFromUpgrade(resource.id);
                                      getUpgrade(selectedUpgrade).then(
                                        (res) => {
                                          setUpgradeData(res);
                                        }
                                      );
                                      setResource({
                                        resourceId: 0,
                                        link: "",
                                        title: "",
                                      });
                                    }}
                                    className="cursor-pointer"
                                  >
                                    <IoTrashBinOutline size={15} />
                                  </span>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </>
                    )}

                    <span
                      className={`${
                        newResource
                          ? "text-darkGray font-semibold"
                          : "text-lightGray"
                      } cursor-pointer`}
                      onClick={() => {
                        setNewResource(true);
                        setSelectedResource("");
                        setResource({ resourceId: 0, link: "", title: "" });
                      }}
                    >
                      + Add New Resource
                    </span>

                    <div className="flex flex-col gap-y-2">
                      <input
                        type="text"
                        value={resource.title}
                        onChange={(e) => {
                          setResource({ ...resource, title: e.target.value });
                        }}
                        placeholder="Link Title"
                        className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-64"
                      />
                      <input
                        type="text"
                        value={resource.link}
                        onChange={(e) => {
                          setResource({ ...resource, link: e.target.value });
                        }}
                        placeholder="Link"
                        className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-64"
                      />
                      <button
                        onClick={() => {
                          if (newResource) {
                            addResourceToUpgrade(upgradeData.id, {
                              title: resource.title,
                              link: resource.link,
                            });
                          } else {
                            updateResourceFromUpgrade(resource.resourceId, {
                              title: resource.title,
                              link: resource.link,
                            });
                          }
                          getUpgrade(selectedUpgrade).then((res) => {
                            setUpgradeData(res);
                          });
                          setResource({ resourceId: 0, link: "", title: "" });
                        }}
                        className="bg-darkGray text-white rounded-lg p-2"
                      >
                        {newResource ? "Add" : "Update"}
                        <span className="pl-2">Resource</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4 p-4 border rounded-lg border-darkGray py-2">
                    {upgradeData.updates.length > 0 && (
                      <>
                        <div className="flex flex-col gap-y-2">
                          {upgradeData.updates.map(
                            (update: any, index: any) => {
                              return (
                                <div
                                  key={index}
                                  className="flex space-x-6 items-center"
                                >
                                  <p
                                    className={`${
                                      selectedUpdate === update.title
                                        ? "text-darkGray font-semibold"
                                        : "text-lightGray"
                                    } cursor-pointer`}
                                    onClick={() => {
                                      setSelectedUpdate(update.title);
                                      setUpdate({
                                        id: update.id,
                                        link: update.link,
                                        title: update.title,
                                        linkTitle: update.linkTitle,
                                        date: update.date,
                                      });
                                      setNewUpdate(false);
                                    }}
                                  >
                                    {update.title}
                                  </p>
                                  <span
                                    onClick={() => {
                                      deleteUpdateFromUpgrade(update.id);
                                      getUpgrade(selectedUpgrade).then(
                                        (res) => {
                                          setUpgradeData(res);
                                        }
                                      );
                                      setUpdate({
                                        id: 0,
                                        link: "",
                                        title: "",
                                        linkTitle: "",
                                        date: "",
                                      });
                                    }}
                                    className="cursor-pointer"
                                  >
                                    <IoTrashBinOutline size={15} />
                                  </span>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </>
                    )}

                    <span
                      className={`${
                        newUpdate
                          ? "text-darkGray font-semibold"
                          : "text-lightGray"
                      } cursor-pointer`}
                      onClick={() => {
                        setNewUpdate(true);
                        setSelectedUpdate("");
                        setUpdate({
                          id: 0,
                          link: "",
                          title: "",
                          linkTitle: "",
                          date: "",
                        });
                      }}
                    >
                      + Add New Update
                    </span>

                    <div className="flex flex-col gap-y-2">
                      <input
                        type="text"
                        value={update.date}
                        onChange={(e) => {
                          setUpdate({ ...update, date: e.target.value });
                        }}
                        placeholder="Date"
                        className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-64"
                      />
                      <input
                        type="text"
                        value={update.title}
                        onChange={(e) => {
                          setUpdate({ ...update, title: e.target.value });
                        }}
                        placeholder="Title"
                        className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-64"
                      />
                      <input
                        type="text"
                        value={update.linkTitle}
                        onChange={(e) => {
                          setUpdate({ ...update, linkTitle: e.target.value });
                        }}
                        placeholder="Link Title"
                        className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-64"
                      />
                      <input
                        type="text"
                        value={update.link}
                        onChange={(e) => {
                          setUpdate({ ...update, link: e.target.value });
                        }}
                        placeholder="Link"
                        className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-64"
                      />
                      <button
                        onClick={() => {
                          if (newUpdate) {
                            addUpdatetoUpgrade(upgradeData.id, {
                              date: update.date,
                              title: update.title,
                              link: update.link,
                              linkTitle: update.linkTitle,
                            });
                          } else {
                            updateUpdateFromUpgrade(update.id, {
                              date: update.date,
                              title: update.title,
                              link: update.link,
                              linkTitle: update.linkTitle,
                            });
                          }
                          getUpgrade(selectedUpgrade).then((res) => {
                            setUpgradeData(res);
                          });
                          setUpdate({
                            id: 0,
                            link: "",
                            title: "",
                            linkTitle: "",
                            date: "",
                          });
                        }}
                        className="bg-darkGray text-white rounded-lg p-2"
                      >
                        {newUpdate ? "Add" : "Update"}
                        <span className="pl-2">Updates</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4 p-4 border border-darkGray py-2 rounded-lg">
                    {upgradeData.videos.length > 0 && (
                      <>
                        <div className="flex flex-col gap-y-2">
                          {upgradeData.videos.map((video: any, index: any) => {
                            return (
                              <div
                                key={index}
                                className="flex space-x-6 items-center"
                              >
                                <p
                                  className={`${
                                    selectedYtLink === video.title
                                      ? "text-darkGray font-semibold"
                                      : "text-lightGray"
                                  } cursor-pointer`}
                                  onClick={() => {
                                    setSelectedYtLink(video.title);
                                    setYtLink({
                                      id: video.id,
                                      link: video.link,
                                      title: video.title,
                                    });
                                    setNewYtLink(false);
                                  }}
                                >
                                  {video.title}
                                </p>
                                <span
                                  onClick={() => {
                                    deleteVideoFromUpgrade(video.id);
                                    getUpgrade(selectedUpgrade).then((res) => {
                                      setUpgradeData(res);
                                    });
                                    setYtLink({
                                      id: 0,
                                      link: "",
                                      title: "",
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
                      </>
                    )}

                    <span
                      className={`${
                        newYtLink
                          ? "text-darkGray font-semibold"
                          : "text-lightGray"
                      } cursor-pointer`}
                      onClick={() => {
                        setNewYtLink(true);
                        setSelectedYtLink("");
                        setYtLink({ id: 0, link: "", title: "" });
                      }}
                    >
                      + Add New Video
                    </span>

                    <div className="flex flex-col gap-y-2">
                      <input
                        type="text"
                        value={ytLink.title}
                        onChange={(e) => {
                          setYtLink({ ...ytLink, title: e.target.value });
                        }}
                        placeholder="Title"
                        className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-64"
                      />
                      <input
                        type="text"
                        value={ytLink.link}
                        onChange={(e) => {
                          setYtLink({ ...ytLink, link: e.target.value });
                        }}
                        placeholder="Link"
                        className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-64"
                      />
                      <button
                        onClick={() => {
                          if (newYtLink) {
                            addVideoToUpgrade(upgradeData.id, {
                              title: ytLink.title,
                              link: ytLink.link,
                            });
                          } else {
                            updateVideoFromUpgrade(ytLink.id, {
                              title: ytLink.title,
                              link: ytLink.link,
                            });
                          }
                          getUpgrade(selectedUpgrade).then((res) => {
                            setUpgradeData(res);
                          });
                          setYtLink({
                            id: 0,
                            link: "",
                            title: "",
                          });
                        }}
                        className="bg-darkGray text-white rounded-lg p-2"
                      >
                        {newYtLink ? "Add" : "Update"}
                        <span className="pl-2">Video</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-full">
                    <Image
                      src="/assets/cat_peek.png"
                      alt="cat-peek"
                      width={200}
                      height={200}
                      className="h-[18rem] w-[9rem]"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
