import React from "react"
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { render } from "react-dom"
import App from "./App"
import store from './store'
import './styles/application.scss'

render(
  <React.Fragment>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.Fragment>,
  document.getElementById("app")
)