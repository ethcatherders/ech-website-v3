import Heading from "../ui/Heading";
import Content from "../ui/content";
import PageContainer from "../ui/pageContainer";
import Image from "next/image";
export default function TheMerge() {
    return (
        <>
            <PageContainer>
                <Heading text="The Merge" />
                <Content>
                This is an exciting time for the Ethereum ecosystem as the Merge is coming up. What is {'"'}The Merge{'"'}? It is the transition of Ethereum moving from Proof-of-Work to a Proof-of-Stake consensus. This should lead to more scalability, sustainability, and security of the Ethereum ecosystem. After the switch of all three public testnets to proof of stake, the tentative ttd for ethereum mainnet merge has been announced. TTD prediction for The Merge 🐼 can be followed span <a href="https://bordel.wtf/" target="_blank" className="border-b-2 border-dashed border-darkGray">here</a>.
                </Content>

                <div className="flex lg:flex-row flex-col justify-between items-center gap-10">
                    <Image
                        src="/network_upgrades/merge1.gif"
                        width={600}
                        height={400}
                        alt="The Merge"
                        className="w-full h-full"
                    />
                    <Image 
                        src="/network_upgrades/merge2.gif"
                        width={600}
                        height={400}
                        alt="The Merge"
                        className="w-full h-full"
                    />
                </div>
                <Image 
                        src="/network_upgrades/merge3.png"
                        width={600}
                        height={400}
                        alt="The Merge"
                        className="w-full h-full"
                />
                <div className="flex w-full justify-center">
                <a href="https://twitter.com/dannyryan/status/1432902854994378757/photo/1" target="_blank" className="border-b-2 border-darkGray border-dashed lg:text-2xl text-xl">Upgrade consensus to PoS</a>
                </div>
                <iframe src="https://www.youtube.com/embed/Nx-jYgI0QVI?si=JAAq12AONbQTwRqS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full xl:h-[28rem] lg:h-[24rem] md:h-[20rem] sm:h-[16rem] h-[14rem]"></iframe>
                <div className="flex justify-center text-center mx-5">
              <span className="md:text-3xl text-xl text-center font-roboto font-bold">
                In the section below you can find more resources providing
                information on {'"'}The Merge{'"'} Upgrade.
              </span>
            </div>
            </PageContainer>
        </>
    )
}