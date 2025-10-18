import { NextResponse } from "next/server"
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

export async function POST() {
  const existing = await readJsonFile<Project[]>(dataPath, [])
  const now = Date.now()
  const byTitle = new Set(existing.map((p) => p.title))
  const entries: Project[] = []

  if (!byTitle.has("Rider App")) {
    entries.push({
      id: String(now + 1),
      title: "Rider App",
      description:
        "Built a cross-platform dispatch app with role-based flows for Passenger (Pasajero), Driver (Conductor), and Coordinator (Central). Implemented authentication, ride request creation, driver availability, and an auto-assignment mechanism that selects approved/available drivers with the lowest active-ride load. Added localization keys for UI text, structured data models (users/requests), Providers for app state, and Firestore security rules enforcing per-role read/write access. Included Firebase Cloud Functions (Node.js) endpoints (with API key guard) for server-side assignment logic. Prepared targets for Android/iOS/Web/Desktop and set up Firebase config and rules.",
      image: "/window.svg",
      videos: ["/videos/rider app.mp4"],
      rating: 5,
      views: 0,
      author: "Admin",
      tags: ["firebase", "flutter", "fullstack"],
    })
  }

  if (!byTitle.has("Chess Engine")) {
    entries.push({
      id: String(now + 2),
      title: "Chess Engine",
      description:
        "I designed and implemented a complete, playable chess experience with an integrated AI opponent, focusing on correctness, performance, and clean architecture. The work centers on a Python-based chess engine that cleanly separates game state, legal move generation, and search. I built robust move generation for all piece types (including pins, checks, castling rights, en passant, and promotion), and validated move legality by simulating and rolling back state transitions to guarantee that king safety constraints are never violated. On top of the legal move layer, I implemented a flexible AI search pipeline. The engine uses minimax with alpha–beta pruning to evaluate game trees efficiently, significantly reducing the branching factor and improving response times. I added iterative deepening to produce quick, anytime responses that get stronger with available time, and integrated move ordering heuristics (captures, promotions, killer/priority moves) to increase pruning effectiveness. The evaluation function blends material balance with positional features (piece-square tables, king safety, development, pawn structure), and is designed to be easily extended for future heuristics. The search includes quiescence extensions for capture-heavy positions to mitigate horizon effects. I created a responsive UI loop for smooth human play, mapping mouse input to squares, highlighting selected pieces and legal moves, and animating moves for visual clarity. Piece sprites are loaded from an assets folder and scaled consistently. The UI integrates seamlessly with the engine: human turns commit validated moves to the core GameState, while AI turns run the search in a controlled loop and apply the chosen move back to the same state. Game termination (checkmate, stalemate, draw conditions) is detected and displayed. I emphasized code quality and maintainability: state mutations are centralized, helper utilities encapsulate repeated logic, and function boundaries reflect engine layers.",
      image: "/window.svg",
      videos: ["/videos/chess.mp4"],
      rating: 5,
      views: 0,
      author: "Admin",
      tags: ["python", "algorithms", "game ai", "minimax", "alpha-beta pruning", "iterative deepening", "quiescence search"],
    })
  }

  if (!byTitle.has("Deepfake Pipeline")) {
    entries.push({
      id: String(now + 3),
      title: "Deepfake Pipeline",
      description:
        "I built an end-to-end deepfake face‑swap and lip‑sync system that takes an input video, swaps the target face, and synchronizes lip movements to a supplied audio track for natural, high‑quality results. The pipeline integrates face detection, face alignment, high‑fidelity swapping, and Wav2Lip‑based audio‑driven lip synchronization. It includes reproducible scripts, model checkpoint management, and clear documentation for local inference. Core components: Video preprocessing with stable face detection/tracking (S3FD) and alignment. High‑quality face swap with robust blending to preserve lighting and pose. Lip‑sync using Wav2Lip/Wav2Lip‑GAN for realistic mouth articulation driven by any speech audio. Audio processing to clean and align waveforms for best sync. Batch inference utilities and CLI for quick runs on local GPUs. Outputs optimized for clarity with minimal artifacts and temporal consistency. Technical highlights: Python/PyTorch implementation with CUDA acceleration. OpenCV for frame I/O, transformations, and composition. Checkpoint handling for Wav2Lip‑GAN and detector models. Modular design to swap detectors or models with minimal changes. Optional FastAPI/Flask hooks for service integration. Clear README and example inputs/outputs for quick start. This solution is suitable for content creators, researchers, and prototype apps where fast iteration and believable results are important.",
      image: "/window.svg",
      videos: ["/videos/deepfake.mp4"],
      rating: 5,
      views: 0,
      author: "Admin",
      tags: ["computer vision", "deep learning", "generative ai", "video processing", "audio processing", "cuda", "opencv", "pytorch", "wav2lip"],
    })
  }

  const next = [...entries, ...existing]
  await writeJsonFile(dataPath, next)
  return NextResponse.json({ ok: true, added: entries.length })
}


