import type {
  Nav,
  Socials,
  MembersData,
  PodcastCards,
  ActiveTestnet,
} from "@/types/page";

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

export const podcastCardData: PodcastCards[] = [
  {
    title: "Spotify",
    icon: "/podcasts/spotify.png",
    link: "https://open.spotify.com/show/7dgxKMkSyy3HWtQW7OfqXA",
  },
  {
    title: "Apple Podcasts",
    icon: "/podcasts/apple_podcasts.png",
    link: "https://podcasts.apple.com/us/podcast/ethereum-cat-herders-podcast/id1620565121",
  },
  {
    title: "Pocket Casts",
    icon: "/podcasts/pocket_casts.png",
    link: "https://pca.st/eoqn51p8",
  },
  {
    title: "Radio Public",
    icon: "/podcasts/radiopublic.png",
    link: "https://radiopublic.com/ethereum-cat-herders-podcast-G230Pz",
  },
  {
    title: "Castbox",
    icon: "/podcasts/castbox.png",
    link: "https://castbox.fm/channel/id4779485?country=gb",
  },
  {
    title: "Stitcher",
    icon: "/podcasts/stitcher_dark.png",
    link: "https://www.stitcher.com/podcast/ethereum-cat-herders-podcast",
  },
];

export const surveys: {
  title: string;
  link: string;
}[] = [
  {
    title: "Ethereum Client Diversity Survey 2023",
    link: "https://medium.com/ethereum-cat-herders/exploring-ethereums-client-ecosystem-afc9affa84dd",
  },
  {
    title: "Ethereum Cat Herders Community Feedback",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSewZZNwEpQlLtsyF8Bs7XDuyWoEKDyo-t_ZUXiCP-BvF6HS3A/viewform",
  },
  {
    title: "Ethereum network upgrade",
    link: "https://docs.google.com/forms/d/11MJU9tBYb5Z44EpjAIX8hNJ8zG9a960jWKTVLE-7Z_0/edit",
  },
  {
    title: "Ethereum blockchain users and developers research",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeugRHv93fizew0zeqXFOOnQIbjbWnVHoThLJR3f3g6gVvXhQ/viewform",
  },
  {
    title: "1559 community outreach",
    link: "https://medium.com/ethereum-cat-herders/eip-1559-community-outreach-report-aa18be0666b5",
  },
  {
    title: "Critical installation survey",
    link: "https://medium.com/ethereum-cat-herders/the-state-of-client-diversity-in-ethereum-2ca915a3d768",
  },
];

export const activeTestnets: ActiveTestnet[] = [
  {
    name: "Sepolia",
    description:
      "Sepolia is the recommended default testnet for application development. The Sepolia network uses a permissioned validator set. It's fairly new, meaning its state and history are both quite small. This means the network is quick to sync to and that running a node on it requires less storage. This is useful for users who want to quickly spin up a node and interact with the network directly.",
    bullets: [
      "Closed validator set, controlled by client & testing teams",
      "New testnet, less applications deployed than other testnets",
      "Fast to sync and running a node requires minimal disk space",
    ],
    resources: [
      {
        title: "Website",
        link: "https://sepolia.dev/",
      },
      {
        title: "Github",
        link: "https://github.com/eth-clients/sepolia",
      },
      {
        title: "Otterscan",
        link: "https://sepolia.otterscan.io/",
      },
      {
        title: "Etherscan",
        link: "https://sepolia.etherscan.io/",
      },
    ],
    faucets: [
      {
        title: "PoW Faucet",
        link: "https://sepolia-faucet.pk910.de/",
      },
      {
        title: "Quicknode",
        link: "https://faucet.quicknode.com/drip",
      },
      {
        title: "Grabteeth",
        link: "https://grabteeth.xyz/",
      },
      {
        title: "Alchemy",
        link: "https://sepoliafaucet.com/",
      },
      {
        title: "Infura",
        link: "https://www.infura.io/faucet/sepolia",
      },
    ],
  },
  {
    name: "Holešky",
    warning: "For Validators and Infra Only",
    description:
      "Holešky (Holešovice Testnet) is the first long-standing, merged-from-genesis, public Ethereum testnet. Holešky will replace Goerli as a staking, infrastructure and protocol-developer testnet in 2023. For testing decentralized applications, smart contracts, and other EVM functionality, please use Sepolia!",
    resources: [
      {
        title: "Website",
        link: "https://holesky.ethpandaops.io/",
      },
      {
        title: "Github",
        link: "https://github.com/eth-clients/holesky",
      },
      {
        title: "Otterscan",
        link: "https://holesky.otterscan.io/",
      },
      {
        title: "Etherscan",
        link: "https://holesky.etherscan.io/",
      },
    ],
    faucets: [
      {
        title: "PoW Faucet",
        link: "https://holesky-faucet.pk910.de/",
      },
      {
        title: "Quicknode",
        link: "https://faucet.quicknode.com/drip",
      },
      {
        title: "Tatum",
        link: "https://faucets.tatum.io/",
      },
      {
        title: "Stakely",
        link: "https://stakely.io/en/faucet",
      },
      {
        title: "Automata",
        link: "https://www.holeskyfaucet.io/",
      },
    ],
  },
  {
    name: "Goerli",
    warning: "Deprecated By End of 2023",
    description:
      "Goerli is a testnet for testing validating and staking. The Goerli network is open for users wanting to run a testnet validator. Stakers wanting to test protocol upgrades before they are deployed to mainnet should therefore use Goerli.",
    bullets: [
      "Open validator set, stakers can test network upgrades",
      "Large state, useful for testing complex smart contract interactions",
      "Longer to sync and requires more storage to run a node",
    ],
    resources: [
      {
        title: "Website",
        link: "https://goerli.net/",
      },
      {
        title: "Github",
        link: "https://github.com/eth-clients/goerli",
      },
      {
        title: "Bitquery",
        link: "https://explorer.bitquery.io/goerli",
      },
      {
        title: "Etherscan",
        link: "https://goerli.etherscan.io/",
      },
    ],
    faucets: [
      {
        title: "PoW Faucet",
        link: "https://goerli-faucet.pk910.de/",
      },
      {
        title: "Quicknode",
        link: "https://faucet.quicknode.com/drip",
      },
      {
        title: "Grabteeth",
        link: "https://grabteeth.xyz/",
      },
      {
        title: "Alchemy",
        link: "https://goerlifaucet.com/",
      },
      {
        title: "Paradigm",
        link: "https://faucet.paradigm.xyz/",
      },
    ],
  },
];
