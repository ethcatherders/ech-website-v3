import {
  createPublicClient,
  http,
  parseAbi,
  hexToBigInt,
  keccak256,
  encodePacked,
} from "viem";
import { foundry } from "viem/chains"
import { NetworkUpgrade } from "@/constants/eip-authors";

export function getTokenIdOfUpgrade(upgrade: NetworkUpgrade) {
  return hexToBigInt(keccak256(encodePacked(["string"],[upgrade])))
}

export async function hasAlreadyClaimed(githubUsername: string, upgrade: NetworkUpgrade) {
  try {
    const tokenId = getTokenIdOfUpgrade(upgrade)
    const client = createPublicClient({
      chain: foundry,
      transport: http('http://localhost:8545')
    })
    const alreadyClaimed = await client.readContract({
      address: process.env.EIP_AUTHOR_NFT_ADDRESS as `0x${string}`,
      abi: parseAbi([
        'function claimed(string calldata author, uint256 id) external view returns (bool)'
      ]),
      functionName: "claimed",
      args: [githubUsername, tokenId]
    })
    return alreadyClaimed
  } catch (error) {
    console.error(error)
    return false
  }
}