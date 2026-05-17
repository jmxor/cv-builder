import { ref } from "vue"
import { defineStore } from "pinia"

export interface CV {
  id: string
  name: string
  description: string
  createdAt: Date
  updatedAd: Date
  sections: string[]
}

export interface CVSection {
  id: string
  type: string
  title: string
  data: string
  createdAt: Date
  updatedAt: Date
}

export const useCVStore = defineStore("cvs", () => {
  const cvs = ref<Record<string, CV>>({})
  const cvSections = ref<Record<string, CVSection>>({})

  function makeId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return crypto.randomUUID()
    }
    // fallback
    return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
  }

  function createCv(payload: { name: string; description?: string; sections?: string[] }) {
    const id = makeId()
    const now = new Date()
    const cv: CV = {
      id,
      name: payload.name,
      description: payload.description ?? "",
      createdAt: now,
      updatedAd: now,
      sections: payload.sections ?? [],
    }

    cvs.value = { ...cvs.value, [id]: cv }
    return cv
  }

  function deleteCv(id: string) {
    const existing = cvs.value[id]
    if (!existing) return false

    const { [id]: _removed, ...remaining } = cvs.value
    cvs.value = remaining
    return true
  }

  function createCvSection(payload: { type: string; title?: string; data?: string }) {
    const id = makeId()
    const now = new Date()
    const section: CVSection = {
      id,
      type: payload.type,
      title: payload.title ?? "",
      data: payload.data ?? "",
      createdAt: now,
      updatedAt: now,
    }
    cvSections.value = { ...cvSections.value, [id]: section }
    return section
  }

  return { cvs, cvSections, createCv, deleteCv, createCvSection }
})
