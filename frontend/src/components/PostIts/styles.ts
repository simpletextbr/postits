import styled, { css } from 'styled-components'
import { Title } from '../../styles/globlaStyles'

interface INotes {
  notes:number
}

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 72%;
  ${({ notes }:INotes) => notes > 0 && css`
    margin-top: 60px;
  `}

  @media screen and (max-width: 600px){
    img {
      width: 200px;
      height: 200px;
      margin: auto;
    }

    .warning{
    font-size: 18px;
    text-align: center
  }
  }


  @media screen and (min-width: 600px){
    img {
      width: 400px;
      height: 400px;
      margin: auto;
    }

    .warning{
    font-size: 23px;
    
    text-align: center
  }
  }

 
`

export const PostItTitle = styled(Title)`
  font-size: 20px;
  margin-left: 36px;
`

export const Notes = styled.div`

@media screen and  (max-width: 800px){
  display: grid;
  grid-template-columns: 1fr ;
  row-gap: 20px;
  margin-left: 36px;
  margin-top: 10px;
  min-height: 100%;

  .note{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    background-color: #f4f5f7;
    width: 90%;
    height: 100px;
    border-radius: 8px;
    position: relative;
    box-shadow: 1px 1px rgba(0,0,0,0.2);

    .title{
      font-size: 20px;
      align-items: center;
      justify-content: center;
      width: 80%;
      height: 40%;
      border-bottom: 1px dashed #C4C5C7;
      p{
        height: 100%;
        padding-top: 12px;
        color: #70c4bf;
      }
    }

    .description{
      font-size: 14px;
      align-items: center;
      justify-content: center;
      width: 80%;
      height: 40%;
      p{
        height: 100%;
        padding-top: 12px;
        color: #A4A4A4;
      }
    }

    svg {
        display: flex;
        opacity: 1;
        position: absolute;
        top: 0;
        right: 0;
        margin: -6px;
        padding: 2px;
        border-radius: 50%;
        color: #FFFFFF;
        background-color: #9d9d9d;
        cursor:pointer;
      }
  }
}

@media screen and (min-width: 800px) and (max-width: 1200px){
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  margin-left: 36px;
  margin-top: 10px;
  min-height: 100%;

  .note{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    background-color: #f4f5f7;
    width: 90%;
    height: 100px;
    border-radius: 8px;
    position: relative;
    box-shadow: 1px 1px rgba(0,0,0,0.2);

    .title{
      font-size: 20px;
      align-items: center;
      justify-content: center;
      width: 80%;
      height: 40%;
      border-bottom: 1px dashed #C4C5C7;
      p{
        height: 100%;
        padding-top: 12px;
        color: #70c4bf;
      }
    }

    .description{
      font-size: 14px;
      align-items: center;
      justify-content: center;
      width: 80%;
      height: 40%;
      p{
        height: 100%;
        padding-top: 12px;
        color: #A4A4A4;
      }
    }

    svg {
        display: flex;
        opacity: 1;
        position: absolute;
        top: 0;
        right: 0;
        margin: -6px;
        padding: 2px;
        border-radius: 50%;
        color: #FFFFFF;
        background-color: #9d9d9d;
        cursor:pointer;
      }
  }
}

@media screen and (min-width: 1200px){
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 20px;
  margin-left: 36px;
  margin-top: 10px;

  .note{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    background-color: #f4f5f7;
    width: 90%;
    height: 100px;
    border-radius: 8px;
    position: relative;
    box-shadow: 1px 1px rgba(0,0,0,0.2);

    .title{
      font-size: 20px;
      align-items: center;
      justify-content: center;
      width: 80%;
      height: 40%;
      border-bottom: 1px dashed #C4C5C7;
      p{
        height: 100%;
        padding-top: 12px;
        color: #70c4bf;
      }
    }

    .description{
      font-size: 14px;
      align-items: center;
      justify-content: center;
      width: 80%;
      height: 60%;
      p{
        height: 100%;
        padding-top: 12px;
        color: #A4A4A4;
      }
    }

    svg {
      display: none;
    }

    :hover{
      svg {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        margin: -6px;
        padding: 2px;
        border-radius: 50%;
        color: #FFFFFF;
        background-color: #9d9d9d;
        cursor:pointer;
      }
    }
  }
}
 
`