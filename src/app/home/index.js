import React, {Component} from 'react';
import './home.scss';
import { NavMenu } from '../sidebar'
import Frame from '../frame'
import { Typography } from "@progress/kendo-react-common";

export default class extends Component {
  render() {
    return (
      <Frame>
          <div class="welcome">
            <div>
              <img src="http://trekipedia.com/mw/images/a/ae/ufp_logo-fasa2012_color.jpg" class="logo"/>
              <Typography.h1>LKARS terminal active</Typography.h1>
              <Typography.p>Library KendoReact Access/Retrieval System</Typography.p>
              <Typography.h2>Systems online</Typography.h2>
            </div>
          </div>
      </Frame>
    );
  }
}
