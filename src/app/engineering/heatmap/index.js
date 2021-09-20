import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartXAxis,
  ChartXAxisItem,
  ChartYAxis,
  ChartYAxisItem,
} from "@progress/kendo-react-charts";
import { data } from "./heatmap-data";

const dayLabels = {
  1: "99355.24",
  3: "98828.1",
  5: "91126.52",
};

const yAxisLabelContent = (e) => dayLabels[e.value] || "";

export default function Heatmap() {
  return (
    <Chart
      style={{
        width: "100%",
        height: "80%",
      }}
    >


    <ChartSeries>
      <ChartSeriesItem
        type="heatmap"
        data={data}
        color="#216e39"
        labels={{
          visible: false,
        }}
        markers={{
          type: "roundedRect",
          border: {
            width: 2,
          },
        }}
      />
    </ChartSeries>

    <ChartXAxis>
      <ChartXAxisItem visible={false} />
    </ChartXAxis>

    <ChartYAxis>
      <ChartYAxisItem
        reverse={true}
        line={{
          visible: false,
        }}
        labels={{
          content: yAxisLabelContent,
        }}
      />
    </ChartYAxis>
  </Chart>
  )
}