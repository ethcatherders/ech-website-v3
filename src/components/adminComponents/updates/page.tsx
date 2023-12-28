import { UpdatesData } from "@/types/page";
import { addDocbyId, updateUpgrades } from "@/firebase/tools";
import { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";

interface Props {
  upgradeName: string;
  documentData: UpdatesData;
  allUpgrades: string[];
}

export default function Updates({
  upgradeName,
  documentData,
  allUpgrades,
}: Props) {
  const [data, setData] = useState<UpdatesData>({
    date: "",
    title: "",
    linkTitle: "",
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
          placeholder="Date"
          value={data.date || ""}
          onChange={(e) => setData({ ...data, date: e.target.value })}
          className="border border-darkGray p-4"
        />
        <input
          type="text"
          placeholder="Title"
          value={data.title || ""}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          className="border border-darkGray p-4"
        />
        <input
          type="text"
          placeholder="Link Title"
          value={data.linkTitle || ""}
          onChange={(e) => setData({ ...data, linkTitle: e.target.value })}
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
              "updates",
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
