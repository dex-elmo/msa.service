import React, { Component } from 'react';

import docs from './docs';
import SharedBirthOfDate from '~/lib/ui/shared/SharedBirthOfDate';

export const Basic = (props: any) => {
  class Story extends Component {
    render() {
      return (
        <div>
          <SharedBirthOfDate />
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
  title: 'component|SharedBirthOfDate',
  component: docs.component,
  parameters: { ...docs.parameters },
};
