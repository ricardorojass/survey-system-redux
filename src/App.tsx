import React from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import SurveyListView from './pages/SurveyListView'

const App = () => {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/surveys" component={SurveyListView} />
        {/* <PrivateRoute exact path="/surveys/:id/edit" component={SurveyEditView} />
        <Route exact path="/surveys/:id/edit/surveyResponse" component={SurveyResponseView} />
        <Route exact path="/surveys/:id/surveySubmitted" component={SurveySubmittedView} /> */}
      </Switch>
    </div>
  )
}

export default App
