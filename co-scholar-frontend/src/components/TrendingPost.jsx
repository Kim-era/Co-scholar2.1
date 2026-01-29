import { useEffect, useState } from "react";
import { API_BASE } from "../config";

const sampleTrending = [
  { id: 1, title: "Top 5 Majors for 2026", replies: 15 },
  { id: 2, title: "Scholarship Tips Abroad", replies: 10 },
];

export default function TrendingPosts() {
  const [posts, setPosts] = useState(sampleTrending);

  useEffect(() => {
    fetch("http://localhost:3000/api/threads?trending=true")
      .then(res => res.json())
      .then(data => { if (data.length) setPosts(data); })
      .catch(() => {});
  }, []);

  return (
    <div className="bg-white p-4 w-64 border-l border-gray-200">
      <h2 className="text-orange-500 font-bold mb-4">Trending Posts</h2>
      {posts.map(p => (
        <div key={p.id} className="mb-3 hover:bg-orange-50 p-2 rounded cursor-pointer">
          <p className="font-semibold">{p.title}</p>
          <p className="text-gray-500 text-sm">{p.replies} replies</p>
        </div>
      ))}
    </div>
  );
}
