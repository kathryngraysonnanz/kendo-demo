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
             gap={{ rows: 20, cols: 20 }}
             rows={[
               { height: 150 },
               { height: 150 },
               { height: 150 }
             ]}
             cols={[
               { width: '32%' },
               { width: '32%' },
               { width: '32%' },
             ]}
          >
            <GridLayoutItem row={1} col={1} colSpan={2} rowSpan={1}>
              <h2>Polarity Reversals by Stardate</h2>
              <Heatmap/>
            </GridLayoutItem>

            <GridLayoutItem row={1} col={3} colSpan={1} rowSpan={1} style={{ display: "flex", justifyContent: "center"}}>
              <h2>Tachyon Particle Density</h2>
              <Gauge/>
            </GridLayoutItem>

            <GridLayoutItem row={2} col={1} colSpan={3} rowSpan={3} >
              <h2>Section header goes here</h2>
               <Pivot/>
            </GridLayoutItem>

        </GridLayout>
       </div>
      </Frame>
    )
  }

export default Engineering
