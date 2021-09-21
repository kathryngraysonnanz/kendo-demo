import React, {Component} from 'react';
import './sidebar.scss';
import { Link } from "react-router-dom";

export class NavMenu extends Component {
  render() {
    return (
<nav class="left-menu">
  <div class="menu">
    <Link to='/astrometrics'>
      Astrometrics Console
    </Link>
  </div>
  <div class="menu">
  <Link to='/manifest'>Crew Manifest</Link>
    </div>
  <div class="menu">
  <Link to='/engineering'>Engineering Console</Link>
  </div>
  <div class="menu">
  <Link to='/weapons'>Weapons Array</Link>
  </div>
  <div class="menu">
  <Link to='/data'>Data Bank</Link>
  </div>
  <div class="menu">
  <Link to='/schedule'>Schedule</Link>
  </div>
</nav>
)}
}
