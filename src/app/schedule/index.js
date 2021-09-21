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
  getSelectedState,
  getSelectedStateFromKeyDown,
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
];
const selectionModes = [
  {
    value: "single",
    label: "Single selection mode",
  },
  {
    value: "multiple",
    label: "Multiple selection mode",
  },
];

export default function Schedule() {
  const [taskData, setTaskData] = React.useState(exampleTaskData);
  const [dependencyData, setDependencyData] = React.useState(
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
  const [dragEnabled, setDragEnabled] = React.useState(true);
  const [cellEnabled, setCellEnabled] = React.useState(true);
  const [selectionMode, setSelectionMode] = React.useState(
    selectionModes[1].value
  );
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

  const onDragChange = (event) => {
    setDragEnabled(event.value);
  };

  const onCellChange = (event) => {
    setCellEnabled(event.value);
  };

  const onSelectionModeChange = (event) => {
    setSelectionMode(event.value);
  };

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
        drag: dragEnabled,
        cell: cellEnabled,
        mode: selectionMode,
      }}
      onTaskClick={onTaskClick}
      onSelectionChange={onSelectionChange}
      onKeyDown={onKeyDown}
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
