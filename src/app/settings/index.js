import React from 'react';
import Frame from '../frame'
import LoginRefs from '../login_refs'
// import LoginAutofocus from '../login_autofocus'
import { FlatColorPicker } from "@progress/kendo-react-inputs";
import {
  ExpansionPanel,
  ExpansionPanelContent,
} from "@progress/kendo-react-layout";
import { Reveal } from "@progress/kendo-react-animation";
import { Card } from "@progress/kendo-react-layout";
import {Helmet} from "react-helmet";
import './settings.scss';

export default function Settings() {

  const [expanded, setExpanded] = React.useState("Color");

    return (
      <Frame>
        <div className="settings-wrapper">
        <Helmet><title>Settings – LKARS</title></Helmet>
          <h1>Welcome</h1>
          <Card style={{
                backgroundColor: "#666688",
                padding: "10px",
                width: "100%",
                maxWidth: "500px"
              }}>
              <div className="flex">
                <div>
                  <h1>Name: Kathryn Janeway</h1>
                  <h2>Rank: Captain</h2>
                  <h3>Clearance level: Alpha</h3>
                </div>
            </div>
            <LoginRefs/>
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
                  <div className="colorpicker">
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
