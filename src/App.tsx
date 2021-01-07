import React, { useState } from 'react'
import { RootStore } from './store'
import { useDispatch, useSelector } from 'react-redux'
import { Signup } from './actions/authActions'

type State = { email?: string, password?: string }

const App = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const authState = useSelector((state: RootStore) => state.user)

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
    dispatch(Signup(user))
  }

  console.log('user state', authState)

  return (
    <div>
      <h1>My Survey System Redux</h1>
      <hr/>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" onChange={e => changeName(e.target.value)}/>
        <input type="email" onChange={e => changeEmail(e.target.value)}/>
        <input type="password" onChange={e => changePassword(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
