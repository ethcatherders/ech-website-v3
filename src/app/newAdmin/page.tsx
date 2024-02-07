import Button from "@/components/button/page";
export default function Admin() {
  const tabs = [
    { label: "Network Upgrades", link: "/newAdmin/network_upgrades" },
    { label: "Blogs and Events", link: "/newAdmin/blogs_events" },
  ];
  return (
    <>
      <div className="flex justify-center w-full h-screen items-center gap-5">
        {tabs.map((tab, index) => {
          return (
            <span key={index}>
              <Button text={tab.label} link={tab.link} size="md" />
            </span>
          );
        })}
      </div>
    </>
  );
}
