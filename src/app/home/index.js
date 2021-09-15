import React, {Component} from 'react';
import './home.scss';
import '@progress/kendo-theme-default/dist/all.css';
import { Button } from '@progress/kendo-react-buttons'
import { NavMenu } from '../sidebar'
import Frame from '../frame'

export default class extends Component {
  render() {
    return (
      <Frame>
          <div class="welcome">
          <div>
              <img src="http://trekipedia.com/mw/images/a/ae/ufp_logo-fasa2012_color.jpg" class="logo"/>
              <h1>LKARS terminal active</h1>
              <p>Library KendoReact Access/Retrieval System</p>
              <h2>Systems online</h2>
            </div>
          </div>
      </Frame>
    );
  }
}
