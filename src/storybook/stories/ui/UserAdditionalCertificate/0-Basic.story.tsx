import React, { Component } from 'react';

import docs from './docs';
import UserAdditionalCertificate from '~/lib/ui/users/UserAdditionalCertificate';

export const Basic = (props: any) => {
  class Story extends Component {
    render() {
      return (
        <div>
          <UserAdditionalCertificate />
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
  title: 'component|UserAdditionalCertificate',
  component: docs.component,
  parameters: { ...docs.parameters },
};
