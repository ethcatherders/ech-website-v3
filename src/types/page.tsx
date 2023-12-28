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
