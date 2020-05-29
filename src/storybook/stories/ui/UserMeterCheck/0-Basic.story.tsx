import React, { Component } from 'react';

import docs from './docs';
import { UserMeterCheck } from '~/lib';

export const Basic = (props: any) => {
  class Story extends Component {
    handleMeter = (input: string) => {
    };

    render() {
      return (
        <div>
          <UserMeterCheck
            handleMeter={this.handleMeter}
          />
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
  title: 'component|UserMeterCheck',
  component: docs.component,
  parameters: { ...docs.parameters },
};
