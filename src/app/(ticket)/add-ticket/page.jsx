"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";

const AddTicketPage = () => {
  const router = useRouter();
  const [email_account, setEmail_account] = useState([]);

  const [form, setForm] = useState({
    subject: "",
    email_account: "",
  });
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    fetch("/api/email-accounts")
      .then((res) => res.json())
      .then((data) => {
        setEmail_account(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.success) {
        router.push("/ticket");
      } else {
        console.log(result.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;
  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow rounded">
      <h1 className="text-2xl font-bold mb-6">Ajouter une ticket</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez subject"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Account
          </label>
          <select
            name="email_account"
            value={form.email_account}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Sélectionnez un compte --</option>
            {email_account.map((account) => (
              <option key={account.name} value={account.name}>
                {account.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between mt-6">
          <button
            type="submit"
            onClick={() => router.push("/ticket")}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Retour
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTicketPage;
