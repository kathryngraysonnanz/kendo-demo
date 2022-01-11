import React from 'react';
import Frame from '../frame'
import './settings.scss';

export default function Settings() {

    return (
      <Frame>
        <div class="settings-wrapper">
          <h1>Welcome, Captain Kathryn Janeway</h1>
          <h2>Update User Color [use ExpansionPanel]</h2>
          <p>This color will be used to identify you to others in the LKARS system</p>
          <p>[FlatColorPicker goes here]</p>

          <h2>Your Identification Code</h2>
          <p>Your identification codes are a form of 2FA. You may be asked to produce them in addition to your verbal password in order to access highly confidental information.</p>
          <p>Insert ReactBarcode and React QR Code here</p>
        </div>
      </Frame>
    );

}
