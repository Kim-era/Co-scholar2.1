import { useState, useEffect } from "react";
import { API_BASE } from "../config";
import ThreadSubmission from "./ThreadSubmission";

export default function ThreadList({ category, onSelectThread }) {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    if (!category) return;

    fetch(`http://localhost:3000/api/threads?category=${category}`)
      .then(res => res.json())
      .then(data => setThreads(data))
      .catch(() => {});
  }, [category]);

  const handleNewThread = (newThread) => {
    setThreads(prev => [newThread, ...prev]); // prepend new thread to list
  };

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <h2 className="text-orange-500 font-bold mb-4">{category || "Threads"}</h2>

      {/* Thread submission form */}
      <ThreadSubmission
        categoryId={1} // map category name to ID if needed
        onThreadCreated={handleNewThread}
      />

      {threads.map(thread => (
        <div
          key={thread.id}
          onClick={() => onSelectThread(thread.id)}
          className="border-b border-gray-200 p-3 hover:bg-orange-50 rounded cursor-pointer mb-2"
        >
          <h3 className="font-semibold">{thread.title}</h3>
          <p className="text-gray-500 text-sm">{thread.replies || 0} replies • by {thread.author}</p>
        </div>
      ))}
    </div>
  );
}
