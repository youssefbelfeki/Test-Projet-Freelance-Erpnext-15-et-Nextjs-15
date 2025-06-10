import { NextResponse } from 'next/server';

export async function GET() {
  const erpUrl = `${process.env.BASE_URL}/api/resource/HD%20Ticket?fields=["*"]`;

  const res = await fetch(erpUrl, {
    headers: {
      Authorization: `token ${process.env.API_key}:${process.env.API_Secret}`,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch clients' }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json(data.data); 
}


export async function POST(req) {
  try {
    const form = await req.json(); 

    const erpUrl = `${process.env.BASE_URL}/api/resource/HD%20Ticket`;

    const res = await fetch(erpUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${process.env.API_key}:${process.env.API_Secret}`,
      },
      body: JSON.stringify(form),
      cache: 'no-store',
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to create Ticket in ERPNext' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({ success: true, data: data.data });

  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}