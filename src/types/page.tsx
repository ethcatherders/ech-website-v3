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
  fontSize?: string;
};

export type Socials = {
  icon: ReactElement;
  link: string;
};
