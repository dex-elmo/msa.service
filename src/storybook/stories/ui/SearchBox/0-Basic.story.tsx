import React, { Component } from 'react';
import { SearchBox, SearchConfig } from '~/lib';
import docs from './docs';

/**
 * asd
 */
export const Basic = (props: any) => {
  class Story extends Component {
    onSubmit = (data:object) => {
      console.log(data);
    }

    render() {
      const a = [SearchConfig.EMAIL_INPUT, '', SearchConfig.STATUS, SearchConfig.EMAIL_INPUT];

      return (
        <div>
          <SearchBox arr={a} onSubmit={this.onSubmit} />
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
