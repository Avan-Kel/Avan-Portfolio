"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MagicBento from "@/components/MagicBento";
import { track } from "@/lib/track";

export default function AdminPage() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const isAuth = document.cookie.includes("auth=true");
      if (!isAuth) {
        router.replace("/login");
      } else {
        track("admin_dashboard_view", { note: "Admin landed on dashboard" });
      }
      setIsChecking(false);
    };

    // Small delay ensures cookie is available after login redirect
    setTimeout(checkAuth, 50); 
  }, [router]);

  // Prevent rendering admin content while checking
  if (isChecking) return null;

  return (
    <main className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>
        <section className="mb-12">
          <div className="flex justify-center">
            <MagicBento
              textAutoHide
              enableStars
              enableSpotlight
              enableBorderGlow
              enableTilt
              enableMagnetism
              clickEffect
              spotlightRadius={300}
              particleCount={12}
              glowColor={process.env.NEXT_PUBLIC_GLOW_RGB || "132, 0, 255"}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
