"use client";
import Button from "@/components/button/page";
import { SessionProvider } from "next-auth/react";
import { getCurrentUser } from "@/lib/session";
import { useEffect, useState } from "react";

export default function AdminPage() {
  return (
    <SessionProvider>
      <PageContent />
    </SessionProvider>
  );
}

function PageContent() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    async function fetchData() {
      const user = await getCurrentUser();
      setUser(user);
    }
    fetchData();
  }, []);
  const tabs: any[] = [
    { label: "Network Upgrades", link: "/admin/network_upgrades" },
    { label: "Blogs and Events", link: "/admin/blogs_events" },
    { label: "Youtube", link: "/admin/youtube" },
    { label: "Surveys", link: "/admin/surveys" },
    { label: "EIP Resources", link: "/admin/eip_resources" },
    { label: "Surveys", link: "/admin/surveys" },
    { label: "Meetings", link: "/admin/meetings" },
    { label: "Meet the Herders", link: "/admin/mth" },
  ];
  return (
    <>
      <div className="lg:w-[65vw] md:w-[75vw] w-[90vw] mx-auto">
        <div className="flex flex-col justify-center h-screen items-center gap-8">
          <h1 className="text-left w-full justify-start xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold font-antonio">
            Hello! {user?.name},
          </h1>
          <div className="flex flex-wrap lg:flex-row flex-col gap-5 justify-center items-center">
            {tabs.map((tab, index) => {
              return (
                <span key={index}>
                  <Button text={tab.label} link={tab.link} size="md" />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
