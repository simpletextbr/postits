import React, { useState, useContext } from 'react'

import { toast } from 'react-toastify'
import { NotesContext } from '../../context'

import * as S from './styles'

import api from '../../services/api'

const CreatePostIt: React.FC = () => {
  const [ title, setTitle ] = useState(String)
  const [ description, setDescription ] = useState(String)

  const { loadNotes } = useContext(NotesContext)

  const clearFields = () => {
    setTitle('')
    setDescription('')
  }

  const handleSubmit = async (event:any) => {
    event.preventDefault()

    const data = {
      title,
      description
    }

    try {
      await api.post('/postits', data)
      toast.success('Nota Criada com sucesso', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      loadNotes()
      clearFields()
    } catch (error) {
      toast.error('Falha o criar, motivo:' + error.message, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }

  return (
    <S.Main >
      <S.CreatePostItTitle>Bloco de notas</S.CreatePostItTitle>
      <S.Form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Assunto"
          value={title}
          onChange={event => setTitle(event.target.value)}
          maxLength={20}
          required
        />
        <textarea 
          placeholder="Texto"
          value={description}
          onChange={event => setDescription(event.target.value)}
          required
        />
        <button type="submit">Criar nota</button>
      </S.Form>
      
    </S.Main>
  )
}

export default CreatePostIt