import React from 'react'

import * as S from './styles'

import { CreatePostIt, PostIts } from '../../components'

function Home ():JSX.Element {
  return (
    <S.Main>
      <CreatePostIt />
      <div className="separator"/>
      <PostIts />
    </S.Main>
  )
}

export default Home