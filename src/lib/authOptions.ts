import { DefaultSession, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
    } & DefaultSession["user"];
  }
}

export interface Session extends DefaultSession {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  } & DefaultSession["user"];
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,

  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  adapter: PrismaAdapter(prisma),
};
