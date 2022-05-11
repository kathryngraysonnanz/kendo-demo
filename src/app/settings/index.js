import React from 'react';
import Frame from '../frame'
import { FlatColorPicker } from "@progress/kendo-react-inputs";
import {
  ExpansionPanel,
  ExpansionPanelContent,
} from "@progress/kendo-react-layout";
import { Reveal } from "@progress/kendo-react-animation";
import { Barcode, QRCode } from "@progress/kendo-react-barcodes";
import { Card } from "@progress/kendo-react-layout";
import './settings.scss';

export default function Settings() {

  const [expanded, setExpanded] = React.useState("Color");

  const overlay = {
    type: "image",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Delta-shield.svg/100px-Delta-shield.svg.png",
    width: 30,
    height: 50,
  };

    return (
      <Frame>
        <div class="settings-wrapper">
          <h1>Welcome</h1>
          <Card style={{
                backgroundColor: "white",
                padding: "10px",
                width: "100%",
                maxWidth: "500px"
              }}>
              <div class="flex">
                <div>
                  <h1>Name: Kathryn Janeway</h1>
                  <h2>Rank: Captain</h2>
                  <h3>Clearance level: Alpha</h3>
                </div>
                 <QRCode
                  style={{width: "100px"}}
                  value="https://memory-alpha.fandom.com/wiki/Kathryn_Janeway"
                  errorCorrection="M"
                  overlay={overlay}
                  color="#cc88ff"
                />
            </div>
          {/* <Barcode type="EAN8" value="2346722" renderAs="svg" /> */}
          <Barcode type="POSTNET" value="11234" height={100} renderAs="canvas"/>
          </Card>
          <br/><br/>
          <ExpansionPanel
            title="Update User Color"
            subtitle="Click to toggle"
            expanded={expanded === "color"}
            tabIndex={0}
            key={"color"}
            onAction={(event) => {
              setExpanded(event.expanded ? "" : "color");
            }}
          >
            <Reveal>
              {expanded === "color" && (
                <ExpansionPanelContent>
                  <div class="colorpicker">
                    <p>This color will be used to identify you to others in the LKARS system</p>
                    <FlatColorPicker />
                  </div>
                </ExpansionPanelContent>
              )}
            </Reveal>
          </ExpansionPanel>

        </div>
      </Frame>
    );

}
