import { getTokenIdOfUpgrade, hasAlreadyClaimed } from "@/components/nft-claim/utils";
import { NetworkUpgrade } from "@/constants/eip-authors";
import { NextRequest, NextResponse } from "next/server";
import { http, isAddress, parseAbi, toHex } from "viem";
import { createWalletClient } from "viem";
import { generatePrivateKey, privateKeyToAccount, signTypedData } from "viem/accounts";
import { foundry } from "viem/chains";

export async function POST(req: NextRequest, { params }: { params: { upgrade: NetworkUpgrade } }) {
  const { githubUsername, address } = await req.json();
  const upgrade = params.upgrade;
  
  if (!address || !isAddress(address)) {
    return NextResponse.json({ error: "No address provided" }, { status: 400 })
  }
  const alreadyClaimed = await hasAlreadyClaimed(githubUsername, upgrade)
  if (alreadyClaimed) {
    return NextResponse.json({ error: "Already claimed" }, { status: 400 })
  }
  const client = createWalletClient({
    account: privateKeyToAccount(process.env.OWNER_PRIVATE_KEY as `0x${string}`),
    chain: foundry,
    transport: http('http://localhost:8545')
  })
  const claimable = {
    id: getTokenIdOfUpgrade(upgrade),
    to: address,
    author: githubUsername
  }
  // const signature  = await client.signTypedData({
  //   domain: {
  //     name: "EIP Author Reward",
  //     version: "1"
  //   },
  //   types: {
  //     Claimable: [
  //       { name: "id", type: "uint256" },
  //       { name: "to", type: "address" },
  //       { name: "author", type: "string" }
  //     ]
  //   },
  //   primaryType: "Claimable",
  //   message: claimable
  // })
  const hash = await client.writeContract({
    address: process.env.EIP_AUTHOR_NFT_ADDRESS as `0x${string}`,
    abi: parseAbi([
      'struct Claimable {uint256 id; address to; string author;}',
      'function claim(Claimable calldata claimable, bytes calldata signature) external'
    ]),
    functionName: "claim",
    args: [
      claimable,
      "0x" // signature
    ]
  })
  return NextResponse.json({ hash })
}