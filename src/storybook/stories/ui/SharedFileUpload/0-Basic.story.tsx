import React, { Component } from 'react';

import docs from './docs';
import SharedFileUpload from '~/lib/ui/shared/SharedFileUpload';

export const Basic = (props: any) => {
  class Story extends Component {
    render() {
      return (
        <div>
          <SharedFileUpload />
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
  title: 'component|SharedFileUpload',
  component: docs.component,
  parameters: { ...docs.parameters },
};
