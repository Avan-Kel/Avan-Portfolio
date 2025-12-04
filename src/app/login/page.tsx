"use client";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      window.location.href = "/admin";
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-900 text-white p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-neutral-800 p-6 rounded-lg w-80">
        <h2 className="text-xl font-semibold text-center">Admin Login</h2>
        
        <input name="username" className="p-2 bg-neutral-700 rounded" placeholder="Username" required />
        <input type="password" name="password" className="p-2 bg-neutral-700 rounded" placeholder="Password" required />
        
        <button type="submit" className="bg-violet-600 p-2 rounded hover:bg-violet-700">
          Login
        </button>

        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </main>
  );
}
