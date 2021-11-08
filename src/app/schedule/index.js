import React from 'react';
import './schedule.scss';
import Frame from '../frame'
import { DatePicker } from "@progress/kendo-react-dateinputs";

export default function Schedule() {

  const [formState, setFormState] = React.useState({
    shoreLeave: null
  });

  const handleChange = (event) => {
    let name = event.target.name || event.target.element.current.name;
    setFormState({ ...formState, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const min = new Date();
  const max = new Date (2021, 11, 31);
  const starting = new Date(2021, 11, 19);

    return (
      <Frame>
        <div class="schedule-wrapper">
        <p>{console.log(formState.shoreLeave)}</p>
        <h1>Schedule Shore Leave</h1>
        <form onSubmit={handleSubmit}>
           <fieldset>
              <label className="k-form-field">
                <p>Please input your requested shore leave date below, and your commanding officer will approve or deny your request within 5 days</p>
                <DatePicker
                  min={min}
                  max={max}
                  name="shoreLeave"
                  format={"dd MMMM yyyy"}
                  weekNumber={true}
                  onChange={handleChange}
                  defaultValue={starting}
                  required={true}
                  disabled={false}
                  validationMessage={
                   formState.shoreLeave === null
                     ? "Date is required!"
                     : "Date must be in range."
                  }
                />
              </label>
            </fieldset>
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
