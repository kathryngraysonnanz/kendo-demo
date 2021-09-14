import React, {Component} from 'react';
import './manifest.scss';
import '@progress/kendo-theme-default/dist/all.css';
import { Button } from '@progress/kendo-react-buttons'
import Frame from '../frame'

export default class extends Component {
  render() {
    return (
       <Frame>
          <h1>Crew Manifest</h1>
       </Frame>
    )
  }
}
