import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import SurveyListView from './pages/SurveyListView'
import { AppContainer } from './styles/styles'

const App = () => {

  return (
    <AppContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/surveys" component={SurveyListView} />
        {/* <PrivateRoute exact path="/surveys/:id/edit" component={SurveyEditView} />
        <Route exact path="/surveys/:id/edit/surveyResponse" component={SurveyResponseView} />
        <Route exact path="/surveys/:id/surveySubmitted" component={SurveySubmittedView} /> */}
      </Switch>
    </AppContainer>
  )
}

export default App
