import React from 'react';
import './shoreleave.scss';
import Frame from '../frame'
import { DateRangePicker } from "@progress/kendo-react-dateinputs";
import { Input } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Label } from "@progress/kendo-react-labels";
import {Helmet} from "react-helmet";

export default function ShoreLeave() {

const [formState, setFormState] = React.useState({
  shoreLeave: null
});

const handleChange = (event) => {
  let name = event.target.name || event.target.element.current.name;
  setFormState({ ...formState, [name]: event.target.value });
};

const handleSubmit = () => {
  document.getElementById("shoreleave").reset()
  window.alert("Your shore leave request is being processed.");

};

const min = new Date();
const max = new Date (2024, 12, 31);
const starting = new Date();

const ranks = ["Ensign", "Crewman", "Lieutenant", "Commander", "Captain", "Commodore", "Admiral"];

    return (
      <Frame>
        <div className="shoreleave-wrapper">
        <Helmet><title>Request Shore Leave – LKARS</title></Helmet>

        <h1>Request Shore Leave</h1>
        <p>Fill out the form below and your commanding officer will approve or deny your request within 3 days.</p>
        <form id="shoreleave" onSubmit={handleSubmit}>

          <Label for="fname">First Name</Label>
          <Input placeholder="First Name" id="fname" required={true}/>

          <br/>

          <Label for="lname">Last Name</Label>
          <Input placeholder="Last Name" id="lname" required={true}/>

          <br/>

          <Label for="rank">Rank</Label><br/>
          <DropDownList required={true} data={ranks} id="rank" fillMode="solid" defaultValue="Select"/>

          <br/><br/>
          <label className="k-form-field">

          <Label for="date">Shore Leave Date(s)</Label><br/>
            <DateRangePicker
              min={min}
              max={max}
              name="date"
              format={"dd MMMM yyyy"}
              weekNumber={true}
              onChange={handleChange}
              defaultValue={starting}
              required={true}
              validationMessage={
               formState.shoreLeave === null
                 ? "Date is required!"
                 : "Date must be in range."
              }
            />
          </label>
          <br/>
          <Label for="comments">Additional Comments (Optional)</Label>
          <Input placeholder="Reason for leave" id="comments"/>
          <br/><br/>
        <input
            type="submit"
            className="k-button k-primary"
            value="Submit"
          />
          </form>
        </div>
      </Frame>
    );
  }
