import { useMemberStore } from "@/store";
import { updateMember } from "@/app/_action";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";
import { MdEdit } from "react-icons/md";

export default function EditMember(data: any) {
  const [member, setMember] = useState<any>({
    id: "",
    name: "",
    description: "",
    twitter: "",
    github: "",
    image: "",
    role: "active",
  });

  useEffect(() => {
    setMember(data);
  }, [data]);

  const editOpen = useMemberStore((state) => state.editOpen);
  const setEditOpen = useMemberStore((state) => state.setEditOpen);
  const { toast } = useToast();

  const handleUpload = (result: CldUploadWidgetResults) => {
    const info = result.info as object;
    if ("secure_url" in info && "public_id" in info) {
      setMember({ ...member, image: info.secure_url });
    }
  };

  async function handleSubmit(member: any) {
    try {
      if (member.name === "") {
        toast({
          title: "Please fill the name field",
        });
        return;
      } else {
        await updateMember(member.id, member);
        toast({
          title: "Member info updated",
        });
        setEditOpen();
        setMember({
          name: "",
          description: "",
          twitter: "",
          github: "",
          image: "",
          role: "active",
        });
      }
    } catch (e) {
      toast({
        title: "Oh no! Something went wrong",
      });
    }
  }

  return (
    <>
      <span
        className="items-center flex cursor-pointer"
        onClick={() => {
          setEditOpen();
        }}
      >
        <MdEdit />
      </span>

      {editOpen && (
        <div className="fixed inset-0 z-50 bg-black/80">
          <div className="fixed left-[50%] top-[50%] z-50 grid w-full rounded-md max-w-lg translate-x-[-50%] p-4 translate-y-[-50%] gap-4 border bg-white">
            <span
              className="absolute top-4 right-4 text-lightGray cursor-pointer hover:border border-darkGray rounded-md duration-300 p-[0.1rem]"
              onClick={() => {
                setEditOpen();
              }}
            >
              <Cross2Icon />
            </span>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-5 justify-center items-center pt-4 w-[80%] mx-auto">
                <Image
                  src={"/assets/about_no_pic.png"}
                  alt="feedback"
                  width={300}
                  height={300}
                  className="rounded-full w-[10rem] h-[10rem]"
                />

                <input
                  type="text"
                  className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                  value={member.name}
                  onChange={(e) => {
                    setMember({ ...member, name: e.target.value });
                  }}
                  placeholder="Name"
                />
                <textarea
                  className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                  rows={5}
                  value={member.description}
                  onChange={(e) => {
                    setMember({ ...member, description: e.target.value });
                  }}
                  placeholder="Description"
                />
                <input
                  type="text"
                  className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                  value={member.twitter}
                  onChange={(e) => {
                    setMember({ ...member, twitter: e.target.value });
                  }}
                  placeholder="Twitter Link"
                />
                <input
                  type="text"
                  className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                  value={member.github}
                  onChange={(e) => {
                    setMember({ ...member, github: e.target.value });
                  }}
                  placeholder="Github Link"
                />

                <div className="flex md:flex-row flex-col w-full justify-between gap-5">
                  <CldUploadButton
                    uploadPreset={
                      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
                    }
                    className="text-white bg-darkGray md:text-lg px-4 py-2 rounded-xl md:w-2/3 w-full"
                    onUpload={handleUpload}
                  >
                    Upload Your Image
                  </CldUploadButton>
                  <button
                    className="text-white  md:w-1/3 w-full bg-darkGray md:text-xl px-4 py-2 rounded-xl"
                    onClick={() => {
                      handleSubmit(member);
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
