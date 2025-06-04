"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Spinner from "@/components/Spinner";
const AllLeadsForm = (sid) => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/lead")
      .then((res) => res.json())
      .then((data) => {
        setLeads(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  return (
    <div className="mx-auto p-4 h-screen bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Leads</h1>
        <Link
          href="/add-lead"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Add Lead
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Lead Name</th>
              <th className="py-2 px-4 border-b">Country</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Company</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.name} className="hover:bg-gray-50 text-center ">
                <td className="py-2 px-4 border-b">{lead.name}</td>
                <td className="py-2 px-4 border-b">{lead.lead_name}</td>
                <td className="py-2 px-4 border-b">{lead.country}</td>
                <td className="py-2 px-4 border-b">{lead.status}</td>
                <td className="py-2 px-4 border-b">{lead.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllLeadsForm;
