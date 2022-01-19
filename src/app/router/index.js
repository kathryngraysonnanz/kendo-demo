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

export default function App() {
  return (
    <Router>
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
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}
