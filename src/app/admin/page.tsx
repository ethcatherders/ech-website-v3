"use client";
import { useState, useEffect } from "react";
import { getCollection, getDocById } from "@/firebase/tools";
import { getDoc, doc, db } from "@/firebase/config";
import type { consdideredProposal, InfoForUpgrade } from "@/types/page";
import Considered from "@/components/adminComponents/considered/page";
import Info from "@/components/adminComponents/info/page";

export default function Admin() {
  const [selectedPage, setSelectedPage] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [infoData, setInfoData] = useState<InfoForUpgrade>();
  const [upgradeNames, setUpgradeNames] = useState<string[]>([]);
  const [selectedUpgrade, setSelectedUpgrade] = useState<string>("");
  const [selectedConsidered, setSelectedConsidered] =
    useState<consdideredProposal>();
  const [selectedSection, setSelectedSection] = useState<string>("");

  useEffect(() => {
    async function getData() {
      if (selectedUpgrade) {
        const doc = await getCollection(selectedUpgrade, "considered");
        const doc3 = await getDocById(selectedUpgrade, "info", selectedUpgrade);
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
      }

      const doc2 = await getDoc(doc(db, "network_upgrades", "upgrades"));
      if (doc2) {
        setUpgradeNames(doc2?.data()?.upgrades);
      } else {
        console.log("No data found");
      }
    }
    getData();
  }, [selectedUpgrade]);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen pt-[10dvh] px-16">
        <div className="px-16 border-r border-darkGray">
          <span
            onClick={() => {
              setSelectedPage("NetworkUpgrades");
            }}
            className={` ${
              selectedPage === "NetworkUpgrades"
                ? "text-darkGray"
                : "text-lightGray"
            } text-2xl hover:cursor-pointer`}
          >
            NetWorkUpgrades
          </span>
        </div>

        <div className="border-r border-darkGray px-16">
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
                    }}
                    className="border border-darkGray p-4"
                  />
                </span>
              </div>
            </>
          )}
        </div>

        <div className="px-16 border-r border-darkGray flex flex-col gap-y-4">
          {selectedUpgrade && (
            <>
              <span
                onClick={() => {
                  setSelectedSection("info");
                  setSelectedConsidered(undefined);
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
                }}
                className={` ${
                  selectedSection === "considered"
                    ? "text-darkGray"
                    : "text-lightGray"
                } text-2xl hover:cursor-pointer`}
              >
                Considered
              </span>
            </>
          )}
        </div>

        <div className="px-16">
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

        <div className="px-16 border-r border-darkGray">
          {selectedSection === "considered" && (
            <div className="flex flex-col gap-y-8">
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
                      } text-xl max-w-[5rem] text-wrap hover:cursor-pointer`}
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

        <div className="px-16">
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
