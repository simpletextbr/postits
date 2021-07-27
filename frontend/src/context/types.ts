export interface INotes {
  id: string,
  title: string,
  description:string
  created_at: Date,
  updated_at:Date
}

export interface NotesStates {
  notes: INotes[]
  loadNotes: () => void
}