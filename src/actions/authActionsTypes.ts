export const USER_LOADING = "USER_LOADING"
export const SIGNUP_USER_FAIL = "SIGNUP_USER_FAIL"
export const SIGNUP_USER_SUCCESS = "SIGNUP_USER_SUCCESS"

export interface Token {
  token: string
}

export interface UserLoading {
  type: typeof USER_LOADING
}

export interface SignupUserFail {
  type: typeof SIGNUP_USER_FAIL
}

export interface SignupUserSuccess {
  type: typeof SIGNUP_USER_SUCCESS,
  payload: Token
}

export type AuthDispatchTypes = UserLoading | SignupUserFail | SignupUserSuccess