"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import Loader from "@/components/loader/page";
import { getCurrentUser } from "@/lib/session";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
import { signIn, signOut } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";
import UserDialog from "@/components/userDialog";
import FeedbackAdmin from "@/components/feedback/feedbackAdmin";
import MemberDialog from "@/components/memberDialog";
import Link from "next/link";
import Image from "next/image";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchUser() {
      const user = await getCurrentUser();
      setUser(user);
    }
    fetchUser();
  }, []);

  return (
    <html lang="en">
      <link rel="icon" href="/assets/favicon.ico" sizes="any" />
      <body className={inter.className}>
        {user ? (
          <>
            {user?.role === "ADMIN" || user?.role === "OWNER" ? (
              <>
                <Loader />
                {/* <Navbar /> */}
                <AdminNav userRole={user?.role as string} />
                <Tools userRole={user?.role as string} />
                {children}
                <Toaster position="bottom-right" />
              </>
            ) : (
              <>
                <div className="flex flex-wrap lg:flex-row flex-col justify-center w-full h-screen items-center gap-5">
                  <h1>You are not an admin</h1>
                </div>
                <div className="absolute bottom-5 right-5">
                  <SignOutButton />
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="flex flex-wrap lg:flex-row flex-col justify-center w-full h-screen items-center gap-5">
              <button
                onClick={() => {
                  signIn("google");
                }}
                className="bg-darkGray p-4 text-2xl text-white rounded-xl hover:scale-110 duration-300"
              >
                Sign In
              </button>
            </div>
          </>
        )}
      </body>
    </html>
  );
}

function SignOutButton() {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      <FaSignOutAlt
        size={40}
        className="text-white bg-darkGray p-2 rounded-lg hover:scale-110 duration-300 "
      />
    </button>
  );
}

function AdminNav({ userRole }: { userRole: string }) {
  const tabs: any[] = [
    { label: "Network Upgrades", link: "/admin/network_upgrades" },
    { label: "Blogs and Events", link: "/admin/blogs_events" },
    { label: "Youtube", link: "/admin/youtube" },
    { label: "Surveys", link: "/admin/surveys" },
    { label: "EIP Resources", link: "/admin/eip_resources" },
    { label: "Meetings", link: "/admin/meetings" },
    { label: "Meet the Herders", link: "/admin/meet-the-herders" },
  ];
  return (
    <>
      <div className="flex flex-col fixed w-full py-4 px-5 gap-y-2 bg-white">
        <div className="flex  justify-between items-center  w-full ">
          <Link href="/">
            <Image
              src="/assets/ech_horizontal_logo.svg"
              alt="ech_logo"
              height={100}
              width={100}
              className="md:scale-100 scale-75"
            />
          </Link>

          <div className="flex sm:gap-5 gap-2 justify-center items-center">
            <SignOutButton />
            <button className="bg-darkGray text-white sm:text-xl rounded-lg sm:px-4 px-2 py-2">
              Home
            </button>
          </div>
        </div>

        <div className="flex  justify-center w-full items-center">
          <div className="flex flex-wrap gap-x-5 justify-center">
            {tabs.map((tab, index) => {
              return (
                <span key={index} className={`font-semibold md:text-2xl `}>
                  <Link href={tab.link}>{tab.label}</Link>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

function Tools({ userRole }: { userRole: string }) {
  return (
    <div className=" p-2 flex flex-col absolute bottom-[10rem] left-0 gap-2 ">
      {userRole === "OWNER" && <UserDialog />}
      <FeedbackAdmin />
      {userRole === "OWNER" && <MemberDialog />}
    </div>
  );
}
