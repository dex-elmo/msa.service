import React, { Component } from 'react';
import { SearchBox, SearchConfig } from '~/lib';
import docs from './docs';

export const Basic = (props: any) => {
  class Story extends Component {
    onSubmit = (data:object) => {
      console.log(data);
    }

    render() {
      const searchArr = [SearchConfig.REGISTERED_BRANCH2, '', SearchConfig.SELECT.WALLET_HISTORY.VALUE, SearchConfig.INPUT.E_Mail_ID];

      return (
        <div>
          <SearchBox searchArr={searchArr} onSubmit={this.onSubmit} />
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
