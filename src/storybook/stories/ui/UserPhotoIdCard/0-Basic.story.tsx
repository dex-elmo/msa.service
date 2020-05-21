import React, { Component } from 'react';

import docs from './docs';
import UserPhotoIdCard from '~/lib/ui/users/UserPhotoIdCard';

export const Basic = (props: any) => {
  class Story extends Component {
    render() {
      return (
        <div>
          <UserPhotoIdCard />
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
  title: 'component|UserPhotoIdCard',
  component: docs.component,
  parameters: { ...docs.parameters },
};
