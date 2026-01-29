import { useState } from "react";
import CategoriesSidebar from "../components/CategoriesSidbar";
import ThreadList from "../components/ThreadList";
import ThreadView from "../components/ThreadView";
import TrendingPosts from "../components/TrendingPost";
import { API_BASE } from "../config";

export default function ForumPage() {
  const [selectedCategory, setSelectedCategory] = useState("Guidance");
  const [selectedThreadId, setSelectedThreadId] = useState(null);

  return (
    <div className="flex h-screen bg-orange-50">
      <CategoriesSidebar
        selectedCategory={selectedCategory}
        onSelectCategory={cat => {
          setSelectedCategory(cat);
          setSelectedThreadId(null);
        }}
      />
      <div className="flex-1 flex flex-col">
        <ThreadList category={selectedCategory} onSelectThread={setSelectedThreadId} />
        <ThreadView threadId={selectedThreadId} />
      </div>
      <TrendingPosts />
    </div>
  );
}
