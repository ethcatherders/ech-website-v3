import Image from "next/image";
export default function ShanghaiExtras() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-start gap-5">
        <div>
          <span className="md:text-3xl text-xl text-center font-roboto font-bold pb-3">
            Readiness Checklist
          </span>
          <ul className="flex flex-col gap-2 md:text-xl font-roboto">
            <li>List of outstanding items before deployment.</li>
            <li>Code merged into Participating Clients:</li>
            <li>
              For more Information on this click{" "}
              <a
                href="https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md#readiness-checklist"
                target="_blank"
                className="border-b-2 border-darkGray border-dashed"
              >
                here
              </a>
            </li>
          </ul>
          <Image
            src="/network_upgrades/shanghai-checklist.jpeg"
            alt="Shanghai Checklist"
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="md:text-3xl text-xl text-center font-roboto font-bold pb-3">
            EOF Devnets Breakout Room
          </span>
          <iframe
            src="https://www.youtube.com/embed/dN4tDo7Cm4k?list=PL4cwHXAawZxpxjx7t3Aqo01pZYfHjaqG0"
            title="EOF Implementers Meeting 10"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-[15rem] h-[10rem] md:w-[20rem] md:h-[15rem]"
          ></iframe>
          <span>Nov 4, 2022, 14:00 UTC</span>
          <div className="flex">
            <a
              href="https://notes.ethereum.org/@timbeiko/eof-breakout"
              target="_blank"
              className="border-b-2 border-darkGray border-dashed"
            >
              Notes of the meeting
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
