import PageContainer from "@/components/ui/pageContainer";
import Image from "next/image";

export default function Assets() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-4 w-full pb-8">
        <div className="md:grid md:grid-cols-2 flex flex-col gap-4 w-full">
          <span className="text-4xl font-bold text-darkGray w-full">
            Illustrations
          </span>
          <div className="flex flex-col w-full gap-5">
            <span className="border border-lightGray rounded-lg p-4 flex flex-col justify-between items-center">
              <Image
                src="/assets/ech_full_logo.png"
                alt="logo"
                width={300}
                height={300}
              />

              <h3 className="text-xl font-bold text-darkGray">ECH Full Logo</h3>
              <a
                href="/assets/ech_full_logo.png"
                className="bg-darkGray px-4 py-2 rounded-lg text-white"
                download
              >
                Download
              </a>
            </span>
            <span className="border border-lightGray rounded-lg p-4 flex flex-col justify-between items-center">
              <Image
                src="/assets/ech_horizontal_logo.svg"
                alt="logo"
                width={200}
                height={200}
              />

              <h3 className="text-xl font-bold text-darkGray">
                ECH Horizontal Logo
              </h3>
              <a
                href="/assets/ech_horizontal_logo.svg"
                className="bg-darkGray px-4 py-2 rounded-lg text-white"
                download
              >
                Download
              </a>
            </span>

            <div className="grid grid-cols-2 gap-5">
              <span className="border border-lightGray rounded-lg p-4 flex flex-col justify-between items-center">
                <Image
                  src="/assets/cat_peek.png"
                  alt="logo"
                  width={300}
                  height={500}
                />

                <h3 className="text-xl font-bold text-darkGray">Cat Peek</h3>
                <a
                  href="/assets/cat_peek.png"
                  className="bg-darkGray px-4 py-2 rounded-lg text-white"
                  download
                >
                  Download
                </a>
              </span>
              <span className="border border-lightGray rounded-lg p-4 flex flex-col justify-between items-center">
                <Image
                  src="/assets/cat_white.png"
                  alt="logo"
                  width={300}
                  height={500}
                />

                <h3 className="text-xl font-bold text-darkGray">White Cat</h3>
                <a
                  href="/assets/cat_white.png"
                  className="bg-darkGray px-4 py-2 rounded-lg text-white"
                  download
                >
                  Download
                </a>
              </span>
              <span className="border border-lightGray rounded-lg p-4 flex flex-col justify-between items-center">
                <Image
                  src="/assets/paw_yarn.png"
                  alt="logo"
                  width={300}
                  height={500}
                />

                <h3 className="text-xl font-bold text-darkGray">
                  Paw and yarn
                </h3>
                <a
                  href="/assets/paw_yarn.png"
                  className="bg-darkGray px-4 py-2 rounded-lg text-white"
                  download
                >
                  Download
                </a>
              </span>
              <span className="border border-lightGray rounded-lg p-4 flex flex-col justify-between items-center">
                <Image
                  src="/assets/cat_head.png"
                  alt="logo"
                  width={300}
                  height={500}
                />

                <h3 className="text-xl font-bold text-darkGray">Cat head</h3>
                <a
                  href="/assets/cat_head.png"
                  className="bg-darkGray px-4 py-2 rounded-lg text-white"
                  download
                >
                  Download
                </a>
              </span>
            </div>

            <span className="border border-lightGray rounded-lg p-4 flex flex-col justify-between items-center">
              <Image
                src="/assets/cat_laptop.png"
                alt="logo"
                width={300}
                height={300}
              />

              <h3 className="text-xl font-bold text-darkGray">Cat Laptop</h3>
              <a
                href="/assets/cat_laptop.png"
                className="bg-darkGray px-4 py-2 rounded-lg text-white"
                download
              >
                Download
              </a>
            </span>

            <div className="grid grid-cols-2 gap-5">
              <span className="border border-lightGray rounded-lg p-4 flex flex-col justify-between items-center">
                <Image
                  src="/assets/paw1.png"
                  alt="logo"
                  width={100}
                  height={200}
                />

                <h3 className="text-xl font-bold text-darkGray">Paw 1</h3>
                <a
                  href="/assets/paw1.png"
                  className="bg-darkGray px-4 py-2 rounded-lg text-white"
                  download
                >
                  Download
                </a>
              </span>
              <span className="border border-lightGray rounded-lg p-4 flex flex-col justify-between items-center">
                <Image
                  src="/assets/paw2.png"
                  alt="logo"
                  width={100}
                  height={200}
                />

                <h3 className="text-xl font-bold text-darkGray">Paw 2</h3>
                <a
                  href="/assets/paw2.png"
                  className="bg-darkGray px-4 py-2 rounded-lg text-white"
                  download
                >
                  Download
                </a>
              </span>
              <span className="border border-lightGray rounded-lg p-4 flex flex-col justify-between items-center">
                <Image
                  src="/assets/paw3.png"
                  alt="logo"
                  width={100}
                  height={200}
                />

                <h3 className="text-xl font-bold text-darkGray">Paw 3</h3>
                <a
                  href="/assets/paw3.png"
                  className="bg-darkGray px-4 py-2 rounded-lg text-white"
                  download
                >
                  Download
                </a>
              </span>
              <span className="border border-lightGray rounded-lg p-4 flex flex-col justify-between items-center">
                <Image
                  src="/assets/paw4.png"
                  alt="logo"
                  width={100}
                  height={200}
                />

                <h3 className="text-xl font-bold text-darkGray">Paw 4</h3>
                <a
                  href="/assets/paw4.png"
                  className="bg-darkGray px-4 py-2 rounded-lg text-white"
                  download
                >
                  Download
                </a>
              </span>
            </div>

            <span className="border border-lightGray rounded-lg p-4 flex flex-col justify-between items-center">
              <Image
                src="/assets/retro_tv.png"
                alt="logo"
                width={500}
                height={300}
              />

              <h3 className="text-xl font-bold text-darkGray">Retro TV</h3>
              <a
                href="/assets/retro_tv.png"
                className="bg-darkGray px-4 py-2 rounded-lg text-white"
                download
              >
                Download
              </a>
            </span>
            <span className="border border-lightGray rounded-lg p-4 flex flex-col justify-between items-center">
              <Image
                src="/assets/paws.png"
                alt="logo"
                width={300}
                height={300}
              />

              <h3 className="text-xl font-bold text-darkGray">Paws</h3>
              <a
                href="/assets/paws.png"
                className="bg-darkGray px-4 py-2 rounded-lg text-white"
                download
              >
                Download
              </a>
            </span>
            <span className="border border-lightGray rounded-lg p-4 flex flex-col justify-between items-center">
              <Image
                src="/assets/yarn.png"
                alt="logo"
                width={500}
                height={300}
              />

              <h3 className="text-xl font-bold text-darkGray">Yarn</h3>
              <a
                href="/assets/yarn.png"
                className="bg-darkGray px-4 py-2 rounded-lg text-white"
                download
              >
                Download
              </a>
            </span>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 flex flex-col gap-4 w-full">
          <span className="text-4xl font-bold text-darkGray w-full">
            Typography
          </span>
          <div className="flex flex-col justify-between items-center gap-6 w-full">
            <span className="w-full text-2xl text-black p-6 font-antonio flex justify-center items-center border border-darkGray rounded-lg">
              ANTONIO
            </span>
            <span className="w-full text-2xl text-black p-6 font-roboto flex justify-center items-center border border-darkGray rounded-lg">
              ROBOTO
            </span>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 flex flex-col gap-4 w-full">
          <span className="text-4xl font-bold text-darkGray w-full">
            Color Palette
          </span>
          <div className="flex md:flex-row justify-between items-center gap-6 flex-col w-full">
            <span className="bg-black w-full text-2xl text-white p-6">
              #000000
            </span>
            <span className="bg-darkGray w-full text-2xl text-white p-6">
              #323232
            </span>
            <span className="bg-lightGray w-full text-2xl text-white p-6">
              #a9a9a9
            </span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
