import { surveys } from "@/constants/page";
import Image from "next/image";
export default function Surveys() {
  return (
    <>
      <div className="flex justify-center min-h-screen w-full lg:pt-[25dvh] md:pt-[20dvh] pt-[15dvh]">
        <div className="w-[90vw] left-0">
          <div className="flex flex-col space-y-4">
            <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray">
              Surveys
            </h1>
            <div className="pt-8 flex flex-col gap-y-5">
              <h2 className="xl:text-4xl md:text-3xl text-2xl font-semibold">
                Completed
              </h2>

              <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                <div className="flex flex-col gap-5">
                  {surveys.map((survey) => {
                    return (
                      <>
                        <a
                          href={survey.link}
                          target="_blank"
                          className="md:text-2xl text-xl border-b-2 border-dotted border-darkGray"
                        >
                          {survey.title}
                        </a>
                      </>
                    );
                  })}
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/assets/cat5.png"
                    alt="cat"
                    width={600}
                    height={600}
                    className="md:h-[20rem] md:w-[25rem] h-[10rem] w-[15rem] md:pt-0 mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
