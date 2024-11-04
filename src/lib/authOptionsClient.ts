import { DefaultSession, NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

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
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope: "(no scope)",
        },
      },
      profile(profile) {
        return {
          id: profile.id,
          name: profile.login,
          email: "",
          image: profile.avatar_url,
        };
      },
    }),
  ],
};
