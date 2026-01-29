import { Link } from "react-router-dom";
import { API_BASE } from "../config";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Info */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">
            Co-Scholar
          </h3>
          <p className="text-sm">
            Kisubi Lane <br />
            Kampala, Uganda <br /><br />
            <strong>Phone:</strong> +256 777702813 <br />
            <strong>Email:</strong> info@co-scholar.com
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-semibold mb-3">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500">Contact Us</Link></li>
            <li><Link to="/community" className="hover:text-orange-500">Community</Link></li>
            <li><Link to="/library" className="hover:text-orange-500">Library</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Resource Management</li>
            <li>Online Courses</li>
            <li>Research Assistance</li>
            <li>Community Engagement</li>
            <li>Open Access</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Our Newsletter</h4>
          <p className="text-sm mb-3">
            Subscribe to get updates and learning resources.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-lg border text-sm"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t text-center text-sm py-4">
        © Co-Scholar since 2024. All Rights Reserved. <br />
        <span className="text-gray-500">
          Designed by sir_penfold the great
        </span>
      </div>
    </footer>
  );
}
