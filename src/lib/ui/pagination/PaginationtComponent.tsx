import React, { Component } from 'react';
import { Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

interface Props {
  current:number,
  limit:number,
  totalCnt:number,
  clickHandler(currPage:number): void
}

class PaginationComponent extends Component<Props> {
  render() {
    const totalPage = Math.ceil(this.props.totalCnt / this.props.limit);

    return (
      <Pagination
        activePage={ this.props.current }
        totalPages={ totalPage }
        onPageChange={ (event, data) => { this.props.clickHandler(data.activePage as number); } }
      />
    );
  }
}

export default PaginationComponent;
