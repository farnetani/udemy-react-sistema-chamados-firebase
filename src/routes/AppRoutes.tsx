import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'

import Profile from '../pages/Profile'
import Customers from '../pages/Customers'
import SignIn from '../pages/SignIn'
import MainAdmin from '../containers/layouts/MainAdmin'
import Main from '../containers/layouts/Main'
import Home from '../pages/Home'
import About from '../pages/About'
import Config from '../pages/Config'

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={SignIn} />

        <Route path="/admin/:path?" exact>
          <MainAdmin>
            <Switch>
              <Route exact path="/admin" component={Dashboard} />
              <Route exact path="/admin/dashboard" component={Dashboard} />
              <Route exact path="/admin/profile" component={Profile} />
              <Route exact path="/admin/customers" component={Customers} />
              <Route exact path="/admin/config" component={Config} />
              <Route
                component={() => <h1>Error: 404 Página não encontrada!</h1>}
                exact
                path="/admin/*"
              />
            </Switch>
          </MainAdmin>
        </Route>

        <Route>
          <Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/home" component={Home} />
            </Switch>
          </Main>
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRoutes
