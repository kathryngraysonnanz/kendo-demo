import React, {Component} from 'react';
import './frame.scss';
import "../../../src/index.scss";
import { Button } from '@progress/kendo-react-buttons'
import { NavMenu } from '../sidebar'

export default class extends Component {
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
            <div class="center-panel">
               { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
