import { useState, useEffect } from "react";
import type { consdideredProposal } from "@/types/page";
import { addDocbyId, updateUpgrades } from "@/firebase/tools";

interface Props {
  upgradeName: string;
  documentData: consdideredProposal;
  allUpgrades: string[];
}

export default function Considered({
  upgradeName,
  documentData,
  allUpgrades,
}: Props) {
  const [data, setData] = useState<consdideredProposal>({
    title: "",
    description: "",
    proposalLink: "",
    videoLink: "",
    discussionLink: "",
  });

  useEffect(() => {
    if (documentData) {
      setData(documentData);
    }
  }, [documentData]);

  return (
    <>
      <div className="flex flex-col space-y-6">
        <input
          type="text"
          placeholder="Title"
          value={data.title || ""}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          className="border border-darkGray p-4"
        />
        <textarea
          rows={5}
          placeholder="Description"
          value={data.description || ""}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          className="border border-darkGray p-4"
        />
        <input
          type="text"
          placeholder="Proposal Link"
          value={data.proposalLink || ""}
          onChange={(e) => setData({ ...data, proposalLink: e.target.value })}
          className="border border-darkGray p-4"
        />
        <input
          type="text"
          placeholder="Video Link"
          value={data.videoLink || ""}
          onChange={(e) => setData({ ...data, videoLink: e.target.value })}
          className="border border-darkGray p-4"
        />
        <input
          type="text"
          placeholder="Discussion Link"
          value={data.discussionLink || ""}
          onChange={(e) => setData({ ...data, discussionLink: e.target.value })}
          className="border border-darkGray p-4"
        />
        <button
          onClick={() => {
            addDocbyId(
              "network_upgrades",
              upgradeName,
              "considered",
              data.title,
              data
            );
            allUpgrades.includes(upgradeName)
              ? null
              : updateUpgrades([...allUpgrades, upgradeName]);
          }}
          className="bg-black text-white border-black hover:bg-white hover:text-black border-2 p-4 rounded-lg duration-300"
        >
          Add / Update
        </button>
      </div>
    </>
  );
}
