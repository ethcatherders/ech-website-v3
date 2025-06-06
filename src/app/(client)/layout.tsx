import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar/page";
import Loader from "@/components/loader/page";
import Footer from "@/components/footer/page";
import { Analytics } from "@vercel/analytics/react"
import { Web3Provider } from "./Web3Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ethereum Cat Herders",
  description:
    "Decentralized project management to support the Ethereum Network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Web3Provider>
          <Loader />
          <Navbar />
          {children}
          <Footer />
          <Toaster />
          <Analytics />
        </Web3Provider>
      </body>
    </html>
  );
}
