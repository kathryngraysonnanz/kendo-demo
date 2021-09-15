import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PivotGrid, PivotGridContainer, PivotGridConfigurator, usePivotOLAPService, PivotGridConfiguratorButton } from '@progress/kendo-react-pivotgrid';
import { Loader } from '@progress/kendo-react-indicators';

const defaultColumnAxes = [{
  name: ['[Date].[Calendar]'],
  expand: true
}, {
  name: ['[Product].[Category]']
}];
const defaultRowAxes = [{
  name: ['[Geography].[City]']
}];
const defaultMeasureAxes = [{
  name: ['[Measures].[Reseller Freight Cost]']
}];
const catalog = 'Adventure Works DW 2008R2';
const cube = 'Adventure Works';
const url = 'https://demos.telerik.com/olap/msmdpump.dll';

export default function Pivot() {

  const [show, setShow] = React.useState(false);
  const {
    pivotProps,
    configuratorProps,
    state
  } = usePivotOLAPService({
    catalog,
    cube,
    url,
    defaultRowAxes,
    defaultColumnAxes,
    defaultMeasureAxes
  });
  const handleButtonClick = React.useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <PivotGridContainer className="grid-wrapper">
      <PivotGrid {...pivotProps} style={{
        height: '100%', overflow: "scroll"
       }} />

      {show && <PivotGridConfigurator {...configuratorProps} />}

      <PivotGridConfiguratorButton onClick={handleButtonClick} />

      {state.loading && <Loader style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
      }} size="large" type={'converging-spinner'} />}
    </PivotGridContainer>
  )
}
