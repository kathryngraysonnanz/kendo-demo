import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from '../home'
import AstronomicalLog from '../astrometrics'
import Engineering from '../engineering'
import DataBank from '../data'
import Schedule from '../schedule'
import Manifest from '../manifest'
import Settings from '../settings'
import Operations from '../operations'
import ShoreLeave from '../shoreleave'

export default function App() {
  return (
    <Router basename="/kendo-demo">
      <Routes>
        <Route path="/astrometrics"
          element={<AstronomicalLog/>} />
        <Route path="/engineering"
            element={<Engineering/>} />
        <Route path="/data"
            element={<DataBank/>} />
        <Route path="/schedule"
            element={<Schedule/>} />
        <Route path="/manifest"
            element={<Manifest/>} />
        <Route path="/settings"
            element={<Settings/>} />
        <Route path="/ops"
            element={<Operations/>} />
        <Route path="/shoreleave"
            element={<ShoreLeave/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}
