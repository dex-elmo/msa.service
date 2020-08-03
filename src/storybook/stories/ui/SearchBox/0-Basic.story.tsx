import React, { Component } from 'react';
import { SearchBox, SearchConfig } from '~/lib';
import docs from './docs';

export const Basic = (props: any) => {
  class Story extends Component {
    onSubmit = (data:object) => {
      console.log(data);
    }

    render() {
      const searchArr = [SearchConfig.INPUT.DEPOSIT_CODE, '', SearchConfig.STATUS, SearchConfig.REGISTERED_DATE];

      return (
        <div>
          <SearchBox arr={searchArr} onSubmit={this.onSubmit} />
        </div>
      );
    }
  }

  return (
    <div>
      <Story { ...props } />
    </div>
  );
};

Basic.story = {
  name: 'basic',
};

export default {
  title: 'component|SearchBox',
  component: docs.component,
  parameters: { ...docs.parameters },
};
