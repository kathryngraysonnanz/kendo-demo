import React, {Component} from 'react';
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
  GanttTextFilter,
  GanttDateFilter,
} from "@progress/kendo-react-gantt";
import { getter } from "@progress/kendo-react-common";
import Frame from '../frame'
import { exampleTaskData, exampleDependencyData } from "./data";

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
    field: taskModelFields.id,
    title: "ID",
    width: 70,
  },
  {
    field: taskModelFields.title,
    title: "Title",
    width: 200,
    expandable: true,
    filter: GanttTextFilter,
  },
  {
    field: taskModelFields.start,
    title: "Start",
    width: 120,
    format: "{0:MM/dd/yyyy}",
    filter: GanttDateFilter,
  },
  {
    field: taskModelFields.end,
    title: "End",
    width: 120,
    format: "{0:MM/dd/yyyy}",
    filter: GanttDateFilter,
  },
];


export default function Schedule() {
  const [taskData] = React.useState(exampleTaskData);
  const [dependencyData] = React.useState(exampleDependencyData);
  const [expandedState, setExpandedState] = React.useState([7, 11, 12, 13]);
  const [columnsState, setColumnsState] = React.useState(columns);
  const onColumnResize = React.useCallback(
    (event) => event.end && setColumnsState(event.columns),
    [setColumnsState]
  );
  const onColumnReorder = React.useCallback(
    (event) => setColumnsState(event.columns),
    [setColumnsState]
  );
  const [dataState, setDataState] = React.useState({
    sort: [
      {
        field: "orderId",
        dir: "asc",
      },
    ],
    filter: [],
  });
  const onDataStateChange = React.useCallback(
    (event) =>
      setDataState({
        sort: event.dataState.sort,
        filter: event.dataState.filter,
      }),
    [setDataState]
  );
  const onExpandChange = React.useCallback(
    (event) => {
      const id = getTaskId(event.dataItem);
      const newExpandedState = event.value
        ? expandedState.filter((currentId) => currentId !== id)
        : [...expandedState, id];
      setExpandedState(newExpandedState);
    },
    [expandedState, setExpandedState]
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
        [taskModelFields.isExpanded]: expandedState.includes(getTaskId(task)),
      })
    );
  }, [taskData, dataState, expandedState]);

    return (
      <Frame>
          <div class="schedule-wrapper">
            <h1>Shift Schedule</h1>
            <Gantt
              style={ganttStyle}
              taskData={processedData}
              taskModelFields={taskModelFields}
              dependencyData={dependencyData}
              dependencyModelFields={dependencyModelFields}
              columns={columnsState}
              resizable={true}
              reorderable={true}
              sortable={true}
              sort={dataState.sort}
              filter={dataState.filter}
              onColumnResize={onColumnResize}
              onColumnReorder={onColumnReorder}
              onExpandChange={onExpandChange}
              onDataStateChange={onDataStateChange}
            >
              <GanttWeekView />
              <GanttDayView />
              <GanttMonthView />
              <GanttYearView />
            </Gantt>
          </div>
      </Frame>
    );
  }
