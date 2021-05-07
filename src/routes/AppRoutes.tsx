import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'

import Layout from '../pages/Layout'
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
              <Route path="/admin" exact component={Dashboard} />
              <Route path="/admin/dashboard" component={Dashboard} />
              <Route path="/admin/profile" component={Profile} />
              <Route path="/admin/layout" component={Layout} />
              <Route path="/admin/customers" component={Customers} />
              <Route path="/admin/config" exact component={Config} />
              <Route
                component={() => <div>404 Main Admin</div>}
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
              <Route path="/about" component={About} />
              <Route path="/home" component={Home} />
            </Switch>
          </Main>
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRoutes
