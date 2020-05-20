/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - 0-Basic.story.tsx
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */

import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { UserSearch } from '~/lib';

import docs from './docs';

export const Basic = (props: any) => {
  class Story extends Component {
    render() {
      return (
        <div>
          <UserSearch />
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
  title: 'component|UserSearch',
  component: docs.component,
  parameters: { ...docs.parameters },
};
