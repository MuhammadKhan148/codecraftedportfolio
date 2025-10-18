import { NextResponse } from "next/server"
export const dynamic = "force-static"
export const revalidate = 0

export async function POST() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set("cc_admin", "", { path: "/", maxAge: 0 })
  return res
}


