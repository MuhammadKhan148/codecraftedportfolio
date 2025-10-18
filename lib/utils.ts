import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Simple JSON file helpers for demo storage only (server-only)
// Note: In real apps use a database or KV store. These helpers read/write under public/data.
// server-only helpers moved to lib/server/json.ts
