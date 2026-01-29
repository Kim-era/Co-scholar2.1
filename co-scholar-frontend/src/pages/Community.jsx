import { useEffect, useState } from "react";
import FeedSection from "../components/community/FeedSection";
import ArticleSection from "../components/community/ArticleSection";
import SubmitPost from "../components/community/SubmitPost";
import { fallbackPosts } from "../data/communityFallback";

export default function Community() {
  const [activeTab, setActiveTab] = useState("Feed");
  const [posts, setPosts] = useState([fallbackPosts]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const res = await fetch("http://localhost:3000/api/community");
      const data = await res.json();

      if (Array.isArray(data) && data.length > 0) {
        // 🔥 Merge backend posts on top of static ones
        setPosts([...data, ...fallbackPosts]);
      }
    } catch (err) {
      console.warn("Using static community posts");
    }
  }

  const filteredPosts = posts.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Community</h1>
        <p className="text-gray-600 mb-6">
          Learn together. Share ideas. Solve hard problems.
        </p>

        <SubmitPost
          onPostCreated={newPost => setPosts([newPost, ...posts])}
        />

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          {["Feed", "Article"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab
                  ? "bg-orange-500 text-white"
                  : "bg-white shadow"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "Feed" ? (
          <FeedSection posts={filteredPosts} />
        ) : (
          <ArticleSection posts={filteredPosts} />
        )}
      </div>
    </div>
  );
}
