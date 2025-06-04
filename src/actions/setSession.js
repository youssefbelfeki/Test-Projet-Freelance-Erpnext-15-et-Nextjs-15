"use server";

import { cookies } from "next/headers";

export async function setSession(sid) {
  cookies().set("sid", sid, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });
}


export async function clearSession() {
  cookies().set("sid", "", {
    path: "/",
    maxAge: 0,
  });
}