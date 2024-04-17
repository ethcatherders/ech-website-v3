"use client";
import {
  addMTHItem,
  deleteMTHItem,
  getMTHItemById,
  getMTHItems,
  updateMTHById,
} from "@/app/_action";
import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import PageContainer from "@/components/ui/pageContainer";
import { MTHType } from "@prisma/client";
import { error } from "console";
import { useEffect, useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import { toast } from "sonner";

export default function MTHAdmin() {
  const [newContent, setNewContent] = useState<Boolean>(true);
  const [selectedType, setSelectedType] = useState<MTHType>("ARTICLE");
  const [selectedItemId, setSelectedItemId] = useState<number>(0);
  const [itemsData, setItemsData] = useState<
    {
      id: number;
      title: string;
      link: string;
      type: MTHType;
    }[]
  >([]);
  useEffect(() => {
    async function fetchData() {
      await getMTHItems().then((res) => {
        setItemsData(res);
      });
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchItem() {
      try {
        if (selectedItemId !== 0) {
          const item = await getMTHItemById(selectedItemId);
          if (item) {
            setNewContent(false);
            setLink(item.link);
            setTitle(item.title);
            setSelectedType(item.type);
          } else {
            throw new Error();
          }
        }
      } catch (e) {
        console.log(e);
        toast.error("Something went wrong");
      }
    }
    fetchItem();
  }, [selectedItemId]);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  async function clearAndFetch() {
    setLink("");
    setTitle("");
    setSelectedType("ARTICLE");
    await getMTHItems().then((res) => {
      setItemsData(res);
    });
  }
  async function AddItem() {
    try {
      await addMTHItem({
        link: link,
        title: title,
        type: selectedType,
      });
      await clearAndFetch();
      toast.success("Added Successfully");
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong");
    }
  }

  async function UpdateItem() {
    try {
      await updateMTHById({
        id: selectedItemId,
        link: link,
        title: title,
        type: selectedType,
      });
      await getMTHItems().then((res) => {
        setItemsData(res);
      });
      toast.success("Updated Successfully");
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong");
    }
  }

  return (
    <PageContainer>
      <Heading text="Meet the Herders Admin" />
      <div className="flex flex-col border border-black rounded-lg p-4">
        <div className="grid grid-cols-3 border-b border-lightGray pb-3">
          <div className="border-r border-lightGray px-3 flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Articles</h3>
            {itemsData.map((item) => {
              if (item.type === "ARTICLE") {
                return (
                  <div
                    className={`${
                      selectedItemId === item.id
                        ? "text-darkGray"
                        : "text-lightGray"
                    } cursor-pointer flex w-full justify-between items-center`}
                    key={item.id}
                    onClick={() => {
                      setSelectedItemId(item.id);
                    }}
                  >
                    {item.title}

                    <span
                      onClick={async () => {
                        try {
                          await deleteMTHItem(item.id);
                          await clearAndFetch();
                          toast.success("Deleted Successfully");
                        } catch (e) {
                          console.log(e);
                          toast.error("Something went wrong");
                        }
                      }}
                      className="text-lightGray"
                    >
                      <IoTrashBin />
                    </span>
                  </div>
                );
              }
            })}
          </div>

          <div className="border-r border-lightGray px-3 flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Videos</h3>
            {itemsData.map((item) => {
              if (item.type === "VIDEO") {
                return (
                  <div
                    className={`${
                      selectedItemId === item.id
                        ? "text-darkGray"
                        : "text-lightGray"
                    } cursor-pointer flex w-full justify-between items-center`}
                    key={item.id}
                    onClick={() => {
                      setSelectedItemId(item.id);
                    }}
                  >
                    {item.title}

                    <span
                      onClick={async () => {
                        try {
                          await deleteMTHItem(item.id);
                          await clearAndFetch();
                          toast.success("Deleted Successfully");
                        } catch (e) {
                          console.log(e);
                          toast.error("Something went wrong");
                        }
                      }}
                      className="text-lightGray"
                    >
                      <IoTrashBin />
                    </span>
                  </div>
                );
              }
            })}
          </div>

          <div className="pl-3 flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Podcasts</h3>
            {itemsData.map((item) => {
              if (item.type === "PODCAST") {
                return (
                  <div
                    className={`${
                      selectedItemId === item.id
                        ? "text-darkGray"
                        : "text-lightGray"
                    } cursor-pointer flex w-full justify-between items-center`}
                    onClick={() => {
                      setSelectedItemId(item.id);
                    }}
                    key={item.id}
                  >
                    {item.title}

                    <span
                      onClick={async () => {
                        try {
                          await deleteMTHItem(item.id);
                          await clearAndFetch();
                          toast.success("Deleted Successfully");
                        } catch (e) {
                          console.log(e);
                          toast.error("Something went wrong");
                        }
                      }}
                      className="text-lightGray"
                    >
                      <IoTrashBin />
                    </span>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-3">
          <span
            className={`${
              newContent ? "text-darkGray font-semibold" : "text-lightGray"
            } cursor-pointer`}
            onClick={() => {
              setNewContent(true);
              setLink("");
              setTitle("");
              setSelectedType("ARTICLE");
            }}
          >
            + Add New Survey
          </span>
          <select
            onChange={(e) => {
              setSelectedType(e.target.value as MTHType);
            }}
            className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
            value={selectedType}
          >
            <option value="ARTICLE">Article</option>
            <option value="VIDEO">Video</option>
            <option value="PODCAST">Podcast</option>
          </select>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder={selectedType === "ARTICLE" ? "Name" : "Title"}
            className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
          />
          <input
            type="text"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
            placeholder="Link"
            className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
          />
          {newContent ? (
            <Button
              onClick={async () => {
                await AddItem();
              }}
            >
              Add Item
            </Button>
          ) : (
            <Button
              onClick={async () => {
                await UpdateItem();
              }}
            >
              Update Item
            </Button>
          )}
        </div>
      </div>
    </PageContainer>
  );
}
