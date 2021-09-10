import React, {Component} from 'react';
import './App.scss';
import '@progress/kendo-theme-default/dist/all.css';
import { Button } from '@progress/kendo-react-buttons'
import { NavMenu } from './sidebar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={'page-wrapper'}>
          <div className={'display-wrapper'}>
            <div class="left-container">

                <NavMenu/>
              
            </div>
            <div class="top-container"></div>
            <div class="center-panel">
               <div class="center-content">
                  <div class="welcome">
                    <img src="http://trekipedia.com/mw/images/a/ae/ufp_logo-fasa2012_color.jpg" class="logo"/>
                    <h1>LKARS terminal active</h1>
                    <p>Library KendoReact Access/Retrieval System</p>
                    <h2>Systems online</h2>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
