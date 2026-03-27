import React from 'react';
import './astrometrics.scss';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import Frame from '../frame'
import astroData from "./astro-data.json";
import {Helmet} from "react-helmet";

export default function AstronomicalLog() {

  const initialDataState = {};

  const [dataState, setDataState] = React.useState();
  const [resultState, setResultState] = React.useState(
    process(astroData, initialDataState)
  );

  const onDataStateChange = React.useCallback((e) => {
    setDataState(e.dataState);
    setResultState(process(astroData, e.dataState));
  }, []);

  return (
     <Frame>
        <div className="manifest-wrapper">
        <Helmet>
          <title>Astrometrics – LKARS</title>
        </Helmet>
          <h1>Astrometrics Console</h1>
          <h2>Recently Encountered Astrological Objects</h2>
          <Grid
            style={{ height: "90%" }}
            data={{ data: resultState.data }}
            filterable={true}
            sortable={true}
            groupable={true}
            onDataStateChange={onDataStateChange}{...dataState}
          >
            <Column field="name" title="Name"/>
            <Column field="astronomicalObjectType" title="Object Type" />
            <Column field="location.name" title="Location"/>
          </Grid>
        </div>
     </Frame>
  )
}
