import { ReactElement } from "react";

export type Nav = {
  label: string;
  link?: string;
  children?: Nav[];
};

export type Button = {
  text: string;
  link: string;
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
  title: string;
  description: string;
  proposalLink: string;
  videoLink: string;
  discussionLink: string;
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
  title: string;
  linkTitle1: string;
  link1: string;
  linkTitle2: string;
  link2: string;
  linkTitle3: string;
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
