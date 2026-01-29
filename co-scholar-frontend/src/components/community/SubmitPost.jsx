import { useState } from "react";

export default function SubmitPost({ onPostCreated }) {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "Feed",
  });

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/community", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const newPost = await res.json();
        onPostCreated(newPost);
        setForm({ title: "", content: "", category: "Feed" });
      }
    } catch (err) {
      console.error("Post failed:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow mb-8"
    >
      <h3 className="font-semibold text-lg mb-4">Share with the community</h3>

      <input
        className="w-full border rounded-lg p-2 mb-3"
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
        required
      />

      <textarea
        className="w-full border rounded-lg p-2 mb-3"
        placeholder="Your thoughts..."
        rows="4"
        value={form.content}
        onChange={e => setForm({ ...form, content: e.target.value })}
        required
      />

      <select
        className="border rounded-lg p-2 mb-4"
        value={form.category}
        onChange={e => setForm({ ...form, category: e.target.value })}
      >
        <option value="Feed">Feed</option>
        <option value="Article">Article</option>
      </select>

      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
        Post
      </button>
    </form>
  );
}
