import React from 'react';
import Landing from './Landingpage';
import { Switch, Route} from 'react-router-dom'

const Main = () => (
  <Switch>
    <Route exact path='/' component={Landing}/>
  </Switch>
)

export default Main;