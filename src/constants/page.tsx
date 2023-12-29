import type { Nav, Socials, MembersData } from "@/types/page";

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

export const members: MembersData[] = [
  {
    name: "Pooja Ranjan",
    twitterLink: "https://twitter.com/poojaranjan19",
    githubLink: "https://github.com/poojaranjan",
    bio: "Pooja Ranjan is Herder-in-chief at Ethereum Cat Herders supporting the Ethereum blockchain with project management & process improvement. She is the Founder of a blockchain publishing website EtherWorld and also co-founded Eth2 blockchain explorer BlockAction.",
    image: "/assets/about_pooja_ranjan.png",
  },
  {
    name: "Hudson Jameson",
    twitterLink: "https://twitter.com/hudsonjameson",
    image: "/assets/about_hudson.png",
  },
  {
    name: "Tim Beiko",
    twitterLink: "https://twitter.com/TimBeiko",
    image: "/assets/about_tim.png",
  },
  {
    name: "Alita Moore",
    githubLink: "https://github.com/alita-moore",
    bio: "Software engineer and Peep and EIP Interviewer",
    image: "/assets/about_alita_moore.png",
  },
  {
    name: " Willian Schwab",
    githubLink: "https://github.com/wschwab",
    twitterLink: "https://twitter.com/William94029369",
    image: "/assets/about_no_pic.png",
  },
  {
    name: "Brent Allsop",
    githubLink: "https://github.com/BrentAllsop",
    twitterLink: "https://twitter.com/Brent_Allsop",
    image: "/assets/about_brent_allsop.png",
  },
  {
    name: "Edson Allyon",
    githubLink: "https://github.com/edsonayllon",
    twitterLink: "https://twitter.com/relativeread",
    bio: "Product Manager @dHedgeDAO. Software Engineer, Ethereum ecosystem contributor",
    image: "/assets/about_ed.jpeg",
  },
  {
    name: "Jim Bennett",
    githubLink: "https://github.com/CanonizerJim",
    twitterLink: "https://twitter.com/JimBforMayor",
    bio: "Co-Founder of Canonizer. MBA. Building and tracking consensus facilitator.",
    image: "/assets/about_jim_bennett.png",
  },
  {
    name: "Charles St. Louis",
    githubLink: "https://github.com/CPSTL",
    twitterLink: "https://twitter.com/CharlieStLouis",
    bio: "COO of Element Finance. MBA. Building and tracking consensus facilitator.",
    image: "/assets/about_charlie.jpg",
  },
  {
    name: "Lane Rettig",
    twitterLink: "https://twitter.com/lrettig",
    image: "/assets/about_lane.jpg",
  },
  {
    name: "Shane Lightowler",
    githubLink: "https://github.com/shanelightowler",
    twitterLink: "https://twitter.com/Coldsnap",
    bio: "Ethereum enthusiast and Eulerbeats OG",
    image: "/assets/about_shane_lightowler.png",
  },
];

export const contributors: MembersData[] = [
  {
    name: "Joel Cahill",
    githubLink: "https://github.com/jkcahill",
    twitterLink: "https://twitter.com/jkcahill1",
    bio: "Software Engineer",
    image: "/assets/about_joel.jpeg",
  },
  {
    name: "Santhosh",
    bio: "QA Analyst",
    image: "/assets/about_no_pic.png",
  },
  {
    name: "Kenneth Luster",
    githubLink: "https://github.com/KenMan79",
    twitterLink: "https://twitter.com/KennethLuster1",
    bio: "Enterprise Ethereum Developer",
    image: "/assets/about_no_pic.png",
  },
];
