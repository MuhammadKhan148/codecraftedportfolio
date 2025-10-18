import { NextResponse } from "next/server"
import path from "path"
import { readJsonFile, writeJsonFile } from "@/lib/server/json"

type Review = {
  id: string
  author: string
  rating: number
  title: string
  content: string
  projectTitle: string
  date: string
  helpful: number
}

const dataPath = path.join(process.cwd(), "public", "data", "reviews.json")

export async function GET() {
  const reviews = await readJsonFile<Review[]>(dataPath, [])
  return NextResponse.json(reviews)
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<Review>
  if (!body.author || !body.title || !body.content || !body.projectTitle || !body.rating) {
    return NextResponse.json({ error: "missing required fields" }, { status: 400 })
  }
  const reviews = await readJsonFile<Review[]>(dataPath, [])
  const newReview: Review = {
    id: String(Date.now()),
    author: body.author,
    rating: Number(body.rating ?? 5),
    title: body.title,
    content: body.content,
    projectTitle: body.projectTitle,
    date: new Date().toISOString(),
    helpful: 0,
  }
  const updated = [newReview, ...reviews]
  await writeJsonFile(dataPath, updated)
  return NextResponse.json(newReview, { status: 201 })
}

export async function PATCH(request: Request) {
  const body = (await request.json()) as Partial<Review> & { id?: string }
  if (!body.id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 })
  }
  const reviews = await readJsonFile<Review[]>(dataPath, [])
  const idx = reviews.findIndex((r) => r.id === body.id)
  if (idx === -1) {
    return NextResponse.json({ error: "review not found" }, { status: 404 })
  }
  const updated: Review = {
    ...reviews[idx],
    ...(body.author !== undefined ? { author: body.author } : {}),
    ...(body.title !== undefined ? { title: body.title } : {}),
    ...(body.content !== undefined ? { content: body.content } : {}),
    ...(body.rating !== undefined ? { rating: Number(body.rating) } : {}),
    ...(body.projectTitle !== undefined ? { projectTitle: body.projectTitle } : {}),
    ...(body.helpful !== undefined ? { helpful: Number(body.helpful) } : {}),
  }
  const next = [...reviews]
  next[idx] = updated
  await writeJsonFile(dataPath, next)
  return NextResponse.json(updated)
}
