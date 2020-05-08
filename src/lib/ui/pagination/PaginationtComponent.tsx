import React, { Component } from "react";
import { Pagination } from "semantic-ui-react";
import { PaginationStore, store } from '~/lib/service';
import {observer} from "mobx-react";

interface Props {
  paginationStore?: PaginationStore,
  clickHandler?: any,
}

@observer
class PaginationComponent extends Component<Props> {
  constructor(props:any) {
    super(props);
    this.clickHandler = this.props.clickHandler.bind(this);
  }

  clickHandler = (current:number) => {}

  render() {
    const { current, totalPage } = store.paginationStore;
    return (
      <Pagination
        defaultActivePage={current}
        totalPages={totalPage}
        onPageChange={(event, data) => {this.clickHandler(data.activePage as number)}}
      />
    );
  }
}

export default PaginationComponent;
