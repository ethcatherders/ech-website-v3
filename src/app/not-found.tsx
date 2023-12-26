import Image from "next/image";
import Button from "@/components/button/page";
export default function ErrorPage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-y-8 items-center">
          <Image
            src="/assets/cat_laptop.png"
            alt="404"
            width={400}
            height={400}
            className="md:scale-100 scale-75"
          />
          <h1 className="md:text-7xl text-3xl font-antonio text-center">
            Uh Oh! I think you are lost
          </h1>
          <Button text="Go Home ->" link="/" fontSize={"3xl"} />
        </div>
      </div>
    </>
  );
}
