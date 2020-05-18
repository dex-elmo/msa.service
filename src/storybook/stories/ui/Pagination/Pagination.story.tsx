import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Pagination } from '~/lib';

import docs from './docs';

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

const options = [
  { value: '10', text: '10' },
  { value: '20', text: '20' },
  { value: '50', text: '50' },
  { value: '100', text: '100' },
];

export const basic = (props: any) => {
  class Story extends Component<Props, States> {
    constructor() {
      super(props);
      this.state = {
        current: 1,
        limit: 10,
        totalCnt: 0,
      };
      this.getCurrent = this.getCurrent.bind(this);
    }

    componentDidMount() {
      this.setState({
        totalCnt: 523,
      });
    }

    onChangeLimit(limit:number) {
      this.setState({
        current: 1,
        limit,
      });

      this.movePage();
    }

    getCurrent(current:number) {
      this.setState({
        current,
      });

      this.movePage();
    }

    movePage() {
      console.log(this.state);
    }

    render() {
      const { current, limit, totalCnt } = this.state;

      return (
        <div>
          Total: { totalCnt as number } <br />
          limit:
          <Dropdown
            selection
            defaultValue={ 10 }
            options={ options }
            onChange={ (e, data) => this.onChangeLimit(data.value as number) }
          />
          <br />
          <Pagination
            current={ current }
            limit={ limit }
            totalCnt={ totalCnt }
            clickHandler={ this.getCurrent }
          />
        </div>
      );
    }
  }

  return <Story { ...props } />;
};

basic.story = {
  name: 'Pagination',
};

export default {
  title: 'component|Pagination',
  component: docs.component,
  parameters: { ...docs.parameters },
};
