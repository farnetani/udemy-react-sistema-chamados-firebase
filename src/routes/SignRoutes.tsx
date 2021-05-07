import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const SignRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        {/* <Route path="*" component={() => <h1>Página não encontrada!</h1>} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default SignRoutes
