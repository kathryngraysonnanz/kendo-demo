import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Frame from '../frame'
import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";
import Gauge from './gauge'
import Heatmap from './heatmap'
import Pivot from './pivot'
import './engineering.scss'

function Engineering() {
    return (
      <Frame>
        <div class='engineering-wrapper'>
        <h1>Engineering Console</h1>
          <GridLayout
             gap={{ rows: 15, cols: 15 }}
             rows={[
               { height: 200 },
               { height: 100 },
               { height: 100 },
               { height: 100 },
               { height: 100 },
               { height: 100 },
               { height: 100 }
             ]}
             cols={[
               { width: '32%' },
               { width: '32%' },
               { width: '32%' },
             ]}
          >
            <GridLayoutItem row={1} col={1} colSpan={1} rowSpan={1}>
              <h2>Polarity Reversals by Stardate</h2>
              <Heatmap/>
            </GridLayoutItem>

            <GridLayoutItem row={1} col={2} colSpan={1} rowSpan={1} style={{ display: "flex", justifyContent: "center"}}>
              <h2>Tachyon Particle Density</h2>
              <Gauge/>
            </GridLayoutItem>

            <GridLayoutItem row={2} col={1} colSpan={3} rowSpan={3} >
               <Pivot/>
            </GridLayoutItem>

        </GridLayout>
       </div>
      </Frame>
    )
  }

export default Engineering
