import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route.js'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} isPrivate={false} />
      <Route exact path="/register" component={SignUp} isPrivate={false} />
      <Route exact path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  )
}