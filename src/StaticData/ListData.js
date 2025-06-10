 'use server'
 
 const GetEmailAccount = async () =>{
    await fetch(`${process.env.BASE_URL}/api/resource/Email%20Account`, {
    headers: {
      Authorization: `token ${process.env.API_key}:${process.env.API_Secret}`,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })
  if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch clients' }, { status: 500 });
    }
  
    const data = await res.json();
    return NextResponse.json(data.data); 
}