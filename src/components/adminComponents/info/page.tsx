import { useState, useEffect } from "react";
import type { InfoForUpgrade } from "@/types/page";
import { addDocbyId, updateUpgrades } from "@/firebase/tools";

interface Props {
  upgradeName: string;
  documentData: InfoForUpgrade;
  allUpgrades: string[];
}

export default function Info({
  upgradeName,
  documentData,
  allUpgrades,
}: Props) {
  const [data, setData] = useState<InfoForUpgrade>({
    description1: "",
    description2: "",
    embedLink: "",
  });

  useEffect(() => {
    if (documentData) {
      setData(documentData);
    }
  }, [documentData]);

  return (
    <>
      <div className="flex flex-col space-y-6">
        <textarea
          rows={5}
          placeholder="Description 1"
          value={data.description1 || ""}
          onChange={(e) => setData({ ...data, description1: e.target.value })}
          className="border border-darkGray p-4"
        />
        <textarea
          rows={5}
          placeholder="Description 2"
          value={data.description2 || ""}
          onChange={(e) => setData({ ...data, description2: e.target.value })}
          className="border border-darkGray p-4"
        />
        <textarea
          rows={5}
          placeholder="Embed Link"
          value={data.embedLink || ""}
          onChange={(e) => setData({ ...data, embedLink: e.target.value })}
          className="border border-darkGray p-4"
        />

        <button
          onClick={() => {
            addDocbyId(
              "network_upgrades",
              upgradeName,
              "info",
              upgradeName,
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
