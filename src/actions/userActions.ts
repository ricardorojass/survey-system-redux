import { SIGNPUP_USER, SIGNIN_USER } from "./types"
import { Dispatch } from "react"
import { User } from "../types"
import axios from "axios"

const USER_URI = '/me'
const SIGNUP_URI = '/signup'
const LOGIN_URI = '/login'

export function signup(user: User) {
  return async function(dispatch: Dispatch<any>) {
    const response = await axios.post(SIGNUP_URI, user)
    const { token } = response.data
    localStorage.setItem("token", token)
    dispatch({
      type: SIGNPUP_USER,
      payload: user
    })
  }
}