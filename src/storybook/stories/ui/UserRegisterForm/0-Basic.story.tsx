
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import docs from './docs';
import { UserRegisterForm } from '~/lib';

export const Basic = (props: any) => {
  class Story extends Component {
    render() {
      return (
        <div>
          <UserRegisterForm />
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
  title: 'component|UserRegisterForm',
  component: docs.component,
  parameters: { ...docs.parameters },
};
