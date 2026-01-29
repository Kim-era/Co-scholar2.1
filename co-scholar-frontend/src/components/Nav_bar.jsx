import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-orange-500"
      >
        Co-Scholar
      </Link>

      {/* Links */}
      <div className="flex items-center space-x-6 text-sm font-medium">
        <Link to="/" className="hover:text-orange-500">
          Home
        </Link>
        <Link to="/library" className="hover:text-orange-500">
          Library
        </Link>
        <Link to="/forum" className="hover:text-orange-500">
          The Forum
        </Link>
        <Link to="/Teachers" className="hover:text-orange-500">
          Teachers
        </Link>
        <Link to="/about" className="hover:text-orange-500">
          About Us
        </Link>
        <Link to="/community" className="hover:text-orange-500">
          Community
        </Link>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-xl shadow hover:bg-orange-600">
   <Link to="/signIn">Sign in</Link>
  </button>
      </div>
    </nav>
  );
}
