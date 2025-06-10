"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddLeadPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    first_name: "",
    status: "",
  });
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const statusOptions = [
    "Lead",
    "Open",
    "Replied",
    "Opportunity",
    "Quotation",
    "Lost Quotation",
    "Interested",
    "Converted",
    "Do Not Contact",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.success) {
        router.push("/lead");
      } else {
        console.log(result.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow rounded">
      <h1 className="text-2xl font-bold mb-6">Ajouter un Lead</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom du Lead
          </label>
          <input
            type="text"
            name="first_name"
            value={form.first_name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez le nom"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Sélectionnez un statut --</option>
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between mt-6">
          <button
            type="submit"
            onClick={() => router.push("/lead")}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Retour
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={!loading}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
