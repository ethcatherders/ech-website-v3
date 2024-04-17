"use client";
import PageContainer from "@/components/ui/pageContainer";
import Heading from "@/components/ui/Heading";
import Content from "@/components/ui/content";
import { useState, useEffect } from "react";
import { getAllEipResourcesTitle } from "@/app/_action";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion";
export default function EIPResources() {
  const [resourcesData, setResourcesData] = useState<any[]>([]);
  useEffect(() => {
    function fetchData() {
      getAllEipResourcesTitle().then((res) => {
        setResourcesData(res);
      });
    }
    fetchData();
  }, []);
  return (
    <PageContainer>
      <Heading text="EIP Resources" />

      <Content>
        EIP stands for Ethereum Improvement Proposal. An EIP is a design
        document providing information to the Ethereum community, or describing
        a new feature for Ethereum or its processes or environment. The EIP
        should provide a concise technical specification of the feature and a
        rationale for the feature.
        <br />
        <br /> We curate the resources for proposals in active discussion and
        also produce a{" "}
        <a
          href="https://www.youtube.com/playlist?list=PL4cwHXAawZxqu0PKKyMzG_3BJV_xZTi1F"
          className="border-b-2 border-dashed border-lightGray text-lightGray"
        >
          PEEPanEIP
        </a>{" "}
        video series focused on the EIPs and features of the upcoming Ethereum
        network upgrades.
      </Content>

      <div className="flex lg:flex-row flex-col w-full justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="xl:text-4xl lg:text-3xl sm:text-2xl text-xl text-left font-roboto font-bold text-darkGray">
            Additional Resources
          </h1>
          <div className="flex flex-col gap-2 h-96 overflow-y-auto">
            {resourcesData.map((title, index) => (
              <div key={index} className="w-full">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`${index}`}>
                    <AccordionTrigger className="lg:text-2xl md:text-xl text-lg font-bold">
                      {title.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-2">
                        {title.resources?.filter(
                          (resource: any) => resource.type === "DISCUSSIONS"
                        ).length !== 0 && (
                          <span className="text-darkGray font-semibold lg:text-2xl md:text-xl text-lg">
                            Discussions
                          </span>
                        )}
                        {title.resources
                          ?.filter(
                            (resource: any) => resource.type === "DISCUSSIONS"
                          )
                          ?.map((resource: any, index: number) => (
                            <span key={index}>
                              <a
                                href={resource.link}
                                className="text-lightGray lg:text-xl md:text-lg text-base"
                                target="_blank"
                              >
                                {resource.title}
                              </a>
                              <br />
                            </span>
                          ))}
                      </div>

                      <div className="flex flex-col gap-2">
                        {title.resources?.filter(
                          (resource: any) => resource.type === "BLOG"
                        ).length !== 0 && (
                          <span className="text-darkGray font-semibold lg:text-2xl md:text-xl text-lg">
                            Blogs
                          </span>
                        )}
                        {title.resources
                          ?.filter((resource: any) => resource.type === "BLOG")
                          ?.map((resource: any, index: number) => (
                            <span key={index}>
                              <a
                                href={resource.link}
                                className="text-lightGray lg:text-xl md:text-lg text-base"
                                target="_blank"
                              >
                                {resource.title}
                              </a>
                              <br />
                            </span>
                          ))}
                      </div>

                      <div className="flex flex-col gap-2">
                        {title.resources?.filter(
                          (resource: any) => resource.type === "VIDEO"
                        ).length !== 0 && (
                          <span className="text-darkGray font-semibold lg:text-2xl md:text-xl text-lg">
                            Videos
                          </span>
                        )}
                        {title.resources
                          ?.filter((resource: any) => resource.type === "VIDEO")
                          ?.map((resource: any, index: number) => (
                            <span key={index}>
                              <a
                                href={resource.link}
                                className="text-lightGray lg:text-xl md:text-lg text-base"
                                target="_blank"
                              >
                                {resource.title}
                              </a>
                              <br />
                            </span>
                          ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-roboto font-bold text-darkGray text-center">
            PEEPanEIP
          </h1>

          <iframe
            width="560"
            height="315"
            src={
              "https://www.youtube.com/embed/videoseries?si=80VPFDAces4no7p5&amp;list=PL4cwHXAawZxqu0PKKyMzG_3BJV_xZTi1F"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </PageContainer>
  );
}
("use client");
import PageContainer from "@/components/ui/pageContainer";
import Heading from "@/components/ui/Heading";
import Content from "@/components/ui/content";
import { useState, useEffect } from "react";
import { getAllEipResourcesTitle } from "@/app/_action";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion";
export default function EIPResources() {
  const [resourcesData, setResourcesData] = useState<any[]>([]);
  useEffect(() => {
    function fetchData() {
      getAllEipResourcesTitle().then((res) => {
        setResourcesData(res);
      });
    }
    fetchData();
  }, []);
  return (
    <PageContainer>
      <Heading text="EIP Resources" />

      <Content>
        EIP stands for Ethereum Improvement Proposal. An EIP is a design
        document providing information to the Ethereum community, or describing
        a new feature for Ethereum or its processes or environment. The EIP
        should provide a concise technical specification of the feature and a
        rationale for the feature.
        <br />
        <br /> We curate the resources for proposals in active discussion and
        also produce a{" "}
        <a
          href="https://www.youtube.com/playlist?list=PL4cwHXAawZxqu0PKKyMzG_3BJV_xZTi1F"
          className="border-b-2 border-dashed border-lightGray text-lightGray"
        >
          PEEPanEIP
        </a>{" "}
        video series focused on the EIPs and features of the upcoming Ethereum
        network upgrades.
      </Content>

      <div className="flex lg:flex-row flex-col w-full justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="xl:text-4xl lg:text-3xl sm:text-2xl text-xl text-left font-roboto font-bold text-darkGray">
            Additional Resources
          </h1>
          <div className="flex flex-col gap-2 h-96 overflow-y-auto">
            {resourcesData.map((title, index) => (
              <div key={index} className="w-full">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`${index}`}>
                    <AccordionTrigger className="lg:text-2xl md:text-xl text-lg font-bold">
                      {title.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-2">
                        {title.resources?.filter(
                          (resource: any) => resource.type === "DISCUSSIONS"
                        ).length !== 0 && (
                          <span className="text-darkGray font-semibold lg:text-2xl md:text-xl text-lg">
                            Discussions
                          </span>
                        )}
                        {title.resources
                          ?.filter(
                            (resource: any) => resource.type === "DISCUSSIONS"
                          )
                          ?.map((resource: any, index: number) => (
                            <span key={index}>
                              <a
                                href={resource.link}
                                className="text-lightGray lg:text-xl md:text-lg text-base"
                                target="_blank"
                              >
                                {resource.title}
                              </a>
                              <br />
                            </span>
                          ))}
                      </div>

                      <div className="flex flex-col gap-2">
                        {title.resources?.filter(
                          (resource: any) => resource.type === "BLOG"
                        ).length !== 0 && (
                          <span className="text-darkGray font-semibold lg:text-2xl md:text-xl text-lg">
                            Blogs
                          </span>
                        )}
                        {title.resources
                          ?.filter((resource: any) => resource.type === "BLOG")
                          ?.map((resource: any, index: number) => (
                            <span key={index}>
                              <a
                                href={resource.link}
                                className="text-lightGray lg:text-xl md:text-lg text-base"
                                target="_blank"
                              >
                                {resource.title}
                              </a>
                              <br />
                            </span>
                          ))}
                      </div>

                      <div className="flex flex-col gap-2">
                        {title.resources?.filter(
                          (resource: any) => resource.type === "VIDEO"
                        ).length !== 0 && (
                          <span className="text-darkGray font-semibold lg:text-2xl md:text-xl text-lg">
                            Videos
                          </span>
                        )}
                        {title.resources
                          ?.filter((resource: any) => resource.type === "VIDEO")
                          ?.map((resource: any, index: number) => (
                            <span key={index}>
                              <a
                                href={resource.link}
                                className="text-lightGray lg:text-xl md:text-lg text-base"
                                target="_blank"
                              >
                                {resource.title}
                              </a>
                              <br />
                            </span>
                          ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="xl:text-4xl lg:text-3xl sm:text-2xl text-xl text-left font-roboto font-bold text-darkGray">
            PEEPanEIP
          </h1>

          <iframe
            width="560"
            height="315"
            src={
              "https://www.youtube.com/embed/videoseries?si=80VPFDAces4no7p5&amp;list=PL4cwHXAawZxqu0PKKyMzG_3BJV_xZTi1F"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </PageContainer>
  );
}
