import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { SignIn } from '../actions/authActions'
import { AuthContainer, SubmitButton } from '../styles/styles'
import Input from '../components/Input'
import '../styles/Auth.scss'

type State = {
  [key: string]: any
}

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [data, setData] = useState<State>({
    name: '',
    email: '',
    password: ''
  })

  const updateField = (name: string, value: string) => {
    setData({ ...data, [name]: value })
  }

  const renderField = (type: string, label: string, name: string) => {
    const value = data[name]
    return <Input type={type} label={label} name={name} value={value} onChange={updateField} />
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(SignIn(data, () => history.push('/surveys')))
  }

  return (

    <AuthContainer dark={false} className="AuthContainer">
      <h1>Sign In</h1>
      <p className="Goto">
        or <a className="" onClick={() => history.push('/register') }>create account</a>
      </p>
      <form onSubmit={e => handleSubmit(e)}>
        {renderField('email', 'E-mail', 'email')}
        {renderField('password','Password', 'password')}
        <SubmitButton dark={false}>SIGN IN</SubmitButton>
      </form>
    </AuthContainer>
  )
}

export default Login