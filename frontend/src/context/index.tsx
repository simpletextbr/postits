import React, { createContext, useState, useEffect } from 'react'
import { INotes, NotesStates } from './types'
import api from '../services/api'

const inititalState: NotesStates = {
  notes: [],
  loadNotes: () => null
}

export const NotesContext = createContext<NotesStates>(inititalState)

export const LoadNotesProvider:React.FC = ({ children }) => {
  const [ notes, setNotes ] = useState<INotes[]>([])

  async function loadNotes (){
    const response = await api.get('/postits')
    setNotes(response.data)
  }

  useEffect(() => {
    loadNotes()
  }, [])
  return (
    <NotesContext.Provider value={{ notes, loadNotes }}>{
      children
    }</NotesContext.Provider>
  )
}

