import React from 'react';
import './schedule.scss';
import Frame from '../frame'
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

    return (
      <Frame>
        <div className="schedule-wrapper">
        <Helmet><title>Schedule – LKARS</title></Helmet>
        <h1>Your Tasks</h1>
        <TaskBoard columnData={columnsData} taskData={resultTasks} priorities={priorities} onChange={onChangeHandler} column={Column} card={Card} style={{ height: '700px'}} tabIndex={0}>
          <TaskBoardToolbar>
            <Button icon="add" onClick={onAddColumn}>Add Column</Button>
            <span className="k-spacer" />
            <Input placeholder="Search..." onChange={onSearchChange} value={filter} />
          </TaskBoardToolbar>
        </TaskBoard>;
        </div>
      </Frame>
    );
  }
