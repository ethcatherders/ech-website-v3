import { EventsData } from "@/types/page";
import { addDocbyId } from "@/firebase/tools";
import { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";

interface Props {
  documentData: EventsData;
}

export default function Events({ documentData }: Props) {
  const [data, setData] = useState<EventsData>({
    title: "",
    linkTitle1: "",
    link1: "",
    linkTitle2: "",
    link2: "",
    linkTitle3: "",
    link3: "",
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
          placeholder="Link Title 1"
          value={data.linkTitle1 || ""}
          onChange={(e) => setData({ ...data, linkTitle1: e.target.value })}
          className="border border-darkGray p-4"
        />
        <input
          type="text"
          placeholder="Link 1"
          value={data.link1 || ""}
          onChange={(e) => setData({ ...data, link1: e.target.value })}
          className="border border-darkGray p-4"
        />

        <input
          type="text"
          placeholder="Link Title 2"
          value={data.linkTitle2 || ""}
          onChange={(e) => setData({ ...data, linkTitle2: e.target.value })}
          className="border border-darkGray p-4"
        />
        <input
          type="text"
          placeholder="Link 2"
          value={data.link2 || ""}
          onChange={(e) => setData({ ...data, link2: e.target.value })}
          className="border border-darkGray p-4"
        />

        <input
          type="text"
          placeholder="Link Title 3"
          value={data.linkTitle3 || ""}
          onChange={(e) => setData({ ...data, linkTitle3: e.target.value })}
          className="border border-darkGray p-4"
        />
        <input
          type="text"
          placeholder="Link 3"
          value={data.link3 || ""}
          onChange={(e) => setData({ ...data, link3: e.target.value })}
          className="border border-darkGray p-4"
        />

        <button
          onClick={() => {
            addDocbyId(
              "blogs",
              "blogsPage",
              "events",
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
