import Heading from "@/components/ui/Heading";
import Content from "@/components/ui/content";
import PageContainer from "@/components/ui/pageContainer";
import Image from "next/image";

const resources: {
  title: string;
  link: string;
}[] = [
  {
    title: "Non-EIP Content",
    link: "https://youtube.com/playlist?list=PL4cwHXAawZxpby7LszzOnyuAyQl8WLLvh&si=8e04CIz6UZoA90ke",
  },
  {
    title: "Beacon Chain Improvements",
    link: "https://youtube.com/playlist?list=PL4cwHXAawZxoEw29YmqJtNoFaENUUAREn&si=p55ScjtIdp7cQvUx",
  },
  {
    title: "ERCs",
    link: "https://youtube.com/playlist?list=PL4cwHXAawZxqXee9EMQDIEz2CslTnsW0K&si=UurSHYNdf0bzt3on",
  },
  {
    title: "NFTs",
    link: "https://youtube.com/playlist?list=PL4cwHXAawZxpUmj2UjD4BtfgC1nAAyv3p&si=wBs0rY5H7sPG8zRY",
  },
];

const Upgrades: {
  title: string;
  link: string;
}[] = [
  {
    title: "Dencun",
    link: "https://youtube.com/playlist?list=PL4cwHXAawZxpnKFDl1KzGOKqwux5JaLlv&si=ZF3ua23ubiyJXSIG",
  },
  {
    title: "Shapella",
    link: "https://youtube.com/playlist?list=PL4cwHXAawZxpok0smGmq-dFGVHQzW84a2&si=keP7mfvXTdsOgabs",
  },
  {
    title: "The Merge",
    link: "https://youtube.com/playlist?list=PL4cwHXAawZxqoLxXqZqT4hcYhoHoP6w12&si=XJ2mHIezVIYzBPee",
  },
  {
    title: "Arrow Glacier",
    link: "https://www.youtube.com/watch?v=qy81t7bZ-4Q&list=PL4cwHXAawZxqu0PKKyMzG_3BJV_xZTi1F&index=9&t=3s",
  },
  {
    title: "Altair",
    link: "https://youtube.com/playlist?list=PL4cwHXAawZxoliK_lEjyks7ogHsjp2uEE&si=rffpfZfpOLkQ6P1H",
  },
  {
    title: "London",
    link: "https://youtube.com/playlist?list=PL4cwHXAawZxppsQYazgJ3EWWWjY2vNxVp&si=-nr0TCFGpJl6ZCfs",
  },
  {
    title: "Berlin",
    link: "https://youtube.com/playlist?list=PL4cwHXAawZxrR3Z0I0eubH2fx_4Rej794&si=yF6dVP3KfORY7TS5",
  },
];

export default function PeepAnEip() {
  return (
    <PageContainer>
      <Heading text="Get Involved" />
      <Content>
        Whether you&apos;re a developer, researcher, writer, or enthusiast, there are numerous ways to contribute. 
        By participating in creating educational content, project management, documentation, community outreach, 
        or EIP editing, you&apos;ll help shape the future of Ethereum. Collaborate with like-minded individuals, gain 
        valuable experience, and be at the forefront of blockchain innovation. Your skills and enthusiasm are what 
        we need to drive Ethereum forward. Get involved today and make a difference!
      </Content>

      <div className="flex justify-center w-full pb-16">
        <a
            href={"https://discord.io/EthCatHerders"}
            target="_blank"
          >
            <button className="border border-darkGray rounded-lg md:text-2xl text-xl px-4 py-2 hover:text-darkGray text-white hover:bg-white bg-darkGray hover:scale-110 duration-300">
              Join our Discord
            </button>
          </a>
      </div>
    </PageContainer>
  );
}
