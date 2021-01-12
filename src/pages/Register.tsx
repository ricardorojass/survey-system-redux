import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Signup } from '../actions/authActions'
import { AuthContainer, SubmitButton } from '../styles/styles'
import Input from '../components/Input'

const Register = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [data, setData] = useState<any>({
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
    dispatch(Signup(data, () => history.push('/surveys')))
  }

  return (

    <AuthContainer dark={false} className="AuthContainer">
      <h1>Sign Up</h1>
      <form onSubmit={e => handleSubmit(e)}>
        {renderField('text', 'Name', 'name')}
        {renderField('email', 'E-mail', 'email')}
        {renderField('password','Password', 'password')}
        <SubmitButton dark={false}>SIGN UP</SubmitButton>
      </form>
    </AuthContainer>
  )
}

export default Register