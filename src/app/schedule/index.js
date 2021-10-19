import React from 'react';
import './schedule.scss';
import {
  Gantt,
  GanttWeekView,
  GanttMonthView,
  GanttDayView,
  GanttYearView,
  filterBy,
  orderBy,
  mapTree,
  extendDataItem,
  getSelectedState,
  getSelectedStateFromKeyDown,
} from "@progress/kendo-react-gantt";
import { getter } from "@progress/kendo-react-common";
import Frame from '../frame'
import { exampleTaskData, exampleDependencyData } from "./data";
import { DatePicker } from "@progress/kendo-react-dateinputs";

const ganttStyle = {
  height: "600px",
  width: "100%",
};

const taskModelFields = {
  id: "id",
  start: "start",
  end: "end",
  title: "title",
  percentComplete: "percentComplete",
  isRollup: "isRollup",
  isExpanded: "isExpanded",
  isInEdit: "isInEdit",
  children: "children",
  isSelected: "isSelected",
};
const dependencyModelFields = {
  id: "id",
  fromId: "fromId",
  toId: "toId",
  type: "type",
};
const getTaskId = getter(taskModelFields.id);
const columns = [
  {
    field: taskModelFields.title,
    title: "Title",
    width: 200,
    expandable: true,
  },
  {
    field: taskModelFields.start,
    title: "Start",
    width: 85,
    format: "{0:MM/dd/yyyy}",
  },
  {
    field: taskModelFields.end,
    title: "End",
    width: 85,
    format: "{0:MM/dd/yyyy}",
  },
  {
    field: taskModelFields.id,
    title: "ID",
    width: 85
  },
];

export default function Schedule() {
  const [taskData] = React.useState(exampleTaskData);
  const [dependencyData] = React.useState(
    exampleDependencyData
  );
  const [expandedState, setExpandedState] = React.useState({
    1: true,
    2: true,
    7: true,
    11: true,
    12: true,
    13: true,
  });
  const [selectedState, setSelectedState] = React.useState({});
  const [dataState, setDataState] = React.useState({
    sort: [],
    filter: [],
  });
  const onDataStateChange = React.useCallback(
    (event) => setDataState(event.dataState),
    [setDataState]
  );
  const onExpandChange = React.useCallback(
    (event) => {
      setExpandedState({
        ...expandedState,
        [getTaskId(event.dataItem)]: !event.value,
      });
    },
    [expandedState, setExpandedState]
  );
  const onTaskClick = React.useCallback(
    (event) => {
      const taskId = getTaskId(event.dataItem);
      setSelectedState({
        [taskId]: !selectedState[taskId],
      });
    },
    [setSelectedState, selectedState]
  );
  const onSelectionChange = React.useCallback(
    (event) => {
      const newSelectedState = getSelectedState({
        event,
        selectedState,
        dataItemKey: taskModelFields.id,
      });
      setSelectedState(newSelectedState);
    },
    [selectedState]
  );
  const onKeyDown = React.useCallback(
    (event) => {
      const newSelectedState = getSelectedStateFromKeyDown({
        event,
        selectedState: selectedState,
        dataItemKey: taskModelFields.id,
      });
      setSelectedState(newSelectedState);
    },
    [selectedState]
  );

  const processedData = React.useMemo(() => {
    const filteredData = filterBy(
      taskData,
      dataState.filter,
      taskModelFields.children
    );
    const sortedData = orderBy(
      filteredData,
      dataState.sort,
      taskModelFields.children
    );
    return mapTree(sortedData, taskModelFields.children, (task) =>
      extendDataItem(task, taskModelFields.children, {
        [taskModelFields.isExpanded]: expandedState[getTaskId(task)],
        [taskModelFields.isSelected]: selectedState[getTaskId(task)],
      })
    );
  }, [taskData, dataState, expandedState, selectedState]);

  const max = new Date(2021, 11, 31);
  const today = new Date();
  const [setSuccess] = React.useState(false);

  const [formState, setFormState] = React.useState({
    shoreLeave: today
  });

  const handleChange = (event) => {
    let name = event.target.name || event.target.element.current.name;
    setFormState({ ...formState, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
                   min={today}
                   max={max}
                   name="shoreLeave"
                   defaultValue={today}
                   value={formState.shoreLeave}
                   onChange={handleChange}
                   disabled={false}
                   format={"MMMM yyyy"}
                   weekNumber={true}
                   validationMessage={
                     formState.shoreLeave === null
                       ? "Date is required!"
                       : "Date cannot be in the past!"
                   }
                 />
              </label>
            </fieldset>
            <input
                type="submit"
                className="k-button k-primary"
                value="Search"
              />
          </form>

          {/*
            <h1>Shift Schedule</h1>
            <Gantt
            style={ganttStyle}
            taskData={processedData}
            taskModelFields={taskModelFields}
            dependencyData={dependencyData}
            dependencyModelFields={dependencyModelFields}
            columns={columns}
            resizable={true}
            reorderable={true}
            sortable={true}
            sort={dataState.sort}
            filter={dataState.filter}
            navigatable={true}
            onExpandChange={onExpandChange}
            onDataStateChange={onDataStateChange}
            toolbar={{
              addTaskButton: true,
            }}
            selectable={{
              enabled: true,
              drag: true,
              cell: true,
              mode: "multiple",
            }}
            onTaskClick={onTaskClick}
            onSelectionChange={onSelectionChange}
            onKeyDown={onKeyDown}
            >
              <GanttWeekView />
              <GanttDayView />
              <GanttMonthView />
              <GanttYearView />
            </Gantt>*/}
          </div>


      </Frame>
    );
  }
