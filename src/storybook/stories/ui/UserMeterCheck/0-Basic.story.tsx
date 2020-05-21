import React, { Component } from 'react';

import docs from './docs';
import UserMeterCheck from '~/lib/ui/users/UserMeterCheck';

export const Basic = (props: any) => {
  class Story extends Component {
    render() {
      return (
        <div>
          <UserMeterCheck />
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
