import { supabase } from "./supabase";

export async function track(event_name: string, data: object = {}) {
  const route = window.location.pathname;
  
  await supabase.from("events").insert({
    event_name,
    route,
    value: data
  });
}
