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
    const {
      current, limit, totalCnt, clickHandler,
    } = this.props;

    const totalPage = Math.ceil(totalCnt / limit);

    return (
      <Pagination
        activePage={ current }
        totalPages={ totalPage }
        onPageChange={ (event, data) => { clickHandler(data.activePage as number); } }
      />
    );
  }
}

export default PaginationComponent;
