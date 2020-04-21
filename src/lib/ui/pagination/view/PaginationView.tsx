import React, { Component } from "react";
import { Pagination } from "semantic-ui-react";

class PaginationView extends Component {

  render() {
    return (
      <Pagination
        //ellipsisItem={"..."}
        //firstItem={"<<"}
        //lastItem={">>"}
        //boundaryRange={3}
        //siblingRange={1}
        //defaultActivePage={this.props.model.currentPage}
        //totalPages={this.props.model.totalPage}
        defaultActivePage={1}
        totalPages={10}
      />
    );
  }
}

export default PaginationView;
