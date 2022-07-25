import React from 'react';
import './home.scss';
import Frame from '../frame'
import { Typography } from "@progress/kendo-react-common";
import { ScrollView } from "@progress/kendo-react-scrollview";

export default function Home() {

  const items = [
    {
      title: "United Federation of Planets Logo",
      position: 1,
      url: "http://trekipedia.com/mw/images/a/ae/ufp_logo-fasa2012_color.jpg",
      style: {
        width: 400,
        height: 300,
      }
    },
    {
      title: "Starfleet Command Logo",
      position: 2,
      url: "https://static.wikia.nocookie.net/memory-gamma/images/3/30/Starfleet_Command_logo_2409.png",
      style: {
        width: 290,
        height: 300,
      }
    },
    {
      title: "Starfleet Delta Badge",
      position: 3,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Delta-shield.svg/1200px-Delta-shield.svg.png",
      style: {
        width: 200,
        height: 300,
      }
    }
  ];
    return (
      <Frame>
          <div class="welcome">
            <div>
              <ScrollView
                style={{
                  width: 400,
                  height: 300,
                  backgroundColor: "black"
                }}
                endless={true}
                arrows={false}
                pageable={false}
              >
                {items.map((item, index) => {
                  return (
                    <img
                      src={item.url}
                      alt={`${item.title}`}
                      style={item.style}
                      draggable={false}
                    />
                  );
                })}
              </ScrollView>

              <Typography.h1>LKARS terminal active</Typography.h1>
              <Typography.p>Library KendoReact Access/Retrieval System</Typography.p>
              <Typography.h2>Systems online</Typography.h2>
            </div>
          </div>
      </Frame>
    );

}
