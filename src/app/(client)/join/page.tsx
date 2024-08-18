import Heading from "@/components/ui/Heading";
import Content from "@/components/ui/content";
import PageContainer from "@/components/ui/pageContainer";
import Image from "next/image";

const community = [
  {
    name: "Ethereum Foundation",
    url: "https://ethereum.org/en/community/get-involved/#ethereum-jobs/",
    category: "Community",
  },
  {
    name: "Fellowship of Ethereum Magicians",
    url: "https://ethereum-magicians.org/faq",
    category: "Community",
  },
  {
    name: "Toolsuite for testing Ethereum applications",
    url: "https://github.com/ethereum/eth-tester/issues",
    category: "Community",
  },
  {
    name: "Gitcoin",
    url: "https://gitcoin.co/",
    category: "Community",
  },
  {
    name: "Lighthouse",
    url: "https://lighthouse.sigmaprime.io/",
    category: "Consensus Layer Client"
  },
  {
    name: "Lodestar",
    url: "https://lodestar.chainsafe.io/",
    category: "Consensus Layer Client"
  },
  {
    name: "Nimbus",
    url: "https://nimbus.team/",
    category: "Consensus Layer Client"
  },
  {
    name: "Prysm",
    url: "https://docs.prylabs.network/docs/getting-started",
    category: "Consensus Layer Client"
  },
  {
    name: "Teku",
    url: "https://consensys.io/teku",
    category: "Consensus Layer Client"
  },
  {
    name: "Besu",
    url: "https://www.hyperledger.org/projects/besu",
    category: "Execution Layer Client"
  },
  {
    name: "Erigon",
    url: "https://erigon.tech/",
    category: "Execution Layer Client"
  },
  {
    name: "Go Ethereum",
    url: "https://geth.ethereum.org/docs/developers/geth-developer/contributing",
    category: "Execution Layer Client"
  },
  {
    name: "Nethermind",
    url: "https://www.nethermind.io/",
    category: "Execution Layer Client"
  },
]

export default function Join() {
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
          href={"https://dsc.gg/ech"}
          target="_blank"
        >
          <button className="border border-darkGray rounded-lg md:text-2xl text-xl px-4 py-2 hover:text-darkGray text-white hover:bg-white bg-darkGray hover:scale-110 duration-300">
            Join our Discord
          </button>
        </a>
      </div>

      <div className="flex flex-col w-full justify-center gap-10 pb-20">
        <Heading text="The Ethereum Community" />
        <Content>The Ethereum community has many opportunites for contributors of different backgrounds and skill-sets.</Content>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {community.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
            >
              <div className="flex flex-col w-full h-full justify-between border border-darkGray rounded-lg md:text-2xl text-xl px-4 py-2 hover:text-darkGray text-white hover:bg-white bg-darkGray hover:scale-110 duration-300">
                <p className="flex-grow">{item.name}</p>
                <p className="text-xs mt-2">{item.category}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
