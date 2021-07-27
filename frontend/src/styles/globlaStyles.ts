  
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  html, body{
  min-height: 100vh;
  }
  #root{
  min-height: 100vh;
  }
  body {
    font-family: 'Nunito Sans', sans-serif;
  }
`

export const Title = styled.p`
  display: flex;
  align-self: flex-start;
  justify-self: center;
  color: #964ca0;
  font-weight: 700;

`

export default GlobalStyles