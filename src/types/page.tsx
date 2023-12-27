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
