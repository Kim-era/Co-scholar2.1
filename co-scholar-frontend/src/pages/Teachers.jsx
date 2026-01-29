import { useState } from "react";
import { API_BASE } from "../config";

export default function Teachers() {
  const [activeTab, setActiveTab] = useState("Computer Science");

  const teachers = {
    "Computer Science": [
      {
        name: "Dr. A. Nsubuga",
        bio: "Software engineering & algorithms",
        available: true,
      },
      {
        name: "Ms. L. Achieng",
        bio: "Web development & UI/UX",
        available: false,
      },
    ],
    Business: [
      {
        name: "Mr. J. Kato",
        bio: "Entrepreneurship & strategy",
        available: true,
      },
    ],
    Medicine: [
      {
        name: "Dr. R. Mukasa",
        bio: "Human anatomy & physiology",
        available: true,
      },
    ],
    Arts: [
      {
        name: "Ms. N. Atieno",
        bio: "Creative writing & literature",
        available: false,
      },
    ],
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Our Teachers</h1>
        <p className="text-gray-600 max-w-2xl">
          Connect with experienced educators, mentors, and professionals for
          guidance, mentorship, and live learning sessions.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {Object.keys(teachers).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium
              ${
                activeTab === tab
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 hover:bg-orange-100"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Teachers Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {teachers[activeTab].map((teacher, i) => (
          <TeacherCard key={i} {...teacher} />
        ))}
      </div>

      {/* Meeting Rooms Section */}
      <section className="bg-white p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold mb-4">
          Meeting Rooms & Webinars
        </h2>

        <p className="text-gray-600 mb-6 max-w-2xl">
          Co-Scholar enables live learning through popular video conferencing
          platforms. Teachers can host mentorship sessions, group classes, and
          webinars.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <MeetingCard
            platform="Zoom"
            description="Host live classes and one-on-one mentorship sessions."
          />
          <MeetingCard
            platform="Google Meet"
            description="Quick meetings directly from your browser."
          />
          <MeetingCard
            platform="Microsoft Teams"
            description="Structured group learning and collaboration."
          />
        </div>
      </section>
    </div>
  );
}

/* ---------- Teacher Card ---------- */
function TeacherCard({ name, bio, available }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-lg">{name}</h3>
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            available
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {available ? "Available" : "Unavailable"}
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-4">{bio}</p>

      <button className="text-orange-500 text-sm font-medium hover:underline">
        View Profile →
      </button>
    </div>
  );
}

/* ---------- Meeting Card ---------- */
function MeetingCard({ platform, description }) {
  return (
    <div className="border rounded-xl p-6 hover:border-orange-400 transition">
      <h3 className="font-semibold text-lg mb-2">{platform}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      <button className="text-orange-500 font-medium text-sm hover:underline">
        Learn how it works →
      </button>
    </div>
  );
}
