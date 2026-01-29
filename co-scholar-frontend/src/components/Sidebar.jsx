import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-6 hidden lg:block">
      {/* Section: Quick Actions */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-500 mb-3">
          QUICK ACCESS
        </h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/forum" className="hover:text-orange-500">
              📢 Forum Discussions
            </Link>
          </li>
          <li>
            <Link to="/library" className="hover:text-orange-500">
              📚 Online Library
            </Link>
          </li>
          <li>
            <Link to="/meeting-rooms" className="hover:text-orange-500">
              🎥 Meeting Rooms
            </Link>
          </li>
        </ul>
      </div>

      {/* Section: Categories */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-500 mb-3">
          CATEGORIES
        </h3>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-orange-500 cursor-pointer">Students</li>
          <li className="hover:text-orange-500 cursor-pointer">Teachers</li>
          <li className="hover:text-orange-500 cursor-pointer">Researchers</li>
          <li className="hover:text-orange-500 cursor-pointer">Opportunities</li>
        </ul>
      </div>

      {/* Section: Tips */}
      <div className="bg-orange-50 p-4 rounded-xl text-sm">
        <p className="font-semibold mb-1">💡 Tip</p>
        <p>
          Join discussions and save resources to build your personal learning
          path.
        </p>
      </div>
    </aside>
  );
}
