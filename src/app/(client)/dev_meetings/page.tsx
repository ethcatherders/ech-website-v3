'use client';
import PageContainer from "@/components/ui/pageContainer";
import Heading from "@/components/ui/Heading";
import Content from "@/components/ui/content";
import { useState, useEffect } from "react";
import { getAllEipResourcesTitle } from "@/app/_action";
import { Accordion, AccordionTrigger, AccordionItem, AccordionContent } from "@/components/ui/accordion";
import DevMeetingCarousel from "@/components/devMeetings/devMeetingsCarousel";
export default function DevMeetings() {
  const [resourcesData, setResourcesData] = useState<any[]>([]);
  useEffect(() => {
    function fetchData(){
      getAllEipResourcesTitle().then((res) => {
        setResourcesData(res);
      })
    }
    fetchData();
  }, []);
  return (
    <PageContainer>
      <Heading text="Ethereum developers' meetings" />

      <Content>
      To ensure Ethereum client developers and researchers are aligned ahead of upcoming network upgrades, a schedule of regular meetings are in place. These meetings usually consist of client team progress updates, research updates, as well as technical discussion on changes, in process improvement discussion, and forward planning.
      </Content>
      <Content>
        <span className="font-semibold text-darkGray">    
The Ethereum Cat Herders support these meetings by scheduling, recording, moderating, documenting notes, and coordinating with client teams and community as needed.
        </span>
      </Content>

      <Heading text="Explore the Ethereum client implementation & process improvement meetings" />

      <DevMeetingCarousel />
    </PageContainer>
  );
}
