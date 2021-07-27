import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages'

function Routes ():JSX.Element{
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes