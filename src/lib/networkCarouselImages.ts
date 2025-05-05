import { NetworkUpgradeNamespace } from "@/types";

export function getNetworkCarouselImages(network: string) {
  if (network in networkCarouselImages) {
    return networkCarouselImages[network as NetworkUpgradeNamespace];
  }
  return [];
}

export const networkCarouselImages: Record<NetworkUpgradeNamespace, string[]> = {
  "dencun": [],
  "pectra": [],
  "genesis": [],
  "shanghai": [],
  "fusaka": [],
  "frontier": [],
  "frontier-thawing": [],
  "london": [],
  "berlin": [],
  "arrow-glacier": [],
  "homestead": [],
  "byzantium": [],
  "constantinople": [],
  "constantinople-2": [],
  "petersburg": [],
  "istanbul": [],
  "muir-glacier": [],
  "altair": [],
  "gray-glacier": ["https://pbs.twimg.com/media/GqMUtBFacAAgJu1?format=jpg&name=4096x4096", "https://pbs.twimg.com/media/GqMUxt-asAA61VJ?format=jpg&name=4096x4096", "https://pbs.twimg.com/media/GqMU1PfaYAAuWB6?format=jpg&name=4096x4096", "https://pbs.twimg.com/media/GqMU5QLakAAmz80?format=jpg&name=4096x4096", "https://pbs.twimg.com/media/GqMU8j5bAAAwQfW?format=jpg&name=4096x4096", "https://pbs.twimg.com/media/GqMVAJga8AAkI4k?format=jpg&name=4096x4096"],
  "the-merge": [],
  "dao-fork": [],
};
