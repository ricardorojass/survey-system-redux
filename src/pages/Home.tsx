import React from 'react'
import { RootStore } from '../store'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const authState = useSelector((state: RootStore) => state.auth)

  if (authState.authenticated) {
    return <Redirect to='/surveys' />
  } else {
    return <Redirect to='/register' />
  }
}

export default Home
