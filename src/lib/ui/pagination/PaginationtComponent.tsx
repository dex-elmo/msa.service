import React, { Component } from "react";
import { Pagination } from "semantic-ui-react";
import { PaginationStore, store } from '~/lib/service';
import {observer} from "mobx-react";

interface Props {
  paginationStore?: PaginationStore,
  clickHandler(currPage:number): void,
}

@observer
class PaginationComponent extends Component<Props> {
  render() {
    const { current, totalPage } = store.paginationStore;
    return (
      <Pagination
        activePage={current}
        totalPages={totalPage}
        onPageChange={(event, data) => {this.props.clickHandler(data.activePage as number)}}
      />
    );
  }
}

export default PaginationComponent;
