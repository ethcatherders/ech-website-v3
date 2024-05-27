import { MTHType, UpgradePropsalStatus } from "@prisma/client";
import { ReactElement } from "react";
import { StringValidation } from "zod";

export type Nav = {
  label: string;
  link?: string;
  children?: Nav[];
};

export type Target = "_blank" | "_self" | "_parent" | "_top";

export type Button = {
  text: string;
  link: string;
  target?: Target;
  height?: string;
  width?: string;
  size?: "sm" | "md" | "lg";
  fontSize?: string;
  inverted?: boolean;
};

export type Socials = {
  icon: ReactElement;
  link: string;
};

export type consdideredProposal = {
  id: number;
  name: string;
  description: string;
  proposalLink: string;
  videoLink: string;
  discussionLink: string;
  status : UpgradePropsalStatus
};

export type InfoForUpgrade = {
  description1: string;
  description2: string;
  embedLink: string;
};

export type UpdatesData = {
  date: string;
  title: string;
  linkTitle: string;
  link: string;
};

export type VideosData = {
  title: string;
  link: string;
};

export type ResourcesData = {
  title: string;
  link: string;
};

export type YoutubeLinks = {
  title: string;
  link: string;
};

export type BlogsData = {
  title: string;
  link: string;
  date: string;
};

export type EventsData = {
  name: string;
  linktitle1: string;
  link1: string;
  linktitle2: string;
  link2: string;
  linktitle3: string;
  link3: string;
};

export type MembersData = {
  name: string;
  twitterLink?: string;
  githubLink?: string;
  bio?: string;
  image: string;
};

export type PodcastCards = {
  title: string;
  link: string;
  icon: string;
};

export type ActiveTestnet = {
  name: string;
  description: string;
  warning?: string;
  bullets?: string[];
  resources: {
    title: string;
    link: string;
  }[];
  faucets: {
    title: string;
    link: string;
  }[];
};

export type BlockchainUpgrades = {
  name: string;
  number: number;
  proposals: {
    title: string;
    link: string;
  }[];
  date: string;
  readMoreLink: string;
  extraLinks: {
    link: string;
    title: string;
  }[];
};

export type DepretectedTestnets = {
  name: string;
  description: string;
  flavour: string;
  genesis: string;
  lts: string;
  eos: string;
  image: string;
};

export type NetworkUpgrades = {
  upgrade: string;
  image: string;
  links?: {
    linkTitle: string;
    link: string;
  }[];
  number?: string;
  readMore?: string;
  date?: string;
};

export type MTHItem = {
  id: number;
  link: string;
  title: string;
  type: MTHType;
};
