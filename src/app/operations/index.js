import React from 'react';
import Frame from '../frame'
import { Popover, PopoverActionsBar } from "@progress/kendo-react-tooltip";
import './settings.scss';
import { Button } from "@progress/kendo-react-buttons";
import { ArcGauge } from '@progress/kendo-react-gauges';

export default function Operations() {

    const [show, setShow] = React.useState(false);
    const anchor = React.useRef(null);

    const onClick = () => {
      setShow(!show);
    };

    return (
      <Frame>
        <div className="ops-wrapper">
          <h1>Current Heading: 351-mark-10</h1>


            <iframe className="viewscreen" width="98%" height="350" scrolling="no"  src="https://virtualsky.lco.global/embed/index.html?longitude=-119.86286000000001&latitude=34.4326&projection=equirectangular&cardinalpoints=false&showplanetlabels=false&showdate=false&showposition=false"></iframe>
            <Button
              onClick={() => setShow(!show)}
              ref={anchor}
            > Status
            </Button>

         <Popover
           show={show}
           position={"top"}
           anchor={anchor.current && anchor.current.element}
           title={"Status Report"}
         >
          <p>Heading: 351-mark-10</p>
          <p>Speed: Warp 6.8</p>
          <p>Shields: 98%</p>
          <p>Closest Class M Planet: Vulcan</p>
           <PopoverActionsBar>
             <Button onClick={onClick}>Close</Button>
           </PopoverActionsBar>
         </Popover>
        </div>

      </Frame>
    );

}