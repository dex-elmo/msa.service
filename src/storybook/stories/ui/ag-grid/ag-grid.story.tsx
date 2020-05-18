import React, { Component } from 'react';
import { AgGrid } from '~/lib';

import docs from './docs';

const header = {
  make: 'Make',
  model: 'Model',
  price: 'Price',
};

const data = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
];

export const basic = (props: any) => {
  class Story extends Component {
    constructor(props:any) {
      super(props);
      this.state = {
        columnDefs: [],
        rowData: [],
        row: {},
      };
      this.onRowClicked = this.onRowClicked.bind(this);
    }

    // view
    componentDidMount() {
      const columnDefs = [];
      for (let [key, value] of Object.entries(header)) {
        columnDefs.push({headerName: value, field: key});
      };

      this.setState({
        columnDefs: columnDefs,
        rowData: data,
      });
    }

    //Click Row
    onRowClicked(row:any) {
      this.setState({
        row: row,
      });
    }



    render() {
      return (
        <div
          className="ag-theme-alpine"
          style={{
            height: '250px',
            width: '600px',
          }}
        >
          <AgGrid
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            clickHandler={this.onRowClicked}
          /><br />
          <h3 style={ { display: "inline" } }>
            on clicked:
            {this.state.row.make}&nbsp;/&nbsp;
            {this.state.row.model}&nbsp;/&nbsp;
            {this.state.row.price}
          </h3>
        </div>
      )
    }
  }

  return <Story { ...props } />;
};

basic.story = {
  name: 'Ag-Grid',
};

export default {
  title: 'component|Ag-Grid',
  component: docs.component,
  parameters: { ...docs.parameters },
};
