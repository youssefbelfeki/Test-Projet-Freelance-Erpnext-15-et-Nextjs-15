"use client";
import Spinner from "@/components/Spinner";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllTicketsPage = () => {
  const [ticket, setTicket] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/ticket")
      .then((res) => res.json())
      .then((data) => {
        setTicket(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  return (
    <div className="mx-auto p-8 h-screen bg-gray-100 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Tickets</h1>
        <Link
          href="/add-ticket"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Add Ticket
        </Link>
      </div>
      {ticket.length === 0 ? (
        <div className="text-center text-gray-600 text-lg mt-10">
          No tickets found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">Subject</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Priorte</th>
                <th className="py-2 px-4 border-b">Ticket Type</th>
                <th className="py-2 px-4 border-b">Contact</th>
              </tr>
            </thead>
            <tbody>
              {ticket.map((ticket) => (
                <tr key={ticket.name} className="hover:bg-gray-50 text-center">
                  <td className="py-2 px-4 border-b">{ticket.subject}</td>
                  <td className="py-2 px-4 border-b">{ticket.status}</td>
                  <td className="py-2 px-4 border-b">{ticket.priority}</td>
                  <td className="py-2 px-4 border-b">{ticket.ticket_type}</td>
                  <td className="py-2 px-4 border-b">
                    {ticket.contact || "----"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllTicketsPage;
