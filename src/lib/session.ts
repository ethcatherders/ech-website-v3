"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";
import prisma from "../../prisma/client";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });
    return user;
  } catch (error) {
    console.log("No user found");
    return null;
  }
}

export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (e) {
    console.log("no users found");
  }
}

export async function changeUserRole(email: string, role: string) {
  const user = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      role: role,
    },
  });
  return user;
}

export async function deleteUser(email: string) {
  await prisma.user.delete({
    where: {
      email: email,
    },
  });
}
