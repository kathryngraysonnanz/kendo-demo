import React, {Component} from 'react';
import './astrometrics.scss';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { orderBy, process } from "@progress/kendo-data-query";
import {
  GridColumnMenuSort,
  GridColumnMenuFilter,
  GridColumnMenuGroup,
} from "@progress/kendo-react-grid";
import Frame from '../frame'
import astroData from "./astro-data.json";

const initialSort = [
  {
    field: "name",
    dir: "asc",
  },
];

const createDataState = (dataState) => {
  return {
    result: process(astroData.slice(0), dataState),
    dataState: dataState,
  };
};


export const ColumnMenu = (props) => {
  return (
    <div>
      <GridColumnMenuSort {...props} />
      <GridColumnMenuFilter {...props} />
      <GridColumnMenuGroup {...props} />
    </div>
  );
};

export default function AstronomicalLog() {

  let initialState = createDataState({

  });

  const [sort, setSort] = React.useState(initialSort);
  const [result, setResult] = React.useState(initialState.result);
  const [dataState, setDataState] = React.useState(initialState.dataState);
  const dataStateChange = (event) => {
    let updatedState = createDataState(event.dataState);
    setResult(updatedState.result);
    setDataState(updatedState.dataState);
  };


  return (
     <Frame>
        <div class="manifest-wrapper">
          <h1>Astrometrics Console</h1>
          <h2>Recently Encountered Astrological Objects</h2>
          <Grid
            style={{
              height: "90%",
              width: "100%"
            }}
            data={result}
            {...dataState}
            onDataStateChange={dataStateChange}
            sortable={true}
            resizable={true}
          >
            <Column field="name" title="Name" columnMenu={ColumnMenu} />
            <Column field="astronomicalObjectType" title="Object Type" columnMenu={ColumnMenu} />
            <Column field="location.name" title="Location" columnMenu={ColumnMenu}/>
          </Grid>
        </div>
     </Frame>
  )
}
