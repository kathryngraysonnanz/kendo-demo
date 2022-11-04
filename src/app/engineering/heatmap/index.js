import * as React from 'react';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartXAxis,
  ChartXAxisItem,
  ChartYAxis,
  ChartYAxisItem,
} from "@progress/kendo-react-charts";
import { data } from "./heatmap-data";

const dayLabels = {
  0: "99355.24",
  1: "97235.0",
  2: "98828.1",
  3: "94965.91",
  4: "91126.52",
  5: "93457.3",
  6: "97628.99",
};

export default function Heatmap() {
  return (
    <Chart style={{ width: "100%", height: "80%"}}>
      <ChartSeries>
       <ChartSeriesItem type="heatmap" data={data} color="#7788ff" labels={{ visible: false }}
       markers={{ type: "circle", border: { width: 2} }}/>
       </ChartSeries>
       <ChartYAxis>
        <ChartYAxisItem labels={{ content: (e) => dayLabels[e.value] }}/>
      </ChartYAxis>
      <ChartXAxis>
        <ChartXAxisItem visible={false} />
      </ChartXAxis>
    </Chart>
  ); }
