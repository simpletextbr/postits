import React, { useContext } from 'react'
import * as S from './styles'

import { FiX } from 'react-icons/fi'
import { toast } from 'react-toastify'
import { INotes } from '../../context/types'
import { NotesContext } from '../../context'
import empty from '../../assets/empty.svg'

import api from '../../services/api'

const PostIts:React.FC = () => {
  const { loadNotes, notes } = useContext(NotesContext)

  const handleDelete = async (dt:INotes) => {
    try {
      await api.delete(`/postits?id=${dt.id}`)
      toast.dark('Nota Deletada com sucesso', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      loadNotes()
      if (notes.length === 1){
        window.location.reload()
      }
    } catch (error) {
      toast.error('Falha o deletar, motivo:' + error.message, {
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
    notes.length === 0 ? 
      <S.Main notes={notes.length}>
        <img src={empty} alt="Imagem de base Vazia" />
        <p className="warning">Sorry, We cannot found nothing here!</p>  
      </S.Main > : 
      <S.Main notes={notes.length}>
        <S.PostItTitle>Suas Notas</S.PostItTitle>
        <S.Notes>
          {notes.map((dt:INotes, index) => (
            <div className="note" key={index}>
              <div className="title">
                <p>{dt.title.length > 20 ? dt.title.substring(0, 20) + '...' : dt.title}</p>
              </div>
              <div className="description">
                <p>{dt.description.length > 50 ? dt.description.substring(0, 50) + '...' : dt.description}</p>
              </div>
              <FiX size={16} onClick={() => handleDelete(dt)}/>
            </div>
          ))}
        </S.Notes>
      </S.Main>
  )
}

export default PostIts
