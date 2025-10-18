import { NextResponse } from "next/server"
import path from "path"
import fs from "node:fs/promises"

export async function POST() {
  const projectRoot = process.cwd()
  const srcDir = path.join(projectRoot, "Data")
  const dstDir = path.join(projectRoot, "public", "videos")
  const filesToCopy = [
    { src: "deepfake.mp4", dst: "deepfake.mp4" },
    { src: "chess.mp4", dst: "chess.mp4" },
    { src: "rider app.mp4", dst: "rider app.mp4" },
  ]

  try {
    await fs.mkdir(dstDir, { recursive: true })
    const results: { file: string; copied: boolean }[] = []
    for (const f of filesToCopy) {
      const from = path.join(srcDir, f.src)
      const to = path.join(dstDir, f.dst)
      try {
        await fs.copyFile(from, to)
        results.push({ file: f.dst, copied: true })
      } catch {
        // Source might not exist; skip
        results.push({ file: f.dst, copied: false })
      }
    }
    return NextResponse.json({ ok: true, results })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "copy failed" }, { status: 500 })
  }
}


