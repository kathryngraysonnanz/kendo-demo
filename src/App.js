import React, {Component} from 'react';
import './App.css';
import '@progress/kendo-theme-default/dist/all.css';
import { Button } from '@progress/kendo-react-buttons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={'page-wrapper'}>
          <div className={'display-wrapper'}>
            <div class="left-container">
              <div class="left-menu">
                <Button look="flat">Crew Manifest</Button>
              </div>
            </div>
            <div class="top-container"></div>
            <div class="bottom-container"></div>
            <div class="center-panel">
               <div class="center-content">
                  <div class="welcome">
                    <img src="http://trekipedia.com/mw/images/a/ae/ufp_logo-fasa2012_color.jpg" class="logo"/>
                    <h1>LCARS terminal active</h1>
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
