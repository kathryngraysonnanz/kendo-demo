import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from '../home'
import AstronomicalLog from '../astrometrics'
import Engineering from '../engineering'
import DataBank from '../data'
import Schedule from '../schedule'
import Manifest from '../manifest'
import Settings from '../settings'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/astrometrics"
          component={AstronomicalLog} />
        <Route path="/engineering"
            component={Engineering} />
        <Route path="/data"
            component={DataBank} />
        <Route path="/schedule"
            component={Schedule} />
        <Route path="/manifest"
            component={Manifest} />
        <Route path="/settings"
            component={Settings} />
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}
