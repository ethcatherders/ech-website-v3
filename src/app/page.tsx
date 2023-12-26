import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Image
          src="/assets/ech_full_logo.png"
          alt="ech_logo"
          width={300}
          height={300}
        />
        <h1 className="md:text-7xl text-3xl font-antonio">
          Ethereum Cat Herders V3
        </h1>
      </div>
    </>
  );
}
