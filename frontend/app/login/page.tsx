"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with", email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          
          <button
            type="submit"
            className="w-full bg-[#F78D60] text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>


           <button
            type="submit"
            className="w-full  bg-[#BBDCE5] text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>
        </form>
  
      </div>
    </div>
  );
}
