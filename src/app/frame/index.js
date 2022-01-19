import React, {Component} from 'react';
import './frame.scss';
import "../../../src/index.scss";
import { Chip } from '@progress/kendo-react-buttons'
import { Link } from "react-router-dom";
import { NavMenu } from '../sidebar'

export default class Frame extends Component {
  render() {
    return (
      <div className="App">
        <div className={'page-wrapper'}>
          <div className={'display-wrapper'}>
            <div class="left-container">
                <NavMenu/>
            </div>
            <div class="top-container"></div>
            <div class="corner-background">
              <div class="corner"></div>
             </div>
             <div class="user">
               <Link to="/settings">
                 <Chip removable={false}>
                    <span className="k-chip-label">Authorized User: Captain Kathryn Janeway</span>
                    <span className="k-icon k-i-user"/>
                  </Chip>
                </Link>
             </div>
            <div class="center-panel">
               { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
