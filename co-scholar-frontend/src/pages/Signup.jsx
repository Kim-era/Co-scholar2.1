import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE } from "../config";

export default function SignUp() {
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
   const navigate = useNavigate(); // ✅ INSIDE component


  const handleSubmit = async (e) => {
    e.preventDefault(); // stop page reload

    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
          navigate("/community");
        return;
      }

      console.log("Signup success:", data);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-sm">

        <h1 className="text-2xl font-bold text-center mb-2">
          Join Co-Scholar
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Create an account and start learning intentionally
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          {/* User Type */}
          <div>
            <label className="block text-sm font-medium mb-2">
              I am a:
            </label>
            <div className="flex gap-4">
              <RoleOption
                label="Student"
                value="student"
                selected={role}
                setRole={setRole}
              />
              <RoleOption
                label="Teacher"
                value="teacher"
                selected={role}
                setRole={setRole}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/signin" className="text-orange-500 font-medium hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

/* ---------- Role Option ---------- */
function RoleOption({ label, value, selected, setRole }) {
  const active = selected === value;

  return (
    <button
      type="button"
      onClick={() => setRole(value)}
      className={`flex-1 border rounded-xl py-3 text-sm font-medium transition
        ${
          active
            ? "border-orange-500 bg-orange-50 text-orange-600"
            : "hover:bg-gray-100"
        }`}
    >
      {label}
    </button>
  );
}
