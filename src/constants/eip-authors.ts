export type NetworkUpgrade = "dencun" | "pectra";
export interface EipAuthor {
  github: string;
  eips: string[];
}

export const eipAuthorsByUpgrade: {
  [key in NetworkUpgrade]: EipAuthor[];
} = {
  dencun: [],
  pectra: [
    {
      github: "https://github.com/geovgy",
      eips: ["2537"],
    },
    {
      github: "https://github.com/shamatar",
      eips: ["2537"],
    },
    {
      github: "https://github.com/ineffectualproperty", 
      eips: ["2537"],
    },
    {
      github: "https://github.com/ralexstokes",
      eips: ["2537", "7742"],
    },
    {
      github: "https://github.com/asanso",
      eips: ["2537"],
    },
    {
      github: "https://github.com/vbuterin",
      eips: ["2935", "7702", "7623"],
    },
    {
      github: "https://github.com/tkstanczak",
      eips: ["2935"],
    },
    {
      github: "https://github.com/gballet",
      eips: ["2935"],
    },
    {
      github: "https://github.com/g11tech",
      eips: ["2935"],
    },
    {
      github: "https://github.com/tanishqjasoria",
      eips: ["2935"],
    },
    {
      github: "https://github.com/jsign",
      eips: ["2935"],
    },
    {
      github: "https://github.com/jochem-brouwer",
      eips: ["2935"],
    },
    {
      github: "https://github.com/s1na",
      eips: ["2935"],
    },
    {
      github: "https://github.com/mkalinin",
      eips: ["6110", "7002", "7251"],
    },
    {
      github: "https://github.com/djrtwo",
      eips: ["6110", "7002"],
    },
    {
      github: "https://github.com/petertdavies",
      eips: ["6110"],
    },
    {
      github: "https://github.com/adietrichs",
      eips: ["7002", "7702"],
    },
    {
      github: "https://github.com/hwwhww",
      eips: ["7002"],
    },
    {
      github: "https://github.com/lightclient",
      eips: ["7002", "7251", "7685", "7702"],
    },
    {
      github: "https://github.com/michaelneuder",
      eips: ["7251"],
    },
    {
      github: "https://github.com/fradamt",
      eips: ["7251"],
    },
    {
      github: "https://github.com/dapplion",
      eips: ["7251", "7549"],
    },
    {
      github: "https://github.com/adiasg",
      eips: ["7251"],
    },
    {
      github: "https://github.com/justindrake",
      eips: ["7251"],
    },
    {
      github: "https://github.com/SamWilsn",
      eips: ["7702"],
    },
    {
      github: "https://github.com/nerolation",
      eips: ["7623"],
    },
    {
      github: "https://github.com/MaxResnick",
      eips: ["7762"],
    },
  ],
};
