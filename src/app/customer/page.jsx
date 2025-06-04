// app/clients/page.tsx
'use client';

import Spinner from '@/components/Spinner';
import { useEffect, useState } from 'react';


export default function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/customer')
      .then(res => res.json())
      .then(data => {
        setClients(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Client List</h1>
      <ul className="space-y-2">
        {clients.map(client => (
          <li key={client.name} className="p-3 border rounded shadow-sm">
            <p><strong>Name:</strong> {client.name}</p>
            <p><strong>Customer Group:</strong> {client.customer_group}</p>
            <p><strong>Customer Type:</strong> {client.customer_type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
