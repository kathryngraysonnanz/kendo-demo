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
        <div className='page-wrapper'>
          <div className='display-wrapper'>
            <div className="left-container">
                <NavMenu/>
            </div>
            <div className="top-container"></div>
            <div className="corner-background">
              <div className="corner"></div>
             </div>
             <div className={"user"}>
               <Link to="/settings">
                 <Chip removable={false}>
                    <span className="k-chip-label">Authorized User: Captain Kathryn Janeway</span>
                    <span className="k-icon k-i-user"/>
                  </Chip>
                </Link>
             </div>
            <div className="center-panel">
               { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
