import { hasAlreadyClaimed, findEipAuthorByGithubUsername } from "@/components/nft-claim/utils";
import { NetworkUpgrade, eipAuthorsByUpgrade } from "@/constants/eip-authors";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: { upgrade: NetworkUpgrade; username: string } }
) {
  const { upgrade, username } = params;
  const eipAuthors = eipAuthorsByUpgrade[upgrade];
  const author = findEipAuthorByGithubUsername(eipAuthors, username);
  if (!author) {
    return NextResponse.json({ author, hasClaimed: false });
  }
  const hasClaimed = await hasAlreadyClaimed(username, upgrade)
  console.log({ hasClaimed })
  return NextResponse.json({ author, hasClaimed });
}
