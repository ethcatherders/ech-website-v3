"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { DonationCard } from "@/components/DonationCard";

export default function DonatePage() {
  return (
    <main className="min-h-screen pt-40 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-antonio font-bold mb-8">Donate</h1>
          
          <div className="space-y-6">
            <p className="text-lg">
              Thank you for your support in helping Ethereum Cat Herders achieve our mission in education, community building and homesteading the Ethereum ecosystem.
            </p>
            
            <p className="text-lg">
              We are committed to ensuring that the ecosystem remains decentralized and accessible for all participants.
            </p>
            
            <p className="text-lg">
              Your contribution fuels our efforts to create accessible resources, coordinate critical meetings and promote inclusivity in the ecosystem.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-antonio mb-4">Donate through</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
              <Link 
                href="https://etherscan.io/address/0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC" 
                target="_blank"
                className="w-full"
                passHref
              >
                <Button
                  className="flex items-center gap-2 bg-darkGray text-white px-5 py-3 rounded-lg w-full"
                >
                  <Image src="/assets/chains/ethereum.png" alt="Ethereum" width={12} height={20} />
                  Ethereum
                  {/* <ExternalLinkIcon className="w-4 h-4" /> */}
                </Button>
              </Link>
              <Link
                href="https://optimistic.etherscan.io/address/0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC"
                target="_blank"
                className="w-full"
                passHref
              >
                <Button
                  className="flex items-center gap-2 bg-darkGray text-white px-5 py-3 rounded-lg w-full"
                >
                  <Image src="/assets/chains/optimism.png" alt="Optimism" width={20} height={20} />
                  Optimism
                  {/* <ExternalLinkIcon className="w-4 h-4" /> */}
                </Button>
              </Link>
              <Link
                href="https://polygonscan.com/address/0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC"
                target="_blank"
                className="w-full"
                passHref
              >
                <Button
                  className="flex items-center gap-2 bg-darkGray text-white px-5 py-3 rounded-lg w-full"
                >
                  <Image src="/assets/chains/polygon.png" alt="Polygon" width={20} height={20} />
                  Polygon
                  {/* <ExternalLinkIcon className="w-4 h-4" /> */}
                </Button>
              </Link>
              <Link
                href="https://basescan.org/address/0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC"
                target="_blank"
                className="w-full"
                passHref
              >
                <Button
                  className="flex items-center gap-2 bg-darkGray text-white px-5 py-3 rounded-lg w-full"
                >
                  <Image src="/assets/chains/base.png" alt="Base" width={20} height={20} />
                  Base
                  {/* <ExternalLinkIcon className="w-4 h-4" /> */}
                </Button>
              </Link>
              <Link
                href="https://arbiscan.io/address/0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC"
                target="_blank"
                className="w-full"
                passHref
              >
                <Button
                  className="flex items-center gap-2 bg-darkGray text-white px-5 py-3 rounded-lg w-full"
                >
                  <Image src="/assets/chains/arbitrum.png" alt="Arbitrum" width={20} height={20} />
                  Arbitrum
                  {/* <ExternalLinkIcon className="w-4 h-4" /> */}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Content - QR Code */}
        <div className="w-full lg:w-1/3 flex flex-col items-center">
          {/* Donation Card */}
          <div className="w-full max-w-md mx-auto">
            <DonationCard />
          </div>
          {/* <Image
            src="/assets/ech_donate_addr_qrcode.png"
            alt="Donation QR Code"
            width={400}
            height={400}
            className="w-full max-w-sm"
          />
          <div className="mt-4 flex flex-col items-center">
            <p className="text-center font-mono text-sm break-all">
              0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC
            </p>
          </div> */}
        </div>
      </div>

      <div className="my-16 flex flex-col lg:flex-row justify-between items-start gap-16">
        <div>
          <h2 className="text-2xl font-antonio mb-6">Funding sources</h2>
          <p className="text-lg mb-4">
            As a registered non-profit organization, we are funded by public goods funding which the community can participate in. We also receive one-off grants from Layer 2s. For transparency, we are providing our funding sources below.
          </p>
          <p className="text-lg mb-6">
            These funding sources have been categorized based on the contribution amount.
          </p>
          
          <div className="space-y-2">
            <p className="text-lg"><span className="font-semibold">Significant:</span> Above 200,000 USD</p>
            <p className="text-lg"><span className="font-semibold">Medium:</span> Between 50,000 USD to 200,000 USD</p>
            <p className="text-lg"><span className="font-semibold">Small:</span> Below 50,000 USD</p>
          </div>
        </div>

        <Image
          src="/assets/cat_peek.png"
          alt="Cat Peek"
          width={300}
          height={300}
          className="hidden lg:block"
        />
      </div>

      <div className="my-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 box-black-bg rounded-xl border-2 border-black flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-antonio mb-4">Optimism grant</h3>
            <p className="text-gray-600">We received Medium funding from Optimism in 2024. </p>
          </div>
        </div>

        <div className="bg-white p-8 box-black-bg rounded-xl border-2 border-black flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-antonio mb-4">ENS grant</h3>
            <p className="text-gray-600">We received Medium funding of 50K USDC from ENS in 2021. </p>
          </div>
        </div>

        <div className="bg-white p-8 box-black-bg rounded-xl border-2 border-black flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-antonio mb-4">Octant Epoch 6</h3>
            <p className="text-gray-600 mb-4">
              Our latest Octant Epoch public goods funding round ended on 25 Jan 2025. We received Medium funding of 19.225 ETH. 
            </p>
          </div>
          <Link 
            href="#"
            className="inline-flex items-center text-darkGray hover:underline"
            passHref
          >
            <Button className="bg-darkGray text-white px-6 py-3 rounded-lg">
              View our Octant updates
            </Button>
          </Link>
        </div>
        
        <div className="bg-white p-8 box-black-bg rounded-xl border-2 border-black flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-antonio mb-4">Octant Epoch 1 - 5</h3>
            <p className="text-gray-600 mb-4">
              Ethereum Cat Herders participate in Octant Epoch rounds that occur every 90 days. We received significant funding over the last 5 rounds.
            </p>
          </div>
          <Link 
            href="#"
            className="inline-flex items-center text-darkGray hover:underline"
          >
            <Button className="bg-darkGray text-white px-6 py-3 rounded-lg">
              View our Octant updates
            </Button>
          </Link>
        </div>
      </div>

      <div className="my-16">
        <p className="text-lg font-antonio mb-4">Disclaimer</p>
        <p className="text-xs mb-2">
          Ethereum Cat Herders, a project of ECH Institute Inc., is dedicated to education, community building, and homesteading Ethereum. Our mission is to coordinate and support Ethereum network upgrades and the Ethereum Improvement Proposal (EIP) process; empower and connect individuals through the creation of content on EIPs, open-source infrastructures and technical expertise in the Ethereum ecosystem. We encourage a permissionless free exchange of ideas in the Ethereum community.
        </p>
        <p className="text-xs mb-2">
          ECH Institute Inc. is a non-partisan 501(c)(3) tax-exempt charitable organization and operates in accordance with federal, state, and local laws regarding nonprofit activities in the United States of America.
        </p>
        <p className="text-xs mb-2">
          All donations to ECH Institute Inc. are voluntary, non-refundable, and tax-deductible to the extent permitted by U.S. state and federal law. Donations made in fiat or cryptocurrency will be used solely to further our nonprofit mission. If you require a tax receipt, please provide the necessary donor information at the time of your contribution or promptly thereafter.
        </p>
        <p className="text-xs mb-2">
          For any questions regarding donations, funding expenses, compliance, or tax deductibility, please contact us at team@ethcatherders.com.
        </p>
        <p className="text-xs mb-2">
          Thank you for supporting Ethereum Cat Herders and our mission to advance the Ethereum ecosystem! 🚀
        </p>
      </div>
    </main>
  );
} 