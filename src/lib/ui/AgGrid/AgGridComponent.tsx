import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { observer } from 'mobx-react';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

interface Props {
  columnDefs: { headerName: string; field: string; }[],
  rowData: { make: string; model: string; price: number; }[],
  clickHandler(data:any): void,
}

@observer
class AgGridComponent extends Component<Props> {
  render() {
    const { columnDefs, rowData, clickHandler } = this.props;

    return (
      <AgGridReact
        columnDefs={ columnDefs }
        rowData={ rowData }
        onRowClicked={ (e) => { clickHandler(e.data as {}); } }
      />
    );
  }
}

export default AgGridComponent;
