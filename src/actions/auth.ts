import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionAuthTypes } from './types'

export interface AuthUserAction {
  type: ActionAuthTypes.signupUser
}

