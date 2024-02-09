"use client";
import { addFeedback } from "@/app/_action";
import { useState } from "react";
import { useToast } from "../ui/use-toast";
import Image from "next/image";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import { Cross2Icon } from "@radix-ui/react-icons";
import FeedbackCarousel from "./feedbackCarousel";

export default function Feedback() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState<any>({
    name: "",
    social: "",
    feedback: "",
    image: "",
  });

  const handleUpload = (result: CldUploadWidgetResults) => {
    const info = result.info as object;
    if ("secure_url" in info && "public_id" in info) {
      setFeedback({ ...feedback, image: info.secure_url });
    }
  };

  async function handleSubmit(feedback: any) {
    try {
      if (
        feedback.name === "" ||
        feedback.social === "" ||
        feedback.feedback === ""
      ) {
        toast({
          title: "Please fill all the fields",
        });
        return;
      } else {
        await addFeedback(feedback);
        toast({
          title: "Thank you for submitting your feedback",
        });
        setOpen(false);
        setFeedback({ name: "", social: "", feedback: "", image: "" });
      }
    } catch (e) {
      toast({
        title: "Oh no! Something went wrong",
      });
    }
  }
  return (
    <>
      <div className="w-full flex flex-col gap-8">
        <h1 className="font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
          Community Feedback
        </h1>

        <FeedbackCarousel />

        <span
          className={`text-white bg-darkGray md:text-2xl sm:text-xl text-lg px-4 py-2 rounded-xl cursor-pointer w-fit`}
          onClick={() => {
            setOpen(true);
          }}
        >
          We{"'"}d love to hear from you!
        </span>

        {open && (
          <div className="fixed inset-0 z-50 bg-black/80">
            <div className="fixed left-[50%] top-[50%] z-50 grid w-full rounded-md max-w-lg translate-x-[-50%] p-4 translate-y-[-50%] gap-4 border bg-white">
              <span
                className="absolute top-4 right-4 text-lightGray cursor-pointer hover:border border-darkGray rounded-md duration-300 p-[0.1rem]"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Cross2Icon />
              </span>
              <div className="flex flex-col gap-6">
                <h3 className="text-lg font-semibold leading-none tracking-tight">
                  Please drop your feedback here
                </h3>

                <div className="flex flex-col gap-5 justify-center items-center pt-4 w-[80%] mx-auto">
                  <Image
                    src={
                      feedback.image
                        ? feedback.image
                        : "/assets/about_no_pic.png"
                    }
                    alt="feedback"
                    width={300}
                    height={300}
                    className="rounded-full w-[10rem] h-[10rem]"
                  />

                  <input
                    type="text"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                    value={feedback.name}
                    onChange={(e) => {
                      setFeedback({ ...feedback, name: e.target.value });
                    }}
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                    value={feedback.social}
                    onChange={(e) => {
                      setFeedback({ ...feedback, social: e.target.value });
                    }}
                    placeholder="Link to your social"
                  />
                  <textarea
                    rows={5}
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                    value={feedback.feedback}
                    onChange={(e) => {
                      setFeedback({ ...feedback, feedback: e.target.value });
                    }}
                    placeholder="Feedback"
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
                        handleSubmit(feedback);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
