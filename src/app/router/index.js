import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from '../home'
import Manifest from '../manifest'
import Engineering from '../engineering'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/manifest"
          component={Manifest} />
          <Route path="/engineering"
            component={Engineering} />
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}
