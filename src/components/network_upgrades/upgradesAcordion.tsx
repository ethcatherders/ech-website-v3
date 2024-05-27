import { Downloads, accordionData } from "@/constants/networkUpgrades";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import Content from "../ui/content";
import { link } from "fs";

export default function UpgradesAccordion(){
    return(
        <>
            <Accordion type="single" collapsible>
                {/*Dencun*/}
                <AccordionItem value={"1"}>
                    <AccordionTrigger className="md:text-2xl text-xl">
                        {
                            accordionData[0].upgradeName
                        }
                    </AccordionTrigger>
                    <AccordionContent>
                        <Content>
                        Dencun is a planned network upgrade to enable blob transactions.
                        <br />
                        <ul className="flex flex-col gap-2 list-disc">
                            <li><span className="font-normal">Mainnet upgrade date</span> - Wednesday, 13th of March</li>
                            <li><span className="font-normal" >Epoch</span> - 269568</li>
                            {
                                accordionData[0].links.map((item,index) => {
                                   return <li key={index}>
                                    {
                                        index === accordionData[0].links.length - 1 &&  <span className="font-normal">Ethereum Foundation{"'"}s</span>
                                    }{" "} <a href={item.link} target="_blank" className="border-b border-darkGray border-dashed">{item.linkTitle}</a>
                                   </li>
                                })
                            }
                        </ul>
                        <br />
                        For more information regarding Dencun do check our Dencun page by clicking <a href="/upgrades/dencun" className="border-b border-dashed border-darkGray">here</a>.
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 pt-4">
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-2xl" >Consensus Layer</span>
                                <table className="w-full">
                                    <thead>
                                        <tr >
                                            <th className="bg-darkGray text-white font-normal w-2/5 pl-4">Client</th>
                                            <th className="bg-darkGray text-white font-normal">Version</th>
                                            <th className="bg-darkGray text-white font-normal pr-4">Download</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            Downloads[0].consensus?.map((item,index) => {
                                                return(
                                                    <tr key={index} className={index % 2 === 1 ? 'bg-lightGray/50': 'bg-white'}>
                                                        <td className="pl-4">{item.client}</td>
                                                        <td>{item.version}</td>
                                                        <td>
                                                            <a href={item.link} target="_blank" className="border-b border-darkGray border-dashed">{item.linkTitle}</a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-2xl" >Execution Layer</span>
                                <table className="w-full">
                                    <thead>
                                        <tr >
                                            <th className="bg-darkGray text-white font-normal w-2/5 pl-4">Client</th>
                                            <th className="bg-darkGray text-white font-normal">Version</th>
                                            <th className="bg-darkGray text-white font-normal pr-4">Download</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            Downloads[0].execution?.map((item,index) => {
                                                return(
                                                    <tr key={index} className={index % 2 === 1 ? 'bg-lightGray/50': 'bg-white'}>
                                                        <td className="pl-4">{item.client}</td>
                                                        <td>{item.version}</td>
                                                        <td>
                                                            <a href={item.link} target="_blank" className="border-b border-darkGray border-dashed">{item.linkTitle}</a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </Content>                        
                    </AccordionContent>
                </AccordionItem>
                {/*Shapella*/}
                <AccordionItem value={"2"}>
                    <AccordionTrigger className="md:text-2xl text-xl">
                        {
                            accordionData[1].upgradeName
                        }
                    </AccordionTrigger>
                    <AccordionContent>
                        <Content>
                        Shapella is a planned network upgrade to activate withdrawal of staking rewards.
                        <br />
                        <ul className="flex flex-col gap-2 list-disc">
                            <li><span className="font-normal">Mainnet upgrade date</span> - Wednesday, 12th of April</li>
                            <li><span className="font-normal" >Epoch</span> - 194048</li>
                            {
                                accordionData[1].links.map((item,index) => {
                                   return <li key={index}>
                                    {
                                        index === accordionData[1].links.length - 1 &&  <span className="font-normal">Ethereum Foundation{"'"}s</span>
                                    }{" "} <a href={item.link} target="_blank" className="border-b border-darkGray border-dashed">{item.linkTitle}</a>
                                   </li>
                                })
                            }
                        </ul>
                        <br />
                        For more information regarding Shapella do check our Shapella page by clicking <a href="/upgrades/shanghai" className="border-b border-dashed border-darkGray">here</a>.
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 pt-4">
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-2xl" >Consensus Layer</span>
                                <table className="w-full">
                                    <thead>
                                        <tr >
                                            <th className="bg-darkGray text-white font-normal w-2/5 pl-4">Client</th>
                                            <th className="bg-darkGray text-white font-normal">Version</th>
                                            <th className="bg-darkGray text-white font-normal pr-4">Download</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            Downloads[1].consensus?.map((item,index) => {
                                                return(
                                                    <tr key={index} className={index % 2 === 1 ? 'bg-lightGray/50': 'bg-white'}>
                                                        <td className="pl-4">{item.client}</td>
                                                        <td>{item.version}</td>
                                                        <td>
                                                            <a href={item.link} target="_blank" className="border-b border-darkGray border-dashed">{item.linkTitle}</a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-2xl" >Execution Layer</span>
                                <table className="w-full">
                                    <thead>
                                        <tr >
                                            <th className="bg-darkGray text-white font-normal w-2/5 pl-4">Client</th>
                                            <th className="bg-darkGray text-white font-normal">Version</th>
                                            <th className="bg-darkGray text-white font-normal pr-4">Download</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            Downloads[1].execution?.map((item,index) => {
                                                return(
                                                    <tr key={index} className={index % 2 === 1 ? 'bg-lightGray/50': 'bg-white'}>
                                                        <td className="pl-4">{item.client}</td>
                                                        <td>{item.version}</td>
                                                        <td>
                                                            <a href={item.link} target="_blank" className="border-b border-darkGray border-dashed">{item.linkTitle}</a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </Content>
                    </AccordionContent>
                </AccordionItem>
                {/*The Merge*/}
                <AccordionItem value={"3"}>
                    <AccordionTrigger className="md:text-2xl text-xl">
                        {
                            accordionData[2].upgradeName
                        }
                    </AccordionTrigger>
                    <AccordionContent>
                        <Content>
                        The Merge is a planned network upgrade for switching consensus from Proof of Work to Proof of Stake.
                        <br/>
                        <ul className="flex flex-col gap-2 list-disc">
                            <li><span className="font-normal">Mainnet upgrade date</span> - Thursday, 15th of September</li>
                            <li><span className="font-normal" >TTD</span> - 58750000000000000000000</li>
                            {
                                accordionData[2].links.map((item,index) => {
                                   return <li key={index}>
                                    {
                                        index === accordionData[2].links.length - 1 &&  <span className="font-normal">Ethereum Foundation{"'"}s</span>
                                    }{" "} <a href={item.link} target="_blank" className="border-b border-darkGray border-dashed">{item.linkTitle}</a>
                                   </li>
                                })
                            }
                        </ul>
                        <br />
                        For more information regarding Shapella do check our Shapella page by clicking <a href="/upgrades/the-merge" className="border-b border-dashed border-darkGray">here</a>.
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 pt-4">
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-2xl" >Consensus Layer</span>
                                <table className="w-full">
                                    <thead>
                                        <tr >
                                            <th className="bg-darkGray text-white font-normal w-2/5 pl-4">Client</th>
                                            <th className="bg-darkGray text-white font-normal">Version</th>
                                            <th className="bg-darkGray text-white font-normal pr-4">Download</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            Downloads[2].consensus?.map((item,index) => {
                                                return(
                                                    <tr key={index} className={index % 2 === 1 ? 'bg-lightGray/50': 'bg-white'}>
                                                        <td className="pl-4">{item.client}</td>
                                                        <td>{item.version}</td>
                                                        <td>
                                                            <a href={item.link} target="_blank" className="border-b border-darkGray border-dashed">{item.linkTitle}</a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-2xl" >Execution Layer</span>
                                <table className="w-full">
                                    <thead>
                                        <tr >
                                            <th className="bg-darkGray text-white font-normal w-2/5 pl-4">Client</th>
                                            <th className="bg-darkGray text-white font-normal">Version</th>
                                            <th className="bg-darkGray text-white font-normal pr-4">Download</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            Downloads[2].execution?.map((item,index) => {
                                                return(
                                                    <tr key={index} className={index % 2 === 1 ? 'bg-lightGray/50': 'bg-white'}>
                                                        <td className="pl-4">{item.client}</td>
                                                        <td>{item.version}</td>
                                                        <td>
                                                            <a href={item.link} target="_blank" className="border-b border-darkGray border-dashed">{item.linkTitle}</a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </Content>
                    </AccordionContent>
                </AccordionItem>
                {/*Gray Glacier*/}
                <AccordionItem value={"4"}>
                    <AccordionTrigger className="md:text-2xl text-xl">
                        {
                            accordionData[3].upgradeName
                        }
                    </AccordionTrigger>
                    <AccordionContent>
                        <Content>
                        This is a planned upgrade to delay the difficulty bomb to be noticeable in Summer 2022.
                        <br />
                        <ul className="flex flex-col gap-2 list-disc">
                            <li><span className="font-normal">Mainnet upgrade date</span> - Thursday, 30th of June</li>
                            <li><span className="font-normal" >Block</span> - 15050000</li>
                            {
                                accordionData[3].links.map((item,index) => {
                                   return <li key={index}>
                                    {
                                        index === accordionData[3].links.length - 1 &&  <span className="font-normal">Ethereum Foundation{"'"}s</span>
                                    }{" "} <a href={item.link} target="_blank" className="border-b border-darkGray border-dashed">{item.linkTitle}</a>
                                   </li>
                                })
                            }
                        </ul>
                        <br />
                        To understand how the “Difficulty Bomb” works in the Ethereum blockchain, please follow the recording of <a href="https://www.youtube.com/watch?v=qy81t7bZ-4Q&list=PL4cwHXAawZxqu0PKKyMzG_3BJV_xZTi1F&index=25&t=2s" target="_blank" className="border-b border-dashed border-darkGray">PEEPanEIP#54: EIP-4345: Difficulty Bomb Delay to June 2022 with T Jay Rush</a>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 pt-4">
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-2xl" >Client Specs</span>
                                <table className="w-full">
                                    <thead>
                                        <tr >
                                            <th className="bg-darkGray text-white font-normal w-2/5 pl-4">Client</th>
                                            <th className="bg-darkGray text-white font-normal">Version</th>
                                            <th className="bg-darkGray text-white font-normal pr-4">Download</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            Downloads[3].clientSpecs?.map((item,index) => {
                                                return(
                                                    <tr key={index} className={index % 2 === 1 ? 'bg-lightGray/50': 'bg-white'}>
                                                        <td className="pl-4">{item.client}</td>
                                                        <td>{item.version}</td>
                                                        <td>
                                                            <a href={item.link} target="_blank" className="border-b border-darkGray border-dashed">{item.linkTitle}</a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div>
                            <iframe width="470" height="270" src="https://www.youtube.com/embed/qy81t7bZ-4Q" title="PEEPanEIP#54: EIP-4345: Difficulty Bomb Delay to June 2022 with  T Jay Rush" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        </div>
                        </Content>
                    </AccordionContent>
                </AccordionItem>
                {/*Arrow Glacier*/}
                <AccordionItem value={"5"}>
                    <AccordionTrigger className="md:text-2xl text-xl">
                        {
                            accordionData[4].upgradeName
                        }
                    </AccordionTrigger>
                    <AccordionContent>
                        <Content>
                        This is a planned upgrade to delay the difficulty bomb to be noticeable in Summer 2022.
                        <br />
                        <ul className="flex flex-col gap-2 list-disc">
                            <li><span className="font-normal">Mainnet upgrade date</span> - Wednesday, 8th of December</li>
                            <li><span className="font-normal" >Planned for Epoch</span> - 13773000</li>
                            {
                                accordionData[4].links.map((item,index) => {
                                   return <li key={index}>
                                    {
                                        index === accordionData[4].links.length - 1 &&  <span className="font-normal">Ethereum Foundation{"'"}s</span>
                                    }
                                    {
                                        index === accordionData[4].links.length - 2 &&  <span className="font-normal">ECH explainer - </span>
                                    }{" "} <a href={item.link} target="_blank" className="border-b border-darkGray border-dashed">{item.linkTitle}</a>
                                   </li>
                                })
                            }
                        </ul>
                        <br />
                        To understand how the “Difficulty Bomb” works in the Ethereum blockchain, please follow the recording of <a href="https://eips.ethereum.org/EIPS/eip-4345" target="_blank" className="border-b border-dashed border-darkGray">PEEPanEIP#54: EIP-4345: Difficulty Bomb Delay to June 2022 with T Jay Rush</a> & <a href="https://youtu.be/QwCPrw-4d98" target="_blank" className="border-b border-dashed border-darkGray">PEEPanEIP #39: Difficulty bomb & EIP-3554 with James Hancock.</a>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 pt-4">
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-2xl" >Client Specs</span>
                                <table className="w-full">
                                    <thead>
                                        <tr >
                                            <th className="bg-darkGray text-white font-normal w-2/5 pl-4">Client</th>
                                            <th className="bg-darkGray text-white font-normal">Version</th>
                                            <th className="bg-darkGray text-white font-normal pr-4">Download</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            Downloads[4].clientSpecs?.map((item,index) => {
                                                return(
                                                    <tr key={index} className={index % 2 === 1 ? 'bg-lightGray/50': 'bg-white'}>
                                                        <td className="pl-4">{item.client}</td>
                                                        <td>{item.version}</td>
                                                        <td>
                                                            <a href={item.link} target="_blank" className="border-b border-darkGray border-dashed">{item.linkTitle}</a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </Content>
                    </AccordionContent>
                </AccordionItem>
                {/*Altair*/}
                <AccordionItem value={"6"}>
                    <AccordionTrigger className="md:text-2xl text-xl">
                        {
                            accordionData[5].upgradeName
                        }
                    </AccordionTrigger>
                    <AccordionContent>
                        <Content>
                        This is the first planned network upgrade for the Beacon chain (Ethereum 2.0). It is already activated on the Prater testnet. Follow the <a href="https://prater.consensus-monitor.stokes.io/" target="_blank" className="border-b border-darkGray border-dashed">consensus monitor</a> shared by Alex Stokes.

                        <ul className="flex flex-col gap-2 list-disc">
                            <li><span className="font-normal">Mainnet upgrade date</span> - Wednesday, 13th of March</li>
                            <li><span className="font-normal" >Epoch</span> - 269568</li>
                            {
                                accordionData[5].links.map((item,index) => {
                                   return <li key={index}>
                                    {
                                        index === accordionData[5].links.length - 1 &&  <span className="font-normal">Ethereum Foundation{"'"}s</span>
                                    }{" "} <a href={item.link} target="_blank" className="border-b border-darkGray border-dashed">{item.linkTitle}</a>
                                   </li>
                                })
                            }
                        </ul>
                        <br/>
                        <span className="font-medium text-2xl" >Resources</span>
                        <br />
                        <br/>
                        <a href="https://www.youtube.com/playlist?list=PL4cwHXAawZxoEw29YmqJtNoFaENUUAREn" target="_blank" className="border-b border-dashed border-darkGray">PEEPanEIP</a> recordings
                        <br />
                        <br />
                        <ul className="flex flex-col gap-2 list-disc">
                            {
                                AltairResources.map((item,index) => {
                                   return <li key={index}>
                                    <a href={item.link} target="_blank" className="border-b border-darkGray border-dashed">{item.linkTitle}</a>{" "}{item.suffix}
                                   </li>
                                })
                            }
                        </ul>
                        </Content>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}

const AltairResources = [
    {
        link: "https://youtu.be/iaAEGs1DMgQ",
        linkTitle: "Altair Beacon chain upgrade",
        suffix: "with Vitalik and Danny",
    },
    {
        link: "https://youtu.be/KdhHJa2SEwY",
        linkTitle: "Altair - Accounting reform",
        suffix: "with Alex Stokes",
    },
    {
        link: "https://youtu.be/Kv643dgRmMI",
        linkTitle: "Altair in Teku",
        suffix: "with Adrian Sutton",
    },
    {
        link: "https://youtu.be/92BeeDr1Nhw",
        linkTitle: "Altair upgrade & roadmap (Prysm)",
        suffix: "with Raul Jordan & Terence",
    },
    {
        link: "https://youtu.be/3xD2UyazRTE",
        linkTitle: "Beacon chain metrics & benchmarking",
        suffix: "with Parithosh & Leonardo",
    },
    {
        link: "https://youtu.be/FlFKZR_ofSo",
        linkTitle: "A Brief History of Ethereum's Future",
        suffix: "with Ben Edgington",
    },
]