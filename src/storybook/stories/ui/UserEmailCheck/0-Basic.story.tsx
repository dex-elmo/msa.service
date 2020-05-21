import React, { Component } from 'react';

import docs from './docs';
import UserEmailCheck from '~/lib/ui/users/UserEmailCheck';

export const Basic = (props: any) => {
  class Story extends Component {
    handleEmail = (input:string) => {
      // console.log(input);
    }

    render() {
      return (
        <div>
          <UserEmailCheck handleEmail={this.handleEmail} />
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
  title: 'component|UserEmailCheck',
  component: docs.component,
  parameters: { ...docs.parameters },
};
