import { useEffect, useState } from "react";
import LibrarySeeds from "../data/LibrarySeeds";
import SubmitResource from "../components/SubmitResource";
import { API_BASE } from "../config";

export default function Library() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
const [subjectFilter, setSubjectFilter] = useState("");


  useEffect(() => {
    const loadLibrary = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/library");
        const dbResources = await res.json();

        // Combine DB + seed data
        setResources([...dbResources, ...LibrarySeeds]);
      } catch (error) {
        console.error("Failed to load library", error);
        setResources(LibrarySeeds);
      } finally {
        setLoading(false);
      }
    };

    loadLibrary();
  }, []);
  const filteredResources = resources.filter(resource =>
  resource.title.toLowerCase().includes(search.toLowerCase()) &&
  (subjectFilter === "" || resource.subject === subjectFilter)
);


  if (loading) return <p className="p-8">Loading library...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">
        Co-Scholar Library
      </h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SubmitResource />

  <input
    placeholder="Search resources..."
    value={search}
    onChange={e => setSearch(e.target.value)}
    className="border rounded-lg p-3 flex-1"
  />

  <select
    value={subjectFilter}
    onChange={e => setSubjectFilter(e.target.value)}
    className="border rounded-lg p-3"
  >
    <option value="">All subjects</option>
    <option>Computer Science</option>
    <option>Business</option>
    <option>Medicine</option>
    <option>Arts</option>
  </select>
</div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredResources.map(resource => (
          <div
            key={resource.id || resource._id}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white"
          >
            <h2 className="font-semibold text-lg">{resource.title}</h2>

            <p className="text-sm text-gray-600">
              {resource.type} · {resource.level}
            </p>

            <p className="text-sm text-gray-500">
              {resource.subject} · {resource.source || "Community"}
            </p>

            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-orange-500 hover:underline"
            >
              Open resource →
            </a>
          </div>
        ))}
        
      </div>
    </div>
  );
}
