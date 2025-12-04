// app/admin/analytics/page.tsx
"use client";

import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from "recharts";
import { track } from "@/lib/track";
import { format, subDays } from "date-fns";

type EventRow = {
  id: string;
  event_name: string;
  route: string;
  value: string;
  created_at: string;
};

export default function AdminAnalytics() {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [loading, setLoading] = useState(true);

  // fetch events (last 60 days)
  async function fetchEvents() {
    setLoading(true);
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1000);

    if (error) {
      console.error("Supabase fetch error", error);
      setLoading(false);
      return;
    }

    setEvents((data as EventRow[]) || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchEvents();
    track("view_admin_analytics");
    // poll every 30s for near realtime
    const id = setInterval(fetchEvents, 30_000);
    return () => clearInterval(id);
  }, []);

  // Aggregate page_views per day (last 30 days)
  const pageViewsByDay = useMemo(() => {
    const days = Array.from({ length: 30 }).map((_, i) => {
      const date = subDays(new Date(), 29 - i);
      const key = format(date, "yyyy-MM-dd");
      return { date: key, count: 0 };
    });

    const map = new Map(days.map(d => [d.date, d]));

    events.forEach(e => {
      if (e.event_name === "page_view" || e.event_name === "admin_dashboard_view") {
        const key = format(new Date(e.created_at), "yyyy-MM-dd");
        const item = map.get(key);
        if (item) item.count += 1;
      }
    });

    return Array.from(map.values()).map(d => ({ ...d, dateLabel: format(new Date(d.date), "MMM d") }));
  }, [events]);

  // Top pages (by count)
  const topPages = useMemo(() => {
    const counts = new Map<string, number>();
    events.forEach(e => {
      if (!e.route) return;
      counts.set(e.route, (counts.get(e.route) || 0) + 1);
    });
    const arr = Array.from(counts.entries()).map(([route, count]) => ({ route, count }));
    arr.sort((a, b) => b.count - a.count);
    return arr.slice(0, 8);
  }, [events]);

  // recent activity list
  const recent = events.slice(0, 25);

  const glow = process.env.NEXT_PUBLIC_GLOW_RGB ?? "132, 0, 255";
  const accent = `rgba(${glow}, 0.95)`;
  const accentSoft = `rgba(${glow}, 0.12)`;

  return (
    <main className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Analytics — Hybrid Premium</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Page Views (Line) */}
          <div className="col-span-2 bg-neutral-800 p-4 rounded-2xl border border-neutral-700">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-medium">Page Views (30d)</h2>
              <div className="text-sm text-neutral-300">{loading ? "Loading…" : `${events.length} events`}</div>
            </div>

            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={pageViewsByDay}>
                  <CartesianGrid strokeDasharray="3 6" stroke="#222" />
                  <XAxis dataKey="dateLabel" tick={{ fill: "#b9b9c9" }} />
                  <YAxis tick={{ fill: "#b9b9c9" }} />
                  <Tooltip contentStyle={{ background: "#0b0b0d", border: `1px solid ${accentSoft}` }} />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke={accent}
                    strokeWidth={3}
                    dot={{ r: 3, stroke: "white", strokeWidth: 1 }}
                    activeDot={{ r: 6 }}
                    isAnimationActive={true}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top pages (Bar) */}
          <div className="bg-neutral-800 p-4 rounded-2xl border border-neutral-700">
            <h2 className="text-lg font-medium mb-3">Top Pages</h2>
            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topPages}>
                  <CartesianGrid horizontal={false} vertical={false} />
                  <XAxis dataKey="route" tick={{ fill: "#b9b9c9" }} />
                  <Tooltip contentStyle={{ background: "#0b0b0d", border: `1px solid ${accentSoft}` }} />
                  <Bar dataKey="count" fill={accent} radius={[6, 6, 6, 6]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="bg-neutral-800 p-4 rounded-2xl border border-neutral-700">
              <h2 className="text-lg font-medium mb-3">Recent Activity</h2>

              <ul className="divide-y divide-neutral-700 max-h-[420px] overflow-auto">
                {recent.length === 0 && <li className="p-4 text-neutral-400">No events yet</li>}
                {recent.map((r) => (
                  <li key={r.id} className="p-3 flex justify-between items-start">
                    <div>
                      <div className="text-sm font-medium">{r.event_name}</div>
                      <div className="text-xs text-neutral-400">{r.route || "—"}</div>
                      <div className="text-xs text-neutral-500 mt-1">{new Date(r.created_at).toLocaleString()}</div>
                    </div>
                    <div className="ml-4 text-xs text-neutral-300 whitespace-pre-wrap max-w-[40%]">
                      <pre className="text-xs">{JSON.stringify(r.value ?? {}, null, 0)}</pre>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-neutral-800 p-4 rounded-2xl border border-neutral-700">
              <h2 className="text-lg font-medium mb-3">Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div className="text-sm text-neutral-300">Total events</div>
                  <div className="font-medium">{events.length}</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm text-neutral-300">Unique pages</div>
                  <div className="font-medium">{topPages.length}</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm text-neutral-300">Tracked days</div>
                  <div className="font-medium">30</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
