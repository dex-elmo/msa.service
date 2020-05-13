import React, { Component } from 'react'
import docs from './docs'
//Test
import { Dropdown } from 'semantic-ui-react';
//pagination
import { Pagination } from "~/lib";

const options = [
  { value: '10', text: '10' },
  { value: '20', text: '20' },
  { value: '50', text: '50' },
  { value: '100', text: '100' },
]

interface Props {
  current:number,
  limit:number,
  totalCnt:number,
}

interface States {
  current:number,
  limit:number,
  totalCnt:number,
}

export const basic = (props: any) => {

  class Story extends Component<Props, States> {
    constructor(props:any) {
      super(props);
      this.state = {
        current: 1,
        limit: 10,
        totalCnt: 0,
      };
      this.getCurrent = this.getCurrent.bind(this);
    }

    //Click Event
    getCurrent(current:number){
      this.setState({
        current: current,
      })

      //test
      this.movePage();
    }

    //limit
    onChangeLimit(limit:number){
      this.setState({
        current: 1,
        limit: limit,
      })

      this.movePage();
    }

    //list get method
    movePage(){
      console.log(this.state);
    }

    // view
    componentDidMount(){
      this.setState({
        totalCnt: 523,
      })
    }

    render () {
      return (
        <div>
          Total: {this.state.totalCnt as number}<br/>
          limit:
          <Dropdown
            selection
            defaultValue={'10'}
            options={options}
            onChange={(e, data) => this.onChangeLimit(data.value as number)}
          />
          <br/>
          <Pagination
            current={this.state.current}
            limit={this.state.limit}
            totalCnt={this.state.totalCnt}
            clickHandler={this.getCurrent}
          />
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
