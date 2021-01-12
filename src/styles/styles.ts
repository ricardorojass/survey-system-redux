import styled from 'styled-components'

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`

export const AuthContainer = styled.div<ColorText>`
  color: ${props => (props.dark? "#000" : "#fff")};
  background-color: #ffffff3d;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 10px 12px;
  margin: auto;
  width: 100%;
`

export const FormGroup = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputField = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;  
`

interface ColorText {
  dark?: boolean
}

export const SubmitButton = styled.button<ColorText>`
  color: ${props => (props.dark? "#000" : "#fff")};
  background-color: #5aac44;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 10px 12px;
  text-align: center;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #37a21b;
  }
`