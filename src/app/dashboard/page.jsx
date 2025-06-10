
import { cookies } from 'next/headers';
import Link from 'next/link'
import React from 'react'

const DashboardPage = async () => {
  const cookieStore = await cookies();
  const sid = cookieStore.get("sid");

  if (!sid) {
    return <div>You must be logged in</div>;
  }
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">ERP Client Actions</h1>
      
      <div className="flex gap-6">
        <Link href="/ticket" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">Ticket</Link>

        <Link href="/lead" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">Lead</Link>
      </div>
    </div>
  )
}

export default DashboardPage