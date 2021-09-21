import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  TreeList,
  orderBy,
  filterBy,
  mapTree,
  extendDataItem,
  TreeListTextFilter,
  TreeListNumericFilter,
  TreeListDateFilter,
  TreeListBooleanFilter,
  getSelectedState,
  getSelectedStateFromKeyDown } from '@progress/kendo-react-treelist';
import { Checkbox, RadioGroup } from '@progress/kendo-react-inputs';
import { getter } from '@progress/kendo-react-common';
import employees from './data';
import Frame from '../frame'
const DATA_ITEM_KEY = 'id';
const SUB_ITEMS_FIELD = 'employees';
const EXPAND_FIELD = 'expanded';
const SELECTED_FIELD = 'selected';
const idGetter = getter(DATA_ITEM_KEY);

const extendData = (dataState, selectedState, expandedState) => {
  return mapTree(dataState, SUB_ITEMS_FIELD, item => extendDataItem(item, SUB_ITEMS_FIELD, {
    selected: selectedState[idGetter(item)],
    expanded: expandedState[idGetter(item)]
  }));
};

export default function Manifest() {
  const [dataState, setDataState] = React.useState(employees.slice());
  const [selectedState, setSelectedState] = React.useState({});
  const [expandedState, setExpandedState] = React.useState({
    1: true,
    2: true,
    32: true
  });

  const onExpandChange = React.useCallback(e => {
    setExpandedState({ ...expandedState,
      [idGetter(e.dataItem)]: !e.value
    });
  }, [expandedState]);
  const onSelectionChange = React.useCallback(event => {
    const newSelectedState = getSelectedState({
      event,
      selectedState: selectedState,
      dataItemKey: DATA_ITEM_KEY
    });
    setSelectedState(newSelectedState);
  }, [selectedState]);

  const onKeyDown = event => {
    const newSelectedState = getSelectedStateFromKeyDown({
      event,
      selectedState: selectedState,
      dataItemKey: DATA_ITEM_KEY
    });
    setSelectedState(newSelectedState);
  };

  return (

    <Frame>
    <div class="manifest-wrapper">
      <h2>Crew manifest</h2>
       <TreeList
       style={{
        maxHeight: '100%',
        overflow: 'scroll'
      }}
      data={extendData(dataState, selectedState, expandedState)} selectedField={SELECTED_FIELD} expandField={EXPAND_FIELD} subItemsField={SUB_ITEMS_FIELD} dataItemKey={DATA_ITEM_KEY} selectable={{
        enabled: true,
        drag: true,
        cell: true,
        mode: "multiple"
      }}
      navigatable={true}
      onSelectionChange={onSelectionChange}
      onExpandChange={onExpandChange}
      onKeyDown={onKeyDown}
      columns={[{
        field: 'name',
        title: 'Name',
        expandable: true,
        width: '25%'
      }, {
        field: 'position',
        title: 'Title',
        width: '25%'
      }, {
        field: 'hireDate',
        title: 'Starfleet Enlistment',
        format: '{0:d}',
        width: '25%'
      },
      {
        field: 'species',
        title: 'Species',
        width: '25%'
      }]} />
      </div>
    </Frame>
  )
}
