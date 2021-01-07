import {
  AuthDispatchTypes,
  SIGNUP_USER_FAIL,
  SIGNUP_USER_SUCCESS,
  USER_LOADING,
  Token
} from "../actions/authActionsTypes"

interface InitialStateI {
  loading: boolean,
  token?: Token
}

const initialState: InitialStateI = {
  loading: false
}


const userReducer = (state: InitialStateI = initialState, action: AuthDispatchTypes): InitialStateI => {
  switch (action.type) {
    case SIGNUP_USER_FAIL:
      return {
        loading: false
      }

    case USER_LOADING:
      return {
        loading: true
      }

    case SIGNUP_USER_SUCCESS:
      return {
        loading: false,
        token: action.payload
      }

    default:
      return state
  }
}

export default userReducer