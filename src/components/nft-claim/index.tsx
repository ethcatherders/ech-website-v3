import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { getSession, signIn, signOut } from "next-auth/react";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

export function NftClaimCard() {
  const [isEligible, setIsEligible] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);
  const [githubProfile, setGithubProfile] = useState<{ name: string, image: string }|null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const session = await getSession();
    if (session) {
      setGithubProfile({ name: session.user.name, image: session.user.image ?? "" });
    }
  }

  return (
    <div className={`flex flex-col box-black-bg w-full justify-between h-[${isEligible && !isClaimed ? "25" : "18"}rem] items-center p-6 border-2 border-black rounded-2xl space-y-8`}>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h3 className="text-lg font-bold">Is your EIP in Pectra?</h3>
        <p className="text-sm text-center max-w-md mb-4">If you authored an EIP included in the upcoming Pectra upgrade, you can claim our Pectra edition NFT.</p>
        {githubProfile ? (
          isEligible ? (
            isClaimed ? (
              <AlreadyClaimedContent githubUsername={githubProfile.name} githubImage={githubProfile.image} />
            ) : (
              <EligibleClaimContent githubUsername={githubProfile.name} githubImage={githubProfile.image} />
            )
          ) : (
            <IneligibleClaimContent githubUsername={githubProfile.name} githubImage={githubProfile.image} />
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
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <p className="text-sm">To prove you are an author, we need to verify your Github account.</p>
      <Button
        className="w-full max-w-xs"
        onClick={() => signIn("github")}
      >
        Verify your Github
      </Button>
    </div>
  )
}

function EligibleClaimContent({ githubUsername, githubImage }: { githubUsername: string, githubImage: string }) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <div className="flex flex-row gap-2 justify-center items-center">
        <Image src={githubImage} alt="profile" width={30} height={30} className="rounded-full" />
        <p className="text-lg font-bold">{githubUsername}</p>
      </div>
      <p className="text-sm">You are eligible to claim!</p>
      <Input placeholder="Enter your ENS or address" className="text-center max-w-sm" />
      <Button className="w-full max-w-xs">Claim</Button>
      <Button variant="ghost" className="w-full max-w-xs" onClick={() => signOut()}>Disconnect</Button>
    </div>
  )
}

function AlreadyClaimedContent({ githubUsername, githubImage }: { githubUsername: string, githubImage: string }) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <div className="flex flex-row gap-2 justify-center items-center">
        <Image src={githubImage} alt="profile" width={30} height={30} className="rounded-full" />
        <p className="text-lg font-bold">{githubUsername}</p>
      </div>
      <p className="text-sm">You have already claimed the NFT.</p>
      <Button variant="ghost" className="w-full max-w-xs" onClick={() => signOut()}>Disconnect</Button>
    </div>
  )
}

function IneligibleClaimContent({ githubUsername, githubImage }: { githubUsername: string, githubImage: string }) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <div className="flex flex-row gap-2 justify-center items-center">
        <Image src={githubImage} alt="profile" width={30} height={30} className="rounded-full" />
        <p className="text-lg font-bold">{githubUsername}</p>
      </div>
      <p className="text-sm">You are not eligible to claim.</p>
      <Button variant="ghost" className="w-full max-w-xs" onClick={() => signOut()}>Disconnect</Button>
    </div>
  )
}
