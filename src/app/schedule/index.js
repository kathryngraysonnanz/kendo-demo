import React from 'react';
import './schedule.scss';
import Frame from '../frame'
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { TaskBoard, TaskBoardToolbar } from '@progress/kendo-react-taskboard';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import { filterBy } from '@progress/kendo-data-query';
import { Column } from './column';
import { Card } from './card';
import { cards } from './cards';
import {Helmet} from "react-helmet";

export default function Schedule() {

  const tasks = cards.map(c => ({
   id: c.id,
   title: c.title,
   description: c.description,
   status: c.status,
   priority: c.priority
 }));

const columns = [{
  id: 1,
  title: 'To-Do',
  status: 'todo'
}, {
  id: 2,
  title: 'In Progress',
  status: 'inProgress'
}, {
  id: 3,
  title: 'Done',
  status: 'done'
}];
const priorities = [{
  priority: 'Low Priority',
  color: '#cc88ff'
}, {
  priority: 'High Priority',
  color: '#ffaa90'
}, {
  priority: 'Urgent',
  color: '#dd4444'
}];

const [filter, setFilter] = React.useState('');
const [taskData, setTaskData] = React.useState(tasks);
const [columnsData, setColumnsData] = React.useState(columns);
const onSearchChange = React.useCallback(event => {
  setFilter(event.value);
}, []);

const resultTasks = React.useMemo(() => {
  const filterDesc = {
    logic: 'and',
    filters: [{
      field: 'title',
      operator: 'contains',
      value: filter
    }]
  };
  return filter ? filterBy(taskData, filterDesc) : taskData;
}, [filter, taskData]);
const onChangeHandler = React.useCallback(event => {
  if (event.type === 'column') {
    setColumnsData(event.data);
  } else {
    // New Task has been added.
    if (event.item && event.item.id === undefined) {
      event.item.id = event.data.length + 1;
    }

    setTaskData(event.data);
  }
}, []);

const onAddColumn = () => {
  const newColumn = {
    id: columnsData.length + 1,
    title: 'New Column',
    status: 'new',
    edit: true
  };
  setColumnsData([...columnsData, newColumn]);
};

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
const max = new Date (2022, 5, 31);
const starting = new Date(2022, 1, 30);

    return (
      <Frame>
        <div class="schedule-wrapper">
        <Helmet><title>Schedule – LKARS</title></Helmet>
        <h1>Your Tasks</h1>
        <TaskBoard columnData={columnsData} taskData={resultTasks} priorities={priorities} onChange={onChangeHandler} column={Column} card={Card} style={{ height: '700px'}} tabIndex={0}>
          <TaskBoardToolbar>
            <Button icon="add" onClick={onAddColumn}>Add Column</Button>
            <span className="k-spacer" />
            <Input placeholder="Search..." onChange={onSearchChange} value={filter} />
          </TaskBoardToolbar>
        </TaskBoard>;

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
