import React from 'react';
import './home.scss';
import Frame from '../frame'
import { Typography } from "@progress/kendo-react-common";

export default function Home() {

    return (
      <Frame>
          <div class="welcome">
            <div>
              <p>[Insert React ScrollView (Carousel) here with historical delta logos]</p>
              <img src="http://trekipedia.com/mw/images/a/ae/ufp_logo-fasa2012_color.jpg" alt="Starfleet Logo" class="logo"/>
              <Typography.h1>LKARS terminal active</Typography.h1>
              <Typography.p>Library KendoReact Access/Retrieval System</Typography.p>
              <Typography.h2>Systems online</Typography.h2>
            </div>
          </div>
      </Frame>
    );

}
