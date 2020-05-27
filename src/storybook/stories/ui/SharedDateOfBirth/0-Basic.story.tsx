import React, { Component } from 'react';

import docs from './docs';
import SharedBirthOfDate from '~/lib/ui/shared/SharedBirthOfDate';

export const Basic = (props: any) => {
  class Story extends Component {
    handleBirth = (input: string) => {
    }

    render() {
      return (
        <div>
          <SharedBirthOfDate handleBirth={this.handleBirth} />
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
