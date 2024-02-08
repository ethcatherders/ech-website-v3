"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar/page";
import Loader from "@/components/loader/page";
import { getCurrentUser } from "@/lib/session";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
import { signIn, signOut } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";

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
  });

  return (
    <html lang="en">
      <link rel="icon" href="/assets/favicon.ico" sizes="any" />
      <body className={inter.className}>
        {user ? (
          <>
            {user?.role === "admin" || user?.role === "owner" ? (
              <>
                <Loader />
                <Navbar />
                {children}
                <SignOutButton />
              </>
            ) : (
              <>
                <div className="flex flex-wrap lg:flex-row flex-col justify-center w-full h-screen items-center gap-5">
                  <h1>You are not an admin</h1>
                </div>
                <SignOutButton />
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
    <div className="absolute right-5 bottom-5">
      <button
        onClick={() => {
          signOut();
        }}
      >
        <FaSignOutAlt
          size={40}
          className="text-white bg-darkGray p-2 rounded-lg hover:scale-110 duration-300"
        />
      </button>
    </div>
  );
}
