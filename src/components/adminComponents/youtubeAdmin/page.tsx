import { YoutubeLinks } from "@/types/page";
import { addDocbyId, updateUpgrades } from "@/firebase/tools";
import { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";

interface Props {
  documentData: YoutubeLinks;
}

export default function YoutubeAdmin({ documentData }: Props) {
  const [data, setData] = useState<YoutubeLinks>({
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
          placeholder="Title"
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
              "Youtube",
              "YoutubeLinks",
              "Links",
              `${Timestamp.now().toDate().getTime() + data.title}`,
              data
            );
          }}
          className="bg-black text-white border-black hover:bg-white hover:text-black border-2 p-4 rounded-lg duration-300"
        >
          Add / Update
        </button>
      </div>
    </>
  );
}
