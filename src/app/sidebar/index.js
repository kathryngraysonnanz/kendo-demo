import React, {Component} from 'react';
import './sidebar.scss';
import '@progress/kendo-theme-default/dist/all.css';
import { Button } from '@progress/kendo-react-buttons'
import { Link } from "react-router-dom";

export class NavMenu extends Component {
  render() {
    return (
<nav class="left-menu">
  <div class="menu">
    <Link to='/manifest'>
      Crew Manifest
    </Link>
    {/* data grid */}
  </div>
  <div class="menu">
  <Link to='/diagnostics'>Ship Diagnostics</Link>
    {/* chart, progress bars */}
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
