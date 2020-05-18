import React, { Component } from 'react';
import { AgGrid } from '~/lib';
import docs from './docs';

interface Props {
  columnDefs: { headerName: string; field: string; }[],
  rowData: { make: string; model: string; price: number; }[],
  row: {
    make: '',
    model: '',
    price: 0,
  },
}

interface States {
  columnDefs: { headerName: string; field: string; }[],
  rowData: { make: string; model: string; price: number; }[],
  row: {
    make: '',
    model: '',
    price: 0,
  },
}

export const basic = (props: any) => {
  class Story extends Component<Props, States> {
    constructor() {
      super(props);
      this.onRowClicked = this.onRowClicked.bind(this);
    }

    // view
    componentDidMount() {
      const columnDefs = [
        { headerName: 'Make', field: 'make' },
        { headerName: 'Model', field: 'model' },
        { headerName: 'Price', field: 'price' },
      ];

      const rowData = [
        { make: 'Toyota1', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
      ];

      this.setState(
        {
          columnDefs,
          rowData,
        },
      );
    }

    onRowClicked(row:any) {
      this.setState(
        {
          row,
        },
      );
    }

    render() {
      const { columnDefs, rowData, row } = this.state;
      const { make, model, price } = row;

      return (
        <div
          className="ag-theme-alpine"
          style={
            {
              height: '250px',
              width: '600px',
            }
          }
        >

          <AgGrid
            columnDefs={ columnDefs }
            rowData={ rowData }
            clickHandler={ this.onRowClicked }
          />
          <br />
          <h3 style={ { display: 'inline' } }>
            on clicked:
            { make }&nbsp;/&nbsp;
            { model }&nbsp;/&nbsp;
            { price }
          </h3>
        </div>
      );
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
