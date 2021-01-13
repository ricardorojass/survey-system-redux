import { Dispatch } from "redux"
import axios from "../axios"
import { User } from "../types"
import {
  AUTH_USER,
  AUTH_ERROR,
  AuthDispatchTypes,
} from './authActionsTypes'

const USER_URI = '/me'
const SIGNUP_URI = '/signup'
const LOGIN_URI = '/login'



export const Signup = (user: User, callback: CallableFunction) => async (dispatch: Dispatch<AuthDispatchTypes>) => {
  try {
    const response = await axios.post(SIGNUP_URI, user)
    const { token } = response.data

    dispatch({ type: AUTH_USER, payload: token })
    localStorage.setItem("token", token)
    callback()
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Something was wrong' })
  }
}

export const SignIn = (user: User, callback: CallableFunction) => async (dispatch: Dispatch<AuthDispatchTypes>) => {
  try {
    const response = await axios.post(LOGIN_URI, { email: user.email, password: user.password })
    const { token } = response.data

    dispatch({ type: AUTH_USER, payload: response.data })
    localStorage.setItem("token", token)
    callback()
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Something was wrong' })
  }
}