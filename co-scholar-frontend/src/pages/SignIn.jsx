import { Link,useNavigate } from "react-router-dom";
import { API_BASE } from "../config";
import { useState } from "react";


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:3000/api/auth/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  console.log("LOGIN RESPONSE:", data); // 👈 VERY IMPORTANT

  if(data.token){
  localStorage.setItem("token", data.token);
  console.log("TOKEN SAVED:", localStorage.getItem("token"));
  localStorage.setItem("role", data.user.role);
  navigate("/community");
  }else{ alert("Login failed");}
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-sm">
        
        <h1 className="text-2xl font-bold text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Sign in to continue learning with Co-Scholar
        </p>

        <form onSubmit={handleLogin}className="space-y-5">
          <input
            type="email"
            placeholder="Email address"
            onChange={(e)=> setEmail(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e)=> setPassword(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/Signup" className="text-orange-500 font-medium hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
