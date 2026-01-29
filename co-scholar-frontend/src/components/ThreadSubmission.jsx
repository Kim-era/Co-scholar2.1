import { useState } from "react";
import { API_BASE } from "../config";

export default function ThreadSubmission({ categoryId, onThreadCreated }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;

    try {
      const res = await fetch(`http://localhost:3000/api/threads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          category_id: categoryId,
          user_id: 1 // replace with logged-in user later
        }),
      });

      const newThread = await res.json();
      onThreadCreated(newThread); // update parent component
      setTitle(""); // clear input
    } catch (err) {
      console.error("Error creating thread:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Start a new thread..."
        className="flex-1 border border-gray-300 rounded p-2 mr-2"
      />
      <button type="submit" className="bg-orange-500 text-white px-4 rounded">
        Post
      </button>
    </form>
  );
}
