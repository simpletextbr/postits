import styled from 'styled-components'

export const Main = styled.div`

@media screen and (max-width: 600px){
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .separator{
    width: 60vw;
    height: 2px;
    margin-top: 30px;
    background-color:#fc7b10;
  }
}

@media screen and (min-width: 600px){
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;

  .separator{
    width: 2px;
    height: 90vh;
    margin-top: 30px;
    background-color:#fc7b10;
  }
}
`