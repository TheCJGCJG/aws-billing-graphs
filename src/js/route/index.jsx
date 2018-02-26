import * as ROUTES from '../constant/routes'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router'
import { history } from '../redux/middleware/history'
import React from 'react'
import Home from '../view/'

export default () =>
  <ConnectedRouter history={history}>
    <Switch>
      <Route path={ROUTES.HOME} exact component={Home} />
    </Switch>
  </ConnectedRouter>
