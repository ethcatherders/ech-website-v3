import { ResourcesData } from "@/types/page";
import { addDocbyId, updateUpgrades } from "@/firebase/tools";
import { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";

interface Props {
  upgradeName: string;
  documentData: ResourcesData;
  allUpgrades: string[];
}

export default function Resources({
  upgradeName,
  documentData,
  allUpgrades,
}: Props) {
  const [data, setData] = useState<ResourcesData>({
    title: "",
    link: "",
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
          placeholder="Link Text"
          value={data.title || ""}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          className="border border-darkGray p-4"
        />
        <input
          type="text"
          placeholder="Link"
          value={data.link || ""}
          onChange={(e) => setData({ ...data, link: e.target.value })}
          className="border border-darkGray p-4"
        />
        <button
          onClick={() => {
            addDocbyId(
              upgradeName,
              "resources",
              `${Timestamp.now().toDate().getTime() + data.title}`,
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
