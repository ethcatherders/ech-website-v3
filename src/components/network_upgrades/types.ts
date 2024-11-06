import { consideredEIP, ResourcesData, UpdatesData, VideosData } from "@/types";

export type UpgradeData = {
  consideredProposals: consideredEIP[];
  desc1: string;
  desc2: string;
  embedLink: string;
  updates: UpdatesData[];
  videos: VideosData[];
  resources: ResourcesData[];
}