import { NetworkUpgrade, eipAuthorsByUpgrade } from "@/constants/eip-authors";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: { upgrade: NetworkUpgrade; username: string } }
) {
  const { upgrade, username } = params;
  const eipAuthors = eipAuthorsByUpgrade[upgrade];
  const author = eipAuthors.find((author) => author.github === `https://github.com/${username}`);
  return NextResponse.json({ data: author });
}
