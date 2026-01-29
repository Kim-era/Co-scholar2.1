import { useState, useEffect } from "react";
import { API_BASE } from "../config";

const sampleReplies = [
  {
    id: 1,
    message: "I’m torn between CS and Business.",
    author: "Amina",
    replies: [
      { id: 2, message: "List what you enjoy weekly!", author: "Kofi", replies: [] },
    ],
  },
];

export default function ThreadView({ threadId }) {
  const [thread, setThread] = useState(null);
  const [replies, setReplies] = useState(sampleReplies);
  const [newReply, setNewReply] = useState("");

  useEffect(() => {
    if (!threadId) return;

    fetch(`{API_BASE}/threads/${threadId}`)
      .then(res => res.json())
      .then(data => setThread(data))
      .catch(() => {});

    fetch(`http://localhost:3000/api/replies/${threadId}`)
      .then(res => res.json())
      .then(data => { if (data.length) setReplies(data); })
      .catch(() => {});
  }, [threadId]);

  const handlePostReply = async () => {
    if (!newReply) return;
    // POST request to backend
    const res = await fetch(`http://localhost:3000/api/replies/${threadId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newReply, user_id: 1 }),
    });
    const data = await res.json();
    setReplies(prev => [...prev, data]);
    setNewReply("");
  };

  const renderReplies = (repliesList, level = 0) =>
    repliesList.map(r => (
      <div key={r.id} style={{ marginLeft: level * 20 }} className="p-2 border-l border-gray-200 mb-1">
        <p className="text-gray-700 font-semibold">{r.author}</p>
        <p className="text-gray-800">{r.message}</p>
        {r.replies && r.replies.length > 0 && renderReplies(r.replies, level + 1)}
      </div>
    ));

  if (!threadId) return <div className="p-4 text-gray-400">Select a thread to view</div>;

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {thread && (
        <div className="mb-4">
          <h2 className="text-orange-500 font-bold text-lg">{thread.title}</h2>
          <p className="text-gray-500 text-sm">By {thread.author}</p>
        </div>
      )}
      <div>{renderReplies(replies)}</div>
      <div className="mt-4 flex">
        <input
          value={newReply}
          onChange={e => setNewReply(e.target.value)}
          className="flex-1 border border-gray-300 rounded p-2"
          placeholder="Write a reply..."
        />
        <button onClick={handlePostReply} className="ml-2 bg-orange-500 text-white px-4 rounded">
          Post
        </button>
      </div>
    </div>
  );
}
