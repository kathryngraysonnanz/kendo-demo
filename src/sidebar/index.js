import React, {Component} from 'react';
import './sidebar.scss';
import '@progress/kendo-theme-default/dist/all.css';
import { Button } from '@progress/kendo-react-buttons'

export class NavMenu extends Component {
  render() {
    return (
<nav class="left-menu">
  <div class="menu">
    <Button look="flat">Crew Manifest</Button>
    {/* data grid */}
  </div>
  <div class="menu">
  <Button look="flat">Ship Diagnostics</Button>
    {/* chart, progress bars */}
    </div>
  <div class="menu">
  <Button look="flat">Engineering Console</Button>
  </div>
  <div class="menu">
  <Button look="flat">Weapons Array</Button>
  </div>
  <div class="menu">
  <Button look="flat">Data Bank</Button>
  </div>
  <div class="menu">
  <Button look="flat">Calendar</Button>
  </div>
</nav>
)}
}
