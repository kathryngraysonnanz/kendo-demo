import React from 'react';
import './astrometrics.scss';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { groupBy } from "@progress/kendo-data-query";
import Frame from '../frame'
import astroData from "./astro-data.json";

export default function AstronomicalLog() {

  const initialGroup = {};

  const [group, setGroup] = React.useState(initialGroup);

  return (
     <Frame>
        <div class="manifest-wrapper">
          <h1>Astrometrics Console</h1>
          <h2>Recently Encountered Astrological Objects</h2>
          <Grid
            style={{ height: "90%" }}
            data={groupBy(astroData, group)}
            groupable={true}
            group={group}
            onGroupChange={(e) => setGroup(e.group)}
          >
            <Column field="name" title="Name" groupable={false} />
            <Column field="astronomicalObjectType" title="Object Type" />
            <Column field="location.name" title="Location"/>
          </Grid>
        </div>
     </Frame>
  )
}
