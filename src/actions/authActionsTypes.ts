export const AUTH_ERROR = "AUTH_ERROR"
export const AUTH_USER = "AUTH_USER"

export interface SignupUserFail {
  type: typeof AUTH_ERROR,
  payload: string
}

export interface SignupUserSuccess {
  type: typeof AUTH_USER,
  payload: string
}

export type AuthDispatchTypes = SignupUserFail | SignupUserSuccess