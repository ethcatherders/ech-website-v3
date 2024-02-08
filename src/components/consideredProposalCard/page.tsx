import type { consdideredProposal } from "@/types/page";
import Button from "@/components/button/page";

export default function consdideredProposal({ data }: { data: any }) {
  return (
    <>
      <div className="max-w-sm flex flex-col space-y-6 h-full justify-between py-12">
        <h1 className="text-2xl font-roboto font-bold text-darkGray text-center">
          {data.name}
        </h1>

        <p className="max-w-xl text-justify">{data.description}</p>

        <div className="flex flex-wrap gap-2 justify-center">
          <a href={data.proposalLink} target="_blank">
            <button className="text-md border border-darkGray py-1 px-2 rounded-md w-32">
              EIP Proposal
            </button>
          </a>
          <a href={data.proposalLink} target="_blank">
            <button className="text-md border border-darkGray py-1 px-2 rounded-md w-32">
              EIP Discussion
            </button>
          </a>
          <a href={data.proposalLink} target="_blank">
            <button className="text-md border border-darkGray py-1 px-2 rounded-md w-28">
              Video
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
