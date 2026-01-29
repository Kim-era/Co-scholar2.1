import React from "react";
import {Link} from "react-router-dom";
import { API_BASE } from "../config";
export default function Home() {
   
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="px-8 py-24 text-center bg-gradient-to-b from-orange-50 to-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Learn with intention.<br /> Grow with community.
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Co‑Scholar is a shared learning space where guidance, resources, and opportunity meet students, teachers, and lifelong learners.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-orange-500 text-white rounded-2xl shadow hover:bg-orange-600">
           <Link to="/Forum">Explore Forum</Link>
          </button>
          <button className="px-6 py-3 border border-orange-500 text-orange-500 rounded-2xl hover:bg-orange-50">
             <Link to="/library">Browse Library</Link>
          </button>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="px-8 py-20 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3 text-orange-500">Intentional Forum</h3>
          <p className="text-gray-600">
            Ask meaningful questions, share lived experience, and receive guidance that goes beyond surface‑level advice.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3 text-orange-500">Open Learning Library</h3>
          <p className="text-gray-600">
            Curated learning resources made easy to access — books, notes, links, and tools for every stage.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3 text-orange-500">Living Community</h3>
          <p className="text-gray-600">
            Discover opportunities, mentorship, and conversations shared by students, teachers, and organizations.
          </p>
        </div>
      </section>

      {/* Community Callout */}
      <section className="px-8 py-20 bg-orange-500 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">A place for learners, guides, and givers</h3>
        <p className="max-w-2xl mx-auto mb-8 text-orange-100">
          Whether you are here to learn, teach, or support — Co‑Scholar helps intention meet quality.
        </p>
        <button className="px-6 py-3 bg-white text-orange-500 rounded-2xl font-semibold hover:bg-orange-50">
          <Link to="/Community">Join the Community</Link>
        </button>
      </section>

    </div>
  );
}
