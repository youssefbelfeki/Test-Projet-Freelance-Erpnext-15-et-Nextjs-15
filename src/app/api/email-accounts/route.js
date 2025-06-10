'use server'

import { NextResponse } from "next/server";

export async function GET() {

  const res = await fetch(`${process.env.BASE_URL}/api/resource/Email%20Account`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `token ${process.env.API_key}:${process.env.API_Secret}`
    },
  });
 if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch Email Account' }, { status: 500 });
  }
  const data = await res.json();
   return NextResponse.json(data.data);
}

