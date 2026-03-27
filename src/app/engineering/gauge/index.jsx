import * as React from 'react';
import { ArcGauge } from '@progress/kendo-react-gauges';

const colors = [{
  to: 25,
  color: '#33cc99'
}, {
  from: 25,
  to: 50,
  color: '#ffcc66'
}, {
  from: 50,
  to: 75,
  color: '#FFCC66'
}, {
  from: 75,
  color: '#dd4444'
}];

const ArcGaugeComponent = () => {
  const [value, setValue] = React.useState(8);
  React.useEffect(() => {
    setInterval(() => {
      setValue(Math.ceil(Math.random() * 100));
    }, 1000);
  }, []);
  const arcOptions = {
    value: value,
    colors
  };

  const arcCenterRenderer = (value, color) => {
    return <h3 style={{
      color: color
    }}>{value}%</h3>;
  };

  return <ArcGauge {...arcOptions} arcCenterRender={arcCenterRenderer} />;
};

export default ArcGaugeComponent
