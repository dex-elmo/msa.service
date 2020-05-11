import React, { Component } from 'react'
import docs from './docs'
//Test
import { Dropdown } from 'semantic-ui-react';
//pagination
import { Pagination } from "~/lib";
import * as pagination from '~/lib/ui/module/pagination';

const options = [
  { value: '10', text: '10' },
  { value: '20', text: '20' },
  { value: '50', text: '50' },
  { value: '100', text: '100' },
]

export const basic = (props: any) => {

  class Story extends Component {
    constructor(props:any) {
      super(props);
      this.getCurrent = this.getCurrent.bind(this);
    }

    totalCnt:number = 523;

    //Click Event
    getCurrent(current:number){
      pagination.setCurrent(current);

      //test
      this.movePage(current);
    }

    movePage(current:number){
      console.log("parent function: " + current);
    }

    //limit
    onChangeLimit(limit:number){
      pagination.page(1, limit, this.totalCnt);
    }

    // view
    componentDidMount(){
      pagination.page(1, 10, this.totalCnt);
    }

    render () {
      return (
        <div>
          Total: {this.totalCnt}<br/>
          limit:
          <Dropdown
            selection
            defaultValue={'10'}
            options={options}
            onChange={(e, data) => this.onChangeLimit(data.value as number)}
          />
          <br/>
          <Pagination clickHandler={this.getCurrent} />
        </div>

      )
    }
  }

  return <Story {...props} />
};

basic.story = {
  name: 'Pagination',
};

export default {
  title: 'component|Pagination',
  component: docs.component,
  parameters: { ...docs.parameters },
}
