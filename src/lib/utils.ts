import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Runtime guard for browser-only features
export const isBrowser = typeof window !== 'undefined'

export const API_BASE_URL = 'https://my-project-backend-seven.vercel.app/api'
