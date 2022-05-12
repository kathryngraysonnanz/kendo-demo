import React, {Component} from 'react';
import './sidebar.scss';
import { Link } from "react-router-dom";

export class NavMenu extends Component {
  render() {
    return (
<nav className="left-menu">
  <div className="menu">
    <Link to='/astrometrics'>
      Astrometrics Console
    </Link>
  </div>
  <div className="menu">
  <Link to='/manifest'>Crew Manifest</Link>
    </div>
  <div className="menu">
  <Link to='/engineering'>Engineering Console</Link>
  </div>
  <div className="menu">
  <Link to='/ops'>Operations Console</Link>
  </div>
  <div className="menu">
  <Link to='/data'>Data Bank</Link>
  </div>
  <div className="menu">
  <Link to='/schedule'>Schedule</Link>
  </div>
</nav>
)}
}
