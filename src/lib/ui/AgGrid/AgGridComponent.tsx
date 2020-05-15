import React, { Component } from "react";
import { AgGridReact } from 'ag-grid-react';
import {observer} from "mobx-react";

//import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

interface Props {
  columnDefs: [],
  rowData: [],
  clickHandler(data:any): void,
}

@observer
class AgGridComponent extends Component<Props> {
  render() {
    return (
      <AgGridReact
        //rowSelection="multiple"
        columnDefs={this.props.columnDefs}
        rowData={this.props.rowData}
        onRowClicked={ e => {this.props.clickHandler(e.data as {})} }
      />
    );
  }
}

export default AgGridComponent;
