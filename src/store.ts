import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers"
import thunk from "redux-thunk"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootStore = ReturnType<typeof rootReducer>

export default store