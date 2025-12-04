import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = (await req.formData()) as unknown as globalThis.FormData;
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const res = NextResponse.json({ success: true });

    res.cookies.set({
      name: "auth",
      value: "true",
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return res;
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
