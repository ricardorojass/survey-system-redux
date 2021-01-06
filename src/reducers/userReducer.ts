import { ActionAuthTypes } from "../actions/types"
import { User } from "../types"

const initialState = {
  user: {} as User
}

type Actions = { type: 'SIGNUP_USER' } | { type: 'SIGNIN_USER' }

export default function(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionAuthTypes.signupUser:
      return {
        ...state,
        user: action.payload
      }
      break

    default:
      return state
      break;
  }
}