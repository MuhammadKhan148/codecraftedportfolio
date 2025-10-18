import { NextResponse } from "next/server"
export const dynamic = "force-static"
export const revalidate = 0

export async function POST(request: Request) {
  const { password } = await request.json()
  console.log("Login attempt with password:", password)
  const ok = password === "changeme"
  console.log("Login result:", ok)
  const res = NextResponse.json({ ok })
  if (ok) {
    res.cookies.set("cc_admin", "1", {
      httpOnly: false, // Allow client-side access for debugging
      sameSite: "lax",
      secure: false, // Allow HTTP in development
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    })
    console.log("Cookie set")
  }
  return res
}


