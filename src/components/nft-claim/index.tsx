import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function NftClaimCard() {
  const [isGithubVerified, setIsGithubVerified] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);
  const [githubUsername, setGithubUsername] = useState("");

  return (
    <div className="flex flex-col box-black-bg w-full justify-between h-[30rem] items-center p-6 border-2 border-black rounded-2xl space-y-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">Is your EIP in Pectra?</h3>
        <p className="text-sm">If you authored an EIP included in the upcoming Pectra upgrade, you can claim our Pectra edition NFT.</p>
        {isGithubVerified ? (
          isEligible ? (
            isClaimed ? (
              <p>You have claimed the NFT.</p>
            ) : (
              <EligibleClaimContent githubUsername={githubUsername} />
            )
          ) : (
            <IneligibleClaimContent />
          )
        ) : (
          <UnverifiedGithubContent />
        )}
      </div>
    </div>
  )
}

function UnverifiedGithubContent() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">To prove you are an author, we need to verify your Github account.</p>
      <Button>Verify your Github</Button>
    </div>
  )
}

function EligibleClaimContent({ githubUsername }: { githubUsername: string }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-md font-bold">{githubUsername}</p>
      <p className="text-sm">You are eligible to claim the NFT.</p>
      <Input placeholder="Enter your ENS or address" />
      <Button>Claim</Button>
      <Button variant="ghost">Disconnect</Button>
    </div>
  )
}

function IneligibleClaimContent() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">You are not eligible to claim the NFT.</p>
      <p className="text-sm">You can claim the NFT by clicking the button below.</p>
    </div>
  )
}
