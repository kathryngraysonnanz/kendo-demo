import * as React from 'react';
import Frame from '../frame'
import { GridLayout, GridLayoutItem, ActionSheet } from "@progress/kendo-react-layout";
import { Button } from '@progress/kendo-react-buttons';
import Gauge from './gauge'
import Heatmap from './heatmap'
import Pivot from './pivot'
import DragDrop from './drag-drop'
import {Helmet} from "react-helmet";
import './engineering.scss'

function Engineering() {
  const items = [{
  title: 'Level 1'
}, {
  title: 'Level 2'
}, {
  title: 'Level 3'
},{
  title: 'Level 4'
},{
  title: 'Level 5'
}];
  const title = 'Select item';
  const [open, setOpen] = React.useState(false);
  const openHandler = () => {
    setOpen(true);
  };
  const handleOverlayClick = () => {
    setOpen(false);
  };
  const handleItemClick = () => {
    setOpen(false);
  };

    return (
      <Frame>
        <div className='engineering-wrapper'>
        <Helmet><title>Engineering – LKARS</title></Helmet>
        <h1>Engineering Console</h1>
          <GridLayout
             gap={{ rows: 20, cols: 20 }}
             rows={[
               { height: 70 },
               { height: 150 },
               { height: 150 },
               { height: 100 },
               {height: 200}
             ]}
             cols={[
               { width: '32%' },
               { width: '32%' },
               { width: '32%' },
             ]}
          >
            <GridLayoutItem row={1} col={1} colSpan={1} rowSpan={1}>
            <Button onClick={openHandler} style={{margin: '10px'}}>
              Run Diagnostics
            </Button>
            {open && <ActionSheet title={title} items={items} onOverlayClick={handleOverlayClick} onItemClick={handleItemClick} />}
            </GridLayoutItem>

            <GridLayoutItem row={2} col={1} colSpan={2} rowSpan={1}>
              <h2>Polarity Reversals by Stardate</h2>
              <Heatmap/>
            </GridLayoutItem>

            <GridLayoutItem row={2} col={3} colSpan={1} rowSpan={1} style={{ display: "flex", justifyContent: "center"}}>
              <h2>Tachyon Particle Density</h2>
              <Gauge/>
            </GridLayoutItem>

            <GridLayoutItem row={3} col={1} colSpan={3} rowSpan={2} >
              <h2>Subinterlink Power Prioritization</h2>
              <DragDrop/>
            </GridLayoutItem>

            <GridLayoutItem row={5} col={1} colSpan={3} rowSpan={3} >
              <div className="pivot-wrapper">
                <h2>Maintenance Cost By Ship</h2>
                 <Pivot/>
              </div>
            </GridLayoutItem>

        </GridLayout>
       </div>
      </Frame>
    )
  }

export default Engineering
