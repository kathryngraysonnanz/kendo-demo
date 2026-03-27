import * as React from 'react';
import { Sankey } from "@progress/kendo-react-charts";
import { data } from './sankeydata';

export default function KendoSankey() {

const links = {
  colorType: "source"
};

return (
    <Sankey style={{
    maxWidth: 900,
    height: 450,
    margin: 'auto'
    }} data={data} links={links} />)
}