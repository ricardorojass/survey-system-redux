import {
  AUTH_USER,
  AUTH_ERROR,
  AuthDispatchTypes
} from "../actions/authActionsTypes"

interface InitialStateI {
  authenticated?: string | null | undefined,
  errorMessage?: string | null | undefined
}

const initialState: InitialStateI = {
  authenticated: '',
  errorMessage: ''
}


const authReducer = (state: InitialStateI = initialState, action: AuthDispatchTypes): InitialStateI => {
  switch (action.type) {
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload }

    case AUTH_USER:
      return { ...state, authenticated: action.payload }

    default:
      return state
  }
}

export default authReducer