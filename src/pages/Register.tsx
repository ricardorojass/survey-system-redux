import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Signup } from '../actions/authActions'

const Register = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const changeName = (value: string) => setName(value)
  const changeEmail = (value: string) => setEmail(value)
  const changePassword = (value: string) => setPassword(value)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const user = {
      name,
      email,
      password
    }

    dispatch(Signup(user, () => history.push('/surveys')))
  }

  return (

    <div>
      <h1>Register</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" onChange={e => changeName(e.target.value)}/>
        <input type="email" onChange={e => changeEmail(e.target.value)}/>
        <input type="password" onChange={e => changePassword(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default Register