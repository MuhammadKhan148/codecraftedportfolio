import { cookies } from "next/headers"

export async function isAdminFromCookies(): Promise<boolean> {
  const jar = await cookies()
  const cookie = jar.get("cc_admin")
  return cookie?.value === "1"
}


