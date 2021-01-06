import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import store from './store'

const store = createStore(() => [], {} as any, applyMiddleware())

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>My Survey System Redux</h1>
      </div>
    </Provider>
  )
}

export default App
