import React from 'react'

interface INotes {
  id: string,
  title: string,
  description:string
  created_at: Date,
  updated_at:Date
}

interface NotesStates {
  notes: INotes[]
  loadNotes: () => void
}
