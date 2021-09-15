import React, {Component} from 'react';
import './manifest.scss';
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import Frame from '../frame'

export default class extends Component {
  render() {
    return (
       <Frame>
          <div class="manifest-wrapper">
            <h1>Crew Manifest</h1>
            <Grid
              style={{
                height: "400px",
              }}
              data={products}
            >
              <Column field="ProductID" title="ID" width="40px" />
              <Column field="ProductName" title="Name" width="250px" />
              <Column field="Category.CategoryName" title="CategoryName" />
              <Column field="UnitPrice" title="Price" />
              <Column field="UnitsInStock" title="In stock" />
              <Column
                field="Discontinued"
                cell={(props) => (
                  <td>
                    <input
                      disabled={true}
                      type="checkbox"
                      checked={props.dataItem[props.field || ""]}
                    />
                  </td>
                )}
              />
            </Grid>
          </div>
       </Frame>
    )
  }
}
