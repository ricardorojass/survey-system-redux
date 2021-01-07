import { Dispatch } from "redux"
import axios from "../axios"
import { User } from "../types"
import {
  USER_LOADING,
  SIGNUP_USER_FAIL,
  SIGNUP_USER_SUCCESS,
  AuthDispatchTypes,
} from './authActionsTypes'

const USER_URI = '/me'
const SIGNUP_URI = '/signup'
const LOGIN_URI = '/login'



export const Signup = (user: User) => async (dispatch: Dispatch<AuthDispatchTypes>) => {
  try {
    dispatch({
      type: USER_LOADING,
    })

    const response = await axios.post(SIGNUP_URI, user)
    console.log('response', response);

    const { token } = response.data
    localStorage.setItem("token", token)

    dispatch({
      type: SIGNUP_USER_SUCCESS,
      payload: token
    })

  } catch (e) {
    dispatch({
      type: SIGNUP_USER_FAIL,
    })
  }
}