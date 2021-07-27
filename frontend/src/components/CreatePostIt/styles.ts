import styled from 'styled-components'
import { Title } from '../../styles/globlaStyles'

export const Main = styled.div`
@media screen and (max-width: 600px){
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content:flex-start;
  color: #964ca0;
  font-size: 30px;
  font-weight: 700;
  margin-top: 60px;
  width: 72%;

}


@media screen and (min-width: 600px){
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content:flex-start;
  color: #964ca0;
  font-size: 30px;
  font-weight: 700;
  margin-top: 60px;
  width: 26%;
}
`

export const CreatePostItTitle = styled(Title)`
  font-size: 30px;
  padding-left: 36px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;  

  input{
    width: 80%;
    height: 30px;
    border-radius: 4px;
    padding-left: 10px;
    color: #000000;
    font-size: 14px;
    border: 0;
    box-shadow: 1px 2px 6px 1px rgba(0,0,0,0.2);
    background-color: #f4f5f7;
  }

  textarea{
    width: 80%;
    height: 100px;
    border-radius: 4px;
    margin-top: 20px;
    padding-left: 10px;
    resize: none;
    color: #000000;
    font-size: 14px;
    border: 0;
    box-shadow: 1px 2px 6px 1px rgba(0,0,0,0.2);
    background-color: #f4f5f7;
  }

  button{
    width: 40%;
    height: 26px;
    color: #FFFFFF;
    background-color: #ff7603;
    border-radius: 6px;
    border: 0;
    margin-top: 20px;
    margin-left:auto;
    margin-right: 36px;
    cursor:pointer;
  }
` 