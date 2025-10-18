import { NextResponse } from "next/server"
export const dynamic = "force-static"
export const revalidate = 0
import path from "path"
import { readJsonFile, writeJsonFile } from "@/lib/server/json"

type Project = {
  id: string
  title: string
  description: string
  image?: string
  videos?: string[]
  rating?: number
  views?: number
  author?: string
  tags?: string[]
}

const dataPath = path.join(process.cwd(), "public", "data", "projects.json")

export async function GET() {
  const projects = await readJsonFile<Project[]>(dataPath, [])
  return NextResponse.json(projects)
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<Project>
  if (!body.title || !body.description) {
    return NextResponse.json({ error: "title and description are required" }, { status: 400 })
  }
  const projects = await readJsonFile<Project[]>(dataPath, [])
  const newProject: Project = {
    id: String(Date.now()),
    title: body.title,
    description: body.description,
    image: body.image || "/placeholder.svg",
    videos: body.videos || [],
    rating: body.rating ?? 5,
    views: body.views ?? 0,
    author: body.author || "",
    tags: body.tags || [],
  }
  const updated = [newProject, ...projects]
  await writeJsonFile(dataPath, updated)
  return NextResponse.json(newProject, { status: 201 })
}

export async function PATCH(request: Request) {
  const body = (await request.json()) as Partial<Project> & { id?: string }
  if (!body.id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 })
  }
  const projects = await readJsonFile<Project[]>(dataPath, [])
  const idx = projects.findIndex((p) => p.id === body.id)
  if (idx === -1) {
    return NextResponse.json({ error: "project not found" }, { status: 404 })
  }
  const updatedProject: Project = {
    ...projects[idx],
    ...(body.title !== undefined ? { title: body.title } : {}),
    ...(body.description !== undefined ? { description: body.description } : {}),
    ...(body.image !== undefined ? { image: body.image } : {}),
    ...(body.videos !== undefined ? { videos: body.videos as string[] } : {}),
    ...(body.author !== undefined ? { author: body.author } : {}),
    ...(body.tags !== undefined ? { tags: body.tags as string[] } : {}),
  }
  const next = [...projects]
  next[idx] = updatedProject
  await writeJsonFile(dataPath, next)
  return NextResponse.json(updatedProject)
}
