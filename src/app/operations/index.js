import React from 'react';
import Frame from '../frame'
import { Popover, PopoverActionsBar } from "@progress/kendo-react-tooltip";
import './settings.scss';
import { Button } from "@progress/kendo-react-buttons";
import { Map, MapLayers, MapTileLayer, MapMarkerLayer } from '@progress/kendo-react-map';
import {Helmet} from "react-helmet";

export default function Operations() {

    const [show, setShow] = React.useState(false);
    const anchor = React.useRef(null);

    const onClick = () => {
      setShow(!show);
    };

    const center = [42.3605, -71.0583];
const tileSubdomains = ['a', 'b', 'c'];

const tileUrl = e => `https://${e.subdomain}.tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;

const attribution = '&copy; <a href="https://osm.org/copyright">OpenStreetMap contributors</a>';

const markers = [{
  latlng: [42.3605, -71.0583],
  name: 'Progress HQ'
}];

    return (
      <Frame>
        <div className="ops-wrapper">
        <Helmet><title>Ops – LKARS</title></Helmet>


          <h1>Current Heading: 351-mark-10</h1>


            <iframe title="ops-screen" className="viewscreen" width="98%" height="350" scrolling="no"  src="https://virtualsky.lco.global/embed/index.html?longitude=-119.86286000000001&latitude=34.4326&projection=equirectangular&cardinalpoints=false&showplanetlabels=false&showdate=false&showposition=false"></iframe>
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
         <br/><br/>
          <h1>Closest Starfleet Base</h1>
         <Map center={center} zoom={15}>
           <MapLayers>
             <MapTileLayer urlTemplate={tileUrl} subdomains={tileSubdomains} attribution={attribution} />

             <MapMarkerLayer data={markers} locationField="latlng" titleField="name" />
           </MapLayers>
         </Map>
        </div>



      </Frame>
    );

}
