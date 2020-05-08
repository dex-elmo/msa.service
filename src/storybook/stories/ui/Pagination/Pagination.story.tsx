import React, { Component } from 'react'
import docs from './docs'
import { Pagination } from "~/lib";
import { Dropdown } from 'semantic-ui-react';
import * as pagination from '~/lib/ui/module/pagination';


const options = [
  { value: '10', text: '10' },
  { value: '20', text: '20' },
  { value: '50', text: '50' },
  { value: '100', text: '100' },
]

export const basic = (props: any) => {
  //
  class Story extends Component {

    private limit:number = 10;

    constructor(props:any) {
      super(props);
      this.state = {
        current: 1,
        limit: 10,
        totalCnt: 0,
      };
    }

    //Click Event
    movePage(current:number){
      this.setState((state, props) => ({
        current: current
      }));
    }

    //limit
    onChangeLimit(limit:number){
      this.setState((state, props) => ({
        limit: limit
      }));
      this.limit = limit;
      this.page();
    }

    page(){
      pagination.page(this.state.current, this.limit, this.state.totalCnt);
    }

    // view
    componentDidMount(){
      this.setState((state, props) => ({
        totalCnt: 583
      }));
      this.page();
    }

    render () {
      return (
        <div>
          Total: {this.state.totalCnt}<br/>
          Total: {this.limit}<br/>
          Current: {this.state.current}<br/>
          Limit:
          <Dropdown
            selection
            defaultValue={'10'}
            options={options}
            onChange={(e, data) => this.onChangeLimit(data.value as number)}
          />
          <br/>
          <Pagination clickHandler={this.movePage} />
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
