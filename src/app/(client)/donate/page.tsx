"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

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
            <Button
              className="flex items-center gap-2 bg-darkGray text-white px-6 py-3 rounded-lg"
            >
              Ethereum
              <ExternalLinkIcon className="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-16">
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

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-antonio mb-4">Octant Epoch 1 - 5</h3>
              <p className="text-gray-600 mb-4">
                Ethereum Cat Herders participate in Octant Epoch rounds that occur every 90 days. We received significant funding over the last 5 rounds.
              </p>
              <Link 
                href="#"
                className="inline-flex items-center text-darkGray hover:underline"
              >
                View our Octant updates
                <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-antonio mb-4">Optimism grant</h3>
              <p className="text-gray-600">xxxx</p>
            </div>
          </div>
        </div>

        {/* Right Content - QR Code */}
        <div className="lg:w-1/3">
          <Image
            src="/assets/ech_donate_addr_qrcode.png"
            alt="Donation QR Code"
            width={400}
            height={400}
            className="w-full"
          />
          <p className="text-center mt-4 font-mono text-sm break-all">
            0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC
          </p>
        </div>
      </div>
    </main>
  );
} 