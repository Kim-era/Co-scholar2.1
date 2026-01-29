import { useState } from "react";
import { API_BASE } from "../config";

export default function SubmitResource({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    subject: "",
    type: "",
    level: "",
    url: "",
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // POST to backend
      const res = await fetch("${API_BASE}/library", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      onAdd(data); // update parent state
      setForm({ title: "", subject: "", type: "", level: "", url: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to submit resource");
    }
  };

  return (
    <div className="bg-orange-50 p-6 rounded-xl mb-10">
      <h2 className="text-xl font-semibold text-orange-600 mb-4">Share a Learning Resource</h2>

      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <input name="title" placeholder="Resource title" value={form.title} onChange={handleChange} required className="border rounded-lg p-3" />
        <select name="subject" value={form.subject} onChange={handleChange} required className="border rounded-lg p-3">
          <option value="">Subject</option>
          <option>Computer Science</option>
          <option>Business</option>
          <option>Medicine</option>
          <option>Arts</option>
        </select>
        <select name="type" value={form.type} onChange={handleChange} required className="border rounded-lg p-3">
          <option value="">Type</option>
          <option>PDF</option>
          <option>Link</option>
          <option>Video</option>
        </select>
        <select name="level" value={form.level} onChange={handleChange} className="border rounded-lg p-3">
          <option value="">Level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        <input name="url" placeholder="Resource link" value={form.url} onChange={handleChange} required className="border rounded-lg p-3 md:col-span-2" />
        <button type="submit" className="bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 md:col-span-2">
          Submit Resource
        </button>
      </form>
    </div>
  );
}
