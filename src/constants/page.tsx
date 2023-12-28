import type { Nav } from "@/types/page";
import type { Socials } from "@/types/page";

import { BsTwitterX, BsGithub, BsYoutube } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

export const nav: Nav[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Activities",
    children: [
      {
        label: "Network Upgrades",
        link: "/network_upgrades",
      },
      {
        label: "Practra Upgrade",
        link: "/network_upgrades/practra",
      },
      {
        label: "Dencun Upgrade",
        link: "/network_upgrades/dencun",
      },
      {
        label: "EIP Resources",
        link: "/eip",
      },
      {
        label: "Meetings",
        link: "/dev_meetings",
      },
      {
        label: "Testnets",
        link: "/testnets",
      },
      {
        label: "Podcasts",
        link: "/podcast",
      },
      {
        label: "PEEPanEIP",
        link: "/peepaneip",
      },
      {
        label: "Surveys",
        link: "/surveys",
      },
    ],
  },
  {
    label: "Calender",
    link: "/calender",
  },
  {
    label: "Blog",
    link: "/blog",
  },
  {
    label: "ECH Youtube",
    link: "/ech_youtube",
  },
  {
    label: "About Us",
    link: "/about",
  },
];

export const socials: Socials[] = [
  {
    icon: <BsTwitterX size={20} />,
    link: "https://twitter.com/EthCatHerders",
  },
  {
    icon: <BsGithub size={20} />,
    link: "https://github.com/ethereum-cat-herders",
  },
  {
    icon: <BsYoutube size={20} />,
    link: "https://youtube.com/@ethcatherders",
  },
  {
    icon: <GrLinkedinOption size={20} />,
    link: "https://www.linkedin.com/company/ethereum-cat-herders/",
  },
];
